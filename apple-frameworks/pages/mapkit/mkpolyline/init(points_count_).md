> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolyline/init(points:count:)](https://developer.apple.com/documentation/mapkit/mkpolyline/init(points:count:))

# init(points:count:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates a polyline object from the specified set of map points.

## Declaration

```swift
convenience init(points: UnsafePointer<MKMapPoint>, count: Int)
```

## Parameters

- `points`: The array of map points defining the shape. The initializer copies the data in this array to the new object.
- `count`: The number of items in the `points` array.

<a id="return-value"></a>

## Return Value

A new polyline object.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a polyline overlay

- [init(coordinates:count:)](init%28coordinates_count_%29.md): Creates a polyline object from the specified set of coordinates.

# polylineWithPoints:count: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates a polyline object from the specified set of map points.

## Declaration

```objectivec
+ (instancetype) polylineWithPoints:(const MKMapPoint *) points count:(NSUInteger) count;
```

## Parameters

- `points`: The array of map points defining the shape. The initializer copies the data in this array to the new object.
- `count`: The number of items in the `points` array.

<a id="return-value"></a>

## Return Value

A new polyline object.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a polyline overlay

- [polylineWithCoordinates:count:](init%28coordinates_count_%29.md): Creates a polyline object from the specified set of coordinates.
