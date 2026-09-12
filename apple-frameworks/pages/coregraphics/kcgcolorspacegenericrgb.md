> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgcolorspacegenericrgb](https://developer.apple.com/documentation/coregraphics/kcgcolorspacegenericrgb)

# kCGColorSpaceGenericRGB

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the generic RGB color space.

> Use [kCGColorSpaceSRGB](cgcolorspace/srgb.md) instead.

## Declaration

```objectivec
extern CFStringRef const kCGColorSpaceGenericRGB;
```

## See Also

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
