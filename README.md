# La Ressourcerie Maker

Commun numérique de fiches pédagogiques maker — libres de droit, prêtes à l'emploi, pour les animateurs et structures qui veulent lancer des ateliers maker sans repartir de zéro.

**→ [la-ressourcerie-maker.netlify.app](https://la-ressourcerie-maker.netlify.app)**

Propulsé par [La Fabrique Mobile](https://github.com/lafabriquemobile) · fablab itinérant · Lyon.

---

## Ce que c'est

La Ressourcerie Maker rassemble des fiches ateliers, des kits de matériel et des ressources pédagogiques pour les **MJC, centres sociaux, médiathèques** et tous les animateurs qui veulent faire fabriquer. Tout le contenu est sous licence ouverte (CC BY-SA 4.0).

Ce n'est pas le site de La Fabrique Mobile — c'est un commun indépendant avec sa propre identité.

---

## Stack

- **[Astro](https://astro.build)** — génération statique (`output: 'static'`)
- **[Netlify](https://netlify.com)** — déploiement continu
- CSS vanilla, mobile-first, breakpoints à 880 px et 1280 px
- Pas de framework JS côté client

---

## Démarrage

```bash
npm install
npm run dev       # http://localhost:4321
```

### Build

```bash
npm run build     # sync contenu + build Astro → dist/
npm run preview   # prévisualiser le build
```

Le build lance d'abord `npm run sync` qui copie les fiches ateliers depuis la source de contenu (voir ci-dessous).

---

## Source de contenu

Les fiches ateliers ne vivent pas dans ce dépôt — elles viennent d'un projet interne à La Fabrique Mobile et propriétaire qui contient la base de connaissance complète.

--

## Structure

```
la-ressourcerie-maker/
├── src/
│   ├── components/
│   │   ├── Nav.astro           # Navigation (mobile + desktop avec dropdown)
│   │   └── Footer.astro        # Pied de page 4 colonnes
│   ├── layouts/
│   │   └── Layout.astro        # Wrapper HTML commun
│   ├── pages/
│   │   ├── index.astro         # Accueil
│   │   ├── a-propos.astro      # À propos
│   │   └── licences.astro      # Licences
│   └── styles/
│       └── global.css          # Tokens + composants CSS
├── public/
│   └── styles/global.css       # Copie de src/styles/ (à synchroniser)
├── astro.config.mjs
├── netlify.toml
├── LICENSE
└── CLAUDE.md                   # Guide pour agents IA
```

---

## Pages

| URL | Page |
|-----|------|
| `/` | Accueil — hero, ateliers à essayer, ressources transversales |
| `/a-propos` | Présentation du projet, pour qui, comment ça marche |
| `/licences` | CC BY-SA 4.0 (contenu) · MIT (code) |
| `/catalogue` | *(à venir)* Grille d'ateliers avec filtres |
| `/ateliers/[slug]` | *(à venir)* Fiche atelier complète |
| `/ressources/[slug]` | *(à venir)* Pédagogie maker, Kit de base, Réemploi |

---

## Licences

| Ce qui est couvert | Licence |
|--------------------|---------|
| Contenu pédagogique (fiches, textes, ressources) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr) |
| Code source (Astro, CSS, scripts) | [MIT](./LICENSE) |

Reprenez, adaptez, partagez — en citant la source et sous la même licence.
