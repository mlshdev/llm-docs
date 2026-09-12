> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemap/physicalsize(layer:)](https://developer.apple.com/documentation/metal/mtlrasterizationratemap/physicalsize(layer:))

# physicalSize(layer:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Returns the dimensions, in pixels, of the area in the render target affected by the rasterization rate map.

## Declaration

```swift
func physicalSize(layer layerIndex: Int) -> MTLSize
```

## Parameters

- `layerIndex`: The index of the layer.

<a id="return-value"></a>

## Return Value

The dimensions, in pixels, of the area in the render target affected by the rasterization rate map.

## Mentioned In

- [Rendering with a rasterization rate map](../rendering-with-a-rasterization-rate-map.md)

<a id="discussion"></a>

## Discussion

Your render targets should be at least as large as the physical size returned by this method. Each layer may have different rasterization rates and therefore different physical size requirements.

## See Also

### Inspecting geometric and rendering properties

- [layerCount](layercount.md): The number of layers in the rate map.
- [screenSize](screensize.md): The logical size, in pixels, of the viewport coordinate system.
- [physicalGranularity](physicalgranularity.md): The granularity, in physical pixels, at which the rasterization rate varies.

# physicalSizeForLayer: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Returns the dimensions, in pixels, of the area in the render target affected by the rasterization rate map.

## Declaration

```objectivec
- (MTLSize) physicalSizeForLayer:(NSUInteger) layerIndex;
```

## Parameters

- `layerIndex`: The index of the layer.

<a id="return-value"></a>

## Return Value

The dimensions, in pixels, of the area in the render target affected by the rasterization rate map.

## Mentioned In

- [Rendering with a rasterization rate map](../rendering-with-a-rasterization-rate-map.md)

<a id="discussion"></a>

## Discussion

Your render targets should be at least as large as the physical size returned by this method. Each layer may have different rasterization rates and therefore different physical size requirements.

## See Also

### Inspecting geometric and rendering properties

- [layerCount](layercount.md): The number of layers in the rate map.
- [screenSize](screensize.md): The logical size, in pixels, of the viewport coordinate system.
- [physicalGranularity](physicalgranularity.md): The granularity, in physical pixels, at which the rasterization rate varies.
