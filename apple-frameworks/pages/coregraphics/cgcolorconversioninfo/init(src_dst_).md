> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorconversioninfo/init(src:dst:)](https://developer.apple.com/documentation/coregraphics/cgcolorconversioninfo/init(src:dst:))

# init(src:dst:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a conversion between two specified color spaces.

## Declaration

```swift
init?(src: CGColorSpace, dst: CGColorSpace)
```

## Parameters

- `src`: The source color space from which color values are to be converted.
- `dst`: The destination color space to which colors are to be converted.

<a id="return-value"></a>

## Return Value

A color conversion object, or `nil` if no conversion between the specified color spaces is allowed.

<a id="Discussion"></a>

## Discussion

The source and destination color spaces must be calibrated color spaces (that is, not device-specific or indexed color spaces).

You can use a color conversion object to create [MPSImageConversion](../../metalperformanceshaders/mpsimageconversion.md) filters that perform GPU-accelerated color space conversion.

## See Also

### Creating a Color Conversion

- [init(optionsSrc:dst:options:)](init%28optionssrc_dst_options_%29.md)
- [CGColorConversionInfoTransformType](../cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.

# CGColorConversionInfoCreate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a conversion between two specified color spaces.

## Declaration

```objectivec
extern CGColorConversionInfoRefCGColorConversionInfoCreate(CGColorSpaceRef src, CGColorSpaceRef dst);
```

## Parameters

- `src`: The source color space from which color values are to be converted.
- `dst`: The destination color space to which colors are to be converted.

<a id="return-value"></a>

## Return Value

A color conversion object, or `nil` if no conversion between the specified color spaces is allowed.

<a id="Discussion"></a>

## Discussion

The source and destination color spaces must be calibrated color spaces (that is, not device-specific or indexed color spaces).

You can use a color conversion object to create [MPSImageConversion](../../metalperformanceshaders/mpsimageconversion.md) filters that perform GPU-accelerated color space conversion.

## See Also

### Creating a Color Conversion

- [CGColorConversionInfoCreateWithOptions](init%28optionssrc_dst_options_%29.md)
- [CGColorConversionInfoCreateFromList](../cgcolorconversioninfocreatefromlist.md): Creates a conversion between an arbitrary number of specified color spaces.
- [CGColorConversionInfoTransformType](../cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.
