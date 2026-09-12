> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/getwhite(_:alpha:)](https://developer.apple.com/documentation/uikit/uicolor/getwhite(_:alpha:))

# getWhite(\_:alpha:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the grayscale components of the color.

## Declaration

```swift
func getWhite(_ white: UnsafeMutablePointer<CGFloat>?, alpha: UnsafeMutablePointer<CGFloat>?) -> Bool
```

## Parameters

- `white`: On return, the grayscale component of the color object. On applications linked for iOS 10 or later, an extended range gray color space specifies the grayscale component and can have any value. Values between `0.0` and `1.0` are inside the sRGB color gamut. On earlier versions of iOS, the specified value is always between `0.0` and `1.0`.
- `alpha`: On return, the opacity component of the color object, specified as a value between `0.0` and `1.0`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the color could be converted, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the color is in a compatible color space, it converts into grayscale format and its returned to your application. If the color isn’t in a compatible color space, the parameters don’t change.

## See Also

### Getting the color information

- [Determining color values with color spaces](../determining-color-values-with-color-spaces.md): Change the system’s interpretation of a color value for display by selecting a color space.
- [cgColor](cgcolor.md): The Quartz color that corresponds to the color object.
- [ciColor](cicolor.md): The Core Image color that corresponds to the color object.
- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the components that form the color in the HSB color space.
- [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md): Returns the components that form the color in the RGB color space.
- [linearExposure](linearexposure.md): The linear brightness multiplier that was applied when generating this color. Colors created with an exposure by UIColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, UIColors generated in a similar fashion return a linearExposure of 1.0.
- [accessibilityName](accessibilityname.md): A localized description of the color for accessibility attributes.

# getWhite:alpha: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the grayscale components of the color.

## Declaration

```objectivec
- (BOOL) getWhite:(CGFloat *) white alpha:(CGFloat *) alpha;
```

## Parameters

- `white`: On return, the grayscale component of the color object. On applications linked for iOS 10 or later, an extended range gray color space specifies the grayscale component and can have any value. Values between `0.0` and `1.0` are inside the sRGB color gamut. On earlier versions of iOS, the specified value is always between `0.0` and `1.0`.
- `alpha`: On return, the opacity component of the color object, specified as a value between `0.0` and `1.0`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the color could be converted, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the color is in a compatible color space, it converts into grayscale format and its returned to your application. If the color isn’t in a compatible color space, the parameters don’t change.

## See Also

### Getting the color information

- [Determining color values with color spaces](../determining-color-values-with-color-spaces.md): Change the system’s interpretation of a color value for display by selecting a color space.
- [CGColor](cgcolor.md): The Quartz color that corresponds to the color object.
- [CIColor](cicolor.md): The Core Image color that corresponds to the color object.
- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the components that form the color in the HSB color space.
- [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md): Returns the components that form the color in the RGB color space.
- [linearExposure](linearexposure.md): The linear brightness multiplier that was applied when generating this color. Colors created with an exposure by UIColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, UIColors generated in a similar fashion return a linearExposure of 1.0.
- [accessibilityName](accessibilityname.md): A localized description of the color for accessibility attributes.
