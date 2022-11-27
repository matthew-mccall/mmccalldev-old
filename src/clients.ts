import { Octokit } from "octokit";
import { createApi } from "unsplash-js";

export const octokit = new Octokit({
    auth: import.meta.env.GITHUB_API_PAT,
});

export const unsplash = createApi({
    accessKey: import.meta.env.UNSPLASH_ACCESS_KEY
})