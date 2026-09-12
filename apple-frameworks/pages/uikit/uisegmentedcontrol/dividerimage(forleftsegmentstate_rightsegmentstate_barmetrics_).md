> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/dividerimage(forleftsegmentstate:rightsegmentstate:barmetrics:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/dividerimage(forleftsegmentstate:rightsegmentstate:barmetrics:))

# dividerImage(forLeftSegmentState:rightSegmentState:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the divider image used for a given combination of left and right segment states and bar metrics.

## Declaration

```swift
func dividerImage(forLeftSegmentState leftState: UIControl.State, rightSegmentState rightState: UIControl.State, barMetrics: UIBarMetrics) -> UIImage?
```

## Parameters

- `leftState`: The state of the left segment.
- `rightState`: The state of the right segment.
- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The divider image used for the given combination of left and right segment states and bar metrics

## See Also

### Customizing appearance

- [selectedSegmentTintColor](selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for given state and bar metrics.
- [contentPositionAdjustment(forSegmentType:barMetrics:)](contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment(\_:forSegmentType:barMetrics:)](setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [UISegmentedControl.Segment](segment.md): Constants for specifying a segment in a control.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:barMetrics:)](setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Sets the divider image to use for a given combination of left and right segment states and bar metrics.
- [titleTextAttributes(for:)](titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
- [setTitleTextAttributes(\_:for:)](settitletextattributes%28__for_%29.md): Sets the text attributes of the title for a given control state.

# dividerImageForLeftSegmentState:rightSegmentState:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the divider image used for a given combination of left and right segment states and bar metrics.

## Declaration

```objectivec
- (UIImage *) dividerImageForLeftSegmentState:(UIControlState) leftState rightSegmentState:(UIControlState) rightState barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `leftState`: The state of the left segment.
- `rightState`: The state of the right segment.
- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The divider image used for the given combination of left and right segment states and bar metrics

## See Also

### Customizing appearance

- [selectedSegmentTintColor](selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImageForState:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [setBackgroundImage:forState:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for given state and bar metrics.
- [contentPositionAdjustmentForSegmentType:barMetrics:](contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment:forSegmentType:barMetrics:](setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [UISegmentedControlSegment](segment.md): Constants for specifying a segment in a control.
- [setDividerImage:forLeftSegmentState:rightSegmentState:barMetrics:](setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Sets the divider image to use for a given combination of left and right segment states and bar metrics.
- [titleTextAttributesForState:](titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
- [setTitleTextAttributes:forState:](settitletextattributes%28__for_%29.md): Sets the text attributes of the title for a given control state.
