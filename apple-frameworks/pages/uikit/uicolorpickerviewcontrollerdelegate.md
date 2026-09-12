> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolorpickerviewcontrollerdelegate](https://developer.apple.com/documentation/uikit/uicolorpickerviewcontrollerdelegate)

# UIColorPickerViewControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The delegate protocol to inform about changes in color selection.

## Declaration

```swift
@MainActor protocol UIColorPickerViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

By implementing the [UIColorPickerViewControllerDelegate](uicolorpickerviewcontrollerdelegate.md) functions, your app can react to a color-selection change or the dismissal of the color picker.

## Topics

### Handling color picker activity

- [colorPickerViewControllerDidFinish(\_:)](uicolorpickerviewcontrollerdelegate/colorpickerviewcontrollerdidfinish%28__%29.md): Informs the delegate that the user dismissed the color picker.
- [colorPickerViewController(\_:didSelect:continuously:)](uicolorpickerviewcontrollerdelegate/colorpickerviewcontroller%28__didselect_continuously_%29.md): Informs the delegate when a user selects a color, indicating whether the update is part of a continuous user interaction.

### Deprecated

- [colorPickerViewControllerDidSelectColor(\_:)](uicolorpickerviewcontrollerdelegate/colorpickerviewcontrollerdidselectcolor%28__%29.md): Deprecated. Informs the delegate when the user selects a color.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Color picker

- [UIColorPickerViewController](uicolorpickerviewcontroller.md): A view controller that manages the interface for selecting a color.

# UIColorPickerViewControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The delegate protocol to inform about changes in color selection.

## Declaration

```objectivec
@protocol UIColorPickerViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

By implementing the [UIColorPickerViewControllerDelegate](uicolorpickerviewcontrollerdelegate.md) functions, your app can react to a color-selection change or the dismissal of the color picker.

## Topics

### Handling color picker activity

- [colorPickerViewControllerDidFinish:](uicolorpickerviewcontrollerdelegate/colorpickerviewcontrollerdidfinish%28__%29.md): Informs the delegate that the user dismissed the color picker.
- [colorPickerViewController:didSelectColor:continuously:](uicolorpickerviewcontrollerdelegate/colorpickerviewcontroller%28__didselect_continuously_%29.md): Informs the delegate when a user selects a color, indicating whether the update is part of a continuous user interaction.

### Deprecated

- [colorPickerViewControllerDidSelectColor:](uicolorpickerviewcontrollerdelegate/colorpickerviewcontrollerdidselectcolor%28__%29.md): Deprecated. Informs the delegate when the user selects a color.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Color picker

- [UIColorPickerViewController](uicolorpickerviewcontroller.md): A view controller that manages the interface for selecting a color.
