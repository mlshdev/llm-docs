> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkconvertedbezierpointreference/index

# index (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The index of the point along the path.

## Declaration

```swift
var index: Int { get }
```

## See Also

### Getting the point data

- [pointCount](pointcount.md): The total number of B-Spline control points in the path.
- [location](location.md): The location of the cubic uniform B-Spline control point.
- [bezierSegmentIndex](beziersegmentindex.md): The index of the Bézier segment the point originates from, not including `move to` elements.

# index (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The index of the point along the path.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger index;
```

## See Also

### Getting the point data

- [pointCount](pointcount.md): The total number of B-Spline control points in the path.
- [location](location.md): The location of the cubic uniform B-Spline control point.
- [bezierSegmentIndex](beziersegmentindex.md): The index of the Bézier segment the point originates from, not including `move to` elements.
