> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureinfo](https://developer.apple.com/documentation/exposurenotification/enexposureinfo)

# ENExposureInfo (Swift)

**Framework:** Exposure Notification  
**Kind:** Class  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The incident information related to a potential exposure.

> No longer supported.

## Declaration

```swift
class ENExposureInfo
```

<a id="overview"></a>

## Overview

> **Important**

>  This class is available in iOS 12.5, and in iOS 13.5 and later. It isn’t supported for apps with [ENAPIVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/enapiversion) set to `2` in the `Info.plist` file. Instead, [getExposureWindows(summary:completionHandler:)](enmanager/getexposurewindows%28summary_completionhandler_%29.md) provides an array of [ENExposureWindow](enexposurewindow.md) objects.

This class carries information about an exposure incident.

## Topics

### Exposure Criteria

- [attenuationDurations](enexposureinfo/attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [attenuationValue](enexposureinfo/attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [date](enexposureinfo/date.md): Deprecated. The date the exposure occurred.
- [duration](enexposureinfo/duration.md): Deprecated. The length of time that the contact was in proximity to the user.
- [totalRiskScore](enexposureinfo/totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](enexposureinfo/totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [transmissionRiskLevel](enexposureinfo/transmissionrisklevel.md): Deprecated. The transmission risk associated with a diagnosis key.
- [ENAttenuation](enattenuation.md): Deprecated. The signal strength value.
- [metadata](enexposureinfo/metadata.md): Deprecated. The metadata associated with the exposure information.
- [daysSinceOnsetOfSymptoms](enexposureinfo/dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](enexposureinfo/diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Exposure Information

- [ENRiskScore](enriskscore.md): Deprecated. A value signifying the risk of an exposure event.
- [ENRiskLevel](enrisklevel.md): Deprecated. The user’s estimated risk of exposure.
- [ENRiskLevelValue](enrisklevelvalue.md): Deprecated. The value associated with a particular risk level.

# ENExposureInfo (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Class  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The incident information related to a potential exposure.

> No longer supported.

## Declaration

```objectivec
@interface ENExposureInfo : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  This class is available in iOS 12.5, and in iOS 13.5 and later. It isn’t supported for apps with [ENAPIVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/enapiversion) set to `2` in the `Info.plist` file. Instead, [getExposureWindowsFromSummary:completionHandler:](enmanager/getexposurewindows%28summary_completionhandler_%29.md) provides an array of [ENExposureWindow](enexposurewindow.md) objects.

This class carries information about an exposure incident.

## Topics

### Exposure Criteria

- [attenuationDurations](enexposureinfo/attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [attenuationValue](enexposureinfo/attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [date](enexposureinfo/date.md): Deprecated. The date the exposure occurred.
- [duration](enexposureinfo/duration.md): Deprecated. The length of time that the contact was in proximity to the user.
- [totalRiskScore](enexposureinfo/totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](enexposureinfo/totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [transmissionRiskLevel](enexposureinfo/transmissionrisklevel.md): Deprecated. The transmission risk associated with a diagnosis key.
- [ENAttenuation](enattenuation.md): Deprecated. The signal strength value.
- [metadata](enexposureinfo/metadata.md): Deprecated. The metadata associated with the exposure information.
- [daysSinceOnsetOfSymptoms](enexposureinfo/dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](enexposureinfo/diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Exposure Information

- [ENRiskScore](enriskscore.md): Deprecated. A value signifying the risk of an exposure event.
- [ENRiskLevel](enrisklevel.md): Deprecated. The user’s estimated risk of exposure.
- [ENRiskLevelValue](enrisklevelvalue.md): Deprecated. The value associated with a particular risk level.
