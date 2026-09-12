> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportsrasterizationratemap(layercount:)](https://developer.apple.com/documentation/metal/mtldevice/supportsrasterizationratemap(layercount:))

# supportsRasterizationRateMap(layerCount:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the GPU can create a rasterization rate map with a specific number of layers.

## Declaration

```swift
func supportsRasterizationRateMap(layerCount: Int) -> Bool
```

## Parameters

- `layerCount`: The number of layers for a rasterization rate map.

## See Also

### Creating rasterization rate maps

- [makeRasterizationRateMap(descriptor:)](makerasterizationratemap%28descriptor_%29.md): Creates a rasterization rate map instance.

# supportsRasterizationRateMapWithLayerCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the GPU can create a rasterization rate map with a specific number of layers.

## Declaration

```objectivec
- (BOOL) supportsRasterizationRateMapWithLayerCount:(NSUInteger) layerCount;
```

## Parameters

- `layerCount`: The number of layers for a rasterization rate map.

## See Also

### Creating rasterization rate maps

- [newRasterizationRateMapWithDescriptor:](makerasterizationratemap%28descriptor_%29.md): Creates a rasterization rate map instance.
