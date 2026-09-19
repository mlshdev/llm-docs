> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hvf/shapewriter/densedeltaoffset(axis:extremum:segment:point:coordinate:)

# denseDeltaOffset(axis:extremum:segment:point:coordinate:)

**Framework:** hvf  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The offset of a coordinate in the denseDeltaMatrix This function uses totalSegmentCount, which must be set correctly before calling

## Declaration

```swift
func denseDeltaOffset(axis: Int, extremum: AxisExtremum, segment: Int, point: SegmentPoint, coordinate: PointCoordinate) -> Int
```
