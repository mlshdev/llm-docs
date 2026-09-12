> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolorpickerviewcontrollerdelegate/colorpickerviewcontroller(_:didselect:continuously:)](https://developer.apple.com/documentation/uikit/uicolorpickerviewcontrollerdelegate/colorpickerviewcontroller(_:didselect:continuously:))

# colorPickerViewController(\_:didSelect:continuously:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Informs the delegate when a user selects a color, indicating whether the update is part of a continuous user interaction.

## Declaration

```swift
optional func colorPickerViewController(_ viewController: UIColorPickerViewController, didSelect color: UIColor, continuously: Bool)
```

## Parameters

- `viewController`: The color picker.
- `color`: The new color.
- `continuously`: A Boolean value that indicates whether the update is part of a continuous user interaction.

<a id="Discussion"></a>

## Discussion

A continuous selection is always followed by a noncontinuous one when the user finishes the gesture. Apps that support undoing should update their UI for all color changes but only undo to noncontinuous color changes.

## See Also

### Handling color picker activity

- [colorPickerViewControllerDidFinish(\_:)](colorpickerviewcontrollerdidfinish%28__%29.md): Informs the delegate that the user dismissed the color picker.

# colorPickerViewController:didSelectColor:continuously: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Informs the delegate when a user selects a color, indicating whether the update is part of a continuous user interaction.

## Declaration

```objectivec
- (void) colorPickerViewController:(UIColorPickerViewController *) viewController didSelectColor:(UIColor *) color continuously:(BOOL) continuously;
```

## Parameters

- `viewController`: The color picker.
- `color`: The new color.
- `continuously`: A Boolean value that indicates whether the update is part of a continuous user interaction.

<a id="Discussion"></a>

## Discussion

A continuous selection is always followed by a noncontinuous one when the user finishes the gesture. Apps that support undoing should update their UI for all color changes but only undo to noncontinuous color changes.

## See Also

### Handling color picker activity

- [colorPickerViewControllerDidFinish:](colorpickerviewcontrollerdidfinish%28__%29.md): Informs the delegate that the user dismissed the color picker.
