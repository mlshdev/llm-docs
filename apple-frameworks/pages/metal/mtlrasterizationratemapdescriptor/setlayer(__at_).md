> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemapdescriptor/setlayer(_:at:)](https://developer.apple.com/documentation/metal/mtlrasterizationratemapdescriptor/setlayer(_:at:))

# setLayer(\_:at:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Sets a configuration for a layer rate map.

## Declaration

```swift
func setLayer(_ layer: MTLRasterizationRateLayerDescriptor?, at layerIndex: Int)
```

## Parameters

- `layer`: A description of a layer to add to the rate map descriptor. Use `nil` to remove the layer at that index.
- `layerIndex`: The index to put the new layer description in.

<a id="discussion"></a>

## Discussion

Calling this method is equivalent to using array subscript syntax.

## See Also

### Configuring the rate map layers

- [layerCount](layercount.md): The number of layers in the rate map.
- [layer(at:)](layer%28at_%29.md): Returns the layer description for a layer in the rate map.
- [layers](layers.md): The rasterization rates for one or more layers in the rate map.
- [MTLRasterizationRateLayerArray](../mtlrasterizationratelayerarray.md): Descriptions for the rasterization rates to apply to the set of layers in a rate map.

# setLayer:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Sets a configuration for a layer rate map.

## Declaration

```objectivec
- (void) setLayer:(MTLRasterizationRateLayerDescriptor *) layer atIndex:(NSUInteger) layerIndex;
```

## Parameters

- `layer`: A description of a layer to add to the rate map descriptor. Use `nil` to remove the layer at that index.
- `layerIndex`: The index to put the new layer description in.

<a id="discussion"></a>

## Discussion

Calling this method is equivalent to using array subscript syntax.

## See Also

### Configuring the rate map layers

- [layerCount](layercount.md): The number of layers in the rate map.
- [layerAtIndex:](layer%28at_%29.md): Returns the layer description for a layer in the rate map.
- [layers](layers.md): The rasterization rates for one or more layers in the rate map.
- [MTLRasterizationRateLayerArray](../mtlrasterizationratelayerarray.md): Descriptions for the rasterization rates to apply to the set of layers in a rate map.
