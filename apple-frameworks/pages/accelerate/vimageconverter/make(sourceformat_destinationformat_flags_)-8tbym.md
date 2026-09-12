> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter/make(sourceformat:destinationformat:flags:)-8tbym](https://developer.apple.com/documentation/accelerate/vimageconverter/make(sourceformat:destinationformat:flags:)-8tbym)

# make(sourceFormat:destinationFormat:flags:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a vImage converter that converts from one vImage Core Graphics image format to another.

## Declaration

```swift
static func make(sourceFormat: vImage_CGImageFormat, destinationFormat: vImage_CGImageFormat, flags options: vImage.Options = .noFlags) throws -> vImageConverter
```

## Mentioned In

- [Building a basic image conversion workflow](../building-a-basic-image-conversion-workflow.md)

## See Also

### Related Documentation

- [vImageConverter_CreateWithCGImageFormat(\_:\_:\_:\_:\_:)](../vimageconverter_createwithcgimageformat%28__________%29.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.

### Type Methods

- [make(sourceFormat:destinationFormat:flags:)](make%28sourceformat_destinationformat_flags_%29-8iupf.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [make(sourceFormat:destinationFormat:flags:)](make%28sourceformat_destinationformat_flags_%29-fub5.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [make(sourceFormat:destinationFormat:colorConversionInfo:)](make%28sourceformat_destinationformat_colorconversioninfo_%29.md)
