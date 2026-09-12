> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemap/screensize](https://developer.apple.com/documentation/metal/mtlrasterizationratemap/screensize)

# screenSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The logical size, in pixels, of the viewport coordinate system.

## Declaration

```swift
var screenSize: MTLSize { get }
```

## Mentioned In

- [Rendering with a rasterization rate map](../rendering-with-a-rasterization-rate-map.md)

## See Also

### Inspecting geometric and rendering properties

- [layerCount](layercount.md): The number of layers in the rate map.
- [physicalSize(layer:)](physicalsize%28layer_%29.md): Returns the dimensions, in pixels, of the area in the render target affected by the rasterization rate map.
- [physicalGranularity](physicalgranularity.md): The granularity, in physical pixels, at which the rasterization rate varies.

# screenSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The logical size, in pixels, of the viewport coordinate system.

## Declaration

```objectivec
@property (readonly) MTLSize screenSize;
```

## Mentioned In

- [Rendering with a rasterization rate map](../rendering-with-a-rasterization-rate-map.md)

## See Also

### Inspecting geometric and rendering properties

- [layerCount](layercount.md): The number of layers in the rate map.
- [physicalSizeForLayer:](physicalsize%28layer_%29.md): Returns the dimensions, in pixels, of the area in the render target affected by the rasterization rate map.
- [physicalGranularity](physicalgranularity.md): The granularity, in physical pixels, at which the rasterization rate varies.
