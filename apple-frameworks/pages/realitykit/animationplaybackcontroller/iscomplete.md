> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller/iscomplete](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller/iscomplete)

# isComplete

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A Boolean that indicates whether the animation has finished running.

## Declaration

```swift
@MainActor @preconcurrency var isComplete: Bool { get }
```

<a id="discussion"></a>

## Discussion

After an animation completes, the playback controller becomes invalid. To play the animation again, create a new controller with the same resource.

## See Also

### Managing completion

- [isPaused](ispaused.md): A Boolean that indicates whether the animation is paused.
