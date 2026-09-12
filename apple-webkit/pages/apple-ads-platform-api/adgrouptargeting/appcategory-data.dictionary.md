> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargeting/appcategory-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargeting/appcategory-data.dictionary)

# AdGroupTargeting.AppCategory

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

App category targeting based on App Store categories, with include and exclude support.

## Declaration

```
object AdGroupTargeting.AppCategory
```

## Properties

- `include` — `[string]`: App Store category IDs to target. `100` targets the same category as the promoted app. Mutable.
- `exclude` — `[string]`: App Store category IDs to exclude. `100` excludes the same category as the promoted app. Mutable.

<a id="Discussion"></a>

## Discussion

The `appCategory` field is one of only two `AdGroupTargeting` dimensions that support both `include` and `exclude`. Used with App Store campaigns. Uses the [TargetingData](../targetingdata.md) `include`/`exclude` shape.

```json
"appCategory": {
  "include": ["100"]
}
```

```json
"appCategory": {
  "exclude": ["100"]
}
```
