> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasperspectivecamera](https://developer.apple.com/documentation/realitykit/hasperspectivecamera)

# HasPerspectiveCamera

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An interface that enables you to configure a virtual camera that you can use to define the rendering perspective when you’re not in an AR session.

## Declaration

```swift
@MainActor @preconcurrency protocol HasPerspectiveCamera : HasTransform
```

## Topics

### Getting the camera

- [camera](hasperspectivecamera/camera.md): A camera component for the perspective camera entity.

## Relationships

### Inherits From

- [HasTransform](hastransform.md)

### Conforming Types

- [PerspectiveCamera](perspectivecamera.md)

## See Also

### Entity compliance

- [PointLight](pointlight.md): An entity that produces an omnidirectional light for virtual objects.
- [HasPointLight](haspointlight.md): An interface that defines a point light source component.
- [SpotLight](spotlight.md): An entity that illuminates virtual content in a cone-shaped volume.
- [HasSpotLight](hasspotlight.md): An interface that defines a spot light source component.
- [DirectionalLight](directionallight.md): An entity that casts a virtual light in a particular direction.
- [HasDirectionalLight](hasdirectionallight.md): An interface that defines a directional light source component.
