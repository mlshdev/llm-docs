> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller/resume()](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller/resume())

# resume()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Resumes a paused animation.

## Declaration

```swift
@MainActor @preconcurrency func resume()
```

<a id="discussion"></a>

## Discussion

Call this method to resume an animation that you paused with the [pause()](pause%28%29.md) method. You can’t resume an animation that has finished naturally, or that you stopped by calling the [stop()](stop%28%29.md) method.

This method has no effect on an animation that isn’t paused.

## See Also

### Inspecting and controlling playback

- [pause()](pause%28%29.md): Pauses the animation.
- [stop()](stop%28%29.md): Stops an animation.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the animation plays.
- [isStopped](isstopped.md): A Boolean value that indicates whether the animation stopped.
- [isValid](isvalid.md): A Boolean value that indicates whether the animation controller is functional.
- [blendFactor](blendfactor.md): The level of influence the controller gives to its animation.
