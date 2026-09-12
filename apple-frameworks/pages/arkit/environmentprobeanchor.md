> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/environmentprobeanchor](https://developer.apple.com/documentation/arkit/environmentprobeanchor)

# EnvironmentProbeAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An environment probe in the world.

## Declaration

```swift
struct EnvironmentProbeAnchor
```

<a id="overview"></a>

## Overview

Use environment probes to light virtual geometry by producing environment textures from the probe’s location in the world.

> **Note**

>  The framework always positions the anchor at the location of the Vision Pro device.

## Topics

### Getting anchor information

- [environmentTexture](environmentprobeanchor/environmenttexture.md): The environment texture of an anchor.
- [cameraScaleReference](environmentprobeanchor/camerascalereference.md): The camera scale reference of this anchor.
- [originFromAnchorTransform](environmentprobeanchor/originfromanchortransform.md): The transform from the environment probe anchor to the origin coordinate system.

### Comparing environment probe anchors

- [id](environmentprobeanchor/id.md): The unique identifier of this anchor.
- [description](environmentprobeanchor/description.md): A textual representation of this anchor.

### Operators

- [==(\_:\_:)](environmentprobeanchor/==%28____%29.md): Returns a Boolean value indicating whether two environment probe anchors are equal.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](environmentprobeanchor/arkitcoordinatespaceproviding-implementations.md)

## Relationships

### Conforms To

- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md)
- [Anchor](anchor.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Lighting estimation

- [EnvironmentLightEstimationProvider](environmentlightestimationprovider.md): A source of live data about lighting information in the environment.
