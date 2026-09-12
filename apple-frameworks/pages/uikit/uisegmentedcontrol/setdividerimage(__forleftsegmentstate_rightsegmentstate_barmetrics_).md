> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/setdividerimage(_:forleftsegmentstate:rightsegmentstate:barmetrics:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/setdividerimage(_:forleftsegmentstate:rightsegmentstate:barmetrics:))

# setDividerImage(\_:forLeftSegmentState:rightSegmentState:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the divider image to use for a given combination of left and right segment states and bar metrics.

## Declaration

```swift
func setDividerImage(_ dividerImage: UIImage?, forLeftSegmentState leftState: UIControl.State, rightSegmentState rightState: UIControl.State, barMetrics: UIBarMetrics)
```

## Parameters

- `dividerImage`: The divider image to use.
- `leftState`: The state of the left segment.
- `rightState`: The state of the right segment.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

To customize the segmented control appearance, provide divider images for the following cases:

- Between two unselected segments, where `leftState` and `rightState` are both [normal](../uicontrol/state-swift.struct/normal.md)
- Between a selected segment on the left and an unselected on the right, where `leftState` is [selected](../uicontrol/state-swift.struct/selected.md) and `rightState` is [normal](../uicontrol/state-swift.struct/normal.md)
- Between an unselected segment on the left and a selected on the right, where `leftState` is [normal](../uicontrol/state-swift.struct/normal.md) and `rightState` is [selected](../uicontrol/state-swift.struct/selected.md)

## See Also

### Customizing appearance

- [selectedSegmentTintColor](selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for given state and bar metrics.
- [contentPositionAdjustment(forSegmentType:barMetrics:)](contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment(\_:forSegmentType:barMetrics:)](setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [UISegmentedControl.Segment](segment.md): Constants for specifying a segment in a control.
- [dividerImage(forLeftSegmentState:rightSegmentState:barMetrics:)](dividerimage%28forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Returns the divider image used for a given combination of left and right segment states and bar metrics.
- [titleTextAttributes(for:)](titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
- [setTitleTextAttributes(\_:for:)](settitletextattributes%28__for_%29.md): Sets the text attributes of the title for a given control state.

# setDividerImage:forLeftSegmentState:rightSegmentState:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the divider image to use for a given combination of left and right segment states and bar metrics.

## Declaration

```objectivec
- (void) setDividerImage:(UIImage *) dividerImage forLeftSegmentState:(UIControlState) leftState rightSegmentState:(UIControlState) rightState barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `dividerImage`: The divider image to use.
- `leftState`: The state of the left segment.
- `rightState`: The state of the right segment.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

To customize the segmented control appearance, provide divider images for the following cases:

- Between two unselected segments, where `leftState` and `rightState` are both [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md)
- Between a selected segment on the left and an unselected on the right, where `leftState` is [UIControlStateSelected](../uicontrol/state-swift.struct/selected.md) and `rightState` is [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md)
- Between an unselected segment on the left and a selected on the right, where `leftState` is [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) and `rightState` is [UIControlStateSelected](../uicontrol/state-swift.struct/selected.md)

## See Also

### Customizing appearance

- [selectedSegmentTintColor](selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImageForState:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [setBackgroundImage:forState:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for given state and bar metrics.
- [contentPositionAdjustmentForSegmentType:barMetrics:](contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment:forSegmentType:barMetrics:](setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [UISegmentedControlSegment](segment.md): Constants for specifying a segment in a control.
- [dividerImageForLeftSegmentState:rightSegmentState:barMetrics:](dividerimage%28forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Returns the divider image used for a given combination of left and right segment states and bar metrics.
- [titleTextAttributesForState:](titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
- [setTitleTextAttributes:forState:](settitletextattributes%28__for_%29.md): Sets the text attributes of the title for a given control state.
