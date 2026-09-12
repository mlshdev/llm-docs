> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace/iccdata](https://developer.apple.com/documentation/coregraphics/cgcolorspace/iccdata)

# iccData (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.13) · tvOS  (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Returns a copy of the ICC profile of the provided color space.

> Use [copyICCData()](copyiccdata%28%29.md) instead.

## Declaration

```swift
var iccData: CFData? { get }
```

## See Also

### Examining a Color Space

- [baseColorSpace](basecolorspace.md): Returns the base color space of a pattern or indexed color space.
- [numberOfComponents](numberofcomponents.md): Returns the number of color components in a color space.
- [model](model.md): Returns the color space model of the provided color space.
- [CGColorSpaceModel](../cgcolorspacemodel.md): Models for color spaces.
- [colorTable](colortable.md): The entries in the color table of an indexed color space.
- [copyICCData()](copyiccdata%28%29.md): Returns a copy of the ICC profile data of the provided color space.
- [copyPropertyList()](copypropertylist%28%29.md): Returns a copy of the color space’s properties.
- [name](name.md): Returns the name used to create the specified color space.
- [supportsOutput](supportsoutput.md): Returns a Boolean indicating whether the color space can be used as a destination color space.
- [isWideGamutRGB](iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.

# CGColorSpaceCopyICCProfile (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.13) · tvOS  (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Returns a copy of the ICC profile of the provided color space.

> Use [CGColorSpaceCopyICCData](copyiccdata%28%29.md) instead.

## Declaration

```objectivec
extern CFDataRefCGColorSpaceCopyICCProfile(CGColorSpaceRef space);
```

## Parameters

- `space`: The color space whose ICC profile you want to obtain.

<a id="return-value"></a>

## Return Value

The ICC profile or `NULL` if the color space does not have an ICC profile.

## See Also

### Examining a Color Space

- [CGColorSpaceGetBaseColorSpace](basecolorspace.md): Returns the base color space of a pattern or indexed color space.
- [CGColorSpaceGetNumberOfComponents](numberofcomponents.md): Returns the number of color components in a color space.
- [CGColorSpaceGetModel](model.md): Returns the color space model of the provided color space.
- [CGColorSpaceModel](../cgcolorspacemodel.md): Models for color spaces.
- [CGColorSpaceCopyICCData](copyiccdata%28%29.md): Returns a copy of the ICC profile data of the provided color space.
- [CGColorSpaceCopyPropertyList](copypropertylist%28%29.md): Returns a copy of the color space’s properties.
- [CGColorSpaceCopyName](name.md): Returns the name used to create the specified color space.
- [CGColorSpaceSupportsOutput](supportsoutput.md): Returns a Boolean indicating whether the color space can be used as a destination color space.
- [CGColorSpaceIsWideGamutRGB](iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.
- [CGColorSpaceGetColorTable](../cgcolorspacegetcolortable.md): Copies the entries in the color table of an indexed color space.
- [CGColorSpaceGetColorTableCount](../cgcolorspacegetcolortablecount.md): Returns the number of entries in the color table of an indexed color space.
