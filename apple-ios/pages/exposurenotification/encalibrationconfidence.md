> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/encalibrationconfidence](https://developer.apple.com/documentation/exposurenotification/encalibrationconfidence)

# ENCalibrationConfidence (Swift)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The transmitting device’s calibration confidence.

> No longer supported.

## Declaration

```swift
enum ENCalibrationConfidence
```

<a id="overview"></a>

## Overview

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

## Topics

### Enumeration Cases

- [ENCalibrationConfidence.high](encalibrationconfidence/high.md): Deprecated. The highest confidence in the calibration data.
- [ENCalibrationConfidence.medium](encalibrationconfidence/medium.md): Deprecated. The medium confidence in the calibration data.
- [ENCalibrationConfidence.low](encalibrationconfidence/low.md): Deprecated. The average confidence in the calibration data.
- [ENCalibrationConfidence.lowest](encalibrationconfidence/lowest.md): Deprecated. No confidence in the calibration data.

### Initializers

- [init(rawValue:)](encalibrationconfidence/init%28rawvalue_%29.md): Deprecated.

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
- [ENDiagnosisReportType](endiagnosisreporttype.md): Deprecated. The type of a report that describes the origin of a diagnosis.
- [ENInfectiousness](eninfectiousness.md): Deprecated. The degree to which a person’s symptoms may indicate transmission risk.

# ENCalibrationConfidence (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The transmitting device’s calibration confidence.

> No longer supported.

## Declaration

```objectivec
enum ENCalibrationConfidence : uint8_t;
```

<a id="overview"></a>

## Overview

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

## Topics

### Enumeration Cases

- [ENCalibrationConfidenceHigh](encalibrationconfidence/high.md): Deprecated. The highest confidence in the calibration data.
- [ENCalibrationConfidenceMedium](encalibrationconfidence/medium.md): Deprecated. The medium confidence in the calibration data.
- [ENCalibrationConfidenceLow](encalibrationconfidence/low.md): Deprecated. The average confidence in the calibration data.
- [ENCalibrationConfidenceLowest](encalibrationconfidence/lowest.md): Deprecated. No confidence in the calibration data.

## See Also

### Enumerations

- [ENActivityFlags](enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [ENDiagnosisReportType](endiagnosisreporttype.md): Deprecated. The type of a report that describes the origin of a diagnosis.
- [ENInfectiousness](eninfectiousness.md): Deprecated. The degree to which a person’s symptoms may indicate transmission risk.
