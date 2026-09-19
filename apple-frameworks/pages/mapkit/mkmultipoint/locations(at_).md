> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkmultipoint/locations(at:)

# locations(at:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Translates a point index set into a unit distance along the shape.

## Declaration

```swift
func locations(at indexes: IndexSet) -> [CGFloat]
```

## Parameters

- `indexes`: The index set of map points associated with the shape.

<a id="return-value"></a>

## Return Value

An array of [CGFloat](../../corefoundation/cgfloat-swift.struct.md) values.

## See Also

### Accessing the points in the shape

- [points()](points%28%29.md): Returns an array of map points associated with the shape.
- [pointCount](pointcount.md): The number of points associated with the shape.
- [location(atPointIndex:)](location%28atpointindex_%29.md): Translates a point index into a unit distance along the shape.
