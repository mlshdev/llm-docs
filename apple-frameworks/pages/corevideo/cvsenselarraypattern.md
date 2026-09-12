> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvsenselarraypattern](https://developer.apple.com/documentation/corevideo/cvsenselarraypattern)

# CVSenselArrayPattern

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Pattern indicating sensel arrangement.

## Declaration

```swift
enum CVSenselArrayPattern
```

## Topics

### Enumeration Cases

- [CVSenselArrayPattern.bayerBGGR](cvsenselarraypattern/bayerbggr.md): Top-left sensel of the frame is blue-filtered.
- [CVSenselArrayPattern.bayerGBRG](cvsenselarraypattern/bayergbrg.md): Top-left sensel of the frame is green-filtered, with the top row alternating between green and blue-filtered sensels.
- [CVSenselArrayPattern.bayerGRBG](cvsenselarraypattern/bayergrbg.md): Top-left sensel of the frame is green-filtered, with the top row alternating between green and red-filtered sensels.
- [CVSenselArrayPattern.bayerRGGB](cvsenselarraypattern/bayerrggb.md): Top-left sensel of the frame is red-filtered.

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CVPixelFormatDescription](cvpixelformatdescription.md): Defines a pixel format which can be used to create custom pixel buffer types.
- [CVFillExtendedPixelsCallBackData](cvfillextendedpixelscallbackdata.md): A structure for holding information that describes a custom extended pixel fill algorithm.
- [CVPixelFormatType](cvpixelformattype.md): Identifier for a pixel format type
- [CVSenselSitingOffsets](cvsenselsitingoffsets.md): Siting offsets, relative to pixel center, of individual sensels/components constituting each pixel.
