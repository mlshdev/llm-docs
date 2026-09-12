> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/directionallightcomponent/shadow](https://developer.apple.com/documentation/realitykit/directionallightcomponent/shadow)

# DirectionalLightComponent.Shadow

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

A directional light component that adds shadows to entities that it illuminates

## Declaration

```swift
struct Shadow
```

## Topics

### Creating the shadow

- [init()](shadow/init%28%29.md): Creates a directional light shadow using default values.
- [init(shadowProjection:depthBias:cullMode:)](shadow/init%28shadowprojection_depthbias_cullmode_%29.md): Creates a directional light shadow with a shadow projection, depth bias and cull mode.
- [init(maximumDistance:depthBias:)](shadow/init%28maximumdistance_depthbias_%29.md): Creates a directional light shadow with a maximum distance and depth bias.
- [init(layers:)](shadow/init%28layers_%29.md): Creates a directional light shadow that accepts shadow casters from the specified layers.

### Configuring the shadow

- [depthBias](shadow/depthbias.md): A constant value that RealityKit applies as a bias to its shadow calculations.
- [cullModeOverride](shadow/cullmodeoverride.md): The light’s culling mode for shadow map rendering.
- [shadowProjection](shadow/shadowprojection.md): Sets the shadow projection used for shadow map rendering
- [maximumDistance](shadow/maximumdistance.md): Deprecated. The maximum distance for the shadow.

### Specifying affected layers

- [layers](shadow/layers.md): The layers of entities that cast shadows from this light.

### Configuring shadow cascades

- [cascades](shadow/cascades-swift.property.md): Number of shadow cascades to use when rendering shadows for this light.
- [DirectionalLightComponent.Shadow.Cascades](shadow/cascades-swift.struct.md)

### Type Aliases

- [DirectionalLightComponent.Shadow.ShadowMapCullMode](shadow/shadowmapcullmode.md)

### Enumerations

- [DirectionalLightComponent.Shadow.ShadowProjectionType](shadow/shadowprojectiontype.md)

## Relationships

### Conforms To

- [Component](../component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Directional lights and their shadows

- [DirectionalLightComponent](../directionallightcomponent.md): A component that defines a directional light source.
- [DirectionalLightComponent.Shadow.ShadowProjectionType](shadow/shadowprojectiontype.md)
- [DirectionalLightComponent.Shadow.ShadowMapCullMode](shadow/shadowmapcullmode.md)
