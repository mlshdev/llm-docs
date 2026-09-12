> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorconversioninfocreatefromlist](https://developer.apple.com/documentation/coregraphics/cgcolorconversioninfocreatefromlist)

# CGColorConversionInfoCreateFromList

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a conversion between an arbitrary number of specified color spaces.

## Declaration

```objectivec
extern CGColorConversionInfoRefCGColorConversionInfoCreateFromList(CFDictionaryRef options, CGColorSpaceRef , CGColorConversionInfoTransformType , CGColorRenderingIntent , ...);
```

<a id="Parameters"></a>

### Parameters

- **options**: A dictionary containing options for color space conversion. See [CGColorConversionInfoRef](cgcolorconversioninfo.md).
- **colorSpace**: The first color space in the conversion.
- **transformType**: The role of the first color space to the conversion process. See [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md).
- **renderingIntent**: The rendering intent to use with the first color space. See [CGColorRenderingIntent](cgcolorrenderingintent.md).
- **…**: A `NULL`-terminated list of additional `colorSpace, transformType, renderingIntent` triplets.

<a id="Returns"></a>

### Returns

A color conversion object, or `nil` if no conversion between the specified color spaces is allowed.

<a id="Discussion"></a>

## Discussion

To call this function you must pass a triplet of color space, transform type, and rendering intent for each color space in the chain of conversions. For example, the following code is equivalent to calling [CGColorConversionInfoCreate](cgcolorconversioninfo/init%28src_dst_%29.md):

```objc
// convert from `src` to `dst` space with default intent
CGColorConversionInfoCreateFromList(NULL,
    src, kCGColorConversionTransformFromSpace, kCGRenderingIntentDefault,
    dst, kCGColorConversionTransformToSpace,   kCGRenderingIntentDefault,
    NULL);
```

To extend this example to convert through an intermediate color space, insert another space/type/intent triplet between the `src` and `dst` lines, using the [kCGColorConversionTransformApplySpace](cgcolorconversioninfotransformtype/transformapplyspace.md) type.

The listed color spaces must be calibrated color spaces (that is, not device-specific or indexed color spaces), and the list must contain at least two color spaces (that is, two triplets of space, type, and intent).

You can use a color conversion object to create [MPSImageConversion](../metalperformanceshaders/mpsimageconversion.md) filters that perform GPU-accelerated color space conversion.

## See Also

### Creating a Color Conversion

- [CGColorConversionInfoCreate](cgcolorconversioninfo/init%28src_dst_%29.md): Creates a conversion between two specified color spaces.
- [CGColorConversionInfoCreateWithOptions](cgcolorconversioninfo/init%28optionssrc_dst_options_%29.md)
- [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.
