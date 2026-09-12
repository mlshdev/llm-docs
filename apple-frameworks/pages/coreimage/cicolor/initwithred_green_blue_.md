> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/initwithred:green:blue:](https://developer.apple.com/documentation/coreimage/cicolor/initwithred:green:blue:)

# initWithRed:green:blue:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initialize a Core Image color object in the sRGB color space with the specified red, green, and blue component values.

## Declaration

```objectivec
- (instancetype) initWithRed:(CGFloat) red green:(CGFloat) green blue:(CGFloat) blue;
```

## Parameters

- `red`: The color’s unpremultiplied red component value between 0 and 1.
- `green`: The color’s unpremultiplied green component value between 0 and 1.
- `blue`: The color’s unpremultiplied blue component value between 0 and 1.

<a id="return-value"></a>

## Return Value

 An initialized [CIColor](../cicolor.md) instance.

<a id="discussion"></a>

## Discussion

On macOS before 10.10, the CIColor’s color space will be Generic RGB.

## See Also

### Initializing Color Objects

- [initWithCGColor:](init%28cgcolor_%29-1hzk4.md): Create a Core Image color object with a Core Graphics color object.
- [initWithColor:](init%28color_%29.md)
- [initWithRed:green:blue:alpha:](init%28red_green_blue_alpha_%29.md): Initialize a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.
