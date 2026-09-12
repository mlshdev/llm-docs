> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/init(pixelvalues:size:pixelformat:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(pixelvalues:size:pixelformat:))

# init(pixelValues:size:pixelFormat:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a new pixel buffer by copying the supplied collection of pixel values.

## Declaration

```swift
init<U>(pixelValues: U, size: vImage.Size, pixelFormat: Format.Type = Format.self) where U : AccelerateBuffer, Format.ComponentType == U.Element
```

## Parameters

- `pixelValues`: The source pixel values. `pixelValues` must contain `size.width * size.height * channelCount` elements.
- `size`: The size of the new buffer.
- `pixelFormat`: The pixel format of the initialized buffer.

<a id="Discussion"></a>

## Discussion

## See Also

### Creating a pixel buffer from raw pixel data

- [init(data:width:height:byteCountPerRow:pixelFormat:)](init%28data_width_height_bytecountperrow_pixelformat_%29-zwzz.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Returns a new buffer that references existing data.
- [init(data:width:height:byteCountPerRow:pixelFormat:)](init%28data_width_height_bytecountperrow_pixelformat_%29-27czc.md): Conforms when `Format` conforms to `StaticPixelFormat`. Calculates the correct bytes per row and returns a new buffer that references existing data.
