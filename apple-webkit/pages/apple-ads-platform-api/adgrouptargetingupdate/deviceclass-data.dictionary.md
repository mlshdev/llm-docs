> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingupdate/deviceclass-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingupdate/deviceclass-data.dictionary)

# AdGroupTargetingUpdate.DeviceClass

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Device class targeting (for example, `IPHONE` or `IPAD`).

## Declaration

```
object AdGroupTargetingUpdate.DeviceClass
```

## Properties

- `include` — `[string]`: Device class values (`IPHONE` or `IPAD`) restricting delivery to those devices. Mutable.
- `exclude` — `[string]`: Has no effect. `deviceClass` is include-only.

<a id="Discussion"></a>

## Discussion

Applies to App Store campaigns. Uses the [TargetingDataUpdate](../targetingdataupdate.md) `include`/`exclude` shape.

```json
"deviceClass": {
  "include": ["IPHONE"]
}
```
