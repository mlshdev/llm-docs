> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemapdescriptor/layercount](https://developer.apple.com/documentation/metal/mtlrasterizationratemapdescriptor/layercount)

# layerCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The number of layers in the rate map.

## Declaration

```swift
var layerCount: Int { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is dynamically determined based on how many layers you’ve added to the descriptor. To add a new layer, call [setLayer(\_:at:)](setlayer%28__at_%29.md) or use the subscripting operator to assign a layer.

## See Also

### Configuring the rate map layers

- [layer(at:)](layer%28at_%29.md): Returns the layer description for a layer in the rate map.
- [setLayer(\_:at:)](setlayer%28__at_%29.md): Sets a configuration for a layer rate map.
- [layers](layers.md): The rasterization rates for one or more layers in the rate map.
- [MTLRasterizationRateLayerArray](../mtlrasterizationratelayerarray.md): Descriptions for the rasterization rates to apply to the set of layers in a rate map.

# layerCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The number of layers in the rate map.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger layerCount;
```

<a id="discussion"></a>

## Discussion

The value of this property is dynamically determined based on how many layers you’ve added to the descriptor. To add a new layer, call [setLayer:atIndex:](setlayer%28__at_%29.md) or use the subscripting operator to assign a layer.

## See Also

### Configuring the rate map layers

- [layerAtIndex:](layer%28at_%29.md): Returns the layer description for a layer in the rate map.
- [setLayer:atIndex:](setlayer%28__at_%29.md): Sets a configuration for a layer rate map.
- [layers](layers.md): The rasterization rates for one or more layers in the rate map.
- [MTLRasterizationRateLayerArray](../mtlrasterizationratelayerarray.md): Descriptions for the rasterization rates to apply to the set of layers in a rate map.
