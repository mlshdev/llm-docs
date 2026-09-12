> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/createcglayer(with:info:)](https://developer.apple.com/documentation/coreimage/cicontext/createcglayer(with:info:))

# createCGLayer(with:info:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.11)

Creates a CGLayer object from the provided parameters.

## Declaration

```swift
func createCGLayer(with size: CGSize, info: CFDictionary?) -> CGLayer?
```

## Parameters

- `size`: The size, in default user space units, of the layer relative to the graphics context.
- `info`: A dictionary, which is passed to `CGLayerCreateWithContext` as the `auxiliaryInfo` parameter. Pass `NULL` because this parameter is reserved for future use.

<a id="return-value"></a>

## Return Value

A CGLayer object.

<a id="Discussion"></a>

## Discussion

After calling this method, Core Image draws content into the CGLayer object. Core Image creates a CGLayer object by calling the Quartz 2D function [init(\_:size:auxiliaryInfo:)](../../coregraphics/cglayer/init%28__size_auxiliaryinfo_%29.md), whose prototype is:

```objc
CGLayerRef CGLayerCreateWithContext (
   CGContextRef context,
   CGSize size,
   CFDictionaryRef auxiliaryInfo
);
```

Core Image passes the [CIContext](../cicontext.md) object as the `context` parameter, the size as the `size` parameter, and the dictionary as the `auxiliaryInfo` parameter. For more information on CGLayer objects, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066) and [CGLayer](../../coregraphics/cglayer.md).

## See Also

### Deprecated

- [init(cglContext:pixelFormat:colorSpace:options:)](init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.
- [init(eaglContext:)](init%28eaglcontext_%29-8ajef.md): Deprecated. Creates a Core Image context from an EAGL context.
- [init(eaglContext:options:)](init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [init(forOfflineGPUAtIndex:)](init%28forofflinegpuatindex_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display.
- [init(forOfflineGPUAtIndex:colorSpace:options:sharedContext:)](init%28forofflinegpuatindex_colorspace_options_sharedcontext_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display, with the specified options.
- [draw(\_:at:from:)](draw%28__at_from_%29.md): Deprecated. Renders a region of an image to a point in the context destination.

# createCGLayerWithSize:info: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.11)

Creates a CGLayer object from the provided parameters.

## Declaration

```objectivec
- (CGLayerRef) createCGLayerWithSize:(CGSize) size info:(CFDictionaryRef) info;
```

## Parameters

- `size`: The size, in default user space units, of the layer relative to the graphics context.
- `info`: A dictionary, which is passed to `CGLayerCreateWithContext` as the `auxiliaryInfo` parameter. Pass `NULL` because this parameter is reserved for future use.

<a id="return-value"></a>

## Return Value

A CGLayer object.

<a id="Discussion"></a>

## Discussion

After calling this method, Core Image draws content into the CGLayer object. Core Image creates a CGLayer object by calling the Quartz 2D function [CGLayerCreateWithContext](../../coregraphics/cglayer/init%28__size_auxiliaryinfo_%29.md), whose prototype is:

```objc
CGLayerRef CGLayerCreateWithContext (
   CGContextRef context,
   CGSize size,
   CFDictionaryRef auxiliaryInfo
);
```

Core Image passes the [CIContext](../cicontext.md) object as the `context` parameter, the size as the `size` parameter, and the dictionary as the `auxiliaryInfo` parameter. For more information on CGLayer objects, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066) and [CGLayerRef](../../coregraphics/cglayer.md).

## See Also

### Related Documentation

- [imageWithCGLayer:](../ciimage/imagewithcglayer_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object.
- [imageWithCGLayer:options:](../ciimage/imagewithcglayer_options_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object, using the specified options.

### Deprecated

- [contextWithCGLContext:pixelFormat:colorSpace:options:](init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.
- [contextWithCGLContext:pixelFormat:options:](contextwithcglcontext_pixelformat_options_.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options and pixel format object.
- [contextWithEAGLContext:](init%28eaglcontext_%29-8ajef.md): Deprecated. Creates a Core Image context from an EAGL context.
- [contextWithEAGLContext:options:](init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [drawImage:atPoint:fromRect:](draw%28__at_from_%29.md): Deprecated. Renders a region of an image to a point in the context destination.
