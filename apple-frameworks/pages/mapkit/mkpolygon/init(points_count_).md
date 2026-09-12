> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolygon/init(points:count:)](https://developer.apple.com/documentation/mapkit/mkpolygon/init(points:count:))

# init(points:count:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a polygon object from the specified set of map points.

## Declaration

```swift
convenience init(points: UnsafePointer<MKMapPoint>, count: Int)
```

## Parameters

- `points`: The array of map points defining the shape. The new object copy the data in this array.
- `count`: The number of items in the `points` array.

<a id="return-value"></a>

## Return Value

A new polygon object.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a polygon overlay

- [init(points:count:interiorPolygons:)](init%28points_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of map points and interior polygons.
- [init(coordinates:count:)](init%28coordinates_count_%29.md): Creates and returns a polygon object from the specified set of coordinates.
- [init(coordinates:count:interiorPolygons:)](init%28coordinates_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of coordinates and interior polygons.

# polygonWithPoints:count: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a polygon object from the specified set of map points.

## Declaration

```objectivec
+ (instancetype) polygonWithPoints:(const MKMapPoint *) points count:(NSUInteger) count;
```

## Parameters

- `points`: The array of map points defining the shape. The new object copy the data in this array.
- `count`: The number of items in the `points` array.

<a id="return-value"></a>

## Return Value

A new polygon object.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a polygon overlay

- [polygonWithPoints:count:interiorPolygons:](init%28points_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of map points and interior polygons.
- [polygonWithCoordinates:count:](init%28coordinates_count_%29.md): Creates and returns a polygon object from the specified set of coordinates.
- [polygonWithCoordinates:count:interiorPolygons:](init%28coordinates_count_interiorpolygons_%29.md): Creates and returns a polygon object from the specified set of coordinates and interior polygons.
