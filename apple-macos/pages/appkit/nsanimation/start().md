> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/start()](https://developer.apple.com/documentation/appkit/nsanimation/start())

# start() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts the animation represented by the receiver.

## Declaration

```swift
func start()
```

<a id="Discussion"></a>

## Discussion

A strong reference to the animation is maintained until the end of the animation or until its [stop()](stop%28%29.md) method is called. If the blocking mode is [NSAnimation.BlockingMode.blocking](blockingmode/blocking.md), this method returns after the animation has completed or the delegate sends it [stop()](stop%28%29.md). If the receiver has a progress of `1.0`, it starts again at `0.0`.

## See Also

### Related Documentation

- [start(when:reachesProgress:)](start%28when_reachesprogress_%29.md): Starts running the animation represented by the receiver when another animation reaches a specific progress mark.

### Controlling and Monitoring an Animation

- [stop()](stop%28%29.md): Stops the animation represented by the receiver.
- [isAnimating](isanimating.md): A Boolean value indicating whether the animation is in progress.
- [currentProgress](currentprogress.md): The current progress of the animation.
- [currentValue](currentvalue.md): The current value of the animation effect, based on the current progress

# startAnimation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts the animation represented by the receiver.

## Declaration

```objectivec
- (void) startAnimation;
```

<a id="Discussion"></a>

## Discussion

A strong reference to the animation is maintained until the end of the animation or until its [stopAnimation](stop%28%29.md) method is called. If the blocking mode is [NSAnimationBlocking](blockingmode/blocking.md), this method returns after the animation has completed or the delegate sends it [stopAnimation](stop%28%29.md). If the receiver has a progress of `1.0`, it starts again at `0.0`.

## See Also

### Related Documentation

- [startWhenAnimation:reachesProgress:](start%28when_reachesprogress_%29.md): Starts running the animation represented by the receiver when another animation reaches a specific progress mark.

### Controlling and Monitoring an Animation

- [stopAnimation](stop%28%29.md): Stops the animation represented by the receiver.
- [animating](isanimating.md): A Boolean value indicating whether the animation is in progress.
- [currentProgress](currentprogress.md): The current progress of the animation.
- [currentValue](currentvalue.md): The current value of the animation effect, based on the current progress
