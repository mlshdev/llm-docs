> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext](https://developer.apple.com/documentation/coreimage/cicontext)

# CIContext (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The Core Image context class provides an evaluation context for Core Image processing with Metal, OpenGL, or OpenCL.

## Declaration

```swift
class CIContext
```

## Mentioned In

- [Processing an Image Using Built-in Filters](processing-an-image-using-built-in-filters.md)

<a id="overview"></a>

## Overview

You use a `CIContext` instance to render a [CIImage](ciimage.md) instance which represents a graph of image processing operations which are built using other Core Image classes, such as [CIFilter](cifilter-swift.class.md), [CIKernel](cikernel.md), [CIColor](cicolor.md) and [CIImage](ciimage.md). You can also use a `CIContext` with the [CIDetector](cidetector.md) class to analyze images — for example, to detect faces or barcodes.

Contexts support automatic color management by performing all processing operations in a working color space. This means that unless told otherwise:

- All input images are color matched from the input’s color space to the working space.
- All renders are color matched from the working space to the destination space. (For more information on `CGColorSpace` see [CGColorSpace](../coregraphics/cgcolorspace.md))

`CIContext` and [CIImage](ciimage.md) instances are immutable, so multiple threads can use the same [CIContext](cicontext.md) instance to render [CIImage](ciimage.md) instances. However, [CIFilter](cifilter-swift.class.md) instances are mutable and thus cannot be shared safely among threads. Each thread must take case not to access or modify a [CIFilter](cifilter-swift.class.md) instance while it is being used by another thread.

The `CIContext` manages various internal state such as `MTLCommandQueue` and caches for compiled kernels and intermediate buffers.  For this reason it is not recommended to create many `CIContext` instances.  As a rule, it recommended that you create one `CIContext` instance for each view that renders [CIImage](ciimage.md) or each background task.

## Topics

### Creating a Context Without Specifying a Destination

- [init()](cicontext/init%28%29.md): Initializes a context without a specific rendering destination, using default options.

### Creating a Context for CPU-Based Rendering

- [init(cgContext:options:)](cicontext/init%28cgcontext_options_%29-6p78w.md): Creates a Core Image context from a Quartz context, using the specified options.

### Creating a Context for GPU-Based Rendering

- [init(mtlDevice:)](cicontext/init%28mtldevice_%29-swey.md): Creates a Core Image context using the specified Metal device.
- [init(mtlDevice:options:)](cicontext/init%28mtldevice_options_%29-26usb.md): Creates a Core Image context using the specified Metal device and options.
- [init(mtlCommandQueue:)](cicontext/init%28mtlcommandqueue_%29-7dtqk.md)
- [init(mtlCommandQueue:options:)](cicontext/init%28mtlcommandqueue_options_%29-6i3me.md)

### Rendering Images

- [createCGImage(\_:from:)](cicontext/createcgimage%28__from_%29.md): Creates a Core Graphics image from a region of a Core Image image instance.
- [createCGImage(\_:from:format:colorSpace:)](cicontext/createcgimage%28__from_format_colorspace_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling the pixel format and color space of the `CGImage`.
- [createCGImage(\_:from:format:colorSpace:deferred:)](cicontext/createcgimage%28__from_format_colorspace_deferred_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling when the image is rendered.
- [render(\_:toBitmap:rowBytes:bounds:format:colorSpace:)](cicontext/render%28__tobitmap_rowbytes_bounds_format_colorspace_%29.md): Renders to the given bitmap.
- [render(\_:to:)](cicontext/render%28__to_%29.md): Renders an image into a pixel buffer.
- [render(\_:to:bounds:colorSpace:)](cicontext/render%28__to_bounds_colorspace_%29-2k8l2.md): Renders a region of an image into a pixel buffer.
- [render(\_:to:bounds:colorSpace:)](cicontext/render%28__to_bounds_colorspace_%29-54b9l.md): Renders a region of an image into an IOSurface object.
- [render(\_:to:commandBuffer:bounds:colorSpace:)](cicontext/render%28__to_commandbuffer_bounds_colorspace_%29.md): Renders a region of an image to a Metal texture.

### Drawing Images

- [draw(\_:in:from:)](cicontext/draw%28__in_from_%29.md): Renders a region of an image to a rectangle in the context destination.

### Determining the Allowed Extents for Images Used by a Context

- [inputImageMaximumSize()](cicontext/inputimagemaximumsize%28%29.md): Returns the maximum size allowed for any image rendered into the context.
- [outputImageMaximumSize()](cicontext/outputimagemaximumsize%28%29.md): Returns the maximum size allowed for any image created by the context.

### Managing Resources

- [clearCaches()](cicontext/clearcaches%28%29.md): Frees any cached data, such as temporary images, associated with the context and runs the garbage collector.
- [reclaimResources()](cicontext/reclaimresources%28%29.md): Runs the garbage collector to reclaim any resources that the context no longer requires.
- [offlineGPUCount()](cicontext/offlinegpucount%28%29.md): Returns the number of GPUs not currently driving a display.
- [workingColorSpace](cicontext/workingcolorspace.md): The working color space of the Core Image context.
- [workingFormat](cicontext/workingformat.md): The working pixel format of the Core Image context.

### Rendering Images for Data or File Export

- [tiffRepresentation(of:format:colorSpace:options:)](cicontext/tiffrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in TIFF format.
- [jpegRepresentation(of:colorSpace:options:)](cicontext/jpegrepresentation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in JPEG format.
- [pngRepresentation(of:format:colorSpace:options:)](cicontext/pngrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in PNG format.
- [heifRepresentation(of:format:colorSpace:options:)](cicontext/heifrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF format.
- [heif10Representation(of:colorSpace:options:)](cicontext/heif10representation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF10 format.
- [openEXRRepresentation(of:options:)](cicontext/openexrrepresentation%28of_options_%29.md): Renders the image and exports the resulting image data in open EXR format.
- [writeTIFFRepresentation(of:to:format:colorSpace:options:)](cicontext/writetiffrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in TIFF format.
- [writeJPEGRepresentation(of:to:colorSpace:options:)](cicontext/writejpegrepresentation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in JPEG format.
- [writePNGRepresentation(of:to:format:colorSpace:options:)](cicontext/writepngrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in PNG format.
- [writeHEIFRepresentation(of:to:format:colorSpace:options:)](cicontext/writeheifrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF format.
- [writeHEIF10Representation(of:to:colorSpace:options:)](cicontext/writeheif10representation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF10 format.
- [writeOpenEXRRepresentation(of:to:options:)](cicontext/writeopenexrrepresentation%28of_to_options_%29.md): Renders the image and exports the resulting image data as a file in open EXR format.
- [CIImageRepresentationOption](ciimagerepresentationoption.md)

### Creating Depth Blur Filters

- [depthBlurEffectFilter(for:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:glassesMatte:gainMap:orientation:options:)](cicontext/depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_hairsemanticsegmentation_glassesmatte_gainmap_orientation_options_%29.md): Create a [CIFilter](cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilter(for:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:orientation:options:)](cicontext/depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_hairsemanticsegmentation_orientation_options_%29.md): Create a [CIFilter](cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilter(for:disparityImage:portraitEffectsMatte:orientation:options:)](cicontext/depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_orientation_options_%29.md): Create a [CIFilter](cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilter(forImageData:options:)](cicontext/depthblureffectfilter%28forimagedata_options_%29.md): Create a [CIFilter](cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect.
- [depthBlurEffectFilter(forImageURL:options:)](cicontext/depthblureffectfilter%28forimageurl_options_%29.md): Create a [CIFilter](cifilter-swift.class.md) instance for the supplied image URL that can be used to apply a depth blur effect.

### Constants

Keys to be used in the `options` dictionary when creating a `CIContext` object.

- [CIContextOption](cicontextoption.md): An enum string type that your code can use to select different options when creating a Core Image context.

### Customizing Render Destination

- [prepareRender(\_:from:to:at:)](cicontext/preparerender%28__from_to_at_%29.md): An optional call to warm up a [CIContext](cicontext.md) so that subsequent calls to render with the same arguments run more efficiently.
- [startTask(toClear:)](cicontext/starttask%28toclear_%29.md): Fills the entire destination with black or clear depending on its [alphaMode](cirenderdestination/alphamode.md).
- [startTask(toRender:from:to:at:)](cicontext/starttask%28torender_from_to_at_%29.md): Renders a portion of an image to a point in the destination.
- [startTask(toRender:to:)](cicontext/starttask%28torender_to_%29.md): Renders an image to a destination so that point (0, 0) of the image maps to point (0, 0) of the destination.

### Deprecated

- [init(cglContext:pixelFormat:colorSpace:options:)](cicontext/init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.
- [init(eaglContext:)](cicontext/init%28eaglcontext_%29-8ajef.md): Deprecated. Creates a Core Image context from an EAGL context.
- [init(eaglContext:options:)](cicontext/init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [init(forOfflineGPUAtIndex:)](cicontext/init%28forofflinegpuatindex_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display.
- [init(forOfflineGPUAtIndex:colorSpace:options:sharedContext:)](cicontext/init%28forofflinegpuatindex_colorspace_options_sharedcontext_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display, with the specified options.
- [createCGLayer(with:info:)](cicontext/createcglayer%28with_info_%29.md): Deprecated. Creates a CGLayer object from the provided parameters.
- [draw(\_:at:from:)](cicontext/draw%28__at_from_%29.md): Deprecated. Renders a region of an image to a point in the context destination.

### Initializers

- [init(CGContext:options:)](cicontext/init%28cgcontext_options_%29-1yzwi.md)
- [init(CGLContext:pixelFormat:colorSpace:options:)](cicontext/init%28cglcontext_pixelformat_colorspace_options_%29-3t25h.md): Deprecated.
- [init(EAGLContext:)](cicontext/init%28eaglcontext_%29-293h1.md): Deprecated.
- [init(EAGLContext:options:)](cicontext/init%28eaglcontext_options_%29-2853a.md): Deprecated.
- [init(MTLCommandQueue:)](cicontext/init%28mtlcommandqueue_%29-2pgxu.md)
- [init(MTLCommandQueue:options:)](cicontext/init%28mtlcommandqueue_options_%29-q929.md)
- [init(MTLDevice:)](cicontext/init%28mtldevice_%29-8ksdj.md)
- [init(MTLDevice:options:)](cicontext/init%28mtldevice_options_%29-15xqo.md)
- [init(forOfflineGPUAt:)](cicontext/init%28forofflinegpuat_%29.md): Deprecated.
- [init(forOfflineGPUAt:colorSpace:options:sharedContext:)](cicontext/init%28forofflinegpuat_colorspace_options_sharedcontext_%29.md): Deprecated.
- [init(options:)](cicontext/init%28options_%29.md): Initializes a context without a specific rendering destination, using the specified options.

### Instance Methods

- [calculateHDRStats(for:)](cicontext/calculatehdrstats%28for_%29-3ia7r.md): Given a Core Graphics image, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then return a new Core Graphics image that has the calculated values.
- [calculateHDRStats(for:)](cicontext/calculatehdrstats%28for_%29-6lwmz.md): Given an IOSurface, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then update the surface’s attachments to store the values.
- [calculateHDRStats(for:)](cicontext/calculatehdrstats%28for_%29-7bcki.md): Given a CVPixelBuffer, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then update the buffer’s attachments to store the values.
- [calculateHDRStats(for:)](cicontext/calculatehdrstats%28for_%29-l1rj.md): Given a Core Image image, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then return a new Core Image image that has the calculated values.
- [createCGImage(\_:from:format:colorSpace:deferred:calculateHDRStats:)](cicontext/createcgimage%28__from_format_colorspace_deferred_calculatehdrstats_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for calculating HDR statistics.
- [estimateRender(\_:from:to:at:)](cicontext/estimaterender%28__from_to_at_%29.md): Returns a task with estimated resource statistics for a render, without executing the render.

### Default Implementations

- [CIContext Implementations](cicontext/cicontext-implementations.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Processing an Image Using Built-in Filters](processing-an-image-using-built-in-filters.md): Apply effects such as sepia tint, highlight strengthening, and scaling to images.
- [CIImage](ciimage.md): A representation of an image to be processed or produced by Core Image filters.

# CIContext (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The Core Image context class provides an evaluation context for Core Image processing with Metal, OpenGL, or OpenCL.

## Declaration

```objectivec
@interface CIContext : NSObject
```

## Mentioned In

- [Processing an Image Using Built-in Filters](processing-an-image-using-built-in-filters.md)

<a id="overview"></a>

## Overview

You use a `CIContext` instance to render a [CIImage](ciimage.md) instance which represents a graph of image processing operations which are built using other Core Image classes, such as [CIFilter](cifilter-swift.class.md), [CIKernel](cikernel.md), [CIColor](cicolor.md) and [CIImage](ciimage.md). You can also use a `CIContext` with the [CIDetector](cidetector.md) class to analyze images — for example, to detect faces or barcodes.

Contexts support automatic color management by performing all processing operations in a working color space. This means that unless told otherwise:

- All input images are color matched from the input’s color space to the working space.
- All renders are color matched from the working space to the destination space. (For more information on `CGColorSpace` see [CGColorSpaceRef](../coregraphics/cgcolorspace.md))

`CIContext` and [CIImage](ciimage.md) instances are immutable, so multiple threads can use the same [CIContext](cicontext.md) instance to render [CIImage](ciimage.md) instances. However, [CIFilter](cifilter-swift.class.md) instances are mutable and thus cannot be shared safely among threads. Each thread must take case not to access or modify a [CIFilter](cifilter-swift.class.md) instance while it is being used by another thread.

The `CIContext` manages various internal state such as `MTLCommandQueue` and caches for compiled kernels and intermediate buffers.  For this reason it is not recommended to create many `CIContext` instances.  As a rule, it recommended that you create one `CIContext` instance for each view that renders [CIImage](ciimage.md) or each background task.

## Topics

### Creating a Context Without Specifying a Destination

- [context](cicontext/context.md): Creates a context without a specific rendering destination, using default options.
- [init](cicontext/init%28%29.md): Initializes a context without a specific rendering destination, using default options.
- [contextWithOptions:](cicontext/contextwithoptions_.md): Initializes a context without a specific rendering destination, using the specified options.

### Creating a Context for CPU-Based Rendering

- [contextWithCGContext:options:](cicontext/init%28cgcontext_options_%29-6p78w.md): Creates a Core Image context from a Quartz context, using the specified options.

### Creating a Context for GPU-Based Rendering

- [contextWithMTLDevice:](cicontext/init%28mtldevice_%29-swey.md): Creates a Core Image context using the specified Metal device.
- [contextWithMTLDevice:options:](cicontext/init%28mtldevice_options_%29-26usb.md): Creates a Core Image context using the specified Metal device and options.
- [contextWithMTLCommandQueue:](cicontext/init%28mtlcommandqueue_%29-7dtqk.md)
- [contextWithMTLCommandQueue:options:](cicontext/init%28mtlcommandqueue_options_%29-6i3me.md)

### Rendering Images

- [createCGImage:fromRect:](cicontext/createcgimage%28__from_%29.md): Creates a Core Graphics image from a region of a Core Image image instance.
- [createCGImage:fromRect:format:colorSpace:](cicontext/createcgimage%28__from_format_colorspace_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling the pixel format and color space of the `CGImage`.
- [createCGImage:fromRect:format:colorSpace:deferred:](cicontext/createcgimage%28__from_format_colorspace_deferred_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for controlling when the image is rendered.
- [render:toBitmap:rowBytes:bounds:format:colorSpace:](cicontext/render%28__tobitmap_rowbytes_bounds_format_colorspace_%29.md): Renders to the given bitmap.
- [render:toCVPixelBuffer:](cicontext/render%28__to_%29.md): Renders an image into a pixel buffer.
- [render:toCVPixelBuffer:bounds:colorSpace:](cicontext/render%28__to_bounds_colorspace_%29-2k8l2.md): Renders a region of an image into a pixel buffer.
- [render:toIOSurface:bounds:colorSpace:](cicontext/render%28__to_bounds_colorspace_%29-54b9l.md): Renders a region of an image into an IOSurface object.
- [render:toMTLTexture:commandBuffer:bounds:colorSpace:](cicontext/render%28__to_commandbuffer_bounds_colorspace_%29.md): Renders a region of an image to a Metal texture.

### Drawing Images

- [drawImage:inRect:fromRect:](cicontext/draw%28__in_from_%29.md): Renders a region of an image to a rectangle in the context destination.

### Determining the Allowed Extents for Images Used by a Context

- [inputImageMaximumSize](cicontext/inputimagemaximumsize%28%29.md): Returns the maximum size allowed for any image rendered into the context.
- [outputImageMaximumSize](cicontext/outputimagemaximumsize%28%29.md): Returns the maximum size allowed for any image created by the context.

### Managing Resources

- [clearCaches](cicontext/clearcaches%28%29.md): Frees any cached data, such as temporary images, associated with the context and runs the garbage collector.
- [reclaimResources](cicontext/reclaimresources%28%29.md): Runs the garbage collector to reclaim any resources that the context no longer requires.
- [offlineGPUCount](cicontext/offlinegpucount%28%29.md): Returns the number of GPUs not currently driving a display.
- [workingColorSpace](cicontext/workingcolorspace.md): The working color space of the Core Image context.
- [workingFormat](cicontext/workingformat.md): The working pixel format of the Core Image context.

### Rendering Images for Data or File Export

- [TIFFRepresentationOfImage:format:colorSpace:options:](cicontext/tiffrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in TIFF format.
- [JPEGRepresentationOfImage:colorSpace:options:](cicontext/jpegrepresentation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in JPEG format.
- [PNGRepresentationOfImage:format:colorSpace:options:](cicontext/pngrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in PNG format.
- [HEIFRepresentationOfImage:format:colorSpace:options:](cicontext/heifrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF format.
- [HEIF10RepresentationOfImage:colorSpace:options:error:](cicontext/heif10representation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF10 format.
- [OpenEXRRepresentationOfImage:options:error:](cicontext/openexrrepresentation%28of_options_%29.md): Renders the image and exports the resulting image data in open EXR format.
- [writeTIFFRepresentationOfImage:toURL:format:colorSpace:options:error:](cicontext/writetiffrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in TIFF format.
- [writeJPEGRepresentationOfImage:toURL:colorSpace:options:error:](cicontext/writejpegrepresentation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in JPEG format.
- [writePNGRepresentationOfImage:toURL:format:colorSpace:options:error:](cicontext/writepngrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in PNG format.
- [writeHEIFRepresentationOfImage:toURL:format:colorSpace:options:error:](cicontext/writeheifrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF format.
- [writeHEIF10RepresentationOfImage:toURL:colorSpace:options:error:](cicontext/writeheif10representation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF10 format.
- [writeOpenEXRRepresentationOfImage:toURL:options:error:](cicontext/writeopenexrrepresentation%28of_to_options_%29.md): Renders the image and exports the resulting image data as a file in open EXR format.
- [CIImageRepresentationOption](ciimagerepresentationoption.md)

### Creating Depth Blur Filters

- [depthBlurEffectFilterForImage:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:glassesMatte:gainMap:orientation:options:](cicontext/depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_hairsemanticsegmentation_glassesmatte_gainmap_orientation_options_%29.md): Create a [CIFilter](cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilterForImage:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:orientation:options:](cicontext/depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_hairsemanticsegmentation_orientation_options_%29.md): Create a [CIFilter](cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilterForImage:disparityImage:portraitEffectsMatte:orientation:options:](cicontext/depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_orientation_options_%29.md): Create a [CIFilter](cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilterForImageData:options:](cicontext/depthblureffectfilter%28forimagedata_options_%29.md): Create a [CIFilter](cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect.
- [depthBlurEffectFilterForImageURL:options:](cicontext/depthblureffectfilter%28forimageurl_options_%29.md): Create a [CIFilter](cifilter-swift.class.md) instance for the supplied image URL that can be used to apply a depth blur effect.

### Constants

Keys to be used in the `options` dictionary when creating a `CIContext` object.

- [CIContextOption](cicontextoption.md): An enum string type that your code can use to select different options when creating a Core Image context.

### Customizing Render Destination

- [prepareRender:fromRect:toDestination:atPoint:error:](cicontext/preparerender%28__from_to_at_%29.md): An optional call to warm up a [CIContext](cicontext.md) so that subsequent calls to render with the same arguments run more efficiently.
- [startTaskToClear:error:](cicontext/starttask%28toclear_%29.md): Fills the entire destination with black or clear depending on its [alphaMode](cirenderdestination/alphamode.md).
- [startTaskToRender:fromRect:toDestination:atPoint:error:](cicontext/starttask%28torender_from_to_at_%29.md): Renders a portion of an image to a point in the destination.
- [startTaskToRender:toDestination:error:](cicontext/starttask%28torender_to_%29.md): Renders an image to a destination so that point (0, 0) of the image maps to point (0, 0) of the destination.

### Deprecated

- [contextWithCGLContext:pixelFormat:colorSpace:options:](cicontext/init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.
- [contextWithCGLContext:pixelFormat:options:](cicontext/contextwithcglcontext_pixelformat_options_.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options and pixel format object.
- [contextWithEAGLContext:](cicontext/init%28eaglcontext_%29-8ajef.md): Deprecated. Creates a Core Image context from an EAGL context.
- [contextWithEAGLContext:options:](cicontext/init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [createCGLayerWithSize:info:](cicontext/createcglayer%28with_info_%29.md): Deprecated. Creates a CGLayer object from the provided parameters.
- [drawImage:atPoint:fromRect:](cicontext/draw%28__at_from_%29.md): Deprecated. Renders a region of an image to a point in the context destination.

### Instance Methods

- [calculateHDRStatsForCGImage:](cicontext/calculatehdrstats%28for_%29-3ia7r.md): Given a Core Graphics image, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then return a new Core Graphics image that has the calculated values.
- [calculateHDRStatsForIOSurface:](cicontext/calculatehdrstats%28for_%29-6lwmz.md): Given an IOSurface, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then update the surface’s attachments to store the values.
- [calculateHDRStatsForCVPixelBuffer:](cicontext/calculatehdrstats%28for_%29-7bcki.md): Given a CVPixelBuffer, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then update the buffer’s attachments to store the values.
- [calculateHDRStatsForImage:](cicontext/calculatehdrstats%28for_%29-l1rj.md): Given a Core Image image, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then return a new Core Image image that has the calculated values.
- [createCGImage:fromRect:format:colorSpace:deferred:calculateHDRStats:](cicontext/createcgimage%28__from_format_colorspace_deferred_calculatehdrstats_%29.md): Creates a Core Graphics image from a region of a Core Image image instance with an option for calculating HDR statistics.
- [estimateRender:fromRect:toDestination:atPoint:error:](cicontext/estimaterender%28__from_to_at_%29.md): Returns a task with estimated resource statistics for a render, without executing the render.
- [initWithOptions:](cicontext/init%28options_%29.md): Initializes a context without a specific rendering destination, using the specified options.

### Type Methods

- [contextForOfflineGPUAtIndex:](cicontext/init%28forofflinegpuat_%29.md): Deprecated.
- [contextForOfflineGPUAtIndex:colorSpace:options:sharedContext:](cicontext/init%28forofflinegpuat_colorspace_options_sharedcontext_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [Processing an Image Using Built-in Filters](processing-an-image-using-built-in-filters.md): Apply effects such as sepia tint, highlight strengthening, and scaling to images.
- [CIImage](ciimage.md): A representation of an image to be processed or produced by Core Image filters.
