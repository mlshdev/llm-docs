> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnobservation/confidence](https://developer.apple.com/documentation/vision/vnobservation/confidence)

# confidence (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The level of confidence in the observation’s accuracy.

## Declaration

```swift
var confidence: VNConfidence { get }
```

<a id="Discussion"></a>

## Discussion

The Vision framework normalizes this value to `[0.0, 1.0]` under most circumstances. A value of `0.0` indicates no confidence. A value of `1.0` indicates highest confidence, or the observation doesn’t support or assign meaning to confidence.

> **Note**

>  When the results come from a [VNCoreMLRequest](../vncoremlrequest.md), Vision forwards confidence values as-is and doesn’t normalize them.

## See Also

### Evaluating Observations

- [timeRange](timerange.md): The time range of the reported observation.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.

# confidence (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The level of confidence in the observation’s accuracy.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) VNConfidence confidence;
```

<a id="Discussion"></a>

## Discussion

The Vision framework normalizes this value to `[0.0, 1.0]` under most circumstances. A value of `0.0` indicates no confidence. A value of `1.0` indicates highest confidence, or the observation doesn’t support or assign meaning to confidence.

> **Note**

>  When the results come from a [VNCoreMLRequest](../vncoremlrequest.md), Vision forwards confidence values as-is and doesn’t normalize them.

## See Also

### Evaluating Observations

- [timeRange](timerange.md): The time range of the reported observation.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.
