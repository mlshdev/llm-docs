> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/endiagnosisreporttype](https://developer.apple.com/documentation/exposurenotification/endiagnosisreporttype)

# ENDiagnosisReportType (Swift)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The type of a report that describes the origin of a diagnosis.

> No longer supported.

## Declaration

```swift
enum ENDiagnosisReportType
```

<a id="overview"></a>

## Overview

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

## Topics

### Enumeration Cases

- [ENDiagnosisReportType.confirmedClinicalDiagnosis](endiagnosisreporttype/confirmedclinicaldiagnosis.md): Deprecated. The report comes from a confirmed clinical diagnosis.
- [ENDiagnosisReportType.confirmedTest](endiagnosisreporttype/confirmedtest.md): Deprecated. The report comes from a confirmed test.
- [ENDiagnosisReportType.recursive](endiagnosisreporttype/recursive.md): Deprecated. The report comes from a person determined positive based on exposure to another person confirmed positive.
- [ENDiagnosisReportType.revoked](endiagnosisreporttype/revoked.md): Deprecated. The report is a negative test.
- [ENDiagnosisReportType.selfReported](endiagnosisreporttype/selfreported.md): Deprecated. The report comes from the user, without health authority involvement.
- [ENDiagnosisReportType.unknown](endiagnosisreporttype/unknown.md): Deprecated. The report is an unknown type or is not available.

### Initializers

- [init(rawValue:)](endiagnosisreporttype/init%28rawvalue_%29.md): Deprecated.

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
- [ENInfectiousness](eninfectiousness.md): Deprecated. The degree to which a person’s symptoms may indicate transmission risk.

# ENDiagnosisReportType (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The type of a report that describes the origin of a diagnosis.

> No longer supported.

## Declaration

```objectivec
enum ENDiagnosisReportType : uint32_t;
```

<a id="overview"></a>

## Overview

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

## Topics

### Enumeration Cases

- [ENDiagnosisReportTypeConfirmedClinicalDiagnosis](endiagnosisreporttype/confirmedclinicaldiagnosis.md): Deprecated. The report comes from a confirmed clinical diagnosis.
- [ENDiagnosisReportTypeConfirmedTest](endiagnosisreporttype/confirmedtest.md): Deprecated. The report comes from a confirmed test.
- [ENDiagnosisReportTypeRecursive](endiagnosisreporttype/recursive.md): Deprecated. The report comes from a person determined positive based on exposure to another person confirmed positive.
- [ENDiagnosisReportTypeRevoked](endiagnosisreporttype/revoked.md): Deprecated. The report is a negative test.
- [ENDiagnosisReportTypeSelfReported](endiagnosisreporttype/selfreported.md): Deprecated. The report comes from the user, without health authority involvement.
- [ENDiagnosisReportTypeUnknown](endiagnosisreporttype/unknown.md): Deprecated. The report is an unknown type or is not available.

## See Also

### Enumerations

- [ENActivityFlags](enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [ENCalibrationConfidence](encalibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [ENInfectiousness](eninfectiousness.md): Deprecated. The degree to which a person’s symptoms may indicate transmission risk.
