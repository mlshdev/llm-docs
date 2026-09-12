> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposurewindow](https://developer.apple.com/documentation/exposurenotification/enexposurewindow)

# ENExposureWindow (Swift)

**Framework:** Exposure Notification  
**Kind:** Class  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A set of scan events from observed beacons within a time span.

> No longer supported.

## Declaration

```swift
class ENExposureWindow
```

<a id="overview"></a>

## Overview

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

An exposure window contains information about a potential exposure in a 30–minute interval. The system returns an array of exposure windows through the completion handler when the app invokes [getExposureWindows(summary:completionHandler:)](enmanager/getexposurewindows%28summary_completionhandler_%29.md). Exposure windows are only available when an app specified an `ENAPIVersion` of `2` in the app’s `Info.plist` file.

## Topics

### Getting Window Properties

- [calibrationConfidence](enexposurewindow/calibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [date](enexposurewindow/date.md): Deprecated. The date that the exposure occurred.
- [diagnosisReportType](enexposurewindow/diagnosisreporttype.md): Deprecated. The report type of the observed diagnosis.
- [infectiousness](enexposurewindow/infectiousness.md): Deprecated. How infectious the user is, based on the number of days since the onset of symptoms.
- [scanInstances](enexposurewindow/scaninstances.md): Deprecated. An array of scans corresponding to a beacon associated with an exposure.
- [variantOfConcernType](enexposurewindow/variantofconcerntype.md): Deprecated. The variant of concern associated with this user.
- [ENVariantOfConcernType](envariantofconcerntype.md): Deprecated. A set of user-definable types that indicate variants of concern.

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

### Exposures

- [Configuring Exposure Notifications](configuring-exposure-notifications.md): Define how Exposure Notifications work for a region by assigning server-based key-value pairs.
- [ENExposureConfiguration](enexposureconfiguration.md): Deprecated. The object that contains parameters for configuring exposure notification risk scoring behavior.
- [ENScanInstance](enscaninstance.md): Deprecated. The aggregation of attenuations of beacons received during a scan.
- [Exposure Parameter Limits](exposure-parameter-limits.md): The limits for the parameters you use in exposure risk calculations.

# ENExposureWindow (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Class  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A set of scan events from observed beacons within a time span.

> No longer supported.

## Declaration

```objectivec
@interface ENExposureWindow : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

An exposure window contains information about a potential exposure in a 30–minute interval. The system returns an array of exposure windows through the completion handler when the app invokes [getExposureWindowsFromSummary:completionHandler:](enmanager/getexposurewindows%28summary_completionhandler_%29.md). Exposure windows are only available when an app specified an `ENAPIVersion` of `2` in the app’s `Info.plist` file.

## Topics

### Getting Window Properties

- [calibrationConfidence](enexposurewindow/calibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [date](enexposurewindow/date.md): Deprecated. The date that the exposure occurred.
- [diagnosisReportType](enexposurewindow/diagnosisreporttype.md): Deprecated. The report type of the observed diagnosis.
- [infectiousness](enexposurewindow/infectiousness.md): Deprecated. How infectious the user is, based on the number of days since the onset of symptoms.
- [scanInstances](enexposurewindow/scaninstances.md): Deprecated. An array of scans corresponding to a beacon associated with an exposure.
- [variantOfConcernType](enexposurewindow/variantofconcerntype.md): Deprecated. The variant of concern associated with this user.
- [ENVariantOfConcernType](envariantofconcerntype.md): Deprecated. A set of user-definable types that indicate variants of concern.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Exposures

- [Configuring Exposure Notifications](configuring-exposure-notifications.md): Define how Exposure Notifications work for a region by assigning server-based key-value pairs.
- [ENExposureConfiguration](enexposureconfiguration.md): Deprecated. The object that contains parameters for configuring exposure notification risk scoring behavior.
- [ENScanInstance](enscaninstance.md): Deprecated. The aggregation of attenuations of beacons received during a scan.
- [Exposure Parameter Limits](exposure-parameter-limits.md): The limits for the parameters you use in exposure risk calculations.
