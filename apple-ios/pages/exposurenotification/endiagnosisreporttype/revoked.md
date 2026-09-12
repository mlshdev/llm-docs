> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/endiagnosisreporttype/revoked](https://developer.apple.com/documentation/exposurenotification/endiagnosisreporttype/revoked)

# ENDiagnosisReportType.revoked (Swift)

**Framework:** Exposure Notification  
**Kind:** Case  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The report is a negative test.

> No longer supported.

## Declaration

```swift
case revoked
```

<a id="Discussion"></a>

## Discussion

This case negates a previous self report or clinical diagnosis that may have been in error.

## See Also

### Enumeration Cases

- [ENDiagnosisReportType.confirmedClinicalDiagnosis](confirmedclinicaldiagnosis.md): Deprecated. The report comes from a confirmed clinical diagnosis.
- [ENDiagnosisReportType.confirmedTest](confirmedtest.md): Deprecated. The report comes from a confirmed test.
- [ENDiagnosisReportType.recursive](recursive.md): Deprecated. The report comes from a person determined positive based on exposure to another person confirmed positive.
- [ENDiagnosisReportType.selfReported](selfreported.md): Deprecated. The report comes from the user, without health authority involvement.
- [ENDiagnosisReportType.unknown](unknown.md): Deprecated. The report is an unknown type or is not available.

# ENDiagnosisReportTypeRevoked (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration Case  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The report is a negative test.

> No longer supported.

## Declaration

```objectivec
ENDiagnosisReportTypeRevoked
```

<a id="Discussion"></a>

## Discussion

This case negates a previous self report or clinical diagnosis that may have been in error.

## See Also

### Enumeration Cases

- [ENDiagnosisReportTypeConfirmedClinicalDiagnosis](confirmedclinicaldiagnosis.md): Deprecated. The report comes from a confirmed clinical diagnosis.
- [ENDiagnosisReportTypeConfirmedTest](confirmedtest.md): Deprecated. The report comes from a confirmed test.
- [ENDiagnosisReportTypeRecursive](recursive.md): Deprecated. The report comes from a person determined positive based on exposure to another person confirmed positive.
- [ENDiagnosisReportTypeSelfReported](selfreported.md): Deprecated. The report comes from the user, without health authority involvement.
- [ENDiagnosisReportTypeUnknown](unknown.md): Deprecated. The report is an unknown type or is not available.
