> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlight](https://developer.apple.com/documentation/realitykit/spotlight)

# SpotLight

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

An entity that illuminates virtual content in a cone-shaped volume.

## Declaration

```swift
@MainActor @preconcurrency class SpotLight
```

<a id="overview"></a>

## Overview

During an AR session, RealityKit automatically lights your virtual objects to match real-world lighting. You can also explicitly add virtual lights that act upon your virtual content. This is typically most useful outside of an AR session on iOS or macOS, where your [RealityViewCameraContent](realityviewcameracontent.md) [camera](realityviewcameracontent/camera.md) property is set to [virtual](realityviewcamera/virtual.md).

A RealityKit scene can contain up to eight dynamic lights, which are entities that contain a [SpotLightComponent](spotlightcomponent.md), [PointLightComponent](pointlightcomponent.md), or a [DirectionalLightComponent](directionallightcomponent.md). This limit doesn’t include light from image-based lighting.

Devices that support `MTLGPUFamily.apple6` or later lift this limit, so a scene can contain many more dynamic lights.

## Topics

### Creating a spotlight

- [init()](spotlight/init%28%29.md): Creates a new entity.

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
- [HasSpotLight](hasspotlight.md)
- [HasSynchronization](hassynchronization.md)
- [HasTransform](hastransform.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [RealityCoordinateSpace](realitycoordinatespace.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity compliance

- [HasPerspectiveCamera](hasperspectivecamera.md): An interface that enables you to configure a virtual camera that you can use to define the rendering perspective when you’re not in an AR session.
- [PointLight](pointlight.md): An entity that produces an omnidirectional light for virtual objects.
- [HasPointLight](haspointlight.md): An interface that defines a point light source component.
- [HasSpotLight](hasspotlight.md): An interface that defines a spot light source component.
- [DirectionalLight](directionallight.md): An entity that casts a virtual light in a particular direction.
- [HasDirectionalLight](hasdirectionallight.md): An interface that defines a directional light source component.
