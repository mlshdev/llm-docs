> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewanimation/effectname](https://developer.apple.com/documentation/appkit/nsviewanimation/effectname)

# NSViewAnimation.EffectName (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The following constants specify the animation effect to apply and are used as values for the animation effect property of the animation view. See the description of [effect](key/effect.md) for usage details.

## Declaration

```swift
struct EffectName
```

## Topics

### Effect Names

- [fadeIn](effectname/fadein.md): Specifies a fade-in type of effect.
- [fadeOut](effectname/fadeout.md): Specifies a fade-out type of effect.

### Initializers

- [init(rawValue:)](effectname/init%28rawvalue_%29.md)

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
- [NSViewAnimation.Key](key.md): The following string constants are keys for the dictionaries in the array passed into [init(viewAnimations:)](init%28viewanimations_%29.md) and [viewAnimations](viewanimations.md).

# NSViewAnimationEffectName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The following constants specify the animation effect to apply and are used as values for the animation effect property of the animation view. See the description of [NSViewAnimationEffectKey](key/effect.md) for usage details.

## Declaration

```objectivec
typedef NSString * NSViewAnimationEffectName;
```

## Topics

### Effect Names

- [NSViewAnimationFadeInEffect](effectname/fadein.md): Specifies a fade-in type of effect.
- [NSViewAnimationFadeOutEffect](effectname/fadeout.md): Specifies a fade-out type of effect.

## See Also

### Getting and setting view-animation dictionaries

- [viewAnimations](viewanimations.md): The dictionaries defining the objects to animate.
- [NSViewAnimationKey](key.md): The following string constants are keys for the dictionaries in the array passed into [initWithViewAnimations:](init%28viewanimations_%29.md) and [viewAnimations](viewanimations.md).
