> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller/isstopped](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller/isstopped)

# isStopped

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A Boolean value that indicates whether the animation stopped.

## Declaration

```swift
@MainActor @preconcurrency var isStopped: Bool { get }
```

<a id="discussion"></a>

## Discussion

This function returns `true` for stopped animations.

## See Also

### Inspecting and controlling playback

- [pause()](pause%28%29.md): Pauses the animation.
- [resume()](resume%28%29.md): Resumes a paused animation.
- [stop()](stop%28%29.md): Stops an animation.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the animation plays.
- [isValid](isvalid.md): A Boolean value that indicates whether the animation controller is functional.
- [blendFactor](blendfactor.md): The level of influence the controller gives to its animation.
