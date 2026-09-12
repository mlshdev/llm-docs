> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/get-localized-app-details](https://developer.apple.com/documentation/apple_ads/get-localized-app-details)

# Get Localized App Details

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint

Fetches the localized default product page for an app.

## URL

```http
GET https://api.searchads.apple.com/api/v5/apps/{adamId}/locale-details
```

## Path Parameters

- `adamId` — `int64` (required): Your unique App Store app identifier.

## Response Codes

- `200` OK — `MediaLocaleDetailResponse`: If successful, the API returns a list of objects in the response payload with an HTTP status code of `200 (OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`:
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`:
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

## Mentioned In

- [Apple Ads Campaign Management API 5](apple-search-ads-campaign-management-api-5.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to return localized app details using your `adamId` in the resource path. Related objects: [MediaLocaleDetail](medialocaledetail.md), [MediaLocaleDetailResponse](medialocaledetailresponse.md).

<a id="Query-Parameters"></a>

### Query Parameters

- expand: Detailed app asset details of a device. Use `true` for expanded values in the API response.

<a id="Get-localized-app-details-example"></a>

### Get localized app details example

**Request**

```
GET https://api.searchads.apple.com/api/v5/apps/{adamId}/locale-details        
```

**Response**

```json
{
  "data": [
    {
      "language": "en-US",
      "appName": "Trip Trek",
      "shortDescription": "Trip Trek app.",
      "isPrimaryLocale": true,
      "subTitle": "Search for trips.",
      "appPreviewDeviceWithAssets": {
        "ipadPro": {
          "appPreviewDeviceFallBackDevices": null,
          "screenshots": [
            {
              "assetGenId": "…",
              "assetToken": "…",
              "assetUrl": "…",
              "appPreviewDevice": "…",
              "sortPosition": 1,
              "sourceHeight": 2732,
              "sourceWidth": 2048,
              "orientation": "PORTRAIT",
              "assetType": "SCREENSHOT",
              "checksum": "…",
              "pictureUrl": "…",
              "videoUrl": null,
              "assetDuplicationType": null
            }
          ],
          "appPreviews": null
        }
      }
    }
  ]
}
```

## See Also

### App Details

- [Get App Details](get-app-details.md): Fetches app metadata.
