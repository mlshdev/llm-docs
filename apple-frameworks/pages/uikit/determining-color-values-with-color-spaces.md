> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/determining-color-values-with-color-spaces](https://developer.apple.com/documentation/uikit/determining-color-values-with-color-spaces)

# Determining color values with color spaces (Swift)

**Framework:** UIKit  
**Kind:** Article

Change the system’s interpretation of a color value for display by selecting a color space.

<a id="overview"></a>

## Overview

A [UIColor](uicolor.md) object typically stores its color value as a Core Graphics color ([CGColor](../coregraphics/cgcolor.md)) in a Core Graphics color space ([CGColorSpace](../coregraphics/cgcolorspace.md)). When creating a custom color, the underlying color space and the range of values for each color component vary based on the iOS version.

<a id="Create-colors-with-color-spaces"></a>

### Create colors with color spaces

For apps running on iOS 9 and earlier, colors use one of two color spaces:

- Device-dependent Gray
- Device-dependent RGB

These device color spaces correspond closely to the display characteristics of the sRGB color space. Component values within these color spaces are in the range `0.0` to `1.0`. When you create a color, the color object clamps values to ensure they fit within this range.

<a id="Use-extended-color-spaces"></a>

### Use extended color spaces

For apps running on iOS 10 or later, colors use the following extended color spaces:

- [extendedGray](../coregraphics/cgcolorspace/extendedgray.md)
- [extendedSRGB](../coregraphics/cgcolorspace/extendedsrgb.md)

In the extended color spaces, [UIColor](uicolor.md) doesn’t clamp values to fit inside the color gamut. Component values may be less than `0.0` or greater than `1.0`. On an sRGB display, such colors are outside the gamut and won’t render accurately. However, the extended color spaces are useful when you want a pixel format and representation that extended color spaces can convert into other color spaces. For example, you can still convert color in the display P3 color space to an extended sRGB format, even if that color isn’t within the sRGB color gamut. When you convert such a color, some of its values fall outside the `0.0` to `1.0` range. However, the color still renders correctly on a device with a P3 display gamut.

When employing custom colors, use extended color spaces to store your color values. When representing a color as closely as possible, convert the color from the extended color space into the target color space.

## See Also

### Getting the color information

- [cgColor](uicolor/cgcolor.md): The Quartz color that corresponds to the color object.
- [ciColor](uicolor/cicolor.md): The Core Image color that corresponds to the color object.
- [getHue(\_:saturation:brightness:alpha:)](uicolor/gethue%28__saturation_brightness_alpha_%29.md): Returns the components that form the color in the HSB color space.
- [getRed(\_:green:blue:alpha:)](uicolor/getred%28__green_blue_alpha_%29.md): Returns the components that form the color in the RGB color space.
- [getWhite(\_:alpha:)](uicolor/getwhite%28__alpha_%29.md): Returns the grayscale components of the color.
- [linearExposure](uicolor/linearexposure.md): The linear brightness multiplier that was applied when generating this color. Colors created with an exposure by UIColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, UIColors generated in a similar fashion return a linearExposure of 1.0.
- [accessibilityName](uicolor/accessibilityname.md): A localized description of the color for accessibility attributes.

# Determining color values with color spaces (Objective-C)

**Framework:** UIKit  
**Kind:** Article

Change the system’s interpretation of a color value for display by selecting a color space.

<a id="overview"></a>

## Overview

A [UIColor](uicolor.md) object typically stores its color value as a Core Graphics color ([CGColorRef](../coregraphics/cgcolor.md)) in a Core Graphics color space ([CGColorSpaceRef](../coregraphics/cgcolorspace.md)). When creating a custom color, the underlying color space and the range of values for each color component vary based on the iOS version.

<a id="Create-colors-with-color-spaces"></a>

### Create colors with color spaces

For apps running on iOS 9 and earlier, colors use one of two color spaces:

- Device-dependent Gray
- Device-dependent RGB

These device color spaces correspond closely to the display characteristics of the sRGB color space. Component values within these color spaces are in the range `0.0` to `1.0`. When you create a color, the color object clamps values to ensure they fit within this range.

<a id="Use-extended-color-spaces"></a>

### Use extended color spaces

For apps running on iOS 10 or later, colors use the following extended color spaces:

- [kCGColorSpaceExtendedGray](../coregraphics/cgcolorspace/extendedgray.md)
- [kCGColorSpaceExtendedSRGB](../coregraphics/cgcolorspace/extendedsrgb.md)

In the extended color spaces, [UIColor](uicolor.md) doesn’t clamp values to fit inside the color gamut. Component values may be less than `0.0` or greater than `1.0`. On an sRGB display, such colors are outside the gamut and won’t render accurately. However, the extended color spaces are useful when you want a pixel format and representation that extended color spaces can convert into other color spaces. For example, you can still convert color in the display P3 color space to an extended sRGB format, even if that color isn’t within the sRGB color gamut. When you convert such a color, some of its values fall outside the `0.0` to `1.0` range. However, the color still renders correctly on a device with a P3 display gamut.

When employing custom colors, use extended color spaces to store your color values. When representing a color as closely as possible, convert the color from the extended color space into the target color space.

## See Also

### Getting the color information

- [CGColor](uicolor/cgcolor.md): The Quartz color that corresponds to the color object.
- [CIColor](uicolor/cicolor.md): The Core Image color that corresponds to the color object.
- [getHue:saturation:brightness:alpha:](uicolor/gethue%28__saturation_brightness_alpha_%29.md): Returns the components that form the color in the HSB color space.
- [getRed:green:blue:alpha:](uicolor/getred%28__green_blue_alpha_%29.md): Returns the components that form the color in the RGB color space.
- [getWhite:alpha:](uicolor/getwhite%28__alpha_%29.md): Returns the grayscale components of the color.
- [linearExposure](uicolor/linearexposure.md): The linear brightness multiplier that was applied when generating this color. Colors created with an exposure by UIColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, UIColors generated in a similar fashion return a linearExposure of 1.0.
- [accessibilityName](uicolor/accessibilityname.md): A localized description of the color for accessibility attributes.
