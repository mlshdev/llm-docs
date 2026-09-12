> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcoordinate2d](https://developer.apple.com/documentation/metal/mtlcoordinate2d)

# MTLCoordinate2D (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A coordinate in the viewport.

## Declaration

```swift
typealias MTLCoordinate2D = MTLSamplePosition
```

## See Also

### Rasterization settings

- [Rendering at different rasterization rates](rendering-at-different-rasterization-rates.md): Configure a rasterization rate map to vary rasterization rates depending on the amount of detail needed.
- [Creating a rasterization rate map](creating-a-rasterization-rate-map.md): Define the rasterization rates for each part of your render target.
- [Rendering with a rasterization rate map](rendering-with-a-rasterization-rate-map.md): Create offscreen textures to hold intermediate rasterized data.
- [Scaling variable rasterization rate content](scaling-variable-rasterization-rate-content.md): Use the rate map data to scale the content to fill your destination texture.
- [MTLRasterizationRateMapDescriptor](mtlrasterizationratemapdescriptor.md): An object that you use to configure new rasterization rate maps.
- [MTLRasterizationRateMap](mtlrasterizationratemap.md): A compiled read-only instance that determines how to apply variable rasterization rates when rendering.
- [MTLCoordinate2DMake(\_:\_:)](mtlcoordinate2dmake%28____%29.md): Returns a new 2D point with the specified coordinates.

# MTLCoordinate2D (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A coordinate in the viewport.

## Declaration

```objectivec
typedef MTLSamplePosition MTLCoordinate2D;
```

## See Also

### Rasterization settings

- [Rendering at different rasterization rates](rendering-at-different-rasterization-rates.md): Configure a rasterization rate map to vary rasterization rates depending on the amount of detail needed.
- [Creating a rasterization rate map](creating-a-rasterization-rate-map.md): Define the rasterization rates for each part of your render target.
- [Rendering with a rasterization rate map](rendering-with-a-rasterization-rate-map.md): Create offscreen textures to hold intermediate rasterized data.
- [Scaling variable rasterization rate content](scaling-variable-rasterization-rate-content.md): Use the rate map data to scale the content to fill your destination texture.
- [MTLRasterizationRateMapDescriptor](mtlrasterizationratemapdescriptor.md): An object that you use to configure new rasterization rate maps.
- [MTLRasterizationRateMap](mtlrasterizationratemap.md): A compiled read-only instance that determines how to apply variable rasterization rates when rendering.
- [MTLCoordinate2DMake](mtlcoordinate2dmake%28____%29.md): Returns a new 2D point with the specified coordinates.
