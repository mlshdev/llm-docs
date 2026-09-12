> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsswitch](https://developer.apple.com/documentation/appkit/nsswitch)

# NSSwitch (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

A control that offers a binary choice.

## Declaration

```swift
class NSSwitch
```

<a id="overview"></a>

## Overview

The [NSSwitch](nsswitch.md) class provides a simple interface for displaying and toggling a Boolean state, such as on/off. A switch toggles its [state](nsswitch/state.md) and sends its [action](nscontrol/action.md) when clicked, activated through the keyboard, or tapped in the Touch Bar. [NSSwitch](nsswitch.md) also allows dragging between states, and if [isContinuous](nscontrol/iscontinuous.md) is [true](https://developer.apple.com/documentation/swift/true), the switch sends its [action](nscontrol/action.md) for each change in position during the drag.

[NSSwitch](nsswitch.md) doesn’t use an instance of [NSCell](nscell.md) to provide its functionality. The [cellClass](nscontrol/cellclass.md) class property and [cell](nscontrol/cell.md) instance property both return [nil](https://developer.apple.com/documentation/objectivec/nil-227m0), and they ignore attempts to set a non-[nil](https://developer.apple.com/documentation/objectivec/nil-227m0) value.

For design guidance, see Human Interface Guidelines \> [Toggles](https://developer.apple.com/design/human-interface-guidelines/toggles).

## Topics

### Managing Switch State

- [state](nsswitch/state.md): The current position of the switch.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityButton](nsaccessibilitybutton.md)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAccessibilitySwitch](nsaccessibilityswitch.md)
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

# NSSwitch (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

A control that offers a binary choice.

## Declaration

```objectivec
@interface NSSwitch : NSControl
```

<a id="overview"></a>

## Overview

The [NSSwitch](nsswitch.md) class provides a simple interface for displaying and toggling a Boolean state, such as on/off. A switch toggles its [state](nsswitch/state.md) and sends its [action](nscontrol/action.md) when clicked, activated through the keyboard, or tapped in the Touch Bar. [NSSwitch](nsswitch.md) also allows dragging between states, and if [continuous](nscontrol/iscontinuous.md) is [true](https://developer.apple.com/documentation/swift/true), the switch sends its [action](nscontrol/action.md) for each change in position during the drag.

[NSSwitch](nsswitch.md) doesn’t use an instance of [NSCell](nscell.md) to provide its functionality. The [cellClass](nscontrol/cellclass.md) class property and [cell](nscontrol/cell.md) instance property both return [nil](https://developer.apple.com/documentation/objectivec/nil-227m0), and they ignore attempts to set a non-[nil](https://developer.apple.com/documentation/objectivec/nil-227m0) value.

For design guidance, see Human Interface Guidelines \> [Toggles](https://developer.apple.com/design/human-interface-guidelines/toggles).

## Topics

### Managing Switch State

- [state](nsswitch/state.md): The current position of the switch.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [NSAccessibilitySwitch](nsaccessibilityswitch.md)

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
