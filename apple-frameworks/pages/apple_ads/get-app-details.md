> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/get-app-details](https://developer.apple.com/documentation/apple_ads/get-app-details)

# Get App Details

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint

Fetches app metadata.

## URL

```http
GET https://api.searchads.apple.com/api/v5/apps/{adamId}
```

## Path Parameters

- `adamId` — `int64` (required): Your unique App Store app identifier.

## Response Codes

- `200` OK — `MediaDetailResponse`: If the call succeeds, the API returns a response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`:
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

## Mentioned In

- [Apple Ads Campaign Management API 5](apple-search-ads-campaign-management-api-5.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to return app details using your adamId in the resource path. Related objects: [MediaDetail](mediadetail.md), [MediaDetailResponse](mediadetailresponse.md).

<a id="Get-app-details-example"></a>

### Get app details example

**Request**

```console
GET https://api.searchads.apple.com/api/v5/apps/{adamId}
```

**Response**

```json
{
  "data": {
    "id": 284815942,
    "adamId": 284815942,
    "appName": "Trip Trek",
    "artistName": "Trip Trek",
    "primaryLanguage": "en-US",
    "primaryGenre": ">Mobile Software Applications>Utilities",
    "secondaryGenre": ">Mobile Software Applications>Reference",
    "deviceClasses": [
      "IPHONE",
      "IPAD"
    ],
    "iconPictureUrl": "...",
    "isPreOrder": "false",
    "availableStorefronts": [
      "US"
    ]
  }
}
```

## See Also

### App Details

- [Get Localized App Details](get-localized-app-details.md): Fetches the localized default product page for an app.
