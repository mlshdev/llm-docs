> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/clearstop()](https://developer.apple.com/documentation/appkit/nsanimation/clearstop())

# clearStop() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Clears linkage to another animation that causes the receiver to stop.

## Declaration

```swift
func clearStop()
```

<a id="Discussion"></a>

## Discussion

The linkage to the other animation is made with [stop(when:reachesProgress:)](stop%28when_reachesprogress_%29.md).

## See Also

### Related Documentation

- [stop()](stop%28%29.md): Stops the animation represented by the receiver.

### Linking Animations Together

- [start(when:reachesProgress:)](start%28when_reachesprogress_%29.md): Starts running the animation represented by the receiver when another animation reaches a specific progress mark.
- [stop(when:reachesProgress:)](stop%28when_reachesprogress_%29.md): Stops running the animation represented by the receiver when another animation reaches a specific progress mark.
- [clearStart()](clearstart%28%29.md): Clears linkage to another animation that causes the receiver to start.

# clearStopAnimation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Clears linkage to another animation that causes the receiver to stop.

## Declaration

```objectivec
- (void) clearStopAnimation;
```

<a id="Discussion"></a>

## Discussion

The linkage to the other animation is made with [stopWhenAnimation:reachesProgress:](stop%28when_reachesprogress_%29.md).

## See Also

### Related Documentation

- [stopAnimation](stop%28%29.md): Stops the animation represented by the receiver.

### Linking Animations Together

- [startWhenAnimation:reachesProgress:](start%28when_reachesprogress_%29.md): Starts running the animation represented by the receiver when another animation reaches a specific progress mark.
- [stopWhenAnimation:reachesProgress:](stop%28when_reachesprogress_%29.md): Stops running the animation represented by the receiver when another animation reaches a specific progress mark.
- [clearStartAnimation](clearstart%28%29.md): Clears linkage to another animation that causes the receiver to start.
