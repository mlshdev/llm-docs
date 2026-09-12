> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvsenselsitingoffsets](https://developer.apple.com/documentation/corevideo/cvsenselsitingoffsets)

# CVSenselSitingOffsets

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Siting offsets, relative to pixel center, of individual sensels/components constituting each pixel.

## Declaration

```swift
struct CVSenselSitingOffsets
```

## Topics

### Structures

- [CVSenselSitingOffsets.Offset](cvsenselsitingoffsets/offset.md): Siting offset of a component, relative to pixel center.

### Initializers

- [init(red:green:blue:alpha:)](cvsenselsitingoffsets/init%28red_green_blue_alpha_%29.md)

### Instance Properties

- [alpha](cvsenselsitingoffsets/alpha.md)
- [blue](cvsenselsitingoffsets/blue.md)
- [green](cvsenselsitingoffsets/green.md)
- [red](cvsenselsitingoffsets/red.md)

### Type Properties

- [zero](cvsenselsitingoffsets/zero.md)

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](cvattachmentvaluerepresentable.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CVPixelFormatDescription](cvpixelformatdescription.md): Defines a pixel format which can be used to create custom pixel buffer types.
- [CVFillExtendedPixelsCallBackData](cvfillextendedpixelscallbackdata.md): A structure for holding information that describes a custom extended pixel fill algorithm.
- [CVPixelFormatType](cvpixelformattype.md): Identifier for a pixel format type
- [CVSenselArrayPattern](cvsenselarraypattern.md): Pattern indicating sensel arrangement.
