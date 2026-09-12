> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/setbackgroundimage(_:for:barmetrics:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/setbackgroundimage(_:for:barmetrics:))

# setBackgroundImage(\_:for:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image for given state and bar metrics.

## Declaration

```swift
func setBackgroundImage(_ backgroundImage: UIImage?, for state: UIControl.State, barMetrics: UIBarMetrics)
```

## Parameters

- `backgroundImage`: The background image to use for `state` and `barMetrics`.
- `state`: A control state.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

If `backgroundImage` is an image that [resizableImage(withCapInsets:)](../uiimage/resizableimage%28withcapinsets_%29.md) returns, the system calculates the cap widths from that information.

If `backgroundImage` isn’t an image that [resizableImage(withCapInsets:)](../uiimage/resizableimage%28withcapinsets_%29.md) returns, the system calculates the cap width by subtracting one from the image’s width, then dividing by 2. The system uses the cap widths as the margins for text placement. To adjust the margin, use the margin adjustment methods.

Generally, specify a value for the [normal](../uicontrol/state-swift.struct/normal.md) state. The segmented control uses this state for other states that don’t have a custom value set.

Similarly, when a property is dependent on the bar metrics, be sure to specify a value for [UIBarMetrics.default](../uibarmetrics/default.md). The segmented control respects properties for [UIBarMetrics.compact](../uibarmetrics/compact.md) only when the control is in smaller navigation and toolbars.

## See Also

### Customizing appearance

- [selectedSegmentTintColor](selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [contentPositionAdjustment(forSegmentType:barMetrics:)](contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment(\_:forSegmentType:barMetrics:)](setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [UISegmentedControl.Segment](segment.md): Constants for specifying a segment in a control.
- [dividerImage(forLeftSegmentState:rightSegmentState:barMetrics:)](dividerimage%28forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Returns the divider image used for a given combination of left and right segment states and bar metrics.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:barMetrics:)](setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Sets the divider image to use for a given combination of left and right segment states and bar metrics.
- [titleTextAttributes(for:)](titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
- [setTitleTextAttributes(\_:for:)](settitletextattributes%28__for_%29.md): Sets the text attributes of the title for a given control state.

# setBackgroundImage:forState:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image for given state and bar metrics.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) backgroundImage forState:(UIControlState) state barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `backgroundImage`: The background image to use for `state` and `barMetrics`.
- `state`: A control state.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

If `backgroundImage` is an image that [resizableImageWithCapInsets:](../uiimage/resizableimage%28withcapinsets_%29.md) returns, the system calculates the cap widths from that information.

If `backgroundImage` isn’t an image that [resizableImageWithCapInsets:](../uiimage/resizableimage%28withcapinsets_%29.md) returns, the system calculates the cap width by subtracting one from the image’s width, then dividing by 2. The system uses the cap widths as the margins for text placement. To adjust the margin, use the margin adjustment methods.

Generally, specify a value for the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) state. The segmented control uses this state for other states that don’t have a custom value set.

Similarly, when a property is dependent on the bar metrics, be sure to specify a value for [UIBarMetricsDefault](../uibarmetrics/default.md). The segmented control respects properties for [UIBarMetricsCompact](../uibarmetrics/compact.md) only when the control is in smaller navigation and toolbars.

## See Also

### Customizing appearance

- [selectedSegmentTintColor](selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImageForState:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [contentPositionAdjustmentForSegmentType:barMetrics:](contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment:forSegmentType:barMetrics:](setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [UISegmentedControlSegment](segment.md): Constants for specifying a segment in a control.
- [dividerImageForLeftSegmentState:rightSegmentState:barMetrics:](dividerimage%28forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Returns the divider image used for a given combination of left and right segment states and bar metrics.
- [setDividerImage:forLeftSegmentState:rightSegmentState:barMetrics:](setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Sets the divider image to use for a given combination of left and right segment states and bar metrics.
- [titleTextAttributesForState:](titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
- [setTitleTextAttributes:forState:](settitletextattributes%28__for_%29.md): Sets the text attributes of the title for a given control state.
