> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstepper](https://developer.apple.com/documentation/appkit/nsstepper)

# NSStepper (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An interface with up and down arrow buttons for incrementing or decrementing a value.

## Declaration

```swift
class NSStepper
```

<a id="overview"></a>

## Overview

A stepper consists of two small arrows that can increment and decrement a value that appears beside it, such as a date or time. The illustration below shows a stepper to the right of a text field, which would show the stepper’s value.

![](https://developer.apple.com/images/com.apple.appkit/media-2555815@2x.png)

The `NSStepper` class uses the [NSStepperCell](nssteppercell.md) class to implement its user interface.

## Topics

### Configuring the Cell

- [NSStepperCell](nssteppercell.md): An `NSStepperCell` object controls the appearance and behavior of an [NSStepper](nsstepper.md) object.

### Specifying value range

- [maxValue](nsstepper/maxvalue.md): The stepper’s maximum value.
- [minValue](nsstepper/minvalue.md): The stepper’s minimum value.
- [increment](nsstepper/increment.md): The amount by which the receiver changes with each increment or decrement.

### Specifying how the stepper responds

- [autorepeat](nsstepper/autorepeat.md): A Boolean value that indicates how the stepper responds to mouse events.
- [valueWraps](nsstepper/valuewraps.md): A Boolean value that indicates whether the stepper wraps around the minimum and maximum values.

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
- [NSAccessibilityStepper](nsaccessibilitystepper.md)
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
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.

# NSStepper (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An interface with up and down arrow buttons for incrementing or decrementing a value.

## Declaration

```objectivec
@interface NSStepper : NSControl
```

<a id="overview"></a>

## Overview

A stepper consists of two small arrows that can increment and decrement a value that appears beside it, such as a date or time. The illustration below shows a stepper to the right of a text field, which would show the stepper’s value.

![](https://developer.apple.com/images/com.apple.appkit/media-2555815@2x.png)

The `NSStepper` class uses the [NSStepperCell](nssteppercell.md) class to implement its user interface.

## Topics

### Configuring the Cell

- [NSStepperCell](nssteppercell.md): An `NSStepperCell` object controls the appearance and behavior of an [NSStepper](nsstepper.md) object.

### Specifying value range

- [maxValue](nsstepper/maxvalue.md): The stepper’s maximum value.
- [minValue](nsstepper/minvalue.md): The stepper’s minimum value.
- [increment](nsstepper/increment.md): The amount by which the receiver changes with each increment or decrement.

### Specifying how the stepper responds

- [autorepeat](nsstepper/autorepeat.md): A Boolean value that indicates how the stepper responds to mouse events.
- [valueWraps](nsstepper/valuewraps.md): A Boolean value that indicates whether the stepper wraps around the minimum and maximum values.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [NSAccessibilityStepper](nsaccessibilitystepper.md)

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
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
