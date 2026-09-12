> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmultipoint/locationsatpointindexes:](https://developer.apple.com/documentation/mapkit/mkmultipoint/locationsatpointindexes:)

# locationsAtPointIndexes:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a set of unit distance values that correspond to the point indexes along the shape.

## Declaration

```objectivec
- (NSArray<NSNumber *> *) locationsAtPointIndexes:(NSIndexSet *) indexes;
```

## Parameters

- `indexes`: A set of map point indexes associated with the shape.

<a id="return-value"></a>

## Return Value

An [NSIndexSet](../../foundation/nsindexset.md) that corresponds to the point indexes along the shape.

## See Also

### Accessing the points in the shape

- [points](points%28%29.md): Returns an array of map points associated with the shape.
- [pointCount](pointcount.md): The number of points associated with the shape.
- [locationAtPointIndex:](location%28atpointindex_%29.md): Translates a point index into a unit distance along the shape.
