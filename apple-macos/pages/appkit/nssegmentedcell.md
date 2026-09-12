> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell](https://developer.apple.com/documentation/appkit/nssegmentedcell)

# NSSegmentedCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An `NSSegmentedCell` object implements the appearance and behavior of a horizontal button divided into multiple segments. This class is used in conjunction with the [NSSegmentedControl](nssegmentedcontrol.md) class to implement a segmented control.

## Declaration

```swift
class NSSegmentedCell
```

<a id="overview"></a>

## Overview

Use the methods of `NSSegmentedCell` to customize the attributes of a segmented control. To customize the appearance of individual segments, you can also subclass and override the [drawSegment(\_:inFrame:with:)](nssegmentedcell/drawsegment%28__inframe_with_%29.md) method.

## Topics

### Specifying the Number of Segments

- [segmentCount](nssegmentedcell/segmentcount.md): The number of segments in the segmented control.

### Specifying the Selected Segment

- [setSelected(\_:forSegment:)](nssegmentedcell/setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectSegment(withTag:)](nssegmentedcell/selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [makeNextSegmentKey()](nssegmentedcell/makenextsegmentkey%28%29.md): Selects the next segment.
- [makePreviousSegmentKey()](nssegmentedcell/makeprevioussegmentkey%28%29.md): Selects the previous segment.
- [selectedSegment](nssegmentedcell/selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [isSelected(forSegment:)](nssegmentedcell/isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected,

### Specifying the Tracking Mode

- [trackingMode](nssegmentedcell/trackingmode.md): The tracking mode used for the segments of the control.

### Configuring Individual Segments

- [setLabel(\_:forSegment:)](nssegmentedcell/setlabel%28__forsegment_%29.md): Sets the label for the specified segment.
- [label(forSegment:)](nssegmentedcell/label%28forsegment_%29.md): Returns the label of the specified segment.
- [setImage(\_:forSegment:)](nssegmentedcell/setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [image(forSegment:)](nssegmentedcell/image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling(\_:forSegment:)](nssegmentedcell/setimagescaling%28__forsegment_%29.md): Sets the image scaling mode for the specified segment.
- [imageScaling(forSegment:)](nssegmentedcell/imagescaling%28forsegment_%29.md): Returns the image scaling mode associated with the specified segment.
- [setWidth(\_:forSegment:)](nssegmentedcell/setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [width(forSegment:)](nssegmentedcell/width%28forsegment_%29.md): Returns the width of the specified segment.
- [setEnabled(\_:forSegment:)](nssegmentedcell/setenabled%28__forsegment_%29.md): Sets the enabled state of the specified segment
- [isEnabled(forSegment:)](nssegmentedcell/isenabled%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is enabled.
- [setMenu(\_:forSegment:)](nssegmentedcell/setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [menu(forSegment:)](nssegmentedcell/menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setToolTip(\_:forSegment:)](nssegmentedcell/settooltip%28__forsegment_%29.md): Sets the tooltip for the specified segment.
- [toolTip(forSegment:)](nssegmentedcell/tooltip%28forsegment_%29.md): Returns the tooltip of the specified segment.
- [setTag(\_:forSegment:)](nssegmentedcell/settag%28__forsegment_%29.md): Sets the tag for the specified segment.
- [tag(forSegment:)](nssegmentedcell/tag%28forsegment_%29.md): Returns the tag of the specified segment.

### Drawing Custom Content

- [drawSegment(\_:inFrame:with:)](nssegmentedcell/drawsegment%28__inframe_with_%29.md): Draws the image and label of the segment in the specified view.

### Specifying Segment Visual Styles

- [interiorBackgroundStyle(forSegment:)](nssegmentedcell/interiorbackgroundstyle%28forsegment_%29.md): Returns the interior background style for the specified segment.
- [segmentStyle](nssegmentedcell/segmentstyle.md): The visual style used to display the segmented control.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSSegmentedCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An `NSSegmentedCell` object implements the appearance and behavior of a horizontal button divided into multiple segments. This class is used in conjunction with the [NSSegmentedControl](nssegmentedcontrol.md) class to implement a segmented control.

## Declaration

```objectivec
@interface NSSegmentedCell : NSActionCell
```

<a id="overview"></a>

## Overview

Use the methods of `NSSegmentedCell` to customize the attributes of a segmented control. To customize the appearance of individual segments, you can also subclass and override the [drawSegment:inFrame:withView:](nssegmentedcell/drawsegment%28__inframe_with_%29.md) method.

## Topics

### Specifying the Number of Segments

- [segmentCount](nssegmentedcell/segmentcount.md): The number of segments in the segmented control.

### Specifying the Selected Segment

- [setSelected:forSegment:](nssegmentedcell/setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectSegmentWithTag:](nssegmentedcell/selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [makeNextSegmentKey](nssegmentedcell/makenextsegmentkey%28%29.md): Selects the next segment.
- [makePreviousSegmentKey](nssegmentedcell/makeprevioussegmentkey%28%29.md): Selects the previous segment.
- [selectedSegment](nssegmentedcell/selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [isSelectedForSegment:](nssegmentedcell/isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected,

### Specifying the Tracking Mode

- [trackingMode](nssegmentedcell/trackingmode.md): The tracking mode used for the segments of the control.

### Configuring Individual Segments

- [setLabel:forSegment:](nssegmentedcell/setlabel%28__forsegment_%29.md): Sets the label for the specified segment.
- [labelForSegment:](nssegmentedcell/label%28forsegment_%29.md): Returns the label of the specified segment.
- [setImage:forSegment:](nssegmentedcell/setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [imageForSegment:](nssegmentedcell/image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling:forSegment:](nssegmentedcell/setimagescaling%28__forsegment_%29.md): Sets the image scaling mode for the specified segment.
- [imageScalingForSegment:](nssegmentedcell/imagescaling%28forsegment_%29.md): Returns the image scaling mode associated with the specified segment.
- [setWidth:forSegment:](nssegmentedcell/setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [widthForSegment:](nssegmentedcell/width%28forsegment_%29.md): Returns the width of the specified segment.
- [setEnabled:forSegment:](nssegmentedcell/setenabled%28__forsegment_%29.md): Sets the enabled state of the specified segment
- [isEnabledForSegment:](nssegmentedcell/isenabled%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is enabled.
- [setMenu:forSegment:](nssegmentedcell/setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [menuForSegment:](nssegmentedcell/menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setToolTip:forSegment:](nssegmentedcell/settooltip%28__forsegment_%29.md): Sets the tooltip for the specified segment.
- [toolTipForSegment:](nssegmentedcell/tooltip%28forsegment_%29.md): Returns the tooltip of the specified segment.
- [setTag:forSegment:](nssegmentedcell/settag%28__forsegment_%29.md): Sets the tag for the specified segment.
- [tagForSegment:](nssegmentedcell/tag%28forsegment_%29.md): Returns the tag of the specified segment.

### Drawing Custom Content

- [drawSegment:inFrame:withView:](nssegmentedcell/drawsegment%28__inframe_with_%29.md): Draws the image and label of the segment in the specified view.

### Specifying Segment Visual Styles

- [interiorBackgroundStyleForSegment:](nssegmentedcell/interiorbackgroundstyle%28forsegment_%29.md): Returns the interior background style for the specified segment.
- [segmentStyle](nssegmentedcell/segmentstyle.md): The visual style used to display the segmented control.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)
