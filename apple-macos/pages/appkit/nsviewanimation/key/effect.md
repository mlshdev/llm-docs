> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewanimation/key/effect](https://developer.apple.com/documentation/appkit/nsviewanimation/key/effect)

# effect (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

An effect to apply to the animation.

## Declaration

```swift
static let effect: NSViewAnimation.Key
```

<a id="Discussion"></a>

## Discussion

Takes a string constant specifying fade-in or fade-out effects for the target: `NSViewAnimationFadeInEffect` and `NSViewAnimationFadeOutEffect`. If the target is a view and the effect is to fade out, the view is hidden at the end. If the effect is to fade in an initially hidden view and the end frame is non-empty, the view is unhidden at the end. If the target is a window, the window is ordered in or out as appropriate to the effect. This property is optional.

## See Also

### Keys

- [endFrame](endframe.md): The size and location of the window or view at the end of the animation.
- [startFrame](startframe.md): The size and location of the window or view at the start of the animation.
- [target](target.md): The target of the animation.

# NSViewAnimationEffectKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

An effect to apply to the animation.

## Declaration

```objectivec
extern NSViewAnimationKey NSViewAnimationEffectKey;
```

<a id="Discussion"></a>

## Discussion

Takes a string constant specifying fade-in or fade-out effects for the target: `NSViewAnimationFadeInEffect` and `NSViewAnimationFadeOutEffect`. If the target is a view and the effect is to fade out, the view is hidden at the end. If the effect is to fade in an initially hidden view and the end frame is non-empty, the view is unhidden at the end. If the target is a window, the window is ordered in or out as appropriate to the effect. This property is optional.

## See Also

### Keys

- [NSViewAnimationEndFrameKey](endframe.md): The size and location of the window or view at the end of the animation.
- [NSViewAnimationStartFrameKey](startframe.md): The size and location of the window or view at the start of the animation.
- [NSViewAnimationTargetKey](target.md): The target of the animation.
