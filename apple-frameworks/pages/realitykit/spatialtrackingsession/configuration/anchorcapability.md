> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spatialtrackingsession/configuration/anchorcapability](https://developer.apple.com/documentation/realitykit/spatialtrackingsession/configuration/anchorcapability)

# SpatialTrackingSession.Configuration.AnchorCapability

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 2.0+

A type that defines various anchor tracking capabilities.

## Declaration

```swift
struct AnchorCapability
```

## Topics

### Instance Properties

- [debugDescription](anchorcapability/debugdescription.md): A human-readable description of the anchor capability.

### Type Properties

- [accessory](anchorcapability/accessory.md): The anchor capability that enables accessory tracking.
- [body](anchorcapability/body.md): The anchor capability that enables body tracking.
- [camera](anchorcapability/camera.md): The anchor capability that enables camera anchoring.
- [face](anchorcapability/face.md): The anchor capability that enables face tracking.
- [hand](anchorcapability/hand.md): The anchor capability that enables hand tracking.
- [image](anchorcapability/image.md): The anchor capability that enables image tracking.
- [object](anchorcapability/object.md): The anchor capability that enables object tracking.
- [plane](anchorcapability/plane.md): The anchor capability that enables plane detection.
- [world](anchorcapability/world.md): The anchor capability that enables world tracking.

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
- [SpatialTrackingSession.Configuration.SceneUnderstandingCapability](sceneunderstandingcapability.md): Defines how system behaviors use scene understanding.
- [SpatialTrackingSession.Configuration.Camera](camera.md): Defines the camera feed the RealityView renders.
- [SpatialTrackingSession.UnavailableCapabilities](../unavailablecapabilities.md): A type that contains the unavailable capabilities of the current spatial tracking session.
