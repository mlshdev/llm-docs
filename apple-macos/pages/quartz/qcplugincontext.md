> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugincontext](https://developer.apple.com/documentation/quartz/qcplugincontext)

# QCPlugInContext (Swift)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute(\_:atTime:withArguments:)](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
protocol QCPlugInContext
```

## Topics

### Getting the OpenGL Context

- [cglContextObj()](qcplugincontext/cglcontextobj%28%29.md): Deprecated. Returns the destination CGL context to use for OpenGL rendering from within the execution method.

### Getting Execution Context Information

- [userInfo()](qcplugincontext/userinfo%28%29.md): Deprecated. Returns a mutable dictionary that contains information that can be shared between all instances of the `QCPlugIn` subclass, running in the same Quartz Composer context.
- [bounds()](qcplugincontext/bounds%28%29.md): Deprecated. Returns the bounds of the rendering context.
- [colorSpace()](qcplugincontext/colorspace%28%29.md): Deprecated. Returns the color space used by the rendering context.

### Getting an Image Provider

- [outputImageProviderFromBuffer(withPixelFormat:pixelsWide:pixelsHigh:baseAddress:bytesPerRow:releaseCallback:releaseContext:colorSpace:shouldColorMatch:)](qcplugincontext/outputimageproviderfrombuffer%28withpixelformat_pixelswide_pixelshigh_baseaddress_bytesperrow_releasecallback_releasecontext_colorspace_shouldcolormatch_%29.md): Deprecated. Returns an image provider from a single memory buffer.
- [outputImageProviderFromTexture(withPixelFormat:pixelsWide:pixelsHigh:name:flipped:releaseCallback:releaseContext:colorSpace:shouldColorMatch:)](qcplugincontext/outputimageproviderfromtexture%28withpixelformat_pixelswide_pixelshigh_name_flipped_releasecallback_releasecontext_colorspace_shouldcolormatch_%29.md): Deprecated. Returns an image provider from an OpenGL texture.

### Instance Methods

- [compositionURL()](qcplugincontext/compositionurl%28%29.md): Deprecated.

## See Also

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionPickerViewDelegate](qccompositionpickerviewdelegate.md): The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).
- [QCCompositionRenderer](qccompositionrenderer.md): Deprecated. The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.
- [QCPlugInInputImageSource](qcplugininputimagesource.md): Deprecated. The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.
- [QCPlugInOutputImageProvider](qcpluginoutputimageprovider.md): Deprecated. The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.

# QCPlugInContext (Objective-C)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute:atTime:withArguments:](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@protocol QCPlugInContext
```

## Topics

### Getting the OpenGL Context

- [CGLContextObj](qcplugincontext/cglcontextobj%28%29.md): Deprecated. Returns the destination CGL context to use for OpenGL rendering from within the execution method.

### Logging Messages

- [logMessage:](qcplugincontext/logmessage_.md): Deprecated. Writes a message to the Quartz Composer log.

### Getting Execution Context Information

- [userInfo](qcplugincontext/userinfo%28%29.md): Deprecated. Returns a mutable dictionary that contains information that can be shared between all instances of the `QCPlugIn` subclass, running in the same Quartz Composer context.
- [bounds](qcplugincontext/bounds%28%29.md): Deprecated. Returns the bounds of the rendering context.
- [colorSpace](qcplugincontext/colorspace%28%29.md): Deprecated. Returns the color space used by the rendering context.

### Getting an Image Provider

- [outputImageProviderFromBufferWithPixelFormat:pixelsWide:pixelsHigh:baseAddress:bytesPerRow:releaseCallback:releaseContext:colorSpace:shouldColorMatch:](qcplugincontext/outputimageproviderfrombuffer%28withpixelformat_pixelswide_pixelshigh_baseaddress_bytesperrow_releasecallback_releasecontext_colorspace_shouldcolormatch_%29.md): Deprecated. Returns an image provider from a single memory buffer.
- [outputImageProviderFromTextureWithPixelFormat:pixelsWide:pixelsHigh:name:flipped:releaseCallback:releaseContext:colorSpace:shouldColorMatch:](qcplugincontext/outputimageproviderfromtexture%28withpixelformat_pixelswide_pixelshigh_name_flipped_releasecallback_releasecontext_colorspace_shouldcolormatch_%29.md): Deprecated. Returns an image provider from an OpenGL texture.

### Instance Methods

- [compositionURL](qcplugincontext/compositionurl%28%29.md): Deprecated.

## See Also

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionPickerViewDelegate](qccompositionpickerviewdelegate.md): The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).
- [QCCompositionRenderer](qccompositionrenderer.md): Deprecated. The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.
- [QCPlugInInputImageSource](qcplugininputimagesource.md): Deprecated. The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.
- [QCPlugInOutputImageProvider](qcpluginoutputimageprovider.md): Deprecated. The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.
