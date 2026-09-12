> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/contentoffsetforsegment(at:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/contentoffsetforsegment(at:))

# contentOffsetForSegment(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the offset for drawing the content (image or text) of the segment you specify.

## Declaration

```swift
func contentOffsetForSegment(at segment: Int) -> CGSize
```

## Parameters

- `segment`: An index number that identifies a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

<a id="return-value"></a>

## Return Value

The offset (as a [CGSize](../../corefoundation/cgsize.md) structure) from the origin of the segment at which to draw the segment’s content.

## See Also

### Managing segment behavior and appearance

- [isMomentary](ismomentary.md): A Boolean value that determines whether segments in the segmented control show selected state.
- [setEnabled(\_:forSegmentAt:)](setenabled%28__forsegmentat_%29.md): Enables the segment you specify.
- [isEnabledForSegment(at:)](isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [setContentOffset(\_:forSegmentAt:)](setcontentoffset%28__forsegmentat_%29.md): Adjusts the offset for drawing the content (image or text) of the specified segment.
- [setWidth(\_:forSegmentAt:)](setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegment(at:)](widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.

# contentOffsetForSegmentAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the offset for drawing the content (image or text) of the segment you specify.

## Declaration

```objectivec
- (CGSize) contentOffsetForSegmentAtIndex:(NSUInteger) segment;
```

## Parameters

- `segment`: An index number that identifies a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

<a id="return-value"></a>

## Return Value

The offset (as a [CGSize](../../corefoundation/cgsize.md) structure) from the origin of the segment at which to draw the segment’s content.

## See Also

### Managing segment behavior and appearance

- [momentary](ismomentary.md): A Boolean value that determines whether segments in the segmented control show selected state.
- [setEnabled:forSegmentAtIndex:](setenabled%28__forsegmentat_%29.md): Enables the segment you specify.
- [isEnabledForSegmentAtIndex:](isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [setContentOffset:forSegmentAtIndex:](setcontentoffset%28__forsegmentat_%29.md): Adjusts the offset for drawing the content (image or text) of the specified segment.
- [setWidth:forSegmentAtIndex:](setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegmentAtIndex:](widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.
- [segmentedControlStyle](segmentedcontrolstyle.md): Deprecated. The style of the segmented control.
- [UISegmentedControlStyle](../uisegmentedcontrolstyle.md): Deprecated. The styles of the segmented control.
