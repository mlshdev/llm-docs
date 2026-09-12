> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/interpolatedcolor(atlocation:)](https://developer.apple.com/documentation/appkit/nsgradient/interpolatedcolor(atlocation:))

# interpolatedColor(atLocation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the color of the rendered gradient at the specified relative location.

## Declaration

```swift
func interpolatedColor(atLocation location: CGFloat) -> NSColor
```

## Parameters

- `location`: The location value for the color you want. This value must be between 0.0 and 1.0. This value need not correspond to the location of one of the color objects used to create the gradient.

<a id="Discussion"></a>

## Discussion

This method does not simply return the color values used to initialize the receiver. Instead, it computes the value that would be drawn at the specified location.

The start color of the gradient is always located at 0.0 and the end color is always at 1.0.

## See Also

### Getting Gradient Properties

- [colorSpace](colorspace.md): The color space of the colors associated with the gradient.
- [numberOfColorStops](numberofcolorstops.md): The number of color stops associated with the gradient.
- [getColor(\_:location:at:)](getcolor%28__location_at_%29.md): Returns information about the color stop at the specified index in the receiver’s color array.

# interpolatedColorAtLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the color of the rendered gradient at the specified relative location.

## Declaration

```objectivec
- (NSColor *) interpolatedColorAtLocation:(CGFloat) location;
```

## Parameters

- `location`: The location value for the color you want. This value must be between 0.0 and 1.0. This value need not correspond to the location of one of the color objects used to create the gradient.

<a id="Discussion"></a>

## Discussion

This method does not simply return the color values used to initialize the receiver. Instead, it computes the value that would be drawn at the specified location.

The start color of the gradient is always located at 0.0 and the end color is always at 1.0.

## See Also

### Getting Gradient Properties

- [colorSpace](colorspace.md): The color space of the colors associated with the gradient.
- [numberOfColorStops](numberofcolorstops.md): The number of color stops associated with the gradient.
- [getColor:location:atIndex:](getcolor%28__location_at_%29.md): Returns information about the color stop at the specified index in the receiver’s color array.
