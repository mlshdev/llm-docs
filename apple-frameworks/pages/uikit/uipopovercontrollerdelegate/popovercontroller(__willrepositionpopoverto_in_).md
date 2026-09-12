> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontrollerdelegate/popovercontroller(_:willrepositionpopoverto:in:)](https://developer.apple.com/documentation/uikit/uipopovercontrollerdelegate/popovercontroller(_:willrepositionpopoverto:in:))

# popoverController(\_:willRepositionPopoverTo:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Tells the delegate that the popover controller needs to change the popover’s location in its view.

## Declaration

```swift
optional func popoverController(_ popoverController: UIPopoverController, willRepositionPopoverTo rect: UnsafeMutablePointer<CGRect>, in view: AutoreleasingUnsafeMutablePointer<UIView>)
```

## Parameters

- `popoverController`: The popover controller changing the position of its content.
- `rect`: On input, the proposed rectangle for the popover. This popover is in the coordinate space of the view in the `view` parameter. If you want to propose a different rectangle for the popover, put the new value in this parameter.
- `view`: On input, the proposed view for containing the popover. If you want to propose a different view for the popover, put the new view in this parameter.

<a id="Discussion"></a>

## Discussion

For popovers that were presented using the [present(from:in:permittedArrowDirections:animated:)](../uipopovercontroller/present%28from_in_permittedarrowdirections_animated_%29.md) method, the popover controller calls this method when the interface orientation changes. Your delegate can use this method to adjust the proposed position of the popover. The popover controller does not call this method if you presented the popover from a bar button item.

# popoverController:willRepositionPopoverToRect:inView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Tells the delegate that the popover controller needs to change the popover’s location in its view.

## Declaration

```objectivec
- (void) popoverController:(UIPopoverController *) popoverController willRepositionPopoverToRect:(CGRect *) rect inView:(UIView **) view;
```

## Parameters

- `popoverController`: The popover controller changing the position of its content.
- `rect`: On input, the proposed rectangle for the popover. This popover is in the coordinate space of the view in the `view` parameter. If you want to propose a different rectangle for the popover, put the new value in this parameter.
- `view`: On input, the proposed view for containing the popover. If you want to propose a different view for the popover, put the new view in this parameter.

<a id="Discussion"></a>

## Discussion

For popovers that were presented using the [presentPopoverFromRect:inView:permittedArrowDirections:animated:](../uipopovercontroller/present%28from_in_permittedarrowdirections_animated_%29.md) method, the popover controller calls this method when the interface orientation changes. Your delegate can use this method to adjust the proposed position of the popover. The popover controller does not call this method if you presented the popover from a bar button item.
