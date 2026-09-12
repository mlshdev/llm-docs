> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/colorwithcgcolor:](https://developer.apple.com/documentation/coreimage/cicolor/colorwithcgcolor:)

# colorWithCGColor:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Create a Core Image color object with a Core Graphics color object.

## Declaration

```objectivec
+ (instancetype) colorWithCGColor:(CGColorRef) color;
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIColor](../cicolor.md) instance.

## See Also

### Creating Color Objects

- [colorWithRed:green:blue:](init%28red_green_blue_%29.md): Create a Core Image color object in the sRGB color space with the specified red, green, and blue component values.
- [colorWithRed:green:blue:alpha:](colorwithred_green_blue_alpha_.md): Create a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.
- [colorWithString:](init%28string_%29.md): Create a Core Image color object in the sRGB color space using a string containing the RGBA color component values.
- [colorWithRed:green:blue:colorSpace:](init%28red_green_blue_colorspace_%29-2og6y.md): Create a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.
- [colorWithRed:green:blue:alpha:colorSpace:](init%28red_green_blue_alpha_colorspace_%29-5mvff.md): Create a Core Image color object with the specified red, green, blue, and alpha component values as measured in the specified color space.
