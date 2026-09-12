> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/applying-flood-fills-to-an-image](https://developer.apple.com/documentation/accelerate/applying-flood-fills-to-an-image)

# Applying flood fills to an image (Swift)

**Framework:** Accelerate  
**Kind:** Article

Fill consistently colored connected parts of an image with a new color.

<a id="overview"></a>

## Overview

The vImage library provides a set of functions that allow you to flood fill areas of an image with a new color. The following image demonstrates how the flood-fill operation can colorize a hand-drawn line illustration:

![A flow diagram that depicts colorization of a hand-drawn illustration. On the left is a grayscale line drawing of a mountainous landscape, and on the right is the same drawing with each segment filled in with a solid color.](https://developer.apple.com/images/com.apple.accelerate/media-4098131@2x.png)

The flood-fill functions fill areas with identical pixel values. The process of applying lossy compression, such as when generating JPG images, may subtly change pixel values. Use losslessly compressed or uncompressed images, such as PNGs, to achieve the best flood-fill results.

<a id="Create-the-planar-vImage-buffer-that-represents-the-source-image"></a>

### Create the planar vImage buffer that represents the source image

Create a 32-bit-per-pixel, planar image to store the image of the line drawing.

```swift
var cgImageFormatPlanarF = vImage_CGImageFormat(
    bitsPerComponent: 32,
    bitsPerPixel: 32,
    colorSpace: CGColorSpaceCreateDeviceGray(),
    bitmapInfo: CGBitmapInfo(
        rawValue: kCGBitmapByteOrder32Host.rawValue |
        CGBitmapInfo.floatComponents.rawValue |
        CGImageAlphaInfo.none.rawValue),
    renderingIntent: .defaultIntent)!

let image: CGImage = [ ... ]

let bufferPlanarF = try! vImage.PixelBuffer<vImage.PlanarF>(
    cgImage: image,
    cgImageFormat: &cgImageFormatPlanarF)

```

Call the [colorThreshold(\_:destination:)](vimage/pixelbuffer/colorthreshold%28__destination_%29.md) function to binarize the image, that is, reduce it to only black and white colors with no midtones. Pass a threshold value of `0.5` to convert all pixel values below `0.5` to `0.0`, and other pixel values to `1.0`.

```swift
bufferPlanarF.colorThreshold(
    0.5,
    destination: bufferPlanarF)
```

<a id="Create-the-interleaved-vImage-buffer-that-represents-the-destination-image"></a>

### Create the interleaved vImage buffer that represents the destination image

Use the 32-bit planar buffer to create a four-channel, 8-bit-per-pixel buffer.

```swift
let bufferRGB8 = vImage.PixelBuffer<vImage.Interleaved8x4>(
    planarBuffers: [bufferPlanarF, bufferPlanarF, bufferPlanarF, bufferPlanarF])
```

<a id="Apply-the-flood-fill-operation"></a>

### Apply the flood-fill operation

The source image is 1024 pixels wide and 1585 pixels high. The following image shows the coordinates of the six seed pixels:

![A diagram of a grayscale line drawing of a mountainous landscape. An indicator at the top shows the width as 1024, and an indicator on the left shows the height as 1585. On the right are six callouts that are stacked vertically. Each callout specifies the x and y positions of the seed pixel and the corresponding red, green, and blue values for the color fill.](https://developer.apple.com/images/com.apple.accelerate/media-4110108@2x.png)

Call [vImageFloodFill_ARGB8888(\_:\_:\_:\_:\_:\_:\_:)](vimagefloodfill_argb8888%28______________%29.md) to apply different colors to different parts of the line drawing. Note that the vImage flood-fill functions only work in place. That is, a single vImage buffer is the source and the destination for the flood-fill operation.

```swift
bufferRGB8.withUnsafePointerToVImageBuffer { src in
    let alpha = UInt8(255)
    
    var newARGB: [UInt8] = [alpha, 68, 41, 11]
    let seedX: vImagePixelCount = 600
    var seedY: vImagePixelCount = 10
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)
    
    newARGB = [alpha, 160, 198, 212]
    seedY = 200
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)

    newARGB = [alpha, 147, 163, 169]
    seedY = 450
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)

    newARGB = [alpha, 90, 101, 103]
    seedY = 700
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)

    newARGB = [alpha, 54, 62, 65]
    seedY = 900
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)

    newARGB = [alpha, 51, 81, 28]
    seedY = 1300
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)
}

```

<a id="Create-a-Core-Graphics-image-of-the-result"></a>

### Create a Core Graphics image of the result

Create a [vImage_CGImageFormat](vimage_cgimageformat.md) structure that describes the four-channel, 8-bit-per-channel output image.

```swift
let cgImageFormatRGB8 = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8 * 4,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(
        rawValue: CGImageAlphaInfo.noneSkipFirst.rawValue),
    renderingIntent: .defaultIntent)!

```

Finally, call [makeCGImage(cgImageFormat:)](vimage/pixelbuffer/makecgimage%28cgimageformat_%29.md) to generate the image.

```swift
let result = bufferRGB8.makeCGImage(cgImageFormat: cgImageFormatRGB8)
```

## See Also

### Flood-filling buffers

- [vImageFloodFill_Planar8(\_:\_:\_:\_:\_:\_:\_:)](vimagefloodfill_planar8%28______________%29.md): Applies a flood-fill operation to an 8-bit planar image.
- [vImageFloodFill_Planar16U(\_:\_:\_:\_:\_:\_:\_:)](vimagefloodfill_planar16u%28______________%29.md): Applies a flood fill-operation to an unsigned 16-bit planar image.
- [vImageFloodFill_ARGB8888(\_:\_:\_:\_:\_:\_:\_:)](vimagefloodfill_argb8888%28______________%29.md): Applies a flood-fill operation to an 8-bit-per-channel, four-channel interleaved image.
- [vImageFloodFill_ARGB16U(\_:\_:\_:\_:\_:\_:\_:)](vimagefloodfill_argb16u%28______________%29.md): Applies a flood-fill operation to an unsigned 16-bit-per-channel, four-channel interleaved image.

# Applying flood fills to an image (Objective-C)

**Framework:** Accelerate  
**Kind:** Article

Fill consistently colored connected parts of an image with a new color.

<a id="overview"></a>

## Overview

The vImage library provides a set of functions that allow you to flood fill areas of an image with a new color. The following image demonstrates how the flood-fill operation can colorize a hand-drawn line illustration:

![A flow diagram that depicts colorization of a hand-drawn illustration. On the left is a grayscale line drawing of a mountainous landscape, and on the right is the same drawing with each segment filled in with a solid color.](https://developer.apple.com/images/com.apple.accelerate/media-4098131@2x.png)

The flood-fill functions fill areas with identical pixel values. The process of applying lossy compression, such as when generating JPG images, may subtly change pixel values. Use losslessly compressed or uncompressed images, such as PNGs, to achieve the best flood-fill results.

<a id="Create-the-planar-vImage-buffer-that-represents-the-source-image"></a>

### Create the planar vImage buffer that represents the source image

Create a 32-bit-per-pixel, planar image to store the image of the line drawing.

```swift
var cgImageFormatPlanarF = vImage_CGImageFormat(
    bitsPerComponent: 32,
    bitsPerPixel: 32,
    colorSpace: CGColorSpaceCreateDeviceGray(),
    bitmapInfo: CGBitmapInfo(
        rawValue: kCGBitmapByteOrder32Host.rawValue |
        CGBitmapInfo.floatComponents.rawValue |
        CGImageAlphaInfo.none.rawValue),
    renderingIntent: .defaultIntent)!

let image: CGImage = [ ... ]

let bufferPlanarF = try! vImage.PixelBuffer<vImage.PlanarF>(
    cgImage: image,
    cgImageFormat: &cgImageFormatPlanarF)

```

Call the [colorThreshold(\_:destination:)](vimage/pixelbuffer/colorthreshold%28__destination_%29.md) function to binarize the image, that is, reduce it to only black and white colors with no midtones. Pass a threshold value of `0.5` to convert all pixel values below `0.5` to `0.0`, and other pixel values to `1.0`.

```swift
bufferPlanarF.colorThreshold(
    0.5,
    destination: bufferPlanarF)
```

<a id="Create-the-interleaved-vImage-buffer-that-represents-the-destination-image"></a>

### Create the interleaved vImage buffer that represents the destination image

Use the 32-bit planar buffer to create a four-channel, 8-bit-per-pixel buffer.

```swift
let bufferRGB8 = vImage.PixelBuffer<vImage.Interleaved8x4>(
    planarBuffers: [bufferPlanarF, bufferPlanarF, bufferPlanarF, bufferPlanarF])
```

<a id="Apply-the-flood-fill-operation"></a>

### Apply the flood-fill operation

The source image is 1024 pixels wide and 1585 pixels high. The following image shows the coordinates of the six seed pixels:

![A diagram of a grayscale line drawing of a mountainous landscape. An indicator at the top shows the width as 1024, and an indicator on the left shows the height as 1585. On the right are six callouts that are stacked vertically. Each callout specifies the x and y positions of the seed pixel and the corresponding red, green, and blue values for the color fill.](https://developer.apple.com/images/com.apple.accelerate/media-4110108@2x.png)

Call [vImageFloodFill_ARGB8888](vimagefloodfill_argb8888%28______________%29.md) to apply different colors to different parts of the line drawing. Note that the vImage flood-fill functions only work in place. That is, a single vImage buffer is the source and the destination for the flood-fill operation.

```swift
bufferRGB8.withUnsafePointerToVImageBuffer { src in
    let alpha = UInt8(255)
    
    var newARGB: [UInt8] = [alpha, 68, 41, 11]
    let seedX: vImagePixelCount = 600
    var seedY: vImagePixelCount = 10
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)
    
    newARGB = [alpha, 160, 198, 212]
    seedY = 200
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)

    newARGB = [alpha, 147, 163, 169]
    seedY = 450
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)

    newARGB = [alpha, 90, 101, 103]
    seedY = 700
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)

    newARGB = [alpha, 54, 62, 65]
    seedY = 900
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)

    newARGB = [alpha, 51, 81, 28]
    seedY = 1300
    vImageFloodFill_ARGB8888(src, nil,
                             seedX, seedY,
                             &newARGB, 8, 0)
}

```

<a id="Create-a-Core-Graphics-image-of-the-result"></a>

### Create a Core Graphics image of the result

Create a [vImage_CGImageFormat](vimage_cgimageformat.md) structure that describes the four-channel, 8-bit-per-channel output image.

```swift
let cgImageFormatRGB8 = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8 * 4,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(
        rawValue: CGImageAlphaInfo.noneSkipFirst.rawValue),
    renderingIntent: .defaultIntent)!

```

Finally, call [makeCGImage(cgImageFormat:)](vimage/pixelbuffer/makecgimage%28cgimageformat_%29.md) to generate the image.

```swift
let result = bufferRGB8.makeCGImage(cgImageFormat: cgImageFormatRGB8)
```

## See Also

### Flood-filling buffers

- [vImageFloodFill_Planar8](vimagefloodfill_planar8%28______________%29.md): Applies a flood-fill operation to an 8-bit planar image.
- [vImageFloodFill_Planar16U](vimagefloodfill_planar16u%28______________%29.md): Applies a flood fill-operation to an unsigned 16-bit planar image.
- [vImageFloodFill_ARGB8888](vimagefloodfill_argb8888%28______________%29.md): Applies a flood-fill operation to an 8-bit-per-channel, four-channel interleaved image.
- [vImageFloodFill_ARGB16U](vimagefloodfill_argb16u%28______________%29.md): Applies a flood-fill operation to an unsigned 16-bit-per-channel, four-channel interleaved image.
