> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer/init(width:height:bitsperpixel:)](https://developer.apple.com/documentation/accelerate/vimage_buffer/init(width:height:bitsperpixel:))

# init(width:height:bitsPerPixel:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a new buffer with the specified width, height, and bits per pixel.

## Declaration

```swift
init(width: Int, height: Int, bitsPerPixel: UInt32) throws
```

## Parameters

- `width`: The width of the buffer, in pixels.
- `height`: The height of the buffer, in pixels.
- `bitsPerPixel`: The number of bits in a single pixel.

## Mentioned In

- [Creating and Populating Buffers from Core Graphics Images](../creating-and-populating-buffers-from-core-graphics-images.md)

<a id="Discussion"></a>

## Discussion

This function allocates a buffer’s memory, but doesn’t initialize the memory.

## See Also

### Creating an empty vImage buffer

- [init(size:bitsPerPixel:)](init%28size_bitsperpixel_%29.md): Creates a new buffer with the specified size and bits per pixel.
- [init()](init%28%29.md): Creates an empty vImage buffer.
