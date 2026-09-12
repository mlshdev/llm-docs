> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller/pause()](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller/pause())

# pause()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Pauses the animation.

## Declaration

```swift
@MainActor @preconcurrency func pause()
```

<a id="discussion"></a>

## Discussion

Resume a paused animation by calling the [resume()](resume%28%29.md) method.

This method has no effect if the animation is already paused or complete.

## See Also

### Inspecting and controlling playback

- [resume()](resume%28%29.md): Resumes a paused animation.
- [stop()](stop%28%29.md): Stops an animation.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the animation plays.
- [isStopped](isstopped.md): A Boolean value that indicates whether the animation stopped.
- [isValid](isvalid.md): A Boolean value that indicates whether the animation controller is functional.
- [blendFactor](blendfactor.md): The level of influence the controller gives to its animation.
