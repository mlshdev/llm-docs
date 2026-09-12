> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/steps](https://developer.apple.com/documentation/mapkit/mkroute/steps)

# steps (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The array of steps that create the overall route.

## Declaration

```swift
var steps: [MKRoute.Step] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains one or more [MKRoute.Step](step.md) objects representing distinct portions of the route. Each step corresponds to a single direction that must be followed along the route.

## See Also

### Getting the route geometry

- [polyline](polyline.md): The detailed route geometry.
- [MKRoute.Step](step.md): One portion of an overall route.

# steps (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The array of steps that create the overall route.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<MKRouteStep *> * steps;
```

<a id="Discussion"></a>

## Discussion

The array contains one or more [MKRouteStep](step.md) objects representing distinct portions of the route. Each step corresponds to a single direction that must be followed along the route.

## See Also

### Getting the route geometry

- [polyline](polyline.md): The detailed route geometry.
- [MKRouteStep](step.md): One portion of an overall route.
