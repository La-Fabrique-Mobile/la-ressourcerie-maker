# Contribuer à La Ressourcerie Maker

La Ressourcerie Maker est un commun numérique — elle vit de ce que ses utilisateurs y apportent. Merci de vouloir contribuer.

---

## 3 façons de contribuer

### 1. Signaler un problème

Une erreur dans une fiche, un lien cassé, une information périmée, un bug d'affichage :

→ **[Ouvrir une issue sur Framagit](https://framagit.org/la-fabrique-mobile/la-ressourcerie-maker/-/issues/new)**

Décrivez en quelques lignes : ce qui ne va pas, où vous l'avez vu, ce que vous attendiez. Pas besoin de plus.

### 2. Proposer un atelier ou une ressource

Vous animez des ateliers maker et vous avez une fiche qui tourne bien ? Une thématique manquante ?

→ **Ouvrez une issue** avec le tag `[proposition]`, ou **écrivez-nous** : bonjour.lafabriquemobile@gmail.com

Avant d'envoyer, vérifiez que votre contribution :
- est testée en conditions réelles (pas uniquement théorique)
- est adaptable à différents publics (ou décrit précisément son public cible)
- peut être publiée sous licence **CC BY-SA 4.0**

On s'occupe de la mise en forme technique (fichier Markdown structuré, fiche PDF si besoin). Votre rôle : le contenu.

### 3. Améliorer le code

La plateforme tourne sur **Astro** (génération statique), CSS vanilla, zéro framework JS côté client. Accessible aux débutants comme aux développeurs expérimentés.

```
1. Fork le dépôt
2. Crée une branche : git checkout -b fix/nom-du-fix
3. Fais tes modifications
4. Ouvre une Merge Request avec une description claire
```

---

## Processus de contribution (contenu)

```
Contact initial   →   Discussion du format   →   Intégration technique   →   Publication avec crédit
```

1. **Contact initial** — mail ou issue Framagit. On répond dans la semaine.
2. **Discussion** — format, public cible, intégration dans le catalogue.
3. **Intégration** — on transforme votre contenu en fichier Markdown structuré (`src/content/ateliers/` ou `src/pages/ressources/`).
4. **Publication** — la contribution est publiée sous CC BY-SA 4.0 avec mention de la source et de l'auteur·ice.

---

## Structure du contenu

Les fiches d'ateliers sont des fichiers Markdown dans `src/content/ateliers/`. Une fiche minimale contient :

```yaml
---
titre: Nom de l'atelier
accroche: "Une phrase d'accroche"
famille: kermesse          # kermesse | carton | machines | mediation | beaverbot
classification: classique  # classique | original
public: "Tout public · 6 ans+"
duree: "1h30"
materiel: "Récup' · zéro machine"
niveau: "⭐ Débutant"
reemploi: true
steps:
  - titre: "Étape 1"
    corps: "Description"
    temps: "10 min"
    outils: ["Outil 1", "Outil 2"]
---

## Adaptations

[Contenu libre en Markdown]

## Sécurité

[Consignes de sécurité]
```

---

## Conventions

- **Langue** : français
- **Ton** : concret, sans jargon inutile, accessible à un animateur sans formation technique
- **Licence** : tout contenu accepté sera publié sous [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)
- **Crédit** : votre nom ou celui de votre structure sera mentionné sur la fiche si vous le souhaitez
- **Pas de contenu commercial** : la Ressourcerie est un commun non commercial

---

## Ce qu'on ne gère pas (pour l'instant)

- Traductions
- Fiches nécessitant du matériel très spécifique ou onéreux sans alternative réemploi
- Contenus non testés avec un public réel

---

## Contact

**Mail** : bonjour.lafabriquemobile@gmail.com  
**Issues** : https://framagit.org/la-fabrique-mobile/la-ressourcerie-maker/-/issues  
**Dépôt** : https://framagit.org/la-fabrique-mobile/la-ressourcerie-maker

---

*La Ressourcerie Maker est propulsée par [La Fabrique Mobile](https://lafabriquemobile.fr).*
