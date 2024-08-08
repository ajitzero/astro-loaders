import { defineCollection } from "astro:content";
import { feedLoader } from "@ascorbic/feed-loader";

const releases = defineCollection({
  loader: feedLoader({
    url: "https://github.com/withastro/astro/releases.atom",
  }),
});

const podcasts = defineCollection({
  loader: feedLoader({
    url: "https://feeds.99percentinvisible.org/99percentinvisible",
  }),
});

export const collections = { releases, podcasts };
