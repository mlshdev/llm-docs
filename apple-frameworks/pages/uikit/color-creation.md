> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/color-creation](https://developer.apple.com/documentation/uikit/color-creation)

# Color creation (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Load colors from asset catalogs and create colors from raw component values.

<a id="overview"></a>

## Overview

Create color objects when you want to use specific colors in your UI, altering the raw component values used by grayscale, RGB, HSB, and CMYK. You can set the specified opacity and RGB component values to create personalized colors that fit your needs. Create colors dynamically by component values changing based on the currently active traits. You can use pattern colors to set the fill or stroke color.

## Topics

### Creating a color from component values

- [init(white:alpha:)](uicolor/init%28white_alpha_%29.md): Creates a color object using the specified opacity and grayscale values.
- [init(hue:saturation:brightness:alpha:)](uicolor/init%28hue_saturation_brightness_alpha_%29.md): Creates a color object using the specified opacity and HSB color space component values.
- [init(red:green:blue:alpha:)](uicolor/init%28red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values.
- [init(red:green:blue:alpha:exposure:)](uicolor/init%28red_green_blue_alpha_exposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `exposure` is a value \>= 0. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `2^exposure`. The produced color will have a `contentHeadroom` equal to the linearized exposure value. Each whole value of exposure produces a color that is twice as bright.
- [init(red:green:blue:alpha:linearExposure:)](uicolor/init%28red_green_blue_alpha_linearexposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.
- [init(displayP3Red:green:blue:alpha:)](uicolor/init%28displayp3red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values in the Display P3 color space.
- [init(named:)](uicolor/init%28named_%29.md): Creates a color object using the information from the named asset.
- [init(named:inBundle:compatibleWithTraitCollection:)](uicolor/init%28named_inbundle_compatiblewithtraitcollection_%29.md): Creates a color object using the named asset that’s compatible with the specified trait collection.

### Creating a color dynamically

- [init(dynamicProvider:)](uicolor/init%28dynamicprovider_%29.md): Creates a color object that uses the specified block to generate its color data dynamically.

### Creating a color from another color object

- [init(\_:)](uicolor/init%28__%29.md): Creates a color object that encapsulates a SwiftUI color.
- [init(ciColor:)](uicolor/init%28cicolor_%29-2z057.md): Creates a color object that encapsulates a Core Image color.
- [init(cgColor:)](uicolor/init%28cgcolor_%29-27r9g.md): Creates a color object using the specified Quartz color reference.
- [withAlphaComponent(\_:)](uicolor/withalphacomponent%28__%29.md): Creates a color object that has the same color space and component values as the receiver, but has the specified alpha component.

### Creating a pattern-based color

- [init(patternImage:)](uicolor/init%28patternimage_%29.md): Creates a color object using the specified image object.

### Creating a color from a resource

- [init(resource:)](uicolor/init%28resource_%29.md)

## See Also

### Getting existing colors

- [UI element colors](ui-element-colors.md): Choose colors for UI elements such as labels, text, backgrounds, and links.
- [Standard colors](standard-colors.md): Define standard color objects for specific shades, such as red, blue, green, black, white, and more.

# Color creation (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Load colors from asset catalogs and create colors from raw component values.

<a id="overview"></a>

## Overview

Create color objects when you want to use specific colors in your UI, altering the raw component values used by grayscale, RGB, HSB, and CMYK. You can set the specified opacity and RGB component values to create personalized colors that fit your needs. Create colors dynamically by component values changing based on the currently active traits. You can use pattern colors to set the fill or stroke color.

## Topics

### Creating a color from component values

- [colorWithWhite:alpha:](uicolor/colorwithwhite_alpha_.md): Creates a color object using the specified opacity and grayscale values.
- [colorWithHue:saturation:brightness:alpha:](uicolor/colorwithhue_saturation_brightness_alpha_.md): Creates a color object using the specified opacity and HSB color space component values.
- [colorWithRed:green:blue:alpha:](uicolor/colorwithred_green_blue_alpha_.md): Creates a color object using the specified opacity and RGB component values.
- [colorWithDisplayP3Red:green:blue:alpha:](uicolor/colorwithdisplayp3red_green_blue_alpha_.md): Creates a color object using the specified opacity and RGB component values in the Display P3 color space.
- [initWithWhite:alpha:](uicolor/init%28white_alpha_%29.md): Creates a color object using the specified opacity and grayscale values.
- [initWithHue:saturation:brightness:alpha:](uicolor/init%28hue_saturation_brightness_alpha_%29.md): Creates a color object using the specified opacity and HSB color space component values.
- [initWithRed:green:blue:alpha:](uicolor/init%28red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values.
- [initWithRed:green:blue:alpha:exposure:](uicolor/init%28red_green_blue_alpha_exposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `exposure` is a value \>= 0. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `2^exposure`. The produced color will have a `contentHeadroom` equal to the linearized exposure value. Each whole value of exposure produces a color that is twice as bright.
- [initWithRed:green:blue:alpha:linearExposure:](uicolor/init%28red_green_blue_alpha_linearexposure_%29.md): Generates an HDR color by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.
- [initWithDisplayP3Red:green:blue:alpha:](uicolor/init%28displayp3red_green_blue_alpha_%29.md): Creates a color object using the specified opacity and RGB component values in the Display P3 color space.
- [colorNamed:](uicolor/init%28named_%29.md): Creates a color object using the information from the named asset.

### Creating a color dynamically

- [colorWithDynamicProvider:](uicolor/colorwithdynamicprovider_.md): Returns a color object that uses the specified block to generate its color data dynamically.
- [initWithDynamicProvider:](uicolor/init%28dynamicprovider_%29.md): Creates a color object that uses the specified block to generate its color data dynamically.

### Creating a color from another color object

- [colorWithCIColor:](uicolor/colorwithcicolor_.md): Creates a color object that encapsulates a Core Image color.
- [initWithCIColor:](uicolor/init%28cicolor_%29-2z057.md): Creates a color object that encapsulates a Core Image color.
- [colorWithCGColor:](uicolor/colorwithcgcolor_.md): Creates a color object using the specified Quartz color reference.
- [initWithCGColor:](uicolor/init%28cgcolor_%29-27r9g.md): Creates a color object using the specified Quartz color reference.
- [colorWithAlphaComponent:](uicolor/withalphacomponent%28__%29.md): Creates a color object that has the same color space and component values as the receiver, but has the specified alpha component.

### Creating a pattern-based color

- [colorWithPatternImage:](uicolor/colorwithpatternimage_.md): Creates a color object using the specified image.
- [initWithPatternImage:](uicolor/init%28patternimage_%29.md): Creates a color object using the specified image object.

## See Also

### Getting existing colors

- [UI element colors](ui-element-colors.md): Choose colors for UI elements such as labels, text, backgrounds, and links.
- [Standard colors](standard-colors.md): Define standard color objects for specific shades, such as red, blue, green, black, white, and more.
