# Ideal Postcodes OpenAPI

OpenAPI 3 specification for [api.ideal-postcodes.co.uk](https://api.ideal-postcodes.co.uk), with TypeScript types generated from it. Published to npm as [`@ideal-postcodes/openapi`](https://www.npmjs.com/package/@ideal-postcodes/openapi).

## Links

- [API reference](https://openapi.ideal-postcodes.co.uk), rendered from this spec
- Raw spec: [openapi.json](https://openapi.ideal-postcodes.co.uk/openapi.json), [openapi.yaml](https://openapi.ideal-postcodes.co.uk/openapi.yaml)
- [Documentation](https://docs.ideal-postcodes.co.uk)
- [Changelog](./CHANGELOG.md)

## Install

```bash
npm install @ideal-postcodes/openapi
```

## Use

```ts
import type { paths, components } from "@ideal-postcodes/openapi";

type Address = components["schemas"]["Address"];
type LookupPostcode = paths["/postcodes/{postcode}"]["get"];
```

The spec files ship inside the package at `node_modules/@ideal-postcodes/openapi/dist/openapi.json` and `dist/openapi.yaml`.

## Files

- `openapi.json`, `openapi.yaml`: the specification, stamped with the released version
- `openapi.ts`: types generated with openapi-typescript. Not hand-edited
- `aliases.ts`, `index.ts`: hand-written type aliases and the package entry point

## Source

This repository is a read-only release mirror. Each tag matches the npm version and adds one commit. There is no build here; the npm package carries the compiled output.

The spec is generated from the API source, so pull requests against these files cannot be merged directly. Open an issue or a pull request and a maintainer will apply the change upstream and release it.

For anything involving your account, keys or sensitive data, email support@ideal-postcodes.co.uk rather than opening an issue.

## Licence

See [LICENSE](./LICENSE).
