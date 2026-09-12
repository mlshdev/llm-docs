> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/eninfectiousness](https://developer.apple.com/documentation/exposurenotification/eninfectiousness)

# ENInfectiousness (Swift)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The degree to which a person’s symptoms may indicate transmission risk.

> No longer supported.

## Declaration

```swift
enum ENInfectiousness
```

<a id="overview"></a>

## Overview

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

## Topics

### Enumeration Cases

- [ENInfectiousness.high](eninfectiousness/high.md): Deprecated. The user is highly infectious.
- [ENInfectiousness.none](eninfectiousness/none.md): Deprecated. The user is not infectious.
- [ENInfectiousness.standard](eninfectiousness/standard.md): Deprecated. The user is mildly infectious.

### Initializers

- [init(rawValue:)](eninfectiousness/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [Attenuation](attenuation.md): The minimum and maximum signal attenuations.
- [Risk Level](risk-level.md): The minimum and maximum risk levels.
- [Risk Level Value](risk-level-value.md): The minimum and maximum risk level values.
- [Risk Score](risk-score.md): The minimum and maximum risk score.
- [Risk Weight](risk-weight.md): The minimum, default, and maximum risk weights.
- [ENActivityFlags](enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [ENCalibrationConfidence](encalibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [ENDiagnosisReportType](endiagnosisreporttype.md): Deprecated. The type of a report that describes the origin of a diagnosis.

# ENInfectiousness (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The degree to which a person’s symptoms may indicate transmission risk.

> No longer supported.

## Declaration

```objectivec
enum ENInfectiousness : uint32_t;
```

<a id="overview"></a>

## Overview

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

## Topics

### Enumeration Cases

- [ENInfectiousnessHigh](eninfectiousness/high.md): Deprecated. The user is highly infectious.
- [ENInfectiousnessNone](eninfectiousness/none.md): Deprecated. The user is not infectious.
- [ENInfectiousnessStandard](eninfectiousness/standard.md): Deprecated. The user is mildly infectious.

## See Also

### Enumerations

- [ENActivityFlags](enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [ENCalibrationConfidence](encalibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [ENDiagnosisReportType](endiagnosisreporttype.md): Deprecated. The type of a report that describes the origin of a diagnosis.
