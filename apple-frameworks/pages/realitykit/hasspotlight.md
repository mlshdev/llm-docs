> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasspotlight](https://developer.apple.com/documentation/realitykit/hasspotlight)

# HasSpotLight

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

An interface that defines a spot light source component.

## Declaration

```swift
@MainActor @preconcurrency protocol HasSpotLight : HasTransform
```

## Topics

### Getting the spot light

- [light](hasspotlight/light.md): A spotlight component for the entity.

### Specifying the shadow

- [shadow](hasspotlight/shadow.md): The shadow for the spotlight.

## Relationships

### Inherits From

- [HasTransform](hastransform.md)

### Conforming Types

- [SpotLight](spotlight.md)

## See Also

### Entity compliance

- [HasPerspectiveCamera](hasperspectivecamera.md): An interface that enables you to configure a virtual camera that you can use to define the rendering perspective when you’re not in an AR session.
- [PointLight](pointlight.md): An entity that produces an omnidirectional light for virtual objects.
- [HasPointLight](haspointlight.md): An interface that defines a point light source component.
- [SpotLight](spotlight.md): An entity that illuminates virtual content in a cone-shaped volume.
- [DirectionalLight](directionallight.md): An entity that casts a virtual light in a particular direction.
- [HasDirectionalLight](hasdirectionallight.md): An interface that defines a directional light source component.
