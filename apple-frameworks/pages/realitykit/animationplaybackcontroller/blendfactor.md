> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller/blendfactor](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller/blendfactor)

# blendFactor

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The level of influence the controller gives to its animation.

## Declaration

```swift
@MainActor @preconcurrency var blendFactor: Float { get set }
```

<a id="discussion"></a>

## Discussion

You can run multiple animations on the same property, for example, walking and jumping animations that affect the same joint transforms. When multiple animations adjust the same property at runtime, the framework applies this blend factor on the animations’ respective controllers to calculate a middle ground value that displays at runtime.

## See Also

### Inspecting and controlling playback

- [pause()](pause%28%29.md): Pauses the animation.
- [resume()](resume%28%29.md): Resumes a paused animation.
- [stop()](stop%28%29.md): Stops an animation.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the animation plays.
- [isStopped](isstopped.md): A Boolean value that indicates whether the animation stopped.
- [isValid](isvalid.md): A Boolean value that indicates whether the animation controller is functional.
