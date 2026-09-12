> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton](https://developer.apple.com/documentation/appkit/nsbutton)

# NSButton (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A control that defines an area on the screen that a user clicks to trigger an action.

## Declaration

```swift
class NSButton
```

<a id="overview"></a>

## Overview

Buttons are a standard control for initiating actions within your app. You can configure buttons with many different visual styles, but the behavior is the same. When a user clicks it, a button calls the action method of its associated target object. (If you configure a button as continuous, it calls its action method at timed intervals until the user releases the mouse button or the cursor leaves the button boundaries). You use the action method to perform your app-specific tasks.

There are multiple types of buttons, each with a different user interface and behavior. The [NSButtonCell](nsbuttoncell.md) class defines the button types, and calling the [setButtonType(\_:)](nsbutton/setbuttontype%28__%29.md) method configures them.

If you configure it as an accelerator button (type [NSAcceleratorButton](nsacceleratorbutton.md) or [NSMultiLevelAcceleratorButton](nsmultilevelacceleratorbutton.md)), you can set a button to send action messages when changes in pressure occur when the user clicks the button.

Buttons can either have two states (on and off) or three states (on, off, and mixed). You enable a three-state button by calling the [allowsMixedState](nsbutton/allowsmixedstate.md) method. On and off (also referred to as alternate and normal) states indicate that the user clicked or didn’t click the button. Mixed is typically used for checkboxes or radio buttons, which allow for an additional intermediate state. For example, suppose the state of a checkbox denotes whether a text field contains bold text. If all text in the text field is bold, then the checkbox is on. If none of the text is bold, then the checkbox is off. If some of the text is bold, then the checkbox is mixed.

For most types of buttons, the value of the button matches its state—the value is `1` for on, `0` for off, or `-1` for mixed. For pressure-sensitive buttons, the value of the button indicates pressure level instead.

`NSButton` and [NSMatrix](nsmatrix.md) both provide a control view, which displays an `NSButtonCell` object. However, while a matrix requires you to access the button cell objects directly, most button class methods act as “covers” for identically declared button cell methods. In other words, the implementation of the button method invokes the corresponding button cell method for you, allowing you to be unconcerned with the existence of the button cell. The only button cell methods that don’t have covers relate to the font you use to display the key equivalent and to specific methods for highlighting or showing the state of the button.

## Topics

### Creating standard buttons

- [init(checkboxWithTitle:target:action:)](nsbutton/init%28checkboxwithtitle_target_action_%29.md): Creates a standard checkbox with the title you specify.
- [init(image:target:action:)](nsbutton/init%28image_target_action_%29.md): Creates a standard push button with the image you specify.
- [init(radioButtonWithTitle:target:action:)](nsbutton/init%28radiobuttonwithtitle_target_action_%29.md): Creates a standard radio button with the title you specify.
- [init(title:image:target:action:)](nsbutton/init%28title_image_target_action_%29.md): Creates a standard push button with a title and image.
- [init(title:target:action:)](nsbutton/init%28title_target_action_%29.md): Creates a standard push button with the title you specify.

### Configuring the cell

- [NSButtonCell](nsbuttoncell.md): An object that defines the user interface of a button or other clickable region of a view.

### Configuring buttons

- [setButtonType(\_:)](nsbutton/setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.
- [getPeriodicDelay(\_:interval:)](nsbutton/getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.
- [setPeriodicDelay(\_:interval:)](nsbutton/setperiodicdelay%28__interval_%29.md): Sets the message delay and interval periods for a continuous button.
- [contentTintColor](nsbutton/contenttintcolor.md): A tint color to use for the template image and text content.
- [hasDestructiveAction](nsbutton/hasdestructiveaction.md): A Boolean value that defines whether a button’s action has a destructive effect.
- [alternateTitle](nsbutton/alternatetitle.md): The title that the button displays when the button is in an on state.
- [attributedTitle](nsbutton/attributedtitle.md): The title that the button displays in an off state, as an attributed string.
- [attributedAlternateTitle](nsbutton/attributedalternatetitle.md): The title that the button displays as an attributed string when the button is in an on state.
- [title](nsbutton/title.md): The title displayed on the button when it’s in an off state.
- [symbolConfiguration](nsbutton/symbolconfiguration.md): The combination of point size, weight, and scale to use when sizing and displaying symbol images.
- [sound](nsbutton/sound.md): The sound that plays when the user clicks the button.
- [isSpringLoaded](nsbutton/isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the button.
- [maxAcceleratorLevel](nsbutton/maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](nsmultilevelacceleratorbutton.md).
- [tintProminence](nsbutton/tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](nstintprominence.md) for a list of possible values.
- [NSTintProminence](nstintprominence.md): Controls how strongly the tint color applies in a view.
- [borderShape](nsbutton/bordershape.md)
- [NSControl.BorderShape](nscontrol/bordershape.md)

### Configuring button images

- [image](nsbutton/image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](nsbutton/alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](nsbutton/imageposition.md): The position of the button’s image relative to its title.
- [NSControl.ImagePosition](nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [isBordered](nsbutton/isbordered.md): A Boolean value that determines whether the button has a border.
- [isTransparent](nsbutton/istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](nsbutton/bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](nsbutton/bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](nsbutton/showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](nsbutton/imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](nsbutton/imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.

### Managing button compression

- [activeCompressionOptions](nsbutton/activecompressionoptions.md): The compression options active for this button.
- [compress(withPrioritizedCompressionOptions:)](nsbutton/compress%28withprioritizedcompressionoptions_%29.md): Sets the priority compression options for this button.
- [minimumSize(withPrioritizedCompressionOptions:)](nsbutton/minimumsize%28withprioritizedcompressionoptions_%29.md): Returns the minimum size of the button by using the compression options.

### Managing button state

- [allowsMixedState](nsbutton/allowsmixedstate.md): A Boolean value that indicates whether the button allows a mixed state.
- [state](nsbutton/state.md): The button’s state.
- [setNextState()](nsbutton/setnextstate%28%29.md): Sets the button to its next state.
- [highlight(\_:)](nsbutton/highlight%28__%29.md): Highlights (or unhighlights) the button.

### Accessing key equivalents

- [keyEquivalent](nsbutton/keyequivalent.md): The key-equivalent character of the button.
- [keyEquivalentModifierMask](nsbutton/keyequivalentmodifiermask.md): The mask specifying the modifier keys for the button’s key equivalent.

### Handling keyboard events

- [performKeyEquivalent(with:)](nsbutton/performkeyequivalent%28with_%29.md): Checks the button’s key equivalent against the specified event and, if they match, simulates the button being clicked.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Inherited By

- [NSPopUpButton](nspopupbutton.md)
- [NSStatusBarButton](nsstatusbarbutton.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityButton](nsaccessibilitybutton.md)
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
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
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
- [Slider](slider.md): Display a range of values from which the user selects a single value.

# NSButton (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A control that defines an area on the screen that a user clicks to trigger an action.

## Declaration

```objectivec
@interface NSButton : NSControl
```

<a id="overview"></a>

## Overview

Buttons are a standard control for initiating actions within your app. You can configure buttons with many different visual styles, but the behavior is the same. When a user clicks it, a button calls the action method of its associated target object. (If you configure a button as continuous, it calls its action method at timed intervals until the user releases the mouse button or the cursor leaves the button boundaries). You use the action method to perform your app-specific tasks.

There are multiple types of buttons, each with a different user interface and behavior. The [NSButtonCell](nsbuttoncell.md) class defines the button types, and calling the [setButtonType:](nsbutton/setbuttontype%28__%29.md) method configures them.

If you configure it as an accelerator button (type [NSAcceleratorButton](nsacceleratorbutton.md) or [NSMultiLevelAcceleratorButton](nsmultilevelacceleratorbutton.md)), you can set a button to send action messages when changes in pressure occur when the user clicks the button.

Buttons can either have two states (on and off) or three states (on, off, and mixed). You enable a three-state button by calling the [allowsMixedState](nsbutton/allowsmixedstate.md) method. On and off (also referred to as alternate and normal) states indicate that the user clicked or didn’t click the button. Mixed is typically used for checkboxes or radio buttons, which allow for an additional intermediate state. For example, suppose the state of a checkbox denotes whether a text field contains bold text. If all text in the text field is bold, then the checkbox is on. If none of the text is bold, then the checkbox is off. If some of the text is bold, then the checkbox is mixed.

For most types of buttons, the value of the button matches its state—the value is `1` for on, `0` for off, or `-1` for mixed. For pressure-sensitive buttons, the value of the button indicates pressure level instead.

`NSButton` and [NSMatrix](nsmatrix.md) both provide a control view, which displays an `NSButtonCell` object. However, while a matrix requires you to access the button cell objects directly, most button class methods act as “covers” for identically declared button cell methods. In other words, the implementation of the button method invokes the corresponding button cell method for you, allowing you to be unconcerned with the existence of the button cell. The only button cell methods that don’t have covers relate to the font you use to display the key equivalent and to specific methods for highlighting or showing the state of the button.

## Topics

### Creating standard buttons

- [checkboxWithTitle:target:action:](nsbutton/init%28checkboxwithtitle_target_action_%29.md): Creates a standard checkbox with the title you specify.
- [buttonWithImage:target:action:](nsbutton/init%28image_target_action_%29.md): Creates a standard push button with the image you specify.
- [radioButtonWithTitle:target:action:](nsbutton/init%28radiobuttonwithtitle_target_action_%29.md): Creates a standard radio button with the title you specify.
- [buttonWithTitle:image:target:action:](nsbutton/init%28title_image_target_action_%29.md): Creates a standard push button with a title and image.
- [buttonWithTitle:target:action:](nsbutton/init%28title_target_action_%29.md): Creates a standard push button with the title you specify.

### Configuring the cell

- [NSButtonCell](nsbuttoncell.md): An object that defines the user interface of a button or other clickable region of a view.

### Configuring buttons

- [setButtonType:](nsbutton/setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.
- [getPeriodicDelay:interval:](nsbutton/getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.
- [setPeriodicDelay:interval:](nsbutton/setperiodicdelay%28__interval_%29.md): Sets the message delay and interval periods for a continuous button.
- [contentTintColor](nsbutton/contenttintcolor.md): A tint color to use for the template image and text content.
- [hasDestructiveAction](nsbutton/hasdestructiveaction.md): A Boolean value that defines whether a button’s action has a destructive effect.
- [alternateTitle](nsbutton/alternatetitle.md): The title that the button displays when the button is in an on state.
- [attributedTitle](nsbutton/attributedtitle.md): The title that the button displays in an off state, as an attributed string.
- [attributedAlternateTitle](nsbutton/attributedalternatetitle.md): The title that the button displays as an attributed string when the button is in an on state.
- [title](nsbutton/title.md): The title displayed on the button when it’s in an off state.
- [setTitleWithMnemonic:](nsbutton/settitlewithmnemonic_.md): Deprecated. Sets the title of a button with a character denoting an access key.
- [symbolConfiguration](nsbutton/symbolconfiguration.md): The combination of point size, weight, and scale to use when sizing and displaying symbol images.
- [sound](nsbutton/sound.md): The sound that plays when the user clicks the button.
- [springLoaded](nsbutton/isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the button.
- [maxAcceleratorLevel](nsbutton/maxacceleratorlevel.md): An integer value indicating the maximum pressure level for a button of type [NSMultiLevelAcceleratorButton](nsmultilevelacceleratorbutton.md).
- [tintProminence](nsbutton/tintprominence.md): The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See [NSTintProminence](nstintprominence.md) for a list of possible values.
- [NSTintProminence](nstintprominence.md): Controls how strongly the tint color applies in a view.
- [borderShape](nsbutton/bordershape.md)
- [NSControlBorderShape](nscontrol/bordershape.md)

### Configuring button images

- [image](nsbutton/image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](nsbutton/alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](nsbutton/imageposition.md): The position of the button’s image relative to its title.
- [NSCellImagePosition](nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [bordered](nsbutton/isbordered.md): A Boolean value that determines whether the button has a border.
- [transparent](nsbutton/istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](nsbutton/bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](nsbutton/bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](nsbutton/showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](nsbutton/imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](nsbutton/imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.

### Managing button compression

- [activeCompressionOptions](nsbutton/activecompressionoptions.md): The compression options active for this button.
- [compressWithPrioritizedCompressionOptions:](nsbutton/compress%28withprioritizedcompressionoptions_%29.md): Sets the priority compression options for this button.
- [minimumSizeWithPrioritizedCompressionOptions:](nsbutton/minimumsize%28withprioritizedcompressionoptions_%29.md): Returns the minimum size of the button by using the compression options.

### Managing button state

- [allowsMixedState](nsbutton/allowsmixedstate.md): A Boolean value that indicates whether the button allows a mixed state.
- [state](nsbutton/state.md): The button’s state.
- [setNextState](nsbutton/setnextstate%28%29.md): Sets the button to its next state.
- [highlight:](nsbutton/highlight%28__%29.md): Highlights (or unhighlights) the button.

### Accessing key equivalents

- [keyEquivalent](nsbutton/keyequivalent.md): The key-equivalent character of the button.
- [keyEquivalentModifierMask](nsbutton/keyequivalentmodifiermask.md): The mask specifying the modifier keys for the button’s key equivalent.

### Handling keyboard events

- [performKeyEquivalent:](nsbutton/performkeyequivalent%28with_%29.md): Checks the button’s key equivalent against the specified event and, if they match, simulates the button being clicked.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Inherited By

- [NSPopUpButton](nspopupbutton.md)
- [NSStatusBarButton](nsstatusbarbutton.md)

### Conforms To

- [NSAccessibilityButton](nsaccessibilitybutton.md)
- [NSUserInterfaceCompression](nsuserinterfacecompression.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
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
- [Slider](slider.md): Display a range of values from which the user selects a single value.
