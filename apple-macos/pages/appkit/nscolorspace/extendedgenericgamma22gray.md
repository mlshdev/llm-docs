> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/extendedgenericgamma22gray](https://developer.apple.com/documentation/appkit/nscolorspace/extendedgenericgamma22gray)

# extendedGenericGamma22Gray (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.12+

A color space object that represents an extended gray color space with a gamma value of 2.2.

## Declaration

```swift
class var extendedGenericGamma22Gray: NSColorSpace { get }
```

<a id="return-value"></a>

## Return Value

The `NSColorSpace` object.

<a id="Discussion"></a>

## Discussion

This color space has the same colorimetry as Generic Gray 2.2, but component values below `0.0` and above `1.0` may be encoded in this color space. Negative values are encoded as the signed reflection of the original encoding function. `y(x) = sign(x)*f(abs(x))`

## See Also

### Getting a Named Color Space

- [deviceRGB](devicergb.md): A color space object that represents a calibrated or device-dependent RGB color space.
- [genericRGB](genericrgb.md): A color space object that represents a device-independent RGB color space.
- [deviceCMYK](devicecmyk.md): A color space object that represents a calibrated or device-dependent CMYK color space.
- [genericCMYK](genericcmyk.md): A color space object that represents a device-independent CMYK color space.
- [deviceGray](devicegray.md): A color space object that represents a calibrated or device-dependent gray color space.
- [genericGray](genericgray.md): A color space object that represents a device-independent gray color space.
- [sRGB](srgb.md): A color space object that represents an sRGB color space.
- [extendedSRGB](extendedsrgb.md): A color space object that represents an extended sRGB color space.
- [displayP3](displayp3.md): A color space object that represents a P3 Display color space.
- [genericGamma22Gray](genericgamma22gray.md): A color space object that represents a gray color space with a gamma value of 2.2.
- [adobeRGB1998](adobergb1998.md): A color space object that represents an Adobe RGB (1998) color space.

# extendedGenericGamma22GrayColorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.12+

A color space object that represents an extended gray color space with a gamma value of 2.2.

## Declaration

```objectivec
@property (class, strong, readonly) NSColorSpace * extendedGenericGamma22GrayColorSpace;
```

<a id="return-value"></a>

## Return Value

The `NSColorSpace` object.

<a id="Discussion"></a>

## Discussion

This color space has the same colorimetry as Generic Gray 2.2, but component values below `0.0` and above `1.0` may be encoded in this color space. Negative values are encoded as the signed reflection of the original encoding function. `y(x) = sign(x)*f(abs(x))`

## See Also

### Getting a Named Color Space

- [deviceRGBColorSpace](devicergb.md): A color space object that represents a calibrated or device-dependent RGB color space.
- [genericRGBColorSpace](genericrgb.md): A color space object that represents a device-independent RGB color space.
- [deviceCMYKColorSpace](devicecmyk.md): A color space object that represents a calibrated or device-dependent CMYK color space.
- [genericCMYKColorSpace](genericcmyk.md): A color space object that represents a device-independent CMYK color space.
- [deviceGrayColorSpace](devicegray.md): A color space object that represents a calibrated or device-dependent gray color space.
- [genericGrayColorSpace](genericgray.md): A color space object that represents a device-independent gray color space.
- [sRGBColorSpace](srgb.md): A color space object that represents an sRGB color space.
- [extendedSRGBColorSpace](extendedsrgb.md): A color space object that represents an extended sRGB color space.
- [displayP3ColorSpace](displayp3.md): A color space object that represents a P3 Display color space.
- [genericGamma22GrayColorSpace](genericgamma22gray.md): A color space object that represents a gray color space with a gamma value of 2.2.
- [adobeRGB1998ColorSpace](adobergb1998.md): A color space object that represents an Adobe RGB (1998) color space.
