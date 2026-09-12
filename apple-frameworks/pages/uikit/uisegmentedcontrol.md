> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol](https://developer.apple.com/documentation/uikit/uisegmentedcontrol)

# UISegmentedControl (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A horizontal control that consists of multiple segments, each segment functioning as a discrete button.

## Declaration

```swift
@MainActor class UISegmentedControl
```

## Mentioned In

- [About app development with UIKit](about-app-development-with-uikit.md)
- [Attaching gesture recognizers to UIKit controls](attaching-gesture-recognizers-to-uikit-controls.md)

<a id="overview"></a>

## Overview

A segmented control can display a title (an [NSString](../foundation/nsstring.md) object) or an image ([UIImage](uiimage.md) object). The [UISegmentedControl](uisegmentedcontrol.md) object automatically resizes segments to fit proportionally within their superview unless they have a specific width set. When you add and remove segments, you can request that the action be animated with sliding and fading effects.

You register the target-action methods for a segmented control using the [valueChanged](uicontrol/event/valuechanged.md) constant as shown below.

**Swift**

```swift
segmentedControl.addTarget(self, action: "action:", forControlEvents: .valueChanged)
```

**Objective-C**

```objc
[segmentedControl addTarget:self
                     action:@selector(action:)
           forControlEvents:UIControlEventValueChanged];
```

How you configure a segmented control can affect its display behavior:

- If you set a segmented control to have a momentary style, a segment doesn’t show itself as selected (blue background) when the user touches it. The disclosure button is always momentary and doesn’t affect the actual selection.
- In versions of iOS prior to 3.0, if a segmented control has only two segments, then it behaves like a switch — tapping the currently-selected segment causes the other segment to be selected. In iOS 3.0 and later, tapping the currently-selected segment doesn’t cause the other segment to be selected.

<a id="Customize-appearance"></a>

### Customize appearance

You can customize the appearance of segmented controls using the methods listed in [Customizing appearance](uisegmentedcontrol.md#Customizing-appearance). You can customize the appearance of all segmented controls using the appearance proxy (for example, `[UISegmentedControl appearance]`), or just of a single control.

When customizing appearance, in general, you should specify a value for the normal state of a property to be used by other states which don’t have a custom value set. Similarly, when a property is dependent on the bar metrics (on the iPhone in landscape orientation, bars have a different height from standard), you should make sure you specify a value for [UIBarMetrics.default](uibarmetrics/default.md).

In the case of the segmented control, appearance properties for [landscapePhone](uibarmetrics/landscapephone.md) are only respected for segmented controls in the smaller navigation and toolbars that are used in landscape orientation on the iPhone.

To provide complete customization, you need to provide divider images for different state combinations, using [setDividerImage(\_:forLeftSegmentState:rightSegmentState:barMetrics:)](uisegmentedcontrol/setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md):

**Swift**

```swift
// Image between two unselected segments.
mySegmentedControl.setDividerImage(myImage, forLeftSegmentState: UIControlState.Normal,
                                   rightSegmentState: UIControlState.Normal, barMetrics: UIBarMetrics.Default)
 
// Image between segment selected on the left and unselected on the right.
mySegmentedControl.setDividerImage(myImage, forLeftSegmentState: UIControlState.Selected,
                                   rightSegmentState: UIControlState.Normal, barMetrics: UIBarMetrics.Default)
 
// Image between segment selected on the right and unselected on the left.
mySegmentedControl.setDividerImage(myImage, forLeftSegmentState: UIControlState.Normal,
                                   rightSegmentState: UIControlState.Selected, barMetrics: UIBarMetrics.Default)
```

**Objective-C**

```objc
// Image between two unselected segments.
[mySegmentedControl setDividerImage:image1 forLeftSegmentState:UIControlStateNormal
                  rightSegmentState:UIControlStateNormal barMetrics:barMetrics];
// Image between segment selected on the left and unselected on the right.
[mySegmentedControl setDividerImage:image1 forLeftSegmentState:UIControlStateSelected
                  rightSegmentState:UIControlStateNormal barMetrics:barMetrics];
// Image between segment selected on the right and unselected on the right.
[mySegmentedControl setDividerImage:image1 forLeftSegmentState:UIControlStateNormal
                  rightSegmentState:UIControlStateSelected barMetrics:barMetrics];
```

## Topics

### Creating a segmented control

- [init(items:)](uisegmentedcontrol/init%28items_%29.md): Creates a segmented control with segments having the given titles or images.
- [init(frame:actions:)](uisegmentedcontrol/init%28frame_actions_%29.md): Creates a segmented control with the given frame and adds segments for the actions you specify.
- [init(frame:)](uisegmentedcontrol/init%28frame_%29.md): Creates an empty segmented control with the frame you specify.
- [init(coder:)](uisegmentedcontrol/init%28coder_%29.md): Creates a segmented control with data from an unarchiver.

### Managing segment content

- [setImage(\_:forSegmentAt:)](uisegmentedcontrol/setimage%28__forsegmentat_%29.md): Sets the content of a segment to a given image.
- [imageForSegment(at:)](uisegmentedcontrol/imageforsegment%28at_%29.md): Returns the image for a specific segment.
- [setTitle(\_:forSegmentAt:)](uisegmentedcontrol/settitle%28__forsegmentat_%29.md): Sets the title of a segment.
- [titleForSegment(at:)](uisegmentedcontrol/titleforsegment%28at_%29.md): Returns the title of the specified segment.

### Managing segment actions

- [actionForSegment(at:)](uisegmentedcontrol/actionforsegment%28at_%29.md): Fetches the action of the segment at the index you specify, if one exists.
- [setAction(\_:forSegmentAt:)](uisegmentedcontrol/setaction%28__forsegmentat_%29.md): Sets the action for the segment at the index you specify.

### Managing segments

- [numberOfSegments](uisegmentedcontrol/numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndex(identifiedBy:)](uisegmentedcontrol/segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegment(action:at:animated:)](uisegmentedcontrol/insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegment(with:at:animated:)](uisegmentedcontrol/insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegment(withTitle:at:animated:)](uisegmentedcontrol/insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeAllSegments()](uisegmentedcontrol/removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegment(at:animated:)](uisegmentedcontrol/removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](uisegmentedcontrol/selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
- [noSegment](uisegmentedcontrol/nosegment.md): A segment index value indicating that there’s no selected segment.

### Managing segment behavior and appearance

- [isMomentary](uisegmentedcontrol/ismomentary.md): A Boolean value that determines whether segments in the segmented control show selected state.
- [setEnabled(\_:forSegmentAt:)](uisegmentedcontrol/setenabled%28__forsegmentat_%29.md): Enables the segment you specify.
- [isEnabledForSegment(at:)](uisegmentedcontrol/isenabledforsegment%28at_%29.md): Returns whether the indicated segment is enabled.
- [setContentOffset(\_:forSegmentAt:)](uisegmentedcontrol/setcontentoffset%28__forsegmentat_%29.md): Adjusts the offset for drawing the content (image or text) of the specified segment.
- [contentOffsetForSegment(at:)](uisegmentedcontrol/contentoffsetforsegment%28at_%29.md): Returns the offset for drawing the content (image or text) of the segment you specify.
- [setWidth(\_:forSegmentAt:)](uisegmentedcontrol/setwidth%28__forsegmentat_%29.md): Sets the width of the segment at the index you specify.
- [widthForSegment(at:)](uisegmentedcontrol/widthforsegment%28at_%29.md): Returns the width of the segment at the index you specify.
- [apportionsSegmentWidthsByContent](uisegmentedcontrol/apportionssegmentwidthsbycontent.md): Indicates whether the control attempts to adjust segment widths based on their content widths.

### Customizing appearance

- [selectedSegmentTintColor](uisegmentedcontrol/selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImage(for:barMetrics:)](uisegmentedcontrol/backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](uisegmentedcontrol/setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for given state and bar metrics.
- [contentPositionAdjustment(forSegmentType:barMetrics:)](uisegmentedcontrol/contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment(\_:forSegmentType:barMetrics:)](uisegmentedcontrol/setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [UISegmentedControl.Segment](uisegmentedcontrol/segment.md): Constants for specifying a segment in a control.
- [dividerImage(forLeftSegmentState:rightSegmentState:barMetrics:)](uisegmentedcontrol/dividerimage%28forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Returns the divider image used for a given combination of left and right segment states and bar metrics.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:barMetrics:)](uisegmentedcontrol/setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Sets the divider image to use for a given combination of left and right segment states and bar metrics.
- [titleTextAttributes(for:)](uisegmentedcontrol/titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
- [setTitleTextAttributes(\_:for:)](uisegmentedcontrol/settitletextattributes%28__for_%29.md): Sets the text attributes of the title for a given control state.

## Relationships

### Inherits From

- [UIControl](uicontrol.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearance](uiappearance.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md)
- [UICoordinateSpace](uicoordinatespace.md)
- [UIDynamicItem](uidynamicitem.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIFocusItem](uifocusitem.md)
- [UIFocusItemContainer](uifocusitemcontainer.md)
- [UILargeContentViewerItem](uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Controls

- [Responding to control-based events using target-action](responding-to-control-based-events-using-target-action.md): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [UIControl](uicontrol.md): The base class for controls, which are visual elements that convey a specific action or intention in response to user interactions.
- [UIButton](uibutton.md): A control that executes your custom code in response to user interactions.
- [UIColorWell](uicolorwell.md): A control that displays a color picker.
- [UIDatePicker](uidatepicker.md): A control for inputting date and time values.
- [UIPageControl](uipagecontrol.md): A control that displays a horizontal series of dots, each of which corresponds to a page in the app’s document or other data-model entity.
- [UISlider](uislider.md): A control for selecting a single value from a continuous range of values.
- [UIStepper](uistepper.md): A control for incrementing or decrementing a value.
- [UISwitch](uiswitch.md): A control that offers a binary choice, such as on/off.

# UISegmentedControl (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A horizontal control that consists of multiple segments, each segment functioning as a discrete button.

## Declaration

```objectivec
@interface UISegmentedControl : UIControl
```

## Mentioned In

- [About app development with UIKit](about-app-development-with-uikit.md)
- [Attaching gesture recognizers to UIKit controls](attaching-gesture-recognizers-to-uikit-controls.md)

<a id="overview"></a>

## Overview

A segmented control can display a title (an [NSString](../foundation/nsstring.md) object) or an image ([UIImage](uiimage.md) object). The [UISegmentedControl](uisegmentedcontrol.md) object automatically resizes segments to fit proportionally within their superview unless they have a specific width set. When you add and remove segments, you can request that the action be animated with sliding and fading effects.

You register the target-action methods for a segmented control using the [UIControlEventValueChanged](uicontrol/event/valuechanged.md) constant as shown below.

**Swift**

```swift
segmentedControl.addTarget(self, action: "action:", forControlEvents: .valueChanged)
```

**Objective-C**

```objc
[segmentedControl addTarget:self
                     action:@selector(action:)
           forControlEvents:UIControlEventValueChanged];
```

How you configure a segmented control can affect its display behavior:

- If you set a segmented control to have a momentary style, a segment doesn’t show itself as selected (blue background) when the user touches it. The disclosure button is always momentary and doesn’t affect the actual selection.
- In versions of iOS prior to 3.0, if a segmented control has only two segments, then it behaves like a switch — tapping the currently-selected segment causes the other segment to be selected. In iOS 3.0 and later, tapping the currently-selected segment doesn’t cause the other segment to be selected.

<a id="Customize-appearance"></a>

### Customize appearance

You can customize the appearance of segmented controls using the methods listed in [Customizing appearance](uisegmentedcontrol.md#Customizing-appearance). You can customize the appearance of all segmented controls using the appearance proxy (for example, `[UISegmentedControl appearance]`), or just of a single control.

When customizing appearance, in general, you should specify a value for the normal state of a property to be used by other states which don’t have a custom value set. Similarly, when a property is dependent on the bar metrics (on the iPhone in landscape orientation, bars have a different height from standard), you should make sure you specify a value for [UIBarMetricsDefault](uibarmetrics/default.md).

In the case of the segmented control, appearance properties for [UIBarMetricsLandscapePhone](uibarmetrics/landscapephone.md) are only respected for segmented controls in the smaller navigation and toolbars that are used in landscape orientation on the iPhone.

To provide complete customization, you need to provide divider images for different state combinations, using [setDividerImage:forLeftSegmentState:rightSegmentState:barMetrics:](uisegmentedcontrol/setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md):

**Swift**

```swift
// Image between two unselected segments.
mySegmentedControl.setDividerImage(myImage, forLeftSegmentState: UIControlState.Normal,
                                   rightSegmentState: UIControlState.Normal, barMetrics: UIBarMetrics.Default)
 
// Image between segment selected on the left and unselected on the right.
mySegmentedControl.setDividerImage(myImage, forLeftSegmentState: UIControlState.Selected,
                                   rightSegmentState: UIControlState.Normal, barMetrics: UIBarMetrics.Default)
 
// Image between segment selected on the right and unselected on the left.
mySegmentedControl.setDividerImage(myImage, forLeftSegmentState: UIControlState.Normal,
                                   rightSegmentState: UIControlState.Selected, barMetrics: UIBarMetrics.Default)
```

**Objective-C**

```objc
// Image between two unselected segments.
[mySegmentedControl setDividerImage:image1 forLeftSegmentState:UIControlStateNormal
                  rightSegmentState:UIControlStateNormal barMetrics:barMetrics];
// Image between segment selected on the left and unselected on the right.
[mySegmentedControl setDividerImage:image1 forLeftSegmentState:UIControlStateSelected
                  rightSegmentState:UIControlStateNormal barMetrics:barMetrics];
// Image between segment selected on the right and unselected on the right.
[mySegmentedControl setDividerImage:image1 forLeftSegmentState:UIControlStateNormal
                  rightSegmentState:UIControlStateSelected barMetrics:barMetrics];
```

## Topics

### Creating a segmented control

- [initWithItems:](uisegmentedcontrol/init%28items_%29.md): Creates a segmented control with segments having the given titles or images.
- [initWithFrame:actions:](uisegmentedcontrol/init%28frame_actions_%29.md): Creates a segmented control with the given frame and adds segments for the actions you specify.
- [initWithFrame:](uisegmentedcontrol/init%28frame_%29.md): Creates an empty segmented control with the frame you specify.
- [initWithCoder:](uisegmentedcontrol/init%28coder_%29.md): Creates a segmented control with data from an unarchiver.

### Managing segment content

- [setImage:forSegmentAtIndex:](uisegmentedcontrol/setimage%28__forsegmentat_%29.md): Sets the content of a segment to a given image.
- [imageForSegmentAtIndex:](uisegmentedcontrol/imageforsegment%28at_%29.md): Returns the image for a specific segment.
- [setTitle:forSegmentAtIndex:](uisegmentedcontrol/settitle%28__forsegmentat_%29.md): Sets the title of a segment.
- [titleForSegmentAtIndex:](uisegmentedcontrol/titleforsegment%28at_%29.md): Returns the title of the specified segment.

### Managing segment actions

- [actionForSegmentAtIndex:](uisegmentedcontrol/actionforsegment%28at_%29.md): Fetches the action of the segment at the index you specify, if one exists.
- [setAction:forSegmentAtIndex:](uisegmentedcontrol/setaction%28__forsegmentat_%29.md): Sets the action for the segment at the index you specify.

### Managing segments

- [numberOfSegments](uisegmentedcontrol/numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndexForActionIdentifier:](uisegmentedcontrol/segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegmentWithAction:atIndex:animated:](uisegmentedcontrol/insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegmentWithImage:atIndex:animated:](uisegmentedcontrol/insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegmentWithTitle:atIndex:animated:](uisegmentedcontrol/insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeAllSegments](uisegmentedcontrol/removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegmentAtIndex:animated:](uisegmentedcontrol/removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](uisegmentedcontrol/selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
- [UISegmentedControlNoSegment](uisegmentedcontrol/nosegment.md): A segment index value indicating that there’s no selected segment.

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
- [UISegmentedControlStyle](uisegmentedcontrolstyle.md): Deprecated. The styles of the segmented control.

### Customizing appearance

- [selectedSegmentTintColor](uisegmentedcontrol/selectedsegmenttintcolor.md): The color to use for highlighting the currently selected segment.
- [backgroundImageForState:barMetrics:](uisegmentedcontrol/backgroundimage%28for_barmetrics_%29.md): Returns the background image for a given state and bar metrics.
- [setBackgroundImage:forState:barMetrics:](uisegmentedcontrol/setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for given state and bar metrics.
- [contentPositionAdjustmentForSegmentType:barMetrics:](uisegmentedcontrol/contentpositionadjustment%28forsegmenttype_barmetrics_%29.md): Returns the positioning offset for a given segment and bar metrics.
- [setContentPositionAdjustment:forSegmentType:barMetrics:](uisegmentedcontrol/setcontentpositionadjustment%28__forsegmenttype_barmetrics_%29.md): Sets the content positioning offset for a given segment and bar metrics.
- [UISegmentedControlSegment](uisegmentedcontrol/segment.md): Constants for specifying a segment in a control.
- [dividerImageForLeftSegmentState:rightSegmentState:barMetrics:](uisegmentedcontrol/dividerimage%28forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Returns the divider image used for a given combination of left and right segment states and bar metrics.
- [setDividerImage:forLeftSegmentState:rightSegmentState:barMetrics:](uisegmentedcontrol/setdividerimage%28__forleftsegmentstate_rightsegmentstate_barmetrics_%29.md): Sets the divider image to use for a given combination of left and right segment states and bar metrics.
- [titleTextAttributesForState:](uisegmentedcontrol/titletextattributes%28for_%29.md): Returns the text attributes of the title for a given control state.
- [setTitleTextAttributes:forState:](uisegmentedcontrol/settitletextattributes%28__for_%29.md): Sets the text attributes of the title for a given control state.

## Relationships

### Inherits From

- [UIControl](uicontrol.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md)

## See Also

### Controls

- [Responding to control-based events using target-action](responding-to-control-based-events-using-target-action.md): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [UIControl](uicontrol.md): The base class for controls, which are visual elements that convey a specific action or intention in response to user interactions.
- [UIButton](uibutton.md): A control that executes your custom code in response to user interactions.
- [UIColorWell](uicolorwell.md): A control that displays a color picker.
- [UIDatePicker](uidatepicker.md): A control for inputting date and time values.
- [UIPageControl](uipagecontrol.md): A control that displays a horizontal series of dots, each of which corresponds to a page in the app’s document or other data-model entity.
- [UISlider](uislider.md): A control for selecting a single value from a continuous range of values.
- [UIStepper](uistepper.md): A control for incrementing or decrementing a value.
- [UISwitch](uiswitch.md): A control that offers a binary choice, such as on/off.
