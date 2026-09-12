> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/geosearchresponse](https://developer.apple.com/documentation/apple-ads-platform-api/geosearchresponse)

# GeoSearchResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Response envelope for the geo location search endpoints.

## Declaration

```
object GeoSearchResponse
```

## Properties

- `result` — `[SearchEntity]`: Array of [SearchEntity](searchentity.md) objects matching the request criteria. Results are sorted alphabetically by `displayName` and deduplicated across the requested geo entities. Read-only.
- `pagination` — `GeoSearchPagination`: Pagination metadata including `totalCount`, `offset`, and `pageSize`. See [GeoSearchPagination](geosearchpagination.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `GeoSearchResponse` object is the response envelope for both `GET /v1/search/geo` ([Search Geo Locations](searches-for-a-list-of-geo-locations.md)) and `POST /v1/search/geo` ([Query Geo Locations](gets-a-list-of-geo-locations.md)). The `result` array contains [SearchEntity](searchentity.md) objects sorted alphabetically by `displayName`. To determine how many pages of results are available and iterate using `offset`, use the `pagination.totalCount` value.

Each `SearchEntity` in the array includes `id` (numeric string, use as targeting value in ad group `targetingDimensions`), `legacyId` (pipe-delimited hierarchy for human reference), `entity` type, localized `displayName`, `countryOrRegion`, `adminArea`, `locality`, `postalCode`, and an `eligibility` object scoped to the `supplySource` specified in the request. If `eligibility` is absent from the response, no restrictions apply for that supply source.

If the request is invalid, for example an unknown supply source or a query string shorter than two characters, the API returns an HTTP error status with a structured error body rather than this response.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "id": "11390462",
      "legacyId": "US|CA|San Francisco",
      "entity": "Locality",
      "displayName": "San Francisco, California, United States",
      "countryOrRegion": "US",
      "adminArea": "CA",
      "locality": "San Francisco"
    }
  ],
  "pagination": {
    "totalCount": 1,
    "offset": 0,
    "pageSize": 20
  }
}
```

## See Also

- [GeoRequest](georequest.md): A single geo entity lookup criterion used in a geo location search request.
- [GeoSearchPostRequest](geosearchpostrequest.md): Request body for querying geo locations.
- [GeoSearchPagination](geosearchpagination.md): Pagination parameters for geo location search requests and responses.
- [GeoEligibility](geoeligibility.md): Eligibility restrictions for a geographic location, scoped to the supply source specified in the request.
- [GeoBlockedGroup](geoblockedgroup.md): A blocking rule that names the supply source(s) and reason code(s) restricting a geo location.
- [SearchEntity](searchentity.md): A single geographic location result returned by the geo search endpoints.
