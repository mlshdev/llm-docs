> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposuresummaryitem](https://developer.apple.com/documentation/exposurenotification/enexposuresummaryitem)

# ENExposureSummaryItem (Swift)

**Framework:** Exposure Notification  
**Kind:** Class  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The summary of exposures for a specific time period or report type.

> No longer supported.

## Declaration

```swift
class ENExposureSummaryItem
```

<a id="overview"></a>

## Overview

> **Important**

>  This class is available in iOS 12.5, iOS 13.7, and later.

The exposure summary item provides a summary of exposures for a particular day. The framework computes this summary by compiling values for a [weightedDurationSum](enexposuresummaryitem/weighteddurationsum.md), a [maximumScore](enexposuresummaryitem/maximumscore.md) (the maximum of the exposure risk values), and a [scoreSum](enexposuresummaryitem/scoresum.md). This summary of exposures can be for a specific report type ([confirmedTestSummary](enexposuredaysummary/confirmedtestsummary.md)) or a combination across all report types ([daySummary](enexposuredaysummary/daysummary.md)). An instance of [ENExposureDaySummary](enexposuredaysummary.md) contains the exposure summary item.

To illustrate how the framework computes this value, assume Alice encounters Bob, Carol, and Dave on a particular day; each person has weights set by their respective Public Health Authority.

Bob’s minutes-at-attenuation weight is 50, his infectiousness weight is 100%, and his report type weight is 200% (a confirmed test). His exposure risk value is 100 as dictated by his Public Health Authority.

![A diagram showing that Bob’s exposure risk value is a product of his minutes-at-attenuation weight, infectiousness weight, and report type. ](https://developer.apple.com/images/com.apple.exposurenotification/media-3744329@2x.png)

Carol’s minutes-at-attenuation weight is 30, her infectiousness weight is 100%, and her report type weight is 100% (a confirmed clinical diagnosis). Her exposure risk value is 30 as dictated by her Public Health Authority.

![A diagram showing that Carol’s exposure risk value is a product of her minutes-at-attenuation weight, infectiousness weight, and report type. ](https://developer.apple.com/images/com.apple.exposurenotification/media-3744330@2x.png)

Dave’s minutes-at-attenuation weight is 40, his infectiousness weight is 0%, and his report type weight is 80% (a self-diagnosis). His exposure risk value is 0 as dictated by his Public Health Authority.

![A diagram showing that Dave’s exposure risk value is a product of his minutes-at-attenuation weight, infectiousness weight, and report type. ](https://developer.apple.com/images/com.apple.exposurenotification/media-3744527@2x.png)

Alice’s exposure summary item for that day would be a [weightedDurationSum](enexposuresummaryitem/weighteddurationsum.md) of 120 (50 + 30 + 40), a [maximumScore](enexposuresummaryitem/maximumscore.md) of 100 (the maximum of the exposure risk values), and a [scoreSum](enexposuresummaryitem/scoresum.md) of 130 (100 + 30).

## Topics

### Getting Summary Properties

- [maximumScore](enexposuresummaryitem/maximumscore.md): Deprecated. The highest score of all exposures for this item.
- [scoreSum](enexposuresummaryitem/scoresum.md): Deprecated. The sum of scores for all exposure for this item.
- [weightedDurationSum](enexposuresummaryitem/weighteddurationsum.md): Deprecated. The sum of exposure durations weighted by their attenuation.

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

### Summaries

- [ENExposureDetectionSummary](enexposuredetectionsummary.md): Deprecated. A summary of exposures.
- [ENExposureDaySummary](enexposuredaysummary.md): Deprecated. The summary of exposure information for a single day.

# ENExposureSummaryItem (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Class  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The summary of exposures for a specific time period or report type.

> No longer supported.

## Declaration

```objectivec
@interface ENExposureSummaryItem : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  This class is available in iOS 12.5, iOS 13.7, and later.

The exposure summary item provides a summary of exposures for a particular day. The framework computes this summary by compiling values for a [weightedDurationSum](enexposuresummaryitem/weighteddurationsum.md), a [maximumScore](enexposuresummaryitem/maximumscore.md) (the maximum of the exposure risk values), and a [scoreSum](enexposuresummaryitem/scoresum.md). This summary of exposures can be for a specific report type ([confirmedTestSummary](enexposuredaysummary/confirmedtestsummary.md)) or a combination across all report types ([daySummary](enexposuredaysummary/daysummary.md)). An instance of [ENExposureDaySummary](enexposuredaysummary.md) contains the exposure summary item.

To illustrate how the framework computes this value, assume Alice encounters Bob, Carol, and Dave on a particular day; each person has weights set by their respective Public Health Authority.

Bob’s minutes-at-attenuation weight is 50, his infectiousness weight is 100%, and his report type weight is 200% (a confirmed test). His exposure risk value is 100 as dictated by his Public Health Authority.

![A diagram showing that Bob’s exposure risk value is a product of his minutes-at-attenuation weight, infectiousness weight, and report type. ](https://developer.apple.com/images/com.apple.exposurenotification/media-3744329@2x.png)

Carol’s minutes-at-attenuation weight is 30, her infectiousness weight is 100%, and her report type weight is 100% (a confirmed clinical diagnosis). Her exposure risk value is 30 as dictated by her Public Health Authority.

![A diagram showing that Carol’s exposure risk value is a product of her minutes-at-attenuation weight, infectiousness weight, and report type. ](https://developer.apple.com/images/com.apple.exposurenotification/media-3744330@2x.png)

Dave’s minutes-at-attenuation weight is 40, his infectiousness weight is 0%, and his report type weight is 80% (a self-diagnosis). His exposure risk value is 0 as dictated by his Public Health Authority.

![A diagram showing that Dave’s exposure risk value is a product of his minutes-at-attenuation weight, infectiousness weight, and report type. ](https://developer.apple.com/images/com.apple.exposurenotification/media-3744527@2x.png)

Alice’s exposure summary item for that day would be a [weightedDurationSum](enexposuresummaryitem/weighteddurationsum.md) of 120 (50 + 30 + 40), a [maximumScore](enexposuresummaryitem/maximumscore.md) of 100 (the maximum of the exposure risk values), and a [scoreSum](enexposuresummaryitem/scoresum.md) of 130 (100 + 30).

## Topics

### Getting Summary Properties

- [maximumScore](enexposuresummaryitem/maximumscore.md): Deprecated. The highest score of all exposures for this item.
- [scoreSum](enexposuresummaryitem/scoresum.md): Deprecated. The sum of scores for all exposure for this item.
- [weightedDurationSum](enexposuresummaryitem/weighteddurationsum.md): Deprecated. The sum of exposure durations weighted by their attenuation.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Summaries

- [ENExposureDetectionSummary](enexposuredetectionsummary.md): Deprecated. A summary of exposures.
- [ENExposureDaySummary](enexposuredaysummary.md): Deprecated. The summary of exposure information for a single day.
