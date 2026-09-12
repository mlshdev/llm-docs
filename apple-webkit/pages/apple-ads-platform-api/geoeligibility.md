> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/geoeligibility](https://developer.apple.com/documentation/apple-ads-platform-api/geoeligibility)

# GeoEligibility

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Eligibility restrictions for a geographic location, scoped to the supply source specified in the request.

## Declaration

```
object GeoEligibility
```

## Properties

- `blockedGroups` — `[GeoBlockedGroup]`: Array of [GeoBlockedGroup](geoblockedgroup.md) objects. Each entry specifies the supply source and the reason the geo is blocked. Always non-empty when present. `GeoEligibility` is omitted from the response entirely when no restrictions apply. Read-only.

<a id="Discussion"></a>

## Discussion

The `SearchEntity` responses embed `GeoEligibility`, which summarizes the serving eligibility for a geographic location relative to the supply source specified in the request. When present, `blockedGroups` is always non-empty. The API omits `GeoEligibility` entirely from the response when no restrictions apply. Each `GeoBlockedGroup` entry in `blockedGroups` identifies the supply source and the reason the geo is blocked.

To pre-validate geo targeting choices before applying them to an ad group and avoid campaign configuration errors, use `GeoEligibility` data.

<a id="Example"></a>

### Example

```json
{
  "blockedGroups": [
    {
      "supplySource": [
        "MAPS"
      ],
      "reasons": [
        "COUNTRY_NOT_SUPPORTED"
      ]
    }
  ]
}
```

## See Also

- [GeoRequest](georequest.md): A single geo entity lookup criterion used in a geo location search request.
- [GeoSearchPostRequest](geosearchpostrequest.md): Request body for querying geo locations.
- [GeoSearchResponse](geosearchresponse.md): Response envelope for the geo location search endpoints.
- [GeoSearchPagination](geosearchpagination.md): Pagination parameters for geo location search requests and responses.
- [GeoBlockedGroup](geoblockedgroup.md): A blocking rule that names the supply source(s) and reason code(s) restricting a geo location.
- [SearchEntity](searchentity.md): A single geographic location result returned by the geo search endpoints.
