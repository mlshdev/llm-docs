> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/init(colors:atlocations:colorspace:)](https://developer.apple.com/documentation/appkit/nsgradient/init(colors:atlocations:colorspace:))

# init(colors:atLocations:colorSpace:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes a newly allocated gradient object with the specified colors, color locations, and color space.

## Declaration

```swift
init?(colors colorArray: [NSColor], atLocations locations: UnsafePointer<CGFloat>?, colorSpace: NSColorSpace)
```

## Parameters

- `colorArray`: An array of `NSColor` objects representing the colors in the gradient.
- `locations`: An array of `CGFloat` values containing the location for each color in the gradient. Each value must be in the range 0.0 to 1.0. There must be the same number of locations as are colors in the `colorArray` parameter.
- `colorSpace`: The color space to use for the gradient.

<a id="return-value"></a>

## Return Value

The initialized `NSGradient` object.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer of `NSGradient`. The colors in the `colorArray` parameter are converted to the specified color space if they are not already in that color space.

Typically, at least one color should have a location of 0.0 and one should have a location of 1.0. If these locations are not specified, the color at the closest color stop is used to fill the gap.

## See Also

### Creating a Gradient

- [init(starting:ending:)](init%28starting_ending_%29.md): Initializes a newly allocated gradient object with two colors.
- [init(colors:)](init%28colors_%29.md): Initializes a newly allocated gradient object with an array of colors.
- [init(colorsAndLocations:)](init%28colorsandlocations_%29.md): Initializes a newly allocated gradient object with a comma-separated list of arguments.
- [init(coder:)](init%28coder_%29.md): Creates a gradient from data in an unarchiver.

# initWithColors:atLocations:colorSpace: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes a newly allocated gradient object with the specified colors, color locations, and color space.

## Declaration

```objectivec
- (instancetype) initWithColors:(NSArray<NSColor *> *) colorArray atLocations:(const CGFloat *) locations colorSpace:(NSColorSpace *) colorSpace;
```

## Parameters

- `colorArray`: An array of `NSColor` objects representing the colors in the gradient.
- `locations`: An array of `CGFloat` values containing the location for each color in the gradient. Each value must be in the range 0.0 to 1.0. There must be the same number of locations as are colors in the `colorArray` parameter.
- `colorSpace`: The color space to use for the gradient.

<a id="return-value"></a>

## Return Value

The initialized `NSGradient` object.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer of `NSGradient`. The colors in the `colorArray` parameter are converted to the specified color space if they are not already in that color space.

Typically, at least one color should have a location of 0.0 and one should have a location of 1.0. If these locations are not specified, the color at the closest color stop is used to fill the gap.

## See Also

### Creating a Gradient

- [initWithStartingColor:endingColor:](init%28starting_ending_%29.md): Initializes a newly allocated gradient object with two colors.
- [initWithColors:](init%28colors_%29.md): Initializes a newly allocated gradient object with an array of colors.
- [initWithColorsAndLocations:](initwithcolorsandlocations_.md): Initializes a newly allocated gradient object with a comma-separated list of arguments.
- [initWithCoder:](init%28coder_%29.md): Creates a gradient from data in an unarchiver.
