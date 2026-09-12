> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingupdate/radius-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingupdate/radius-data.dictionary)

# AdGroupTargetingUpdate.Radius

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Radius targeting used with Apple Maps campaigns to restrict delivery to users within a given proximity of the brand’s locations.

## Declaration

```
object AdGroupTargetingUpdate.Radius
```

## Properties

- `include` — `[string]`: Radius values (`CLOSE`, `MEDIUM`, or `FAR`) restricting delivery to that proximity. Mutable.
- `exclude` — `[string]`: Has no effect. `radius` is include-only.

<a id="Discussion"></a>

## Discussion

In practice, radius targeting applies only to `MAPS_SEARCH_RESULTS` campaigns. Avoid combining it with geo location targeting in the same ad group, though the API doesn’t enforce either constraint at the schema level. Uses the [TargetingDataUpdate](../targetingdataupdate.md) `include`/`exclude` shape.

```json
"radius": {
  "include": ["CLOSE"]
}
```
