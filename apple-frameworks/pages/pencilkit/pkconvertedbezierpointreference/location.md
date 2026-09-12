> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkconvertedbezierpointreference/location](https://developer.apple.com/documentation/pencilkit/pkconvertedbezierpointreference/location)

# location (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The location of the cubic uniform B-Spline control point.

## Declaration

```swift
var location: CGPoint { get }
```

## See Also

### Getting the point data

- [index](index.md): The index of the point along the path.
- [pointCount](pointcount.md): The total number of B-Spline control points in the path.
- [bezierSegmentIndex](beziersegmentindex.md): The index of the Bézier segment the point originates from, not including `move to` elements.

# location (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The location of the cubic uniform B-Spline control point.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CGPoint location;
```

## See Also

### Getting the point data

- [index](index.md): The index of the point along the path.
- [pointCount](pointcount.md): The total number of B-Spline control points in the path.
- [bezierSegmentIndex](beziersegmentindex.md): The index of the Bézier segment the point originates from, not including `move to` elements.
