> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemapdescriptor](https://developer.apple.com/documentation/metal/mtlrasterizationratemapdescriptor)

# MTLRasterizationRateMapDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

An object that you use to configure new rasterization rate maps.

## Declaration

```swift
class MTLRasterizationRateMapDescriptor
```

<a id="overview"></a>

## Overview

To create a new rate map, first create an [MTLRasterizationRateMapDescriptor](mtlrasterizationratemapdescriptor.md) instance and set its property values. Then, create a new rasterization rate-map by calling an [MTLDevice](mtldevice.md) instance’s
[makeRasterizationRateMap(descriptor:)](mtldevice/makerasterizationratemap%28descriptor_%29.md) method.

When creating a rate map, Metal copies into it property values from the descriptor. You can reuse a descrptor by modifying its property values, which doesn’t affect the other rate-map instances that already exist.

## Topics

### Creating rate map descriptors

- [init(screenSize:label:)](mtlrasterizationratemapdescriptor/init%28screensize_label_%29.md): A convenience initializer that creates a rate map descriptor with a given size and identifier.
- [init(screenSize:layer:label:)](mtlrasterizationratemapdescriptor/init%28screensize_layer_label_%29.md): A convenience initializer that creates a rate map descriptor with a single rate layer.
- [init(screenSize:layers:label:)](mtlrasterizationratemapdescriptor/init%28screensize_layers_label_%29.md): A convenience initializer that creates a rate map descriptor with a set of layer descriptors.

### Identifying the rate map

- [label](mtlrasterizationratemapdescriptor/label.md): A string used to identify the rate map you create with the descriptor.

### Configuring the viewport size

- [screenSize](mtlrasterizationratemapdescriptor/screensize.md): The size of the viewport coordinate system, in logical pixels.

### Configuring the rate map layers

- [layerCount](mtlrasterizationratemapdescriptor/layercount.md): The number of layers in the rate map.
- [layer(at:)](mtlrasterizationratemapdescriptor/layer%28at_%29.md): Returns the layer description for a layer in the rate map.
- [setLayer(\_:at:)](mtlrasterizationratemapdescriptor/setlayer%28__at_%29.md): Sets a configuration for a layer rate map.
- [layers](mtlrasterizationratemapdescriptor/layers.md): The rasterization rates for one or more layers in the rate map.
- [MTLRasterizationRateLayerArray](mtlrasterizationratelayerarray.md): Descriptions for the rasterization rates to apply to the set of layers in a rate map.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Rasterization settings

- [Rendering at different rasterization rates](rendering-at-different-rasterization-rates.md): Configure a rasterization rate map to vary rasterization rates depending on the amount of detail needed.
- [Creating a rasterization rate map](creating-a-rasterization-rate-map.md): Define the rasterization rates for each part of your render target.
- [Rendering with a rasterization rate map](rendering-with-a-rasterization-rate-map.md): Create offscreen textures to hold intermediate rasterized data.
- [Scaling variable rasterization rate content](scaling-variable-rasterization-rate-content.md): Use the rate map data to scale the content to fill your destination texture.
- [MTLRasterizationRateMap](mtlrasterizationratemap.md): A compiled read-only instance that determines how to apply variable rasterization rates when rendering.
- [MTLCoordinate2D](mtlcoordinate2d.md): A coordinate in the viewport.
- [MTLCoordinate2DMake(\_:\_:)](mtlcoordinate2dmake%28____%29.md): Returns a new 2D point with the specified coordinates.

# MTLRasterizationRateMapDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

An object that you use to configure new rasterization rate maps.

## Declaration

```objectivec
@interface MTLRasterizationRateMapDescriptor : NSObject
```

<a id="overview"></a>

## Overview

To create a new rate map, first create an [MTLRasterizationRateMapDescriptor](mtlrasterizationratemapdescriptor.md) instance and set its property values. Then, create a new rasterization rate-map by calling an [MTLDevice](mtldevice.md) instance’s
[newRasterizationRateMapWithDescriptor:](mtldevice/makerasterizationratemap%28descriptor_%29.md) method.

When creating a rate map, Metal copies into it property values from the descriptor. You can reuse a descrptor by modifying its property values, which doesn’t affect the other rate-map instances that already exist.

## Topics

### Creating rate map descriptors

- [rasterizationRateMapDescriptorWithScreenSize:](mtlrasterizationratemapdescriptor/rasterizationratemapdescriptorwithscreensize_.md): Creates a rate map descriptor with a given size and identifier.
- [rasterizationRateMapDescriptorWithScreenSize:layer:](mtlrasterizationratemapdescriptor/rasterizationratemapdescriptorwithscreensize_layer_.md): Creates a rate map descriptor with a single rate layer.
- [rasterizationRateMapDescriptorWithScreenSize:layerCount:layers:](mtlrasterizationratemapdescriptor/rasterizationratemapdescriptorwithscreensize_layercount_layers_.md): Creates a rate map descriptor with a set of layer descriptors.

### Identifying the rate map

- [label](mtlrasterizationratemapdescriptor/label.md): A string used to identify the rate map you create with the descriptor.

### Configuring the viewport size

- [screenSize](mtlrasterizationratemapdescriptor/screensize.md): The size of the viewport coordinate system, in logical pixels.

### Configuring the rate map layers

- [layerCount](mtlrasterizationratemapdescriptor/layercount.md): The number of layers in the rate map.
- [layerAtIndex:](mtlrasterizationratemapdescriptor/layer%28at_%29.md): Returns the layer description for a layer in the rate map.
- [setLayer:atIndex:](mtlrasterizationratemapdescriptor/setlayer%28__at_%29.md): Sets a configuration for a layer rate map.
- [layers](mtlrasterizationratemapdescriptor/layers.md): The rasterization rates for one or more layers in the rate map.
- [MTLRasterizationRateLayerArray](mtlrasterizationratelayerarray.md): Descriptions for the rasterization rates to apply to the set of layers in a rate map.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Rasterization settings

- [Rendering at different rasterization rates](rendering-at-different-rasterization-rates.md): Configure a rasterization rate map to vary rasterization rates depending on the amount of detail needed.
- [Creating a rasterization rate map](creating-a-rasterization-rate-map.md): Define the rasterization rates for each part of your render target.
- [Rendering with a rasterization rate map](rendering-with-a-rasterization-rate-map.md): Create offscreen textures to hold intermediate rasterized data.
- [Scaling variable rasterization rate content](scaling-variable-rasterization-rate-content.md): Use the rate map data to scale the content to fill your destination texture.
- [MTLRasterizationRateMap](mtlrasterizationratemap.md): A compiled read-only instance that determines how to apply variable rasterization rates when rendering.
- [MTLCoordinate2D](mtlcoordinate2d.md): A coordinate in the viewport.
- [MTLCoordinate2DMake](mtlcoordinate2dmake%28____%29.md): Returns a new 2D point with the specified coordinates.
