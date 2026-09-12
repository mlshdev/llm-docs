> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/get-supported-countries-or-regions](https://developer.apple.com/documentation/apple_ads/get-supported-countries-or-regions)

# Get Supported Countries or Regions

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches supported languages and language codes.

## URL

```http
GET https://api.searchads.apple.com/api/v5/countries-or-regions
```

## Query Parameters

- `countriesOrRegions` — `string`: Filters by ISO alpha-2 country codes using one or more comma-separated values. For example, use `https://api.searchads.apple.com/api/v5/countries-or-regions?countriesOrRegions=US` for a single country or region, or `https://api.searchads.apple.com/api/v5/countries-or-regions?countriesOrRegions=US,` `MX` for multiple countries or regions.

## Response Codes

- `200` OK — `CountriesOrRegionsListResponse`: If the call succeeds, the API returns the [CountriesOrRegionsListResponse](countriesorregionslistresponse.md) object in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`: An invalid query or missing required parameters.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to fetch supported product page languages for countries or regions.

<a id="Payload-example-1-Get-supported-countries-or-regions"></a>

### Payload example 1: Get supported countries or regions

**Request**

```
GET https://api.searchads.apple.com/api/v5/countries-or-regions?countriesOrRegions=US,AU,GB,CA
```

**Response**

```json
{
   "data": [
        {
            "countryOrRegion": “US”,
            "supportedLanguages": [
                {
                    "language": "en",
                    "languageCode": "en-US"
                },
                {
                    "language": “es”,
                    "languageCode": "es-MX"
                }
            ],
            "defaultLanguage": {
                "language": "en",
                "languageCode": "en-US"
            }
        },
        {
            "countryOrRegion": "AU",
            "supportedLanguages": [
                {
                    "language": "en",
                    "languageCode": "en-AU"
                },
                {
                    "language": "en",
                    "languageCode": "en-GB"
                }
            ],
            "defaultLanguage": {
                "language": "en",
                "languageCode": "en-AU"
            }
        },
        {
            "countryOrRegion": "GB",
            "supportedLanguages": [
                {
                    "language": "en",
                    "languageCode": "en-GB"
                }
            ],
            "defaultLanguage": {
                "language": "en",
                "languageCode": "en-GB"
            }
        },
        {
            "countryOrRegion": "CA",
            "supportedLanguages": [
                {
                    "language": "en",
                    "languageCode": "en-CA"
                },
                {
                    "language”: "fr",
                    "languageCode": "fr-CA"
                }
            ],
            "defaultLanguage": {
                "language": "en",
                "languageCode": "en-CA"
            }
        }
    ]
}
```

<a id="Payload-example-2-Get-supported-countries-or-regions"></a>

### Payload example 2: Get supported countries or regions

**Request**

```
GET https://api.searchads.apple.com/api/v5/countries-or-regions?countriesOrRegions=CA
```

**Response**

```json
{
  "countryOrRegion": "CA",
  "supportedLocales": [
    {
      "language": "en",
      "languageCode": "en-CA"
    },
    {
      "language": "fr",
      "languageCode": "fr-CA"
    }
  ],
  "defaultLanguages": [
    {
      "language": "en",
      "languageCode": "en-CA"
    },
    {
      "language": "fr",
      "languageCode": "fr-CA"
    }
  ]
}
```

## See Also

### Product Page Endpoints

- [Get Product Pages](get-product-pages.md): Fetches metadata of all your custom product pages.
- [Get Product Pages by Identifier](get-product-pages-by-identifier.md): Fetches metadata for a specific product page.
- [Get Product Page Locales](get-product-page-locales.md): Fetches product page locales by identifier.
- [Get App Preview Device Sizes](get-app-preview-device-sizes.md): Fetches supported app preview device-size mappings.
