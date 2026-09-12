> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobutton](https://developer.apple.com/documentation/appkit/nscombobutton)

# NSComboButton (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 13.0+

A button with a pull-down menu and a default action.

## Declaration

```swift
class NSComboButton
```

<a id="overview"></a>

## Overview

An [NSComboButton](nscombobutton.md) object is a button that displays a title string, image, and an optional control for displaying a menu. Use this control in places where you want to offer a button with a default action and one or more alternative actions. Clicking the title or image executes the default action you provide, and clicking the menu control displays a menu for selecting a different action. If you configure the button to hide the menu control, a long-press gesture displays the menu.

After you create a combo button programmatically or in Interface Builder, choose the button [style](nscombobutton/style-swift.property.md) you want and add a title or image for your content. A combo button has a default action, which you specify at creation time. You can also change that action later using the inherited [target](nscontrol/target.md) and [action](nscontrol/action.md) properties. To specify one or more alternative actions, configure a menu with those actions and assign it to the button’s [menu](nscombobutton/menu.md) property.

This control doesn’t use an [NSCell](nscell.md) object for its underlying implementation. It also doesn’t support the addition of a contextual menu.

## Topics

### Creating a Combo Button

- [init(title:image:menu:target:action:)](nscombobutton/init%28title_image_menu_target_action_%29.md): Creates a combo button that displays both a title and image.
- [init(title:menu:target:action:)](nscombobutton/init%28title_menu_target_action_%29.md): Creates a combo button that displays a title.
- [init(image:menu:target:action:)](nscombobutton/init%28image_menu_target_action_%29.md): Creates a combo button that displays an image.

### Configuring the Button Appearance

- [style](nscombobutton/style-swift.property.md): The appearance setting that determines how the button presents its menu .
- [NSComboButton.Style](nscombobutton/style-swift.enum.md): Constants that indicate how a combo button presents its menu.
- [title](nscombobutton/title.md): The localized string that the button displays.
- [image](nscombobutton/image.md): The image that the button displays.
- [imageScaling](nscombobutton/imagescaling.md): The scaling behavior to apply to the button’s image.

### Specifying the Alternative Actions

- [menu](nscombobutton/menu.md): The menu that contains the button’s alternate actions.

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
- [Slider](slider.md): Display a range of values from which the user selects a single value.

# NSComboButton (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 13.0+

A button with a pull-down menu and a default action.

## Declaration

```objectivec
@interface NSComboButton : NSControl
```

<a id="overview"></a>

## Overview

An [NSComboButton](nscombobutton.md) object is a button that displays a title string, image, and an optional control for displaying a menu. Use this control in places where you want to offer a button with a default action and one or more alternative actions. Clicking the title or image executes the default action you provide, and clicking the menu control displays a menu for selecting a different action. If you configure the button to hide the menu control, a long-press gesture displays the menu.

After you create a combo button programmatically or in Interface Builder, choose the button [style](nscombobutton/style-swift.property.md) you want and add a title or image for your content. A combo button has a default action, which you specify at creation time. You can also change that action later using the inherited [target](nscontrol/target.md) and [action](nscontrol/action.md) properties. To specify one or more alternative actions, configure a menu with those actions and assign it to the button’s [menu](nscombobutton/menu.md) property.

This control doesn’t use an [NSCell](nscell.md) object for its underlying implementation. It also doesn’t support the addition of a contextual menu.

## Topics

### Creating a Combo Button

- [comboButtonWithTitle:image:menu:target:action:](nscombobutton/init%28title_image_menu_target_action_%29.md): Creates a combo button that displays both a title and image.
- [comboButtonWithTitle:menu:target:action:](nscombobutton/init%28title_menu_target_action_%29.md): Creates a combo button that displays a title.
- [comboButtonWithImage:menu:target:action:](nscombobutton/init%28image_menu_target_action_%29.md): Creates a combo button that displays an image.

### Configuring the Button Appearance

- [style](nscombobutton/style-swift.property.md): The appearance setting that determines how the button presents its menu .
- [NSComboButtonStyle](nscombobutton/style-swift.enum.md): Constants that indicate how a combo button presents its menu.
- [title](nscombobutton/title.md): The localized string that the button displays.
- [image](nscombobutton/image.md): The image that the button displays.
- [imageScaling](nscombobutton/imagescaling.md): The scaling behavior to apply to the button’s image.

### Specifying the Alternative Actions

- [menu](nscombobutton/menu.md): The menu that contains the button’s alternate actions.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
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
- [Slider](slider.md): Display a range of values from which the user selects a single value.
