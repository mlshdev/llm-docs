> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgradientpolylinerenderer/locations-50knt](https://developer.apple.com/documentation/mapkit/mkgradientpolylinerenderer/locations-50knt)

# locations

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of location indices corresponding to their respective colors.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSNumber *> * locations;
```

## See Also

### Accessing the gradient colors

- [setColors:atLocations:](setcolors_atlocations_.md): Sets the colors and corresponding unit distance values to create gradients.
- [colors](colors.md): An array that represents the gradient’s color transition points.
