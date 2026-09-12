> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposuresummaryitem/weighteddurationsum](https://developer.apple.com/documentation/exposurenotification/enexposuresummaryitem/weighteddurationsum)

# weightedDurationSum (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The sum of exposure durations weighted by their attenuation.

> No longer supported.

## Declaration

```swift
var weightedDurationSum: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

This value is stored as seconds, rounded up to the next minute. Divide by 60 to convert to minutes when displaying to the user.

[weightedDurationSum](weighteddurationsum.md) ignores [infectiousness](../enexposurewindow/infectiousness.md) and [diagnosisReportType](../enexposurewindow/diagnosisreporttype.md); therefore, it can be nonzero for encounters that have a infectiousness weight or diagnosis report type weight of `0`.

## See Also

### Getting Summary Properties

- [maximumScore](maximumscore.md): Deprecated. The highest score of all exposures for this item.
- [scoreSum](scoresum.md): Deprecated. The sum of scores for all exposure for this item.

# weightedDurationSum (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The sum of exposure durations weighted by their attenuation.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSTimeInterval weightedDurationSum;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

This value is stored as seconds, rounded up to the next minute. Divide by 60 to convert to minutes when displaying to the user.

[weightedDurationSum](weighteddurationsum.md) ignores [infectiousness](../enexposurewindow/infectiousness.md) and [diagnosisReportType](../enexposurewindow/diagnosisreporttype.md); therefore, it can be nonzero for encounters that have a infectiousness weight or diagnosis report type weight of `0`.

## See Also

### Getting Summary Properties

- [maximumScore](maximumscore.md): Deprecated. The highest score of all exposures for this item.
- [scoreSum](scoresum.md): Deprecated. The sum of scores for all exposure for this item.
