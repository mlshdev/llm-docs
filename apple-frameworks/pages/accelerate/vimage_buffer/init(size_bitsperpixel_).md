> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer/init(size:bitsperpixel:)](https://developer.apple.com/documentation/accelerate/vimage_buffer/init(size:bitsperpixel:))

# init(size:bitsPerPixel:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a new buffer with the specified size and bits per pixel.

## Declaration

```swift
init(size: CGSize, bitsPerPixel: UInt32) throws
```

## Parameters

- `size`: The size of the buffer, in pixels.
- `bitsPerPixel`: The number of bits in a single pixel.

<a id="Discussion"></a>

## Discussion

This function allocates a buffer’s memory, but doesn’t initialize the memory.

## See Also

### Creating an empty vImage buffer

- [init(width:height:bitsPerPixel:)](init%28width_height_bitsperpixel_%29.md): Creates a new buffer with the specified width, height, and bits per pixel.
- [init()](init%28%29.md): Creates an empty vImage buffer.
