> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolorpickerviewcontroller](https://developer.apple.com/documentation/uikit/uicolorpickerviewcontroller)

# UIColorPickerViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A view controller that manages the interface for selecting a color.

## Declaration

```swift
@MainActor class UIColorPickerViewController
```

<a id="overview"></a>

## Overview

[UIColorPickerViewController](uicolorpickerviewcontroller.md) provides a standard interface to select colors. Use this class instead of [UIColorWell](uicolorwell.md) if you need more fine-grained control over the presentation.

![Screenshot of a color picker in a popover presentation style, showing a spectrum of color options. The title of the color picker is Colors.](https://developer.apple.com/images/com.apple.uikit/media-4195196@2x.png)

You typically present a [UIColorPickerViewController](uicolorpickerviewcontroller.md) as a popover:

```swift
// This example code appears in a subclass of UIViewController that conforms to
// UIColorPickerViewControllerDelegate.
func presentColorPicker() {
    let colorPicker = UIColorPickerViewController()
    colorPicker.title = "Background Color"
    colorPicker.supportsAlpha = false
    colorPicker.delegate = self
    colorPicker.modalPresentationStyle = .popover
    colorPicker.popoverPresentationController?.sourceItem = self.navigationItem.rightBarButtonItem
    self.present(colorPicker, animated: true)
}
```

You can also react to the color-selection change or the dismissal of the color picker by implementing the [UIColorPickerViewControllerDelegate](uicolorpickerviewcontrollerdelegate.md) functions.

## Topics

### Creating a color picker view controller

- [init()](uicolorpickerviewcontroller/init%28%29.md): Creates a color picker view controller.

### Configuring the color picker view controller

- [delegate](uicolorpickerviewcontroller/delegate.md): The delegate that receives updates about the color selection.
- [UIColorPickerViewControllerDelegate](uicolorpickerviewcontrollerdelegate.md): The delegate protocol to inform about changes in color selection.
- [maximumLinearExposure](uicolorpickerviewcontroller/maximumlinearexposure.md): The maximum exposure to apply to a color when returned by the color picker.
- [selectedColor](uicolorpickerviewcontroller/selectedcolor.md): The color selected by the user.
- [supportsAlpha](uicolorpickerviewcontroller/supportsalpha.md): A Boolean value that enables alpha value control.
- [supportsEyedropper](uicolorpickerviewcontroller/supportseyedropper.md): If set to `NO` the eyedropper functionality is not supported for this color picker.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentContainer](uicontentcontainer.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIStateRestoring](uistaterestoring.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Color picker

- [UIColorPickerViewControllerDelegate](uicolorpickerviewcontrollerdelegate.md): The delegate protocol to inform about changes in color selection.

# UIColorPickerViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A view controller that manages the interface for selecting a color.

## Declaration

```objectivec
@interface UIColorPickerViewController : UIViewController
```

<a id="overview"></a>

## Overview

[UIColorPickerViewController](uicolorpickerviewcontroller.md) provides a standard interface to select colors. Use this class instead of [UIColorWell](uicolorwell.md) if you need more fine-grained control over the presentation.

![Screenshot of a color picker in a popover presentation style, showing a spectrum of color options. The title of the color picker is Colors.](https://developer.apple.com/images/com.apple.uikit/media-4195196@2x.png)

You typically present a [UIColorPickerViewController](uicolorpickerviewcontroller.md) as a popover:

```swift
// This example code appears in a subclass of UIViewController that conforms to
// UIColorPickerViewControllerDelegate.
func presentColorPicker() {
    let colorPicker = UIColorPickerViewController()
    colorPicker.title = "Background Color"
    colorPicker.supportsAlpha = false
    colorPicker.delegate = self
    colorPicker.modalPresentationStyle = .popover
    colorPicker.popoverPresentationController?.sourceItem = self.navigationItem.rightBarButtonItem
    self.present(colorPicker, animated: true)
}
```

You can also react to the color-selection change or the dismissal of the color picker by implementing the [UIColorPickerViewControllerDelegate](uicolorpickerviewcontrollerdelegate.md) functions.

## Topics

### Creating a color picker view controller

- [init](uicolorpickerviewcontroller/init%28%29.md): Creates a color picker view controller.

### Configuring the color picker view controller

- [delegate](uicolorpickerviewcontroller/delegate.md): The delegate that receives updates about the color selection.
- [UIColorPickerViewControllerDelegate](uicolorpickerviewcontrollerdelegate.md): The delegate protocol to inform about changes in color selection.
- [maximumLinearExposure](uicolorpickerviewcontroller/maximumlinearexposure.md): The maximum exposure to apply to a color when returned by the color picker.
- [selectedColor](uicolorpickerviewcontroller/selectedcolor.md): The color selected by the user.
- [supportsAlpha](uicolorpickerviewcontroller/supportsalpha.md): A Boolean value that enables alpha value control.
- [supportsEyedropper](uicolorpickerviewcontroller/supportseyedropper.md): If set to `NO` the eyedropper functionality is not supported for this color picker.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

## See Also

### Color picker

- [UIColorPickerViewControllerDelegate](uicolorpickerviewcontrollerdelegate.md): The delegate protocol to inform about changes in color selection.
