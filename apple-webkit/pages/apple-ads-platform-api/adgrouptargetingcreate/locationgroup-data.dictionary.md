> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingcreate/locationgroup-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingcreate/locationgroup-data.dictionary)

# AdGroupTargetingCreate.LocationGroup

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Location group targeting, restricting delivery to the business locations in specified groups.

## Declaration

```
object AdGroupTargetingCreate.LocationGroup
```

## Properties

- `include` — `[string]`: Location group IDs restricting delivery to the business locations in those groups. Mutable.
- `exclude` — `[string]`: Has no effect. `locationGroup` is include-only.

<a id="Discussion"></a>

## Discussion

Used with Apple Maps campaigns. For creating and managing groups, see [Managing Location Groups](../location-groups-overview.md). Uses the [TargetingDataCreate](../targetingdatacreate.md) `include`/`exclude` shape.
