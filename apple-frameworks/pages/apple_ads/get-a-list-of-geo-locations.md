> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/get-a-list-of-geo-locations](https://developer.apple.com/documentation/apple_ads/get-a-list-of-geo-locations)

# Get a List of Geo Locations

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Gets geolocation details using a geoidentifier.

## URL

```http
POST https://api.searchads.apple.com/api/v5/search/geo
```

## Query Parameters

- `limit` — `int32`: The limit on the number of geolocations in the response.

  ```console
  POST https://api.searchads.apple.com/api/v5/search/geo?limit=100
  ```  
  **Default:** `20`
- `offset` — `int32`: The offset pagination that limits the number of returned records. The start of each page is offset by the specified number. You can apply `offset` to most API calls, but not all GET endpoints support it.

  ```console
  POST https://api.searchads.apple.com/api/v5/search/geo?offset=<OFFSET>
  ```  
  **Default:** `0`

## HTTP Body

Content type: `application/json`

Type: `[GeoRequest]`

The georequest body.

## Response Codes

- `200` OK — `SearchEntityListResponse`: If the call succeeds, the API returns a list of [SearchEntity](searchentity.md) objects in the response payload with an HTTP status code of `200(OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `400` Bad Request — `ApiErrorResponse`: An invalid query or missing required parameters.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `404` Not Found — `ApiErrorResponse`: The API can’t locate the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

<a id="Discussion"></a>

## Discussion

Use a geo `id` in the request payload to return a corresponding `displayName` and geolocation.

<a id="Payload-Example-Get-a-list-of-geolocations"></a>

### Payload Example: Get a list of geolocations

**Request**

```
POST https://api.searchads.apple.com/api/v5/search/geo

[
  {
    "id": "US|CA|Cupertino",
    "entity": "locality"
  }
]
```

**Response**

```json
{
  "id": "US||CA|Cupertino",
  "entity": "locality",
  "displayName": "Cupertino, California, United States",
  "countryOrRegion”: "US",
  "adminArea”: "CA",
  "locality": "Cupertino"
}
```

## See Also

### Search Geolocation Endpoints

- [Search for Geolocations](search-for-geolocations.md): Fetches a list of geolocations for targeting.
