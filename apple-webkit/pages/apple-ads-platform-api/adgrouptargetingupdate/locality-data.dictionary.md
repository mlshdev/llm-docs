> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingupdate/locality-data.dictionary

# AdGroupTargetingUpdate.Locality

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

City or locality targeting.

## Declaration

```
object AdGroupTargetingUpdate.Locality
```

## Properties

- `include` — `[string]`: Locality IDs restricting delivery to those cities. Mutable.
- `exclude` — `[string]`: Has no effect. `locality` is include-only.

<a id="Discussion"></a>

## Discussion

Locality IDs are returned by [Search Geo Locations](../searches-for-a-list-of-geo-locations.md) or [Query Geo Locations](../gets-a-list-of-geo-locations.md). Applies to App Store and Apple Maps campaigns. Uses the [TargetingDataUpdate](../targetingdataupdate.md) `include`/`exclude` shape.

```json
"locality": {
  "include": ["155356"]
}
```
