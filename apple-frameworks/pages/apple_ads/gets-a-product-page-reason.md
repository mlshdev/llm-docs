> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/gets-a-product-page-reason](https://developer.apple.com/documentation/apple_ads/gets-a-product-page-reason)

# Get Ad Creative Rejection Reasons

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches ad creative rejection reasons by custom product page ID.

## URL

```http
GET https://api.searchads.apple.com/api/v5/product-page-reasons/{productPageReasonId}
```

## Path Parameters

- `productPageReasonId` — `int64` (required): A unique identifier for a custom product page with an associated ad creative rejection reason.

## Response Codes

- `200` OK — `ProductPageReasonResponse`: If the call succeeds, the API returns the [ProductPageReasonResponse](productpagereasonresponse.md) object in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`: An invalid query or missing required parameters.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to fetch rejected ad creative approval reason details. Use the `id` that returns in `ProductPageReason` in the resource path as your `productPageReasonId`. See the [ProductPageReason](productpagereason.md) object for rejection reason code enumerations, parameter descriptions, and selector condition operators.

<a id="Payload-example-Get-rejection-reasons"></a>

### Payload example: Get rejection reasons

**Request**

```
GET https://api.searchads.apple.com/api/v5/product-page-reasons/{productPageReasonId}
```

**Response**

```json
{
  "data": {
    "id": "135366",
    "adamId": 735599345,
    "productPageId": "68e5948c-3726-4cfc-8915-6b09afb36d83",
    "assetGenId": "735599345;en-US;9;0;4201c5a4bd4087cc82xdfetdc8141b94d0",
    "supplySource": "APPSTORE_TODAY_TAB",
    "countryOrRegion": "US",
    "languageCode": “en-US”,
    "reasonType": "APP_NAME_LANGUAGE_CONFLICT",
    "reasonCode": "SUBTITLE_LANGUAGE_CONFLICT",
    "comment": null
  }
}
```

## See Also

### Ad Rejections

- [Find Ad Creative Rejection Reasons](find-ad-creative-rejection-reasons.md): Fetches ad creative rejection reasons.
- [Find App Assets](find-app-assets.md): Fetches app asset metadata by adam ID.
