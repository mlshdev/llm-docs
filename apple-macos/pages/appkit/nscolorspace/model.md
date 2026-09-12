> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/model](https://developer.apple.com/documentation/appkit/nscolorspace/model)

# NSColorSpace.Model (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that describe the abstract model on which color space objects are based.

## Declaration

```swift
enum Model
```

## Topics

### Color Spaces

- [NSColorSpace.Model.unknown](model/unknown.md): An unknown color-space model.
- [NSColorSpace.Model.gray](model/gray.md): The grayscale color-space model.
- [NSColorSpace.Model.rgb](model/rgb.md): The RGB (red-green-blue) color-space model.
- [NSColorSpace.Model.cmyk](model/cmyk.md): The CMYK (cyan-magenta-yellow-black) color-space model.
- [NSColorSpace.Model.lab](model/lab.md): The L\*a\*b\* device-independent color-space model, which represents colors relative to a reference white point.
- [NSColorSpace.Model.deviceN](model/devicen.md): The DeviceN color-space model from Adobe Systems, Inc.
- [NSColorSpace.Model.indexed](model/indexed.md): An indexed color space, which identifies discrete colors in a color list by index number.
- [NSColorSpace.Model.patterned](model/patterned.md): A pattern color space, which is a repeated image that creates a tiled pattern.

### Initializers

- [init(rawValue:)](model/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Color Space Data and Attributes

- [cgColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [iccProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

# NSColorSpaceModel (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that describe the abstract model on which color space objects are based.

## Declaration

```objectivec
enum NSColorSpaceModel : NSInteger;
```

## Topics

### Color Spaces

- [NSColorSpaceModelUnknown](model/unknown.md): An unknown color-space model.
- [NSColorSpaceModelGray](model/gray.md): The grayscale color-space model.
- [NSColorSpaceModelRGB](model/rgb.md): The RGB (red-green-blue) color-space model.
- [NSColorSpaceModelCMYK](model/cmyk.md): The CMYK (cyan-magenta-yellow-black) color-space model.
- [NSColorSpaceModelLAB](model/lab.md): The L\*a\*b\* device-independent color-space model, which represents colors relative to a reference white point.
- [NSColorSpaceModelDeviceN](model/devicen.md): The DeviceN color-space model from Adobe Systems, Inc.
- [NSColorSpaceModelIndexed](model/indexed.md): An indexed color space, which identifies discrete colors in a color list by index number.
- [NSColorSpaceModelPatterned](model/patterned.md): A pattern color space, which is a repeated image that creates a tiled pattern.

### Deprecated Constants

- [NSUnknownColorSpaceModel](../nsunknowncolorspacemodel.md): Deprecated. An unknown color-space model.
- [NSGrayColorSpaceModel](../nsgraycolorspacemodel.md): Deprecated. The grayscale color-space model.
- [NSRGBColorSpaceModel](../nsrgbcolorspacemodel.md): Deprecated. The RGB (red green blue) color-space model.
- [NSCMYKColorSpaceModel](../nscmykcolorspacemodel.md): Deprecated. The CYMK (cyan, yellow, magenta, black) color-space model.
- [NSLABColorSpaceModel](../nslabcolorspacemodel.md): Deprecated. The L\*a\*b\* device-independent color-space model, which represents colors relative to a reference white point.
- [NSDeviceNColorSpaceModel](../nsdevicencolorspacemodel.md): Deprecated. DeviceN is a color-space model from Adobe Systems, Inc. used in PostScript and PDF color specification.
- [NSIndexedColorSpaceModel](../nsindexedcolorspacemodel.md): Deprecated. An indexed color space, which identifies specified discrete colors in a color list by index number. An indexed color value (a color specification in indexed color space) consists of an index value that refers to a color in a color list.
- [NSPatternColorSpaceModel](../nspatterncolorspacemodel.md): Deprecated. Identifies a pattern color space, which is simply an image that is repeated over and over again in a tiled pattern.

## See Also

### Accessing Color Space Data and Attributes

- [CGColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [ICCProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.
