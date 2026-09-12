> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/canstepbackward](https://developer.apple.com/documentation/avfoundation/avplayeritem/canstepbackward)

# canStepBackward (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the item supports stepping backward.

## Declaration

```swift
nonisolated var canStepBackward: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Once the item becomes ready to play, the value of this property does not change. This behavior applies even when boundary conditions, such as when the item’s current time is [zero](../../coremedia/cmtime/zero.md), have been reached.

## See Also

### Stepping through media

- [canStepForward](canstepforward.md): A Boolean value that indicates whether the item supports stepping forward.
- [step(byCount:)](step%28bycount_%29.md): Moves the player item’s current time forward or backward by a specified number of steps.

# canStepBackward (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the item supports stepping backward.

## Declaration

```objectivec
@property (readonly) BOOL canStepBackward;
```

<a id="Discussion"></a>

## Discussion

Once the item becomes ready to play, the value of this property does not change. This behavior applies even when boundary conditions, such as when the item’s current time is [kCMTimeZero](../../coremedia/cmtime/zero.md), have been reached.

## See Also

### Stepping through media

- [canStepForward](canstepforward.md): A Boolean value that indicates whether the item supports stepping forward.
- [stepByCount:](step%28bycount_%29.md): Moves the player item’s current time forward or backward by a specified number of steps.
