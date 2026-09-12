> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewanimation/key](https://developer.apple.com/documentation/appkit/nsviewanimation/key)

# NSViewAnimation.Key (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The following string constants are keys for the dictionaries in the array passed into [init(viewAnimations:)](init%28viewanimations_%29.md) and [viewAnimations](viewanimations.md).

## Declaration

```swift
struct Key
```

## Topics

### Keys

- [effect](key/effect.md): An effect to apply to the animation.
- [endFrame](key/endframe.md): The size and location of the window or view at the end of the animation.
- [startFrame](key/startframe.md): The size and location of the window or view at the start of the animation.
- [target](key/target.md): The target of the animation.

### Initializers

- [init(rawValue:)](key/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting and setting view-animation dictionaries

- [viewAnimations](viewanimations.md): The dictionaries defining the objects to animate.
- [NSViewAnimation.EffectName](effectname.md): The following constants specify the animation effect to apply and are used as values for the animation effect property of the animation view. See the description of [effect](key/effect.md) for usage details.

# NSViewAnimationKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The following string constants are keys for the dictionaries in the array passed into [initWithViewAnimations:](init%28viewanimations_%29.md) and [viewAnimations](viewanimations.md).

## Declaration

```objectivec
typedef NSString * NSViewAnimationKey;
```

## Topics

### Keys

- [NSViewAnimationEffectKey](key/effect.md): An effect to apply to the animation.
- [NSViewAnimationEndFrameKey](key/endframe.md): The size and location of the window or view at the end of the animation.
- [NSViewAnimationStartFrameKey](key/startframe.md): The size and location of the window or view at the start of the animation.
- [NSViewAnimationTargetKey](key/target.md): The target of the animation.

## See Also

### Getting and setting view-animation dictionaries

- [viewAnimations](viewanimations.md): The dictionaries defining the objects to animate.
- [NSViewAnimationEffectName](effectname.md): The following constants specify the animation effect to apply and are used as values for the animation effect property of the animation view. See the description of [NSViewAnimationEffectKey](key/effect.md) for usage details.
