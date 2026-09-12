> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeodesicpolyline/init(points:count:)](https://developer.apple.com/documentation/mapkit/mkgeodesicpolyline/init(points:count:))

# init(points:count:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a geodesic polyline using the specified map points.

## Declaration

```swift
convenience init(points: UnsafePointer<MKMapPoint>, count: Int)
```

## Parameters

- `points`: A pointer to the array of map points that define the path.
- `count`: The number of items in the `points` array.

<a id="return-value"></a>

## Return Value

A new geodesic polyline object.

## See Also

### Creating a geodesic polyline overlay

- [init(coordinates:count:)](init%28coordinates_count_%29.md): Creates and returns a geodesic polyline using the specified coordinates.

# polylineWithPoints:count: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a geodesic polyline using the specified map points.

## Declaration

```objectivec
+ (instancetype) polylineWithPoints:(const MKMapPoint *) points count:(NSUInteger) count;
```

## Parameters

- `points`: A pointer to the array of map points that define the path.
- `count`: The number of items in the `points` array.

<a id="return-value"></a>

## Return Value

A new geodesic polyline object.

## See Also

### Creating a geodesic polyline overlay

- [polylineWithCoordinates:count:](init%28coordinates_count_%29.md): Creates and returns a geodesic polyline using the specified coordinates.
