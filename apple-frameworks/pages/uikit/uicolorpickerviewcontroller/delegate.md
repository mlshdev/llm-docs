> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolorpickerviewcontroller/delegate](https://developer.apple.com/documentation/uikit/uicolorpickerviewcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The delegate that receives updates about the color selection.

## Declaration

```swift
weak var delegate: (any UIColorPickerViewControllerDelegate)? { get set }
```

## See Also

### Configuring the color picker view controller

- [UIColorPickerViewControllerDelegate](../uicolorpickerviewcontrollerdelegate.md): The delegate protocol to inform about changes in color selection.
- [maximumLinearExposure](maximumlinearexposure.md): The maximum exposure to apply to a color when returned by the color picker.
- [selectedColor](selectedcolor.md): The color selected by the user.
- [supportsAlpha](supportsalpha.md): A Boolean value that enables alpha value control.
- [supportsEyedropper](supportseyedropper.md): If set to `NO` the eyedropper functionality is not supported for this color picker.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The delegate that receives updates about the color selection.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIColorPickerViewControllerDelegate> delegate;
```

## See Also

### Configuring the color picker view controller

- [UIColorPickerViewControllerDelegate](../uicolorpickerviewcontrollerdelegate.md): The delegate protocol to inform about changes in color selection.
- [maximumLinearExposure](maximumlinearexposure.md): The maximum exposure to apply to a color when returned by the color picker.
- [selectedColor](selectedcolor.md): The color selected by the user.
- [supportsAlpha](supportsalpha.md): A Boolean value that enables alpha value control.
- [supportsEyedropper](supportseyedropper.md): If set to `NO` the eyedropper functionality is not supported for this color picker.
