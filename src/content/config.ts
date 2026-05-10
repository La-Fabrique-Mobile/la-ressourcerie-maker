import { z, defineCollection } from 'astro:content';

const ateliers = defineCollection({
  type: 'content',
  schema: z.object({
    titre: z.string(),
    accroche: z.string(),
    famille: z.enum(['kermesse', 'carton', 'machines', 'mediation', 'beaverbot']),
    classification: z.enum(['classique', 'original']),
    public: z.array(z.enum(['enfants', 'ados', 'adultes', 'famille'])),
    duree: z.array(z.enum(['flux-ouvert', 'atelier', 'stage'])),
    difficulte: z.enum(['debutant', 'intermediaire', 'avance']),
    materiel: z.string().optional(),
    machines: z.array(z.string()).default(['aucune']),
    reemploi: z.boolean().default(false),
    fiche_pdf: z.string().optional(),
    steps: z.array(z.object({
      titre: z.string(),
      corps: z.string(),
      temps: z.string().optional(),
      outils: z.array(z.string()).default([]),
    })).optional(),
    declinaisons: z.array(z.object({
      kind: z.enum(['reuse', 'time', 'age', 'context', 'theme']),
      titre: z.string(),
      corps: z.string(),
    })).optional(),
    adaptations: z.array(z.object({
      kind: z.enum(['age', 'group', 'weather', 'location', 'theme']),
      titre: z.string(),
      corps: z.string(),
    })).optional(),
    securite: z.array(z.object({
      titre: z.string(),
      corps: z.string(),
    })).optional(),
    saisons: z.array(z.enum(['printemps', 'été', 'automne', 'hiver'])).optional(),
    occasions: z.array(z.string()).optional(),
  }),
});

export const collections = { ateliers };
