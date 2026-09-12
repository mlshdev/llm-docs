> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingviewcontrollerdelegate/textformattingviewcontroller:shouldpresentcolorpicker:](https://developer.apple.com/documentation/uikit/uitextformattingviewcontrollerdelegate/textformattingviewcontroller:shouldpresentcolorpicker:)

# textFormattingViewController:shouldPresentColorPicker:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

If implemented, text formatting will call this method before presenting color picker controller. Use this method to make any presentation modifications or to prevent presentation altogether.

## Declaration

```objectivec
- (BOOL) textFormattingViewController:(UITextFormattingViewController *) viewController shouldPresentColorPicker:(UIColorPickerViewController *) colorPicker;
```

## Parameters

- `viewController`: Text formatting controller that is attempting to present font picker controller
- `colorPicker`: Color picker controller that will be presented.

<a id="return-value"></a>

## Return Value

Flag indicating if text formatting controller should present font picker.

<a id="discussion"></a>

## Discussion

You may decide to prevent presentation of color picker via text formatting controller. In that case, you may present provided color picker controller yourself, but you will have to handle any actions in that controller separately.
