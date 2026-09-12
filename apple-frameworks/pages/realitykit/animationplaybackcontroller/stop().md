> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller/stop()](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller/stop())

# stop()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Stops an animation.

## Declaration

```swift
@MainActor @preconcurrency func stop()
```

<a id="discussion"></a>

## Discussion

This method has no effect if the animation is complete. After you stop the animation, the playback controller becomes invalid. Create a new one with the same resource to play the animation again.

## See Also

### Inspecting and controlling playback

- [pause()](pause%28%29.md): Pauses the animation.
- [resume()](resume%28%29.md): Resumes a paused animation.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the animation plays.
- [isStopped](isstopped.md): A Boolean value that indicates whether the animation stopped.
- [isValid](isvalid.md): A Boolean value that indicates whether the animation controller is functional.
- [blendFactor](blendfactor.md): The level of influence the controller gives to its animation.
