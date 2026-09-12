> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/init(starting:ending:)](https://developer.apple.com/documentation/appkit/nsgradient/init(starting:ending:))

# init(starting:ending:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes a newly allocated gradient object with two colors.

## Declaration

```swift
convenience init?(starting startingColor: NSColor, ending endingColor: NSColor)
```

## Parameters

- `startingColor`: The starting color of the gradient. The location of this color is fixed at 0.0.
- `endingColor`: The ending color of the gradient. The location of this color is fixed at 1.0.

<a id="return-value"></a>

## Return Value

The initialized `NSGradient` object.

## See Also

### Creating a Gradient

- [init(colors:)](init%28colors_%29.md): Initializes a newly allocated gradient object with an array of colors.
- [init(colorsAndLocations:)](init%28colorsandlocations_%29.md): Initializes a newly allocated gradient object with a comma-separated list of arguments.
- [init(colors:atLocations:colorSpace:)](init%28colors_atlocations_colorspace_%29.md): Initializes a newly allocated gradient object with the specified colors, color locations, and color space.
- [init(coder:)](init%28coder_%29.md): Creates a gradient from data in an unarchiver.

# initWithStartingColor:endingColor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes a newly allocated gradient object with two colors.

## Declaration

```objectivec
- (instancetype) initWithStartingColor:(NSColor *) startingColor endingColor:(NSColor *) endingColor;
```

## Parameters

- `startingColor`: The starting color of the gradient. The location of this color is fixed at 0.0.
- `endingColor`: The ending color of the gradient. The location of this color is fixed at 1.0.

<a id="return-value"></a>

## Return Value

The initialized `NSGradient` object.

## See Also

### Creating a Gradient

- [initWithColors:](init%28colors_%29.md): Initializes a newly allocated gradient object with an array of colors.
- [initWithColorsAndLocations:](initwithcolorsandlocations_.md): Initializes a newly allocated gradient object with a comma-separated list of arguments.
- [initWithColors:atLocations:colorSpace:](init%28colors_atlocations_colorspace_%29.md): Initializes a newly allocated gradient object with the specified colors, color locations, and color space.
- [initWithCoder:](init%28coder_%29.md): Creates a gradient from data in an unarchiver.
