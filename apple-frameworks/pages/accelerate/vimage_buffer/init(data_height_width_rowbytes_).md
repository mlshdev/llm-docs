> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer/init(data:height:width:rowbytes:)](https://developer.apple.com/documentation/accelerate/vimage_buffer/init(data:height:width:rowbytes:))

# init(data:height:width:rowBytes:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new buffer with the specified size that references existing data.

## Declaration

```swift
init(data: UnsafeMutableRawPointer!, height: vImagePixelCount, width: vImagePixelCount, rowBytes: Int)
```

## Parameters

- `data`: A pointer to the top-left pixel of the buffer.
- `height`: The height of the buffer, in pixels.
- `width`: The width of the buffer, in pixels.
- `rowBytes`: The number of bytes in a pixel row.

<a id="Discussion"></a>

## Discussion

If you provide your own buffer storage, call [preferredAlignmentAndRowBytes(width:height:bitsPerPixel:)](preferredalignmentandrowbytes%28width_height_bitsperpixel_%29.md) to get the row stride that ensures your buffer achieves the best performance.

```swift
let width = 10
let height = 5

let alignmentAndRowBytes = try vImage_Buffer.preferredAlignmentAndRowBytes(
    width: width,
    height: height,
    bitsPerPixel: 8)

// Prints "16".
print(alignmentAndRowBytes.rowBytes)

let data = UnsafeMutableRawPointer.allocate(
    byteCount: alignmentAndRowBytes.rowBytes * height,
    alignment: alignmentAndRowBytes.alignment)

let buffer = vImage_Buffer(data: data,
                           height: vImagePixelCount(height),
                           width: vImagePixelCount(width),
                           rowBytes: alignmentAndRowBytes.rowBytes)
```

## See Also

### Creating a buffer that references existing data

- [preferredAlignmentAndRowBytes(width:height:bitsPerPixel:)](preferredalignmentandrowbytes%28width_height_bitsperpixel_%29.md): Returns the preferred alignment and row bytes for a specified size and bits per pixel.
