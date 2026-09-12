> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/getcolor(_:location:at:)](https://developer.apple.com/documentation/appkit/nsgradient/getcolor(_:location:at:))

# getColor(\_:location:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns information about the color stop at the specified index in the receiver’s color array.

## Declaration

```swift
func getColor(_ color: AutoreleasingUnsafeMutablePointer<NSColor>?, location: UnsafeMutablePointer<CGFloat>?, at index: Int)
```

## Parameters

- `color`: On input, a pointer to a color object. On output, the color at the specified index in the receiver’s color array. You may specify `nil` if you are not interested in this parameter.
- `location`: On input, a pointer to a floating point number. On output, contains the location value associated with the color. This value is between 0.0 and 1.0. It is used to determine the position of the color relative to the start and end points of the gradient. You may specify `NULL` if you are not interested in this parameter.
- `index`: The index of the color you want.

<a id="Discussion"></a>

## Discussion

This method returns the color stop information that was used to create the receiver. It does not return the interpolated color values at any point along the gradient. The location of the gradient’s first color is typically 0.0 and the location of the last color is typically 1.0, although the locations can vary depending on how the receiver was created.

## See Also

### Getting Gradient Properties

- [colorSpace](colorspace.md): The color space of the colors associated with the gradient.
- [numberOfColorStops](numberofcolorstops.md): The number of color stops associated with the gradient.
- [interpolatedColor(atLocation:)](interpolatedcolor%28atlocation_%29.md): Returns the color of the rendered gradient at the specified relative location.

# getColor:location:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns information about the color stop at the specified index in the receiver’s color array.

## Declaration

```objectivec
- (void) getColor:(NSColor **) color location:(CGFloat *) location atIndex:(NSInteger) index;
```

## Parameters

- `color`: On input, a pointer to a color object. On output, the color at the specified index in the receiver’s color array. You may specify `nil` if you are not interested in this parameter.
- `location`: On input, a pointer to a floating point number. On output, contains the location value associated with the color. This value is between 0.0 and 1.0. It is used to determine the position of the color relative to the start and end points of the gradient. You may specify `NULL` if you are not interested in this parameter.
- `index`: The index of the color you want.

<a id="Discussion"></a>

## Discussion

This method returns the color stop information that was used to create the receiver. It does not return the interpolated color values at any point along the gradient. The location of the gradient’s first color is typically 0.0 and the location of the last color is typically 1.0, although the locations can vary depending on how the receiver was created.

## See Also

### Getting Gradient Properties

- [colorSpace](colorspace.md): The color space of the colors associated with the gradient.
- [numberOfColorStops](numberofcolorstops.md): The number of color stops associated with the gradient.
- [interpolatedColorAtLocation:](interpolatedcolor%28atlocation_%29.md): Returns the color of the rendered gradient at the specified relative location.
