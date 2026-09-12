> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/georequest](https://developer.apple.com/documentation/apple-ads-platform-api/georequest)

# GeoRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single geo entity lookup criterion used in a geo location search request.

## Declaration

```
object GeoRequest
```

## Properties

- `id` — `string`: Numeric string geo location identifier (`geo_location_id`). Cannot be provided together with `legacyId`. Works for any entity type. One of `id` or `legacyId` is required.
- `legacyId` — `string`: Pipe-delimited geo code encoding the hierarchy, such as `US|CA|San Francisco` or `US|TX|78238`. Cannot be provided together with `id`. Works for any entity type. One of `id` or `legacyId` is required.
- `entity` — `GeoEntityType` (required): Geo entity type. Values: `AdminArea`, `Country`, `Locality`, `PostalCode`.

<a id="Discussion"></a>

## Discussion

The `GeoRequest` object specifies a single geographic entity to look up within a [GeoSearchPostRequest](geosearchpostrequest.md). Both identifiers work for any entity type. Use whichever you already have. Search results return both so you can switch between them freely.

To batch-resolve geo entity eligibility in one call, use multiple `GeoRequest` objects in a single `GeoSearchPostRequest`.

<a id="Example"></a>

### Example

```json
{
  "id": "123456789",
  "entity": "Locality"
}
```

## See Also

- [GeoSearchPostRequest](geosearchpostrequest.md): Request body for querying geo locations.
- [GeoSearchResponse](geosearchresponse.md): Response envelope for the geo location search endpoints.
- [GeoSearchPagination](geosearchpagination.md): Pagination parameters for geo location search requests and responses.
- [GeoEligibility](geoeligibility.md): Eligibility restrictions for a geographic location, scoped to the supply source specified in the request.
- [GeoBlockedGroup](geoblockedgroup.md): A blocking rule that names the supply source(s) and reason code(s) restricting a geo location.
- [SearchEntity](searchentity.md): A single geographic location result returned by the geo search endpoints.
