> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace](https://developer.apple.com/documentation/coregraphics/cgcolorspace)

# CGColorSpace (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A profile that specifies how to interpret a color value for display.

## Declaration

```swift
class CGColorSpace
```

<a id="overview"></a>

## Overview

A color space is multi-dimensional, and each dimension represents a specific color component. For example, the colors in an RGB color space have three dimensions or components—red, green, and blue. The intensity of each component is represented by floating point values—their range and meaning depends on the color space in question.

Different types of devices (scanners, monitors, printers) operate within different color spaces (RGB, CMYK, grayscale). Additionally, two devices of the same type (for example, color displays from different manufacturers) may operate within the same kind of color space, yet still produce a different range of colors, or gamut. Color spaces that are correctly specified ensure that an image has a consistent appearance regardless of the output device.

Core Graphics supports several kinds of color spaces:

- Calibrated color spaces ensure that colors appear the same when displayed on different devices. The visual appearance of the color is preserved, as far as the capabilities of the device allow.
- Device-dependent color spaces are tied to the system of color representation of a particular device. Device color spaces are not recommended when high-fidelity color preservation is important.
- Special color spaces—indexed and pattern. An indexed color space contains a color table with up to 256 entries and a base color space to which the color table entries are mapped. Each entry in the color table specifies one color in the base color space. A pattern color space is used when stroking or filling with a pattern.

## Topics

### Creating Color Spaces

- [init(calibratedGrayWhitePoint:blackPoint:gamma:)](cgcolorspace/init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [init(calibratedRGBWhitePoint:blackPoint:gamma:matrix:)](cgcolorspace/init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
- [init(iccBasedNComponents:range:profile:alternate:)](cgcolorspace/init%28iccbasedncomponents_range_profile_alternate_%29.md): Creates a device-independent color space that is defined according to the ICC color profile specification.
- [init(indexedBaseSpace:last:colorTable:)](cgcolorspace/init%28indexedbasespace_last_colortable_%29.md): Creates an indexed color space, consisting of colors specified by a color lookup table.
- [init(labWhitePoint:blackPoint:range:)](cgcolorspace/init%28labwhitepoint_blackpoint_range_%29.md): Creates a device-independent color space that is relative to human color perception, according to the CIE L\*a\*b\* standard.
- [init(patternBaseSpace:)](cgcolorspace/init%28patternbasespace_%29.md): Creates a pattern color space.
- [init(name:)](cgcolorspace/init%28name_%29.md): Creates a specified type of Quartz color space.
- [init(platformColorSpaceRef:)](cgcolorspace/init%28platformcolorspaceref_%29.md): Deprecated. Creates a platform-specific color space.
- [init(iccData:)](cgcolorspace/init%28iccdata_%29.md): Creates an ICC-based color space using the ICC profile contained in the specified data.
- [init(propertyListPlist:)](cgcolorspace/init%28propertylistplist_%29.md): Creates a color space from a property list.
- [CGColorSpaceCreateDeviceRGB()](cgcolorspacecreatedevicergb%28%29.md): Creates a device-dependent RGB color space.
- [CGColorSpaceCreateDeviceCMYK()](cgcolorspacecreatedevicecmyk%28%29.md): Creates a device-dependent CMYK color space.
- [CGColorSpaceCreateDeviceGray()](cgcolorspacecreatedevicegray%28%29.md): Creates a device-dependent grayscale color space.
- [init(iccProfileData:)](cgcolorspace/init%28iccprofiledata_%29.md): Deprecated. Creates an ICC-based color space using the ICC profile contained in the specified data.

### Examining a Color Space

- [baseColorSpace](cgcolorspace/basecolorspace.md): Returns the base color space of a pattern or indexed color space.
- [numberOfComponents](cgcolorspace/numberofcomponents.md): Returns the number of color components in a color space.
- [model](cgcolorspace/model.md): Returns the color space model of the provided color space.
- [CGColorSpaceModel](cgcolorspacemodel.md): Models for color spaces.
- [colorTable](cgcolorspace/colortable.md): The entries in the color table of an indexed color space.
- [copyICCData()](cgcolorspace/copyiccdata%28%29.md): Returns a copy of the ICC profile data of the provided color space.
- [copyPropertyList()](cgcolorspace/copypropertylist%28%29.md): Returns a copy of the color space’s properties.
- [iccData](cgcolorspace/iccdata.md): Deprecated. Returns a copy of the ICC profile of the provided color space.
- [name](cgcolorspace/name.md): Returns the name used to create the specified color space.
- [supportsOutput](cgcolorspace/supportsoutput.md): Returns a Boolean indicating whether the color space can be used as a destination color space.
- [isWideGamutRGB](cgcolorspace/iswidegamutrgb.md): Returns whether the RGB color space covers a significant portion of the NTSC color gamut.

### Accessing System-Defined Color Spaces

- [displayP3](cgcolorspace/displayp3.md): The Display P3 color space, created by Apple.
- [displayP3_HLG](cgcolorspace/displayp3_hlg.md): The Display P3 color space, using the HLG transfer function.
- [displayP3_PQ_EOTF](cgcolorspace/displayp3_pq_eotf.md): Deprecated. The Display P3 color space, using the PQ transfer function.
- [extendedLinearDisplayP3](cgcolorspace/extendedlineardisplayp3.md): The Display P3 color space with a linear transfer function and extended-range values.
- [sRGB](cgcolorspace/srgb.md): The standard Red Green Blue (sRGB) color space.
- [linearSRGB](cgcolorspace/linearsrgb.md): The sRGB color space with a linear transfer function.
- [extendedSRGB](cgcolorspace/extendedsrgb.md): The extended sRGB color space.
- [extendedLinearSRGB](cgcolorspace/extendedlinearsrgb.md): The sRGB color space with a linear transfer function and extended-range values.
- [genericGrayGamma2_2](cgcolorspace/genericgraygamma2_2.md): The generic gray color space that has an exponential transfer function with a power of 2.2.
- [extendedGray](cgcolorspace/extendedgray.md): The extended gray color space.
- [linearGray](cgcolorspace/lineargray.md): The gray color space using a linear transfer function.
- [extendedLinearGray](cgcolorspace/extendedlineargray.md): The extended gray color space with a linear transfer function.
- [genericCMYK](cgcolorspace/genericcmyk.md): The generic CMYK color space.
- [genericRGBLinear](cgcolorspace/genericrgblinear.md): The generic RGB color space with a linear transfer function.
- [genericXYZ](cgcolorspace/genericxyz.md): The XYZ color space, as defined by the CIE 1931 standard.
- [genericLab](cgcolorspace/genericlab.md): The generic LAB color space.
- [acescgLinear](cgcolorspace/acescglinear.md): The ACEScg color space.
- [adobeRGB1998](cgcolorspace/adobergb1998.md): The Adobe RGB (1998) color space.
- [dcip3](cgcolorspace/dcip3.md): The DCI P3 color space, which is the digital cinema standard.
- [itur_709](cgcolorspace/itur_709.md): The recommendation of the International Telecommunication Union (ITU) Radiocommunication sector for the BT.709 color space.
- [rommrgb](cgcolorspace/rommrgb.md): The Reference Output Medium Metric (ROMM) RGB color space.
- [itur_2020](cgcolorspace/itur_2020.md): The recommendation of the International Telecommunication Union (ITU) Radiocommunication sector for the BT.2020 color space.
- [itur_2020_HLG](cgcolorspace/itur_2020_hlg.md): Deprecated. The recommendation of the International Telecommunication Union (ITU) Radiocommunication sector for the BT.2020 color space, with the HLG transfer function.
- [itur_2020_PQ_EOTF](cgcolorspace/itur_2020_pq_eotf.md): Deprecated. The recommendation of the International Telecommunication Union (ITU) Radiocommunication sector for the BT.2020 color space, with the PQ transfer function.
- [extendedLinearITUR_2020](cgcolorspace/extendedlinearitur_2020.md): The recommendation of the International Telecommunication Union (ITU) Radiocommunication sector for the BT.2020 color space, with a linear transfer function and extended range values.
- [coreMedia709](cgcolorspace/coremedia709.md)
- [displayP3_PQ](cgcolorspace/displayp3_pq.md)
- [extendedDisplayP3](cgcolorspace/extendeddisplayp3.md)
- [extendedITUR_2020](cgcolorspace/extendeditur_2020.md)
- [itur_2020_PQ](cgcolorspace/itur_2020_pq.md): Deprecated.
- [itur_2020_sRGBGamma](cgcolorspace/itur_2020_srgbgamma.md)
- [itur_2100_HLG](cgcolorspace/itur_2100_hlg.md)
- [itur_2100_PQ](cgcolorspace/itur_2100_pq.md)
- [itur_709_HLG](cgcolorspace/itur_709_hlg.md)
- [itur_709_PQ](cgcolorspace/itur_709_pq.md)
- [linearDisplayP3](cgcolorspace/lineardisplayp3.md)
- [linearITUR_2020](cgcolorspace/linearitur_2020.md)

### Working with Core Foundation Types

- [typeID](cgcolorspace/typeid.md): Returns the Core Foundation type identifier for Quartz color spaces.

### Data Types

- [CGColorRenderingIntent](cgcolorrenderingintent.md): Handling options for colors that are not located within the destination color space of a graphics context.

### Instance Methods

- [isHDR()](cgcolorspace/ishdr%28%29.md)

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Colors and Fonts

- [CGColor](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfo](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGFont](cgfont.md): A set of character glyphs and layout information for drawing text.

# CGColorSpaceRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A profile that specifies how to interpret a color value for display.

## Declaration

```objectivec
typedef struct CGColorSpace * CGColorSpaceRef;
```

<a id="overview"></a>

## Overview

A color space is multi-dimensional, and each dimension represents a specific color component. For example, the colors in an RGB color space have three dimensions or components—red, green, and blue. The intensity of each component is represented by floating point values—their range and meaning depends on the color space in question.

Different types of devices (scanners, monitors, printers) operate within different color spaces (RGB, CMYK, grayscale). Additionally, two devices of the same type (for example, color displays from different manufacturers) may operate within the same kind of color space, yet still produce a different range of colors, or gamut. Color spaces that are correctly specified ensure that an image has a consistent appearance regardless of the output device.

Core Graphics supports several kinds of color spaces:

- Calibrated color spaces ensure that colors appear the same when displayed on different devices. The visual appearance of the color is preserved, as far as the capabilities of the device allow.
- Device-dependent color spaces are tied to the system of color representation of a particular device. Device color spaces are not recommended when high-fidelity color preservation is important.
- Special color spaces—indexed and pattern. An indexed color space contains a color table with up to 256 entries and a base color space to which the color table entries are mapped. Each entry in the color table specifies one color in the base color space. A pattern color space is used when stroking or filling with a pattern.

## Topics

### Creating Color Spaces

- [CGColorSpaceCreateCalibratedGray](cgcolorspace/init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [CGColorSpaceCreateCalibratedRGB](cgcolorspace/init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
- [CGColorSpaceCreateICCBased](cgcolorspace/init%28iccbasedncomponents_range_profile_alternate_%29.md): Creates a device-independent color space that is defined according to the ICC color profile specification.
- [CGColorSpaceCreateIndexed](cgcolorspace/init%28indexedbasespace_last_colortable_%29.md): Creates an indexed color space, consisting of colors specified by a color lookup table.
- [CGColorSpaceCreateLab](cgcolorspace/init%28labwhitepoint_blackpoint_range_%29.md): Creates a device-independent color space that is relative to human color perception, according to the CIE L\*a\*b\* standard.
- [CGColorSpaceCreatePattern](cgcolorspace/init%28patternbasespace_%29.md): Creates a pattern color space.
- [CGColorSpaceCreateWithName](cgcolorspace/init%28name_%29.md): Creates a specified type of Quartz color space.
- [CGColorSpaceCreateWithPlatformColorSpace](cgcolorspace/init%28platformcolorspaceref_%29.md): Deprecated. Creates a platform-specific color space.
- [CGColorSpaceCreateWithICCData](cgcolorspace/init%28iccdata_%29.md): Creates an ICC-based color space using the ICC profile contained in the specified data.
- [CGColorSpaceCreateWithPropertyList](cgcolorspace/init%28propertylistplist_%29.md): Creates a color space from a property list.
- [CGColorSpaceCreateDeviceRGB](cgcolorspacecreatedevicergb%28%29.md): Creates a device-dependent RGB color space.
- [CGColorSpaceCreateDeviceCMYK](cgcolorspacecreatedevicecmyk%28%29.md): Creates a device-dependent CMYK color space.
- [CGColorSpaceCreateDeviceGray](cgcolorspacecreatedevicegray%28%29.md): Creates a device-dependent grayscale color space.
- [CGColorSpaceCreateWithICCProfile](cgcolorspace/init%28iccprofiledata_%29.md): Deprecated. Creates an ICC-based color space using the ICC profile contained in the specified data.

### Retaining and Releasing Color Spaces

- [CGColorSpaceRelease](cgcolorspacerelease.md): Decrements the retain count of a color space.
- [CGColorSpaceRetain](cgcolorspaceretain.md): Increments the retain count of a color space.

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
- [CGColorSpaceGetColorTable](cgcolorspacegetcolortable.md): Copies the entries in the color table of an indexed color space.
- [CGColorSpaceGetColorTableCount](cgcolorspacegetcolortablecount.md): Returns the number of entries in the color table of an indexed color space.

### Accessing System-Defined Color Spaces

- [kCGColorSpaceDisplayP3](cgcolorspace/displayp3.md): The Display P3 color space, created by Apple.
- [kCGColorSpaceDisplayP3_HLG](cgcolorspace/displayp3_hlg.md): The Display P3 color space, using the HLG transfer function.
- [kCGColorSpaceDisplayP3_PQ_EOTF](cgcolorspace/displayp3_pq_eotf.md): Deprecated. The Display P3 color space, using the PQ transfer function.
- [kCGColorSpaceExtendedLinearDisplayP3](cgcolorspace/extendedlineardisplayp3.md): The Display P3 color space with a linear transfer function and extended-range values.
- [kCGColorSpaceSRGB](cgcolorspace/srgb.md): The standard Red Green Blue (sRGB) color space.
- [kCGColorSpaceLinearSRGB](cgcolorspace/linearsrgb.md): The sRGB color space with a linear transfer function.
- [kCGColorSpaceExtendedSRGB](cgcolorspace/extendedsrgb.md): The extended sRGB color space.
- [kCGColorSpaceExtendedLinearSRGB](cgcolorspace/extendedlinearsrgb.md): The sRGB color space with a linear transfer function and extended-range values.
- [kCGColorSpaceGenericGrayGamma2_2](cgcolorspace/genericgraygamma2_2.md): The generic gray color space that has an exponential transfer function with a power of 2.2.
- [kCGColorSpaceExtendedGray](cgcolorspace/extendedgray.md): The extended gray color space.
- [kCGColorSpaceLinearGray](cgcolorspace/lineargray.md): The gray color space using a linear transfer function.
- [kCGColorSpaceExtendedLinearGray](cgcolorspace/extendedlineargray.md): The extended gray color space with a linear transfer function.
- [kCGColorSpaceGenericCMYK](cgcolorspace/genericcmyk.md): The generic CMYK color space.
- [kCGColorSpaceGenericRGBLinear](cgcolorspace/genericrgblinear.md): The generic RGB color space with a linear transfer function.
- [kCGColorSpaceGenericXYZ](cgcolorspace/genericxyz.md): The XYZ color space, as defined by the CIE 1931 standard.
- [kCGColorSpaceGenericLab](cgcolorspace/genericlab.md): The generic LAB color space.
- [kCGColorSpaceACESCGLinear](cgcolorspace/acescglinear.md): The ACEScg color space.
- [kCGColorSpaceAdobeRGB1998](cgcolorspace/adobergb1998.md): The Adobe RGB (1998) color space.
- [kCGColorSpaceDCIP3](cgcolorspace/dcip3.md): The DCI P3 color space, which is the digital cinema standard.
- [kCGColorSpaceITUR_709](cgcolorspace/itur_709.md): The recommendation of the International Telecommunication Union (ITU) Radiocommunication sector for the BT.709 color space.
- [kCGColorSpaceROMMRGB](cgcolorspace/rommrgb.md): The Reference Output Medium Metric (ROMM) RGB color space.
- [kCGColorSpaceITUR_2020](cgcolorspace/itur_2020.md): The recommendation of the International Telecommunication Union (ITU) Radiocommunication sector for the BT.2020 color space.
- [kCGColorSpaceITUR_2020_HLG](cgcolorspace/itur_2020_hlg.md): Deprecated. The recommendation of the International Telecommunication Union (ITU) Radiocommunication sector for the BT.2020 color space, with the HLG transfer function.
- [kCGColorSpaceITUR_2020_PQ_EOTF](cgcolorspace/itur_2020_pq_eotf.md): Deprecated. The recommendation of the International Telecommunication Union (ITU) Radiocommunication sector for the BT.2020 color space, with the PQ transfer function.
- [kCGColorSpaceExtendedLinearITUR_2020](cgcolorspace/extendedlinearitur_2020.md): The recommendation of the International Telecommunication Union (ITU) Radiocommunication sector for the BT.2020 color space, with a linear transfer function and extended range values.
- [kCGColorSpaceCoreMedia709](cgcolorspace/coremedia709.md)
- [kCGColorSpaceDisplayP3_PQ](cgcolorspace/displayp3_pq.md)
- [kCGColorSpaceExtendedDisplayP3](cgcolorspace/extendeddisplayp3.md)
- [kCGColorSpaceExtendedITUR_2020](cgcolorspace/extendeditur_2020.md)
- [kCGColorSpaceITUR_2020_PQ](cgcolorspace/itur_2020_pq.md): Deprecated.
- [kCGColorSpaceITUR_2020_sRGBGamma](cgcolorspace/itur_2020_srgbgamma.md)
- [kCGColorSpaceITUR_2100_HLG](cgcolorspace/itur_2100_hlg.md)
- [kCGColorSpaceITUR_2100_PQ](cgcolorspace/itur_2100_pq.md)
- [kCGColorSpaceITUR_709_HLG](cgcolorspace/itur_709_hlg.md)
- [kCGColorSpaceITUR_709_PQ](cgcolorspace/itur_709_pq.md)
- [kCGColorSpaceLinearDisplayP3](cgcolorspace/lineardisplayp3.md)
- [kCGColorSpaceLinearITUR_2020](cgcolorspace/linearitur_2020.md)
- [kCGColorSpaceGenericRGB](kcgcolorspacegenericrgb.md): Deprecated. The name of the generic RGB color space.
- [kCGColorSpaceGenericGray](kcgcolorspacegenericgray.md): Deprecated. The name of the generic gray color space.

### Working with Core Foundation Types

- [CGColorSpaceGetTypeID](cgcolorspace/typeid.md): Returns the Core Foundation type identifier for Quartz color spaces.

### Data Types

- [CGColorRenderingIntent](cgcolorrenderingintent.md): Handling options for colors that are not located within the destination color space of a graphics context.

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Opaque Types

- [CGContextRef](cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfoRef](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGDataConsumerRef](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProviderRef](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGFontRef](cgfont.md): A set of character glyphs and layout information for drawing text.
- [CGFunctionRef](cgfunction.md): A general facility for defining and using callback functions.
- [CGGradientRef](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGImageRef](cgimage.md): A bitmap image or image mask.
- [CGLayerRef](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
