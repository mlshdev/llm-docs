> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayeritem/step(bycount:)

# step(byCount:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Moves the player item’s current time forward or backward by a specified number of steps.

## Declaration

```swift
nonisolated func step(byCount stepCount: Int)
```

## Parameters

- `stepCount`: The number of steps by which to move.

  A positive number steps forward, a negative number steps backward.

<a id="Discussion"></a>

## Discussion

The size of each step depends on the receiver’s enabled `AVPlayerItemTrack` objects (see [tracks](tracks.md)).

## See Also

### Stepping through media

- [canStepForward](canstepforward.md): A Boolean value that indicates whether the item supports stepping forward.
- [canStepBackward](canstepbackward.md): A Boolean value that indicates whether the item supports stepping backward.

# stepByCount: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Moves the player item’s current time forward or backward by a specified number of steps.

## Declaration

```objectivec
- (void) stepByCount:(NSInteger) stepCount;
```

## Parameters

- `stepCount`: The number of steps by which to move.

  A positive number steps forward, a negative number steps backward.

<a id="Discussion"></a>

## Discussion

The size of each step depends on the receiver’s enabled `AVPlayerItemTrack` objects (see [tracks](tracks.md)).

## See Also

### Stepping through media

- [canStepForward](canstepforward.md): A Boolean value that indicates whether the item supports stepping forward.
- [canStepBackward](canstepbackward.md): A Boolean value that indicates whether the item supports stepping backward.
