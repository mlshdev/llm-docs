> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingupdate/locationgroup-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingupdate/locationgroup-data.dictionary)

# AdGroupTargetingUpdate.LocationGroup

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Location group targeting, restricting delivery to the business locations in specified groups.

## Declaration

```
object AdGroupTargetingUpdate.LocationGroup
```

## Properties

- `include` — `[string]`: Location group IDs restricting delivery to the business locations in those groups. Mutable.
- `exclude` — `[string]`: Has no effect. `locationGroup` is include-only.

<a id="Discussion"></a>

## Discussion

Applies to Apple Maps campaigns. For creating and managing groups, see [Managing Location Groups](../location-groups-overview.md). Uses the [TargetingDataUpdate](../targetingdataupdate.md) `include`/`exclude` shape.

```json
"locationGroup": {
  "include": ["123456789"]
}
```
