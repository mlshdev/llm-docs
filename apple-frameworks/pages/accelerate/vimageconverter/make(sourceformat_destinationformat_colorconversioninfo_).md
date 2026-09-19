> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vimageconverter/make(sourceformat:destinationformat:colorconversioninfo:)

# make(sourceFormat:destinationFormat:colorConversionInfo:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func make(sourceFormat: vImage_CGImageFormat, destinationFormat: vImage_CGImageFormat, colorConversionInfo: CGColorConversionInfo) throws -> vImageConverter
```

## See Also

### Type Methods

- [make(sourceFormat:destinationFormat:flags:)](make%28sourceformat_destinationformat_flags_%29-8iupf.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [make(sourceFormat:destinationFormat:flags:)](make%28sourceformat_destinationformat_flags_%29-8tbym.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [make(sourceFormat:destinationFormat:flags:)](make%28sourceformat_destinationformat_flags_%29-fub5.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
