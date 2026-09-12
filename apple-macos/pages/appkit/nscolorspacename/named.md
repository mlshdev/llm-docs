> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspacename/named](https://developer.apple.com/documentation/appkit/nscolorspacename/named)

# named (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Catalog name and color name components

## Declaration

```swift
static let named: NSColorSpaceName
```

<a id="Discussion"></a>

## Discussion

The components of this color space are indexes into lists or catalogs of prepared colors. The catalogs of named colors come with lookup tables that are able to generate the correct color on a given device.

## See Also

### Color Space Names

- [calibratedRGB](calibratedrgb.md): Calibrated color space with red, green, blue, and alpha components.
- [calibratedWhite](calibratedwhite.md): Calibrated color space with white and alpha components (pure white is 1.0)
- [custom](custom.md): Custom `NSColorSpace` object and floating-point components describing a color in that space
- [deviceCMYK](devicecmyk.md): Device-dependent color space with cyan, magenta, yellow, black, and alpha components
- [deviceRGB](devicergb.md): Device-dependent color space with red, green, blue, and alpha components.
- [deviceWhite](devicewhite.md): Device-dependent color space with white and alpha components (pure white is 1.0)
- [pattern](pattern.md): Pattern image (tiled)

# NSNamedColorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Catalog name and color name components

## Declaration

```objectivec
extern NSColorSpaceName NSNamedColorSpace;
```

<a id="Discussion"></a>

## Discussion

The components of this color space are indexes into lists or catalogs of prepared colors. The catalogs of named colors come with lookup tables that are able to generate the correct color on a given device.

## See Also

### Color Space Names

- [NSCalibratedRGBColorSpace](calibratedrgb.md): Calibrated color space with red, green, blue, and alpha components.
- [NSCalibratedWhiteColorSpace](calibratedwhite.md): Calibrated color space with white and alpha components (pure white is 1.0)
- [NSCustomColorSpace](custom.md): Custom `NSColorSpace` object and floating-point components describing a color in that space
- [NSDeviceCMYKColorSpace](devicecmyk.md): Device-dependent color space with cyan, magenta, yellow, black, and alpha components
- [NSDeviceRGBColorSpace](devicergb.md): Device-dependent color space with red, green, blue, and alpha components.
- [NSDeviceWhiteColorSpace](devicewhite.md): Device-dependent color space with white and alpha components (pure white is 1.0)
- [NSPatternColorSpace](pattern.md): Pattern image (tiled)
