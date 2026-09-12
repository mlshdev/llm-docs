> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/setcontentoffset(_:forsegmentat:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/setcontentoffset(_:forsegmentat:))

# setContentOffset(\_:forSegmentAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adjusts the offset for drawing the content (image or text) of the specified segment.

## Declaration

```swift
func setContentOffset(_ offset: CGSize, forSegmentAt segment: Int)
```

## Parameters

- `offset`: The offset (as a [CGSize](../../corefoundation/cgsize.md) type) from the origin of the segment at which to draw the segment’s content. The default offset is (0,0).
- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

## See Also

### Managing segment behavior and appearance

- [isMomentary](ismomentary.md): A Boolean value that determines whether segments in the segmented control show selected state.
- [setEnabled(\_:forSegmentAt:)](setenabled%28__forsegmentat_%29.md): Enables the segment you specify.
- [isEnabledForSegment(at:)](isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [contentOffsetForSegment(at:)](contentoffsetforsegment%28at_%29.md): Returns the offset for drawing the content (image or text) of the segment you specify.
- [setWidth(\_:forSegmentAt:)](setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegment(at:)](widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.

# setContentOffset:forSegmentAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adjusts the offset for drawing the content (image or text) of the specified segment.

## Declaration

```objectivec
- (void) setContentOffset:(CGSize) offset forSegmentAtIndex:(NSUInteger) segment;
```

## Parameters

- `offset`: The offset (as a [CGSize](../../corefoundation/cgsize.md) type) from the origin of the segment at which to draw the segment’s content. The default offset is (0,0).
- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

## See Also

### Managing segment behavior and appearance

- [momentary](ismomentary.md): A Boolean value that determines whether segments in the segmented control show selected state.
- [setEnabled:forSegmentAtIndex:](setenabled%28__forsegmentat_%29.md): Enables the segment you specify.
- [isEnabledForSegmentAtIndex:](isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [contentOffsetForSegmentAtIndex:](contentoffsetforsegment%28at_%29.md): Returns the offset for drawing the content (image or text) of the segment you specify.
- [setWidth:forSegmentAtIndex:](setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegmentAtIndex:](widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.
- [segmentedControlStyle](segmentedcontrolstyle.md): Deprecated. The style of the segmented control.
- [UISegmentedControlStyle](../uisegmentedcontrolstyle.md): Deprecated. The styles of the segmented control.
