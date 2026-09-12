> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolygon/init(points:count:interiorpolygons:)](https://developer.apple.com/documentation/mapkit/mkpolygon/init(points:count:interiorpolygons:))

# init(points:count:interiorPolygons:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a polygon object from the specified set of map points and interior polygons.

## Declaration

```swift
convenience init(points: UnsafePointer<MKMapPoint>, count: Int, interiorPolygons: [MKPolygon]?)
```

## Parameters

- `points`: The array of map points defining the shape. The new object copy the data in this array.
- `count`: The number of items in the `points` array.
- `interiorPolygons`: An array of `MKPolygon` objects that define one or more cutout regions for the receiver’s polygon.

<a id="return-value"></a>

## Return Value

A new polygon object.

## See Also

### Creating a polygon overlay

- [init(points:count:)](init%28points_count_%29.md): Creates and returns a polygon object from the specified set of map points.
- [init(coordinates:count:)](init%28coordinates_count_%29.md): Creates and returns a polygon object from the specified set of coordinates.
- [init(coordinates:count:interiorPolygons:)](init%28coordinates_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of coordinates and interior polygons.

# polygonWithPoints:count:interiorPolygons: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a polygon object from the specified set of map points and interior polygons.

## Declaration

```objectivec
+ (instancetype) polygonWithPoints:(const MKMapPoint *) points count:(NSUInteger) count interiorPolygons:(NSArray<MKPolygon *> *) interiorPolygons;
```

## Parameters

- `points`: The array of map points defining the shape. The new object copy the data in this array.
- `count`: The number of items in the `points` array.
- `interiorPolygons`: An array of `MKPolygon` objects that define one or more cutout regions for the receiver’s polygon.

<a id="return-value"></a>

## Return Value

A new polygon object.

## See Also

### Creating a polygon overlay

- [polygonWithPoints:count:](init%28points_count_%29.md): Creates and returns a polygon object from the specified set of map points.
- [polygonWithCoordinates:count:](init%28coordinates_count_%29.md): Creates and returns a polygon object from the specified set of coordinates.
- [polygonWithCoordinates:count:interiorPolygons:](init%28coordinates_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of coordinates and interior polygons.
