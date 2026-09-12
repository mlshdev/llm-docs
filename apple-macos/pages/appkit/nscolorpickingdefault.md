> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingdefault](https://developer.apple.com/documentation/appkit/nscolorpickingdefault)

# NSColorPickingDefault (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that provides basic behavior for a color picker.

## Declaration

```swift
protocol NSColorPickingDefault
```

<a id="overview"></a>

## Overview

The [NSColorPickingDefault](nscolorpickingdefault.md) protocol, together with the [NSColorPickingCustom](nscolorpickingcustom.md) protocol (which provides implementation-specific behavior), provides an interface for adding color pickers to an app’s color panel.

## Topics

### Creating Color Pickers

- [init(pickerMask:colorPanel:)](nscolorpickingdefault/init%28pickermask_colorpanel_%29.md): Initializes the receiver with a given color panel and its mode.

### Configuring Color Pickers

- [setMode(\_:)](nscolorpickingdefault/setmode%28__%29.md): Specifies the receiver’s mode.
- [insertNewButtonImage(\_:in:)](nscolorpickingdefault/insertnewbuttonimage%28__in_%29.md): Sets the image of a given button cell.
- [provideNewButtonImage()](nscolorpickingdefault/providenewbuttonimage%28%29.md): Provides the image of the button used to select the receiver in the color panel.
- [minContentSize()](nscolorpickingdefault/mincontentsize%28%29.md): Indicates the receiver’s minimum content size.
- [buttonToolTip()](nscolorpickingdefault/buttontooltip%28%29.md): Provides the toolbar button help tag.

### Handling Events

- [alphaControlAddedOrRemoved(\_:)](nscolorpickingdefault/alphacontroladdedorremoved%28__%29.md): Sent when the color panel’s opacity controls have been hidden or displayed.
- [viewSizeChanged(\_:)](nscolorpickingdefault/viewsizechanged%28__%29.md): Tells the recever when the color panel’s view size changes in a way that might affect the color picker.

### Managing Color Lists

- [attachColorList(\_:)](nscolorpickingdefault/attachcolorlist%28__%29.md): Tells the receiver to attach the given color list, if it isn’t already displaying the list.
- [detachColorList(\_:)](nscolorpickingdefault/detachcolorlist%28__%29.md): Tells the receiver to detach the given color list, unless the receiver isn’t displaying the list.

## Relationships

### Inherited By

- [NSColorPickingCustom](nscolorpickingcustom.md)

### Conforming Types

- [NSColorPicker](nscolorpicker.md)

## See Also

### Color Panels

- [NSColorPanel](nscolorpanel.md): A standard user interface for selecting color in an app.
- [NSColorPickingCustom](nscolorpickingcustom.md): A set of methods that provides a way to add color pickers—custom user interfaces for color selection—to an app’s color panel.
- [NSColorPicker](nscolorpicker.md): An abstract superclass that implements the default color picking protocol.

# NSColorPickingDefault (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that provides basic behavior for a color picker.

## Declaration

```objectivec
@protocol NSColorPickingDefault
```

<a id="overview"></a>

## Overview

The [NSColorPickingDefault](nscolorpickingdefault.md) protocol, together with the [NSColorPickingCustom](nscolorpickingcustom.md) protocol (which provides implementation-specific behavior), provides an interface for adding color pickers to an app’s color panel.

## Topics

### Creating Color Pickers

- [initWithPickerMask:colorPanel:](nscolorpickingdefault/init%28pickermask_colorpanel_%29.md): Initializes the receiver with a given color panel and its mode.

### Configuring Color Pickers

- [setMode:](nscolorpickingdefault/setmode%28__%29.md): Specifies the receiver’s mode.
- [insertNewButtonImage:in:](nscolorpickingdefault/insertnewbuttonimage%28__in_%29.md): Sets the image of a given button cell.
- [provideNewButtonImage](nscolorpickingdefault/providenewbuttonimage%28%29.md): Provides the image of the button used to select the receiver in the color panel.
- [minContentSize](nscolorpickingdefault/mincontentsize%28%29.md): Indicates the receiver’s minimum content size.
- [buttonToolTip](nscolorpickingdefault/buttontooltip%28%29.md): Provides the toolbar button help tag.

### Handling Events

- [alphaControlAddedOrRemoved:](nscolorpickingdefault/alphacontroladdedorremoved%28__%29.md): Sent when the color panel’s opacity controls have been hidden or displayed.
- [viewSizeChanged:](nscolorpickingdefault/viewsizechanged%28__%29.md): Tells the recever when the color panel’s view size changes in a way that might affect the color picker.

### Managing Color Lists

- [attachColorList:](nscolorpickingdefault/attachcolorlist%28__%29.md): Tells the receiver to attach the given color list, if it isn’t already displaying the list.
- [detachColorList:](nscolorpickingdefault/detachcolorlist%28__%29.md): Tells the receiver to detach the given color list, unless the receiver isn’t displaying the list.

## Relationships

### Inherited By

- [NSColorPickingCustom](nscolorpickingcustom.md)

### Conforming Types

- [NSColorPicker](nscolorpicker.md)

## See Also

### Color Panels

- [NSColorPanel](nscolorpanel.md): A standard user interface for selecting color in an app.
- [NSColorPickingCustom](nscolorpickingcustom.md): A set of methods that provides a way to add color pickers—custom user interfaces for color selection—to an app’s color panel.
- [NSColorPicker](nscolorpicker.md): An abstract superclass that implements the default color picking protocol.
