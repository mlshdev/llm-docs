> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmultipoint/points()](https://developer.apple.com/documentation/mapkit/mkmultipoint/points())

# points() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of map points associated with the shape.

## Declaration

```swift
func points() -> UnsafeMutablePointer<MKMapPoint>
```

<a id="return-value"></a>

## Return Value

An unsafe mutable array of [MKMapPoint](../mkmappoint.md) structures.

<a id="Discussion"></a>

## Discussion

The [pointCount](pointcount.md) property specifies the number of points in the array.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Accessing the points in the shape

- [pointCount](pointcount.md): The number of points associated with the shape.
- [location(atPointIndex:)](location%28atpointindex_%29.md): Translates a point index into a unit distance along the shape.
- [locations(at:)](locations%28at_%29.md): Translates a point index set into a unit distance along the shape.

# points (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of map points associated with the shape.

## Declaration

```objectivec
- (MKMapPoint *) points;
```

<a id="return-value"></a>

## Return Value

An unsafe mutable array of [MKMapPoint](../mkmappoint.md) structures.

<a id="Discussion"></a>

## Discussion

The [pointCount](pointcount.md) property specifies the number of points in the array.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Accessing the points in the shape

- [pointCount](pointcount.md): The number of points associated with the shape.
- [locationAtPointIndex:](location%28atpointindex_%29.md): Translates a point index into a unit distance along the shape.
- [locationsAtPointIndexes:](locationsatpointindexes_.md): Returns a set of unit distance values that correspond to the point indexes along the shape.
