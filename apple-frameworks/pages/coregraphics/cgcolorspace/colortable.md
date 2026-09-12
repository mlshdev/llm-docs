> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace/colortable](https://developer.apple.com/documentation/coregraphics/cgcolorspace/colortable)

# colorTable

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The entries in the color table of an indexed color space.

## Declaration

```swift
var colorTable: [UInt8]? { get }
```

<a id="Discussion"></a>

## Discussion

If the color space is an indexed color space, this array contains color component values for the colors in the color space, in the same format you use when creating an indexed color space with the [init(indexedBaseSpace:last:colorTable:)](init%28indexedbasespace_last_colortable_%29.md) initializer.

If the color space is not an indexed color space, this property’s value is `nil`. To determine whether a color space is an indexed color space, read the [model](model.md) property.

## See Also

### Examining a Color Space

- [baseColorSpace](basecolorspace.md): Returns the base color space of a pattern or indexed color space.
- [numberOfComponents](numberofcomponents.md): Returns the number of color components in a color space.
- [model](model.md): Returns the color space model of the provided color space.
- [CGColorSpaceModel](../cgcolorspacemodel.md): Models for color spaces.
- [copyICCData()](copyiccdata%28%29.md): Returns a copy of the ICC profile data of the provided color space.
- [copyPropertyList()](copypropertylist%28%29.md): Returns a copy of the color space’s properties.
- [iccData](iccdata.md): Deprecated. Returns a copy of the ICC profile of the provided color space.
- [name](name.md): Returns the name used to create the specified color space.
- [supportsOutput](supportsoutput.md): Returns a Boolean indicating whether the color space can be used as a destination color space.
- [isWideGamutRGB](iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.
