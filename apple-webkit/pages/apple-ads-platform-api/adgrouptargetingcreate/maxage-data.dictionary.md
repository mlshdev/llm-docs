> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingcreate/maxage-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingcreate/maxage-data.dictionary)

# AdGroupTargetingCreate.MaxAge

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Maximum age targeting, setting the upper bound of the target age range.

## Declaration

```
object AdGroupTargetingCreate.MaxAge
```

## Properties

- `include` — `[string]`: The upper bound of the target age range (18–64), or `null`/omitted to target users 65 and older. Mutable.
- `exclude` — `[string]`: Has no effect. `maxAge` is include-only.

<a id="Discussion"></a>

## Discussion

Used with App Store campaigns. Uses the [TargetingDataCreate](../targetingdatacreate.md) `include`/`exclude` shape.

```json
"maxAge": {
  "include": ["64"]
}
```

To target 65+:

```json
"maxAge": {
  "include": null
}
```
