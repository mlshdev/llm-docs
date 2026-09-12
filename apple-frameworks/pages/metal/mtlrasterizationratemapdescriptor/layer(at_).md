> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemapdescriptor/layer(at:)](https://developer.apple.com/documentation/metal/mtlrasterizationratemapdescriptor/layer(at:))

# layer(at:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Returns the layer description for a layer in the rate map.

## Declaration

```swift
func layer(at layerIndex: Int) -> MTLRasterizationRateLayerDescriptor?
```

## Parameters

- `layerIndex`: The entry to return.

<a id="return-value"></a>

## Return Value

The [MTLRasterizationRateLayerDescriptor](../mtlrasterizationratelayerdescriptor.md) instance for the given index, or `nil` if you haven’t set an instance for this index.

<a id="discussion"></a>

## Discussion

Calling this method is equivalent to using array subscript syntax.

## See Also

### Configuring the rate map layers

- [layerCount](layercount.md): The number of layers in the rate map.
- [setLayer(\_:at:)](setlayer%28__at_%29.md): Sets a configuration for a layer rate map.
- [layers](layers.md): The rasterization rates for one or more layers in the rate map.
- [MTLRasterizationRateLayerArray](../mtlrasterizationratelayerarray.md): Descriptions for the rasterization rates to apply to the set of layers in a rate map.

# layerAtIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Returns the layer description for a layer in the rate map.

## Declaration

```objectivec
- (MTLRasterizationRateLayerDescriptor *) layerAtIndex:(NSUInteger) layerIndex;
```

## Parameters

- `layerIndex`: The entry to return.

<a id="return-value"></a>

## Return Value

The [MTLRasterizationRateLayerDescriptor](../mtlrasterizationratelayerdescriptor.md) instance for the given index, or `nil` if you haven’t set an instance for this index.

<a id="discussion"></a>

## Discussion

Calling this method is equivalent to using array subscript syntax.

## See Also

### Configuring the rate map layers

- [layerCount](layercount.md): The number of layers in the rate map.
- [setLayer:atIndex:](setlayer%28__at_%29.md): Sets a configuration for a layer rate map.
- [layers](layers.md): The rasterization rates for one or more layers in the rate map.
- [MTLRasterizationRateLayerArray](../mtlrasterizationratelayerarray.md): Descriptions for the rasterization rates to apply to the set of layers in a rate map.
