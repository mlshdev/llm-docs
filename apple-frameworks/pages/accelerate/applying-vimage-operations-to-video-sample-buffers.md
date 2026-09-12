> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/applying-vimage-operations-to-video-sample-buffers](https://developer.apple.com/documentation/accelerate/applying-vimage-operations-to-video-sample-buffers)

# Applying vImage operations to video sample buffers (Swift)

**Framework:** Accelerate  
**Kind:** Sample Code  
**Availability:** macOS 13.3+ · Xcode 14.3+

Use the vImage convert-any-to-any functionality to perform real-time image processing of video frames streamed from your device’s camera.

<a id="Overview"></a>

## Overview

The vImage library provides the high-level convert-any-to-any [vImageConverter](vimageconverter.md) class to convert image data between Core Video and Core Graphics formats. The convert-any-to-any functionality is suited for apps that work across different platforms where [AVFoundation](https://developer.apple.com/av-foundation/) may provide video frames in different formats.

This sample code app uses [AVFoundation](https://developer.apple.com/av-foundation/) to access the Mac camera and vImage to convert the camera image to an RGB image that the app displays onscreen.

<a id="Specify-the-pixel-format"></a>

### Specify the pixel format

To ensure that AVCapture doesn’t have to perform a conversion from the capture format to the output format, the sample code specifies the output format as the camera’s active format. After declaring `videoOutput` as an [`AVCaptureVideoDataOutput`](../avfoundation/avcapturevideodataoutput.md) instance, the following code defines the output pixel format by creating the [`videoSettings`](../avfoundation/avcapturevideodataoutput/videosettings.md) dictionary:

```swift
pixelFormat = CMFormatDescriptionGetMediaSubType(camera.activeFormat.formatDescription)
videoOutput.videoSettings = [kCVPixelBufferPixelFormatTypeKey as String: pixelFormat]
```

<a id="Lock-the-Core-Video-pixel-buffer"></a>

### Lock the Core Video pixel buffer

When the app starts the flow of data through the capture pipeline, [AVFoundation](https://developer.apple.com/av-foundation/) calls [`captureOutput(_:didOutput:from:)`](../avfoundation/avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) for each new video frame. The following code locks the [`CVPixelBuffer`](../corevideo/cvpixelbuffer.md) structure’s underlying memory to make it available exclusively to the vImage conversion function:

```swift
CVPixelBufferLockBaseAddress(
    pixelBuffer,
    CVPixelBufferLockFlags.readOnly)

do {
    try convertVideoFormatToRGB(cvPixelBuffer: pixelBuffer)
} catch {
    fatalError("Unable to perform conversion.")
}

CVPixelBufferUnlockBaseAddress(
    pixelBuffer,
    CVPixelBufferLockFlags.readOnly)
```

<a id="Create-a-Core-Video-to-Core-Graphics-converter"></a>

### Create a Core Video-to-Core Graphics converter

The vImage convert-any-to-any function requires a converter that describes the source and destination formats. The sample code app converts a Core Video pixel buffer to a Core Graphics image. The code calls the [make(buffer:)](vimagecvimageformat/make%28buffer_%29.md) function to derive the source Core Video image format from the [`CVPixelBuffer`](../corevideo/cvpixelbuffer.md). In some cases, the [vImageCVImageFormat](vimagecvimageformat.md) instance that the make function returns may have incomplete information. The following code ensures that the format has a color space and chrominance siting information:

```swift
guard let cvImageFormat = vImageCVImageFormat.make(buffer: cvPixelBuffer) else {
    fatalError("Unable to derive Core Video pixel format from buffer.")
}

if cvImageFormat.colorSpace == nil {
    cvImageFormat.colorSpace = CGColorSpaceCreateDeviceRGB()
}

if cvImageFormat.chromaSiting == nil {
    cvImageFormat.chromaSiting = .center
}
```

The sample app specifies a three-channel, 8-bit-per-channel [vImage_CGImageFormat](vimage_cgimageformat.md) as the conversion destination format.

```swift
let cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8 * 3,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.none.rawValue))!
```

The [make(sourceFormat:destinationFormat:flags:)](vimageconverter/make%28sourceformat_destinationformat_flags_%29-8iupf.md) type method creates a [vImageConverter](vimageconverter.md) instance from the source and destination formats.

```swift
converter = try? vImageConverter.make(sourceFormat: cvImageFormat,
                                      destinationFormat: cgImageFormat)

if converter == nil {
    fatalError("Unable to create Core Video to Core Graphics converter.")
}
```

<a id="Initialize-the-destination-buffer"></a>

### Initialize the destination buffer

The destination pixel buffer contains the RGB image after conversion. The code defines it as a three-channel, 8-bit-per-channel [vImage.PixelBuffer](vimage/pixelbuffer.md) structure.

```swift
var destinationBuffer: vImage.PixelBuffer<vImage.Interleaved8x3>!
```

The first time that the app calls the conversion function, it runs the following code to initialize the destination pixel buffer with the same dimensions as the Core Video pixel buffer:

```swift
let size = vImage.Size(cvPixelBuffer: cvPixelBuffer)
destinationBuffer = vImage.PixelBuffer<vImage.Interleaved8x3>(size: size)
```

<a id="Initialize-the-source-buffers"></a>

### Initialize the source buffers

Although the sample code app knows that the Core Graphics image format requires only a single buffer at compile time, the camera’s active format defines the number of source buffers and their pixel formats at runtime. Therefore, the code defines the source buffers as an array of [vImage.DynamicPixelFormat](vimage/dynamicpixelformat.md) pixel buffers.

```swift
var sourceBuffers: [vImage.PixelBuffer<vImage.DynamicPixelFormat>]!
```

The [vImageConverter](vimageconverter.md) provides the [makeCVToCGPixelBuffers(referencing:)](vimageconverter/makecvtocgpixelbuffers%28referencing_%29.md) function that returns an array of pixel buffers. These pixel buffers reference the underlying memory of each plane of the Core Video pixel buffer.

```swift
sourceBuffers = try converter.makeCVToCGPixelBuffers(referencing: cvPixelBuffer)
```

<a id="Convert-the-Core-Video-buffer-contents-to-a-Core-Graphics-format-image"></a>

### Convert the Core Video buffer contents to a Core Graphics format image

The [convert(from:to:)](vimageconverter/convert%28from_to_%29-9s7p7.md) function accepts the source and destination pixel buffers and converts the Core Video pixel buffer’s contents to a Core Graphics image.

```swift
try converter.convert(from: sourceBuffers, to: [destinationBuffer])
```

<a id="Create-an-output-Core-Graphics-image"></a>

### Create an output Core Graphics image

Finally, the code calls [makeCGImage(cgImageFormat:)](vimage/pixelbuffer/makecgimage%28cgimageformat_%29.md) to create a Core Graphics image that it displays in the user interface.

```swift
let rgbImage = destinationBuffer.makeCGImage(cgImageFormat: cgImageFormat)!
```

## See Also

### Core Video Interoperation

- [Using vImage pixel buffers to generate video effects](using-vimage-pixel-buffers-to-generate-video-effects.md): Render real-time video effects with the vImage Pixel Buffer.
- [Integrating vImage pixel buffers into a Core Image workflow](integrating-vimage-pixel-buffers-into-a-core-image-workflow.md): Share image data between Core Video pixel buffers and vImage buffers to integrate vImage operations into a Core Image workflow.
- [Improving the quality of quantized images with dithering](improving-the-quality-of-quantized-images-with-dithering.md): Apply dithering to simulate colors that are unavailable in reduced bit depths.
- [Core Video interoperability](core-video-interoperability.md): Pass image data between Core Video and vImage.

# Applying vImage operations to video sample buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** Sample Code  
**Availability:** macOS 13.3+ · Xcode 14.3+

Use the vImage convert-any-to-any functionality to perform real-time image processing of video frames streamed from your device’s camera.

<a id="Overview"></a>

## Overview

The vImage library provides the high-level convert-any-to-any [vImageConverterRef](vimageconverter.md) class to convert image data between Core Video and Core Graphics formats. The convert-any-to-any functionality is suited for apps that work across different platforms where [AVFoundation](https://developer.apple.com/av-foundation/) may provide video frames in different formats.

This sample code app uses [AVFoundation](https://developer.apple.com/av-foundation/) to access the Mac camera and vImage to convert the camera image to an RGB image that the app displays onscreen.

<a id="Specify-the-pixel-format"></a>

### Specify the pixel format

To ensure that AVCapture doesn’t have to perform a conversion from the capture format to the output format, the sample code specifies the output format as the camera’s active format. After declaring `videoOutput` as an [`AVCaptureVideoDataOutput`](../avfoundation/avcapturevideodataoutput.md) instance, the following code defines the output pixel format by creating the [`videoSettings`](../avfoundation/avcapturevideodataoutput/videosettings.md) dictionary:

```swift
pixelFormat = CMFormatDescriptionGetMediaSubType(camera.activeFormat.formatDescription)
videoOutput.videoSettings = [kCVPixelBufferPixelFormatTypeKey as String: pixelFormat]
```

<a id="Lock-the-Core-Video-pixel-buffer"></a>

### Lock the Core Video pixel buffer

When the app starts the flow of data through the capture pipeline, [AVFoundation](https://developer.apple.com/av-foundation/) calls [`captureOutput(_:didOutput:from:)`](../avfoundation/avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) for each new video frame. The following code locks the [`CVPixelBuffer`](../corevideo/cvpixelbuffer.md) structure’s underlying memory to make it available exclusively to the vImage conversion function:

```swift
CVPixelBufferLockBaseAddress(
    pixelBuffer,
    CVPixelBufferLockFlags.readOnly)

do {
    try convertVideoFormatToRGB(cvPixelBuffer: pixelBuffer)
} catch {
    fatalError("Unable to perform conversion.")
}

CVPixelBufferUnlockBaseAddress(
    pixelBuffer,
    CVPixelBufferLockFlags.readOnly)
```

<a id="Create-a-Core-Video-to-Core-Graphics-converter"></a>

### Create a Core Video-to-Core Graphics converter

The vImage convert-any-to-any function requires a converter that describes the source and destination formats. The sample code app converts a Core Video pixel buffer to a Core Graphics image. The code calls the [make(buffer:)](vimagecvimageformat/make%28buffer_%29.md) function to derive the source Core Video image format from the [`CVPixelBuffer`](../corevideo/cvpixelbuffer.md). In some cases, the [vImageCVImageFormatRef](vimagecvimageformat.md) instance that the make function returns may have incomplete information. The following code ensures that the format has a color space and chrominance siting information:

```swift
guard let cvImageFormat = vImageCVImageFormat.make(buffer: cvPixelBuffer) else {
    fatalError("Unable to derive Core Video pixel format from buffer.")
}

if cvImageFormat.colorSpace == nil {
    cvImageFormat.colorSpace = CGColorSpaceCreateDeviceRGB()
}

if cvImageFormat.chromaSiting == nil {
    cvImageFormat.chromaSiting = .center
}
```

The sample app specifies a three-channel, 8-bit-per-channel [vImage_CGImageFormat](vimage_cgimageformat.md) as the conversion destination format.

```swift
let cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8 * 3,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.none.rawValue))!
```

The [make(sourceFormat:destinationFormat:flags:)](vimageconverter/make%28sourceformat_destinationformat_flags_%29-8iupf.md) type method creates a [vImageConverterRef](vimageconverter.md) instance from the source and destination formats.

```swift
converter = try? vImageConverter.make(sourceFormat: cvImageFormat,
                                      destinationFormat: cgImageFormat)

if converter == nil {
    fatalError("Unable to create Core Video to Core Graphics converter.")
}
```

<a id="Initialize-the-destination-buffer"></a>

### Initialize the destination buffer

The destination pixel buffer contains the RGB image after conversion. The code defines it as a three-channel, 8-bit-per-channel [vImage.PixelBuffer](vimage/pixelbuffer.md) structure.

```swift
var destinationBuffer: vImage.PixelBuffer<vImage.Interleaved8x3>!
```

The first time that the app calls the conversion function, it runs the following code to initialize the destination pixel buffer with the same dimensions as the Core Video pixel buffer:

```swift
let size = vImage.Size(cvPixelBuffer: cvPixelBuffer)
destinationBuffer = vImage.PixelBuffer<vImage.Interleaved8x3>(size: size)
```

<a id="Initialize-the-source-buffers"></a>

### Initialize the source buffers

Although the sample code app knows that the Core Graphics image format requires only a single buffer at compile time, the camera’s active format defines the number of source buffers and their pixel formats at runtime. Therefore, the code defines the source buffers as an array of [vImage.DynamicPixelFormat](vimage/dynamicpixelformat.md) pixel buffers.

```swift
var sourceBuffers: [vImage.PixelBuffer<vImage.DynamicPixelFormat>]!
```

The [vImageConverterRef](vimageconverter.md) provides the [makeCVToCGPixelBuffers(referencing:)](vimageconverter/makecvtocgpixelbuffers%28referencing_%29.md) function that returns an array of pixel buffers. These pixel buffers reference the underlying memory of each plane of the Core Video pixel buffer.

```swift
sourceBuffers = try converter.makeCVToCGPixelBuffers(referencing: cvPixelBuffer)
```

<a id="Convert-the-Core-Video-buffer-contents-to-a-Core-Graphics-format-image"></a>

### Convert the Core Video buffer contents to a Core Graphics format image

The [convert(from:to:)](vimageconverter/convert%28from_to_%29-9s7p7.md) function accepts the source and destination pixel buffers and converts the Core Video pixel buffer’s contents to a Core Graphics image.

```swift
try converter.convert(from: sourceBuffers, to: [destinationBuffer])
```

<a id="Create-an-output-Core-Graphics-image"></a>

### Create an output Core Graphics image

Finally, the code calls [makeCGImage(cgImageFormat:)](vimage/pixelbuffer/makecgimage%28cgimageformat_%29.md) to create a Core Graphics image that it displays in the user interface.

```swift
let rgbImage = destinationBuffer.makeCGImage(cgImageFormat: cgImageFormat)!
```

## See Also

### Core Video Interoperation

- [Integrating vImage pixel buffers into a Core Image workflow](integrating-vimage-pixel-buffers-into-a-core-image-workflow.md): Share image data between Core Video pixel buffers and vImage buffers to integrate vImage operations into a Core Image workflow.
- [Improving the quality of quantized images with dithering](improving-the-quality-of-quantized-images-with-dithering.md): Apply dithering to simulate colors that are unavailable in reduced bit depths.
- [Core Video interoperability](core-video-interoperability.md): Pass image data between Core Video and vImage.
