> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgradientpolylinerenderer/setcolors:atlocations:](https://developer.apple.com/documentation/mapkit/mkgradientpolylinerenderer/setcolors:atlocations:)

# setColors:atLocations:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Sets the colors and corresponding unit distance values to create gradients.

## Declaration

```objectivec
- (void) setColors:(NSArray<UIColor *> *) colors atLocations:(NSArray<NSNumber *> *) locations;
```

```objectivec
- (void) setColors:(NSArray<NSColor *> *) colors atLocations:(NSArray<NSNumber *> *) locations;
```

## Parameters

- `colors`: An array of colors making up the transition points of the gradient.
- `locations`: An array of unit distance values that correspond to the provided colors.

<a id="Discussion"></a>

## Discussion

The unit distance value of `0` represents the start of the polyline, and `1` represents the end of the polyline. A gradient may have any number of steps along the length of the polyline.

To determine a location along the polyline, use [locationAtPointIndex:](../mkmultipoint/location%28atpointindex_%29.md), or retrieve a set of locations using [locationsAtPointIndexes:](../mkmultipoint/locationsatpointindexes_.md).

## See Also

### Accessing the gradient colors

- [colors](colors.md): An array that represents the gradient’s color transition points.
- [locations](locations-50knt.md): An array of location indices corresponding to their respective colors.
