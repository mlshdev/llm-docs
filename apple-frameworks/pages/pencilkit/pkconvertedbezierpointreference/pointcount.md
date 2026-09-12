> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkconvertedbezierpointreference/pointcount](https://developer.apple.com/documentation/pencilkit/pkconvertedbezierpointreference/pointcount)

# pointCount (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The total number of B-Spline control points in the path.

## Declaration

```swift
var pointCount: Int { get }
```

## See Also

### Getting the point data

- [index](index.md): The index of the point along the path.
- [location](location.md): The location of the cubic uniform B-Spline control point.
- [bezierSegmentIndex](beziersegmentindex.md): The index of the Bézier segment the point originates from, not including `move to` elements.

# pointCount (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The total number of B-Spline control points in the path.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger pointCount;
```

## See Also

### Getting the point data

- [index](index.md): The index of the point along the path.
- [location](location.md): The location of the cubic uniform B-Spline control point.
- [bezierSegmentIndex](beziersegmentindex.md): The index of the Bézier segment the point originates from, not including `move to` elements.
