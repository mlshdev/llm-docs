> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/clearstart()](https://developer.apple.com/documentation/appkit/nsanimation/clearstart())

# clearStart() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Clears linkage to another animation that causes the receiver to start.

## Declaration

```swift
func clearStart()
```

<a id="Discussion"></a>

## Discussion

The linkage to the other animation is made with [start(when:reachesProgress:)](start%28when_reachesprogress_%29.md).

## See Also

### Related Documentation

- [start()](start%28%29.md): Starts the animation represented by the receiver.

### Linking Animations Together

- [start(when:reachesProgress:)](start%28when_reachesprogress_%29.md): Starts running the animation represented by the receiver when another animation reaches a specific progress mark.
- [stop(when:reachesProgress:)](stop%28when_reachesprogress_%29.md): Stops running the animation represented by the receiver when another animation reaches a specific progress mark.
- [clearStop()](clearstop%28%29.md): Clears linkage to another animation that causes the receiver to stop.

# clearStartAnimation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Clears linkage to another animation that causes the receiver to start.

## Declaration

```objectivec
- (void) clearStartAnimation;
```

<a id="Discussion"></a>

## Discussion

The linkage to the other animation is made with [startWhenAnimation:reachesProgress:](start%28when_reachesprogress_%29.md).

## See Also

### Related Documentation

- [startAnimation](start%28%29.md): Starts the animation represented by the receiver.

### Linking Animations Together

- [startWhenAnimation:reachesProgress:](start%28when_reachesprogress_%29.md): Starts running the animation represented by the receiver when another animation reaches a specific progress mark.
- [stopWhenAnimation:reachesProgress:](stop%28when_reachesprogress_%29.md): Stops running the animation represented by the receiver when another animation reaches a specific progress mark.
- [clearStopAnimation](clearstop%28%29.md): Clears linkage to another animation that causes the receiver to stop.
