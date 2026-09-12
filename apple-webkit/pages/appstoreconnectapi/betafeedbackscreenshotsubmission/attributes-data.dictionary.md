> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betafeedbackscreenshotsubmission/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betafeedbackscreenshotsubmission/attributes-data.dictionary)

# BetaFeedbackScreenshotSubmission.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

Attributes that describe a `BetaFeedbackScreenshotSubmission` resource.

## Declaration

```
object BetaFeedbackScreenshotSubmission.Attributes
```

## Properties

- `appPlatform` — `Platform`:
- `appUptimeInMilliseconds` — `int64`: **Minimum:** `0`
  **Maximum:** `9007199254740991`
- `architecture` — `string`:
- `batteryPercentage` — `integer`:
- `buildBundleId` — `string`:
- `comment` — `string`:
- `connectionType` — `DeviceConnectionType`:
- `createdDate` — `date-time`:
- `deviceFamily` — `DeviceFamily`:
- `deviceModel` — `string`:
- `devicePlatform` — `Platform`:
- `diskBytesAvailable` — `int64`: **Minimum:** `0`
  **Maximum:** `9007199254740991`
- `diskBytesTotal` — `int64`: **Minimum:** `0`
  **Maximum:** `9007199254740991`
- `email` — `string`:
- `locale` — `string`:
- `osVersion` — `string`:
- `pairedAppleWatch` — `string`:
- `screenHeightInPoints` — `integer`:
- `screenWidthInPoints` — `integer`:
- `screenshots` — `[BetaFeedbackScreenshotImage]`:
- `timeZone` — `string`:
