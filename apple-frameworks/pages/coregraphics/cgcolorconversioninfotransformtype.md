> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorconversioninfotransformtype](https://developer.apple.com/documentation/coregraphics/cgcolorconversioninfotransformtype)

# CGColorConversionInfoTransformType (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants describing how a color conversion uses color spaces.

## Declaration

```swift
enum CGColorConversionInfoTransformType
```

## Topics

### Enumeration Cases

- [CGColorConversionInfoTransformType.transformApplySpace](cgcolorconversioninfotransformtype/transformapplyspace.md): Specifies a color conversion between one color profile and another.
- [CGColorConversionInfoTransformType.transformFromSpace](cgcolorconversioninfotransformtype/transformfromspace.md): Specifies a color conversion from a device color space to a color profile.
- [CGColorConversionInfoTransformType.transformToSpace](cgcolorconversioninfotransformtype/transformtospace.md): Specifies a color conversion from a color profile to a device color space.

### Initializers

- [init(rawValue:)](cgcolorconversioninfotransformtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Color Conversion

- [init(src:dst:)](cgcolorconversioninfo/init%28src_dst_%29.md): Creates a conversion between two specified color spaces.
- [init(optionsSrc:dst:options:)](cgcolorconversioninfo/init%28optionssrc_dst_options_%29.md)

# CGColorConversionInfoTransformType (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants describing how a color conversion uses color spaces.

## Declaration

```objectivec
enum CGColorConversionInfoTransformType : uint32_t;
```

## Topics

### Enumeration Cases

- [kCGColorConversionTransformApplySpace](cgcolorconversioninfotransformtype/transformapplyspace.md): Specifies a color conversion between one color profile and another.
- [kCGColorConversionTransformFromSpace](cgcolorconversioninfotransformtype/transformfromspace.md): Specifies a color conversion from a device color space to a color profile.
- [kCGColorConversionTransformToSpace](cgcolorconversioninfotransformtype/transformtospace.md): Specifies a color conversion from a color profile to a device color space.

## See Also

### Creating a Color Conversion

- [CGColorConversionInfoCreate](cgcolorconversioninfo/init%28src_dst_%29.md): Creates a conversion between two specified color spaces.
- [CGColorConversionInfoCreateWithOptions](cgcolorconversioninfo/init%28optionssrc_dst_options_%29.md)
- [CGColorConversionInfoCreateFromList](cgcolorconversioninfocreatefromlist.md): Creates a conversion between an arbitrary number of specified color spaces.
