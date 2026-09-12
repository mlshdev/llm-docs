> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformattype](https://developer.apple.com/documentation/corevideo/cvpixelformattype)

# CVPixelFormatType

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Identifier for a pixel format type

## Declaration

```swift
struct CVPixelFormatType
```

## Topics

### Instance Properties

- [isCompressionAvailable](cvpixelformattype/iscompressionavailable.md): True if any of the planes of this format are compressed and hardware support is available.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CVPixelFormatDescription](cvpixelformatdescription.md): Defines a pixel format which can be used to create custom pixel buffer types.
- [CVFillExtendedPixelsCallBackData](cvfillextendedpixelscallbackdata.md): A structure for holding information that describes a custom extended pixel fill algorithm.
- [CVSenselSitingOffsets](cvsenselsitingoffsets.md): Siting offsets, relative to pixel center, of individual sensels/components constituting each pixel.
- [CVSenselArrayPattern](cvsenselarraypattern.md): Pattern indicating sensel arrangement.
