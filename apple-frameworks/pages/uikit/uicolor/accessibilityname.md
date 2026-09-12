> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/accessibilityname](https://developer.apple.com/documentation/uikit/uicolor/accessibilityname)

# accessibilityName (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A localized description of the color for accessibility attributes.

## Declaration

```swift
var accessibilityName: String { get }
```

## See Also

### Getting the color information

- [Determining color values with color spaces](../determining-color-values-with-color-spaces.md): Change the system’s interpretation of a color value for display by selecting a color space.
- [cgColor](cgcolor.md): The Quartz color that corresponds to the color object.
- [ciColor](cicolor.md): The Core Image color that corresponds to the color object.
- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the components that form the color in the HSB color space.
- [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md): Returns the components that form the color in the RGB color space.
- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale components of the color.
- [linearExposure](linearexposure.md): The linear brightness multiplier that was applied when generating this color. Colors created with an exposure by UIColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, UIColors generated in a similar fashion return a linearExposure of 1.0.

# accessibilityName (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A localized description of the color for accessibility attributes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * accessibilityName;
```

## See Also

### Getting the color information

- [Determining color values with color spaces](../determining-color-values-with-color-spaces.md): Change the system’s interpretation of a color value for display by selecting a color space.
- [CGColor](cgcolor.md): The Quartz color that corresponds to the color object.
- [CIColor](cicolor.md): The Core Image color that corresponds to the color object.
- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the components that form the color in the HSB color space.
- [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md): Returns the components that form the color in the RGB color space.
- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale components of the color.
- [linearExposure](linearexposure.md): The linear brightness multiplier that was applied when generating this color. Colors created with an exposure by UIColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, UIColors generated in a similar fashion return a linearExposure of 1.0.
