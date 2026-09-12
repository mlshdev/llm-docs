> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/popoverpresentationcontroller](https://developer.apple.com/documentation/uikit/uiviewcontroller/popoverpresentationcontroller)

# popoverPresentationController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The nearest popover presentation controller that is managing the current view controller.

## Declaration

```swift
var popoverPresentationController: UIPopoverPresentationController? { get }
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](../getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="Discussion"></a>

## Discussion

If the view controller or one of its ancestors is managed by a popover presentation controller, this property contains that object. This property is `nil` if the view controller is not managed by a popover presentation controller.

If you created the view controller but have not yet presented it, accessing this property creates a popover presentation controller when the value in the [modalPresentationStyle](modalpresentationstyle.md) property is [UIModalPresentationStyle.popover](../uimodalpresentationstyle/popover.md). If the modal presentation style is a different value, this property is `nil`.

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewController(forAction:sender:)](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.

# popoverPresentationController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The nearest popover presentation controller that is managing the current view controller.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIPopoverPresentationController * popoverPresentationController;
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](../getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="Discussion"></a>

## Discussion

If the view controller or one of its ancestors is managed by a popover presentation controller, this property contains that object. This property is `nil` if the view controller is not managed by a popover presentation controller.

If you created the view controller but have not yet presented it, accessing this property creates a popover presentation controller when the value in the [modalPresentationStyle](modalpresentationstyle.md) property is [UIModalPresentationPopover](../uimodalpresentationstyle/popover.md). If the modal presentation style is a different value, this property is `nil`.

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewControllerForAction:sender:](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.
