> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel](https://developer.apple.com/documentation/appkit/nscolorpanel)

# NSColorPanel (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A standard user interface for selecting color in an app.

## Declaration

```swift
class NSColorPanel
```

<a id="overview"></a>

## Overview

[NSColorPanel](nscolorpanel.md) provides a number of standard color selection modes and, with the [NSColorPickingDefault](nscolorpickingdefault.md) and [NSColorPickingCustom](nscolorpickingcustom.md) protocols, allows an app to add its own color selection modes. It also allows the user to save swatches containing frequently used colors.

## Topics

### Obtaining the shared color panel

- [shared](nscolorpanel/shared.md): Returns the shared `NSColorPanel` instance, creating it if necessary.
- [sharedColorPanelExists](nscolorpanel/sharedcolorpanelexists.md): Returns a Boolean value indicating whether the `NSColorPanel` has been created already.

### Setting color picker modes

- [setPickerMode(\_:)](nscolorpanel/setpickermode%28__%29.md): Specifies the color panel’s initial picker.
- [mode](nscolorpanel/mode-swift.property.md): The mode of the receiver the mode is one of the modes allowed by the color mask.
- [NSColorPanel.Mode](nscolorpanel/mode-swift.enum.md): A type defined for the `enum` constants specifying color panel modes.
- [setPickerMask(\_:)](nscolorpanel/setpickermask%28__%29.md): Determines which color selection modes are available in an application’s `NSColorPanel`.
- [NSColorPanel.Options](nscolorpanel/options.md): The color modes that are enabled for a color panel.

### Configuring the color panel

- [accessoryView](nscolorpanel/accessoryview.md): The accessory view.
- [isContinuous](nscolorpanel/iscontinuous.md): A Boolean value indicating whether the receiver continuously sends the action message to the target.
- [setAction(\_:)](nscolorpanel/setaction%28__%29.md): Sets the color panel’s action message.
- [setTarget(\_:)](nscolorpanel/settarget%28__%29.md): Sets the target of the receiver.
- [showsAlpha](nscolorpanel/showsalpha.md): A Boolean value that indicates whether the receiver shows alpha values and an opacity slider.

### Managing color lists

- [attachColorList(\_:)](nscolorpanel/attachcolorlist%28__%29.md): Adds the list of `NSColor` objects specified to all the color pickers in the receiver that display color lists by invoking [attachColorList(\_:)](nscolorpanel/attachcolorlist%28__%29.md) on all color pickers in the application.
- [detachColorList(\_:)](nscolorpanel/detachcolorlist%28__%29.md): Removes the list of colors from all the color pickers in the receiver that display color lists by invoking [detachColorList(\_:)](nscolorpanel/detachcolorlist%28__%29.md) on all color pickers in the application.

### Setting color

- [dragColor(\_:with:from:)](nscolorpanel/dragcolor%28__with_from_%29.md): Drags a color into a destination view from the specified source view.
- [color](nscolorpanel/color.md): The color of the receiver.

### Supporting high dynamic range (HDR) colors

- [maximumLinearExposure](nscolorpanel/maximumlinearexposure.md): The maximum linear exposure that can be set on a color picked in the color panel. Defaults to 1 and ignores any value less than 1. If set to a value \>= 2, the color picked by the panel may have a linear exposure applied to it.

### Getting transparency information

- [alpha](nscolorpanel/alpha.md): The receiver’s current alpha value based on its opacity slider.

### Responding to a color change

- [NSColorChanging](nscolorchanging.md)
- [colorDidChangeNotification](nscolorpanel/colordidchangenotification.md): Posted when the color of the `NSColorPanel` is set, as when [NSColorPanel](nscolorpanel.md) is invoked.

### Structures

- [NSColorPanel.ColorDidChangeMessage](nscolorpanel/colordidchangemessage.md)

## Relationships

### Inherits From

- [NSPanel](nspanel.md)

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
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Color Panels

- [NSColorPickingCustom](nscolorpickingcustom.md): A set of methods that provides a way to add color pickers—custom user interfaces for color selection—to an app’s color panel.
- [NSColorPickingDefault](nscolorpickingdefault.md): A set of methods that provides basic behavior for a color picker.
- [NSColorPicker](nscolorpicker.md): An abstract superclass that implements the default color picking protocol.

# NSColorPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A standard user interface for selecting color in an app.

## Declaration

```objectivec
@interface NSColorPanel : NSPanel
```

<a id="overview"></a>

## Overview

[NSColorPanel](nscolorpanel.md) provides a number of standard color selection modes and, with the [NSColorPickingDefault](nscolorpickingdefault.md) and [NSColorPickingCustom](nscolorpickingcustom.md) protocols, allows an app to add its own color selection modes. It also allows the user to save swatches containing frequently used colors.

## Topics

### Obtaining the shared color panel

- [sharedColorPanel](nscolorpanel/shared.md): Returns the shared `NSColorPanel` instance, creating it if necessary.
- [sharedColorPanelExists](nscolorpanel/sharedcolorpanelexists.md): Returns a Boolean value indicating whether the `NSColorPanel` has been created already.

### Setting color picker modes

- [setPickerMode:](nscolorpanel/setpickermode%28__%29.md): Specifies the color panel’s initial picker.
- [mode](nscolorpanel/mode-swift.property.md): The mode of the receiver the mode is one of the modes allowed by the color mask.
- [NSColorPanelMode](nscolorpanel/mode-swift.enum.md): A type defined for the `enum` constants specifying color panel modes.
- [setPickerMask:](nscolorpanel/setpickermask%28__%29.md): Determines which color selection modes are available in an application’s `NSColorPanel`.
- [NSColorPanelOptions](nscolorpanel/options.md): The color modes that are enabled for a color panel.

### Configuring the color panel

- [accessoryView](nscolorpanel/accessoryview.md): The accessory view.
- [continuous](nscolorpanel/iscontinuous.md): A Boolean value indicating whether the receiver continuously sends the action message to the target.
- [setAction:](nscolorpanel/setaction%28__%29.md): Sets the color panel’s action message.
- [setTarget:](nscolorpanel/settarget%28__%29.md): Sets the target of the receiver.
- [showsAlpha](nscolorpanel/showsalpha.md): A Boolean value that indicates whether the receiver shows alpha values and an opacity slider.

### Managing color lists

- [attachColorList:](nscolorpanel/attachcolorlist%28__%29.md): Adds the list of `NSColor` objects specified to all the color pickers in the receiver that display color lists by invoking [attachColorList:](nscolorpanel/attachcolorlist%28__%29.md) on all color pickers in the application.
- [detachColorList:](nscolorpanel/detachcolorlist%28__%29.md): Removes the list of colors from all the color pickers in the receiver that display color lists by invoking [detachColorList:](nscolorpanel/detachcolorlist%28__%29.md) on all color pickers in the application.

### Setting color

- [dragColor:withEvent:fromView:](nscolorpanel/dragcolor%28__with_from_%29.md): Drags a color into a destination view from the specified source view.
- [color](nscolorpanel/color.md): The color of the receiver.

### Supporting high dynamic range (HDR) colors

- [maximumLinearExposure](nscolorpanel/maximumlinearexposure.md): The maximum linear exposure that can be set on a color picked in the color panel. Defaults to 1 and ignores any value less than 1. If set to a value \>= 2, the color picked by the panel may have a linear exposure applied to it.

### Getting transparency information

- [alpha](nscolorpanel/alpha.md): The receiver’s current alpha value based on its opacity slider.

### Responding to a color change

- [NSColorChanging](nscolorchanging.md)
- [changeColor:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changecolor:): Deprecated. Sent to the first responder when the user selects a color in an `NSColorPanel` object.
- [NSColorPanelColorDidChangeNotification](nscolorpanel/colordidchangenotification.md): Posted when the color of the `NSColorPanel` is set, as when [NSColorPanel](nscolorpanel.md) is invoked.

## Relationships

### Inherits From

- [NSPanel](nspanel.md)

## See Also

### Color Panels

- [NSColorPickingCustom](nscolorpickingcustom.md): A set of methods that provides a way to add color pickers—custom user interfaces for color selection—to an app’s color panel.
- [NSColorPickingDefault](nscolorpickingdefault.md): A set of methods that provides basic behavior for a color picker.
- [NSColorPicker](nscolorpicker.md): An abstract superclass that implements the default color picking protocol.
