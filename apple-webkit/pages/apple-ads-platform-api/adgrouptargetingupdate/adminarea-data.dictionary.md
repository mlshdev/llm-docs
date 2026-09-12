> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingupdate/adminarea-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingupdate/adminarea-data.dictionary)

# AdGroupTargetingUpdate.AdminArea

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

State or province (administrative area) targeting.

## Declaration

```
object AdGroupTargetingUpdate.AdminArea
```

## Properties

- `include` — `[string]`: Admin area IDs to restrict delivery to those states or provinces. Mutable.
- `exclude` — `[string]`: Has no effect. `adminArea` is include-only.

<a id="Discussion"></a>

## Discussion

Admin area IDs are returned by [Search Geo Locations](../searches-for-a-list-of-geo-locations.md) or [Query Geo Locations](../gets-a-list-of-geo-locations.md). Used with App Store and Apple Maps campaigns. Uses the [TargetingDataUpdate](../targetingdataupdate.md) `include`/`exclude` shape.

```json
"adminArea": {
  "include": ["2068"]
}
```
