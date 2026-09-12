> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargeting/maxage-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargeting/maxage-data.dictionary)

# AdGroupTargeting.MaxAge

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Maximum age targeting, setting the upper bound of the target age range.

## Declaration

```
object AdGroupTargeting.MaxAge
```

## Properties

- `include` — `[string]`: The upper bound of the target age range (18–64), or `null`/omitted to target users 65 and older. Mutable.
- `exclude` — `[string]`: Has no effect. `maxAge` is include-only.

<a id="Discussion"></a>

## Discussion

Used with App Store campaigns. Uses the [TargetingData](../targetingdata.md) `include`/`exclude` shape.

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
