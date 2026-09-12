> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/init(string:)](https://developer.apple.com/documentation/coreimage/cicolor/init(string:))

# init(string:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Create a Core Image color object in the sRGB color space using a string containing the RGBA color component values.

## Declaration

```swift
convenience init(string representation: String)
```

## Parameters

- `representation`: A string that contains color and alpha float values. For example, the string: `"0.5 0.7 0.3 1.0"` indicates an RGB color whose components are 50% red, 70% green, 30% blue, and 100% opaque. If the string contains only 3 float values, the alpha component will be `1.0` If the string contains no float values, then `/CIColor/clearColor` will be returned.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIColor](../cicolor.md) instance.

<a id="discussion"></a>

## Discussion

On macOS before 10.10, the CIColor’s color space will be Generic RGB.

## See Also

### Creating Color Objects

- [init(red:green:blue:)](init%28red_green_blue_%29.md): Create a Core Image color object in the sRGB color space with the specified red, green, and blue component values.
- [init(red:green:blue:colorSpace:)](init%28red_green_blue_colorspace_%29-2og6y.md): Create a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.
- [init(red:green:blue:alpha:colorSpace:)](init%28red_green_blue_alpha_colorspace_%29-5mvff.md): Create a Core Image color object with the specified red, green, blue, and alpha component values as measured in the specified color space.

# colorWithString: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Create a Core Image color object in the sRGB color space using a string containing the RGBA color component values.

## Declaration

```objectivec
+ (instancetype) colorWithString:(NSString *) representation;
```

## Parameters

- `representation`: A string that contains color and alpha float values. For example, the string: `"0.5 0.7 0.3 1.0"` indicates an RGB color whose components are 50% red, 70% green, 30% blue, and 100% opaque. If the string contains only 3 float values, the alpha component will be `1.0` If the string contains no float values, then `/CIColor/clearColor` will be returned.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIColor](../cicolor.md) instance.

<a id="discussion"></a>

## Discussion

On macOS before 10.10, the CIColor’s color space will be Generic RGB.

## See Also

### Creating Color Objects

- [colorWithCGColor:](colorwithcgcolor_.md): Create a Core Image color object with a Core Graphics color object.
- [colorWithRed:green:blue:](init%28red_green_blue_%29.md): Create a Core Image color object in the sRGB color space with the specified red, green, and blue component values.
- [colorWithRed:green:blue:alpha:](colorwithred_green_blue_alpha_.md): Create a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.
- [colorWithRed:green:blue:colorSpace:](init%28red_green_blue_colorspace_%29-2og6y.md): Create a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.
- [colorWithRed:green:blue:alpha:colorSpace:](init%28red_green_blue_alpha_colorspace_%29-5mvff.md): Create a Core Image color object with the specified red, green, blue, and alpha component values as measured in the specified color space.
