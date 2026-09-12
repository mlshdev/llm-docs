> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor](https://developer.apple.com/documentation/appkit/nscolor)

# NSColor (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that stores color data and sometimes opacity (alpha value).

## Declaration

```swift
class NSColor
```

<a id="overview"></a>

## Overview

Many methods in AppKit require you to specify color data using an [NSColor](nscolor.md) object; when drawing you use them to set the current fill and stroke colors. Color objects are immutable and thread-safe. You can create color objects in many ways:

- Load colors from an asset catalog. Colors created from assets can adapt automatically to system appearance changes.
- Use the semantic colors for custom UI elements, so that they match the appearance of other AppKit views; see [UI element colors](ui-element-colors.md).
- Use the adaptable system colors, such as [systemBlue](nscolor/systemblue.md), when you want a specific tint that looks correct in both light and dark environments.
- Create a color object from another object, such as a Core Graphics representation of a color, or a Core Image color.
- Create a color from an [NSImage](nsimage.md) object, and paint a repeating pattern instead of using a solid color.
- Create a color by applying a transform to another [NSColor](nscolor.md) object. For example, you might perform a blend operation between two colors, or you might create a color that represents the same color, but in a different color space.
- Create custom colors using raw component values, and a variety of color spaces, when you need to represent user-specified colors.

For user-specified colors, you can also display a color panel and let the user specify the color. For information about color panels, see [NSColorPanel](nscolorpanel.md).

<a id="Color-and-color-spaces"></a>

### Color and color spaces

A color object is typically represented internally as a Core Graphics color ([CGColor](https://developer.apple.com/documentation/coregraphics/cgcolor)) in a Core Graphics color space ([CGColorSpace](https://developer.apple.com/documentation/coregraphics/cgcolorspace)). Colors can also be created in extended color spaces:

- [extendedSRGB](nscolorspace/extendedsrgb.md)
- [extendedGenericGamma22Gray](nscolorspace/extendedgenericgamma22gray.md)

When you need to worry about color spaces, use extended color spaces as working color spaces. When you need to worry about representing that color as closely as possible in a specific color space, convert the color from the extended color space into the target color space.

When working in an extended color space, color values are not clamped to fit inside the color gamut, meaning that component values may be less than `0.0` or greater than `1.0`. When displayed on an sRGB display, such colors are outside the gamut and won’t render accurately. However, extended color spaces are useful as working color spaces when you want a pixel format and representation that other color spaces can be easily converted into. For example, a color in the Display P3 color space can convert to an extended sRGB format, even if it isn’t within the sRGB color gamut. While some of the converted color’s values are outside of the 0-1.0 range, the color renders correctly when viewed on a device with a P3 display gamut.

It is a programmer error to access color components of a color space that the `NSColor` object does not support. For example, you cannot access the [redComponent](nscolor/redcomponent.md) property and [getRed(\_:green:blue:alpha:)](nscolor/getred%28__green_blue_alpha_%29.md) method on a color that uses the CMYK color space. Further, the [getComponents(\_:)](nscolor/getcomponents%28__%29.md) method and [numberOfComponents](nscolor/numberofcomponents.md) property work only in color spaces that have individual components. As such, they return the components of color objects as individual floating-point values regardless of whether they’re based on [NSColorSpace](nscolorspace.md) objects or named color spaces. However, older component-fetching methods such as [getRed(\_:green:blue:alpha:)](nscolor/getred%28__green_blue_alpha_%29.md) are effective only on color objects based on named color spaces.

If you have a color object in an unknown color space and you want to extract its components, convert the color object to a known color space and then use the component accessor methods of that color space.

For design guidance, see Human Interface Guidelines \> [Color](https://developer.apple.com/design/human-interface-guidelines/color/).

## Topics

### Getting and creating colors

Get one of the AppKit-defined colors, load colors from asset catalogs, or create custom colors for your app.

- [UI element colors](ui-element-colors.md): Retrieve standard color objects for use with windows, controls, labels, text, selections and other content in your app.
- [Standard colors](standard-colors.md): Retrieve the standard color objects for common colors like red, blue, green, black, white, and more.
- [Color creation](color-creation.md): Load colors from asset catalogs, and create colors from raw component values, such as those used by grayscale, RGB, HSB, and CMYK colors.

### Applying specific appearances to colors

- [withSystemEffect(\_:)](nscolor/withsystemeffect%28__%29.md): Returns a new color object that represents the current color modified to include the specified visual effect.
- [NSColor.SystemEffect](nscolor/systemeffect.md): Constants for user interactions that change the appearance of a view or control.

### Transforming existing color objects

- [usingColorSpace(\_:)](nscolor/usingcolorspace%28__%29.md): Creates a new color object representing the color of the current color object in the specified color space.
- [blended(withFraction:of:)](nscolor/blended%28withfraction_of_%29.md): Creates a new color object whose component values are a weighted sum of the current color object and the specified color object’s.
- [withAlphaComponent(\_:)](nscolor/withalphacomponent%28__%29.md): Creates a new color object that has the same color space and component values as the current color object, but the specified alpha component.
- [highlight(withLevel:)](nscolor/highlight%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the highlight color.
- [shadow(withLevel:)](nscolor/shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.

### Copying and pasting color Information

- [init(from:)](nscolor/init%28from_%29.md): Creates a color object from color data currently on the pasteboard.
- [write(to:)](nscolor/write%28to_%29.md): Writes the color object’s data to the specified pasteboard.

### Retrieving component values from color objects

- [getCyan(\_:magenta:yellow:black:alpha:)](nscolor/getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getHue(\_:saturation:brightness:alpha:)](nscolor/gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getRed(\_:green:blue:alpha:)](nscolor/getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getWhite(\_:alpha:)](nscolor/getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [numberOfComponents](nscolor/numberofcomponents.md): The number of components in the color.
- [getComponents(\_:)](nscolor/getcomponents%28__%29.md): Returns the components of the color as an array.

### Retrieving individual components

- [alphaComponent](nscolor/alphacomponent.md): The alpha (opacity) component value of the color.
- [whiteComponent](nscolor/whitecomponent.md): The white component value of the color.
- [redComponent](nscolor/redcomponent.md): The red component value of the color.
- [greenComponent](nscolor/greencomponent.md): The green component value of the color.
- [blueComponent](nscolor/bluecomponent.md): The blue component value of the color.
- [cyanComponent](nscolor/cyancomponent.md): The cyan component value of the color.
- [magentaComponent](nscolor/magentacomponent.md): The magenta component value of the color.
- [yellowComponent](nscolor/yellowcomponent.md): The yellow component value of the color.
- [blackComponent](nscolor/blackcomponent.md): The black component value of the color.
- [hueComponent](nscolor/huecomponent.md): The hue component value of the color.
- [saturationComponent](nscolor/saturationcomponent.md): The saturation component value of the color.
- [brightnessComponent](nscolor/brightnesscomponent.md): The brightness component value of the color.
- [catalogNameComponent](nscolor/catalognamecomponent.md): The catalog containing the color’s name.
- [localizedCatalogNameComponent](nscolor/localizedcatalognamecomponent.md): The localized version of the catalog name containing the color.
- [colorNameComponent](nscolor/colornamecomponent.md): The name of the color.
- [localizedColorNameComponent](nscolor/localizedcolornamecomponent.md): The localized version of the color name.

### Working with the color space

- [type](nscolor/type.md): The type of the color object.
- [usingType(\_:)](nscolor/usingtype%28__%29.md): Returns a version of the color object that is compatible with the specified color type.
- [NSColor.ColorType](nscolor/colortype.md): Constants that indicate the color’s type, and which methods may be called on the color object.
- [colorSpace](nscolor/colorspace.md): The color space associated with the color.
- [NSColorSpaceName](nscolorspacename.md): Constants that specify color space names.

### Supporting high dynamic range (HDR) colors

- [linearExposure](nscolor/linearexposure.md): For HDR colors, the linear brightness multiplier that was applied when generating the color. Colors created with an exposure by NSColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, NSColors generated in a similar fashion return a linearExposure of 1.0.
- [standardDynamicRange](nscolor/standarddynamicrange.md): In some cases it is useful to recover the color that was base the SDR color that was exposed to generate an HDR color. If a color’s `linearExposure` is \> 1, then this will return the base SDR color. If the color is not an HDR color, this will return `self`.
- [applyingContentHeadroom(\_:)](nscolor/applyingcontentheadroom%28__%29.md): Reinterpret the color by applying a new `contentHeadroom` without changing the color components. Changing the `contentHeadroom` redefines the color relative to a different peak white, changing its behavior under tone mapping and the result of calling `standardDynamicRangeColor`. The new color will have a `contentHeadroom` \>= 1.0. If called on a color with a color space that does not support extended range, or does not have an equivalent extended range counterpart, this will return `self`.

### Retrieving core graphics color information

- [cgColor](nscolor/cgcolor.md): The Core Graphics color object corresponding to the color.

### Drawing with colors

- [drawSwatch(in:)](nscolor/drawswatch%28in_%29.md): Draws the current color in the specified rectangle.
- [set()](nscolor/set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.
- [setFill()](nscolor/setfill%28%29.md): Sets the fill color of subsequent drawing to the color object’s color.
- [setStroke()](nscolor/setstroke%28%29.md): Sets the stroke color of subsequent drawing to the color object’s color.

### Determining when colors change

- [systemColorsDidChangeNotification](nscolor/systemcolorsdidchangenotification.md): Sent when the system colors have changed, such as through a system control panel interface.

### Deprecated

- [ignoresAlpha](nscolor/ignoresalpha.md): Deprecated. A Boolean value that indicates whether the app supports alpha.
- [colorSpaceName](nscolor/colorspacename.md): Deprecated. The name of the color space associated with the color.
- [usingColorSpaceName(\_:)](nscolor/usingcolorspacename%28__%29.md): Deprecated. Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.
- [usingColorSpaceName(\_:device:)](nscolor/usingcolorspacename%28__device_%29.md): Deprecated. Creates a new color object for the same color, but in the specified color space and specific to the provided device.
- [currentControlTintDidChangeNotification](nscolor/currentcontroltintdidchangenotification.md): Deprecated. Sent after the user changes control tint preference.

### Structures

- [NSColor.SystemColorsDidChangeMessage](nscolor/systemcolorsdidchangemessage.md)

### Initializers

- [init(CGColor:)](nscolor/init%28cgcolor_%29-3pxs.md)
- [init(SRGBRed:green:blue:alpha:)](nscolor/init%28srgbred_green_blue_alpha_%29-3vuej.md)
- [init(ciColor:)](nscolor/init%28cicolor_%29-1jbdc.md)
- [init(forControlTint:)](nscolor/init%28forcontroltint_%29.md): Deprecated.
- [init(fromPasteboard:)](nscolor/init%28frompasteboard_%29.md)
- [init(pasteboardPropertyList:ofType:)](nscolor/init%28pasteboardpropertylist_oftype_%29.md)

### Type Properties

- [quinaryLabelColor](nscolor/quinarylabelcolor.md)

### Default Implementations

- [NSColor Implementations](nscolor/nscolor-implementations.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityColor](nsaccessibilitycolor.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSPasteboardReading](nspasteboardreading.md)
- [NSPasteboardWriting](nspasteboardwriting.md)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](https://developer.apple.com/documentation/coretransferable/transferable)

## See Also

### Colors

- [NSColorList](nscolorlist.md): An ordered list of color objects, identified by keys.
- [NSColorSpace](nscolorspace.md): An object that represents a custom color space.

# NSColor (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that stores color data and sometimes opacity (alpha value).

## Declaration

```objectivec
@interface NSColor : NSObject
```

<a id="overview"></a>

## Overview

Many methods in AppKit require you to specify color data using an [NSColor](nscolor.md) object; when drawing you use them to set the current fill and stroke colors. Color objects are immutable and thread-safe. You can create color objects in many ways:

- Load colors from an asset catalog. Colors created from assets can adapt automatically to system appearance changes.
- Use the semantic colors for custom UI elements, so that they match the appearance of other AppKit views; see [UI element colors](ui-element-colors.md).
- Use the adaptable system colors, such as [systemBlueColor](nscolor/systemblue.md), when you want a specific tint that looks correct in both light and dark environments.
- Create a color object from another object, such as a Core Graphics representation of a color, or a Core Image color.
- Create a color from an [NSImage](nsimage.md) object, and paint a repeating pattern instead of using a solid color.
- Create a color by applying a transform to another [NSColor](nscolor.md) object. For example, you might perform a blend operation between two colors, or you might create a color that represents the same color, but in a different color space.
- Create custom colors using raw component values, and a variety of color spaces, when you need to represent user-specified colors.

For user-specified colors, you can also display a color panel and let the user specify the color. For information about color panels, see [NSColorPanel](nscolorpanel.md).

<a id="Color-and-color-spaces"></a>

### Color and color spaces

A color object is typically represented internally as a Core Graphics color ([CGColorRef](https://developer.apple.com/documentation/coregraphics/cgcolor)) in a Core Graphics color space ([CGColorSpaceRef](https://developer.apple.com/documentation/coregraphics/cgcolorspace)). Colors can also be created in extended color spaces:

- [extendedSRGBColorSpace](nscolorspace/extendedsrgb.md)
- [extendedGenericGamma22GrayColorSpace](nscolorspace/extendedgenericgamma22gray.md)

When you need to worry about color spaces, use extended color spaces as working color spaces. When you need to worry about representing that color as closely as possible in a specific color space, convert the color from the extended color space into the target color space.

When working in an extended color space, color values are not clamped to fit inside the color gamut, meaning that component values may be less than `0.0` or greater than `1.0`. When displayed on an sRGB display, such colors are outside the gamut and won’t render accurately. However, extended color spaces are useful as working color spaces when you want a pixel format and representation that other color spaces can be easily converted into. For example, a color in the Display P3 color space can convert to an extended sRGB format, even if it isn’t within the sRGB color gamut. While some of the converted color’s values are outside of the 0-1.0 range, the color renders correctly when viewed on a device with a P3 display gamut.

It is a programmer error to access color components of a color space that the `NSColor` object does not support. For example, you cannot access the [redComponent](nscolor/redcomponent.md) property and [getRed:green:blue:alpha:](nscolor/getred%28__green_blue_alpha_%29.md) method on a color that uses the CMYK color space. Further, the [getComponents:](nscolor/getcomponents%28__%29.md) method and [numberOfComponents](nscolor/numberofcomponents.md) property work only in color spaces that have individual components. As such, they return the components of color objects as individual floating-point values regardless of whether they’re based on [NSColorSpace](nscolorspace.md) objects or named color spaces. However, older component-fetching methods such as [getRed:green:blue:alpha:](nscolor/getred%28__green_blue_alpha_%29.md) are effective only on color objects based on named color spaces.

If you have a color object in an unknown color space and you want to extract its components, convert the color object to a known color space and then use the component accessor methods of that color space.

For design guidance, see Human Interface Guidelines \> [Color](https://developer.apple.com/design/human-interface-guidelines/color/).

## Topics

### Getting and creating colors

Get one of the AppKit-defined colors, load colors from asset catalogs, or create custom colors for your app.

- [UI element colors](ui-element-colors.md): Retrieve standard color objects for use with windows, controls, labels, text, selections and other content in your app.
- [Standard colors](standard-colors.md): Retrieve the standard color objects for common colors like red, blue, green, black, white, and more.
- [Color creation](color-creation.md): Load colors from asset catalogs, and create colors from raw component values, such as those used by grayscale, RGB, HSB, and CMYK colors.

### Applying specific appearances to colors

- [colorWithSystemEffect:](nscolor/withsystemeffect%28__%29.md): Returns a new color object that represents the current color modified to include the specified visual effect.
- [NSColorSystemEffect](nscolor/systemeffect.md): Constants for user interactions that change the appearance of a view or control.

### Transforming existing color objects

- [colorUsingColorSpace:](nscolor/usingcolorspace%28__%29.md): Creates a new color object representing the color of the current color object in the specified color space.
- [blendedColorWithFraction:ofColor:](nscolor/blended%28withfraction_of_%29.md): Creates a new color object whose component values are a weighted sum of the current color object and the specified color object’s.
- [colorWithAlphaComponent:](nscolor/withalphacomponent%28__%29.md): Creates a new color object that has the same color space and component values as the current color object, but the specified alpha component.
- [highlightWithLevel:](nscolor/highlight%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the highlight color.
- [shadowWithLevel:](nscolor/shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.

### Copying and pasting color Information

- [colorFromPasteboard:](nscolor/init%28from_%29.md): Creates a color object from color data currently on the pasteboard.
- [writeToPasteboard:](nscolor/write%28to_%29.md): Writes the color object’s data to the specified pasteboard.

### Retrieving component values from color objects

- [getCyan:magenta:yellow:black:alpha:](nscolor/getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getHue:saturation:brightness:alpha:](nscolor/gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getRed:green:blue:alpha:](nscolor/getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getWhite:alpha:](nscolor/getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [numberOfComponents](nscolor/numberofcomponents.md): The number of components in the color.
- [getComponents:](nscolor/getcomponents%28__%29.md): Returns the components of the color as an array.

### Retrieving individual components

- [alphaComponent](nscolor/alphacomponent.md): The alpha (opacity) component value of the color.
- [whiteComponent](nscolor/whitecomponent.md): The white component value of the color.
- [redComponent](nscolor/redcomponent.md): The red component value of the color.
- [greenComponent](nscolor/greencomponent.md): The green component value of the color.
- [blueComponent](nscolor/bluecomponent.md): The blue component value of the color.
- [cyanComponent](nscolor/cyancomponent.md): The cyan component value of the color.
- [magentaComponent](nscolor/magentacomponent.md): The magenta component value of the color.
- [yellowComponent](nscolor/yellowcomponent.md): The yellow component value of the color.
- [blackComponent](nscolor/blackcomponent.md): The black component value of the color.
- [hueComponent](nscolor/huecomponent.md): The hue component value of the color.
- [saturationComponent](nscolor/saturationcomponent.md): The saturation component value of the color.
- [brightnessComponent](nscolor/brightnesscomponent.md): The brightness component value of the color.
- [catalogNameComponent](nscolor/catalognamecomponent.md): The catalog containing the color’s name.
- [localizedCatalogNameComponent](nscolor/localizedcatalognamecomponent.md): The localized version of the catalog name containing the color.
- [colorNameComponent](nscolor/colornamecomponent.md): The name of the color.
- [localizedColorNameComponent](nscolor/localizedcolornamecomponent.md): The localized version of the color name.

### Working with the color space

- [type](nscolor/type.md): The type of the color object.
- [colorUsingType:](nscolor/usingtype%28__%29.md): Returns a version of the color object that is compatible with the specified color type.
- [NSColorType](nscolor/colortype.md): Constants that indicate the color’s type, and which methods may be called on the color object.
- [colorSpace](nscolor/colorspace.md): The color space associated with the color.
- [NSColorSpaceName](nscolorspacename.md): Constants that specify color space names.

### Supporting high dynamic range (HDR) colors

- [linearExposure](nscolor/linearexposure.md): For HDR colors, the linear brightness multiplier that was applied when generating the color. Colors created with an exposure by NSColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, NSColors generated in a similar fashion return a linearExposure of 1.0.
- [standardDynamicRangeColor](nscolor/standarddynamicrange.md): In some cases it is useful to recover the color that was base the SDR color that was exposed to generate an HDR color. If a color’s `linearExposure` is \> 1, then this will return the base SDR color. If the color is not an HDR color, this will return `self`.
- [colorByApplyingContentHeadroom:](nscolor/applyingcontentheadroom%28__%29.md): Reinterpret the color by applying a new `contentHeadroom` without changing the color components. Changing the `contentHeadroom` redefines the color relative to a different peak white, changing its behavior under tone mapping and the result of calling `standardDynamicRangeColor`. The new color will have a `contentHeadroom` \>= 1.0. If called on a color with a color space that does not support extended range, or does not have an equivalent extended range counterpart, this will return `self`.

### Retrieving core graphics color information

- [CGColor](nscolor/cgcolor.md): The Core Graphics color object corresponding to the color.

### Drawing with colors

- [drawSwatchInRect:](nscolor/drawswatch%28in_%29.md): Draws the current color in the specified rectangle.
- [set](nscolor/set%28%29.md): Sets the color of subsequent drawing to the color that the color object represents.
- [setFill](nscolor/setfill%28%29.md): Sets the fill color of subsequent drawing to the color object’s color.
- [setStroke](nscolor/setstroke%28%29.md): Sets the stroke color of subsequent drawing to the color object’s color.

### Determining when colors change

- [NSSystemColorsDidChangeNotification](nscolor/systemcolorsdidchangenotification.md): Sent when the system colors have changed, such as through a system control panel interface.

### Getting the standard grayscale colors

- [NSWhite](nswhite.md): A constant that specifies the white shade in the 2-bit deep grayscale color space.
- [NSLightGray](nslightgray.md): A constant that specifies the light gray shade in the 2-bit deep grayscale color space.
- [NSDarkGray](nsdarkgray.md): A constant that specifies the dark gray shade in the 2-bit deep grayscale color space.
- [NSBlack](nsblack.md): A constant that specifies the black shade in the 2-bit deep grayscale color space.

### Supporting old versions of AppKit

- [NSAppKitVersionNumberWithPatternColorLeakFix](nsappkitversionnumberwithpatterncolorleakfix.md): The specific version of the AppKit framework from OS X 10.1 that correctly autoreleases color objects.

### Deprecated

- [ignoresAlpha](nscolor/ignoresalpha.md): Deprecated. A Boolean value that indicates whether the app supports alpha.
- [colorSpaceName](nscolor/colorspacename.md): Deprecated. The name of the color space associated with the color.
- [colorUsingColorSpaceName:](nscolor/usingcolorspacename%28__%29.md): Deprecated. Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.
- [colorUsingColorSpaceName:device:](nscolor/usingcolorspacename%28__device_%29.md): Deprecated. Creates a new color object for the same color, but in the specified color space and specific to the provided device.
- [NSControlTintDidChangeNotification](nscolor/currentcontroltintdidchangenotification.md): Deprecated. Sent after the user changes control tint preference.

### Type Properties

- [quinaryLabelColor](nscolor/quinarylabelcolor.md)

### Type Methods

- [colorWithCIColor:](nscolor/init%28cicolor_%29-1jbdc.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSAccessibilityColor](nsaccessibilitycolor.md)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSPasteboardReading](nspasteboardreading.md)
- [NSPasteboardWriting](nspasteboardwriting.md)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Colors

- [NSColorList](nscolorlist.md): An ordered list of color objects, identified by keys.
- [NSColorSpace](nscolorspace.md): An object that represents a custom color space.
