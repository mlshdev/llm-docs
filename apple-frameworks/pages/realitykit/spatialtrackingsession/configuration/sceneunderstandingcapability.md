> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spatialtrackingsession/configuration/sceneunderstandingcapability](https://developer.apple.com/documentation/realitykit/spatialtrackingsession/configuration/sceneunderstandingcapability)

# SpatialTrackingSession.Configuration.SceneUnderstandingCapability

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

Defines how system behaviors use scene understanding.

## Declaration

```swift
struct SceneUnderstandingCapability
```

## Topics

### Instance Properties

- [debugDescription](sceneunderstandingcapability/debugdescription.md): A human-readable description of the scene-understanding capability.

### Type Properties

- [collision](sceneunderstandingcapability/collision.md): The capability that allows the system to use scene-understanding data for collisions.
- [occlusion](sceneunderstandingcapability/occlusion.md): The capability that allows the system to use scene-understanding data for occlusion.
- [physics](sceneunderstandingcapability/physics.md): The capability that allows the system to use scene-understanding data for physics simulation.
- [shadow](sceneunderstandingcapability/shadow.md): The capability that allows the system to use scene-understanding data for shadow casting.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Spatial tracking

- [SpatialTrackingSession](../../spatialtrackingsession.md): An object that incorporates spatial tracking capabilities into your RealityKit apps.
- [SpatialTrackingSession.Configuration](../configuration.md): A type for configuring the spatial tracking session.
- [SpatialTrackingSession.Configuration.AnchorCapability](anchorcapability.md): A type that defines various anchor tracking capabilities.
- [SpatialTrackingSession.Configuration.Camera](camera.md): Defines the camera feed the RealityView renders.
- [SpatialTrackingSession.UnavailableCapabilities](../unavailablecapabilities.md): A type that contains the unavailable capabilities of the current spatial tracking session.
