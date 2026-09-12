> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolorpickerviewcontrollerdelegate/colorpickerviewcontrollerdidselectcolor(_:)](https://developer.apple.com/documentation/uikit/uicolorpickerviewcontrollerdelegate/colorpickerviewcontrollerdidselectcolor(_:))

# colorPickerViewControllerDidSelectColor(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 15.0) · iPadOS 14.0+ (deprecated in 15.0) · Mac Catalyst 14.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Informs the delegate when the user selects a color.

> Use [colorPickerViewController(\_:didSelect:continuously:)](colorpickerviewcontroller%28__didselect_continuously_%29.md) instead.

## Declaration

```swift
optional func colorPickerViewControllerDidSelectColor(_ viewController: UIColorPickerViewController)
```

## Parameters

- `viewController`: The view controller that receives the color change.

# colorPickerViewControllerDidSelectColor: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 15.0) · iPadOS 14.0+ (deprecated in 15.0) · Mac Catalyst 14.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Informs the delegate when the user selects a color.

> Use [colorPickerViewController:didSelectColor:continuously:](colorpickerviewcontroller%28__didselect_continuously_%29.md) instead.

## Declaration

```objectivec
- (void) colorPickerViewControllerDidSelectColor:(UIColorPickerViewController *) viewController;
```

## Parameters

- `viewController`: The view controller that receives the color change.
