# La Ressourcerie Maker — CLAUDE.md

Plateforme communautaire ouverte pour partager la culture maker à travers des ateliers clés en main et des ressources utiles. Destinée aux animateurs, éducateurs et structures culturelles (MJC, centres sociaux, médiathèques) qui veulent lancer des ateliers maker.

Propulsée par **La Fabrique Mobile** — qui apparaît discrètement en bas de page. Ce n'est pas le site de LFM : c'est un commun numérique indépendant, avec sa propre identité.

---

## Source de contenu

Tout le contenu (ateliers, fiches pédagogiques, ressources) provient du projet :

**`../generateur-fiche-pedagogique`**

Ce projet contient :
- `catalogue/` — fiches d'ateliers génériques (carton, kermesse, machines, médiation, beaverbot)
- `analyses/` — référentiels pédagogie, matériaux, publics, thématiques, contextes
- `activites/` — formats d'animation (atelier, stage, événementiel, kermesse, réemploi…)
- `contextes/` — profils de structures (MJC, centre social, médiathèque…)

Le `catalogue/kermesse/chamboule-tout.md` est l'atelier pilote de cette plateforme.

La classification des ateliers est héritée du projet source :
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
- **CSS** global dans `src/styles/global.css` (copié aussi dans `public/styles/global.css`)
- Pas de framework JS côté client — HTML statique pur

---

## Structure du projet

```
la-ressourcerie-maker/
├── CLAUDE.md                      # Ce fichier
├── astro.config.mjs               # output: static, site: https://la-ressourcerie-maker.netlify.app
├── netlify.toml                   # build command + publish = dist
├── public/
│   └── styles/global.css          # Copie du CSS global (synchroniser avec src/styles/)
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
| Ressources | `src/pages/ressources/[slug].astro` | Pédagogie maker · Kit de base · Thématique réemploi |

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

## Conventions

- **`public/styles/global.css` doit rester synchronisé** avec `src/styles/global.css` — copier manuellement après chaque modification CSS.
- Les pages Astro importent `Nav` et `Footer` comme composants — ne pas dupliquer la nav/footer en inline.
- Le contenu des ateliers vient du projet source (`generateur-fiche-pedagogique`), pas inventé ici.
