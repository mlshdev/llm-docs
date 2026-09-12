> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/perspectivecamera](https://developer.apple.com/documentation/realitykit/perspectivecamera)

# PerspectiveCamera

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A virtual camera that establishes the rendering perspective.

## Declaration

```swift
@MainActor @preconcurrency class PerspectiveCamera
```

<a id="overview"></a>

## Overview

During an AR session, RealityKit automatically uses the device’s camera to define the perspective from which to render the scene. When rendering a scene outside of an AR session (with the view’s [cameraMode](arview/cameramode-swift.property.md) property set to [ARView.CameraMode.nonAR](arview/cameramode-swift.enum/nonar.md)), RealityKit uses a [PerspectiveCamera](perspectivecamera.md) instead. You can add a perspective camera anywhere in your scene to control the point of view. If you don’t explicitly provide one, RealityKit creates a default camera for you.

## Topics

### Creating a camera

- [init()](perspectivecamera/init%28%29.md): Creates a perspective camera entity.

## Relationships

### Inherits From

- [Entity](entity.md)

### Conforms To

- [CoordinateSpace3D](../spatial/coordinatespace3d.md)
- [CoordinateSpace3DFloat](../spatial/coordinatespace3dfloat.md)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [EventSource](eventsource.md)
- [HasHierarchy](hashierarchy.md)
- [HasPerspectiveCamera](hasperspectivecamera.md)
- [HasSynchronization](hassynchronization.md)
- [HasTransform](hastransform.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [RealityCoordinateSpace](realitycoordinatespace.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cameras

- [PerspectiveCameraComponent](perspectivecameracomponent.md): A component that defines a virtual camera and its controls.
- [OrthographicCameraComponent](orthographiccameracomponent.md): A component that defines an orthographic virtual camera and its settings.
- [CameraFieldOfViewOrientation](camerafieldofvieworientation.md): The orientations that a camera’s field-of-view degrees can apply.
- [ProjectiveTransformCameraComponent](projectivetransformcameracomponent.md): A component that defines a virtual camera with a custom projection matrix.
