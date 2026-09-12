> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingcreate/gender-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingcreate/gender-data.dictionary)

# AdGroupTargetingCreate.Gender

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Gender targeting for the audience.

## Declaration

```
object AdGroupTargetingCreate.Gender
```

## Properties

- `include` — `[string]`: Gender values (`M` or `F`) restricting delivery to that audience. Mutable.
- `exclude` — `[string]`: Has no effect. `gender` is include-only.

<a id="Discussion"></a>

## Discussion

Used with App Store campaigns. Uses the [TargetingDataCreate](../targetingdatacreate.md) `include`/`exclude` shape.

```json
"gender": {
  "include": ["M"]
}
```
