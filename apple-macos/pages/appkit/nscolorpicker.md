> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpicker](https://developer.apple.com/documentation/appkit/nscolorpicker)

# NSColorPicker (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An abstract superclass that implements the default color picking protocol.

## Declaration

```swift
class NSColorPicker
```

<a id="overview"></a>

## Overview

The [NSColorPickingDefault](nscolorpickingdefault.md) and [NSColorPickingCustom](nscolorpickingcustom.md) protocols define a way to add color pickers (custom user interfaces for color selection) to the color panel.

## Topics

### Initializing the Color Picker Object

- [init(pickerMask:colorPanel:)](nscolorpicker/init%28pickermask_colorpanel_%29.md): Initializes the color picker with the specified color panel and color picker mode mask.

### Getting the Color Panel

- [colorPanel](nscolorpicker/colorpanel.md): The color panel instance that owns the color picker.

### Adding Button Images

- [insertNewButtonImage(\_:in:)](nscolorpicker/insertnewbuttonimage%28__in_%29.md): Sets the image used for the specified button cell.
- [provideNewButtonImage](nscolorpicker/providenewbuttonimage.md): The button image used by the color picker.

### Setting the Mode

- [setMode(\_:)](nscolorpicker/setmode%28__%29.md): Overriden to set the color picker’s mode.

### Managing Color Lists

- [attachColorList(\_:)](nscolorpicker/attachcolorlist%28__%29.md): Overriden to attach a color list to a color picker.
- [detachColorList(\_:)](nscolorpicker/detachcolorlist%28__%29.md): Overriden to detach a color list from a color picker.

### Responding to View Changes

- [viewSizeChanged(\_:)](nscolorpicker/viewsizechanged%28__%29.md): Overriden to respond to a size change.

### Customizing the Color Picker

- [buttonToolTip](nscolorpicker/buttontooltip.md): The tool tip that is shown when the mouse cursor is over the color picker’s button image.
- [minContentSize](nscolorpicker/mincontentsize.md): The minimum content size.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSColorPickingDefault](nscolorpickingdefault.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Color Selection

- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.

# NSColorPicker (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An abstract superclass that implements the default color picking protocol.

## Declaration

```objectivec
@interface NSColorPicker : NSObject
```

<a id="overview"></a>

## Overview

The [NSColorPickingDefault](nscolorpickingdefault.md) and [NSColorPickingCustom](nscolorpickingcustom.md) protocols define a way to add color pickers (custom user interfaces for color selection) to the color panel.

## Topics

### Initializing the Color Picker Object

- [initWithPickerMask:colorPanel:](nscolorpicker/init%28pickermask_colorpanel_%29.md): Initializes the color picker with the specified color panel and color picker mode mask.

### Getting the Color Panel

- [colorPanel](nscolorpicker/colorpanel.md): The color panel instance that owns the color picker.

### Adding Button Images

- [insertNewButtonImage:in:](nscolorpicker/insertnewbuttonimage%28__in_%29.md): Sets the image used for the specified button cell.
- [provideNewButtonImage](nscolorpicker/providenewbuttonimage.md): The button image used by the color picker.

### Setting the Mode

- [setMode:](nscolorpicker/setmode%28__%29.md): Overriden to set the color picker’s mode.

### Managing Color Lists

- [attachColorList:](nscolorpicker/attachcolorlist%28__%29.md): Overriden to attach a color list to a color picker.
- [detachColorList:](nscolorpicker/detachcolorlist%28__%29.md): Overriden to detach a color list from a color picker.

### Responding to View Changes

- [viewSizeChanged:](nscolorpicker/viewsizechanged%28__%29.md): Overriden to respond to a size change.

### Customizing the Color Picker

- [buttonToolTip](nscolorpicker/buttontooltip.md): The tool tip that is shown when the mouse cursor is over the color picker’s button image.
- [minContentSize](nscolorpicker/mincontentsize.md): The minimum content size.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSColorPickingDefault](nscolorpickingdefault.md)

## See Also

### Color Selection

- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
