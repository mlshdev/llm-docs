> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/searchentity/eligibility-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/searchentity/eligibility-data.dictionary)

# SearchEntity.Eligibility

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Supply source eligibility restrictions for this search entity.

## Declaration

```
object SearchEntity.Eligibility
```

## Properties

- `blockedGroups` — `[GeoBlockedGroup]`: Array of [GeoBlockedGroup](../geoblockedgroup.md) objects. Each entry specifies the supply source and the reason the geo is blocked. Always non-empty when present. `GeoEligibility` is omitted from the response entirely when no restrictions apply. Read-only.

<a id="Discussion"></a>

## Discussion

The API scopes `eligibility` to the supply source specified in the request and omits it from the response entirely when no restrictions apply to that location.

See [GeoEligibility](../geoeligibility.md) for the full field reference.
