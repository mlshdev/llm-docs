> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/init(red:green:blue:alpha:linearexposure:)](https://developer.apple.com/documentation/uikit/uicolor/init(red:green:blue:alpha:linearexposure:))

# init(red:green:blue:alpha:linearExposure:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.

## Declaration

```swift
init(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat, linearExposure: CGFloat)
```

## See Also

### Creating a color from component values

- [init(white:alpha:)](init%28white_alpha_%29.md): Creates a color object using the specified opacity and grayscale values.
- [init(hue:saturation:brightness:alpha:)](init%28hue_saturation_brightness_alpha_%29.md): Creates a color object using the specified opacity and HSB color space component values.
- [init(red:green:blue:alpha:)](init%28red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values.
- [init(red:green:blue:alpha:exposure:)](init%28red_green_blue_alpha_exposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `exposure` is a value \>= 0. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `2^exposure`. The produced color will have a `contentHeadroom` equal to the linearized exposure value. Each whole value of exposure produces a color that is twice as bright.
- [init(displayP3Red:green:blue:alpha:)](init%28displayp3red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values in the Display P3 color space.
- [init(named:)](init%28named_%29.md): Creates a color object using the information from the named asset.
- [init(named:inBundle:compatibleWithTraitCollection:)](init%28named_inbundle_compatiblewithtraitcollection_%29.md): Creates a color object using the named asset that’s compatible with the specified trait collection.

# initWithRed:green:blue:alpha:linearExposure: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.

## Declaration

```objectivec
- (UIColor *) initWithRed:(CGFloat) red green:(CGFloat) green blue:(CGFloat) blue alpha:(CGFloat) alpha linearExposure:(CGFloat) linearExposure;
```

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
- [initWithDisplayP3Red:green:blue:alpha:](init%28displayp3red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values in the Display P3 color space.
- [colorNamed:](init%28named_%29.md): Creates a color object using the information from the named asset.
