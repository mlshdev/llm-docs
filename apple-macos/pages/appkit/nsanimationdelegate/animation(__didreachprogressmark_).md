> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationdelegate/animation(_:didreachprogressmark:)](https://developer.apple.com/documentation/appkit/nsanimationdelegate/animation(_:didreachprogressmark:))

# animation(\_:didReachProgressMark:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate when an animation reaches a specific progress mark.

## Declaration

```swift
nonisolated optional func animation(_ animation: NSAnimation, didReachProgressMark progress: NSAnimation.Progress)
```

## Parameters

- `animation`: A running `NSAnimation` object that has reached a progress mark.
- `progress`: A `float` value (typed as `NSAnimationProgress`) that indicates a progress mark of `animation`.

<a id="Discussion"></a>

## Discussion

The delegate typically implements this method to perform some animation effect for the time slice indicated by `progress`, such as redrawing objects in a view with new coordinates or changing the frame location or size of a window or view. As an alternative to this delegation message, you may choose to observe the [progressMarkNotification](../nsanimation/progressmarknotification.md) notification.

# animation:didReachProgressMark: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate when an animation reaches a specific progress mark.

## Declaration

```objectivec
- (void) animation:(NSAnimation *) animation didReachProgressMark:(NSAnimationProgress) progress;
```

## Parameters

- `animation`: A running `NSAnimation` object that has reached a progress mark.
- `progress`: A `float` value (typed as `NSAnimationProgress`) that indicates a progress mark of `animation`.

<a id="Discussion"></a>

## Discussion

The delegate typically implements this method to perform some animation effect for the time slice indicated by `progress`, such as redrawing objects in a view with new coordinates or changing the frame location or size of a window or view. As an alternative to this delegation message, you may choose to observe the [NSAnimationProgressMarkNotification](../nsanimation/progressmarknotification.md) notification.
