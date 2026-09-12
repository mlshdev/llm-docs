> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/shapewriter](https://developer.apple.com/documentation/hvf/shapewriter)

# ShapeWriter

**Framework:** hvf  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

A protocol for creating a Shape part for rendering or to build an HVGL table

## Declaration

```swift
protocol ShapeWriter
```

## Topics

### Instance Properties

- [axisCount](shapewriter/axiscount.md): The number of axes
- [blendTypes](shapewriter/blendtypes.md): The blend type of each segment, in path order
- [denseDeltaMatrix](shapewriter/densedeltamatrix.md): A dense matrix of segment delta values for extrema, in column order. The columns correspond to the axis extrema, with minimum first, then maximum
- [masterVector](shapewriter/mastervector.md): The master point segments, in path order. Each segment is in the order: Curve: parallel factor, zero, off X, off Y Not curve: on X, on Y, off X, off Y
- [pathSizes](shapewriter/pathsizes.md): The number of segments in each path; must sum to totalSegmentCount
- [totalSegmentCount](shapewriter/totalsegmentcount.md): The total number of segments (on/off pairs) in all paths

### Instance Methods

- [denseDeltaOffset(axis:extremum:segment:point:coordinate:)](shapewriter/densedeltaoffset%28axis_extremum_segment_point_coordinate_%29.md): The offset of a coordinate in the denseDeltaMatrix This function uses totalSegmentCount, which must be set correctly before calling
- [finalize()](shapewriter/finalize%28%29.md): Call when done writing the Shape
- [masterOffset(segment:point:coordinate:)](shapewriter/masteroffset%28segment_point_coordinate_%29.md): The offset of a coordinate in the masterVector
