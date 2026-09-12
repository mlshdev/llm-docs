> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposurewindow/date](https://developer.apple.com/documentation/exposurenotification/enexposurewindow/date)

# date (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The date that the exposure occurred.

> No longer supported.

## Declaration

```swift
var date: Date { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

The framework stores the date in Universal Coordinated Time (UTC) and rounds the value to the beginning of the exposure day. For example, a date and time of February 1, 2021 at 10:14 UTC rounds to February 1, 2021 at 00:00 UTC.

## See Also

### Getting Window Properties

- [calibrationConfidence](calibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The report type of the observed diagnosis.
- [infectiousness](infectiousness.md): Deprecated. How infectious the user is, based on the number of days since the onset of symptoms.
- [scanInstances](scaninstances.md): Deprecated. An array of scans corresponding to a beacon associated with an exposure.
- [variantOfConcernType](variantofconcerntype.md): Deprecated. The variant of concern associated with this user.
- [ENVariantOfConcernType](../envariantofconcerntype.md): Deprecated. A set of user-definable types that indicate variants of concern.

# date (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The date that the exposure occurred.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDate * date;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

The framework stores the date in Universal Coordinated Time (UTC) and rounds the value to the beginning of the exposure day. For example, a date and time of February 1, 2021 at 10:14 UTC rounds to February 1, 2021 at 00:00 UTC.

## See Also

### Getting Window Properties

- [calibrationConfidence](calibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The report type of the observed diagnosis.
- [infectiousness](infectiousness.md): Deprecated. How infectious the user is, based on the number of days since the onset of symptoms.
- [scanInstances](scaninstances.md): Deprecated. An array of scans corresponding to a beacon associated with an exposure.
- [variantOfConcernType](variantofconcerntype.md): Deprecated. The variant of concern associated with this user.
- [ENVariantOfConcernType](../envariantofconcerntype.md): Deprecated. A set of user-definable types that indicate variants of concern.
