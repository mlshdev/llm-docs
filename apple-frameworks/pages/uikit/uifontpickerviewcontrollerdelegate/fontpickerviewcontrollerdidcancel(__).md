> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontrollerdelegate/fontpickerviewcontrollerdidcancel(_:)](https://developer.apple.com/documentation/uikit/uifontpickerviewcontrollerdelegate/fontpickerviewcontrollerdidcancel(_:))

# fontPickerViewControllerDidCancel(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user dismissed the font picker without selecting a font.

## Declaration

```swift
optional func fontPickerViewControllerDidCancel(_ viewController: UIFontPickerViewController)
```

## Parameters

- `viewController`: The controller for the font picker that was canceled.

<a id="Discussion"></a>

## Discussion

Implement this optional method if your app needs to add custom logic when the user cancels the font picker instead of picking a font.

## See Also

### Receiving font picker interactions

- [fontPickerViewControllerDidPickFont(\_:)](fontpickerviewcontrollerdidpickfont%28__%29.md): Tells the delegate that the user has selected a font.

# fontPickerViewControllerDidCancel: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user dismissed the font picker without selecting a font.

## Declaration

```objectivec
- (void) fontPickerViewControllerDidCancel:(UIFontPickerViewController *) viewController;
```

## Parameters

- `viewController`: The controller for the font picker that was canceled.

<a id="Discussion"></a>

## Discussion

Implement this optional method if your app needs to add custom logic when the user cancels the font picker instead of picking a font.

## See Also

### Receiving font picker interactions

- [fontPickerViewControllerDidPickFont:](fontpickerviewcontrollerdidpickfont%28__%29.md): Tells the delegate that the user has selected a font.
