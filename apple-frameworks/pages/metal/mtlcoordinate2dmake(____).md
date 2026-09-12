> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcoordinate2dmake(_:_:)](https://developer.apple.com/documentation/metal/mtlcoordinate2dmake(_:_:))

# MTLCoordinate2DMake(\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a new 2D point with the specified coordinates.

## Declaration

```swift
func MTLCoordinate2DMake(_ x: Float, _ y: Float) -> MTLCoordinate2D
```

## Parameters

- `x`: The x coordinate of the new point.
- `y`: The y coordinate of the new point.

## See Also

### Rasterization settings

- [Rendering at different rasterization rates](rendering-at-different-rasterization-rates.md): Configure a rasterization rate map to vary rasterization rates depending on the amount of detail needed.
- [Creating a rasterization rate map](creating-a-rasterization-rate-map.md): Define the rasterization rates for each part of your render target.
- [Rendering with a rasterization rate map](rendering-with-a-rasterization-rate-map.md): Create offscreen textures to hold intermediate rasterized data.
- [Scaling variable rasterization rate content](scaling-variable-rasterization-rate-content.md): Use the rate map data to scale the content to fill your destination texture.
- [MTLRasterizationRateMapDescriptor](mtlrasterizationratemapdescriptor.md): An object that you use to configure new rasterization rate maps.
- [MTLRasterizationRateMap](mtlrasterizationratemap.md): A compiled read-only instance that determines how to apply variable rasterization rates when rendering.
- [MTLCoordinate2D](mtlcoordinate2d.md): A coordinate in the viewport.

# MTLCoordinate2DMake (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a new 2D point with the specified coordinates.

## Declaration

```objectivec
static MTLCoordinate2D MTLCoordinate2DMake(float x, float y);
```

## Parameters

- `x`: The x coordinate of the new point.
- `y`: The y coordinate of the new point.

## See Also

### Rasterization settings

- [Rendering at different rasterization rates](rendering-at-different-rasterization-rates.md): Configure a rasterization rate map to vary rasterization rates depending on the amount of detail needed.
- [Creating a rasterization rate map](creating-a-rasterization-rate-map.md): Define the rasterization rates for each part of your render target.
- [Rendering with a rasterization rate map](rendering-with-a-rasterization-rate-map.md): Create offscreen textures to hold intermediate rasterized data.
- [Scaling variable rasterization rate content](scaling-variable-rasterization-rate-content.md): Use the rate map data to scale the content to fill your destination texture.
- [MTLRasterizationRateMapDescriptor](mtlrasterizationratemapdescriptor.md): An object that you use to configure new rasterization rate maps.
- [MTLRasterizationRateMap](mtlrasterizationratemap.md): A compiled read-only instance that determines how to apply variable rasterization rates when rendering.
- [MTLCoordinate2D](mtlcoordinate2d.md): A coordinate in the viewport.
