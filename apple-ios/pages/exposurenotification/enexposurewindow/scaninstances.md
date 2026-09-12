> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposurewindow/scaninstances](https://developer.apple.com/documentation/exposurenotification/enexposurewindow/scaninstances)

# scanInstances (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

An array of scans corresponding to a beacon associated with an exposure.

> No longer supported.

## Declaration

```swift
var scanInstances: [ENScanInstance] { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

## See Also

### Getting Window Properties

- [calibrationConfidence](calibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [date](date.md): Deprecated. The date that the exposure occurred.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The report type of the observed diagnosis.
- [infectiousness](infectiousness.md): Deprecated. How infectious the user is, based on the number of days since the onset of symptoms.
- [variantOfConcernType](variantofconcerntype.md): Deprecated. The variant of concern associated with this user.
- [ENVariantOfConcernType](../envariantofconcerntype.md): Deprecated. A set of user-definable types that indicate variants of concern.

# scanInstances (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

An array of scans corresponding to a beacon associated with an exposure.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<ENScanInstance *> * scanInstances;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

## See Also

### Getting Window Properties

- [calibrationConfidence](calibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [date](date.md): Deprecated. The date that the exposure occurred.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The report type of the observed diagnosis.
- [infectiousness](infectiousness.md): Deprecated. How infectious the user is, based on the number of days since the onset of symptoms.
- [variantOfConcernType](variantofconcerntype.md): Deprecated. The variant of concern associated with this user.
- [ENVariantOfConcernType](../envariantofconcerntype.md): Deprecated. A set of user-definable types that indicate variants of concern.
