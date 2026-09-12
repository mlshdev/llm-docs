> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cakeyframeanimation/keytimes](https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/keytimes)

# keyTimes (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An optional array of `NSNumber` objects that define the time at which to apply a given keyframe segment.

## Declaration

```swift
var keyTimes: [NSNumber]? { get set }
```

<a id="Discussion"></a>

## Discussion

Each value in the array is a floating point number between `0.0` and `1.0` that defines the time point (specified as a fraction of the animation’s total duration) at which to apply the corresponding keyframe value. Each successive value in the array must be greater than, or equal to, the previous value. Usually, the number of elements in the array should match the number of elements in the [values](values.md) property or the number of control points in the [path](path.md) property. If they do not, the timing of your animation might not be what you expect.

The appropriate values to include in the array are dependent on the [calculationMode](calculationmode.md) property.

- If the [calculationMode](calculationmode.md) is set to [linear](../caanimationcalculationmode/linear.md) or [cubic](../caanimationcalculationmode/cubic.md), the first value in the array must be `0.0` and the last value must be `1.0`. All intermediate values represent time points between the start and end times.
- If the [calculationMode](calculationmode.md) is set to [discrete](../caanimationcalculationmode/discrete.md), the first value in the array must be `0.0` and the last value must be `1.0`. The array should have one more entry than appears in the values array. For example, if there are two values, there should be three key times.
- If the [calculationMode](calculationmode.md) is set to [paced](../caanimationcalculationmode/paced.md) or [cubicPaced](../caanimationcalculationmode/cubicpaced.md), the values in this property are ignored.

If the values in this array are invalid or inappropriate for the current calculation mode, they are ignored.

## See Also

### Keyframe timing

- [timingFunctions](timingfunctions.md): An optional array of `CAMediaTimingFunction` objects that define the pacing for each keyframe segment.
- [calculationMode](calculationmode.md): Specifies how intermediate keyframe values are calculated by the receiver.

# keyTimes (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An optional array of `NSNumber` objects that define the time at which to apply a given keyframe segment.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSNumber *> * keyTimes;
```

<a id="Discussion"></a>

## Discussion

Each value in the array is a floating point number between `0.0` and `1.0` that defines the time point (specified as a fraction of the animation’s total duration) at which to apply the corresponding keyframe value. Each successive value in the array must be greater than, or equal to, the previous value. Usually, the number of elements in the array should match the number of elements in the [values](values.md) property or the number of control points in the [path](path.md) property. If they do not, the timing of your animation might not be what you expect.

The appropriate values to include in the array are dependent on the [calculationMode](calculationmode.md) property.

- If the [calculationMode](calculationmode.md) is set to [kCAAnimationLinear](../caanimationcalculationmode/linear.md) or [kCAAnimationCubic](../caanimationcalculationmode/cubic.md), the first value in the array must be `0.0` and the last value must be `1.0`. All intermediate values represent time points between the start and end times.
- If the [calculationMode](calculationmode.md) is set to [kCAAnimationDiscrete](../caanimationcalculationmode/discrete.md), the first value in the array must be `0.0` and the last value must be `1.0`. The array should have one more entry than appears in the values array. For example, if there are two values, there should be three key times.
- If the [calculationMode](calculationmode.md) is set to [kCAAnimationPaced](../caanimationcalculationmode/paced.md) or [kCAAnimationCubicPaced](../caanimationcalculationmode/cubicpaced.md), the values in this property are ignored.

If the values in this array are invalid or inappropriate for the current calculation mode, they are ignored.

## See Also

### Keyframe timing

- [timingFunctions](timingfunctions.md): An optional array of `CAMediaTimingFunction` objects that define the pacing for each keyframe segment.
- [calculationMode](calculationmode.md): Specifies how intermediate keyframe values are calculated by the receiver.
