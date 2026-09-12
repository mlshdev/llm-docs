> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginoutputimageprovider](https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider)

# QCPlugInOutputImageProvider (Swift)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
protocol QCPlugInOutputImageProvider
```

<a id="overview"></a>

## Overview

Output images are opaque provider objects that comply to this protocol. To create an image output port as an Objective-C 2.0 property, declare it as follows:

```objc
@property(dynamic) id<QCPlugInOutputImageProvider> outputImage;
```

To create an image input port dynamically use the type `QCPortTypeImage`:

```objc
[self addOutputPortWithType:QCPortTypeImage
                    forKey:@"outputImage"
            withAttributes:nil];
```

To write images to that port, you need to implement the methods in this protocol and create an internal class that represents the images produced by the custom patch. For example, a simple interface for an image provider is:

```objc
@interface MyOutputImage : NSObject <QCPlugInOutputImageProvider>
{
    NSUInteger _width;
    NSUInteger _height;
}
```

## Topics

### Rendering an Image to a Destination

- [render(toBuffer:withBytesPerRow:pixelFormat:forBounds:)](qcpluginoutputimageprovider/render%28tobuffer_withbytesperrow_pixelformat_forbounds_%29.md): Deprecated. Renders a subregion of the image into the supplied memory buffer using the specified pixel format.
- [copyRenderedTexture(forCGLContext:pixelFormat:bounds:isFlipped:)](qcpluginoutputimageprovider/copyrenderedtexture%28forcglcontext_pixelformat_bounds_isflipped_%29.md): Deprecated. Returns the name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format.
- [render(withCGLContext:forBounds:)](qcpluginoutputimageprovider/render%28withcglcontext_forbounds_%29.md): Deprecated. Renders a subregion of the image to the provided CGL context.
- [releaseRenderedTexture(\_:forCGLContext:)](qcpluginoutputimageprovider/releaserenderedtexture%28__forcglcontext_%29.md): Deprecated. Releases the previously copied texture.

### Providing Information About the Image

- [imageBounds()](qcpluginoutputimageprovider/imagebounds%28%29.md): Deprecated. Returns the bounds of the image expressed in pixels and aligned to integer boundaries.
- [imageColorSpace()](qcpluginoutputimageprovider/imagecolorspace%28%29.md): Deprecated. Returns the color space of the image or `NULL` if the image should not be color matched.
- [shouldColorMatch()](qcpluginoutputimageprovider/shouldcolormatch%28%29.md): Deprecated. Returns whether the image should be color matched.

### Providing Information About the Rendering Destination

- [supportedBufferPixelFormats()](qcpluginoutputimageprovider/supportedbufferpixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to a memory buffer.
- [supportedRenderedTexturePixelFormats()](qcpluginoutputimageprovider/supportedrenderedtexturepixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to an onscreen OpenGL context.
- [canRender(withCGLContext:)](qcpluginoutputimageprovider/canrender%28withcglcontext_%29.md): Deprecated. Returns whether the image data can be rendered into the provided CGL context.

## See Also

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionPickerViewDelegate](qccompositionpickerviewdelegate.md): The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).
- [QCCompositionRenderer](qccompositionrenderer.md): Deprecated. The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.
- [QCPlugInContext](qcplugincontext.md): Deprecated. The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute(\_:atTime:withArguments:)](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.
- [QCPlugInInputImageSource](qcplugininputimagesource.md): Deprecated. The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.

# QCPlugInOutputImageProvider (Objective-C)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@protocol QCPlugInOutputImageProvider
```

<a id="overview"></a>

## Overview

Output images are opaque provider objects that comply to this protocol. To create an image output port as an Objective-C 2.0 property, declare it as follows:

```objc
@property(dynamic) id<QCPlugInOutputImageProvider> outputImage;
```

To create an image input port dynamically use the type `QCPortTypeImage`:

```objc
[self addOutputPortWithType:QCPortTypeImage
                    forKey:@"outputImage"
            withAttributes:nil];
```

To write images to that port, you need to implement the methods in this protocol and create an internal class that represents the images produced by the custom patch. For example, a simple interface for an image provider is:

```objc
@interface MyOutputImage : NSObject <QCPlugInOutputImageProvider>
{
    NSUInteger _width;
    NSUInteger _height;
}
```

## Topics

### Rendering an Image to a Destination

- [renderToBuffer:withBytesPerRow:pixelFormat:forBounds:](qcpluginoutputimageprovider/render%28tobuffer_withbytesperrow_pixelformat_forbounds_%29.md): Deprecated. Renders a subregion of the image into the supplied memory buffer using the specified pixel format.
- [copyRenderedTextureForCGLContext:pixelFormat:bounds:isFlipped:](qcpluginoutputimageprovider/copyrenderedtexture%28forcglcontext_pixelformat_bounds_isflipped_%29.md): Deprecated. Returns the name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format.
- [renderWithCGLContext:forBounds:](qcpluginoutputimageprovider/render%28withcglcontext_forbounds_%29.md): Deprecated. Renders a subregion of the image to the provided CGL context.
- [releaseRenderedTexture:forCGLContext:](qcpluginoutputimageprovider/releaserenderedtexture%28__forcglcontext_%29.md): Deprecated. Releases the previously copied texture.

### Providing Information About the Image

- [imageBounds](qcpluginoutputimageprovider/imagebounds%28%29.md): Deprecated. Returns the bounds of the image expressed in pixels and aligned to integer boundaries.
- [imageColorSpace](qcpluginoutputimageprovider/imagecolorspace%28%29.md): Deprecated. Returns the color space of the image or `NULL` if the image should not be color matched.
- [shouldColorMatch](qcpluginoutputimageprovider/shouldcolormatch%28%29.md): Deprecated. Returns whether the image should be color matched.

### Providing Information About the Rendering Destination

- [supportedBufferPixelFormats](qcpluginoutputimageprovider/supportedbufferpixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to a memory buffer.
- [supportedRenderedTexturePixelFormats](qcpluginoutputimageprovider/supportedrenderedtexturepixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to an onscreen OpenGL context.
- [canRenderWithCGLContext:](qcpluginoutputimageprovider/canrender%28withcglcontext_%29.md): Deprecated. Returns whether the image data can be rendered into the provided CGL context.

## See Also

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionPickerViewDelegate](qccompositionpickerviewdelegate.md): The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).
- [QCCompositionRenderer](qccompositionrenderer.md): Deprecated. The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.
- [QCPlugInContext](qcplugincontext.md): Deprecated. The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute:atTime:withArguments:](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.
- [QCPlugInInputImageSource](qcplugininputimagesource.md): Deprecated. The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.
