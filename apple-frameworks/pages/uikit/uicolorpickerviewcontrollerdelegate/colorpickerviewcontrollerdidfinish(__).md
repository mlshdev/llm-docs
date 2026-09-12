> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolorpickerviewcontrollerdelegate/colorpickerviewcontrollerdidfinish(_:)](https://developer.apple.com/documentation/uikit/uicolorpickerviewcontrollerdelegate/colorpickerviewcontrollerdidfinish(_:))

# colorPickerViewControllerDidFinish(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Informs the delegate that the user dismissed the color picker.

## Declaration

```swift
optional func colorPickerViewControllerDidFinish(_ viewController: UIColorPickerViewController)
```

## Parameters

- `viewController`: The view controller that starts dismissing.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user dismisses the color picker.

You can implement this method to show additional animations alongside the dismissal animation. For interactive dismissals, use the delegate of the presentation controller that manages the color picker instead.

## See Also

### Handling color picker activity

- [colorPickerViewController(\_:didSelect:continuously:)](colorpickerviewcontroller%28__didselect_continuously_%29.md): Informs the delegate when a user selects a color, indicating whether the update is part of a continuous user interaction.

# colorPickerViewControllerDidFinish: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Informs the delegate that the user dismissed the color picker.

## Declaration

```objectivec
- (void) colorPickerViewControllerDidFinish:(UIColorPickerViewController *) viewController;
```

## Parameters

- `viewController`: The view controller that starts dismissing.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user dismisses the color picker.

You can implement this method to show additional animations alongside the dismissal animation. For interactive dismissals, use the delegate of the presentation controller that manages the color picker instead.

## See Also

### Handling color picker activity

- [colorPickerViewController:didSelectColor:continuously:](colorpickerviewcontroller%28__didselect_continuously_%29.md): Informs the delegate when a user selects a color, indicating whether the update is part of a continuous user interaction.
