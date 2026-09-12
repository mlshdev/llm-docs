> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/stop(when:reachesprogress:)](https://developer.apple.com/documentation/appkit/nsanimation/stop(when:reachesprogress:))

# stop(when:reachesProgress:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops running the animation represented by the receiver when another animation reaches a specific progress mark.

## Declaration

```swift
func stop(when animation: NSAnimation, reachesProgress stopProgress: NSAnimation.Progress)
```

## Parameters

- `animation`: The other `NSAnimation` object with which the receiver is linked.
- `stopProgress`: A `float` value (typed as NSAnimationProgress) that specifies a progress mark of the other animation.

<a id="Discussion"></a>

## Discussion

This method links the running of two animations together. You can set only one `NSAnimation` object as a start animation and one as a stop animation at any one time. Setting a new stop animation removes any animation previously set.

## See Also

### Related Documentation

- [stop()](stop%28%29.md): Stops the animation represented by the receiver.

### Linking Animations Together

- [start(when:reachesProgress:)](start%28when_reachesprogress_%29.md): Starts running the animation represented by the receiver when another animation reaches a specific progress mark.
- [clearStart()](clearstart%28%29.md): Clears linkage to another animation that causes the receiver to start.
- [clearStop()](clearstop%28%29.md): Clears linkage to another animation that causes the receiver to stop.

# stopWhenAnimation:reachesProgress: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops running the animation represented by the receiver when another animation reaches a specific progress mark.

## Declaration

```objectivec
- (void) stopWhenAnimation:(NSAnimation *) animation reachesProgress:(NSAnimationProgress) stopProgress;
```

## Parameters

- `animation`: The other `NSAnimation` object with which the receiver is linked.
- `stopProgress`: A `float` value (typed as NSAnimationProgress) that specifies a progress mark of the other animation.

<a id="Discussion"></a>

## Discussion

This method links the running of two animations together. You can set only one `NSAnimation` object as a start animation and one as a stop animation at any one time. Setting a new stop animation removes any animation previously set.

## See Also

### Related Documentation

- [stopAnimation](stop%28%29.md): Stops the animation represented by the receiver.

### Linking Animations Together

- [startWhenAnimation:reachesProgress:](start%28when_reachesprogress_%29.md): Starts running the animation represented by the receiver when another animation reaches a specific progress mark.
- [clearStartAnimation](clearstart%28%29.md): Clears linkage to another animation that causes the receiver to start.
- [clearStopAnimation](clearstop%28%29.md): Clears linkage to another animation that causes the receiver to stop.
