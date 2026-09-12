> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cakeyframeanimation/calculationmode](https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/calculationmode)

# calculationMode (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies how intermediate keyframe values are calculated by the receiver.

## Declaration

```swift
var calculationMode: CAAnimationCalculationMode { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values are described in [Value calculation modes](../value-calculation-modes.md). The default value of this property is [linear](../caanimationcalculationmode/linear.md).

## See Also

### Keyframe timing

- [keyTimes](keytimes.md): An optional array of `NSNumber` objects that define the time at which to apply a given keyframe segment.
- [timingFunctions](timingfunctions.md): An optional array of `CAMediaTimingFunction` objects that define the pacing for each keyframe segment.

# calculationMode (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies how intermediate keyframe values are calculated by the receiver.

## Declaration

```objectivec
@property (copy) CAAnimationCalculationMode calculationMode;
```

<a id="Discussion"></a>

## Discussion

The possible values are described in [Value calculation modes](../value-calculation-modes.md). The default value of this property is [kCAAnimationLinear](../caanimationcalculationmode/linear.md).

## See Also

### Keyframe timing

- [keyTimes](keytimes.md): An optional array of `NSNumber` objects that define the time at which to apply a given keyframe segment.
- [timingFunctions](timingfunctions.md): An optional array of `CAMediaTimingFunction` objects that define the pacing for each keyframe segment.
