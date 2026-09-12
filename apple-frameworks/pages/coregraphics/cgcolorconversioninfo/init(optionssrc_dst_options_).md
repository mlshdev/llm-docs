> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorconversioninfo/init(optionssrc:dst:options:)](https://developer.apple.com/documentation/coregraphics/cgcolorconversioninfo/init(optionssrc:dst:options:))

# init(optionsSrc:dst:options:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.14.6+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
init?(optionsSrc src: CGColorSpace, dst: CGColorSpace, options: CFDictionary?)
```

## See Also

### Creating a Color Conversion

- [init(src:dst:)](init%28src_dst_%29.md): Creates a conversion between two specified color spaces.
- [CGColorConversionInfoTransformType](../cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.

# CGColorConversionInfoCreateWithOptions (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.14.6+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
extern CGColorConversionInfoRefCGColorConversionInfoCreateWithOptions(CGColorSpaceRef src, CGColorSpaceRef dst, CFDictionaryRef options);
```

## See Also

### Creating a Color Conversion

- [CGColorConversionInfoCreate](init%28src_dst_%29.md): Creates a conversion between two specified color spaces.
- [CGColorConversionInfoCreateFromList](../cgcolorconversioninfocreatefromlist.md): Creates a conversion between an arbitrary number of specified color spaces.
- [CGColorConversionInfoTransformType](../cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.
