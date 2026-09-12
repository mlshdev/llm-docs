> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/segment](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/segment)

# UISegmentedControl.Segment (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants for specifying a segment in a control.

## Declaration

```swift
enum Segment
```

## Topics

### Constants

- [UISegmentedControl.Segment.any](segment/any.md): Specifies any segment.
- [UISegmentedControl.Segment.left](segment/left.md): The capped, leftmost segment.
- [UISegmentedControl.Segment.center](segment/center.md): Any segment between the left and rightmost segments.
- [UISegmentedControl.Segment.right](segment/right.md): The capped, rightmost segment.
- [UISegmentedControl.Segment.alone](segment/alone.md): The standalone segment, capped on both ends.

### Initializers

- [init(rawValue:)](segment/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing appearance

- [selectedSegmentTintColor](selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for given state and bar metrics.
- [contentPositionAdjustment(forSegmentType:barMetrics:)](contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment(\_:forSegmentType:barMetrics:)](setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [dividerImage(forLeftSegmentState:rightSegmentState:barMetrics:)](dividerimage%28forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Returns the divider image used for a given combination of left and right segment states and bar metrics.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:barMetrics:)](setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Sets the divider image to use for a given combination of left and right segment states and bar metrics.
- [titleTextAttributes(for:)](titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
- [setTitleTextAttributes(\_:for:)](settitletextattributes%28__for_%29.md): Sets the text attributes of the title for a given control state.

# UISegmentedControlSegment (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants for specifying a segment in a control.

## Declaration

```objectivec
enum UISegmentedControlSegment : NSInteger;
```

## Topics

### Constants

- [UISegmentedControlSegmentAny](segment/any.md): Specifies any segment.
- [UISegmentedControlSegmentLeft](segment/left.md): The capped, leftmost segment.
- [UISegmentedControlSegmentCenter](segment/center.md): Any segment between the left and rightmost segments.
- [UISegmentedControlSegmentRight](segment/right.md): The capped, rightmost segment.
- [UISegmentedControlSegmentAlone](segment/alone.md): The standalone segment, capped on both ends.

## See Also

### Customizing appearance

- [selectedSegmentTintColor](selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImageForState:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [setBackgroundImage:forState:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for given state and bar metrics.
- [contentPositionAdjustmentForSegmentType:barMetrics:](contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment:forSegmentType:barMetrics:](setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [dividerImageForLeftSegmentState:rightSegmentState:barMetrics:](dividerimage%28forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Returns the divider image used for a given combination of left and right segment states and bar metrics.
- [setDividerImage:forLeftSegmentState:rightSegmentState:barMetrics:](setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Sets the divider image to use for a given combination of left and right segment states and bar metrics.
- [titleTextAttributesForState:](titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
- [setTitleTextAttributes:forState:](settitletextattributes%28__for_%29.md): Sets the text attributes of the title for a given control state.
