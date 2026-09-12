> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/init(width:height:pixelformat:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(width:height:pixelformat:))

# init(width:height:pixelFormat:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a new pixel buffer with a width and height that you specify.

## Declaration

```swift
init(width: Int, height: Int, pixelFormat: Format.Type = Format.self)
```

## Parameters

- `width`: The width of the buffer.
- `height`: The height of the buffer.
- `pixelFormat`: The pixel format of the buffer.

<a id="Discussion"></a>

## Discussion

This initializer allocates but doesn’t initialize the pixel buffer’s memory. That is, the operation doesn’t guarantee that all pixel values are zero.

## See Also

### Creating a pixel buffer

- [init(size:pixelFormat:)](init%28size_pixelformat_%29-12gl9.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat`. Returns a new multiplane pixel buffer with a size that you specify.
- [init(size:pixelFormat:)](init%28size_pixelformat_%29-96ocu.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns a new pixel buffer with a size that you specify.
- [vImage.Size](../size.md): A structure that contains width and height values.
