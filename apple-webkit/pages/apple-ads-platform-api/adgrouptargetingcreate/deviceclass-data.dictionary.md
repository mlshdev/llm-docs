> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingcreate/deviceclass-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingcreate/deviceclass-data.dictionary)

# AdGroupTargetingCreate.DeviceClass

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Device class targeting (for example, `IPHONE` or `IPAD`).

## Declaration

```
object AdGroupTargetingCreate.DeviceClass
```

## Properties

- `include` — `[string]`: Device class values (`IPHONE` or `IPAD`) restricting delivery to those devices. Mutable.
- `exclude` — `[string]`: Has no effect. `deviceClass` is include-only.

<a id="Discussion"></a>

## Discussion

Used with App Store campaigns. Uses the [TargetingDataCreate](../targetingdatacreate.md) `include`/`exclude` shape.

```json
"deviceClass": {
  "include": ["IPHONE"]
}
```
