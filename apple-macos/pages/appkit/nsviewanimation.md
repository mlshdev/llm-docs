> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewanimation](https://developer.apple.com/documentation/appkit/nsviewanimation)

# NSViewAnimation (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.

## Declaration

```swift
class NSViewAnimation
```

<a id="overview"></a>

## Overview

An [NSViewAnimation](nsviewanimation.md) object takes an array of dictionaries from which it determines the objects to animate and the effects to apply to them. Each dictionary must have a target object and, optionally, properties that specify beginning and ending frame and whether to fade in or fade out. (See [NSViewAnimation.Key](nsviewanimation/key.md) for further information.) Animations with [NSViewAnimation](nsviewanimation.md) are, by default, in non-blocking mode over a duration of 0.5 seconds using the ease in-out animation curve. But you can configure the animation to have any duration, curve, frame rate, and blocking mode. You may also set progress marks, assign a delegate, and implement delegation methods in order to animate view and windows concurrent with the ones specified as targets in the view-animation dictionary.

Invoking the [NSAnimation](nsanimation.md) [stop()](nsanimation/stop%28%29.md) method on a running [NSViewAnimation](nsviewanimation.md) object moves the animation to the end frame.

## Topics

### Initializing an NSViewAnimation object

- [init(viewAnimations:)](nsviewanimation/init%28viewanimations_%29.md): Returns an `NSViewAnimation` object initialized with the supplied information.

### Getting and setting view-animation dictionaries

- [viewAnimations](nsviewanimation/viewanimations.md): The dictionaries defining the objects to animate.
- [NSViewAnimation.Key](nsviewanimation/key.md): The following string constants are keys for the dictionaries in the array passed into [init(viewAnimations:)](nsviewanimation/init%28viewanimations_%29.md) and [viewAnimations](nsviewanimation/viewanimations.md).
- [NSViewAnimation.EffectName](nsviewanimation/effectname.md): The following constants specify the animation effect to apply and are used as values for the animation effect property of the animation view. See the description of [effect](nsviewanimation/key/effect.md) for usage details.

## Relationships

### Inherits From

- [NSAnimation](nsanimation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### View-Based Animations

- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md): A set of methods that defines a way to add animation to an existing class with a minimum of API impact.
- [NSAnimationContext](nsanimationcontext.md): An animation context, which contains information about environment and state.
- [NSAnimation.Progress](nsanimation/progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationEffect](nsanimationeffect.md): Deprecated. The type for standard system animation effects, which include both display and sound.

# NSViewAnimation (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.

## Declaration

```objectivec
@interface NSViewAnimation : NSAnimation
```

<a id="overview"></a>

## Overview

An [NSViewAnimation](nsviewanimation.md) object takes an array of dictionaries from which it determines the objects to animate and the effects to apply to them. Each dictionary must have a target object and, optionally, properties that specify beginning and ending frame and whether to fade in or fade out. (See [NSViewAnimationKey](nsviewanimation/key.md) for further information.) Animations with [NSViewAnimation](nsviewanimation.md) are, by default, in non-blocking mode over a duration of 0.5 seconds using the ease in-out animation curve. But you can configure the animation to have any duration, curve, frame rate, and blocking mode. You may also set progress marks, assign a delegate, and implement delegation methods in order to animate view and windows concurrent with the ones specified as targets in the view-animation dictionary.

Invoking the [NSAnimation](nsanimation.md) [stopAnimation](nsanimation/stop%28%29.md) method on a running [NSViewAnimation](nsviewanimation.md) object moves the animation to the end frame.

## Topics

### Initializing an NSViewAnimation object

- [initWithViewAnimations:](nsviewanimation/init%28viewanimations_%29.md): Returns an `NSViewAnimation` object initialized with the supplied information.

### Getting and setting view-animation dictionaries

- [viewAnimations](nsviewanimation/viewanimations.md): The dictionaries defining the objects to animate.
- [NSViewAnimationKey](nsviewanimation/key.md): The following string constants are keys for the dictionaries in the array passed into [initWithViewAnimations:](nsviewanimation/init%28viewanimations_%29.md) and [viewAnimations](nsviewanimation/viewanimations.md).
- [NSViewAnimationEffectName](nsviewanimation/effectname.md): The following constants specify the animation effect to apply and are used as values for the animation effect property of the animation view. See the description of [NSViewAnimationEffectKey](nsviewanimation/key/effect.md) for usage details.

## Relationships

### Inherits From

- [NSAnimation](nsanimation.md)

## See Also

### View-Based Animations

- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md): A set of methods that defines a way to add animation to an existing class with a minimum of API impact.
- [NSAnimationContext](nsanimationcontext.md): An animation context, which contains information about environment and state.
- [NSAnimationProgress](nsanimation/progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationEffect](nsanimationeffect.md): Deprecated. The type for standard system animation effects, which include both display and sound.
