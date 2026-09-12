> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spatialtrackingsession/configuration](https://developer.apple.com/documentation/realitykit/spatialtrackingsession/configuration)

# SpatialTrackingSession.Configuration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 2.0+

A type for configuring the spatial tracking session.

## Declaration

```swift
struct Configuration
```

## Topics

### Structures

- [SpatialTrackingSession.Configuration.AnchorCapability](configuration/anchorcapability.md): A type that defines various anchor tracking capabilities.
- [SpatialTrackingSession.Configuration.SceneUnderstandingCapability](configuration/sceneunderstandingcapability.md): Defines how system behaviors use scene understanding.

### Initializers

- [init(tracking:)](configuration/init%28tracking_%29.md): Creates a configuration with a set of anchor capabilities.
- [init(tracking:sceneUnderstanding:)](configuration/init%28tracking_sceneunderstanding_%29.md): Creates a configuration with a set of anchor capabilities and scene understanding capabilities.
- [init(tracking:sceneUnderstanding:camera:)](configuration/init%28tracking_sceneunderstanding_camera_%29.md): Creates a configuration with anchor capabilities, scene-understanding capabilities, and camera feeds.

### Instance Properties

- [debugDescription](configuration/debugdescription.md): A human-readable description of the configuration.

### Instance Methods

- [arConfiguration()](configuration/arconfiguration%28%29.md)
- [supportedConfiguration()](configuration/supportedconfiguration%28%29.md)

### Enumerations

- [SpatialTrackingSession.Configuration.Camera](configuration/camera.md): Defines the camera feed the RealityView renders.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Spatial tracking

- [SpatialTrackingSession](../spatialtrackingsession.md): An object that incorporates spatial tracking capabilities into your RealityKit apps.
- [SpatialTrackingSession.Configuration.AnchorCapability](configuration/anchorcapability.md): A type that defines various anchor tracking capabilities.
- [SpatialTrackingSession.Configuration.SceneUnderstandingCapability](configuration/sceneunderstandingcapability.md): Defines how system behaviors use scene understanding.
- [SpatialTrackingSession.Configuration.Camera](configuration/camera.md): Defines the camera feed the RealityView renders.
- [SpatialTrackingSession.UnavailableCapabilities](unavailablecapabilities.md): A type that contains the unavailable capabilities of the current spatial tracking session.
