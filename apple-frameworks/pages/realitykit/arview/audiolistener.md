> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/audiolistener](https://developer.apple.com/documentation/realitykit/arview/audiolistener)

# audioListener

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

The entity that defines the listener position and orientation for spatial audio.

## Declaration

```swift
@MainActor @preconcurrency var audioListener: Entity? { get set }
```

<a id="discussion"></a>

## Discussion

Set the [audioListener](audiolistener.md) to the entity in the scene from whose point of view RealityKit should render spatial audio.

By default, the property is set to `nil`, in which case the active camera acts as the audio listener. This is usually what you want, because the camera typically mirrors the user’s point of view.

## See Also

### Providing environmental context

- [environment](environment-swift.property.md): The view’s background, lighting, and acoustic properties.
- [physicsOrigin](physicsorigin.md): The entity that defines the origin of the scene’s physics simulation.
