# La Ressourcerie Maker — CLAUDE.md

Plateforme communautaire ouverte pour partager la culture maker à travers des ateliers clés en main et des ressources utiles. Destinée aux animateurs, éducateurs et structures culturelles (MJC, centres sociaux, médiathèques) qui veulent lancer des ateliers maker.

Propulsée par **La Fabrique Mobile** — qui apparaît discrètement en bas de page. Ce n'est pas le site de LFM : c'est un commun numérique indépendant, avec sa propre identité.

> **Dépôt public** — ce repo est hébergé sur Framagit et ouvert. Ne jamais commettre de chemins absolus de machine locale, de données personnelles ou de contenus issus de projets internes LFM non publiés.

---

## Source de contenu

Tout le contenu (ateliers, fiches pédagogiques, ressources) provient de la **base de connaissances interne de LFM** — un projet privé non publié dans ce dépôt.

La base de connaissances contient :
- `catalogue/` — fiches d'ateliers génériques (carton, kermesse, machines, médiation, beaverbot)
- `analyses/` — référentiels pédagogie, matériaux, publics, thématiques, contextes
- `activites/` — formats d'animation (atelier, stage, événementiel, kermesse, réemploi…)
- `contextes/` — profils de structures (MJC, centre social, médiathèque…)

Le `catalogue/kermesse/chamboule-tout.md` est l'atelier pilote de cette plateforme.

La classification des ateliers est héritée de la base de connaissances :
- 🟢 **Classique** — atelier éprouvé, connu dans le milieu maker
- 🟣 **Original** — atelier différenciant, moins commun

---

## Identité visuelle

- **Palette** : kraft `#B89065`, crème `#FBF5E9`, terracotta `#C2562F`, vert mousse `#6B7F4A`, accent orange LFM `#E8611A` (utilisé avec parcimonie)
- **Typographie** : DM Sans (display + corps) · DM Mono (labels)
- **Ambiance** : artisanal, chaleureux, concret. Bordures dessinées, badges "collés", texture kraft subtile.

---

## Stack technique

- **Astro** (`output: 'static'`) — génération statique
- **Netlify** — déploiement via `netlify.toml` (`npm run build` → `dist/`)
- **CSS** global dans `src/styles/global.css` — importé via frontmatter dans `Layout.astro`
- Pas de framework JS côté client — HTML statique pur

---

## Structure du projet

```
la-ressourcerie-maker/
├── CLAUDE.md                      # Ce fichier
├── astro.config.mjs               # output: static, site: https://la-ressourcerie-maker.netlify.app
├── netlify.toml                   # build command + publish = dist
├── public/                        # Assets statiques (images, fonts…)
└── src/
    ├── components/
    │   ├── Nav.astro              # Nav mobile (hamburger) + desktop (menu horizontal + dropdown Ressources)
    │   └── Footer.astro           # Footer 4 colonnes, mention LFM discrète
    ├── layouts/
    │   └── Layout.astro           # Wrapper HTML, charge global.css + Google Fonts
    ├── pages/
    │   └── index.astro            # Homepage : hero, manifesto, ateliers à essayer, ressources transversales
    └── styles/
        └── global.css             # Tous les tokens + composants CSS. Mobile-first, breakpoints 880px et 1280px
```

### Pages prévues (à créer)

| Page | Fichier Astro | Description |
|------|--------------|-------------|
| Catalogue | `src/pages/catalogue.astro` | Grille d'ateliers avec filtres (public, durée, matériel) |
| Fiche atelier | `src/pages/ateliers/[slug].astro` | Fiche complète : accroche, tableau "en un coup d'œil", étapes, déclinaisons |
| Ressources | `src/pages/ressources/[slug].astro` | Pédagogie maker · Kit de base · Le réemploi |

---

## Composants CSS clés

| Classe | Rôle |
|--------|------|
| `.wcard` | Carte atelier (image, badges, tags public/durée) |
| `.badge--classique` / `.badge--original` | Badge type d'atelier |
| `.tag--reuse` | Tag réemploi ♻ |
| `.resource-card` | Encart ressource (icône + titre + desc) |
| `.hero` | Section hero homepage (2 colonnes sur desktop) |
| `.manifesto__inner` | Bloc parti pris (2 colonnes sur desktop) |
| `.resources__inner` | Section ressources (sidebar sticky + grille 3 col sur desktop) |
| `.glance__rows` | Tableau "en un coup d'œil" (4 colonnes sur desktop) |
| `.steps-section__grid` | Grille étapes (2 colonnes sur desktop) |
| `.declinaisons__list` | Déclinaisons (3 colonnes sur desktop) |

---

## Sélection de la une — "Ateliers à essayer"

La homepage affiche 3 ateliers sélectionnés automatiquement **au moment du build** (pas de JS runtime). La logique est dans `src/pages/index.astro`.

### Champs frontmatter requis sur chaque atelier

```yaml
saisons: [printemps, été]   # printemps | été | automne | hiver  (tableau, plusieurs valeurs possibles)
occasions: [kermesse, fetes] # kermesse | fetes | halloween | noel | paques | stem | reemploi | intergenerationnel
```

### Mapping mois → saison + occasions prioritaires

| Mois | Saison | Occasions |
|------|--------|-----------|
| Janvier | hiver | intergenerationnel |
| Février | hiver | intergenerationnel |
| Mars | printemps | stem |
| Avril | printemps | paques, fetes |
| Mai | printemps | fetes, kermesse |
| Juin | été | kermesse, fetes, reemploi |
| Juillet | été | kermesse |
| Août | été | kermesse |
| Septembre | automne | reemploi |
| Octobre | automne | halloween |
| Novembre | automne | reemploi |
| Décembre | hiver | noel |

### Scoring (trié desc, fallback sur les derniers ajoutés)

- `saisons` contient la saison courante → +2 pts
- `occasions` contient une occasion courante → +3 pts

### Règle de fallback

Si moins de 3 ateliers scorent > 0, compléter avec les ateliers restants dans l'ordre du catalogue. Si le catalogue a moins de 3 ateliers, afficher des cartes "Bientôt" pour les emplacements vides.

---

## Conventions

- Les pages Astro importent `Nav` et `Footer` comme composants — ne pas dupliquer la nav/footer en inline.
- Le contenu des ateliers vient de la base de connaissances interne LFM — pas inventé ici, pas à dupliquer dans ce dépôt.
- Ne jamais écrire de chemins absolus de machine locale dans ce dépôt (ni dans le code, ni dans la doc).
