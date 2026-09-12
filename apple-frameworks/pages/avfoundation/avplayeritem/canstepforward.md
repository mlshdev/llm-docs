> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/canstepforward](https://developer.apple.com/documentation/avfoundation/avplayeritem/canstepforward)

# canStepForward (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the item supports stepping forward.

## Declaration

```swift
nonisolated var canStepForward: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Once the item becomes ready to play, the value of this property does not change. This behavior applies even when boundary conditions, such as when the item’s current time is equal to its end time, have been reached.

## See Also

### Stepping through media

- [canStepBackward](canstepbackward.md): A Boolean value that indicates whether the item supports stepping backward.
- [step(byCount:)](step%28bycount_%29.md): Moves the player item’s current time forward or backward by a specified number of steps.

# canStepForward (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the item supports stepping forward.

## Declaration

```objectivec
@property (readonly) BOOL canStepForward;
```

<a id="Discussion"></a>

## Discussion

Once the item becomes ready to play, the value of this property does not change. This behavior applies even when boundary conditions, such as when the item’s current time is equal to its end time, have been reached.

## See Also

### Stepping through media

- [canStepBackward](canstepbackward.md): A Boolean value that indicates whether the item supports stepping backward.
- [stepByCount:](step%28bycount_%29.md): Moves the player item’s current time forward or backward by a specified number of steps.
