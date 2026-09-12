> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemap](https://developer.apple.com/documentation/metal/mtlrasterizationratemap)

# MTLRasterizationRateMap (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

A compiled read-only instance that determines how to apply variable rasterization rates when rendering.

## Declaration

```swift
protocol MTLRasterizationRateMap : NSObjectProtocol, Sendable
```

## Mentioned In

- [Rendering with a rasterization rate map](rendering-with-a-rasterization-rate-map.md)

<a id="overview"></a>

## Overview

Use a rasterization rate map to reduce rendering quality in less-important or less-sampled regions of the render target, such as areas affected by blur effects or a far-away cascade of a shadow map.

By default, a render pass doesn’t have a rasterization rate map, and the viewport coordinate system maps exactly to physical pixels in the targeted textures. If you apply a rasterization rate map to a render pass, the viewport coordinate system becomes a logical coordinate system, and the rate map describes how to map logical coordinates to physical pixels in the render pass’s targets. You can specify different rasterization rates in different regions of the logical coordinate system. When you do, those logical units map to fewer physical pixels, which means you can use smaller render targets and render fewer pixels, saving both memory and processing time. For more information, see [Rendering at different rasterization rates](rendering-at-different-rasterization-rates.md).

Don’t implement this protocol yourself; instead, create an [MTLRasterizationRateMapDescriptor](mtlrasterizationratemapdescriptor.md) instance, configure it, and then call the [makeRasterizationRateMap(descriptor:)](mtldevice/makerasterizationratemap%28descriptor_%29.md) on a device instance.

To apply a rasterization rate map to a render pass, set the render pass descriptor’s [rasterizationRateMap](mtlrenderpassdescriptor/rasterizationratemap.md) property.

<a id="Configuring-the-rate-map"></a>

### Configuring the rate map

A rasterization rate map specifies the size of the viewport coordinate space in logical units and one or more *layer maps*. A layer map partitions the viewport coordinate space into a 2D grid of cells and defines the rasterization rate for each cell. If you aren’t using layered rendering, provide a single layer map; otherwise, provide one layer map for each layer. For more information about layered rendering, see [Rendering to multiple texture slices in a draw command](rendering-to-multiple-texture-slices-in-a-draw-command.md).

You can query the physical size requirements for each layer in the render pass by calling the [physicalSize(layer:)](mtlrasterizationratemap/physicalsize%28layer_%29.md) method. Your render targets need to be at least this large.

## Topics

### Identifying the rate map

- [device](mtlrasterizationratemap/device.md): The device object that created the rate map.
- [label](mtlrasterizationratemap/label.md): A string that identifies the rate map.

### Inspecting geometric and rendering properties

- [layerCount](mtlrasterizationratemap/layercount.md): The number of layers in the rate map.
- [screenSize](mtlrasterizationratemap/screensize.md): The logical size, in pixels, of the viewport coordinate system.
- [physicalSize(layer:)](mtlrasterizationratemap/physicalsize%28layer_%29.md): Returns the dimensions, in pixels, of the area in the render target affected by the rasterization rate map.
- [physicalGranularity](mtlrasterizationratemap/physicalgranularity.md): The granularity, in physical pixels, at which the rasterization rate varies.

### Converting between viewport and physical coordinates

- [physicalCoordinates(screenCoordinates:layer:)](mtlrasterizationratemap/physicalcoordinates%28screencoordinates_layer_%29.md): Converts a point in logical viewport coordinates to the corresponding physical coordinates in a render layer.
- [screenCoordinates(physicalCoordinates:layer:)](mtlrasterizationratemap/screencoordinates%28physicalcoordinates_layer_%29.md): Converts a point in physical coordinates inside a layer to its corresponding logical viewport coordinates.

### Obtaining coordinate transformation data

- [parameterDataSizeAndAlign](mtlrasterizationratemap/parameterdatasizeandalign.md): The size and alignment requirements to contain the coordinate transformation information in this rate map.
- [copyParameterData(buffer:offset:)](mtlrasterizationratemap/copyparameterdata%28buffer_offset_%29.md): Copies the parameter data into the provided buffer.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rasterization settings

- [Rendering at different rasterization rates](rendering-at-different-rasterization-rates.md): Configure a rasterization rate map to vary rasterization rates depending on the amount of detail needed.
- [Creating a rasterization rate map](creating-a-rasterization-rate-map.md): Define the rasterization rates for each part of your render target.
- [Rendering with a rasterization rate map](rendering-with-a-rasterization-rate-map.md): Create offscreen textures to hold intermediate rasterized data.
- [Scaling variable rasterization rate content](scaling-variable-rasterization-rate-content.md): Use the rate map data to scale the content to fill your destination texture.
- [MTLRasterizationRateMapDescriptor](mtlrasterizationratemapdescriptor.md): An object that you use to configure new rasterization rate maps.
- [MTLCoordinate2D](mtlcoordinate2d.md): A coordinate in the viewport.
- [MTLCoordinate2DMake(\_:\_:)](mtlcoordinate2dmake%28____%29.md): Returns a new 2D point with the specified coordinates.

# MTLRasterizationRateMap (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

A compiled read-only instance that determines how to apply variable rasterization rates when rendering.

## Declaration

```objectivec
@protocol MTLRasterizationRateMap <NSObject>
```

## Mentioned In

- [Rendering with a rasterization rate map](rendering-with-a-rasterization-rate-map.md)

<a id="overview"></a>

## Overview

Use a rasterization rate map to reduce rendering quality in less-important or less-sampled regions of the render target, such as areas affected by blur effects or a far-away cascade of a shadow map.

By default, a render pass doesn’t have a rasterization rate map, and the viewport coordinate system maps exactly to physical pixels in the targeted textures. If you apply a rasterization rate map to a render pass, the viewport coordinate system becomes a logical coordinate system, and the rate map describes how to map logical coordinates to physical pixels in the render pass’s targets. You can specify different rasterization rates in different regions of the logical coordinate system. When you do, those logical units map to fewer physical pixels, which means you can use smaller render targets and render fewer pixels, saving both memory and processing time. For more information, see [Rendering at different rasterization rates](rendering-at-different-rasterization-rates.md).

Don’t implement this protocol yourself; instead, create an [MTLRasterizationRateMapDescriptor](mtlrasterizationratemapdescriptor.md) instance, configure it, and then call the [newRasterizationRateMapWithDescriptor:](mtldevice/makerasterizationratemap%28descriptor_%29.md) on a device instance.

To apply a rasterization rate map to a render pass, set the render pass descriptor’s [rasterizationRateMap](mtlrenderpassdescriptor/rasterizationratemap.md) property.

<a id="Configuring-the-rate-map"></a>

### Configuring the rate map

A rasterization rate map specifies the size of the viewport coordinate space in logical units and one or more *layer maps*. A layer map partitions the viewport coordinate space into a 2D grid of cells and defines the rasterization rate for each cell. If you aren’t using layered rendering, provide a single layer map; otherwise, provide one layer map for each layer. For more information about layered rendering, see [Rendering to multiple texture slices in a draw command](rendering-to-multiple-texture-slices-in-a-draw-command.md).

You can query the physical size requirements for each layer in the render pass by calling the [physicalSizeForLayer:](mtlrasterizationratemap/physicalsize%28layer_%29.md) method. Your render targets need to be at least this large.

## Topics

### Identifying the rate map

- [device](mtlrasterizationratemap/device.md): The device object that created the rate map.
- [label](mtlrasterizationratemap/label.md): A string that identifies the rate map.

### Inspecting geometric and rendering properties

- [layerCount](mtlrasterizationratemap/layercount.md): The number of layers in the rate map.
- [screenSize](mtlrasterizationratemap/screensize.md): The logical size, in pixels, of the viewport coordinate system.
- [physicalSizeForLayer:](mtlrasterizationratemap/physicalsize%28layer_%29.md): Returns the dimensions, in pixels, of the area in the render target affected by the rasterization rate map.
- [physicalGranularity](mtlrasterizationratemap/physicalgranularity.md): The granularity, in physical pixels, at which the rasterization rate varies.

### Converting between viewport and physical coordinates

- [mapScreenToPhysicalCoordinates:forLayer:](mtlrasterizationratemap/physicalcoordinates%28screencoordinates_layer_%29.md): Converts a point in logical viewport coordinates to the corresponding physical coordinates in a render layer.
- [mapPhysicalToScreenCoordinates:forLayer:](mtlrasterizationratemap/screencoordinates%28physicalcoordinates_layer_%29.md): Converts a point in physical coordinates inside a layer to its corresponding logical viewport coordinates.

### Obtaining coordinate transformation data

- [parameterBufferSizeAndAlign](mtlrasterizationratemap/parameterdatasizeandalign.md): The size and alignment requirements to contain the coordinate transformation information in this rate map.
- [copyParameterDataToBuffer:offset:](mtlrasterizationratemap/copyparameterdata%28buffer_offset_%29.md): Copies the parameter data into the provided buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Rasterization settings

- [Rendering at different rasterization rates](rendering-at-different-rasterization-rates.md): Configure a rasterization rate map to vary rasterization rates depending on the amount of detail needed.
- [Creating a rasterization rate map](creating-a-rasterization-rate-map.md): Define the rasterization rates for each part of your render target.
- [Rendering with a rasterization rate map](rendering-with-a-rasterization-rate-map.md): Create offscreen textures to hold intermediate rasterized data.
- [Scaling variable rasterization rate content](scaling-variable-rasterization-rate-content.md): Use the rate map data to scale the content to fill your destination texture.
- [MTLRasterizationRateMapDescriptor](mtlrasterizationratemapdescriptor.md): An object that you use to configure new rasterization rate maps.
- [MTLCoordinate2D](mtlcoordinate2d.md): A coordinate in the viewport.
- [MTLCoordinate2DMake](mtlcoordinate2dmake%28____%29.md): Returns a new 2D point with the specified coordinates.
