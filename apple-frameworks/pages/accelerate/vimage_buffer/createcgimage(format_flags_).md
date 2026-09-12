> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer/createcgimage(format:flags:)](https://developer.apple.com/documentation/accelerate/vimage_buffer/createcgimage(format:flags:))

# createCGImage(format:flags:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a Core Graphics image from the vImage buffer.

## Declaration

```swift
func createCGImage(format: vImage_CGImageFormat, flags options: vImage.Options = .noFlags) throws -> CGImage
```

## Parameters

- `format`: The desired format.
- `options`: The options to use when performing the operation.

<a id="return-value"></a>

## Return Value

A Core Graphics image that represents the contents of the vImage buffer.

## Mentioned In

- [Creating a Core Graphics Image from a vImage Buffer](../creating-a-core-graphics-image-from-a-vimage-buffer.md)

## See Also

### Consuming and producing Core Graphics images

- [init(cgImage:flags:)](init%28cgimage_flags_%29.md): Creates a new buffer with the contents of a Core Graphics image.
- [init(cgImage:format:flags:)](init%28cgimage_format_flags_%29.md): Creates a new buffer with the contents of a Core Graphics image using the supplied image format.
