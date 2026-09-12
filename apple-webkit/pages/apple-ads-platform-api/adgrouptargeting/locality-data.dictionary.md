> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargeting/locality-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargeting/locality-data.dictionary)

# AdGroupTargeting.Locality

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

City or locality targeting.

## Declaration

```
object AdGroupTargeting.Locality
```

## Properties

- `include` — `[string]`: Locality IDs restricting delivery to those cities. Mutable.
- `exclude` — `[string]`: Has no effect. `locality` is include-only.

<a id="Discussion"></a>

## Discussion

Locality IDs are returned by [Search Geo Locations](../searches-for-a-list-of-geo-locations.md) or [Query Geo Locations](../gets-a-list-of-geo-locations.md). Used with App Store and Apple Maps campaigns. Uses the [TargetingData](../targetingdata.md) `include`/`exclude` shape.

```json
"locality": {
  "include": ["155356"]
}
```
