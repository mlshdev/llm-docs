> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/start(when:reachesprogress:)](https://developer.apple.com/documentation/appkit/nsanimation/start(when:reachesprogress:))

# start(when:reachesProgress:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts running the animation represented by the receiver when another animation reaches a specific progress mark.

## Declaration

```swift
func start(when animation: NSAnimation, reachesProgress startProgress: NSAnimation.Progress)
```

## Parameters

- `animation`: The other `NSAnimation` object with which the receiver is linked.
- `startProgress`: A `float` value (typed as NSAnimationProgress) that specifies a progress mark of the other animation.

<a id="Discussion"></a>

## Discussion

This method links the running of two animations together. You can set only one `NSAnimation` object as a start animation and one as a stop animation at any one time. Setting a new start animation removes any animation previously set.

## See Also

### Related Documentation

- [start()](start%28%29.md): Starts the animation represented by the receiver.

### Linking Animations Together

- [stop(when:reachesProgress:)](stop%28when_reachesprogress_%29.md): Stops running the animation represented by the receiver when another animation reaches a specific progress mark.
- [clearStart()](clearstart%28%29.md): Clears linkage to another animation that causes the receiver to start.
- [clearStop()](clearstop%28%29.md): Clears linkage to another animation that causes the receiver to stop.

# startWhenAnimation:reachesProgress: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts running the animation represented by the receiver when another animation reaches a specific progress mark.

## Declaration

```objectivec
- (void) startWhenAnimation:(NSAnimation *) animation reachesProgress:(NSAnimationProgress) startProgress;
```

## Parameters

- `animation`: The other `NSAnimation` object with which the receiver is linked.
- `startProgress`: A `float` value (typed as NSAnimationProgress) that specifies a progress mark of the other animation.

<a id="Discussion"></a>

## Discussion

This method links the running of two animations together. You can set only one `NSAnimation` object as a start animation and one as a stop animation at any one time. Setting a new start animation removes any animation previously set.

## See Also

### Related Documentation

- [startAnimation](start%28%29.md): Starts the animation represented by the receiver.

### Linking Animations Together

- [stopWhenAnimation:reachesProgress:](stop%28when_reachesprogress_%29.md): Stops running the animation represented by the receiver when another animation reaches a specific progress mark.
- [clearStartAnimation](clearstart%28%29.md): Clears linkage to another animation that causes the receiver to start.
- [clearStopAnimation](clearstop%28%29.md): Clears linkage to another animation that causes the receiver to stop.
