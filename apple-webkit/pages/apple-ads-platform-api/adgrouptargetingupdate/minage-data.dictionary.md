> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingupdate/minage-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingupdate/minage-data.dictionary)

# AdGroupTargetingUpdate.MinAge

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Minimum age targeting, setting the lower bound of the target age range.

## Declaration

```
object AdGroupTargetingUpdate.MinAge
```

## Properties

- `include` — `[string]`: The lower bound of the target age range (18–64). Mutable.
- `exclude` — `[string]`: Has no effect. `minAge` is include-only.

<a id="Discussion"></a>

## Discussion

Applies to App Store campaigns. Uses the [TargetingDataUpdate](../targetingdataupdate.md) `include`/`exclude` shape.

```json
"minAge": {
  "include": ["18"]
}
```
