> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace/extendedlineardisplayp3](https://developer.apple.com/documentation/coregraphics/cgcolorspace/extendedlineardisplayp3)

# extendedLinearDisplayP3 (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 12.3+ · iPadOS 12.3+ · Mac Catalyst 13.1+ · macOS 10.14.3+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The Display P3 color space with a linear transfer function and extended-range values.

## Declaration

```swift
class let extendedLinearDisplayP3: CFString
```

<a id="Discussion"></a>

## Discussion

This color space uses the DCI P3 primaries, a D65 white point, and a linear transfer function. You can encode component values below `0.0` and above `1.0`.

## See Also

### Accessing System-Defined Color Spaces

- [displayP3](displayp3.md): The Display P3 color space, created by Apple.
- [displayP3_HLG](displayp3_hlg.md): The Display P3 color space, using the HLG transfer function.
- [displayP3_PQ_EOTF](displayp3_pq_eotf.md): Deprecated. The Display P3 color space, using the PQ transfer function.
- [sRGB](srgb.md): The standard Red Green Blue (sRGB) color space.
- [linearSRGB](linearsrgb.md): The sRGB color space with a linear transfer function.
- [extendedSRGB](extendedsrgb.md): The extended sRGB color space.
- [extendedLinearSRGB](extendedlinearsrgb.md): The sRGB color space with a linear transfer function and extended-range values.
- [genericGrayGamma2_2](genericgraygamma2_2.md): The generic gray color space that has an exponential transfer function with a power of 2.2.
- [extendedGray](extendedgray.md): The extended gray color space.
- [linearGray](lineargray.md): The gray color space using a linear transfer function.
- [extendedLinearGray](extendedlineargray.md): The extended gray color space with a linear transfer function.
- [genericCMYK](genericcmyk.md): The generic CMYK color space.
- [genericRGBLinear](genericrgblinear.md): The generic RGB color space with a linear transfer function.
- [genericXYZ](genericxyz.md): The XYZ color space, as defined by the CIE 1931 standard.
- [genericLab](genericlab.md): The generic LAB color space.

# kCGColorSpaceExtendedLinearDisplayP3 (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 12.3+ · iPadOS 12.3+ · Mac Catalyst 13.1+ · macOS 10.14.3+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The Display P3 color space with a linear transfer function and extended-range values.

## Declaration

```objectivec
extern CFStringRef const kCGColorSpaceExtendedLinearDisplayP3;
```

<a id="Discussion"></a>

## Discussion

This color space uses the DCI P3 primaries, a D65 white point, and a linear transfer function. You can encode component values below `0.0` and above `1.0`.

## See Also

### Accessing System-Defined Color Spaces

- [kCGColorSpaceDisplayP3](displayp3.md): The Display P3 color space, created by Apple.
- [kCGColorSpaceDisplayP3_HLG](displayp3_hlg.md): The Display P3 color space, using the HLG transfer function.
- [kCGColorSpaceDisplayP3_PQ_EOTF](displayp3_pq_eotf.md): Deprecated. The Display P3 color space, using the PQ transfer function.
- [kCGColorSpaceSRGB](srgb.md): The standard Red Green Blue (sRGB) color space.
- [kCGColorSpaceLinearSRGB](linearsrgb.md): The sRGB color space with a linear transfer function.
- [kCGColorSpaceExtendedSRGB](extendedsrgb.md): The extended sRGB color space.
- [kCGColorSpaceExtendedLinearSRGB](extendedlinearsrgb.md): The sRGB color space with a linear transfer function and extended-range values.
- [kCGColorSpaceGenericGrayGamma2_2](genericgraygamma2_2.md): The generic gray color space that has an exponential transfer function with a power of 2.2.
- [kCGColorSpaceExtendedGray](extendedgray.md): The extended gray color space.
- [kCGColorSpaceLinearGray](lineargray.md): The gray color space using a linear transfer function.
- [kCGColorSpaceExtendedLinearGray](extendedlineargray.md): The extended gray color space with a linear transfer function.
- [kCGColorSpaceGenericCMYK](genericcmyk.md): The generic CMYK color space.
- [kCGColorSpaceGenericRGBLinear](genericrgblinear.md): The generic RGB color space with a linear transfer function.
- [kCGColorSpaceGenericXYZ](genericxyz.md): The XYZ color space, as defined by the CIE 1931 standard.
- [kCGColorSpaceGenericLab](genericlab.md): The generic LAB color space.
