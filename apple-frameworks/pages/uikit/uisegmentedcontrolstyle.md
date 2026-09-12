> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrolstyle](https://developer.apple.com/documentation/uikit/uisegmentedcontrolstyle)

# UISegmentedControlStyle

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The styles of the segmented control.

> Segmented controls no longer support multiple styles using this functionality. Use the other appearance modification methods and properties to customize a segmented control.

## Declaration

```objectivec
enum UISegmentedControlStyle : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants as values for the [segmentedControlStyle](uisegmentedcontrol/segmentedcontrolstyle.md) property.

## Topics

### Constants

- [UISegmentedControlStylePlain](uisegmentedcontrolstyle/uisegmentedcontrolstyleplain.md): Deprecated. The large plain style for segmented controls.
- [UISegmentedControlStyleBordered](uisegmentedcontrolstyle/uisegmentedcontrolstylebordered.md): Deprecated. The large bordered style for segmented controls.
- [UISegmentedControlStyleBar](uisegmentedcontrolstyle/uisegmentedcontrolstylebar.md): Deprecated. The small toolbar style for segmented controls.
- [UISegmentedControlStyleBezeled](uisegmentedcontrolstyle/uisegmentedcontrolstylebezeled.md): Deprecated. The large bezeled style for segmented controls.

## See Also

### Managing segment behavior and appearance

- [momentary](uisegmentedcontrol/ismomentary.md): A Boolean value that determines whether segments in the segmented control show selected state.
- [setEnabled:forSegmentAtIndex:](uisegmentedcontrol/setenabled%28__forsegmentat_%29.md): Enables the segment you specify.
- [isEnabledForSegmentAtIndex:](uisegmentedcontrol/isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [setContentOffset:forSegmentAtIndex:](uisegmentedcontrol/setcontentoffset%28__forsegmentat_%29.md): Adjusts the offset for drawing the content (image or text) of the specified segment.
- [contentOffsetForSegmentAtIndex:](uisegmentedcontrol/contentoffsetforsegment%28at_%29.md): Returns the offset for drawing the content (image or text) of the segment you specify.
- [setWidth:forSegmentAtIndex:](uisegmentedcontrol/setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegmentAtIndex:](uisegmentedcontrol/widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](uisegmentedcontrol/apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.
- [segmentedControlStyle](uisegmentedcontrol/segmentedcontrolstyle.md): Deprecated. The style of the segmented control.
