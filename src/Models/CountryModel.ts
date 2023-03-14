export interface CountryModel {
  name:         Name;
  independent:  boolean;
  status:       string;
  unMember:     boolean;
  currencies:   Currencies;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  languages:    Languages;
  area:         number;
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  postalCode:   PostalCode;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface Currencies {
  DOP: Dop;
}

interface Dop {
  name:   string;
  symbol: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Languages {
  spa: string;
}

interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

interface NativeName {
  spa: SPA;
}

interface SPA {
  official: string;
  common:   string;
}

interface PostalCode {
  format: string;
  regex:  string;
}