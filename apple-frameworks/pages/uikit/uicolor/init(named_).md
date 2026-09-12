> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/init(named:)](https://developer.apple.com/documentation/uikit/uicolor/init(named:))

# init(named:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a color object using the information from the named asset.

## Declaration

```swift
init?(named name: String)
```

## Parameters

- `name`: The name of the asset containing the color.

<a id="return-value"></a>

## Return Value

An initialized color object. The returned object uses the color space specified for the asset.

## See Also

### Creating a color from component values

- [init(white:alpha:)](init%28white_alpha_%29.md): Creates a color object using the specified opacity and grayscale values.
- [init(hue:saturation:brightness:alpha:)](init%28hue_saturation_brightness_alpha_%29.md): Creates a color object using the specified opacity and HSB color space component values.
- [init(red:green:blue:alpha:)](init%28red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values.
- [init(red:green:blue:alpha:exposure:)](init%28red_green_blue_alpha_exposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `exposure` is a value \>= 0. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `2^exposure`. The produced color will have a `contentHeadroom` equal to the linearized exposure value. Each whole value of exposure produces a color that is twice as bright.
- [init(red:green:blue:alpha:linearExposure:)](init%28red_green_blue_alpha_linearexposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.
- [init(displayP3Red:green:blue:alpha:)](init%28displayp3red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values in the Display P3 color space.
- [init(named:inBundle:compatibleWithTraitCollection:)](init%28named_inbundle_compatiblewithtraitcollection_%29.md): Creates a color object using the named asset that’s compatible with the specified trait collection.

# colorNamed: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a color object using the information from the named asset.

## Declaration

```objectivec
+ (UIColor *) colorNamed:(NSString *) name;
```

## Parameters

- `name`: The name of the asset containing the color.

<a id="return-value"></a>

## Return Value

An initialized color object. The returned object uses the color space specified for the asset.

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
- [initWithDisplayP3Red:green:blue:alpha:](init%28displayp3red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values in the Display P3 color space.
