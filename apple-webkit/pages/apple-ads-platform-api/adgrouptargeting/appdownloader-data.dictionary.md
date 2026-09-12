> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargeting/appdownloader-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargeting/appdownloader-data.dictionary)

# AdGroupTargeting.AppDownloader

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The defined targeted audience according to app downloads.

## Declaration

```
object AdGroupTargeting.AppDownloader
```

## Properties

- `include` — `[string]`: Adam IDs of apps whose downloaders to target. Mutable.
- `exclude` — `[string]`: Adam IDs of apps whose downloaders to exclude, typically to suppress existing users of your app (acquisition targeting). Mutable.

<a id="Discussion"></a>

## Discussion

The `appDownloader` field is one of only two `AdGroupTargeting` dimensions that support both `include` and `exclude`. To target all users, don’t include the `appDownloader` dimension in the request payload. Used with App Store campaigns. Uses the [TargetingData](../targetingdata.md) `include`/`exclude` shape.

Use the `adamId` of the app you’re promoting in your campaign as an included or excluded value. API users can only pass in their own apps.

```json
"appDownloader": {
  "include": ["11111"]
}
```

```json
"appDownloader": {
  "exclude": ["111111"]
}
```
