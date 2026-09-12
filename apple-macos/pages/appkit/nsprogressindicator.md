> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator](https://developer.apple.com/documentation/appkit/nsprogressindicator)

# NSProgressIndicator (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An interface that provides visual feedback to the user about the status of an ongoing task.

## Declaration

```swift
class NSProgressIndicator
```

<a id="overview"></a>

## Overview

Progress indicators can be determinate or indeterminate. A determinate indicator displays the completion percentage of a task. An indeterminate indicator shows that the app is busy without providing a visual indication of how long the task will take.

## Topics

### Animating the progress indicator

- [startAnimation(\_:)](nsprogressindicator/startanimation%28__%29.md): Starts the animation of an indeterminate progress indicator.
- [stopAnimation(\_:)](nsprogressindicator/stopanimation%28__%29.md): Stops the animation of an indeterminate progress indicator.
- [usesThreadedAnimation](nsprogressindicator/usesthreadedanimation.md): A Boolean that indicates whether the progress indicator implements animation in a separate thread.

### Advancing the progress bar

- [increment(by:)](nsprogressindicator/increment%28by_%29.md): Advances the progress bar of a determinate progress indicator by the specified amount.
- [doubleValue](nsprogressindicator/doublevalue.md): The value that indicates the current extent of the progress indicator.
- [minValue](nsprogressindicator/minvalue.md): The minimum value for the progress indicator.
- [maxValue](nsprogressindicator/maxvalue.md): The maximum value for the progress indicator.

### Observing the progress bar

- [observedProgress](nsprogressindicator/observedprogress.md): The progress object to use for updating the progress view.

### Setting the appearance

- [controlSize](nsprogressindicator/controlsize.md): The size of the progress indicator.
- [controlTint](nsprogressindicator/controltint.md): Deprecated. The progress indicator’s control tint.
- [isBezeled](nsprogressindicator/isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [isIndeterminate](nsprogressindicator/isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](nsprogressindicator/style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit()](nsprogressindicator/sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](nsprogressindicator/style-swift.property.md).
- [isDisplayedWhenStopped](nsprogressindicator/isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.

### Constants

- [NSProgressIndicator.Style](nsprogressindicator/style-swift.enum.md): Constants that specify the progress indicator’s style.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityGroup](nsaccessibilitygroup.md)
- [NSAccessibilityProgressIndicator](nsaccessibilityprogressindicator.md)
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
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.

# NSProgressIndicator (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An interface that provides visual feedback to the user about the status of an ongoing task.

## Declaration

```objectivec
@interface NSProgressIndicator : NSView
```

<a id="overview"></a>

## Overview

Progress indicators can be determinate or indeterminate. A determinate indicator displays the completion percentage of a task. An indeterminate indicator shows that the app is busy without providing a visual indication of how long the task will take.

## Topics

### Animating the progress indicator

- [startAnimation:](nsprogressindicator/startanimation%28__%29.md): Starts the animation of an indeterminate progress indicator.
- [stopAnimation:](nsprogressindicator/stopanimation%28__%29.md): Stops the animation of an indeterminate progress indicator.
- [usesThreadedAnimation](nsprogressindicator/usesthreadedanimation.md): A Boolean that indicates whether the progress indicator implements animation in a separate thread.
- [animate:](nsprogressindicator/animate_.md): Deprecated. This action method advances the progress animation of an indeterminate progress animator by one step.
- [animationDelay](nsprogressindicator/animationdelay.md): Deprecated. Returns the delay, in seconds, between animation steps for an indeterminate progress indicator.
- [setAnimationDelay:](nsprogressindicator/setanimationdelay_.md): Deprecated. Sets the delay, in seconds, between animation steps for an indeterminate progress indicator.

### Advancing the progress bar

- [incrementBy:](nsprogressindicator/increment%28by_%29.md): Advances the progress bar of a determinate progress indicator by the specified amount.
- [doubleValue](nsprogressindicator/doublevalue.md): The value that indicates the current extent of the progress indicator.
- [minValue](nsprogressindicator/minvalue.md): The minimum value for the progress indicator.
- [maxValue](nsprogressindicator/maxvalue.md): The maximum value for the progress indicator.

### Observing the progress bar

- [observedProgress](nsprogressindicator/observedprogress.md): The progress object to use for updating the progress view.

### Setting the appearance

- [controlSize](nsprogressindicator/controlsize.md): The size of the progress indicator.
- [controlTint](nsprogressindicator/controltint.md): Deprecated. The progress indicator’s control tint.
- [bezeled](nsprogressindicator/isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [indeterminate](nsprogressindicator/isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](nsprogressindicator/style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit](nsprogressindicator/sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](nsprogressindicator/style-swift.property.md).
- [displayedWhenStopped](nsprogressindicator/isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.

### Constants

- [NSProgressIndicatorThickness](nsprogressindicatorthickness.md): Deprecated. Specify the height of a progress indicator.
- [NSProgressIndicatorStyle](nsprogressindicator/style-swift.enum.md): Constants that specify the progress indicator’s style.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [NSAccessibilityProgressIndicator](nsaccessibilityprogressindicator.md)

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
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.
