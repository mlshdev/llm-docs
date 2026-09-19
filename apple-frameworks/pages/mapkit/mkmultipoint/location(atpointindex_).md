> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkmultipoint/location(atpointindex:)

# location(atPointIndex:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Translates a point index into a unit distance along the shape.

## Declaration

```swift
func location(atPointIndex index: Int) -> CGFloat
```

## Parameters

- `index`: The index of the map point associated with the shape.

<a id="return-value"></a>

## Return Value

A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) value that indicates the unit distance along the shape.

## See Also

### Accessing the points in the shape

- [points()](points%28%29.md): Returns an array of map points associated with the shape.
- [pointCount](pointcount.md): The number of points associated with the shape.
- [locations(at:)](locations%28at_%29.md): Translates a point index set into a unit distance along the shape.

# locationAtPointIndex: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Translates a point index into a unit distance along the shape.

## Declaration

```objectivec
- (CGFloat) locationAtPointIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the map point associated with the shape.

<a id="return-value"></a>

## Return Value

A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) value that indicates the unit distance along the shape.

## See Also

### Accessing the points in the shape

- [points](points%28%29.md): Returns an array of map points associated with the shape.
- [pointCount](pointcount.md): The number of points associated with the shape.
- [locationsAtPointIndexes:](locationsatpointindexes_.md): Returns a set of unit distance values that correspond to the point indexes along the shape.
