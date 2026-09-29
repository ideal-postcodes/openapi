# Changelog

## 5.1.0 (2026-09-29)

### Minor Changes

- Declare `ApiKey` and `ManagementKey` Bearer security schemes on every operation; authentication docs lead with `Authorization: Bearer`
- Rename the user token to Management Key throughout
- Document licensee update as `POST /keys/{key}/licensees/{licensee}`, the method the API serves
- Cleanse Address documents the `context` parameter for addresses outside the UK
- Document recommended allowed URL formats

### Patch Changes

- Postcode lookup and address search docs no longer list test postcodes
- Use BR8 7RE for example postcodes

## 5.0.2 (2026-09-28)

### Patch Changes

- Add repository and bug tracker links, so the npm page links to the public source at github.com/ideal-postcodes/openapi
- Correct the package licence field and the bundled `LICENSE` file

## 5.0.1 (2026-09-22)

### Patch Changes

- Bump @redocly/cli devDependency to fix a moderate path-traversal advisory in the split command (GHSA-657c-g7qc-r9j2); internal build tooling only, no spec or type changes.

## 5.0.0 (2026-09-17)

### Major Changes

- Addresses are modelled as two flat records: `AddressListItem` (the frozen legacy shape returned by list endpoints such as postcode lookup and address search) and `Address` (the evolving shape returned by single-address lookups, which always carries a `native` property holding the raw source record - `PafAddress`, `MrAddress`, `NybAddress`, `PafaAddress`, `PafwAddress`, `AbAddress`, `AbpAddress`, `UspsAddress` and the international dataset records).
- The flat per-dataset schemas are gone. `PafAddress`, `MrAddress`, `NybAddress`, `AbAddress`, `AbpAddress` and `UspsAddress` now name the raw native records, not flat addresses; `WelshPafAddress`, `PafAliasAddress`, `GbrGlobalAddress` and `UsaGlobalAddress` are removed; `PafBase` is renamed `PafRecordBase`.
- Deprecated type aliases are exported from the package root for the removed names (`WelshPafAddress`, `PafAliasAddress`, `GbrGlobalAddress`, `PafBase`, `UsaGlobalAddress`) so those imports keep compiling - migrate to `AddressListItem`/`Address` at your convenience. Code typed against `PafAddress` or the other reused names should move to `AddressListItem`/`Address` now.
- The specification no longer documents `POST /verify/addresses` or `GET /autocomplete/addresses/{address}/usa`.
- `native` is typed by the new `NativeRecord` schema, a `oneOf` over all 22 dataset records.

### Minor Changes

- Lookup Postcode documents the `context` query parameter and states its coverage: UK and Irish postcodes by default, Dutch and Singapore postcodes with `context` set to `NLD`, `SGP` or `GLOBAL`, plus the datasets each needs and the test postcodes.
- Endpoint descriptions rewritten for Lookup Postcode, Extract Addresses, Cleanse Address, key details, usage, licensee, configuration and sign-up operations; numeric error codes leave the endpoint descriptions in favour of a link to the error codes guide.
- Dataset descriptions rewritten to state what each source provides (AddressBase Core and Premium, HERE, Canada NAR, FOD BOSA, Japan UPU and the other international records); `UpujpAddress` is declared as an object.
- Every operation carries request samples in JavaScript, Python, Ruby and PHP alongside the URL and curl examples, including the key, licensee, config and sign-up endpoints, which previously had none.
- Broken curl samples (missing line continuations, `-G` on POST requests, unquoted `|` characters) are fixed and the insecure `-k` flag is removed throughout.
- The curl sample label is renamed from `CLI` to `curl`.
- Add the `swt` dataset (Switzerland CHE and Liechtenstein LIE) from the Swisstopo official directories of buildings, streets and localities: the `SwtAddress` schema, the `swt` member of the Dataset enum and API key dataset flags, and the `rm` (Romansh) language.

### Patch Changes

- Point the dataset tag schema links at the current record schema names, so the rendered reference at openapi.ideal-postcodes.co.uk resolves them instead of erroring
- Reword the GBR resolve description: the address carries a `native` record with localised detail and is formatted to UK address standards
- Fix typos and formatting in spec descriptions: broken markdown bold in the `paf_post_town` and tags parameter descriptions, missing or incorrect words in the licensee daily-lookups and user token descriptions, and a typo in the outward-code bias description.

## 4.21.0 (2026-08-20)

### Minor Changes

- Document the source IP column on the key usage log CSV, and pick up the
  read-only `premier_support` flag on key details.

## 4.20.0 (2026-07-01)

### Minor Changes

- Add the France BAN (Base Adresse Nationale) dataset: new `BanAddress` schema, `ban` dataset enum value, and `ban` API key flag.

## 4.19.0 (2026-06-23)

### Minor Changes

- Add the AddressBase Premium (`abp`) dataset. A new `AbpAddress` type exposes the full property-level record (BLPU, DPA, classification, ground stability) from Ordnance Survey AddressBase Premium across the address lookup and resolve endpoints, alongside the `abp_address` schema tag and the `abp` API key dataset flag.

### Patch Changes

- Fix the `organisation_name` field description, which incorrectly duplicated the department-name text — it now describes the business or organisation receiving mail at the delivery point. Also corrects a typo in the `department_name` description.

## 4.18.1

### Patch Changes

- The OpenAPI spec's `info.version` now matches the package version (previously hardcoded to 4.11.0). Build-time stamping ensures released specs are always truthful about their version. The rendered API reference and raw specs are published to `openapi.ideal-postcodes.co.uk` on each release via Cloudflare Workers.

## 4.18.0

### Minor Changes

- Add `/sign_up` and `/sign_up/{cli_token}` endpoints covering the CLI signup flow (mint a one-shot `cli_token`, return a prefilled accounts URL, then poll for the user record and first API key).

## 4.14.1 (2025-11-12)

### Patch Changes

- **Release:** Update Austria datapoints

## 4.14.0 (2025-11-10)

### Minor Changes

- **api:** Add dataset filter parameter to autocomplete

## 4.13.0 (2025-10-22)

### Minor Changes

- **Global Address:** Update GBR and USA global address schemas

## 4.12.1 (2025-08-27)

### Patch Changes

- **Redocly:** Migrate to v2

## 4.12.0 (2025-06-09)

### Minor Changes

- **Datasets:** Add new global datasets

## 4.11.0 (2025-06-05)

### Minor Changes

- **OpenAPI:** Update to 4.11.0

## 4.10.1 (2025-01-28)

### Patch Changes

- **Canada:** Fix lon/lat types

## 4.10.0 (2025-01-27)

### Minor Changes

- **Canada:** Add Canadian national address file

## 4.9.2 (2025-01-22)

### Patch Changes

- **Release:** Trigger npm release

## 4.9.1 (2025-01-20)

### Patch Changes

- **Release:** Trigger new release
- **Release:** Update GitHub action

## 4.9.0 (2025-01-20)

### Minor Changes

- **Denmark:** Add SDFI

## 4.8.0 (2024-07-10)

### Minor Changes

- **Language:** Add Assamese (as) language

## 4.7.0 (2024-05-21)

### Minor Changes

- **Verify:** Improve documentation

## 4.6.2 (2024-05-17)

### Patch Changes

- **Keys APIs:** Fix user_token, start and end params

## 4.6.1 (2024-05-16)

### Patch Changes

- **Verify:** Correct field names

## 4.6.0 (2024-05-14)

### Minor Changes

- **Verify:** Add USPS Verification API

## 4.5.0 (2024-04-30)

### Minor Changes

- **Norway:** Add Kartverket dataset

## 4.4.0 (2024-04-29)

### Minor Changes

- **Netherlands:** Add Kadaster

## 4.3.0 (2024-02-19)

### Minor Changes

- **Rest of World:** Add additional countries

### Patch Changes

- **USPS:** Add missing countries

## 4.2.1 (2023-11-29)

### Patch Changes

- **Australia:** Fix GNAF schema

## 4.2.0 (2023-11-29)

### Minor Changes

- **Australia:** Add GNAF dataset

## 4.1.1 (2023-11-02)

### Patch Changes

- **Languages:** Add new supported language

## 4.1.0 (2023-09-05)

### Minor Changes

- **Keys:** Add new keys endpoint

## 4.0.1 (2023-07-07)

### Patch Changes

- **ISO Code:** Update Country and Language Enums

## 4.0.0 (2023-07-07)

### Major Changes

- **OpenAPI:** Some operation IDs (i.e. endpoint identifiers) have been updated to better reflect usage

### Minor Changes

- **OpenAPI:** Add Global Address datasets

## 3.10.0 (2023-04-26)

### Minor Changes

- **Phone:** Separate live carrier information

## 3.9.6 (2023-03-15)

### Patch Changes

- **PAF:** Extends Postcode Type

## 3.9.5 (2023-03-14)

### Patch Changes

- **AB:** Require id and dataset

## 3.9.4 (2023-03-14)

### Patch Changes

- **AB Core:** Add ID and dataset fields

## 3.9.3 (2023-03-14)

### Patch Changes

- **AB Core:** Add country iso

## 3.9.2 (2023-03-13)

### Patch Changes

- **AB Core:** UPRNs delivered as strings

## 3.9.1 (2023-03-13)

### Patch Changes

- **AB Core:** Add to AB Core to UK endpoints

## 3.9.0 (2023-03-10)

### Minor Changes

- **AB Core:** Add AddressBase core

## 3.8.0 (2023-01-26)

### Minor Changes

- **Cleanse:** Add GBR cleanse API

## 3.7.1 (2023-01-20)

### Patch Changes

- **Datasets:** Add new dataset attributes

## 3.7.0 (2023-01-18)

### Minor Changes

- **Phone:** Add carrier information to response payload

## 3.6.0 (2023-01-10)

### Minor Changes

- **Eircode:** Add Eircode to postcode lookup

## 3.5.1 (2022-12-28)

### Patch Changes

- **Phone:** Fix typo in URL

## 3.5.0 (2022-12-16)

### Minor Changes

- **Phone:** Add phone validation

## 3.4.0 (2022-12-08)

### Minor Changes

- **Email:** Email verification endpoint

## 3.3.0 (2022-10-26)

### Minor Changes

- **Places:** Expose places API

### Patch Changes

- **Geonames:** Add native data attribute
- **Geonames:** Allow sub admins to be nullable
- **Geonames:** Nullable dem and elevation
- **Geonames:** Require country in suggestion
- **Places:** Fix typo

## 3.2.0 (2022-08-17)

### Minor Changes

- **Global Addresses:** Add native address formats

### Patch Changes

- **ApiKey:** Add required attrs

## 3.1.0 (2022-07-19)

### Minor Changes

- **Attributes:** Add Language, Country and County Codes

## 3.0.0 (2022-06-07)

### Major Changes

- **3.0.0:** UK Address Suggestion formats for PAF, MR, NYB and PAFW have been merged into one suggestion type for the UK
- Rename `GlobalAddressSuggestion` to `AddressSuggestion`

### Minor Changes

- **3.0.0:** API & Dataset Updates
- **GBR:** Add reverse geocoding parameters
- **PAF Alias:** Add PAF Alias

## 2.1.1 (2022-05-03)

### Patch Changes

- **Spec:** Bump version

## 2.1.0 (2022-05-03)

### Minor Changes

- **UK:** Add Welsh PAF responses

## 2.0.1 (2022-04-21)

### Patch Changes

- **Exports:** Include TS file in package

## 2.0.0 (2022-04-20)

### Major Changes

- **Intl Address:** Major version bump as a precaution. API paths have been retagged and reorganised. This should not cause a change in functionality but we have noticed changes of this type can sometimes produce a backwards incompatible change in API interface if this package is consumed by a code generator.
- **Intl Address:** Reorganise for international addresses

## 1.2.0 (2022-04-05)

### Minor Changes

- **Mocks:** Embed mock server
- **USPS:** Resolve addresses formated to US spec

### Patch Changes

- **USPS:** Add country
- **USPS:** Add dual data types
- **USPS:** Add USPS schema definitions
- **USPS:** Narrow USPS typings
- **USPS:** Update definitions

## 1.1.0 (2022-02-08)

### Minor Changes

- **USPS:** Add USPS typings
- **Version:** Release beta branch

### Patch Changes

- **Keys API:** Fix typo
- **Postcodes:** Enforce union type for postcodes response

## 1.0.2 (2021-09-28)

### Patch Changes

- **Params:** tags, datasets

## 1.0.1 (2021-09-21)

### Patch Changes

- **Dependant:** Dependent => Dependant

## 1.0.0 (2021-08-30)

### Major Changes

- **Rewrite:** Full OpenAPI spec served from `dist/`

### Minor Changes

- **Rewrite:** Rewrite OpenAPI Spec
- **Typings:** Ship OpenAPI typings

## 0.x

### Patch Changes

- Fix error response schema on `/postcodes/:postcode`

## 0.0.1 (2019-04-16)

### Patch Changes

- Initial release
