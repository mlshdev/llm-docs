> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/devicegray](https://developer.apple.com/documentation/appkit/nscolorspace/devicegray)

# deviceGray (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A color space object that represents a calibrated or device-dependent gray color space.

## Declaration

```swift
class var deviceGray: NSColorSpace { get }
```

<a id="return-value"></a>

## Return Value

The `NSColorSpace` object. The color space also includes an alpha component. Typical devices that use this color space are grayscale printers and displays. This object corresponds to the Cocoa color space name `NSDeviceWhiteColorSpace`.

## See Also

### Getting a Named Color Space

- [deviceRGB](devicergb.md): A color space object that represents a calibrated or device-dependent RGB color space.
- [genericRGB](genericrgb.md): A color space object that represents a device-independent RGB color space.
- [deviceCMYK](devicecmyk.md): A color space object that represents a calibrated or device-dependent CMYK color space.
- [genericCMYK](genericcmyk.md): A color space object that represents a device-independent CMYK color space.
- [genericGray](genericgray.md): A color space object that represents a device-independent gray color space.
- [sRGB](srgb.md): A color space object that represents an sRGB color space.
- [extendedSRGB](extendedsrgb.md): A color space object that represents an extended sRGB color space.
- [displayP3](displayp3.md): A color space object that represents a P3 Display color space.
- [genericGamma22Gray](genericgamma22gray.md): A color space object that represents a gray color space with a gamma value of 2.2.
- [extendedGenericGamma22Gray](extendedgenericgamma22gray.md): A color space object that represents an extended gray color space with a gamma value of 2.2.
- [adobeRGB1998](adobergb1998.md): A color space object that represents an Adobe RGB (1998) color space.

# deviceGrayColorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A color space object that represents a calibrated or device-dependent gray color space.

## Declaration

```objectivec
@property (class, strong, readonly) NSColorSpace * deviceGrayColorSpace;
```

<a id="return-value"></a>

## Return Value

The `NSColorSpace` object. The color space also includes an alpha component. Typical devices that use this color space are grayscale printers and displays. This object corresponds to the Cocoa color space name `NSDeviceWhiteColorSpace`.

## See Also

### Getting a Named Color Space

- [deviceRGBColorSpace](devicergb.md): A color space object that represents a calibrated or device-dependent RGB color space.
- [genericRGBColorSpace](genericrgb.md): A color space object that represents a device-independent RGB color space.
- [deviceCMYKColorSpace](devicecmyk.md): A color space object that represents a calibrated or device-dependent CMYK color space.
- [genericCMYKColorSpace](genericcmyk.md): A color space object that represents a device-independent CMYK color space.
- [genericGrayColorSpace](genericgray.md): A color space object that represents a device-independent gray color space.
- [sRGBColorSpace](srgb.md): A color space object that represents an sRGB color space.
- [extendedSRGBColorSpace](extendedsrgb.md): A color space object that represents an extended sRGB color space.
- [displayP3ColorSpace](displayp3.md): A color space object that represents a P3 Display color space.
- [genericGamma22GrayColorSpace](genericgamma22gray.md): A color space object that represents a gray color space with a gamma value of 2.2.
- [extendedGenericGamma22GrayColorSpace](extendedgenericgamma22gray.md): A color space object that represents an extended gray color space with a gamma value of 2.2.
- [adobeRGB1998ColorSpace](adobergb1998.md): A color space object that represents an Adobe RGB (1998) color space.
