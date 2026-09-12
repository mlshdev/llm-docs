> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/initwithcolorsandlocations:](https://developer.apple.com/documentation/appkit/nsgradient/initwithcolorsandlocations:)

# initWithColorsAndLocations:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes a newly allocated gradient object with a comma-separated list of arguments.

## Declaration

```objectivec
- (instancetype) initWithColorsAndLocations:(NSColor *) firstColor;
```

## Parameters

- `firstColor`: The first color in the gradient.

<a id="return-value"></a>

## Return Value

The initialized `NSGradient` object.

<a id="Discussion"></a>

## Discussion

Optionally pass a comma-separated list of alternating `NSColor` objects and location arguments (specified as `CGFloat` values). The first value after `firstColor` must be a location. Each location value must be between 0.0 and 1.0. The list must be `nil`-terminated.

Typically, at least one color should have a location of 0.0 and one should have a location of 1.0. If these locations are not specified, the color at the closest color stop is used to fill the gap.

## See Also

### Creating a Gradient

- [initWithStartingColor:endingColor:](init%28starting_ending_%29.md): Initializes a newly allocated gradient object with two colors.
- [initWithColors:](init%28colors_%29.md): Initializes a newly allocated gradient object with an array of colors.
- [initWithColors:atLocations:colorSpace:](init%28colors_atlocations_colorspace_%29.md): Initializes a newly allocated gradient object with the specified colors, color locations, and color space.
- [initWithCoder:](init%28coder_%29.md): Creates a gradient from data in an unarchiver.
