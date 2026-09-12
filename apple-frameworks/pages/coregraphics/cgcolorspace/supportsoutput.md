> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace/supportsoutput](https://developer.apple.com/documentation/coregraphics/cgcolorspace/supportsoutput)

# supportsOutput (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean indicating whether the color space can be used as a destination color space.

## Declaration

```swift
var supportsOutput: Bool { get }
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
- [iccData](iccdata.md): Deprecated. Returns a copy of the ICC profile of the provided color space.
- [name](name.md): Returns the name used to create the specified color space.
- [isWideGamutRGB](iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.

# CGColorSpaceSupportsOutput (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean indicating whether the color space can be used as a destination color space.

## Declaration

```objectivec
extern bool CGColorSpaceSupportsOutput(CGColorSpaceRef space);
```

## Parameters

- `space`: The color space.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the color space can be used as a destination, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Examining a Color Space

- [CGColorSpaceGetBaseColorSpace](basecolorspace.md): Returns the base color space of a pattern or indexed color space.
- [CGColorSpaceGetNumberOfComponents](numberofcomponents.md): Returns the number of color components in a color space.
- [CGColorSpaceGetModel](model.md): Returns the color space model of the provided color space.
- [CGColorSpaceModel](../cgcolorspacemodel.md): Models for color spaces.
- [CGColorSpaceCopyICCData](copyiccdata%28%29.md): Returns a copy of the ICC profile data of the provided color space.
- [CGColorSpaceCopyPropertyList](copypropertylist%28%29.md): Returns a copy of the color space’s properties.
- [CGColorSpaceCopyICCProfile](iccdata.md): Deprecated. Returns a copy of the ICC profile of the provided color space.
- [CGColorSpaceCopyName](name.md): Returns the name used to create the specified color space.
- [CGColorSpaceIsWideGamutRGB](iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.
- [CGColorSpaceGetColorTable](../cgcolorspacegetcolortable.md): Copies the entries in the color table of an indexed color space.
- [CGColorSpaceGetColorTableCount](../cgcolorspacegetcolortablecount.md): Returns the number of entries in the color table of an indexed color space.
