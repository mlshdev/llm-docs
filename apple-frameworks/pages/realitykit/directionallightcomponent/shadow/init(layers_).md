> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/directionallightcomponent/shadow/init(layers:)](https://developer.apple.com/documentation/realitykit/directionallightcomponent/shadow/init(layers:))

# init(layers:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a directional light shadow that accepts shadow casters from the specified layers.

## Declaration

```swift
init(layers: RenderLayer.Set? = nil)
```

## Parameters

- `layers`: The layers of entities that cast shadows from this light. Pass `nil` (the default) to inherit [layers](../layers.md), or an empty set to disable shadow casting entirely.

## See Also

### Creating the shadow

- [init()](init%28%29.md): Creates a directional light shadow using default values.
- [init(shadowProjection:depthBias:cullMode:)](init%28shadowprojection_depthbias_cullmode_%29.md): Creates a directional light shadow with a shadow projection, depth bias and cull mode.
- [init(maximumDistance:depthBias:)](init%28maximumdistance_depthbias_%29.md): Creates a directional light shadow with a maximum distance and depth bias.
