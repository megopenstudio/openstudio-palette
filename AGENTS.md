<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

- Keep the public studio website as one editorial page with section anchors; its content is one continuous introduction to the practice.
- Serve all portfolio media and the logo from `public/assets/` as plain static files (Lovable CDN URLs don't resolve on GitHub Pages); generated artwork stays as imported images.
- Define the studio's visual styles in the global design system and use shared Button variants for interactive controls.
- Keep publication previews as a curated set of verified canonical article links; do not imply a live feed without implementing one.
- Rotate hero words client-side within a fixed-size text grid and stop rotation for reduced-motion preferences, avoiding layout shifts and unnecessary motion.
- Build as a fully static site: only "/" is prerendered and the upload folder is dist/client, because the site is hosted on GitHub Pages.
