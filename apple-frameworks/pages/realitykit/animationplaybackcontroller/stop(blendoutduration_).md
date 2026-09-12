> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller/stop(blendoutduration:)](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller/stop(blendoutduration:))

# stop(blendOutDuration:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Stops an animation with a fade-out time.

## Declaration

```swift
@MainActor @preconcurrency func stop(blendOutDuration: TimeInterval)
```

## Parameters

- `blendOutDuration`: Time (in seconds) to fade out the animation before it stops.

<a id="discussion"></a>

## Discussion

This method has no effect if the animation is complete. After you stop the animation, the playback controller becomes invalid. Create a new one with the same resource to play the animation again.
