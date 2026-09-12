> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell](https://developer.apple.com/documentation/appkit/nscolorwell)

# NSColorWell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A control that displays a color value and lets the user change that color value.

## Declaration

```swift
class NSColorWell
```

<a id="overview"></a>

## Overview

An [NSColorWell](nscolorwell.md) object lets people select colors from your interface. Incorporate this type of control if your app supports custom color selection. For example, a drawing app might include a color well to let someone choose the color to use when drawing. A color well control displays the currently selected color, and interactions with the color well display interfaces for selecting new colors.

When you create a color well programmatically or in Interface Builder, specify the appearance and interaction style you want. The color well supports color selection using a color picker popover or the system [NSColorPanel](nscolorpanel.md) object. When someone selects a new color in one of these interfaces, the color well updates its selected color to match. You can also provide your own color selection process using a custom action and update the color yourself.

## Topics

### Creating a color well

- [init(style:)](nscolorwell/init%28style_%29.md): Creates a color well that adopts the specified appearance style.

### Managing the selected color

- [color](nscolorwell/color.md): The currently selected color for the color well.
- [takeColorFrom(\_:)](nscolorwell/takecolorfrom%28__%29.md): Changes the currently selected color to the color of the specified object.
- [supportsAlpha](nscolorwell/supportsalpha.md): A Boolean value that determines whether the color picker supports alpha values.

### Supporting high dynamic range (HDR) colors

- [maximumLinearExposure](nscolorwell/maximumlinearexposure.md): The maximum linear exposure a color in this color well can be set to. Defaults to 1 and ignores any value less than 1. If set to a value \>= 2, the color picked for this well may have a linear exposure applied to it.

### Configuring the appearance

- [colorWellStyle](nscolorwell/colorwellstyle.md): The appearance and interaction style to apply to the color well.
- [NSColorWell.Style](nscolorwell/style.md): Constants that specify the appearance and interaction modes for a color well.
- [image](nscolorwell/image.md): The image to display on the button portion of a color well that adopts the expanded style.
- [isBordered](nscolorwell/isbordered.md): Deprecated. A Boolean value that determines whether the color well has a border.

### Activating and deactivating color wells

- [activate(\_:)](nscolorwell/activate%28__%29.md): Activates the color well, displays the color panel, and synchronizes the two UI elements.
- [isActive](nscolorwell/isactive.md): A Boolean value that indicates whether the color well is currently active.
- [deactivate()](nscolorwell/deactivate%28%29.md): Deactivates the color well.

### Drawing color wells

- [drawWell(inside:)](nscolorwell/drawwell%28inside_%29.md): Draws the area inside the color well at the specified location without drawing borders.

### Customizing the color selection behavior

- [pulldownAction](nscolorwell/pulldownaction.md): The action to perform when someone clicks in the color area of the color well.
- [pulldownTarget](nscolorwell/pulldowntarget.md): The target object that defines the action you want to perform when someone interacts with the color well.

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

### Color Selection

- [NSColorPicker](nscolorpicker.md): An abstract superclass that implements the default color picking protocol.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.

# NSColorWell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A control that displays a color value and lets the user change that color value.

## Declaration

```objectivec
@interface NSColorWell : NSControl
```

<a id="overview"></a>

## Overview

An [NSColorWell](nscolorwell.md) object lets people select colors from your interface. Incorporate this type of control if your app supports custom color selection. For example, a drawing app might include a color well to let someone choose the color to use when drawing. A color well control displays the currently selected color, and interactions with the color well display interfaces for selecting new colors.

When you create a color well programmatically or in Interface Builder, specify the appearance and interaction style you want. The color well supports color selection using a color picker popover or the system [NSColorPanel](nscolorpanel.md) object. When someone selects a new color in one of these interfaces, the color well updates its selected color to match. You can also provide your own color selection process using a custom action and update the color yourself.

## Topics

### Creating a color well

- [colorWellWithStyle:](nscolorwell/init%28style_%29.md): Creates a color well that adopts the specified appearance style.

### Managing the selected color

- [color](nscolorwell/color.md): The currently selected color for the color well.
- [takeColorFrom:](nscolorwell/takecolorfrom%28__%29.md): Changes the currently selected color to the color of the specified object.
- [supportsAlpha](nscolorwell/supportsalpha.md): A Boolean value that determines whether the color picker supports alpha values.

### Supporting high dynamic range (HDR) colors

- [maximumLinearExposure](nscolorwell/maximumlinearexposure.md): The maximum linear exposure a color in this color well can be set to. Defaults to 1 and ignores any value less than 1. If set to a value \>= 2, the color picked for this well may have a linear exposure applied to it.

### Configuring the appearance

- [colorWellStyle](nscolorwell/colorwellstyle.md): The appearance and interaction style to apply to the color well.
- [NSColorWellStyle](nscolorwell/style.md): Constants that specify the appearance and interaction modes for a color well.
- [image](nscolorwell/image.md): The image to display on the button portion of a color well that adopts the expanded style.
- [bordered](nscolorwell/isbordered.md): Deprecated. A Boolean value that determines whether the color well has a border.

### Activating and deactivating color wells

- [activate:](nscolorwell/activate%28__%29.md): Activates the color well, displays the color panel, and synchronizes the two UI elements.
- [active](nscolorwell/isactive.md): A Boolean value that indicates whether the color well is currently active.
- [deactivate](nscolorwell/deactivate%28%29.md): Deactivates the color well.

### Drawing color wells

- [drawWellInside:](nscolorwell/drawwell%28inside_%29.md): Draws the area inside the color well at the specified location without drawing borders.

### Customizing the color selection behavior

- [pulldownAction](nscolorwell/pulldownaction.md): The action to perform when someone clicks in the color area of the color well.
- [pulldownTarget](nscolorwell/pulldowntarget.md): The target object that defines the action you want to perform when someone interacts with the color well.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

## See Also

### Color Selection

- [NSColorPicker](nscolorpicker.md): An abstract superclass that implements the default color picking protocol.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
