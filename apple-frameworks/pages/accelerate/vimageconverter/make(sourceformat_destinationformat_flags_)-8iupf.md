> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter/make(sourceformat:destinationformat:flags:)-8iupf](https://developer.apple.com/documentation/accelerate/vimageconverter/make(sourceformat:destinationformat:flags:)-8iupf)

# make(sourceFormat:destinationFormat:flags:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.

## Declaration

```swift
static func make(sourceFormat: vImageCVImageFormat, destinationFormat: vImage_CGImageFormat, flags options: vImage.Options = .noFlags) throws -> vImageConverter
```

## See Also

### Related Documentation

- [vImageConverter_CreateForCVToCGImageFormat(\_:\_:\_:\_:\_:)](../vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.

### Type Methods

- [make(sourceFormat:destinationFormat:flags:)](make%28sourceformat_destinationformat_flags_%29-8tbym.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [make(sourceFormat:destinationFormat:flags:)](make%28sourceformat_destinationformat_flags_%29-fub5.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [make(sourceFormat:destinationFormat:colorConversionInfo:)](make%28sourceformat_destinationformat_colorconversioninfo_%29.md)
