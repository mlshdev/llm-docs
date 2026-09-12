> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityrenderer/audiolistener](https://developer.apple.com/documentation/realitykit/realityrenderer/audiolistener)

# audioListener

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The entity which defines the listener position and orientation for spatial audio.

## Declaration

```swift
var audioListener: Entity? { get set }
```

<a id="discussion"></a>

## Discussion

By default this `audioListener` property is nil, which means that the active camera entity will be used as the audio listener. The `audioListener` can be set to any entity in the `scene` to use the transform of the entity as the audio listener position and orientation.
