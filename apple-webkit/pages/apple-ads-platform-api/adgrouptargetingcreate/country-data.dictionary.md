> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingcreate/country-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingcreate/country-data.dictionary)

# AdGroupTargetingCreate.Country

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Country-level geographic targeting.

## Declaration

```
object AdGroupTargetingCreate.Country
```

## Properties

- `include` — `[string]`: A country ID to restrict delivery to that market. Mutable.
- `exclude` — `[string]`: Has no effect. `country` is include-only.

<a id="Discussion"></a>

## Discussion

Country IDs are returned by [Search Geo Locations](../searches-for-a-list-of-geo-locations.md) or [Query Geo Locations](../gets-a-list-of-geo-locations.md) (`supplySource=APPSTORE`). Used with App Store campaigns. Uses the [TargetingDataCreate](../targetingdatacreate.md) `include`/`exclude` shape.

```json
"country": {
  "include": ["1125"]
}
```
