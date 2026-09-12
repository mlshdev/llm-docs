> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/numberofcolorstops](https://developer.apple.com/documentation/appkit/nsgradient/numberofcolorstops)

# numberOfColorStops (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The number of color stops associated with the gradient.

## Declaration

```swift
var numberOfColorStops: Int { get }
```

<a id="Discussion"></a>

## Discussion

Gradients must have at least two color stops: one defining the location of the start color and one defining the location of the end color. Gradients may have additional color stops located at different transition points in between the start and end stops.

## See Also

### Getting Gradient Properties

- [colorSpace](colorspace.md): The color space of the colors associated with the gradient.
- [getColor(\_:location:at:)](getcolor%28__location_at_%29.md): Returns information about the color stop at the specified index in the receiver’s color array.
- [interpolatedColor(atLocation:)](interpolatedcolor%28atlocation_%29.md): Returns the color of the rendered gradient at the specified relative location.

# numberOfColorStops (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The number of color stops associated with the gradient.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfColorStops;
```

<a id="Discussion"></a>

## Discussion

Gradients must have at least two color stops: one defining the location of the start color and one defining the location of the end color. Gradients may have additional color stops located at different transition points in between the start and end stops.

## See Also

### Getting Gradient Properties

- [colorSpace](colorspace.md): The color space of the colors associated with the gradient.
- [getColor:location:atIndex:](getcolor%28__location_at_%29.md): Returns information about the color stop at the specified index in the receiver’s color array.
- [interpolatedColorAtLocation:](interpolatedcolor%28atlocation_%29.md): Returns the color of the rendered gradient at the specified relative location.
