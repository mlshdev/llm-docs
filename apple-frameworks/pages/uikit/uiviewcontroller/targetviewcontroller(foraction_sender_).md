> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/targetviewcontroller(foraction:sender:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/targetviewcontroller(foraction:sender:))

# targetViewController(forAction:sender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the view controller that responds to the action.

## Declaration

```swift
func targetViewController(forAction action: Selector, sender: Any?) -> UIViewController?
```

## Parameters

- `action`: The requested action.
- `sender`: The object sending the request.

<a id="return-value"></a>

## Return Value

The view controller that handles the specified action or `nil` if no view controller handles the action.

<a id="Discussion"></a>

## Discussion

This method returns the current view controller if that view controller overrides the method indicated by the `action` parameter. If the current view controller does not override that method, UIKit walks up the view hierarchy and returns the first view controller that does override it. If no view controller handles the action, this method returns `nil`.

A view controller can selectively respond to an action by returning an appropriate value from its [canPerformAction(\_:withSender:)](../uiresponder/canperformaction%28__withsender_%29.md) method.

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.

# targetViewControllerForAction:sender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the view controller that responds to the action.

## Declaration

```objectivec
- (UIViewController *) targetViewControllerForAction:(SEL) action sender:(id) sender;
```

## Parameters

- `action`: The requested action.
- `sender`: The object sending the request.

<a id="return-value"></a>

## Return Value

The view controller that handles the specified action or `nil` if no view controller handles the action.

<a id="Discussion"></a>

## Discussion

This method returns the current view controller if that view controller overrides the method indicated by the `action` parameter. If the current view controller does not override that method, UIKit walks up the view hierarchy and returns the first view controller that does override it. If no view controller handles the action, this method returns `nil`.

A view controller can selectively respond to an action by returning an appropriate value from its [canPerformAction:withSender:](../uiresponder/canperformaction%28__withsender_%29.md) method.

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.
