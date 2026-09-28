// Deprecated aliases for schema names removed in the v5 spec. The per-dataset
// flat GB address shapes collapsed into two merged records: `AddressListItem`
// (the frozen legacy shape returned by the list endpoints - what the removed
// names described) and `Address` (the evolving shape with a required `native`
// record). The PAF record base was renamed `PafRecordBase`. Hand-authored -
// openapi.ts is generated and must not carry edits.
//
// No alias is kept for a name the v5 spec reuses for a native record
// (`PafAddress`, `MrAddress`, `NybAddress`, `AbAddress`, `AbpAddress`,
// `UspsAddress`): those now type the raw dataset record under
// `components["schemas"]`, a different shape from the flat address they
// used to name, and an alias would hide that.
import type { components } from "./openapi.js";

type Schemas = components["schemas"];

export type Address = Schemas["Address"];
export type AddressListItem = Schemas["AddressListItem"];

/** @deprecated Use `AddressListItem` (`components["schemas"]["AddressListItem"]`). */
export type WelshPafAddress = AddressListItem;
/** @deprecated Use `AddressListItem` (`components["schemas"]["AddressListItem"]`). */
export type PafAliasAddress = AddressListItem;
/** @deprecated Use `AddressListItem` (`components["schemas"]["AddressListItem"]`). */
export type GbrGlobalAddress = AddressListItem;
/** @deprecated Use `components["schemas"]["PafRecordBase"]`. */
export type PafBase = Schemas["PafRecordBase"];

/**
 * Flat USA address as served by `/autocomplete/addresses/{address}/usa`.
 *
 * The spec does not document this endpoint; the API continues to serve it and
 * the address-finder USA mode consumes it. Hand-typed to the served shape.
 */
export interface UsaAddress {
  id: string;
  dataset: string;
  country: string;
  country_iso: string;
  country_iso_2: string;
  language: string;
  primary_number: string;
  secondary_number: string;
  plus_4_code: string;
  line_1: string;
  line_2: string;
  last_line: string;
  zip_code: string;
  zip_plus_4_code: string;
  update_key_number: string;
  record_type_code: string;
  carrier_route_id: string;
  street_pre_directional_abbreviation: string;
  street_name: string;
  street_suffix_abbreviation: string;
  street_post_directional_abbreviation: string;
  building_or_firm_name: string;
  address_secondary_abbreviation: string;
  base_alternate_code: string;
  lacs_status_indicator: string;
  government_building_indicator: string;
  state_abbreviation: string;
  state: string;
  municipality_city_state_key: string;
  urbanization_city_state_key: string;
  preferred_last_line_city_state_key: string;
  county: string;
  city: string;
  city_abbreviation: string;
  preferred_city: string;
  city_state_name_facility_code: string;
  zip_classification_code: string;
  city_state_mailing_name_indicator: string;
  carrier_route_rate_sortation: string;
  finance_number: string | number;
  congressional_district_number: string | number;
  county_number: string | number;
}

/** @deprecated Use `UsaAddress`. */
export type UsaGlobalAddress = UsaAddress;
