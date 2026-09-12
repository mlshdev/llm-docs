> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationdelegate/animationdidstop(_:)](https://developer.apple.com/documentation/appkit/nsanimationdelegate/animationdidstop(_:))

# animationDidStop(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate when the specified animation is stopped before it completes its run.

## Declaration

```swift
nonisolated optional func animationDidStop(_ animation: NSAnimation)
```

## Parameters

- `animation`: The `NSAnimation` instance that was stopped.

<a id="Discussion"></a>

## Discussion

An `NSAnimation` object stops running when it receives a [stop()](../nsanimation/stop%28%29.md) message.

## See Also

### Controlling and Monitoring an Animation

- [animationDidEnd(\_:)](animationdidend%28__%29.md): Sent to the delegate when the specified animation completes its run.
- [animationShouldStart(\_:)](animationshouldstart%28__%29.md): Sent to the delegate just after an animation is started.
- [animation(\_:valueForProgress:)](animation%28__valueforprogress_%29.md): Requests a custom curve value for the current progress value.

# animationDidStop: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate when the specified animation is stopped before it completes its run.

## Declaration

```objectivec
- (void) animationDidStop:(NSAnimation *) animation;
```

## Parameters

- `animation`: The `NSAnimation` instance that was stopped.

<a id="Discussion"></a>

## Discussion

An `NSAnimation` object stops running when it receives a [stopAnimation](../nsanimation/stop%28%29.md) message.

## See Also

### Controlling and Monitoring an Animation

- [animationDidEnd:](animationdidend%28__%29.md): Sent to the delegate when the specified animation completes its run.
- [animationShouldStart:](animationshouldstart%28__%29.md): Sent to the delegate just after an animation is started.
- [animation:valueForProgress:](animation%28__valueforprogress_%29.md): Requests a custom curve value for the current progress value.
