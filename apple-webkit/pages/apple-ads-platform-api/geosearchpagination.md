> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/geosearchpagination](https://developer.apple.com/documentation/apple-ads-platform-api/geosearchpagination)

# GeoSearchPagination

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Pagination parameters for geo location search requests and responses.

## Declaration

```
object GeoSearchPagination
```

## Properties

- `totalCount` — `int64`: Total number of results matching the search criteria. Present in the response only. Read-only.
- `offset` — `int32`: Zero-based index of the first result to return. Defaults to `0`.
- `pageSize` — `int32`: Maximum number of results to return per page. Defaults to `20`.

<a id="Discussion"></a>

## Discussion

The `GeoSearchPagination` object controls and reports offset-based pagination through geo location search results.

When used in a [GeoSearchPostRequest](geosearchpostrequest.md) body, set `offset` and `pageSize` to retrieve a specific page of results. The GET endpoint (`GET /v1/search/geo` ([Search Geo Locations](searches-for-a-list-of-geo-locations.md))) accepts `offset` and `pageSize` as query parameters instead of a request body. In both cases the response `pagination` object includes `totalCount`, enabling callers to calculate the total number of pages available.

The default `pageSize` of 20 is sufficient for most targeted lookups. Increase it for searches expected to return many matching locations. To retrieve the next page, increment `offset` by `pageSize`.

<a id="Example"></a>

### Example

```json
{
  "totalCount": 87,
  "offset": 20,
  "pageSize": 20
}
```

## See Also

- [GeoRequest](georequest.md): A single geo entity lookup criterion used in a geo location search request.
- [GeoSearchPostRequest](geosearchpostrequest.md): Request body for querying geo locations.
- [GeoSearchResponse](geosearchresponse.md): Response envelope for the geo location search endpoints.
- [GeoEligibility](geoeligibility.md): Eligibility restrictions for a geographic location, scoped to the supply source specified in the request.
- [GeoBlockedGroup](geoblockedgroup.md): A blocking rule that names the supply source(s) and reason code(s) restricting a geo location.
- [SearchEntity](searchentity.md): A single geographic location result returned by the geo search endpoints.
