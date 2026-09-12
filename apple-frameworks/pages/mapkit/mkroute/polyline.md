> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/polyline](https://developer.apple.com/documentation/mapkit/mkroute/polyline)

# polyline (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The detailed route geometry.

## Declaration

```swift
var polyline: MKPolyline { get }
```

<a id="Discussion"></a>

## Discussion

The polyline object in this property reflects the complete path of the route, including all of its steps. You can use the polyline object as an overlay in a map view.

## See Also

### Getting the route geometry

- [steps](steps.md): The array of steps that create the overall route.
- [MKRoute.Step](step.md): One portion of an overall route.

# polyline (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The detailed route geometry.

## Declaration

```objectivec
@property (nonatomic, readonly) MKPolyline * polyline;
```

<a id="Discussion"></a>

## Discussion

The polyline object in this property reflects the complete path of the route, including all of its steps. You can use the polyline object as an overlay in a map view.

## See Also

### Getting the route geometry

- [steps](steps.md): The array of steps that create the overall route.
- [MKRouteStep](step.md): One portion of an overall route.
