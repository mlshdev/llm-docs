> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cakeyframeanimation/values](https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/values)

# values (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array of objects that specify the keyframe values to use for the animation.

## Declaration

```swift
var values: [Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

The keyframe values represent the values through which the animation must proceed. The time at which a given keyframe value is applied to the layer depends on the animation timing, which is controlled by the [calculationMode](calculationmode.md), [keyTimes](keytimes.md), and [timingFunctions](timingfunctions.md) properties. Values between keyframes are created using interpolation, unless the calculation mode is set to [discrete](../caanimationcalculationmode/discrete.md).

Depending on the type of the property, you may need to wrap the values in this array with an [NSNumber](../../foundation/nsnumber.md) of [NSValue](../../foundation/nsvalue.md) object. For some Core Graphics data types, you may also need to cast them to `id` before adding them to the array.

The values in this property are used only if the value in the [path](path.md) property is `nil`.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Providing keyframe values

- [path](path.md): The path for a point-based property to follow.

# values (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array of objects that specify the keyframe values to use for the animation.

## Declaration

```objectivec
@property (copy, nullable) NSArray * values;
```

<a id="Discussion"></a>

## Discussion

The keyframe values represent the values through which the animation must proceed. The time at which a given keyframe value is applied to the layer depends on the animation timing, which is controlled by the [calculationMode](calculationmode.md), [keyTimes](keytimes.md), and [timingFunctions](timingfunctions.md) properties. Values between keyframes are created using interpolation, unless the calculation mode is set to [kCAAnimationDiscrete](../caanimationcalculationmode/discrete.md).

Depending on the type of the property, you may need to wrap the values in this array with an [NSNumber](../../foundation/nsnumber.md) of [NSValue](../../foundation/nsvalue.md) object. For some Core Graphics data types, you may also need to cast them to `id` before adding them to the array.

The values in this property are used only if the value in the [path](path.md) property is `nil`.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Providing keyframe values

- [path](path.md): The path for a point-based property to follow.
