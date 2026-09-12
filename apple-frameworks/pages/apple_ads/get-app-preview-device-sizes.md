> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/get-app-preview-device-sizes](https://developer.apple.com/documentation/apple_ads/get-app-preview-device-sizes)

# Get App Preview Device Sizes

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches supported app preview device-size mappings.

## URL

```http
GET https://api.searchads.apple.com/api/v5/creativeappmappings/devices
```

## Response Codes

- `200` OK — `AppPreviewDevicesMappingResponse`: If the call succeeds, the API returns the [AppPreviewDevicesMappingResponse](apppreviewdevicesmappingresponse.md) object in the response payload with an HTTP status code of `200(OK)`.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

## Mentioned In

- [Creative Sets](creative-sets.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to return a complete list of supported app preview device-size mappings.

<a id="Payload-example-Get-app-preview-device-sizes"></a>

### Payload example: Get app preview device sizes

**Request**

```
GET https://api.searchads.apple.com/api/v5/creativeappmappings/devices
```

**Response**

```json
{
    "ipadPro": "iPad 12.9",
    "iphone6+": "iPhone 5.5",
    "iphone_5_8": "iPhone 5.8",
    "iphone5": "iPhone 4",
    "iphone6": "iPhone 4.7",
    "ipadPro_2018": "iPad 11",
    "ipad": "iPad 9.7",
    "iphone_6_5": "iPhone 6.5",
    "ipad_10_5": "iPad 10.5"
}
```

## See Also

### Product Page Endpoints

- [Get Product Pages](get-product-pages.md): Fetches metadata of all your custom product pages.
- [Get Product Pages by Identifier](get-product-pages-by-identifier.md): Fetches metadata for a specific product page.
- [Get Product Page Locales](get-product-page-locales.md): Fetches product page locales by identifier.
- [Get Supported Countries or Regions](get-supported-countries-or-regions.md): Fetches supported languages and language codes.
