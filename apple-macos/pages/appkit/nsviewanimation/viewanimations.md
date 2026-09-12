> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewanimation/viewanimations](https://developer.apple.com/documentation/appkit/nsviewanimation/viewanimations)

# viewAnimations (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The dictionaries defining the objects to animate.

## Declaration

```swift
var viewAnimations: [[NSViewAnimation.Key : Any]] { get set }
```

## See Also

### Getting and setting view-animation dictionaries

- [NSViewAnimation.Key](key.md): The following string constants are keys for the dictionaries in the array passed into [init(viewAnimations:)](init%28viewanimations_%29.md) and [viewAnimations](viewanimations.md).
- [NSViewAnimation.EffectName](effectname.md): The following constants specify the animation effect to apply and are used as values for the animation effect property of the animation view. See the description of [effect](key/effect.md) for usage details.

# viewAnimations (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The dictionaries defining the objects to animate.

## Declaration

```objectivec
@property (copy) NSArray<NSDictionary<NSString *,id> *> * viewAnimations;
```

## See Also

### Getting and setting view-animation dictionaries

- [NSViewAnimationKey](key.md): The following string constants are keys for the dictionaries in the array passed into [initWithViewAnimations:](init%28viewanimations_%29.md) and [viewAnimations](viewanimations.md).
- [NSViewAnimationEffectName](effectname.md): The following constants specify the animation effect to apply and are used as values for the animation effect property of the animation view. See the description of [NSViewAnimationEffectKey](key/effect.md) for usage details.
