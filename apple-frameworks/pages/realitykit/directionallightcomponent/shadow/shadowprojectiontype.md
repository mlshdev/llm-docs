> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/directionallightcomponent/shadow/shadowprojectiontype](https://developer.apple.com/documentation/realitykit/directionallightcomponent/shadow/shadowprojectiontype)

# DirectionalLightComponent.Shadow.ShadowProjectionType

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

## Declaration

```swift
enum ShadowProjectionType
```

## Topics

### Shadow projection types

- [DirectionalLightComponent.Shadow.ShadowProjectionType.automatic(maximumDistance:)](shadowprojectiontype/automatic%28maximumdistance_%29.md): Shadow projection is automatically fit with the camera frustum, range is within maximumDistance from camera
- [DirectionalLightComponent.Shadow.ShadowProjectionType.fixed(zNear:zFar:orthographicScale:)](shadowprojectiontype/fixed%28znear_zfar_orthographicscale_%29.md): Shadow projection is manually set up with near plane, far plane, and orthographicScale for width and height

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Directional lights and their shadows

- [DirectionalLightComponent](../../directionallightcomponent.md): A component that defines a directional light source.
- [DirectionalLightComponent.Shadow](../shadow.md): A directional light component that adds shadows to entities that it illuminates
- [DirectionalLightComponent.Shadow.ShadowMapCullMode](shadowmapcullmode.md)
