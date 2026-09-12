> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/directionallightcomponent/shadow/init(maximumdistance:depthbias:)](https://developer.apple.com/documentation/realitykit/directionallightcomponent/shadow/init(maximumdistance:depthbias:))

# init(maximumDistance:depthBias:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

Creates a directional light shadow with a maximum distance and depth bias.

## Declaration

```swift
init(maximumDistance: Float = 5.0, depthBias: Float = 1.0)
```

## Parameters

- `maximumDistance`: The maximum distance for the shadow.
- `depthBias`: The depth bias for the shadow.

<a id="discussion"></a>

## Discussion

The `maximumDistance` parameter in this initializer is equivalent to setting [shadowProjection](shadowprojection.md) to `.automatic(maximumDistance: maximumDistance)`.

## See Also

### Creating the shadow

- [init()](init%28%29.md): Creates a directional light shadow using default values.
- [init(shadowProjection:depthBias:cullMode:)](init%28shadowprojection_depthbias_cullmode_%29.md): Creates a directional light shadow with a shadow projection, depth bias and cull mode.
- [init(layers:)](init%28layers_%29.md): Creates a directional light shadow that accepts shadow casters from the specified layers.
