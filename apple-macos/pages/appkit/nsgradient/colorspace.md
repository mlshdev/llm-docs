> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/colorspace](https://developer.apple.com/documentation/appkit/nsgradient/colorspace)

# colorSpace (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The color space of the colors associated with the gradient.

## Declaration

```swift
var colorSpace: NSColorSpace { get }
```

<a id="Discussion"></a>

## Discussion

When the receiver is initialized, colors that do not conform to the receiver’s color space are converted automatically.

## See Also

### Getting Gradient Properties

- [numberOfColorStops](numberofcolorstops.md): The number of color stops associated with the gradient.
- [getColor(\_:location:at:)](getcolor%28__location_at_%29.md): Returns information about the color stop at the specified index in the receiver’s color array.
- [interpolatedColor(atLocation:)](interpolatedcolor%28atlocation_%29.md): Returns the color of the rendered gradient at the specified relative location.

# colorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The color space of the colors associated with the gradient.

## Declaration

```objectivec
@property (strong, readonly) NSColorSpace * colorSpace;
```

<a id="Discussion"></a>

## Discussion

When the receiver is initialized, colors that do not conform to the receiver’s color space are converted automatically.

## See Also

### Getting Gradient Properties

- [numberOfColorStops](numberofcolorstops.md): The number of color stops associated with the gradient.
- [getColor:location:atIndex:](getcolor%28__location_at_%29.md): Returns information about the color stop at the specified index in the receiver’s color array.
- [interpolatedColorAtLocation:](interpolatedcolor%28atlocation_%29.md): Returns the color of the rendered gradient at the specified relative location.
