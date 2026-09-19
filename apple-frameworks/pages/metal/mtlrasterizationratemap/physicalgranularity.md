> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrasterizationratemap/physicalgranularity

# physicalGranularity (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The granularity, in physical pixels, at which the rasterization rate varies.

## Declaration

```swift
var physicalGranularity: MTLSize { get }
```

<a id="discussion"></a>

## Discussion

If you’re using a rendering algorithm that uses binning or tiling to partition the rendered image, you may want to use the value of this property to determine your bin sizes.

The depth component of the returned [MTLSize](../mtlsize.md) structure is always `0`.

## See Also

### Inspecting geometric and rendering properties

- [layerCount](layercount.md): The number of layers in the rate map.
- [screenSize](screensize.md): The logical size, in pixels, of the viewport coordinate system.
- [physicalSize(layer:)](physicalsize%28layer_%29.md): Returns the dimensions, in pixels, of the area in the render target affected by the rasterization rate map.

# physicalGranularity (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The granularity, in physical pixels, at which the rasterization rate varies.

## Declaration

```objectivec
@property (readonly) MTLSize physicalGranularity;
```

<a id="discussion"></a>

## Discussion

If you’re using a rendering algorithm that uses binning or tiling to partition the rendered image, you may want to use the value of this property to determine your bin sizes.

The depth component of the returned [MTLSize](../mtlsize.md) structure is always `0`.

## See Also

### Inspecting geometric and rendering properties

- [layerCount](layercount.md): The number of layers in the rate map.
- [screenSize](screensize.md): The logical size, in pixels, of the viewport coordinate system.
- [physicalSizeForLayer:](physicalsize%28layer_%29.md): Returns the dimensions, in pixels, of the area in the render target affected by the rasterization rate map.
