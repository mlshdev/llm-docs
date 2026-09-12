> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/getred(_:green:blue:alpha:)](https://developer.apple.com/documentation/uikit/uicolor/getred(_:green:blue:alpha:))

# getRed(\_:green:blue:alpha:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the components that form the color in the RGB color space.

## Declaration

```swift
func getRed(_ red: UnsafeMutablePointer<CGFloat>?, green: UnsafeMutablePointer<CGFloat>?, blue: UnsafeMutablePointer<CGFloat>?, alpha: UnsafeMutablePointer<CGFloat>?) -> Bool
```

## Parameters

- `red`: On return, the red component of the color object. On applications linked for iOS 10 or later, an extended range sRGB color space specifies the red component and can have any value. Values between `0.0` and `1.0` are inside the sRGB color gamut. On earlier versions of iOS, the specified value is always between `0.0` and `1.0`.
- `green`: On return, the green component of the color object. On applications linked for iOS 10 or later,an extended range sRGB color space specifies the green component and can have any value. Values between `0.0` and `1.0` are inside the sRGB color gamut. On earlier versions of iOS, the specified value is always between `0.0` and `1.0`.
- `blue`: On return, the blue component of the color object. On applications linked for iOS 10 or later, an extended range sRGB color space specifies the blue component and can have any value. Values between `0.0` and `1.0` are inside the sRGB color gamut. On earlier versions of iOS, the specified value is always between `0.0` and `1.0`.
- `alpha`: On return, the opacity component of the color object, specified as a value between `0.0` and `1.0`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the color could be converted, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the color is in a compatible color space, it converts into RGB format and its components return to your application. If the color isn’t in a compatible color space, the parameters don’t change.

## See Also

### Getting the color information

- [Determining color values with color spaces](../determining-color-values-with-color-spaces.md): Change the system’s interpretation of a color value for display by selecting a color space.
- [cgColor](cgcolor.md): The Quartz color that corresponds to the color object.
- [ciColor](cicolor.md): The Core Image color that corresponds to the color object.
- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the components that form the color in the HSB color space.
- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale components of the color.
- [linearExposure](linearexposure.md): The linear brightness multiplier that was applied when generating this color. Colors created with an exposure by UIColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, UIColors generated in a similar fashion return a linearExposure of 1.0.
- [accessibilityName](accessibilityname.md): A localized description of the color for accessibility attributes.

# getRed:green:blue:alpha: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the components that form the color in the RGB color space.

## Declaration

```objectivec
- (BOOL) getRed:(CGFloat *) red green:(CGFloat *) green blue:(CGFloat *) blue alpha:(CGFloat *) alpha;
```

## Parameters

- `red`: On return, the red component of the color object. On applications linked for iOS 10 or later, an extended range sRGB color space specifies the red component and can have any value. Values between `0.0` and `1.0` are inside the sRGB color gamut. On earlier versions of iOS, the specified value is always between `0.0` and `1.0`.
- `green`: On return, the green component of the color object. On applications linked for iOS 10 or later,an extended range sRGB color space specifies the green component and can have any value. Values between `0.0` and `1.0` are inside the sRGB color gamut. On earlier versions of iOS, the specified value is always between `0.0` and `1.0`.
- `blue`: On return, the blue component of the color object. On applications linked for iOS 10 or later, an extended range sRGB color space specifies the blue component and can have any value. Values between `0.0` and `1.0` are inside the sRGB color gamut. On earlier versions of iOS, the specified value is always between `0.0` and `1.0`.
- `alpha`: On return, the opacity component of the color object, specified as a value between `0.0` and `1.0`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the color could be converted, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the color is in a compatible color space, it converts into RGB format and its components return to your application. If the color isn’t in a compatible color space, the parameters don’t change.

## See Also

### Getting the color information

- [Determining color values with color spaces](../determining-color-values-with-color-spaces.md): Change the system’s interpretation of a color value for display by selecting a color space.
- [CGColor](cgcolor.md): The Quartz color that corresponds to the color object.
- [CIColor](cicolor.md): The Core Image color that corresponds to the color object.
- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the components that form the color in the HSB color space.
- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale components of the color.
- [linearExposure](linearexposure.md): The linear brightness multiplier that was applied when generating this color. Colors created with an exposure by UIColor create CGColors that are tagged with a contentHeadroom value. While CGColors created without a contentHeadroom tag will return 0 from CGColorGetHeadroom, UIColors generated in a similar fashion return a linearExposure of 1.0.
- [accessibilityName](accessibilityname.md): A localized description of the color for accessibility attributes.
