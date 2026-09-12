> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessoroutput](https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput)

# CIImageProcessorOutput (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A container for writing image data and information produced by a custom image processor.

## Declaration

```swift
protocol CIImageProcessorOutput
```

<a id="overview"></a>

## Overview

Your app does not define classes that adopt this protocol; Core Image provides an object of this type when applying a custom image processor you create with a [CIImageProcessorKernel](ciimageprocessorkernel.md) subclass.

In your image processor class’ [process(with:arguments:output:)](ciimageprocessorkernel/process%28with_arguments_output_%29.md) method, use an appropriate property of the provided `CIImageProcessorOutput` object to return processed pixel data to Core Image. For example, if you process the image using a Metal shader, bind the [metalTexture](ciimageprocessoroutput/metaltexture.md) property as an attachment in a render pass or as an output texture in a compute pass. Or, if you process the image using a CPU-based routine, write processed pixel data to memory using the [baseAddress](ciimageprocessoroutput/baseaddress.md) pointer. You must provide rendered output to one (and only one) of the properties listed in [Providing Output Image Data](ciimageprocessoroutput.md#Providing-Output-Image-Data).

To access input pixel data in your image processor block, see the [CIImageProcessorInput](ciimageprocessorinput.md) class.

## Topics

### Providing Output Image Data

- [baseAddress](ciimageprocessoroutput/baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can write pixels to.
- [metalTexture](ciimageprocessoroutput/metaltexture.md): A Metal texture object that can be bound for output using Metal.
- [pixelBuffer](ciimageprocessoroutput/pixelbuffer.md): An output pixelBuffer object that your Core Image Processor Kernel can write to.
- [surface](ciimageprocessoroutput/surface.md): An output surface object that your Core Image Processor Kernel can write to.

### Getting Supplemental Information for Image Processing

- [region](ciimageprocessoroutput/region.md): The rectangular region of the output image that your Core Image Processor Kernel must provide.
- [metalCommandBuffer](ciimageprocessoroutput/metalcommandbuffer.md): Returns a Metal command buffer object that can be used for encoding commands.
- [bytesPerRow](ciimageprocessoroutput/bytesperrow.md): The bytes per row of the CPU memory that your Core Image Processor Kernel can write pixels to.
- [format](ciimageprocessoroutput/format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can write pixels to.

### Instance Properties

- [digest](ciimageprocessoroutput/digest.md): A 64-bit digest that uniquely describes the contents of the output of a processor.

### Instance Methods

- [temporaryPixelBuffer(identifier:format:width:height:attributes:)](ciimageprocessoroutput/temporarypixelbuffer%28identifier_format_width_height_attributes_%29.md): Returns a temporary CVPixelBuffer that your Core Image Processor Kernel can use as scratch storage during processing.
- [temporarySurface(identifier:format:width:height:)](ciimageprocessoroutput/temporarysurface%28identifier_format_width_height_%29.md): Returns a temporary IOSurface that your Core Image Processor Kernel can use as scratch storage during processing.

## See Also

### Custom Image Processors

- [CIImageProcessorKernel](ciimageprocessorkernel.md): The abstract class you extend to create custom image processors that can integrate with Core Image workflows.
- [CIImageProcessorInput](ciimageprocessorinput.md): A container of image data and information for use in a custom image processor.

# CIImageProcessorOutput (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A container for writing image data and information produced by a custom image processor.

## Declaration

```objectivec
@protocol CIImageProcessorOutput
```

<a id="overview"></a>

## Overview

Your app does not define classes that adopt this protocol; Core Image provides an object of this type when applying a custom image processor you create with a [CIImageProcessorKernel](ciimageprocessorkernel.md) subclass.

In your image processor class’ [processWithInputs:arguments:output:error:](ciimageprocessorkernel/process%28with_arguments_output_%29.md) method, use an appropriate property of the provided `CIImageProcessorOutput` object to return processed pixel data to Core Image. For example, if you process the image using a Metal shader, bind the [metalTexture](ciimageprocessoroutput/metaltexture.md) property as an attachment in a render pass or as an output texture in a compute pass. Or, if you process the image using a CPU-based routine, write processed pixel data to memory using the [baseAddress](ciimageprocessoroutput/baseaddress.md) pointer. You must provide rendered output to one (and only one) of the properties listed in [Providing Output Image Data](ciimageprocessoroutput.md#Providing-Output-Image-Data).

To access input pixel data in your image processor block, see the [CIImageProcessorInput](ciimageprocessorinput.md) class.

## Topics

### Providing Output Image Data

- [baseAddress](ciimageprocessoroutput/baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can write pixels to.
- [metalTexture](ciimageprocessoroutput/metaltexture.md): A Metal texture object that can be bound for output using Metal.
- [pixelBuffer](ciimageprocessoroutput/pixelbuffer.md): An output pixelBuffer object that your Core Image Processor Kernel can write to.
- [surface](ciimageprocessoroutput/surface.md): An output surface object that your Core Image Processor Kernel can write to.

### Getting Supplemental Information for Image Processing

- [region](ciimageprocessoroutput/region.md): The rectangular region of the output image that your Core Image Processor Kernel must provide.
- [metalCommandBuffer](ciimageprocessoroutput/metalcommandbuffer.md): Returns a Metal command buffer object that can be used for encoding commands.
- [bytesPerRow](ciimageprocessoroutput/bytesperrow.md): The bytes per row of the CPU memory that your Core Image Processor Kernel can write pixels to.
- [format](ciimageprocessoroutput/format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can write pixels to.

### Instance Properties

- [digest](ciimageprocessoroutput/digest.md): A 64-bit digest that uniquely describes the contents of the output of a processor.

### Instance Methods

- [temporaryPixelBufferWithIdentifier:format:width:height:attributes:](ciimageprocessoroutput/temporarypixelbuffer%28identifier_format_width_height_attributes_%29.md): Returns a temporary CVPixelBuffer that your Core Image Processor Kernel can use as scratch storage during processing.
- [temporarySurfaceWithIdentifier:format:width:height:](ciimageprocessoroutput/temporarysurface%28identifier_format_width_height_%29.md): Returns a temporary IOSurface that your Core Image Processor Kernel can use as scratch storage during processing.

## See Also

### Custom Image Processors

- [CIImageProcessorKernel](ciimageprocessorkernel.md): The abstract class you extend to create custom image processors that can integrate with Core Image workflows.
- [CIImageProcessorInput](ciimageprocessorinput.md): A container of image data and information for use in a custom image processor.
