> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinterpolatingmotioneffect](https://developer.apple.com/documentation/uikit/uiinterpolatingmotioneffect)

# UIInterpolatingMotionEffect (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that maps the horizontal or vertical tilt of a device to values that you specify so that UIKit can apply those values to your views.

## Declaration

```swift
@MainActor class UIInterpolatingMotionEffect
```

<a id="overview"></a>

## Overview

You use this class to determine the amount of tilt along a single axis to apply to a view. After creating an instance of this class, you must assign appropriate values to the [minimumRelativeValue](uiinterpolatingmotioneffect/minimumrelativevalue.md) and [maximumRelativeValue](uiinterpolatingmotioneffect/maximumrelativevalue.md) properties. As the user moves the device, the motion effect object translates the fixed offset values returned by the system (which are in the range `-1` to `1`) to the range of values you specified. UIKit then applies the translated values to any target views.

## Topics

### Initializing a motion effect

- [init(keyPath:type:)](uiinterpolatingmotioneffect/init%28keypath_type_%29.md): Initializes and returns an interpolating motion effect object configured for the specific tilt direction.
- [init(coder:)](uiinterpolatingmotioneffect/init%28coder_%29.md): Creates a motion effect from data in an unarchiver.

### Accessing the motion attributes

- [keyPath](uiinterpolatingmotioneffect/keypath.md): The key path you want to modify on the view.
- [type](uiinterpolatingmotioneffect/type.md): The tilt direction to monitor.
- [minimumRelativeValue](uiinterpolatingmotioneffect/minimumrelativevalue.md): The value that maps to the minimum viewer offset.
- [maximumRelativeValue](uiinterpolatingmotioneffect/maximumrelativevalue.md): The value that maps to the maximum viewer offset.

### Constants

- [UIInterpolatingMotionEffect.EffectType](uiinterpolatingmotioneffect/effecttype.md): The axis to use when interpolating values.

## Relationships

### Inherits From

- [UIMotionEffect](uimotioneffect.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### View-based effects

- [UIMotionEffectGroup](uimotioneffectgroup.md): A collection of motion effects that you want to apply to a view at the same time.

# UIInterpolatingMotionEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that maps the horizontal or vertical tilt of a device to values that you specify so that UIKit can apply those values to your views.

## Declaration

```objectivec
@interface UIInterpolatingMotionEffect : UIMotionEffect
```

<a id="overview"></a>

## Overview

You use this class to determine the amount of tilt along a single axis to apply to a view. After creating an instance of this class, you must assign appropriate values to the [minimumRelativeValue](uiinterpolatingmotioneffect/minimumrelativevalue.md) and [maximumRelativeValue](uiinterpolatingmotioneffect/maximumrelativevalue.md) properties. As the user moves the device, the motion effect object translates the fixed offset values returned by the system (which are in the range `-1` to `1`) to the range of values you specified. UIKit then applies the translated values to any target views.

## Topics

### Initializing a motion effect

- [initWithKeyPath:type:](uiinterpolatingmotioneffect/init%28keypath_type_%29.md): Initializes and returns an interpolating motion effect object configured for the specific tilt direction.
- [initWithCoder:](uiinterpolatingmotioneffect/init%28coder_%29.md): Creates a motion effect from data in an unarchiver.

### Accessing the motion attributes

- [keyPath](uiinterpolatingmotioneffect/keypath.md): The key path you want to modify on the view.
- [type](uiinterpolatingmotioneffect/type.md): The tilt direction to monitor.
- [minimumRelativeValue](uiinterpolatingmotioneffect/minimumrelativevalue.md): The value that maps to the minimum viewer offset.
- [maximumRelativeValue](uiinterpolatingmotioneffect/maximumrelativevalue.md): The value that maps to the maximum viewer offset.

### Constants

- [UIInterpolatingMotionEffectType](uiinterpolatingmotioneffect/effecttype.md): The axis to use when interpolating values.

## Relationships

### Inherits From

- [UIMotionEffect](uimotioneffect.md)

## See Also

### View-based effects

- [UIMotionEffectGroup](uimotioneffectgroup.md): A collection of motion effects that you want to apply to a view at the same time.
