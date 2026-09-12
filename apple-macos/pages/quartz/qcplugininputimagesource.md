> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource](https://developer.apple.com/documentation/quartz/qcplugininputimagesource)

# QCPlugInInputImageSource (Swift)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
protocol QCPlugInInputImageSource
```

<a id="overview"></a>

## Overview

Input images are opaque source objects that comply to this protocol. To create an image input port as an Objective-C 2.0 property, declare it as follows:

```objc
@property(dynamic) id<QCPlugInInputImageSource> inputImage;
```

To create an image input port dynamically. use the type `QCPortTypeImage`:

```objc
[self addInputPortWithType:QCPortTypeImage
                    forKey:@"inputImage"
            withAttributes:nil];
```

## Topics

### Converting an Image to a Representation

- [lockTextureRepresentation(with:forBounds:)](qcplugininputimagesource/locktexturerepresentation%28with_forbounds_%29.md): Deprecated. Creates an OpenGL texture representation from a subregion of the image source using the provided color space.
- [unlockTextureRepresentation()](qcplugininputimagesource/unlocktexturerepresentation%28%29.md): Deprecated. Releases the OpenGL texture representation of the image source.
- [lockBufferRepresentation(withPixelFormat:colorSpace:forBounds:)](qcplugininputimagesource/lockbufferrepresentation%28withpixelformat_colorspace_forbounds_%29.md): Deprecated. Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.
- [bindTextureRepresentation(toCGLContext:textureUnit:normalizeCoordinates:)](qcplugininputimagesource/bindtexturerepresentation%28tocglcontext_textureunit_normalizecoordinates_%29.md): Deprecated. Binds the texture to a given texture unit and optionally scales or flips the texture.
- [unbindTextureRepresentation(fromCGLContext:textureUnit:)](qcplugininputimagesource/unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md): Deprecated. Unbinds the texture from a texture unit.
- [unlockBufferRepresentation()](qcplugininputimagesource/unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.

### Getting Color Space Information

- [imageColorSpace()](qcplugininputimagesource/imagecolorspace%28%29.md): Deprecated. Returns the color space of the image source.
- [shouldColorMatch()](qcplugininputimagesource/shouldcolormatch%28%29.md): Deprecated. Returns whether or not the image source should be color matched.

### Getting Texture Information

- [texturePixelsWide()](qcplugininputimagesource/texturepixelswide%28%29.md): Deprecated. Returns the width of the texture representation.
- [texturePixelsHigh()](qcplugininputimagesource/texturepixelshigh%28%29.md): Deprecated. Returns the height of the texture representation.
- [textureTarget()](qcplugininputimagesource/texturetarget%28%29.md): Deprecated. Returns the texture target.
- [textureName()](qcplugininputimagesource/texturename%28%29.md): Deprecated. Returns the texture name.
- [textureColorSpace()](qcplugininputimagesource/texturecolorspace%28%29.md): Deprecated. Returns the color space of the texture representation.
- [textureFlipped()](qcplugininputimagesource/textureflipped%28%29.md): Deprecated. Returns whether or not the contents of the texture are flipped vertically.
- [textureMatrix()](qcplugininputimagesource/texturematrix%28%29.md): Deprecated. Returns a texture matrix.

### Getting Image Buffer Information

- [imageBounds()](qcplugininputimagesource/imagebounds%28%29.md): Deprecated. Returns the actual bounds of the image source expressed in pixels and aligned to integer boundaries.
- [bufferPixelsWide()](qcplugininputimagesource/bufferpixelswide%28%29.md): Deprecated. Returns the width of the image buffer representation.
- [bufferPixelsHigh()](qcplugininputimagesource/bufferpixelshigh%28%29.md): Deprecated. Returns the height of the image buffer representation.
- [bufferPixelFormat()](qcplugininputimagesource/bufferpixelformat%28%29.md): Deprecated. Returns the pixel format of the image buffer representation.
- [bufferColorSpace()](qcplugininputimagesource/buffercolorspace%28%29.md): Deprecated. Returns the color space of the image buffer representation.
- [bufferBaseAddress()](qcplugininputimagesource/bufferbaseaddress%28%29.md): Deprecated. Returns the base address of the image buffer.
- [bufferBytesPerRow()](qcplugininputimagesource/bufferbytesperrow%28%29.md): Deprecated. Returns the bytes per row of the buffer representation.

## See Also

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionPickerViewDelegate](qccompositionpickerviewdelegate.md): The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).
- [QCCompositionRenderer](qccompositionrenderer.md): Deprecated. The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.
- [QCPlugInContext](qcplugincontext.md): Deprecated. The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute(\_:atTime:withArguments:)](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.
- [QCPlugInOutputImageProvider](qcpluginoutputimageprovider.md): Deprecated. The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.

# QCPlugInInputImageSource (Objective-C)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@protocol QCPlugInInputImageSource
```

<a id="overview"></a>

## Overview

Input images are opaque source objects that comply to this protocol. To create an image input port as an Objective-C 2.0 property, declare it as follows:

```objc
@property(dynamic) id<QCPlugInInputImageSource> inputImage;
```

To create an image input port dynamically. use the type `QCPortTypeImage`:

```objc
[self addInputPortWithType:QCPortTypeImage
                    forKey:@"inputImage"
            withAttributes:nil];
```

## Topics

### Converting an Image to a Representation

- [lockTextureRepresentationWithColorSpace:forBounds:](qcplugininputimagesource/locktexturerepresentation%28with_forbounds_%29.md): Deprecated. Creates an OpenGL texture representation from a subregion of the image source using the provided color space.
- [unlockTextureRepresentation](qcplugininputimagesource/unlocktexturerepresentation%28%29.md): Deprecated. Releases the OpenGL texture representation of the image source.
- [lockBufferRepresentationWithPixelFormat:colorSpace:forBounds:](qcplugininputimagesource/lockbufferrepresentation%28withpixelformat_colorspace_forbounds_%29.md): Deprecated. Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.
- [bindTextureRepresentationToCGLContext:textureUnit:normalizeCoordinates:](qcplugininputimagesource/bindtexturerepresentation%28tocglcontext_textureunit_normalizecoordinates_%29.md): Deprecated. Binds the texture to a given texture unit and optionally scales or flips the texture.
- [unbindTextureRepresentationFromCGLContext:textureUnit:](qcplugininputimagesource/unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md): Deprecated. Unbinds the texture from a texture unit.
- [unlockBufferRepresentation](qcplugininputimagesource/unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.

### Getting Color Space Information

- [imageColorSpace](qcplugininputimagesource/imagecolorspace%28%29.md): Deprecated. Returns the color space of the image source.
- [shouldColorMatch](qcplugininputimagesource/shouldcolormatch%28%29.md): Deprecated. Returns whether or not the image source should be color matched.

### Getting Texture Information

- [texturePixelsWide](qcplugininputimagesource/texturepixelswide%28%29.md): Deprecated. Returns the width of the texture representation.
- [texturePixelsHigh](qcplugininputimagesource/texturepixelshigh%28%29.md): Deprecated. Returns the height of the texture representation.
- [textureTarget](qcplugininputimagesource/texturetarget%28%29.md): Deprecated. Returns the texture target.
- [textureName](qcplugininputimagesource/texturename%28%29.md): Deprecated. Returns the texture name.
- [textureColorSpace](qcplugininputimagesource/texturecolorspace%28%29.md): Deprecated. Returns the color space of the texture representation.
- [textureFlipped](qcplugininputimagesource/textureflipped%28%29.md): Deprecated. Returns whether or not the contents of the texture are flipped vertically.
- [textureMatrix](qcplugininputimagesource/texturematrix%28%29.md): Deprecated. Returns a texture matrix.

### Getting Image Buffer Information

- [imageBounds](qcplugininputimagesource/imagebounds%28%29.md): Deprecated. Returns the actual bounds of the image source expressed in pixels and aligned to integer boundaries.
- [bufferPixelsWide](qcplugininputimagesource/bufferpixelswide%28%29.md): Deprecated. Returns the width of the image buffer representation.
- [bufferPixelsHigh](qcplugininputimagesource/bufferpixelshigh%28%29.md): Deprecated. Returns the height of the image buffer representation.
- [bufferPixelFormat](qcplugininputimagesource/bufferpixelformat%28%29.md): Deprecated. Returns the pixel format of the image buffer representation.
- [bufferColorSpace](qcplugininputimagesource/buffercolorspace%28%29.md): Deprecated. Returns the color space of the image buffer representation.
- [bufferBaseAddress](qcplugininputimagesource/bufferbaseaddress%28%29.md): Deprecated. Returns the base address of the image buffer.
- [bufferBytesPerRow](qcplugininputimagesource/bufferbytesperrow%28%29.md): Deprecated. Returns the bytes per row of the buffer representation.

## See Also

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionPickerViewDelegate](qccompositionpickerviewdelegate.md): The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).
- [QCCompositionRenderer](qccompositionrenderer.md): Deprecated. The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.
- [QCPlugInContext](qcplugincontext.md): Deprecated. The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute:atTime:withArguments:](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.
- [QCPlugInOutputImageProvider](qcpluginoutputimageprovider.md): Deprecated. The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.
