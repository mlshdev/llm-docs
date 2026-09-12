> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makerasterizationratemap(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makerasterizationratemap(descriptor:))

# makeRasterizationRateMap(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Creates a rasterization rate map instance.

## Declaration

```swift
func makeRasterizationRateMap(descriptor: MTLRasterizationRateMapDescriptor) -> (any MTLRasterizationRateMap)?
```

## Parameters

- `descriptor`: An [MTLRasterizationRateMapDescriptor](../mtlrasterizationratemapdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLRasterizationRateMapDescriptor](../mtlrasterizationratemapdescriptor.md) instance if the method completes successfully; otherwise `nil`.

## See Also

### Creating rasterization rate maps

- [supportsRasterizationRateMap(layerCount:)](supportsrasterizationratemap%28layercount_%29.md): Returns a Boolean value that indicates whether the GPU can create a rasterization rate map with a specific number of layers.

# newRasterizationRateMapWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Creates a rasterization rate map instance.

## Declaration

```objectivec
- (id<MTLRasterizationRateMap>) newRasterizationRateMapWithDescriptor:(MTLRasterizationRateMapDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLRasterizationRateMapDescriptor](../mtlrasterizationratemapdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLRasterizationRateMapDescriptor](../mtlrasterizationratemapdescriptor.md) instance if the method completes successfully; otherwise `nil`.

## See Also

### Creating rasterization rate maps

- [supportsRasterizationRateMapWithLayerCount:](supportsrasterizationratemap%28layercount_%29.md): Returns a Boolean value that indicates whether the GPU can create a rasterization rate map with a specific number of layers.
