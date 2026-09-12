> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemap/layercount](https://developer.apple.com/documentation/metal/mtlrasterizationratemap/layercount)

# layerCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The number of layers in the rate map.

## Declaration

```swift
var layerCount: Int { get }
```

## See Also

### Inspecting geometric and rendering properties

- [screenSize](screensize.md): The logical size, in pixels, of the viewport coordinate system.
- [physicalSize(layer:)](physicalsize%28layer_%29.md): Returns the dimensions, in pixels, of the area in the render target affected by the rasterization rate map.
- [physicalGranularity](physicalgranularity.md): The granularity, in physical pixels, at which the rasterization rate varies.

# layerCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The number of layers in the rate map.

## Declaration

```objectivec
@property (readonly) NSUInteger layerCount;
```

## See Also

### Inspecting geometric and rendering properties

- [screenSize](screensize.md): The logical size, in pixels, of the viewport coordinate system.
- [physicalSizeForLayer:](physicalsize%28layer_%29.md): Returns the dimensions, in pixels, of the area in the render target affected by the rasterization rate map.
- [physicalGranularity](physicalgranularity.md): The granularity, in physical pixels, at which the rasterization rate varies.
