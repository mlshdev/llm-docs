> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/init(data:width:height:bytecountperrow:pixelformat:)-zwzz](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(data:width:height:bytecountperrow:pixelformat:)-zwzz)

# init(data:width:height:byteCountPerRow:pixelFormat:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a new buffer that references existing data.

## Declaration

```swift
init(data: UnsafeMutableRawPointer, width: Int, height: Int, byteCountPerRow: Int, pixelFormat: Format.Type)
```

## Parameters

- `data`: A pointer to the top-left pixel of the buffer.
- `width`: The width, in pixels, of the pixel buffer.
- `height`: The height, in pixels, of the pixel buffer.
- `byteCountPerRow`: The number of bytes in a pixel row.
- `pixelFormat`: The pixel format of the initialized buffer.

<a id="Discussion"></a>

## Discussion

You can use this function to simplify interoperation with other libraries and frameworks. For example, the following code shows a function that permutes the channels of a [CGImage](../../../coregraphics/cgimage.md) instance. The function creates a pixel buffer that uses the storage a [CGDataProvider](../../../coregraphics/cgdataprovider.md) instance’s [data](../../../coregraphics/cgdataprovider/data.md) property provides. The [data](../../../coregraphics/cgdataprovider/data.md) property is a copy of the image data, therefore, the code returns a new [CGImage](../../../coregraphics/cgimage.md) instance that it generates from the permuted pixel buffer.

```swift
static func permute(image: CGImage,
                    to permuteMap: (UInt8, UInt8, UInt8, UInt8)) -> CGImage? {
    
    let bitsPerPixel = image.bitsPerPixel
    let bitsPerComponent = image.bitsPerComponent

    guard bitsPerPixel == 32 && bitsPerComponent == 8,
          let format = vImage_CGImageFormat(cgImage: image),
          let pixelData = image.dataProvider?.data else {
        return nil
    }
    
    return withExtendedLifetime(pixelData) {
        let pixelBuffer = vImage.PixelBuffer(
            data: UnsafeMutableRawPointer(mutating: CFDataGetBytePtr($0)),
            width: image.width,
            height: image.height,
            byteCountPerRow: image.bytesPerRow,
            pixelFormat: vImage.Interleaved8x4.self)
        
        pixelBuffer.permuteChannels(to: permuteMap,
                                    destination: pixelBuffer)
        
        return pixelBuffer.makeCGImage(cgImageFormat: format)
    }
}
```

> **Important**

>  The pixel buffer is valid only for the lifetime of `data`.

## See Also

### Creating a pixel buffer from raw pixel data

- [init(pixelValues:size:pixelFormat:)](init%28pixelvalues_size_pixelformat_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Creates a new pixel buffer by copying the supplied collection of pixel values.
- [init(data:width:height:byteCountPerRow:pixelFormat:)](init%28data_width_height_bytecountperrow_pixelformat_%29-27czc.md): Conforms when `Format` conforms to `StaticPixelFormat`. Calculates the correct bytes per row and returns a new buffer that references existing data.
