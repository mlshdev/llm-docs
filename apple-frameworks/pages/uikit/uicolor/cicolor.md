> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/cicolor](https://developer.apple.com/documentation/uikit/uicolor/cicolor)

# ciColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The Core Image color that corresponds to the color object.

## Declaration

```swift
var ciColor: CIColor { get }
```

<a id="Discussion"></a>

## Discussion

This property throws an exception if the color object wasn’t initialized with a Core Image color.

The color object in this property doesn’t adapt automatically to Dark Mode changes. If you use it to set the color of interface elements, you must update that color yourself. You update that color when the [userInterfaceStyle](../uitraitcollection/userinterfacestyle.md) trait of the current trait collection changes.

For information on how to apply color information reliably, see [Supporting Dark Mode in your interface](../supporting-dark-mode-in-your-interface.md).

## See Also

### Getting the color information

- [Determining color values with color spaces](../determining-color-values-with-color-spaces.md): Change the system’s interpretation of a color value for display by selecting a color space.
- [cgColor](cgcolor.md): The Quartz color that corresponds to the color object.
- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the components that form the color in the HSB color space.
- [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md): Returns the components that form the color in the RGB color space.
- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale components of the color.
- [linearExposure](linearexposure.md): The linear brightness multiplier that was applied when generating this color. Colors created with an exposure by UIColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, UIColors generated in a similar fashion return a linearExposure of 1.0.
- [accessibilityName](accessibilityname.md): A localized description of the color for accessibility attributes.

# CIColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The Core Image color that corresponds to the color object.

## Declaration

```objectivec
@property (nonatomic, readonly) CIColor * CIColor;
```

<a id="Discussion"></a>

## Discussion

This property throws an exception if the color object wasn’t initialized with a Core Image color.

The color object in this property doesn’t adapt automatically to Dark Mode changes. If you use it to set the color of interface elements, you must update that color yourself. You update that color when the [userInterfaceStyle](../uitraitcollection/userinterfacestyle.md) trait of the current trait collection changes.

For information on how to apply color information reliably, see [Supporting Dark Mode in your interface](../supporting-dark-mode-in-your-interface.md).

## See Also

### Getting the color information

- [Determining color values with color spaces](../determining-color-values-with-color-spaces.md): Change the system’s interpretation of a color value for display by selecting a color space.
- [CGColor](cgcolor.md): The Quartz color that corresponds to the color object.
- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the components that form the color in the HSB color space.
- [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md): Returns the components that form the color in the RGB color space.
- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale components of the color.
- [linearExposure](linearexposure.md): The linear brightness multiplier that was applied when generating this color. Colors created with an exposure by UIColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, UIColors generated in a similar fashion return a linearExposure of 1.0.
- [accessibilityName](accessibilityname.md): A localized description of the color for accessibility attributes.
