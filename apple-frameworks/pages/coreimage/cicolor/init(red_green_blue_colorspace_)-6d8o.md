> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/init(red:green:blue:colorspace:)-6d8o](https://developer.apple.com/documentation/coreimage/cicolor/init(red:green:blue:colorspace:)-6d8o)

# init(red:green:blue:colorSpace:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+

Initialize a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.

## Declaration

```swift
convenience init?(red: CGFloat, green: CGFloat, blue: CGFloat, colorSpace: CGColorSpace)
```

## Parameters

- `red`: The color’s unpremultiplied red component value.
- `green`: The color’s unpremultiplied green component value.
- `blue`: The color’s unpremultiplied blue component value.
- `colorSpace`: The color’s `CGColorSpace` which must have `kCGColorSpaceModelRGB`.

<a id="return-value"></a>

## Return Value

 An initialized [CIColor](../cicolor.md) instance.

<a id="discussion"></a>

## Discussion

This will return null if the `CGColorSpace` is not `kCGColorSpaceModelRGB`. The RGB values can be outside the `0...1` range if the `CGColorSpace` is unclamped.

# initWithRed:green:blue:colorSpace: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initialize a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.

## Declaration

```objectivec
- (instancetype) initWithRed:(CGFloat) red green:(CGFloat) green blue:(CGFloat) blue colorSpace:(CGColorSpaceRef) colorSpace;
```

## Parameters

- `red`: The color’s unpremultiplied red component value.
- `green`: The color’s unpremultiplied green component value.
- `blue`: The color’s unpremultiplied blue component value.
- `colorSpace`: The color’s `CGColorSpace` which must have `kCGColorSpaceModelRGB`.

<a id="return-value"></a>

## Return Value

 An initialized [CIColor](../cicolor.md) instance.

<a id="discussion"></a>

## Discussion

This will return null if the `CGColorSpace` is not `kCGColorSpaceModelRGB`. The RGB values can be outside the `0...1` range if the `CGColorSpace` is unclamped.
