> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer/preferredalignmentandrowbytes(width:height:bitsperpixel:)](https://developer.apple.com/documentation/accelerate/vimage_buffer/preferredalignmentandrowbytes(width:height:bitsperpixel:))

# preferredAlignmentAndRowBytes(width:height:bitsPerPixel:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the preferred alignment and row bytes for a specified size and bits per pixel.

## Declaration

```swift
static func preferredAlignmentAndRowBytes(width: Int, height: Int, bitsPerPixel: UInt32) throws -> (alignment: Int, rowBytes: Int)
```

## Parameters

- `width`: The width of the image, in pixels.
- `height`: The height of the image, in pixels.
- `bitsPerPixel`: The number of bits in a single pixel.

<a id="return-value"></a>

## Return Value

A tuple that contains the alignment and row bytes.

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

- [init(data:height:width:rowBytes:)](init%28data_height_width_rowbytes_%29.md): Creates a new buffer with the specified size that references existing data.
