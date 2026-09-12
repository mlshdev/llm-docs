> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator](https://developer.apple.com/documentation/appkit/nslevelindicator)

# NSLevelIndicator (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A visual representation of a level or quantity, using discrete values.

## Declaration

```swift
class NSLevelIndicator
```

<a id="overview"></a>

## Overview

A level indicator is similar to an [NSSlider](nsslider.md) object, but provides a more customized visual feedback to the user. Unlike sliders, level indicators do not have a “knob” indicating the current setting, and they do not allow the user to adjust the current setting. You set the value of the level indicator programmatically. The supported indicator styles include:

- A capacity style level indicator. The continuous mode for this style is often used to indicate conditions such as how much data is on hard disk. The discrete mode is similar to audio level indicators in audio playback applications. You can specify both a warning value and a critical value that provides additional visual feedback to the user.
- A ranking style level indicator. This is similar to the star ranking displays provided in iTunes and iPhoto. You can also specify your own ranking image.
- A relevancy style level indicator. This style is used to display the relevancy of a search result, for example in Mail.

`NSLevelIndicator` uses an [NSLevelIndicatorCell](nslevelindicatorcell.md) to implement much of the control’s functionality. `NSLevelIndicator` provides cover methods for most of the [NSLevelIndicatorCell](nslevelindicatorcell.md) methods, which call the corresponding cell method.

## Topics

### Configuring the Cell

- [NSLevelIndicatorCell](nslevelindicatorcell.md): `NSLevelIndicatorCell` is a subclass of [NSActionCell](nsactioncell.md) that provides several level indicator display styles including: capacity, ranking and relevancy. The capacity style provides both continuous and discrete modes.

### Configuring the Range of Values

- [minValue](nslevelindicator/minvalue.md): The receiver’s minimum value.
- [maxValue](nslevelindicator/maxvalue.md): The receiver’s maximum value.
- [warningValue](nslevelindicator/warningvalue.md): The receiver’s warning value.
- [criticalValue](nslevelindicator/criticalvalue.md): The receiver’s critical value.

### Managing Tick Marks and Style

- [tickMarkPosition](nslevelindicator/tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfTickMarks](nslevelindicator/numberoftickmarks.md): The number of tick marks associated with the receiver.
- [numberOfMajorTickMarks](nslevelindicator/numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [tickMarkValue(at:)](nslevelindicator/tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [rectOfTickMark(at:)](nslevelindicator/rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](nslevelindicator/levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicator.Style](nslevelindicator/style.md): Constants that specify a level indicator’s appearance.

### Configuring the Drawing Attributes

- [ratingImage](nslevelindicator/ratingimage.md): Sets the image used by the rating indicator style in place of the default star image.
- [drawsTieredCapacityLevels](nslevelindicator/drawstieredcapacitylevels.md)
- [fillColor](nslevelindicator/fillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing the “normal” state, and by the rating indicator when drawing stars.
- [warningFillColor](nslevelindicator/warningfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “warning” threshold.
- [criticalFillColor](nslevelindicator/criticalfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “critical” threshold.

### Managing Placeholder Information

- [ratingPlaceholderImage](nslevelindicator/ratingplaceholderimage.md): Sets the image used by the rating indicator style in place of the default faded placeholder image.
- [placeholderVisibility](nslevelindicator/placeholdervisibility-swift.property.md): For a rating-style indicator, sets the conditions under which rating placeholders are displayed.
- [NSLevelIndicator.PlaceholderVisibility](nslevelindicator/placeholdervisibility-swift.enum.md)

### Controlling the Edit Behavior

- [isEditable](nslevelindicator/iseditable.md)

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
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.

# NSLevelIndicator (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A visual representation of a level or quantity, using discrete values.

## Declaration

```objectivec
@interface NSLevelIndicator : NSControl
```

<a id="overview"></a>

## Overview

A level indicator is similar to an [NSSlider](nsslider.md) object, but provides a more customized visual feedback to the user. Unlike sliders, level indicators do not have a “knob” indicating the current setting, and they do not allow the user to adjust the current setting. You set the value of the level indicator programmatically. The supported indicator styles include:

- A capacity style level indicator. The continuous mode for this style is often used to indicate conditions such as how much data is on hard disk. The discrete mode is similar to audio level indicators in audio playback applications. You can specify both a warning value and a critical value that provides additional visual feedback to the user.
- A ranking style level indicator. This is similar to the star ranking displays provided in iTunes and iPhoto. You can also specify your own ranking image.
- A relevancy style level indicator. This style is used to display the relevancy of a search result, for example in Mail.

`NSLevelIndicator` uses an [NSLevelIndicatorCell](nslevelindicatorcell.md) to implement much of the control’s functionality. `NSLevelIndicator` provides cover methods for most of the [NSLevelIndicatorCell](nslevelindicatorcell.md) methods, which call the corresponding cell method.

## Topics

### Configuring the Cell

- [NSLevelIndicatorCell](nslevelindicatorcell.md): `NSLevelIndicatorCell` is a subclass of [NSActionCell](nsactioncell.md) that provides several level indicator display styles including: capacity, ranking and relevancy. The capacity style provides both continuous and discrete modes.

### Configuring the Range of Values

- [minValue](nslevelindicator/minvalue.md): The receiver’s minimum value.
- [maxValue](nslevelindicator/maxvalue.md): The receiver’s maximum value.
- [warningValue](nslevelindicator/warningvalue.md): The receiver’s warning value.
- [criticalValue](nslevelindicator/criticalvalue.md): The receiver’s critical value.

### Managing Tick Marks and Style

- [tickMarkPosition](nslevelindicator/tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfTickMarks](nslevelindicator/numberoftickmarks.md): The number of tick marks associated with the receiver.
- [numberOfMajorTickMarks](nslevelindicator/numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [tickMarkValueAtIndex:](nslevelindicator/tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [rectOfTickMarkAtIndex:](nslevelindicator/rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](nslevelindicator/levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicatorStyle](nslevelindicator/style.md): Constants that specify a level indicator’s appearance.

### Configuring the Drawing Attributes

- [ratingImage](nslevelindicator/ratingimage.md): Sets the image used by the rating indicator style in place of the default star image.
- [drawsTieredCapacityLevels](nslevelindicator/drawstieredcapacitylevels.md)
- [fillColor](nslevelindicator/fillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing the “normal” state, and by the rating indicator when drawing stars.
- [warningFillColor](nslevelindicator/warningfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “warning” threshold.
- [criticalFillColor](nslevelindicator/criticalfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “critical” threshold.

### Managing Placeholder Information

- [ratingPlaceholderImage](nslevelindicator/ratingplaceholderimage.md): Sets the image used by the rating indicator style in place of the default faded placeholder image.
- [placeholderVisibility](nslevelindicator/placeholdervisibility-swift.property.md): For a rating-style indicator, sets the conditions under which rating placeholders are displayed.
- [NSLevelIndicatorPlaceholderVisibility](nslevelindicator/placeholdervisibility-swift.enum.md)

### Controlling the Edit Behavior

- [editable](nslevelindicator/iseditable.md)

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSImageView](nsimageview.md): A display of image data in a frame.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.
