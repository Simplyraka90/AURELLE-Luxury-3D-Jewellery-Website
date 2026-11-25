# AURELLE — luxury jewellery showroom
An independent fictional portfolio concept developed by [Rachix Studio](https://rachixstudioweb.vercel.app/).

## Start
Use Node.js 22 LTS. In this folder run `npm install`, then `npm run dev`. Open http://localhost:3000. For checks run `npm run typecheck` and `npm run build`. Deploy to Vercel as a Next.js project. GitHub Actions runs both checks on push.

## Experience
The homepage uses a CSS sticky scroll track and persistent React Three Fiber canvas. Scroll or select a stage. Native scroll position drives a reversible explosion; GSAP ScrollTrigger refreshes progress without DOM pinning. The configurator supports orbit controls, metal and gemstone color, ring settings, size scale, band thickness, gem scale, engraving order note, finish, explosion, reset and fullscreen. Necklace is an independently selectable procedural model. Geometry is illustrative, not CAD or certified gemstone optics. Images are original AI-generated concept product images stored locally as WebP.

## Commerce
Catalog, wishlist, cart, orders and inquiries persist in browser storage using Zustand. Prices and stock are fictional. The `/admin` route manages catalog, stock, orders and inquiries. No secure admin login, payment provider, real order dispatch, email delivery or backend database. Use sample information only. Newsletter saves locally. Clear browser site data to reset.

## Limitations
No authentic GLB required; procedural Three.js geometry is used. Advanced refraction/dispersion, exact jewellery engineering, full chain physics, component-specific camera choreography, design reference upload, account authentication, cart drawer, discount codes, review moderation, verified reviews and production payment/email integration are not implemented. The demo is intentionally noindex. Framer Motion animates stage copy and Lenis is limited to non-home routes. React Three Drei is declared but the viewer uses native OrbitControls and Three.js environment generation instead of nested React DOM roots. Typography uses local system serif/sans fonts. Product detail links to a generic illustrative ring/necklace configurator rather than exact models for every product. No 3D models for earrings/bracelets. Test on mobile and desktop before deployment; performance targets are not certified.

## V2 responsive and animation update
- Native scroll progress uses the actual sticky offset and measured track length, with a single requestAnimationFrame callback and resize observation. Lenis remains off on the home page and touch devices.
- Six manual stages remain available; short viewports and reduced-motion preferences use a non-pinned, manually controlled layout.
- Camera distance adapts to canvas aspect ratio; scroll and explosion motion use frame-rate-independent damping. Mobile rendering uses simpler gemstone materials and capped pixel density.
- Responsive CSS covers 320px phones, landscape, tablets and desktop, including the navigation, collection grid, configurator, cart, forms and footer. Actual browser/device coverage and frame rate still require testing.
