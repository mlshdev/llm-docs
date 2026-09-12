> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgradientpolylinerenderer/colors](https://developer.apple.com/documentation/mapkit/mkgradientpolylinerenderer/colors)

# colors (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array that represents the gradient’s color transition points.

## Declaration

```swift
var colors: [UIColor] { get }
```

```swift
var colors: [NSColor] { get }
```

## See Also

### Accessing the gradient colors

- [setColors(\_:locations:)](setcolors%28__locations_%29-3xrou.md): Sets the iOS colors and corresponding unit distance values to create gradients.
- [setColors(\_:locations:)](setcolors%28__locations_%29-1tuft.md): Sets the macOS colors and corresponding unit distance values to create gradients.
- [locations](locations-7k6qz.md): An array of location indexes that correspond to their respective colors.

# colors (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array that represents the gradient’s color transition points.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<UIColor *> * colors;
```

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSColor *> * colors;
```

## See Also

### Accessing the gradient colors

- [setColors:atLocations:](setcolors_atlocations_.md): Sets the colors and corresponding unit distance values to create gradients.
- [locations](locations-50knt.md): An array of location indices corresponding to their respective colors.
