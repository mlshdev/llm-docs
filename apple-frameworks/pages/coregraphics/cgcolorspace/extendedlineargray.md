> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace/extendedlineargray](https://developer.apple.com/documentation/coregraphics/cgcolorspace/extendedlineargray)

# extendedLinearGray (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The extended gray color space with a linear transfer function.

## Declaration

```swift
class let extendedLinearGray: CFString
```

<a id="Discussion"></a>

## Discussion

This color space has the same colorimetry as [linearGray](lineargray.md); in addition, you may encode component values below `0.0` and above `1.0`.

## See Also

### Accessing System-Defined Color Spaces

- [displayP3](displayp3.md): The Display P3 color space, created by Apple.
- [displayP3_HLG](displayp3_hlg.md): The Display P3 color space, using the HLG transfer function.
- [displayP3_PQ_EOTF](displayp3_pq_eotf.md): Deprecated. The Display P3 color space, using the PQ transfer function.
- [extendedLinearDisplayP3](extendedlineardisplayp3.md): The Display P3 color space with a linear transfer function and extended-range values.
- [sRGB](srgb.md): The standard Red Green Blue (sRGB) color space.
- [linearSRGB](linearsrgb.md): The sRGB color space with a linear transfer function.
- [extendedSRGB](extendedsrgb.md): The extended sRGB color space.
- [extendedLinearSRGB](extendedlinearsrgb.md): The sRGB color space with a linear transfer function and extended-range values.
- [genericGrayGamma2_2](genericgraygamma2_2.md): The generic gray color space that has an exponential transfer function with a power of 2.2.
- [extendedGray](extendedgray.md): The extended gray color space.
- [linearGray](lineargray.md): The gray color space using a linear transfer function.
- [genericCMYK](genericcmyk.md): The generic CMYK color space.
- [genericRGBLinear](genericrgblinear.md): The generic RGB color space with a linear transfer function.
- [genericXYZ](genericxyz.md): The XYZ color space, as defined by the CIE 1931 standard.
- [genericLab](genericlab.md): The generic LAB color space.

# kCGColorSpaceExtendedLinearGray (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The extended gray color space with a linear transfer function.

## Declaration

```objectivec
extern CFStringRef const kCGColorSpaceExtendedLinearGray;
```

<a id="Discussion"></a>

## Discussion

This color space has the same colorimetry as [kCGColorSpaceLinearGray](lineargray.md); in addition, you may encode component values below `0.0` and above `1.0`.

## See Also

### Accessing System-Defined Color Spaces

- [kCGColorSpaceDisplayP3](displayp3.md): The Display P3 color space, created by Apple.
- [kCGColorSpaceDisplayP3_HLG](displayp3_hlg.md): The Display P3 color space, using the HLG transfer function.
- [kCGColorSpaceDisplayP3_PQ_EOTF](displayp3_pq_eotf.md): Deprecated. The Display P3 color space, using the PQ transfer function.
- [kCGColorSpaceExtendedLinearDisplayP3](extendedlineardisplayp3.md): The Display P3 color space with a linear transfer function and extended-range values.
- [kCGColorSpaceSRGB](srgb.md): The standard Red Green Blue (sRGB) color space.
- [kCGColorSpaceLinearSRGB](linearsrgb.md): The sRGB color space with a linear transfer function.
- [kCGColorSpaceExtendedSRGB](extendedsrgb.md): The extended sRGB color space.
- [kCGColorSpaceExtendedLinearSRGB](extendedlinearsrgb.md): The sRGB color space with a linear transfer function and extended-range values.
- [kCGColorSpaceGenericGrayGamma2_2](genericgraygamma2_2.md): The generic gray color space that has an exponential transfer function with a power of 2.2.
- [kCGColorSpaceExtendedGray](extendedgray.md): The extended gray color space.
- [kCGColorSpaceLinearGray](lineargray.md): The gray color space using a linear transfer function.
- [kCGColorSpaceGenericCMYK](genericcmyk.md): The generic CMYK color space.
- [kCGColorSpaceGenericRGBLinear](genericrgblinear.md): The generic RGB color space with a linear transfer function.
- [kCGColorSpaceGenericXYZ](genericxyz.md): The XYZ color space, as defined by the CIE 1931 standard.
- [kCGColorSpaceGenericLab](genericlab.md): The generic LAB color space.
