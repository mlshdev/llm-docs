> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewcameracontent/audiolistener](https://developer.apple.com/documentation/realitykit/realityviewcameracontent/audiolistener)

# audioListener

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

The entity which defines the listener position and orientation for spatial audio.

## Declaration

```swift
var audioListener: Entity? { get set }
```

<a id="discussion"></a>

## Discussion

By default this `audioListener` property is nil, which means that the active camera entity will be used as the audio listener. The `audioListener` can be set to any entity in the `scene` to use the transform of the entity as the audio listener position and orientation.
