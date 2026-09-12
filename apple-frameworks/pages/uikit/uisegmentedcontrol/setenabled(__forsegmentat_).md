> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/setenabled(_:forsegmentat:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/setenabled(_:forsegmentat:))

# setEnabled(\_:forSegmentAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Enables the segment you specify.

## Declaration

```swift
func setEnabled(_ enabled: Bool, forSegmentAt segment: Int)
```

## Parameters

- `enabled`: [true](https://developer.apple.com/documentation/swift/true) to enable the segment you specify or [false](https://developer.apple.com/documentation/swift/false) to disable the segment. [true](https://developer.apple.com/documentation/swift/true) by default.
- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

## See Also

### Managing segment behavior and appearance

- [isMomentary](ismomentary.md): A Boolean value that determines whether segments in the segmented control show selected state.
- [isEnabledForSegment(at:)](isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [setContentOffset(\_:forSegmentAt:)](setcontentoffset%28__forsegmentat_%29.md): Adjusts the offset for drawing the content (image or text) of the specified segment.
- [contentOffsetForSegment(at:)](contentoffsetforsegment%28at_%29.md): Returns the offset for drawing the content (image or text) of the segment you specify.
- [setWidth(\_:forSegmentAt:)](setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegment(at:)](widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.

# setEnabled:forSegmentAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Enables the segment you specify.

## Declaration

```objectivec
- (void) setEnabled:(BOOL) enabled forSegmentAtIndex:(NSUInteger) segment;
```

## Parameters

- `enabled`: [true](https://developer.apple.com/documentation/swift/true) to enable the segment you specify or [false](https://developer.apple.com/documentation/swift/false) to disable the segment. [true](https://developer.apple.com/documentation/swift/true) by default.
- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

## See Also

### Managing segment behavior and appearance

- [momentary](ismomentary.md): A Boolean value that determines whether segments in the segmented control show selected state.
- [isEnabledForSegmentAtIndex:](isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [setContentOffset:forSegmentAtIndex:](setcontentoffset%28__forsegmentat_%29.md): Adjusts the offset for drawing the content (image or text) of the specified segment.
- [contentOffsetForSegmentAtIndex:](contentoffsetforsegment%28at_%29.md): Returns the offset for drawing the content (image or text) of the segment you specify.
- [setWidth:forSegmentAtIndex:](setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegmentAtIndex:](widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.
- [segmentedControlStyle](segmentedcontrolstyle.md): Deprecated. The style of the segmented control.
- [UISegmentedControlStyle](../uisegmentedcontrolstyle.md): Deprecated. The styles of the segmented control.
