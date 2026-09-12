> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingviewcontrollerdelegate/textformattingviewcontroller:shouldpresentfontpicker:](https://developer.apple.com/documentation/uikit/uitextformattingviewcontrollerdelegate/textformattingviewcontroller:shouldpresentfontpicker:)

# textFormattingViewController:shouldPresentFontPicker:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

If implemented, text formatting will call this method before presenting font picker controller. Use this method to make any presentation modifications or to prevent presentation altogether.

## Declaration

```objectivec
- (BOOL) textFormattingViewController:(UITextFormattingViewController *) viewController shouldPresentFontPicker:(UIFontPickerViewController *) fontPicker;
```

## Parameters

- `viewController`: Text formatting controller that is attempting to present font picker controller
- `fontPicker`: Font picker controller that will be presented.

<a id="return-value"></a>

## Return Value

Flag indicating if text formatting controller should present font picker.

<a id="discussion"></a>

## Discussion

If you decide to prevent presentation of font picker via text formatting controller, you may present provided font picker yourself. In this case, you will have to handle any font picker actions independently.
