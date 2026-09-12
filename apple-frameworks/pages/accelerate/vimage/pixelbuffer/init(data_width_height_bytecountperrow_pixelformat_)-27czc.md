> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/init(data:width:height:bytecountperrow:pixelformat:)-27czc](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(data:width:height:bytecountperrow:pixelformat:)-27czc)

# init(data:width:height:byteCountPerRow:pixelFormat:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Calculates the correct bytes per row and returns a new buffer that references existing data.

## Declaration

```swift
init(data: UnsafeMutableRawPointer, width: Int, height: Int, byteCountPerRow: Int? = nil, pixelFormat: Format.Type = Format.self)
```

## Parameters

- `data`: A pointer to the top-left pixel of the buffer.
- `width`: The width, in pixels, of the pixel buffer.
- `height`: The height, in pixels, of the pixel buffer.
- `byteCountPerRow`: The number of bytes in a pixel row.
- `pixelFormat`: The pixel format of the initialized buffer.

<a id="Discussion"></a>

## Discussion

Pass `nil` to `byteCountPerRow` to have the function calculate the bytes per row as `width * MemoryLayout<T.ComponentType>.stride * T.channelCount`.

For example, the following code creates a 32-bit planar pixel buffer:

```swift
 let data = UnsafeMutableBufferPointer<Float>.allocate(capacity: 10)
 _ = data.initialize(from: [0, 1, 2, 3, 4,
                            5, 6, 7, 8, 9] as [Float])
 defer {
     data.deallocate()
 }

 let src = vImage.PixelBuffer(data: data.baseAddress!,
                              width: 5,
                              height: 2,
                              byteCountPerRow: nil,
                              pixelFormat: vImage.PlanarF.self)

 // Prints "[0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0]"
 print(src.array)
```

> **Important**

>  The pixel buffer is valid only for the lifetime of `data`.

## See Also

### Creating a pixel buffer from raw pixel data

- [init(pixelValues:size:pixelFormat:)](init%28pixelvalues_size_pixelformat_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Creates a new pixel buffer by copying the supplied collection of pixel values.
- [init(data:width:height:byteCountPerRow:pixelFormat:)](init%28data_width_height_bytecountperrow_pixelformat_%29-zwzz.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Returns a new buffer that references existing data.
