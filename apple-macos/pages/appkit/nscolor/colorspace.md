> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/colorspace](https://developer.apple.com/documentation/appkit/nscolor/colorspace)

# colorSpace (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The color space associated with the color.

## Declaration

```swift
var colorSpace: NSColorSpace { get }
```

<a id="Discussion"></a>

## Discussion

Access this property only for colors that have an associated color space—specifically, colors not created by name or using a pattern image. Accessing it for other color types raises an exception. If you are unsure about a color object, convert it to an equivalent [NSColorSpace](../nscolorspace.md)-based object before calling this method.

It is safe to access this property for color objects created with the color space names [calibratedWhite](../nscolorspacename/calibratedwhite.md), [NSCalibratedBlackColorSpace](../nscalibratedblackcolorspace.md), [calibratedRGB](../nscolorspacename/calibratedrgb.md), [deviceWhite](../nscolorspacename/devicewhite.md), [NSDeviceBlackColorSpace](../nsdeviceblackcolorspace.md), [deviceRGB](../nscolorspacename/devicergb.md), [deviceCMYK](../nscolorspacename/devicecmyk.md), or [custom](../nscolorspacename/custom.md)—or with the [NSColorSpace](../nscolorspace.md) class methods corresponding to these names.

## See Also

### Related Documentation

- [getComponents(\_:)](getcomponents%28__%29.md): Returns the components of the color as an array.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.

### Working with the color space

- [type](type.md): The type of the color object.
- [usingType(\_:)](usingtype%28__%29.md): Returns a version of the color object that is compatible with the specified color type.
- [NSColor.ColorType](colortype.md): Constants that indicate the color’s type, and which methods may be called on the color object.
- [NSColorSpaceName](../nscolorspacename.md): Constants that specify color space names.

# colorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The color space associated with the color.

## Declaration

```objectivec
@property (strong, readonly) NSColorSpace * colorSpace;
```

<a id="Discussion"></a>

## Discussion

Access this property only for colors that have an associated color space—specifically, colors not created by name or using a pattern image. Accessing it for other color types raises an exception. If you are unsure about a color object, convert it to an equivalent [NSColorSpace](../nscolorspace.md)-based object before calling this method.

It is safe to access this property for color objects created with the color space names [NSCalibratedWhiteColorSpace](../nscolorspacename/calibratedwhite.md), [NSCalibratedBlackColorSpace](../nscalibratedblackcolorspace.md), [NSCalibratedRGBColorSpace](../nscolorspacename/calibratedrgb.md), [NSDeviceWhiteColorSpace](../nscolorspacename/devicewhite.md), [NSDeviceBlackColorSpace](../nsdeviceblackcolorspace.md), [NSDeviceRGBColorSpace](../nscolorspacename/devicergb.md), [NSDeviceCMYKColorSpace](../nscolorspacename/devicecmyk.md), or [NSCustomColorSpace](../nscolorspacename/custom.md)—or with the [NSColorSpace](../nscolorspace.md) class methods corresponding to these names.

## See Also

### Related Documentation

- [getComponents:](getcomponents%28__%29.md): Returns the components of the color as an array.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.

### Working with the color space

- [type](type.md): The type of the color object.
- [colorUsingType:](usingtype%28__%29.md): Returns a version of the color object that is compatible with the specified color type.
- [NSColorType](colortype.md): Constants that indicate the color’s type, and which methods may be called on the color object.
- [NSColorSpaceName](../nscolorspacename.md): Constants that specify color space names.
