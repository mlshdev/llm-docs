> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace/copypropertylist()](https://developer.apple.com/documentation/coregraphics/cgcolorspace/copypropertylist())

# copyPropertyList() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a copy of the color space’s properties.

## Declaration

```swift
func copyPropertyList() -> CFPropertyList?
```

## See Also

### Related Documentation

- [init(propertyListPlist:)](init%28propertylistplist_%29.md): Creates a color space from a property list.

### Examining a Color Space

- [baseColorSpace](basecolorspace.md): Returns the base color space of a pattern or indexed color space.
- [numberOfComponents](numberofcomponents.md): Returns the number of color components in a color space.
- [model](model.md): Returns the color space model of the provided color space.
- [CGColorSpaceModel](../cgcolorspacemodel.md): Models for color spaces.
- [colorTable](colortable.md): The entries in the color table of an indexed color space.
- [copyICCData()](copyiccdata%28%29.md): Returns a copy of the ICC profile data of the provided color space.
- [iccData](iccdata.md): Deprecated. Returns a copy of the ICC profile of the provided color space.
- [name](name.md): Returns the name used to create the specified color space.
- [supportsOutput](supportsoutput.md): Returns a Boolean indicating whether the color space can be used as a destination color space.
- [isWideGamutRGB](iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.

# CGColorSpaceCopyPropertyList (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a copy of the color space’s properties.

## Declaration

```objectivec
extern CFPropertyListRefCGColorSpaceCopyPropertyList(CGColorSpaceRef space);
```

## See Also

### Related Documentation

- [CGColorSpaceCreateWithPropertyList](init%28propertylistplist_%29.md): Creates a color space from a property list.

### Examining a Color Space

- [CGColorSpaceGetBaseColorSpace](basecolorspace.md): Returns the base color space of a pattern or indexed color space.
- [CGColorSpaceGetNumberOfComponents](numberofcomponents.md): Returns the number of color components in a color space.
- [CGColorSpaceGetModel](model.md): Returns the color space model of the provided color space.
- [CGColorSpaceModel](../cgcolorspacemodel.md): Models for color spaces.
- [CGColorSpaceCopyICCData](copyiccdata%28%29.md): Returns a copy of the ICC profile data of the provided color space.
- [CGColorSpaceCopyICCProfile](iccdata.md): Deprecated. Returns a copy of the ICC profile of the provided color space.
- [CGColorSpaceCopyName](name.md): Returns the name used to create the specified color space.
- [CGColorSpaceSupportsOutput](supportsoutput.md): Returns a Boolean indicating whether the color space can be used as a destination color space.
- [CGColorSpaceIsWideGamutRGB](iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.
- [CGColorSpaceGetColorTable](../cgcolorspacegetcolortable.md): Copies the entries in the color table of an indexed color space.
- [CGColorSpaceGetColorTableCount](../cgcolorspacegetcolortablecount.md): Returns the number of entries in the color table of an indexed color space.
