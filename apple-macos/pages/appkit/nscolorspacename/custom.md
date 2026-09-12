> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspacename/custom](https://developer.apple.com/documentation/appkit/nscolorspacename/custom)

# custom (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Custom `NSColorSpace` object and floating-point components describing a color in that space

## Declaration

```swift
static let custom: NSColorSpaceName
```

<a id="Discussion"></a>

## Discussion

A custom color-space object represents a color space that is not necessarily predefined by the Application Kit. See “[Working With Color Spaces](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DrawColor/Tasks/UsingColorSpaces.html#//apple_ref/doc/uid/TP40001807)” for information on creating custom color-space objects.

## See Also

### Color Space Names

- [calibratedRGB](calibratedrgb.md): Calibrated color space with red, green, blue, and alpha components.
- [calibratedWhite](calibratedwhite.md): Calibrated color space with white and alpha components (pure white is 1.0)
- [deviceCMYK](devicecmyk.md): Device-dependent color space with cyan, magenta, yellow, black, and alpha components
- [deviceRGB](devicergb.md): Device-dependent color space with red, green, blue, and alpha components.
- [deviceWhite](devicewhite.md): Device-dependent color space with white and alpha components (pure white is 1.0)
- [named](named.md): Catalog name and color name components
- [pattern](pattern.md): Pattern image (tiled)

# NSCustomColorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Custom `NSColorSpace` object and floating-point components describing a color in that space

## Declaration

```objectivec
extern NSColorSpaceName NSCustomColorSpace;
```

<a id="Discussion"></a>

## Discussion

A custom color-space object represents a color space that is not necessarily predefined by the Application Kit. See “[Working With Color Spaces](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DrawColor/Tasks/UsingColorSpaces.html#//apple_ref/doc/uid/TP40001807)” for information on creating custom color-space objects.

## See Also

### Color Space Names

- [NSCalibratedRGBColorSpace](calibratedrgb.md): Calibrated color space with red, green, blue, and alpha components.
- [NSCalibratedWhiteColorSpace](calibratedwhite.md): Calibrated color space with white and alpha components (pure white is 1.0)
- [NSDeviceCMYKColorSpace](devicecmyk.md): Device-dependent color space with cyan, magenta, yellow, black, and alpha components
- [NSDeviceRGBColorSpace](devicergb.md): Device-dependent color space with red, green, blue, and alpha components.
- [NSDeviceWhiteColorSpace](devicewhite.md): Device-dependent color space with white and alpha components (pure white is 1.0)
- [NSNamedColorSpace](named.md): Catalog name and color name components
- [NSPatternColorSpace](pattern.md): Pattern image (tiled)
