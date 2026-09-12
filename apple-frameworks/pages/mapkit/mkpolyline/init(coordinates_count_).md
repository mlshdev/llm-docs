> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolyline/init(coordinates:count:)](https://developer.apple.com/documentation/mapkit/mkpolyline/init(coordinates:count:))

# init(coordinates:count:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates a polyline object from the specified set of coordinates.

## Declaration

```swift
convenience init(coordinates coords: UnsafePointer<CLLocationCoordinate2D>, count: Int)
```

## Parameters

- `coords`: The array of coordinates defining the shape. The initializer copies the data in this array to the new object.
- `count`: The number of items in the `coords` array.

<a id="return-value"></a>

## Return Value

A new polyline object.

## See Also

### Creating a polyline overlay

- [init(points:count:)](init%28points_count_%29.md): Creates a polyline object from the specified set of map points.

# polylineWithCoordinates:count: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates a polyline object from the specified set of coordinates.

## Declaration

```objectivec
+ (instancetype) polylineWithCoordinates:(const CLLocationCoordinate2D *) coords count:(NSUInteger) count;
```

## Parameters

- `coords`: The array of coordinates defining the shape. The initializer copies the data in this array to the new object.
- `count`: The number of items in the `coords` array.

<a id="return-value"></a>

## Return Value

A new polyline object.

## See Also

### Creating a polyline overlay

- [polylineWithPoints:count:](init%28points_count_%29.md): Creates a polyline object from the specified set of map points.
