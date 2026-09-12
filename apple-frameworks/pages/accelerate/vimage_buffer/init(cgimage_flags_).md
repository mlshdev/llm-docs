> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer/init(cgimage:flags:)](https://developer.apple.com/documentation/accelerate/vimage_buffer/init(cgimage:flags:))

# init(cgImage:flags:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a new buffer with the contents of a Core Graphics image.

## Declaration

```swift
init(cgImage: CGImage, flags options: vImage.Options = .noFlags) throws
```

## Parameters

- `cgImage`: The source image.
- `options`: The options to use when performing the operation.

<a id="Discussion"></a>

## Discussion

This function initializes a vImage buffer using the format of the Core Graphics image.

## See Also

### Consuming and producing Core Graphics images

- [init(cgImage:format:flags:)](init%28cgimage_format_flags_%29.md): Creates a new buffer with the contents of a Core Graphics image using the supplied image format.
- [createCGImage(format:flags:)](createcgimage%28format_flags_%29.md): Creates a Core Graphics image from the vImage buffer.
