> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/segmentedcontrolstyle](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/segmentedcontrolstyle)

# segmentedControlStyle

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The style of the segmented control.

> Segmented controls no longer support multiple styles using this functionality. Use the other appearance modification methods and properties to customize a segmented control.

## Declaration

```objectivec
@property (nonatomic) UISegmentedControlStyle segmentedControlStyle;
```

<a id="Discussion"></a>

## Discussion

The default style is [UISegmentedControlStylePlain](../uisegmentedcontrolstyle/uisegmentedcontrolstyleplain.md). See [UISegmentedControlStyle](../uisegmentedcontrolstyle.md) for descriptions of valid constants.

## See Also

### Managing segment behavior and appearance

- [momentary](ismomentary.md): A Boolean value that determines whether segments in the segmented control show selected state.
- [setEnabled:forSegmentAtIndex:](setenabled%28__forsegmentat_%29.md): Enables the segment you specify.
- [isEnabledForSegmentAtIndex:](isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [setContentOffset:forSegmentAtIndex:](setcontentoffset%28__forsegmentat_%29.md): Adjusts the offset for drawing the content (image or text) of the specified segment.
- [contentOffsetForSegmentAtIndex:](contentoffsetforsegment%28at_%29.md): Returns the offset for drawing the content (image or text) of the segment you specify.
- [setWidth:forSegmentAtIndex:](setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegmentAtIndex:](widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.
- [UISegmentedControlStyle](../uisegmentedcontrolstyle.md): Deprecated. The styles of the segmented control.
