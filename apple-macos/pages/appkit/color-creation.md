> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/color-creation](https://developer.apple.com/documentation/appkit/color-creation)

# Color creation (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Load colors from asset catalogs, and create colors from raw component values, such as those used by grayscale, RGB, HSB, and CMYK colors.

## Topics

### Loading color objects from asset catalogs

- [init(named:)](nscolor/init%28named_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the app’s main bundle.
- [init(named:bundle:)](nscolor/init%28named_bundle_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the specified bundle.
- [init(catalogName:colorName:)](nscolor/init%28catalogname_colorname_%29.md): Creates a color object using the specified asset catalog and color names.
- [NSColor.Name](nscolor/name.md): The name of a color.

### Creating a color using RGB components

- [init(srgbRed:green:blue:alpha:)](nscolor/init%28srgbred_green_blue_alpha_%29-9oz51.md): Creates a color object from the specified components in the sRGB colorspace.
- [init(displayP3Red:green:blue:alpha:)](nscolor/init%28displayp3red_green_blue_alpha_%29.md): Creates a color object from the specified components in the Display P3 color space.
- [init(red:green:blue:alpha:)](nscolor/init%28red_green_blue_alpha_%29.md): Creates a color object with the specified red, green, blue, and alpha channel values.
- [init(calibratedRed:green:blue:alpha:)](nscolor/init%28calibratedred_green_blue_alpha_%29.md): Creates a color object using the given opacity and RGB components.
- [init(deviceRed:green:blue:alpha:)](nscolor/init%28devicered_green_blue_alpha_%29.md): Creates a color object using the given opacity value and RGB components.

### Creating a color using HSB components

- [init(calibratedHue:saturation:brightness:alpha:)](nscolor/init%28calibratedhue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity and HSB color space components.
- [init(deviceHue:saturation:brightness:alpha:)](nscolor/init%28devicehue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity value and HSB color space components.
- [init(hue:saturation:brightness:alpha:)](nscolor/init%28hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified hue, saturation, brightness, and alpha channel values.
- [init(colorSpace:hue:saturation:brightness:alpha:)](nscolor/init%28colorspace_hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified color space, hue, saturation, brightness, and alpha channel values.

### Creating a color using CMYK components

- [init(deviceCyan:magenta:yellow:black:alpha:)](nscolor/init%28devicecyan_magenta_yellow_black_alpha_%29.md): Creates a color object using the given opacity value and CMYK components.

### Creating a color using white components

- [init(white:alpha:)](nscolor/init%28white_alpha_%29.md): Creates a color object with the specified brightness and alpha channel values.
- [init(calibratedWhite:alpha:)](nscolor/init%28calibratedwhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [init(deviceWhite:alpha:)](nscolor/init%28devicewhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [init(genericGamma22White:alpha:)](nscolor/init%28genericgamma22white_alpha_%29.md): Returns a color object with the specified white and alpha values in the GenericGamma22 colorspace.

### Creating a high dynamic range (HDR) color

- [init(red:green:blue:alpha:linearExposure:)](nscolor/init%28red_green_blue_alpha_linearexposure_%29.md): Generates an HDR color in the extended sRGB colorspace by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.
- [init(red:green:blue:alpha:exposure:)](nscolor/init%28red_green_blue_alpha_exposure_%29.md): Generates an HDR color in the extended sRGB colorspace by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `exposure` is a value \>= 0. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `2^exposure`. The produced color will have a `contentHeadroom` equal to the linearized exposure value. Each whole value of exposure produces a color that is twice as bright.

### Creating a pattern-based color

- [init(patternImage:)](nscolor/init%28patternimage_%29.md): Creates a color object that uses the specified image pattern to paint the target area.
- [patternImage](nscolor/patternimage.md): The pattern image used to paint the target area.

### Creating a color dynamically

- [init(name:dynamicProvider:)](nscolor/init%28name_dynamicprovider_%29.md): Creates a dynamic catalog color with a provider that’s used to resolve the exact color value, calculated on first use.

### Creating a color in an arbitrary color space

- [init(colorSpace:components:count:)](nscolor/init%28colorspace_components_count_%29.md): Creates a color object from the specified components of the given color space.

### Creating a system tint color

- [init(for:)](nscolor/init%28for_%29.md): Deprecated. Returns the color object specified by the given control tint.
- [NSControlTint](nscontroltint.md): Constants for specifying a cell’s tint color.

### Converting other types of color objects

- [init(\_:)](nscolor/init%28__%29.md)
- [init(cgColor:)](nscolor/init%28cgcolor_%29-1hzl8.md): Creates a color object using the specified Core Graphics color.
- [init(CIColor:)](nscolor/init%28cicolor_%29-3rxsk.md): Creates a color object from the specified Core Image color.

### Creating color objects

- [init()](nscolor/init%28%29.md): Initializes the color object.
- [init(coder:)](nscolor/init%28coder_%29.md): Creates a color object from data in an unarchiver.
- [init(resource:)](nscolor/init%28resource_%29.md): Initialize a `NSColor` with a color resource.

## See Also

### Getting and creating colors

- [UI element colors](ui-element-colors.md): Retrieve standard color objects for use with windows, controls, labels, text, selections and other content in your app.
- [Standard colors](standard-colors.md): Retrieve the standard color objects for common colors like red, blue, green, black, white, and more.

# Color creation (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Load colors from asset catalogs, and create colors from raw component values, such as those used by grayscale, RGB, HSB, and CMYK colors.

## Topics

### Loading color objects from asset catalogs

- [colorNamed:](nscolor/init%28named_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the app’s main bundle.
- [colorNamed:bundle:](nscolor/init%28named_bundle_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the specified bundle.
- [colorWithCatalogName:colorName:](nscolor/init%28catalogname_colorname_%29.md): Creates a color object using the specified asset catalog and color names.
- [NSColorName](nscolor/name.md): The name of a color.

### Creating a color using RGB components

- [colorWithSRGBRed:green:blue:alpha:](nscolor/init%28srgbred_green_blue_alpha_%29-9oz51.md): Creates a color object from the specified components in the sRGB colorspace.
- [colorWithDisplayP3Red:green:blue:alpha:](nscolor/init%28displayp3red_green_blue_alpha_%29.md): Creates a color object from the specified components in the Display P3 color space.
- [colorWithRed:green:blue:alpha:](nscolor/init%28red_green_blue_alpha_%29.md): Creates a color object with the specified red, green, blue, and alpha channel values.
- [colorWithCalibratedRed:green:blue:alpha:](nscolor/init%28calibratedred_green_blue_alpha_%29.md): Creates a color object using the given opacity and RGB components.
- [colorWithDeviceRed:green:blue:alpha:](nscolor/init%28devicered_green_blue_alpha_%29.md): Creates a color object using the given opacity value and RGB components.

### Creating a color using HSB components

- [colorWithCalibratedHue:saturation:brightness:alpha:](nscolor/init%28calibratedhue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity and HSB color space components.
- [colorWithDeviceHue:saturation:brightness:alpha:](nscolor/init%28devicehue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity value and HSB color space components.
- [colorWithHue:saturation:brightness:alpha:](nscolor/init%28hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified hue, saturation, brightness, and alpha channel values.
- [colorWithColorSpace:hue:saturation:brightness:alpha:](nscolor/init%28colorspace_hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified color space, hue, saturation, brightness, and alpha channel values.

### Creating a color using CMYK components

- [colorWithDeviceCyan:magenta:yellow:black:alpha:](nscolor/init%28devicecyan_magenta_yellow_black_alpha_%29.md): Creates a color object using the given opacity value and CMYK components.

### Creating a color using white components

- [colorWithWhite:alpha:](nscolor/init%28white_alpha_%29.md): Creates a color object with the specified brightness and alpha channel values.
- [colorWithCalibratedWhite:alpha:](nscolor/init%28calibratedwhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [colorWithDeviceWhite:alpha:](nscolor/init%28devicewhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [colorWithGenericGamma22White:alpha:](nscolor/init%28genericgamma22white_alpha_%29.md): Returns a color object with the specified white and alpha values in the GenericGamma22 colorspace.

### Creating a high dynamic range (HDR) color

- [colorWithRed:green:blue:alpha:linearExposure:](nscolor/init%28red_green_blue_alpha_linearexposure_%29.md): Generates an HDR color in the extended sRGB colorspace by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.
- [colorWithRed:green:blue:alpha:exposure:](nscolor/init%28red_green_blue_alpha_exposure_%29.md): Generates an HDR color in the extended sRGB colorspace by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `exposure` is a value \>= 0. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `2^exposure`. The produced color will have a `contentHeadroom` equal to the linearized exposure value. Each whole value of exposure produces a color that is twice as bright.

### Creating a pattern-based color

- [colorWithPatternImage:](nscolor/init%28patternimage_%29.md): Creates a color object that uses the specified image pattern to paint the target area.
- [patternImage](nscolor/patternimage.md): The pattern image used to paint the target area.

### Creating a color dynamically

- [colorWithName:dynamicProvider:](nscolor/init%28name_dynamicprovider_%29.md): Creates a dynamic catalog color with a provider that’s used to resolve the exact color value, calculated on first use.

### Creating a color in an arbitrary color space

- [colorWithColorSpace:components:count:](nscolor/init%28colorspace_components_count_%29.md): Creates a color object from the specified components of the given color space.

### Creating a system tint color

- [colorForControlTint:](nscolor/init%28for_%29.md): Deprecated. Returns the color object specified by the given control tint.
- [NSControlTint](nscontroltint.md): Constants for specifying a cell’s tint color.

### Converting other types of color objects

- [colorWithCGColor:](nscolor/init%28cgcolor_%29-1hzl8.md): Creates a color object using the specified Core Graphics color.

### Creating color objects

- [init](nscolor/init%28%29.md): Initializes the color object.
- [initWithCoder:](nscolor/init%28coder_%29.md): Creates a color object from data in an unarchiver.

## See Also

### Getting and creating colors

- [UI element colors](ui-element-colors.md): Retrieve standard color objects for use with windows, controls, labels, text, selections and other content in your app.
- [Standard colors](standard-colors.md): Retrieve the standard color objects for common colors like red, blue, green, black, white, and more.
