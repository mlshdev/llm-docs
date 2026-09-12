> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/srgb](https://developer.apple.com/documentation/appkit/nscolorspace/srgb)

# sRGB (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

A color space object that represents an sRGB color space.

## Declaration

```swift
class var sRGB: NSColorSpace { get }
```

<a id="return-value"></a>

## Return Value

The `NSColorSpace` object. This color-additive color space has red, green, blue, and alpha components.

<a id="Discussion"></a>

## Discussion

The sRGB color space is a standard color space for use on monitors, printers, and the Internet. For further information on sRGB, see [http://www.color.org/srgb.html](http://www.color.org/srgb.html).

## See Also

### Getting a Named Color Space

- [deviceRGB](devicergb.md): A color space object that represents a calibrated or device-dependent RGB color space.
- [genericRGB](genericrgb.md): A color space object that represents a device-independent RGB color space.
- [deviceCMYK](devicecmyk.md): A color space object that represents a calibrated or device-dependent CMYK color space.
- [genericCMYK](genericcmyk.md): A color space object that represents a device-independent CMYK color space.
- [deviceGray](devicegray.md): A color space object that represents a calibrated or device-dependent gray color space.
- [genericGray](genericgray.md): A color space object that represents a device-independent gray color space.
- [extendedSRGB](extendedsrgb.md): A color space object that represents an extended sRGB color space.
- [displayP3](displayp3.md): A color space object that represents a P3 Display color space.
- [genericGamma22Gray](genericgamma22gray.md): A color space object that represents a gray color space with a gamma value of 2.2.
- [extendedGenericGamma22Gray](extendedgenericgamma22gray.md): A color space object that represents an extended gray color space with a gamma value of 2.2.
- [adobeRGB1998](adobergb1998.md): A color space object that represents an Adobe RGB (1998) color space.

# sRGBColorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

A color space object that represents an sRGB color space.

## Declaration

```objectivec
@property (class, strong, readonly) NSColorSpace * sRGBColorSpace;
```

<a id="return-value"></a>

## Return Value

The `NSColorSpace` object. This color-additive color space has red, green, blue, and alpha components.

<a id="Discussion"></a>

## Discussion

The sRGB color space is a standard color space for use on monitors, printers, and the Internet. For further information on sRGB, see [http://www.color.org/srgb.html](http://www.color.org/srgb.html).

## See Also

### Getting a Named Color Space

- [deviceRGBColorSpace](devicergb.md): A color space object that represents a calibrated or device-dependent RGB color space.
- [genericRGBColorSpace](genericrgb.md): A color space object that represents a device-independent RGB color space.
- [deviceCMYKColorSpace](devicecmyk.md): A color space object that represents a calibrated or device-dependent CMYK color space.
- [genericCMYKColorSpace](genericcmyk.md): A color space object that represents a device-independent CMYK color space.
- [deviceGrayColorSpace](devicegray.md): A color space object that represents a calibrated or device-dependent gray color space.
- [genericGrayColorSpace](genericgray.md): A color space object that represents a device-independent gray color space.
- [extendedSRGBColorSpace](extendedsrgb.md): A color space object that represents an extended sRGB color space.
- [displayP3ColorSpace](displayp3.md): A color space object that represents a P3 Display color space.
- [genericGamma22GrayColorSpace](genericgamma22gray.md): A color space object that represents a gray color space with a gamma value of 2.2.
- [extendedGenericGamma22GrayColorSpace](extendedgenericgamma22gray.md): A color space object that represents an extended gray color space with a gamma value of 2.2.
- [adobeRGB1998ColorSpace](adobergb1998.md): A color space object that represents an Adobe RGB (1998) color space.
