> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/settitletextattributes(_:for:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/settitletextattributes(_:for:))

# setTitleTextAttributes(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the text attributes of the title for a given control state.

## Declaration

```swift
func setTitleTextAttributes(_ attributes: [NSAttributedString.Key : Any]?, for state: UIControl.State)
```

## Parameters

- `attributes`: The text attributes of the title for `state`.
- `state`: A control state.

<a id="Discussion"></a>

## Discussion

The attributes dictionary can specify the font, text color, text shadow color, and text shadow offset for the title in the text attributes dictionary, using the keys in [NSAttributedString.Key](../../foundation/nsattributedstring/key.md).

## See Also

### Customizing appearance

- [selectedSegmentTintColor](selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for given state and bar metrics.
- [contentPositionAdjustment(forSegmentType:barMetrics:)](contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment(\_:forSegmentType:barMetrics:)](setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [UISegmentedControl.Segment](segment.md): Constants for specifying a segment in a control.
- [dividerImage(forLeftSegmentState:rightSegmentState:barMetrics:)](dividerimage%28forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Returns the divider image used for a given combination of left and right segment states and bar metrics.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:barMetrics:)](setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Sets the divider image to use for a given combination of left and right segment states and bar metrics.
- [titleTextAttributes(for:)](titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.

# setTitleTextAttributes:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the text attributes of the title for a given control state.

## Declaration

```objectivec
- (void) setTitleTextAttributes:(NSDictionary<NSString *,id> *) attributes forState:(UIControlState) state;
```

## Parameters

- `attributes`: The text attributes of the title for `state`.
- `state`: A control state.

<a id="Discussion"></a>

## Discussion

The attributes dictionary can specify the font, text color, text shadow color, and text shadow offset for the title in the text attributes dictionary, using the keys in [NSAttributedStringKey](../../foundation/nsattributedstring/key.md).

## See Also

### Customizing appearance

- [selectedSegmentTintColor](selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImageForState:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [setBackgroundImage:forState:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for given state and bar metrics.
- [contentPositionAdjustmentForSegmentType:barMetrics:](contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment:forSegmentType:barMetrics:](setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [UISegmentedControlSegment](segment.md): Constants for specifying a segment in a control.
- [dividerImageForLeftSegmentState:rightSegmentState:barMetrics:](dividerimage%28forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Returns the divider image used for a given combination of left and right segment states and bar metrics.
- [setDividerImage:forLeftSegmentState:rightSegmentState:barMetrics:](setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Sets the divider image to use for a given combination of left and right segment states and bar metrics.
- [titleTextAttributesForState:](titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
