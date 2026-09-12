> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickertouchbaritem](https://developer.apple.com/documentation/appkit/nscolorpickertouchbaritem)

# NSColorPickerTouchBarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A bar item that provides a system-defined color picker.

## Declaration

```swift
class NSColorPickerTouchBarItem
```

<a id="overview"></a>

## Overview

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/touch-bar/touch-bar-controls-and-views/#color-pickers).

## Topics

### Creating a color picker item

- [colorPicker(withIdentifier:)](nscolorpickertouchbaritem/colorpicker%28withidentifier_%29.md): Creates a bar item with the standard color picker icon.
- [textColorPicker(withIdentifier:)](nscolorpickertouchbaritem/textcolorpicker%28withidentifier_%29.md): Creates a bar item with the standard text color picker icon.
- [strokeColorPicker(withIdentifier:)](nscolorpickertouchbaritem/strokecolorpicker%28withidentifier_%29.md): Creates a bar item with the standard stroke color picker icon.
- [colorPicker(withIdentifier:buttonImage:)](nscolorpickertouchbaritem/colorpicker%28withidentifier_buttonimage_%29.md): Creates a color picker bar item using the supplied image as its icon.

### Configuring the color picker

- [colorList](nscolorpickertouchbaritem/colorlist.md): The list of colors displayed in the color picker.
- [allowedColorSpaces](nscolorpickertouchbaritem/allowedcolorspaces.md): Controls the color spaces that the color picker can produce.
- [showsAlpha](nscolorpickertouchbaritem/showsalpha.md): A Boolean value that controls whether the color picker allows picking of colors with alpha values other than `1.0`.
- [isEnabled](nscolorpickertouchbaritem/isenabled.md): A Boolean value that determines whether the color picker is enabled.

### Obtaining the selected color

- [color](nscolorpickertouchbaritem/color.md): The picker’s currently selected color.
- [target](nscolorpickertouchbaritem/target.md): An object that is notified when a user interacts with the color picker.
- [action](nscolorpickertouchbaritem/action.md): The selector on the target object that is invoked when a user interacts with the color picker.

### Configuring bar customization

- [customizationLabel](nscolorpickertouchbaritem/customizationlabel.md): The user-visible string identifying this item during touch bar customization.

## Relationships

### Inherits From

- [NSTouchBarItem](nstouchbaritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Color Selection

- [NSColorPicker](nscolorpicker.md): An abstract superclass that implements the default color picking protocol.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.

# NSColorPickerTouchBarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A bar item that provides a system-defined color picker.

## Declaration

```objectivec
@interface NSColorPickerTouchBarItem : NSTouchBarItem
```

<a id="overview"></a>

## Overview

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/touch-bar/touch-bar-controls-and-views/#color-pickers).

## Topics

### Creating a color picker item

- [colorPickerWithIdentifier:](nscolorpickertouchbaritem/colorpicker%28withidentifier_%29.md): Creates a bar item with the standard color picker icon.
- [textColorPickerWithIdentifier:](nscolorpickertouchbaritem/textcolorpicker%28withidentifier_%29.md): Creates a bar item with the standard text color picker icon.
- [strokeColorPickerWithIdentifier:](nscolorpickertouchbaritem/strokecolorpicker%28withidentifier_%29.md): Creates a bar item with the standard stroke color picker icon.
- [colorPickerWithIdentifier:buttonImage:](nscolorpickertouchbaritem/colorpicker%28withidentifier_buttonimage_%29.md): Creates a color picker bar item using the supplied image as its icon.

### Configuring the color picker

- [colorList](nscolorpickertouchbaritem/colorlist.md): The list of colors displayed in the color picker.
- [allowedColorSpaces](nscolorpickertouchbaritem/allowedcolorspaces.md): Controls the color spaces that the color picker can produce.
- [showsAlpha](nscolorpickertouchbaritem/showsalpha.md): A Boolean value that controls whether the color picker allows picking of colors with alpha values other than `1.0`.
- [enabled](nscolorpickertouchbaritem/isenabled.md): A Boolean value that determines whether the color picker is enabled.

### Obtaining the selected color

- [color](nscolorpickertouchbaritem/color.md): The picker’s currently selected color.
- [target](nscolorpickertouchbaritem/target.md): An object that is notified when a user interacts with the color picker.
- [action](nscolorpickertouchbaritem/action.md): The selector on the target object that is invoked when a user interacts with the color picker.

### Configuring bar customization

- [customizationLabel](nscolorpickertouchbaritem/customizationlabel.md): The user-visible string identifying this item during touch bar customization.

## Relationships

### Inherits From

- [NSTouchBarItem](nstouchbaritem.md)

## See Also

### Color Selection

- [NSColorPicker](nscolorpicker.md): An abstract superclass that implements the default color picking protocol.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
