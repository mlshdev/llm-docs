> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/ismomentary](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/ismomentary)

# isMomentary (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether segments in the segmented control show selected state.

## Declaration

```swift
var isMomentary: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). If it’s set to [true](https://developer.apple.com/documentation/swift/true), segments in the control don’t show selected state and don’t update the value of [selectedSegmentIndex](selectedsegmentindex.md) after tracking ends.

## See Also

### Managing segment behavior and appearance

- [setEnabled(\_:forSegmentAt:)](setenabled%28__forsegmentat_%29.md): Enables the segment you specify.
- [isEnabledForSegment(at:)](isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [setContentOffset(\_:forSegmentAt:)](setcontentoffset%28__forsegmentat_%29.md): Adjusts the offset for drawing the content (image or text) of the specified segment.
- [contentOffsetForSegment(at:)](contentoffsetforsegment%28at_%29.md): Returns the offset for drawing the content (image or text) of the segment you specify.
- [setWidth(\_:forSegmentAt:)](setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegment(at:)](widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.

# momentary (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether segments in the segmented control show selected state.

## Declaration

```objectivec
@property (nonatomic, getter=isMomentary) BOOL momentary;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). If it’s set to [true](https://developer.apple.com/documentation/swift/true), segments in the control don’t show selected state and don’t update the value of [selectedSegmentIndex](selectedsegmentindex.md) after tracking ends.

## See Also

### Managing segment behavior and appearance

- [setEnabled:forSegmentAtIndex:](setenabled%28__forsegmentat_%29.md): Enables the segment you specify.
- [isEnabledForSegmentAtIndex:](isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [setContentOffset:forSegmentAtIndex:](setcontentoffset%28__forsegmentat_%29.md): Adjusts the offset for drawing the content (image or text) of the specified segment.
- [contentOffsetForSegmentAtIndex:](contentoffsetforsegment%28at_%29.md): Returns the offset for drawing the content (image or text) of the segment you specify.
- [setWidth:forSegmentAtIndex:](setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegmentAtIndex:](widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.
- [segmentedControlStyle](segmentedcontrolstyle.md): Deprecated. The style of the segmented control.
- [UISegmentedControlStyle](../uisegmentedcontrolstyle.md): Deprecated. The styles of the segmented control.
