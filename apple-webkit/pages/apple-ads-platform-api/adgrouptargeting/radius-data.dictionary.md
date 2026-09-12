> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargeting/radius-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargeting/radius-data.dictionary)

# AdGroupTargeting.Radius

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Radius targeting used with Apple Maps campaigns to restrict delivery to users within a given proximity of the brand’s locations.

## Declaration

```
object AdGroupTargeting.Radius
```

## Properties

- `include` — `[string]`: Radius values (`CLOSE`, `MEDIUM`, or `FAR`) restricting delivery to that proximity. Mutable.
- `exclude` — `[string]`: Has no effect. `radius` is include-only.

<a id="Discussion"></a>

## Discussion

In practice, radius targeting is applied on `MAPS_SEARCH_RESULTS` campaigns and shouldn’t be combined with geo location targeting in the same ad group, but the API doesn’t enforce either constraint at the schema level. Uses the [TargetingData](../targetingdata.md) `include`/`exclude` shape.

```json
"radius": {
  "include": ["CLOSE"]
}
```
