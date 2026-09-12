> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewanimation/key/startframe](https://developer.apple.com/documentation/appkit/nsviewanimation/key/startframe)

# startFrame (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The size and location of the window or view at the start of the animation.

## Declaration

```swift
static let startFrame: NSViewAnimation.Key
```

<a id="Discussion"></a>

## Discussion

The size and location are specified by an [NSRect](https://developer.apple.com/documentation/foundation/nsrect) structure encoded in an [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) object. This property is optional. If it is not specified, `NSViewAnimation` uses the frame of the window or view at the start of the animation.

## See Also

### Keys

- [effect](effect.md): An effect to apply to the animation.
- [endFrame](endframe.md): The size and location of the window or view at the end of the animation.
- [target](target.md): The target of the animation.

# NSViewAnimationStartFrameKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The size and location of the window or view at the start of the animation.

## Declaration

```objectivec
extern NSViewAnimationKey NSViewAnimationStartFrameKey;
```

<a id="Discussion"></a>

## Discussion

The size and location are specified by an [NSRect](https://developer.apple.com/documentation/foundation/nsrect) structure encoded in an [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) object. This property is optional. If it is not specified, `NSViewAnimation` uses the frame of the window or view at the start of the animation.

## See Also

### Keys

- [NSViewAnimationEffectKey](effect.md): An effect to apply to the animation.
- [NSViewAnimationEndFrameKey](endframe.md): The size and location of the window or view at the end of the animation.
- [NSViewAnimationTargetKey](target.md): The target of the animation.
