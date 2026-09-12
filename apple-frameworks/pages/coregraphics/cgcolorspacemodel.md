> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspacemodel](https://developer.apple.com/documentation/coregraphics/cgcolorspacemodel)

# CGColorSpaceModel (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Models for color spaces.

## Declaration

```swift
enum CGColorSpaceModel
```

## Topics

### Constants

- [CGColorSpaceModel.unknown](cgcolorspacemodel/unknown.md): An unknown color space model.
- [CGColorSpaceModel.monochrome](cgcolorspacemodel/monochrome.md): A monochrome color space model.
- [CGColorSpaceModel.rgb](cgcolorspacemodel/rgb.md): An RGB color space model.
- [CGColorSpaceModel.cmyk](cgcolorspacemodel/cmyk.md): A CMYK color space model.
- [CGColorSpaceModel.lab](cgcolorspacemodel/lab.md): A Lab color space model.
- [CGColorSpaceModel.deviceN](cgcolorspacemodel/devicen.md): A DeviceN color space model.
- [CGColorSpaceModel.indexed](cgcolorspacemodel/indexed.md): An indexed color space model.
- [CGColorSpaceModel.pattern](cgcolorspacemodel/pattern.md): A pattern color space model.
- [CGColorSpaceModel.XYZ](cgcolorspacemodel/xyz.md): An XYZ color space model.

### Initializers

- [init(rawValue:)](cgcolorspacemodel/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Examining a Color Space

- [baseColorSpace](cgcolorspace/basecolorspace.md): Returns the base color space of a pattern or indexed color space.
- [numberOfComponents](cgcolorspace/numberofcomponents.md): Returns the number of color components in a color space.
- [model](cgcolorspace/model.md): Returns the color space model of the provided color space.
- [colorTable](cgcolorspace/colortable.md): The entries in the color table of an indexed color space.
- [copyICCData()](cgcolorspace/copyiccdata%28%29.md): Returns a copy of the ICC profile data of the provided color space.
- [copyPropertyList()](cgcolorspace/copypropertylist%28%29.md): Returns a copy of the color space’s properties.
- [iccData](cgcolorspace/iccdata.md): Deprecated. Returns a copy of the ICC profile of the provided color space.
- [name](cgcolorspace/name.md): Returns the name used to create the specified color space.
- [supportsOutput](cgcolorspace/supportsoutput.md): Returns a Boolean indicating whether the color space can be used as a destination color space.
- [isWideGamutRGB](cgcolorspace/iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.

# CGColorSpaceModel (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Models for color spaces.

## Declaration

```objectivec
enum CGColorSpaceModel : int32_t;
```

## Topics

### Constants

- [kCGColorSpaceModelUnknown](cgcolorspacemodel/unknown.md): An unknown color space model.
- [kCGColorSpaceModelMonochrome](cgcolorspacemodel/monochrome.md): A monochrome color space model.
- [kCGColorSpaceModelRGB](cgcolorspacemodel/rgb.md): An RGB color space model.
- [kCGColorSpaceModelCMYK](cgcolorspacemodel/cmyk.md): A CMYK color space model.
- [kCGColorSpaceModelLab](cgcolorspacemodel/lab.md): A Lab color space model.
- [kCGColorSpaceModelDeviceN](cgcolorspacemodel/devicen.md): A DeviceN color space model.
- [kCGColorSpaceModelIndexed](cgcolorspacemodel/indexed.md): An indexed color space model.
- [kCGColorSpaceModelPattern](cgcolorspacemodel/pattern.md): A pattern color space model.
- [kCGColorSpaceModelXYZ](cgcolorspacemodel/xyz.md): An XYZ color space model.

## See Also

### Examining a Color Space

- [CGColorSpaceGetBaseColorSpace](cgcolorspace/basecolorspace.md): Returns the base color space of a pattern or indexed color space.
- [CGColorSpaceGetNumberOfComponents](cgcolorspace/numberofcomponents.md): Returns the number of color components in a color space.
- [CGColorSpaceGetModel](cgcolorspace/model.md): Returns the color space model of the provided color space.
- [CGColorSpaceCopyICCData](cgcolorspace/copyiccdata%28%29.md): Returns a copy of the ICC profile data of the provided color space.
- [CGColorSpaceCopyPropertyList](cgcolorspace/copypropertylist%28%29.md): Returns a copy of the color space’s properties.
- [CGColorSpaceCopyICCProfile](cgcolorspace/iccdata.md): Deprecated. Returns a copy of the ICC profile of the provided color space.
- [CGColorSpaceCopyName](cgcolorspace/name.md): Returns the name used to create the specified color space.
- [CGColorSpaceSupportsOutput](cgcolorspace/supportsoutput.md): Returns a Boolean indicating whether the color space can be used as a destination color space.
- [CGColorSpaceIsWideGamutRGB](cgcolorspace/iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.
- [CGColorSpaceGetColorTable](cgcolorspacegetcolortable.md): Copies the entries in the color table of an indexed color space.
- [CGColorSpaceGetColorTableCount](cgcolorspacegetcolortablecount.md): Returns the number of entries in the color table of an indexed color space.
