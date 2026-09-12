> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeodesicpolyline/init(coordinates:count:)](https://developer.apple.com/documentation/mapkit/mkgeodesicpolyline/init(coordinates:count:))

# init(coordinates:count:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a geodesic polyline using the specified coordinates.

## Declaration

```swift
convenience init(coordinates coords: UnsafePointer<CLLocationCoordinate2D>, count: Int)
```

## Parameters

- `coords`: A pointer to the array of coordinates that define the path.
- `count`: The number of items in the `coords` array.

<a id="return-value"></a>

## Return Value

A new geodesic polyline object.

## See Also

### Creating a geodesic polyline overlay

- [init(points:count:)](init%28points_count_%29.md): Creates and returns a geodesic polyline using the specified map points.

# polylineWithCoordinates:count: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a geodesic polyline using the specified coordinates.

## Declaration

```objectivec
+ (instancetype) polylineWithCoordinates:(const CLLocationCoordinate2D *) coords count:(NSUInteger) count;
```

## Parameters

- `coords`: A pointer to the array of coordinates that define the path.
- `count`: The number of items in the `coords` array.

<a id="return-value"></a>

## Return Value

A new geodesic polyline object.

## See Also

### Creating a geodesic polyline overlay

- [polylineWithPoints:count:](init%28points_count_%29.md): Creates and returns a geodesic polyline using the specified map points.
