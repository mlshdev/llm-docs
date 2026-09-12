> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingcustom](https://developer.apple.com/documentation/appkit/nscolorpickingcustom)

# NSColorPickingCustom (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that provides a way to add color pickers—custom user interfaces for color selection—to an app’s color panel.

## Declaration

```swift
protocol NSColorPickingCustom : NSColorPickingDefault
```

<a id="overview"></a>

## Overview

[NSColorPickingCustom](nscolorpickingcustom.md) works with the [NSColorPickingDefault](nscolorpickingdefault.md) protocol—which provides basic behavior for a color picker—to enable custom color pickers.

> **Note**

>  This protocol must be implemented by a custom picker, or an error will occur.

## Topics

### Configuring Color Pickers

- [setColor(\_:)](nscolorpickingcustom/setcolor%28__%29.md): Adjusts the receiver to make the specified color the currently selected color.

### Getting Color Picker Information

- [currentMode()](nscolorpickingcustom/currentmode%28%29.md): Returns the receiver’s current mode (or submode, if applicable).
- [supportsMode(\_:)](nscolorpickingcustom/supportsmode%28__%29.md): Returns a Boolean value indicating whether or not the receiver supports the specified picking mode.

### Displaying Color Pickers

- [provideNewView(\_:)](nscolorpickingcustom/providenewview%28__%29.md): Returns the view containing the receiver’s user interface.

## Relationships

### Inherits From

- [NSColorPickingDefault](nscolorpickingdefault.md)

## See Also

### Color Panels

- [NSColorPanel](nscolorpanel.md): A standard user interface for selecting color in an app.
- [NSColorPickingDefault](nscolorpickingdefault.md): A set of methods that provides basic behavior for a color picker.
- [NSColorPicker](nscolorpicker.md): An abstract superclass that implements the default color picking protocol.

# NSColorPickingCustom (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that provides a way to add color pickers—custom user interfaces for color selection—to an app’s color panel.

## Declaration

```objectivec
@protocol NSColorPickingCustom <NSColorPickingDefault>
```

<a id="overview"></a>

## Overview

[NSColorPickingCustom](nscolorpickingcustom.md) works with the [NSColorPickingDefault](nscolorpickingdefault.md) protocol—which provides basic behavior for a color picker—to enable custom color pickers.

> **Note**

>  This protocol must be implemented by a custom picker, or an error will occur.

## Topics

### Configuring Color Pickers

- [setColor:](nscolorpickingcustom/setcolor%28__%29.md): Adjusts the receiver to make the specified color the currently selected color.

### Getting Color Picker Information

- [currentMode](nscolorpickingcustom/currentmode%28%29.md): Returns the receiver’s current mode (or submode, if applicable).
- [supportsMode:](nscolorpickingcustom/supportsmode%28__%29.md): Returns a Boolean value indicating whether or not the receiver supports the specified picking mode.

### Displaying Color Pickers

- [provideNewView:](nscolorpickingcustom/providenewview%28__%29.md): Returns the view containing the receiver’s user interface.

## Relationships

### Inherits From

- [NSColorPickingDefault](nscolorpickingdefault.md)

## See Also

### Color Panels

- [NSColorPanel](nscolorpanel.md): A standard user interface for selecting color in an app.
- [NSColorPickingDefault](nscolorpickingdefault.md): A set of methods that provides basic behavior for a color picker.
- [NSColorPicker](nscolorpicker.md): An abstract superclass that implements the default color picking protocol.
