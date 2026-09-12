> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/init(colors:)](https://developer.apple.com/documentation/appkit/nsgradient/init(colors:))

# init(colors:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes a newly allocated gradient object with an array of colors.

## Declaration

```swift
convenience init?(colors colorArray: [NSColor])
```

## Parameters

- `colorArray`: An array of `NSColor` objects representing the colors to use to initialize the gradient. There must be at least two colors in the array. The first color is placed at location 0.0 and the last at location 1.0. If there are more than two colors, the additional colors are placed at evenly spaced intervals between the first and last colors.

<a id="return-value"></a>

## Return Value

The initialized `NSGradient` object.

## See Also

### Creating a Gradient

- [init(starting:ending:)](init%28starting_ending_%29.md): Initializes a newly allocated gradient object with two colors.
- [init(colorsAndLocations:)](init%28colorsandlocations_%29.md): Initializes a newly allocated gradient object with a comma-separated list of arguments.
- [init(colors:atLocations:colorSpace:)](init%28colors_atlocations_colorspace_%29.md): Initializes a newly allocated gradient object with the specified colors, color locations, and color space.
- [init(coder:)](init%28coder_%29.md): Creates a gradient from data in an unarchiver.

# initWithColors: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes a newly allocated gradient object with an array of colors.

## Declaration

```objectivec
- (instancetype) initWithColors:(NSArray<NSColor *> *) colorArray;
```

## Parameters

- `colorArray`: An array of `NSColor` objects representing the colors to use to initialize the gradient. There must be at least two colors in the array. The first color is placed at location 0.0 and the last at location 1.0. If there are more than two colors, the additional colors are placed at evenly spaced intervals between the first and last colors.

<a id="return-value"></a>

## Return Value

The initialized `NSGradient` object.

## See Also

### Creating a Gradient

- [initWithStartingColor:endingColor:](init%28starting_ending_%29.md): Initializes a newly allocated gradient object with two colors.
- [initWithColorsAndLocations:](initwithcolorsandlocations_.md): Initializes a newly allocated gradient object with a comma-separated list of arguments.
- [initWithColors:atLocations:colorSpace:](init%28colors_atlocations_colorspace_%29.md): Initializes a newly allocated gradient object with the specified colors, color locations, and color space.
- [initWithCoder:](init%28coder_%29.md): Creates a gradient from data in an unarchiver.
