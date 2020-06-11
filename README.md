# crayon-transition
crayon-transition variant of https://github.com/alshdavid/crayon

# pnpm

```
# pnpfile.js
function readPackage(pkg) {
    if (pkg.dependencies['crayon-transition']) {
        pkg.dependencies['crayon-transition'] = 'malikbenkirane/crayon-transition'
    }
    return pkg
}
```
