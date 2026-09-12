> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratelayerarray](https://developer.apple.com/documentation/metal/mtlrasterizationratelayerarray)

# MTLRasterizationRateLayerArray (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Descriptions for the rasterization rates to apply to the set of layers in a rate map.

## Declaration

```swift
class MTLRasterizationRateLayerArray
```

## Topics

### Accessing members of the array

- [subscript(\_:)](mtlrasterizationratelayerarray/subscript%28__%29.md): Retrieves the sample value at the specified index.
- [MTLRasterizationRateLayerDescriptor](mtlrasterizationratelayerdescriptor.md): The minimum rasterization rates to apply to sections of a layer in the render target.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the rate map layers

- [layerCount](mtlrasterizationratemapdescriptor/layercount.md): The number of layers in the rate map.
- [layer(at:)](mtlrasterizationratemapdescriptor/layer%28at_%29.md): Returns the layer description for a layer in the rate map.
- [setLayer(\_:at:)](mtlrasterizationratemapdescriptor/setlayer%28__at_%29.md): Sets a configuration for a layer rate map.
- [layers](mtlrasterizationratemapdescriptor/layers.md): The rasterization rates for one or more layers in the rate map.

# MTLRasterizationRateLayerArray (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Descriptions for the rasterization rates to apply to the set of layers in a rate map.

## Declaration

```objectivec
@interface MTLRasterizationRateLayerArray : NSObject
```

## Topics

### Accessing members of the array

- [objectAtIndexedSubscript:](mtlrasterizationratelayerarray/subscript%28__%29.md): Retrieves the sample value at the specified index.
- [setObject:atIndexedSubscript:](mtlrasterizationratelayerarray/setobject_atindexedsubscript_.md): Stores a sample value at the specified index.
- [MTLRasterizationRateLayerDescriptor](mtlrasterizationratelayerdescriptor.md): The minimum rasterization rates to apply to sections of a layer in the render target.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring the rate map layers

- [layerCount](mtlrasterizationratemapdescriptor/layercount.md): The number of layers in the rate map.
- [layerAtIndex:](mtlrasterizationratemapdescriptor/layer%28at_%29.md): Returns the layer description for a layer in the rate map.
- [setLayer:atIndex:](mtlrasterizationratemapdescriptor/setlayer%28__at_%29.md): Sets a configuration for a layer rate map.
- [layers](mtlrasterizationratemapdescriptor/layers.md): The rasterization rates for one or more layers in the rate map.
