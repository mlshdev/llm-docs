> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimotioneffectgroup](https://developer.apple.com/documentation/uikit/uimotioneffectgroup)

# UIMotionEffectGroup (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A collection of motion effects that you want to apply to a view at the same time.

## Declaration

```swift
@MainActor class UIMotionEffectGroup
```

<a id="overview"></a>

## Overview

This class behaves similarly to the [CAAnimationGroup](../quartzcore/caanimationgroup.md) class in Core Animation. The key paths and values returned by each motion effect object are applied simultaneously and with the same timing. Because [UIMotionEffectGroup](uimotioneffectgroup.md) is a subclass of [UIMotionEffect](uimotioneffect.md), you can treat it like a single motion effect in your code. After setting a value for the [motionEffects](uimotioneffectgroup/motioneffects.md) property, add the group object to one or more of your views.

## Topics

### Setting the group items

- [motionEffects](uimotioneffectgroup/motioneffects.md): An array of motion effect objects to apply as a group to the view.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### View-based effects

- [UIInterpolatingMotionEffect](uiinterpolatingmotioneffect.md): An object that maps the horizontal or vertical tilt of a device to values that you specify so that UIKit can apply those values to your views.

# UIMotionEffectGroup (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A collection of motion effects that you want to apply to a view at the same time.

## Declaration

```objectivec
@interface UIMotionEffectGroup : UIMotionEffect
```

<a id="overview"></a>

## Overview

This class behaves similarly to the [CAAnimationGroup](../quartzcore/caanimationgroup.md) class in Core Animation. The key paths and values returned by each motion effect object are applied simultaneously and with the same timing. Because [UIMotionEffectGroup](uimotioneffectgroup.md) is a subclass of [UIMotionEffect](uimotioneffect.md), you can treat it like a single motion effect in your code. After setting a value for the [motionEffects](uimotioneffectgroup/motioneffects.md) property, add the group object to one or more of your views.

## Topics

### Setting the group items

- [motionEffects](uimotioneffectgroup/motioneffects.md): An array of motion effect objects to apply as a group to the view.

## Relationships

### Inherits From

- [UIMotionEffect](uimotioneffect.md)

## See Also

### View-based effects

- [UIInterpolatingMotionEffect](uiinterpolatingmotioneffect.md): An object that maps the horizontal or vertical tilt of a device to values that you specify so that UIKit can apply those values to your views.
