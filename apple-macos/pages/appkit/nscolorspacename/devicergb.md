> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspacename/devicergb](https://developer.apple.com/documentation/appkit/nscolorspacename/devicergb)

# deviceRGB (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Device-dependent color space with red, green, blue, and alpha components.

## Declaration

```swift
static let deviceRGB: NSColorSpaceName
```

<a id="Discussion"></a>

## Discussion

You can also create a color with HSB (hue, saturation, brightness) and alpha components and can extract these components.

## See Also

### Color Space Names

- [calibratedRGB](calibratedrgb.md): Calibrated color space with red, green, blue, and alpha components.
- [calibratedWhite](calibratedwhite.md): Calibrated color space with white and alpha components (pure white is 1.0)
- [custom](custom.md): Custom `NSColorSpace` object and floating-point components describing a color in that space
- [deviceCMYK](devicecmyk.md): Device-dependent color space with cyan, magenta, yellow, black, and alpha components
- [deviceWhite](devicewhite.md): Device-dependent color space with white and alpha components (pure white is 1.0)
- [named](named.md): Catalog name and color name components
- [pattern](pattern.md): Pattern image (tiled)

# NSDeviceRGBColorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Device-dependent color space with red, green, blue, and alpha components.

## Declaration

```objectivec
extern NSColorSpaceName NSDeviceRGBColorSpace;
```

<a id="Discussion"></a>

## Discussion

You can also create a color with HSB (hue, saturation, brightness) and alpha components and can extract these components.

## See Also

### Color Space Names

- [NSCalibratedRGBColorSpace](calibratedrgb.md): Calibrated color space with red, green, blue, and alpha components.
- [NSCalibratedWhiteColorSpace](calibratedwhite.md): Calibrated color space with white and alpha components (pure white is 1.0)
- [NSCustomColorSpace](custom.md): Custom `NSColorSpace` object and floating-point components describing a color in that space
- [NSDeviceCMYKColorSpace](devicecmyk.md): Device-dependent color space with cyan, magenta, yellow, black, and alpha components
- [NSDeviceWhiteColorSpace](devicewhite.md): Device-dependent color space with white and alpha components (pure white is 1.0)
- [NSNamedColorSpace](named.md): Catalog name and color name components
- [NSPatternColorSpace](pattern.md): Pattern image (tiled)
