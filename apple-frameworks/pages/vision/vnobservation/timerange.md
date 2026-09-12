> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnobservation/timerange](https://developer.apple.com/documentation/vision/vnobservation/timerange)

# timeRange (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The time range of the reported observation.

## Declaration

```swift
var timeRange: CMTimeRange { get }
```

<a id="Discussion"></a>

## Discussion

When evaluating a sequence of image buffers, use this property to determine each observation’s start time and duration. If a request doesn’t support time ranges, or the time range is unknown, the value of this property is [zero](../../coremedia/cmtimerange/zero.md).

## See Also

### Evaluating Observations

- [confidence](confidence.md): The level of confidence in the observation’s accuracy.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.

# timeRange (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The time range of the reported observation.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CMTimeRange timeRange;
```

<a id="Discussion"></a>

## Discussion

When evaluating a sequence of image buffers, use this property to determine each observation’s start time and duration. If a request doesn’t support time ranges, or the time range is unknown, the value of this property is [kCMTimeRangeZero](../../coremedia/cmtimerange/zero.md).

## See Also

### Evaluating Observations

- [confidence](confidence.md): The level of confidence in the observation’s accuracy.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.
