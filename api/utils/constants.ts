export const AGENCIES_TABLE =
  'handson_central_ohio__community_services_agencies';

export const CATEGORIES_TABLE =
  'handson_central_ohio__handson_central_ohio_agency_subcategory_terms';

export const SCOS_HOST =
  process.env.SCOS_HOST || 'https://data.smartcolumbusos.com';

export const LOG_LEVEL = process.env.LOG_LEVEL || 'error';

export const PORT = process.env.PORT || 8000;

export const ENV = process.env.ENV || 'local';

export const IS_TESTING = process.env.NODE_ENV === 'test';
