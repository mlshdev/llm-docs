> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmultipoint/pointcount](https://developer.apple.com/documentation/mapkit/mkmultipoint/pointcount)

# pointCount (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The number of points associated with the shape.

## Declaration

```swift
var pointCount: Int { get }
```

## See Also

### Accessing the points in the shape

- [points()](points%28%29.md): Returns an array of map points associated with the shape.
- [location(atPointIndex:)](location%28atpointindex_%29.md): Translates a point index into a unit distance along the shape.
- [locations(at:)](locations%28at_%29.md): Translates a point index set into a unit distance along the shape.

# pointCount (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The number of points associated with the shape.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger pointCount;
```

## See Also

### Accessing the points in the shape

- [points](points%28%29.md): Returns an array of map points associated with the shape.
- [locationAtPointIndex:](location%28atpointindex_%29.md): Translates a point index into a unit distance along the shape.
- [locationsAtPointIndexes:](locationsatpointindexes_.md): Returns a set of unit distance values that correspond to the point indexes along the shape.
