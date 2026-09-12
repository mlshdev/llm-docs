> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cakeyframeanimation/timingfunctions](https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/timingfunctions)

# timingFunctions (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An optional array of `CAMediaTimingFunction` objects that define the pacing for each keyframe segment.

## Declaration

```swift
var timingFunctions: [CAMediaTimingFunction]? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this array to apply ease-in, ease-out, or custom timing curves to the points that lie between two keyframe values. If the number of keyframes in the values property is *n*, then this property should contain *n*`-1` objects.

If you provide timing information in the [keyTimes](keytimes.md) property, the timing functions you specify using this property further modify the timing between those values. If you do not assign a value to the [keyTimes](keytimes.md) property, the timing functions modify the default timing provided by the animation object.

If you also specify a timing function in the animation object’s [timingFunction](../caanimation/timingfunction.md) property, that function is applied first followed by the timing function for the specific keyframe segment.

For information on how to create a timing function, see [CAMediaTimingFunction](../camediatimingfunction.md).

## See Also

### Keyframe timing

- [keyTimes](keytimes.md): An optional array of `NSNumber` objects that define the time at which to apply a given keyframe segment.
- [calculationMode](calculationmode.md): Specifies how intermediate keyframe values are calculated by the receiver.

# timingFunctions (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An optional array of `CAMediaTimingFunction` objects that define the pacing for each keyframe segment.

## Declaration

```objectivec
@property (copy, nullable) NSArray<CAMediaTimingFunction *> * timingFunctions;
```

<a id="Discussion"></a>

## Discussion

You can use this array to apply ease-in, ease-out, or custom timing curves to the points that lie between two keyframe values. If the number of keyframes in the values property is *n*, then this property should contain *n*`-1` objects.

If you provide timing information in the [keyTimes](keytimes.md) property, the timing functions you specify using this property further modify the timing between those values. If you do not assign a value to the [keyTimes](keytimes.md) property, the timing functions modify the default timing provided by the animation object.

If you also specify a timing function in the animation object’s [timingFunction](../caanimation/timingfunction.md) property, that function is applied first followed by the timing function for the specific keyframe segment.

For information on how to create a timing function, see [CAMediaTimingFunction](../camediatimingfunction.md).

## See Also

### Keyframe timing

- [keyTimes](keytimes.md): An optional array of `NSNumber` objects that define the time at which to apply a given keyframe segment.
- [calculationMode](calculationmode.md): Specifies how intermediate keyframe values are calculated by the receiver.
