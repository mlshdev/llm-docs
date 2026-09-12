> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolygon/init(coordinates:count:)](https://developer.apple.com/documentation/mapkit/mkpolygon/init(coordinates:count:))

# init(coordinates:count:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a polygon object from the specified set of coordinates.

## Declaration

```swift
convenience init(coordinates coords: UnsafePointer<CLLocationCoordinate2D>, count: Int)
```

## Parameters

- `coords`: The array of coordinates defining the shape. The new object copies the data in this array.
- `count`: The number of items in the `coords` array.

<a id="return-value"></a>

## Return Value

A new polygon object.

## See Also

### Creating a polygon overlay

- [init(points:count:)](init%28points_count_%29.md): Creates and returns a polygon object from the specified set of map points.
- [init(points:count:interiorPolygons:)](init%28points_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of map points and interior polygons.
- [init(coordinates:count:interiorPolygons:)](init%28coordinates_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of coordinates and interior polygons.

# polygonWithCoordinates:count: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a polygon object from the specified set of coordinates.

## Declaration

```objectivec
+ (instancetype) polygonWithCoordinates:(const CLLocationCoordinate2D *) coords count:(NSUInteger) count;
```

## Parameters

- `coords`: The array of coordinates defining the shape. The new object copies the data in this array.
- `count`: The number of items in the `coords` array.

<a id="return-value"></a>

## Return Value

A new polygon object.

## See Also

### Creating a polygon overlay

- [polygonWithPoints:count:](init%28points_count_%29.md): Creates and returns a polygon object from the specified set of map points.
- [polygonWithPoints:count:interiorPolygons:](init%28points_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of map points and interior polygons.
- [polygonWithCoordinates:count:interiorPolygons:](init%28coordinates_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of coordinates and interior polygons.
