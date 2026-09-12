> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargeting/minage-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargeting/minage-data.dictionary)

# AdGroupTargeting.MinAge

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Minimum age targeting, setting the lower bound of the target age range.

## Declaration

```
object AdGroupTargeting.MinAge
```

## Properties

- `include` — `[string]`: The lower bound of the target age range (18–64). Mutable.
- `exclude` — `[string]`: Has no effect. `minAge` is include-only.

<a id="Discussion"></a>

## Discussion

Used with App Store campaigns. Uses the [TargetingData](../targetingdata.md) `include`/`exclude` shape.

```json
"minAge": {
  "include": ["18"]
}
```
