> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/betafeedbackcrashsubmission/attributes-data.dictionary

# BetaFeedbackCrashSubmission.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

Attributes that describe a beta feedback crash submission resource.

## Declaration

```
object BetaFeedbackCrashSubmission.Attributes
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
- `timeZone` — `string`:
