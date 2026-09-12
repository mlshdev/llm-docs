> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspacegetcolortable](https://developer.apple.com/documentation/coregraphics/cgcolorspacegetcolortable)

# CGColorSpaceGetColorTable

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Copies the entries in the color table of an indexed color space.

## Declaration

```objectivec
extern void CGColorSpaceGetColorTable(CGColorSpaceRef space, uint8_t *table);
```

## Parameters

- `space`: A color space object for an indexed color space.
- `table`: The array pointed to by table should be at least as large as the number of entries in the color table. On output, the array contains the table data  in the same format as that passed to [CGColorSpaceCreateIndexed](cgcolorspace/init%28indexedbasespace_last_colortable_%29.md).

<a id="Discussion"></a>

## Discussion

This function does nothing if the color space is not an indexed color space. To determine whether a color space is an indexed color space, call the function [CGColorSpaceGetModel](cgcolorspace/model.md).

## See Also

### Examining a Color Space

- [CGColorSpaceGetBaseColorSpace](cgcolorspace/basecolorspace.md): Returns the base color space of a pattern or indexed color space.
- [CGColorSpaceGetNumberOfComponents](cgcolorspace/numberofcomponents.md): Returns the number of color components in a color space.
- [CGColorSpaceGetModel](cgcolorspace/model.md): Returns the color space model of the provided color space.
- [CGColorSpaceModel](cgcolorspacemodel.md): Models for color spaces.
- [CGColorSpaceCopyICCData](cgcolorspace/copyiccdata%28%29.md): Returns a copy of the ICC profile data of the provided color space.
- [CGColorSpaceCopyPropertyList](cgcolorspace/copypropertylist%28%29.md): Returns a copy of the color space’s properties.
- [CGColorSpaceCopyICCProfile](cgcolorspace/iccdata.md): Deprecated. Returns a copy of the ICC profile of the provided color space.
- [CGColorSpaceCopyName](cgcolorspace/name.md): Returns the name used to create the specified color space.
- [CGColorSpaceSupportsOutput](cgcolorspace/supportsoutput.md): Returns a Boolean indicating whether the color space can be used as a destination color space.
- [CGColorSpaceIsWideGamutRGB](cgcolorspace/iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.
- [CGColorSpaceGetColorTableCount](cgcolorspacegetcolortablecount.md): Returns the number of entries in the color table of an indexed color space.
