# TODO

- [ ] Ajouter un bouton partager avec un blurb par défaut

## Contenu & Schéma

- [ ] **Fiches bi-phases (fabrication + animation)** — pour les ateliers comme chamboule-tout qui ont deux modes d'usage :
  - Schéma `config.ts` : ajouter `stepsAnimation` (array, même structure que `steps`) en complément de `steps` (qui devient `stepsFabrication`) — ou ajouter un champ `phase: z.enum(['fabrication', 'animation']).optional()` sur chaque step
  - Template `[slug].astro` : afficher deux sections distinctes "Fabrication" et "Animation" quand les deux sont présents — section Fabrication en premier, Animation ensuite
  - Le générateur de fiches doit produire les deux tableaux de steps séparément selon la phase

## SEO & Accessibilité

- [ ] Ajouter des balises Open Graph (og:title, og:description, og:image) dans Layout.astro
- [ ] Générer une image og:image par atelier (titre + famille en visuel statique)
- [ ] Ajouter `<link rel="canonical">` sur chaque page
- [ ] Créer un sitemap.xml (plugin `@astrojs/sitemap`)
- [ ] Ajouter un robots.txt
- [ ] Vérifier les niveaux de titres (h1 unique par page, hiérarchie h2/h3 cohérente)
- [ ] Ajouter des `alt` descriptifs sur toutes les images
- [ ] Vérifier les contrastes de couleur (WCAG AA) sur les badges et tags
- [ ] Ajouter `aria-label` manquants sur les liens icônes et boutons sans texte visible
- [ ] Tester la navigation clavier (focus visible, ordre de tabulation logique)
- [ ] Ajouter `lang` sur les blocs de code ou termes étrangers si nécessaire
- [ ] Vérifier le comportement sur lecteur d'écran (VoiceOver / NVDA) pour les filtres du catalogue

## Marketing & Impact UX

- [ ] Revoir les wording clés (titres, accrochés, CTAs) avec un regard copywriting — clarté, bénéfice immédiat, ton de voix cohérent
- [ ] Auditer la homepage : est-ce que la valeur ajoutée est claire en moins de 5 secondes ?
- [ ] Renforcer les CTAs (verbes d'action, friction réduite, hiérarchie visuelle claire)
- [ ] Retravailler les descriptions d'ateliers pour mettre en avant le bénéfice animateur (pas juste le contenu)
- [ ] Ajouter des éléments de réassurance (licence CC, gratuit, sans formation préalable) plus visibles
- [ ] Tester différentes formulations pour l'eyebrow / tagline de la homepage
- [ ] Vérifier la cohérence du ton sur toutes les pages (manifesto vs fiches vs ressources)
