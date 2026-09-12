> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/immersivespacefromremotespacetransform](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/immersivespacefromremotespacetransform)

# immersiveSpaceFromRemoteSpaceTransform

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

A transform matrix which maps from the streamed scene’s coordinate space origin to the origin of the app’s immersive space.

## Declaration

```swift
@MainActor final var immersiveSpaceFromRemoteSpaceTransform: simd_float4x4 { get set }
```

<a id="discussion"></a>

## Discussion

By default, the origin of the remote scene matches the origin of your app’s immersive space. You can use this API to manipulate that conversion – e.g. to travel around a larger scene.

For example, the following moves the entire streamed scene 5 meters to the right along the X axis:

```swift
    session.immersiveSpaceFromRemoteSpaceTransform = Transform(translation: [5, 0, 0]).matrix
```
