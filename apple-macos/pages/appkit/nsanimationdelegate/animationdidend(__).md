> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationdelegate/animationdidend(_:)](https://developer.apple.com/documentation/appkit/nsanimationdelegate/animationdidend(_:))

# animationDidEnd(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate when the specified animation completes its run.

## Declaration

```swift
nonisolated optional func animationDidEnd(_ animation: NSAnimation)
```

## Parameters

- `animation`: The `NSAnimation` instance that completed its run.

<a id="Discussion"></a>

## Discussion

When an `NSAnimation` object reaches the end of its planned duration, it has a progress value of 1.0.

## See Also

### Related Documentation

- [NSAnimationDelegate](../nsanimationdelegate.md): A set of optional methods implemented by delegates of [NSAnimation](../nsanimation.md) objects.
- [currentProgress](../nsanimation/currentprogress.md): The current progress of the animation.

### Controlling and Monitoring an Animation

- [animationDidStop(\_:)](animationdidstop%28__%29.md): Sent to the delegate when the specified animation is stopped before it completes its run.
- [animationShouldStart(\_:)](animationshouldstart%28__%29.md): Sent to the delegate just after an animation is started.
- [animation(\_:valueForProgress:)](animation%28__valueforprogress_%29.md): Requests a custom curve value for the current progress value.

# animationDidEnd: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate when the specified animation completes its run.

## Declaration

```objectivec
- (void) animationDidEnd:(NSAnimation *) animation;
```

## Parameters

- `animation`: The `NSAnimation` instance that completed its run.

<a id="Discussion"></a>

## Discussion

When an `NSAnimation` object reaches the end of its planned duration, it has a progress value of 1.0.

## See Also

### Related Documentation

- [NSAnimationDelegate](../nsanimationdelegate.md): A set of optional methods implemented by delegates of [NSAnimation](../nsanimation.md) objects.
- [currentProgress](../nsanimation/currentprogress.md): The current progress of the animation.

### Controlling and Monitoring an Animation

- [animationDidStop:](animationdidstop%28__%29.md): Sent to the delegate when the specified animation is stopped before it completes its run.
- [animationShouldStart:](animationshouldstart%28__%29.md): Sent to the delegate just after an animation is started.
- [animation:valueForProgress:](animation%28__valueforprogress_%29.md): Requests a custom curve value for the current progress value.
