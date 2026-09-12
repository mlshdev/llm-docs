> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/stop()](https://developer.apple.com/documentation/appkit/nsanimation/stop())

# stop() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops the animation represented by the receiver.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

The current progress of the receiver is not reset.  When this method is sent to instances of [NSViewAnimation](../nsviewanimation.md) (a subclass of `NSAnimation`) the receiver moves to the end frame location.

## See Also

### Related Documentation

- [stop(when:reachesProgress:)](stop%28when_reachesprogress_%29.md): Stops running the animation represented by the receiver when another animation reaches a specific progress mark.

### Controlling and Monitoring an Animation

- [start()](start%28%29.md): Starts the animation represented by the receiver.
- [isAnimating](isanimating.md): A Boolean value indicating whether the animation is in progress.
- [currentProgress](currentprogress.md): The current progress of the animation.
- [currentValue](currentvalue.md): The current value of the animation effect, based on the current progress

# stopAnimation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops the animation represented by the receiver.

## Declaration

```objectivec
- (void) stopAnimation;
```

<a id="Discussion"></a>

## Discussion

The current progress of the receiver is not reset.  When this method is sent to instances of [NSViewAnimation](../nsviewanimation.md) (a subclass of `NSAnimation`) the receiver moves to the end frame location.

## See Also

### Related Documentation

- [stopWhenAnimation:reachesProgress:](stop%28when_reachesprogress_%29.md): Stops running the animation represented by the receiver when another animation reaches a specific progress mark.

### Controlling and Monitoring an Animation

- [startAnimation](start%28%29.md): Starts the animation represented by the receiver.
- [animating](isanimating.md): A Boolean value indicating whether the animation is in progress.
- [currentProgress](currentprogress.md): The current progress of the animation.
- [currentValue](currentvalue.md): The current value of the animation effect, based on the current progress
