> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgradientpolylinerenderer/setcolors(_:locations:)-1tuft](https://developer.apple.com/documentation/mapkit/mkgradientpolylinerenderer/setcolors(_:locations:)-1tuft)

# setColors(\_:locations:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Sets the macOS colors and corresponding unit distance values to create gradients.

## Declaration

```swift
func setColors(_ colors: [NSColor], locations: [CGFloat])
```

## Parameters

- `colors`: An array of colors making up the transition points of the gradient.
- `locations`: An array of unit distance values that correspond to the provided colors.

<a id="Discussion"></a>

## Discussion

The unit distance value of `0` represents the start of the polyline, and `1` represents the end of the polyline. A gradient may have any number of steps along the length of the polyline.

To determine a location along the polyline, use [location(atPointIndex:)](../mkmultipoint/location%28atpointindex_%29.md), or retrieve a set of locations using [locations](locations-7k6qz.md).

## See Also

### Accessing the gradient colors

- [setColors(\_:locations:)](setcolors%28__locations_%29-3xrou.md): Sets the iOS colors and corresponding unit distance values to create gradients.
- [colors](colors.md): An array that represents the gradient’s color transition points.
- [locations](locations-7k6qz.md): An array of location indexes that correspond to their respective colors.
