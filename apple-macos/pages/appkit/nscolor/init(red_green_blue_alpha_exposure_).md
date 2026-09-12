> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(red:green:blue:alpha:exposure:)](https://developer.apple.com/documentation/appkit/nscolor/init(red:green:blue:alpha:exposure:))

# init(red:green:blue:alpha:exposure:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 26.0+

Generates an HDR color in the extended sRGB colorspace by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `exposure` is a value \>= 0. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `2^exposure`. The produced color will have a `contentHeadroom` equal to the linearized exposure value. Each whole value of exposure produces a color that is twice as bright.

## Declaration

```swift
init(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat, exposure: CGFloat)
```

## See Also

### Creating a high dynamic range (HDR) color

- [init(red:green:blue:alpha:linearExposure:)](init%28red_green_blue_alpha_linearexposure_%29.md): Generates an HDR color in the extended sRGB colorspace by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.

# colorWithRed:green:blue:alpha:exposure: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 26.0+

Generates an HDR color in the extended sRGB colorspace by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `exposure` is a value \>= 0. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `2^exposure`. The produced color will have a `contentHeadroom` equal to the linearized exposure value. Each whole value of exposure produces a color that is twice as bright.

## Declaration

```objectivec
+ (NSColor *) colorWithRed:(CGFloat) red green:(CGFloat) green blue:(CGFloat) blue alpha:(CGFloat) alpha exposure:(CGFloat) exposure;
```

## See Also

### Creating a high dynamic range (HDR) color

- [colorWithRed:green:blue:alpha:linearExposure:](init%28red_green_blue_alpha_linearexposure_%29.md): Generates an HDR color in the extended sRGB colorspace by applying an exposure to the SDR color defined by the red, green, and blue components. The `red`, `green`, and `blue` components have a nominal range of \[0..1\], `linearExposure` is a value \>= 1. To produce an HDR color, we process the given color in a linear color space, multiplying component values by `linearExposure `. The produced color will have a `contentHeadroom` equal to `linearExposure`. Each doubling of `linearExposure` produces a color that is twice as bright.
