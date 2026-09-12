> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol](https://developer.apple.com/documentation/appkit/nssegmentedcontrol)

# NSSegmentedControl (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

Display one or more buttons in a single horizontal group.

## Declaration

```swift
class NSSegmentedControl
```

<a id="overview"></a>

## Overview

The `NSSegmentedControl` class uses an [NSSegmentedCell](nssegmentedcell.md) class to implement much of the control’s functionality. Most methods in `NSSegmentedControl` are simply cover methods that call the corresponding method in [NSSegmentedCell](nssegmentedcell.md). The methods of [NSSegmentedCell](nssegmentedcell.md) that do not have covers relate to accessing and setting values for tags and tooltips, programatically setting the key segment, and establishing the mode of the control.

The features of a segmented control include the following:

- A segment can have an image, text (label), menu, tooltip, and tag.
- A segmented control can contain images or text, but not both.
- Either the control or individual segments can be enabled or disabled.
- Segmented controls have four tracking modes, described in [NSSegmentedControl.SwitchTracking](nssegmentedcontrol/switchtracking.md). You use these modes with the [trackingMode](nssegmentedcontrol/trackingmode.md) property.
- Each segment can be either a fixed width or autosized to fit the contents.
- If a segment has text and is marked as autosizing, then the text may be truncated so that the control completely fits.
- If an image is too large to fit in a segment, it is clipped.
- If Full Keyboard Access is enabled in System Preferences \> Keyboard, the keyboard may be used to move between and select segments.

## Topics

### Creating a segmented control

- [init(images:trackingMode:target:action:)](nssegmentedcontrol/init%28images_trackingmode_target_action_%29.md): Creates a standard segmented control containing one segment for each of the provided images.
- [init(labels:trackingMode:target:action:)](nssegmentedcontrol/init%28labels_trackingmode_target_action_%29.md): Creates a standard segmented control containing one segment for each of the provided labels.

### Configuring the cell

- [NSSegmentedCell](nssegmentedcell.md): An `NSSegmentedCell` object implements the appearance and behavior of a horizontal button divided into multiple segments. This class is used in conjunction with the [NSSegmentedControl](nssegmentedcontrol.md) class to implement a segmented control.

### Specifying the segment behavior

- [trackingMode](nssegmentedcontrol/trackingmode.md): The type of tracking behavior the control exhibits.
- [NSSegmentedControl.SwitchTracking](nssegmentedcontrol/switchtracking.md): Constants that specify the type of tracking behavior a segmented control exhibits.
- [segmentStyle](nssegmentedcontrol/segmentstyle.md): The visual style used to display the control.
- [NSSegmentedControl.Style](nssegmentedcontrol/style.md): The following constants specify the visual style used to display the segmented control. They are used by [segmentStyle](nssegmentedcontrol/segmentstyle.md).
- [role](nssegmentedcontrol/role-swift.property.md)
- [NSSegmentedControl.Role](nssegmentedcontrol/role-swift.enum.md)

### Specifying number of segments

- [segmentCount](nssegmentedcontrol/segmentcount.md): The number of segments in the control.

### Configuring the segment text

- [label(forSegment:)](nssegmentedcontrol/label%28forsegment_%29.md): Returns the label of the specified segment.
- [setLabel(\_:forSegment:)](nssegmentedcontrol/setlabel%28__forsegment_%29.md): Sets the label for the specified segment.
- [setAlignment(\_:forSegment:)](nssegmentedcontrol/setalignment%28__forsegment_%29.md)
- [alignment(forSegment:)](nssegmentedcontrol/alignment%28forsegment_%29.md)

### Configuring a segment image

- [setImage(\_:forSegment:)](nssegmentedcontrol/setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [image(forSegment:)](nssegmentedcontrol/image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling(\_:forSegment:)](nssegmentedcontrol/setimagescaling%28__forsegment_%29.md): Sets the scaling mode used to display the specified segment’s image.
- [imageScaling(forSegment:)](nssegmentedcontrol/imagescaling%28forsegment_%29.md): Returns the scaling mode used to display the specified segment’s image.

### Configuring a segment menu

- [setMenu(\_:forSegment:)](nssegmentedcontrol/setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [menu(forSegment:)](nssegmentedcontrol/menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setShowsMenuIndicator(\_:forSegment:)](nssegmentedcontrol/setshowsmenuindicator%28__forsegment_%29.md)
- [showsMenuIndicator(forSegment:)](nssegmentedcontrol/showsmenuindicator%28forsegment_%29.md)
- [isSpringLoaded](nssegmentedcontrol/isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the control.

### Managing the selected segment

- [selectedSegment](nssegmentedcontrol/selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](nssegmentedcontrol/indexofselecteditem.md)
- [selectSegment(withTag:)](nssegmentedcontrol/selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [setSelected(\_:forSegment:)](nssegmentedcontrol/setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [isSelected(forSegment:)](nssegmentedcontrol/isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [selectedSegmentBezelColor](nssegmentedcontrol/selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
- [doubleValueForSelectedSegment](nssegmentedcontrol/doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

### Adjusting the segment spacing

- [setWidth(\_:forSegment:)](nssegmentedcontrol/setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [width(forSegment:)](nssegmentedcontrol/width%28forsegment_%29.md): Returns the width of the specified segment.
- [segmentDistribution](nssegmentedcontrol/segmentdistribution.md)
- [NSSegmentedControl.Distribution](nssegmentedcontrol/distribution.md)
- [activeCompressionOptions](nssegmentedcontrol/activecompressionoptions.md)
- [compress(withPrioritizedCompressionOptions:)](nssegmentedcontrol/compress%28withprioritizedcompressionoptions_%29.md)
- [minimumSize(withPrioritizedCompressionOptions:)](nssegmentedcontrol/minimumsize%28withprioritizedcompressionoptions_%29.md)

### Specifying the border shape

- [borderShape](nssegmentedcontrol/bordershape.md)
- [NSControl.BorderShape](nscontrol/bordershape.md)

### Enabling and disabling segments

- [setEnabled(\_:forSegment:)](nssegmentedcontrol/setenabled%28__forsegment_%29.md): Sets the enabled state of the specified segment
- [isEnabled(forSegment:)](nssegmentedcontrol/isenabled%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is enabled.

### Managing tags and tooltips

- [tag(forSegment:)](nssegmentedcontrol/tag%28forsegment_%29.md)
- [setTag(\_:forSegment:)](nssegmentedcontrol/settag%28__forsegment_%29.md)
- [setToolTip(\_:forSegment:)](nssegmentedcontrol/settooltip%28__forsegment_%29.md)
- [toolTip(forSegment:)](nssegmentedcontrol/tooltip%28forsegment_%29.md)

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceCompression](nsuserinterfacecompression.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSImageView](nsimageview.md): A display of image data in a frame.
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [Slider](slider.md): Display a range of values from which the user selects a single value.

# NSSegmentedControl (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

Display one or more buttons in a single horizontal group.

## Declaration

```objectivec
@interface NSSegmentedControl : NSControl
```

<a id="overview"></a>

## Overview

The `NSSegmentedControl` class uses an [NSSegmentedCell](nssegmentedcell.md) class to implement much of the control’s functionality. Most methods in `NSSegmentedControl` are simply cover methods that call the corresponding method in [NSSegmentedCell](nssegmentedcell.md). The methods of [NSSegmentedCell](nssegmentedcell.md) that do not have covers relate to accessing and setting values for tags and tooltips, programatically setting the key segment, and establishing the mode of the control.

The features of a segmented control include the following:

- A segment can have an image, text (label), menu, tooltip, and tag.
- A segmented control can contain images or text, but not both.
- Either the control or individual segments can be enabled or disabled.
- Segmented controls have four tracking modes, described in [NSSegmentSwitchTracking](nssegmentedcontrol/switchtracking.md). You use these modes with the [trackingMode](nssegmentedcontrol/trackingmode.md) property.
- Each segment can be either a fixed width or autosized to fit the contents.
- If a segment has text and is marked as autosizing, then the text may be truncated so that the control completely fits.
- If an image is too large to fit in a segment, it is clipped.
- If Full Keyboard Access is enabled in System Preferences \> Keyboard, the keyboard may be used to move between and select segments.

## Topics

### Creating a segmented control

- [segmentedControlWithImages:trackingMode:target:action:](nssegmentedcontrol/init%28images_trackingmode_target_action_%29.md): Creates a standard segmented control containing one segment for each of the provided images.
- [segmentedControlWithLabels:trackingMode:target:action:](nssegmentedcontrol/init%28labels_trackingmode_target_action_%29.md): Creates a standard segmented control containing one segment for each of the provided labels.

### Configuring the cell

- [NSSegmentedCell](nssegmentedcell.md): An `NSSegmentedCell` object implements the appearance and behavior of a horizontal button divided into multiple segments. This class is used in conjunction with the [NSSegmentedControl](nssegmentedcontrol.md) class to implement a segmented control.

### Specifying the segment behavior

- [trackingMode](nssegmentedcontrol/trackingmode.md): The type of tracking behavior the control exhibits.
- [NSSegmentSwitchTracking](nssegmentedcontrol/switchtracking.md): Constants that specify the type of tracking behavior a segmented control exhibits.
- [segmentStyle](nssegmentedcontrol/segmentstyle.md): The visual style used to display the control.
- [NSSegmentStyle](nssegmentedcontrol/style.md): The following constants specify the visual style used to display the segmented control. They are used by [segmentStyle](nssegmentedcontrol/segmentstyle.md).
- [role](nssegmentedcontrol/role-swift.property.md)
- [NSSegmentedControlRole](nssegmentedcontrol/role-swift.enum.md)

### Specifying number of segments

- [segmentCount](nssegmentedcontrol/segmentcount.md): The number of segments in the control.

### Configuring the segment text

- [labelForSegment:](nssegmentedcontrol/label%28forsegment_%29.md): Returns the label of the specified segment.
- [setLabel:forSegment:](nssegmentedcontrol/setlabel%28__forsegment_%29.md): Sets the label for the specified segment.
- [setAlignment:forSegment:](nssegmentedcontrol/setalignment%28__forsegment_%29.md)
- [alignmentForSegment:](nssegmentedcontrol/alignment%28forsegment_%29.md)

### Configuring a segment image

- [setImage:forSegment:](nssegmentedcontrol/setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [imageForSegment:](nssegmentedcontrol/image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling:forSegment:](nssegmentedcontrol/setimagescaling%28__forsegment_%29.md): Sets the scaling mode used to display the specified segment’s image.
- [imageScalingForSegment:](nssegmentedcontrol/imagescaling%28forsegment_%29.md): Returns the scaling mode used to display the specified segment’s image.

### Configuring a segment menu

- [setMenu:forSegment:](nssegmentedcontrol/setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [menuForSegment:](nssegmentedcontrol/menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setShowsMenuIndicator:forSegment:](nssegmentedcontrol/setshowsmenuindicator%28__forsegment_%29.md)
- [showsMenuIndicatorForSegment:](nssegmentedcontrol/showsmenuindicator%28forsegment_%29.md)
- [springLoaded](nssegmentedcontrol/isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the control.

### Managing the selected segment

- [selectedSegment](nssegmentedcontrol/selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](nssegmentedcontrol/indexofselecteditem.md)
- [selectSegmentWithTag:](nssegmentedcontrol/selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [setSelected:forSegment:](nssegmentedcontrol/setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [isSelectedForSegment:](nssegmentedcontrol/isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [selectedSegmentBezelColor](nssegmentedcontrol/selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
- [doubleValueForSelectedSegment](nssegmentedcontrol/doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

### Adjusting the segment spacing

- [setWidth:forSegment:](nssegmentedcontrol/setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [widthForSegment:](nssegmentedcontrol/width%28forsegment_%29.md): Returns the width of the specified segment.
- [segmentDistribution](nssegmentedcontrol/segmentdistribution.md)
- [NSSegmentDistribution](nssegmentedcontrol/distribution.md)
- [activeCompressionOptions](nssegmentedcontrol/activecompressionoptions.md)
- [compressWithPrioritizedCompressionOptions:](nssegmentedcontrol/compress%28withprioritizedcompressionoptions_%29.md)
- [minimumSizeWithPrioritizedCompressionOptions:](nssegmentedcontrol/minimumsize%28withprioritizedcompressionoptions_%29.md)

### Specifying the border shape

- [borderShape](nssegmentedcontrol/bordershape.md)
- [NSControlBorderShape](nscontrol/bordershape.md)

### Enabling and disabling segments

- [setEnabled:forSegment:](nssegmentedcontrol/setenabled%28__forsegment_%29.md): Sets the enabled state of the specified segment
- [isEnabledForSegment:](nssegmentedcontrol/isenabled%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is enabled.

### Managing tags and tooltips

- [tagForSegment:](nssegmentedcontrol/tag%28forsegment_%29.md)
- [setTag:forSegment:](nssegmentedcontrol/settag%28__forsegment_%29.md)
- [setToolTip:forSegment:](nssegmentedcontrol/settooltip%28__forsegment_%29.md)
- [toolTipForSegment:](nssegmentedcontrol/tooltip%28forsegment_%29.md)

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [NSUserInterfaceCompression](nsuserinterfacecompression.md)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSImageView](nsimageview.md): A display of image data in a frame.
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [Slider](slider.md): Display a range of values from which the user selects a single value.
