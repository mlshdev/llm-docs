> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spatialtrackingsession/unavailablecapabilities](https://developer.apple.com/documentation/realitykit/spatialtrackingsession/unavailablecapabilities)

# SpatialTrackingSession.UnavailableCapabilities

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 2.0+

A type that contains the unavailable capabilities of the current spatial tracking session.

## Declaration

```swift
struct UnavailableCapabilities
```

## Topics

### Initializers

- [init()](unavailablecapabilities/init%28%29.md): Creates an unavailable capabilities instance.

### Instance Properties

- [anchor](unavailablecapabilities/anchor.md): A type that contains all unavailable anchor capabilities.
- [debugDescription](unavailablecapabilities/debugdescription.md)
- [missingAuthorizations](unavailablecapabilities/missingauthorizations.md): The set of requested ARKit authorizations that the user doesn’t approve.
- [missingCameraAuthorization](unavailablecapabilities/missingcameraauthorization.md): Whether the person using the device approves the camera authorization or not.
- [sceneUnderstanding](unavailablecapabilities/sceneunderstanding.md): A type that contains all unavailable scene-understanding capabilities.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Spatial tracking

- [SpatialTrackingSession](../spatialtrackingsession.md): An object that incorporates spatial tracking capabilities into your RealityKit apps.
- [SpatialTrackingSession.Configuration](configuration.md): A type for configuring the spatial tracking session.
- [SpatialTrackingSession.Configuration.AnchorCapability](configuration/anchorcapability.md): A type that defines various anchor tracking capabilities.
- [SpatialTrackingSession.Configuration.SceneUnderstandingCapability](configuration/sceneunderstandingcapability.md): Defines how system behaviors use scene understanding.
- [SpatialTrackingSession.Configuration.Camera](configuration/camera.md): Defines the camera feed the RealityView renders.
