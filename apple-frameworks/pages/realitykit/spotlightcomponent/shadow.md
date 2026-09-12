> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/shadow](https://developer.apple.com/documentation/realitykit/spotlightcomponent/shadow)

# SpotLightComponent.Shadow

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

A spotlight component that adds shadows to entities that it illuminates.

## Declaration

```swift
struct Shadow
```

## Topics

### Creating a shadow

- [init()](shadow/init%28%29.md): Creates a new spot light shadow object.
- [init(layers:)](shadow/init%28layers_%29.md): Creates a spot light shadow that accepts shadow casters from the specified layers.
- [layers](shadow/layers.md): The layers of entities that cast shadows from this light.

### Configuring the shadow

- [depthBias](shadow/depthbias.md): A constant value that RealityKit applies as a bias to its shadow calculations.
- [zNear](shadow/znear.md): The near-plane of a shadow frustum.
- [zFar](shadow/zfar.md): The orthogonal plane of the shadow frustum that’s furthest from the spotlight.
- [cullModeOverride](shadow/cullmodeoverride.md): The light’s culling mode for shadow map rendering.

### Configuring shadow quality

- [quality](shadow/quality.md): The shadow-filtering algorithm this light uses.
- [SpotLightComponent.Shadow.QualityMode](shadow/qualitymode.md): Constants that select the shadow-filtering algorithm a spotlight uses.
- [lightSize](shadow/lightsize.md): The radius of the spotlight’s emitting surface, in meters.

### Type Aliases

- [SpotLightComponent.Shadow.ShadowMapCullMode](shadow/shadowmapcullmode.md)

### Enumerations

- [SpotLightComponent.Shadow.ShadowClippingPlane](shadow/shadowclippingplane.md): An object that specifies the mode of a shadow clipping plane.

## Relationships

### Conforms To

- [Component](../component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Spotlights and their shadows

- [SpotLightComponent](../spotlightcomponent.md): A component that defines a spotlight source.
- [SpotLightComponent.Shadow.ShadowClippingPlane](shadow/shadowclippingplane.md): An object that specifies the mode of a shadow clipping plane.
- [SpotLightComponent.Shadow.ShadowMapCullMode](shadow/shadowmapcullmode.md)
