> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/progress](https://developer.apple.com/documentation/appkit/nsanimation/progress)

# NSAnimation.Progress (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The animation progress, as a floating-point number between `0.0` and `1.0`.

## Declaration

```swift
typealias Progress = Float
```

<a id="Discussion"></a>

## Discussion

An animation progress value is returned in the `userInfo` dictionary of an [progressMarkNotification](progressmarknotification.md) notification.

## See Also

### View-Based Animations

- [NSViewAnimation](../nsviewanimation.md): An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.
- [NSAnimatablePropertyContainer](../nsanimatablepropertycontainer.md): A set of methods that defines a way to add animation to an existing class with a minimum of API impact.
- [NSAnimationContext](../nsanimationcontext.md): An animation context, which contains information about environment and state.
- [NSAnimationEffect](../nsanimationeffect.md): Deprecated. The type for standard system animation effects, which include both display and sound.

# NSAnimationProgress (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The animation progress, as a floating-point number between `0.0` and `1.0`.

## Declaration

```objectivec
typedef float NSAnimationProgress;
```

<a id="Discussion"></a>

## Discussion

An animation progress value is returned in the `userInfo` dictionary of an [NSAnimationProgressMarkNotification](progressmarknotification.md) notification.

## See Also

### View-Based Animations

- [NSViewAnimation](../nsviewanimation.md): An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.
- [NSAnimatablePropertyContainer](../nsanimatablepropertycontainer.md): A set of methods that defines a way to add animation to an existing class with a minimum of API impact.
- [NSAnimationContext](../nsanimationcontext.md): An animation context, which contains information about environment and state.
- [NSAnimationEffect](../nsanimationeffect.md): Deprecated. The type for standard system animation effects, which include both display and sound.
