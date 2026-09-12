> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewanimation/key/target](https://developer.apple.com/documentation/appkit/nsviewanimation/key/target)

# target (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The target of the animation.

## Declaration

```swift
static let target: NSViewAnimation.Key
```

<a id="Discussion"></a>

## Discussion

The target can be either an [NSView](../../nsview.md) object or an [NSWindow](../../nswindow.md) object. This property is required.

## See Also

### Keys

- [effect](effect.md): An effect to apply to the animation.
- [endFrame](endframe.md): The size and location of the window or view at the end of the animation.
- [startFrame](startframe.md): The size and location of the window or view at the start of the animation.

# NSViewAnimationTargetKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The target of the animation.

## Declaration

```objectivec
extern NSViewAnimationKey NSViewAnimationTargetKey;
```

<a id="Discussion"></a>

## Discussion

The target can be either an [NSView](../../nsview.md) object or an [NSWindow](../../nswindow.md) object. This property is required.

## See Also

### Keys

- [NSViewAnimationEffectKey](effect.md): An effect to apply to the animation.
- [NSViewAnimationEndFrameKey](endframe.md): The size and location of the window or view at the end of the animation.
- [NSViewAnimationStartFrameKey](startframe.md): The size and location of the window or view at the start of the animation.
