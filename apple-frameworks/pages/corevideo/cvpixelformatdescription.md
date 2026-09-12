> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformatdescription](https://developer.apple.com/documentation/corevideo/cvpixelformatdescription)

# CVPixelFormatDescription

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Defines a pixel format which can be used to create custom pixel buffer types.

## Declaration

```swift
struct CVPixelFormatDescription
```

## Topics

### Classes

- [CVPixelFormatDescription.Registry](cvpixelformatdescription/registry.md): Registry of all pixel formats.

### Structures

- [CVPixelFormatDescription.Compatibility](cvpixelformatdescription/compatibility.md): A set of options that control compatibility between different pixel formats.
- [CVPixelFormatDescription.Components](cvpixelformatdescription/components-swift.struct.md): Defines the color components represented by pixels in the buffer.
- [CVPixelFormatDescription.Dimensions](cvpixelformatdescription/dimensions.md): Holds integer horizontal and vertical dimension quantities
- [CVPixelFormatDescription.PixelLayout](cvpixelformatdescription/pixellayout.md): Defines pixel layout of a buffer plane or the entire buffer if the format is non-planar.

### Initializers

- [init(pixelFormatType:name:components:componentRange:planeConfiguration:)](cvpixelformatdescription/init%28pixelformattype_name_components_componentrange_planeconfiguration_%29.md)

### Instance Properties

- [componentRange](cvpixelformatdescription/componentrange-swift.property.md): Color gamut of format
- [components](cvpixelformatdescription/components-swift.property.md): Color components carried by the pixel buffer
- [name](cvpixelformatdescription/name.md): The canonical name for the format. This should be the same as the codec name you’d use in QT.
- [pixelFormatType](cvpixelformatdescription/pixelformattype.md): Pixel format to be use for associating pixel buffers with this format.
- [planeConfiguration](cvpixelformatdescription/planeconfiguration-swift.property.md): Defines planar or non-planar configuration

### Enumerations

- [CVPixelFormatDescription.ComponentRange](cvpixelformatdescription/componentrange-swift.enum.md): Range of colors supported by pixel components.
- [CVPixelFormatDescription.PlaneConfiguration](cvpixelformatdescription/planeconfiguration-swift.enum.md): Defines how color components in the buffer are arranged.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CVFillExtendedPixelsCallBackData](cvfillextendedpixelscallbackdata.md): A structure for holding information that describes a custom extended pixel fill algorithm.
- [CVPixelFormatType](cvpixelformattype.md): Identifier for a pixel format type
- [CVSenselSitingOffsets](cvsenselsitingoffsets.md): Siting offsets, relative to pixel center, of individual sensels/components constituting each pixel.
- [CVSenselArrayPattern](cvsenselarraypattern.md): Pattern indicating sensel arrangement.
