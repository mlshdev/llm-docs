> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/init(displayp3red:green:blue:alpha:)](https://developer.apple.com/documentation/uikit/uicolor/init(displayp3red:green:blue:alpha:))

# init(displayP3Red:green:blue:alpha:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a color object using the specified opacity and RGB component values in the Display P3 color space.

## Declaration

```swift
init(displayP3Red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat)
```

## Parameters

- `displayP3Red`: The red component of the color object, specified as a value from 0.0 to 1.0.
- `green`: The green component of the color object, specified as a value from 0.0 to 1.0.
- `blue`: The blue component of the color object, specified as a value from 0.0 to 1.0.
- `alpha`: The opacity value of the color object, specified as a value from 0.0 to 1.0. Alpha values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

<a id="return-value"></a>

## Return Value

The color object. The color information represented by this object is in an extended range sRGB colorspace. On applications linked for iOS 10 or later, the color is specified in an extended range sRGB color space.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Creating a color from component values

- [init(white:alpha:)](init%28white_alpha_%29.md): Creates a color object using the specified opacity and grayscale values.
- [init(hue:saturation:brightness:alpha:)](init%28hue_saturation_brightness_alpha_%29.md): Creates a color object using the specified opacity and HSB color space component values.
- [init(red:green:blue:alpha:)](init%28red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values.
- [init(red:green:blue:alpha:exposure:)](init%28red_green_blue_alpha_exposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `exposure` is a value \>= 0. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `2^exposure`. The produced color will have a `contentHeadroom` equal to the linearized exposure value. Each whole value of exposure produces a color that is twice as bright.
- [init(red:green:blue:alpha:linearExposure:)](init%28red_green_blue_alpha_linearexposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.
- [init(named:)](init%28named_%29.md): Creates a color object using the information from the named asset.
- [init(named:inBundle:compatibleWithTraitCollection:)](init%28named_inbundle_compatiblewithtraitcollection_%29.md): Creates a color object using the named asset that’s compatible with the specified trait collection.

# initWithDisplayP3Red:green:blue:alpha: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a color object using the specified opacity and RGB component values in the Display P3 color space.

## Declaration

```objectivec
- (UIColor *) initWithDisplayP3Red:(CGFloat) displayP3Red green:(CGFloat) green blue:(CGFloat) blue alpha:(CGFloat) alpha;
```

## Parameters

- `displayP3Red`: The red component of the color object, specified as a value from 0.0 to 1.0.
- `green`: The green component of the color object, specified as a value from 0.0 to 1.0.
- `blue`: The blue component of the color object, specified as a value from 0.0 to 1.0.
- `alpha`: The opacity value of the color object, specified as a value from 0.0 to 1.0. Alpha values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

<a id="return-value"></a>

## Return Value

The color object. The color information represented by this object is in an extended range sRGB colorspace. On applications linked for iOS 10 or later, the color is specified in an extended range sRGB color space.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Creating a color from component values

- [colorWithWhite:alpha:](colorwithwhite_alpha_.md): Creates a color object using the specified opacity and grayscale values.
- [colorWithHue:saturation:brightness:alpha:](colorwithhue_saturation_brightness_alpha_.md): Creates a color object using the specified opacity and HSB color space component values.
- [colorWithRed:green:blue:alpha:](colorwithred_green_blue_alpha_.md): Creates a color object using the specified opacity and RGB component values.
- [colorWithDisplayP3Red:green:blue:alpha:](colorwithdisplayp3red_green_blue_alpha_.md): Creates a color object using the specified opacity and RGB component values in the Display P3 color space.
- [initWithWhite:alpha:](init%28white_alpha_%29.md): Creates a color object using the specified opacity and grayscale values.
- [initWithHue:saturation:brightness:alpha:](init%28hue_saturation_brightness_alpha_%29.md): Creates a color object using the specified opacity and HSB color space component values.
- [initWithRed:green:blue:alpha:](init%28red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values.
- [initWithRed:green:blue:alpha:exposure:](init%28red_green_blue_alpha_exposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `exposure` is a value \>= 0. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `2^exposure`. The produced color will have a `contentHeadroom` equal to the linearized exposure value. Each whole value of exposure produces a color that is twice as bright.
- [initWithRed:green:blue:alpha:linearExposure:](init%28red_green_blue_alpha_linearexposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.
- [colorNamed:](init%28named_%29.md): Creates a color object using the information from the named asset.
