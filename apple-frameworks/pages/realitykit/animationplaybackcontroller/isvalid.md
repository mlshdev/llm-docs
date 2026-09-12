> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller/isvalid](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller/isvalid)

# isValid

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A Boolean value that indicates whether the animation controller is functional.

## Declaration

```swift
@MainActor @preconcurrency var isValid: Bool { get }
```

<a id="discussion"></a>

## Discussion

This function returns `false` for stopped animations.

## See Also

### Inspecting and controlling playback

- [pause()](pause%28%29.md): Pauses the animation.
- [resume()](resume%28%29.md): Resumes a paused animation.
- [stop()](stop%28%29.md): Stops an animation.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the animation plays.
- [isStopped](isstopped.md): A Boolean value that indicates whether the animation stopped.
- [blendFactor](blendfactor.md): The level of influence the controller gives to its animation.
