> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspacename](https://developer.apple.com/documentation/appkit/nscolorspacename)

# NSColorSpaceName (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify color space names.

## Declaration

```swift
struct NSColorSpaceName
```

## Topics

### Color Space Names

- [calibratedRGB](nscolorspacename/calibratedrgb.md): Calibrated color space with red, green, blue, and alpha components.
- [calibratedWhite](nscolorspacename/calibratedwhite.md): Calibrated color space with white and alpha components (pure white is 1.0)
- [custom](nscolorspacename/custom.md): Custom `NSColorSpace` object and floating-point components describing a color in that space
- [deviceCMYK](nscolorspacename/devicecmyk.md): Device-dependent color space with cyan, magenta, yellow, black, and alpha components
- [deviceRGB](nscolorspacename/devicergb.md): Device-dependent color space with red, green, blue, and alpha components.
- [deviceWhite](nscolorspacename/devicewhite.md): Device-dependent color space with white and alpha components (pure white is 1.0)
- [named](nscolorspacename/named.md): Catalog name and color name components
- [pattern](nscolorspacename/pattern.md): Pattern image (tiled)

### Getting the Number of Components

- [numberOfColorComponents](nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.

### Initializers

- [init(rawValue:)](nscolorspacename/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with the color space

- [type](nscolor/type.md): The type of the color object.
- [usingType(\_:)](nscolor/usingtype%28__%29.md): Returns a version of the color object that is compatible with the specified color type.
- [NSColor.ColorType](nscolor/colortype.md): Constants that indicate the color’s type, and which methods may be called on the color object.
- [colorSpace](nscolor/colorspace.md): The color space associated with the color.

# NSColorSpaceName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that specify color space names.

## Declaration

```objectivec
typedef NSString * NSColorSpaceName;
```

## Topics

### Color Space Names

- [NSCalibratedRGBColorSpace](nscolorspacename/calibratedrgb.md): Calibrated color space with red, green, blue, and alpha components.
- [NSCalibratedWhiteColorSpace](nscolorspacename/calibratedwhite.md): Calibrated color space with white and alpha components (pure white is 1.0)
- [NSCustomColorSpace](nscolorspacename/custom.md): Custom `NSColorSpace` object and floating-point components describing a color in that space
- [NSDeviceCMYKColorSpace](nscolorspacename/devicecmyk.md): Device-dependent color space with cyan, magenta, yellow, black, and alpha components
- [NSDeviceRGBColorSpace](nscolorspacename/devicergb.md): Device-dependent color space with red, green, blue, and alpha components.
- [NSDeviceWhiteColorSpace](nscolorspacename/devicewhite.md): Device-dependent color space with white and alpha components (pure white is 1.0)
- [NSNamedColorSpace](nscolorspacename/named.md): Catalog name and color name components
- [NSPatternColorSpace](nscolorspacename/pattern.md): Pattern image (tiled)

### Getting the Number of Components

- [NSNumberOfColorComponents](nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.

## See Also

### Working with the color space

- [type](nscolor/type.md): The type of the color object.
- [colorUsingType:](nscolor/usingtype%28__%29.md): Returns a version of the color object that is compatible with the specified color type.
- [NSColorType](nscolor/colortype.md): Constants that indicate the color’s type, and which methods may be called on the color object.
- [colorSpace](nscolor/colorspace.md): The color space associated with the color.
