> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/presentationcontroller](https://developer.apple.com/documentation/uikit/uiviewcontroller/presentationcontroller)

# presentationController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The presentation controller that’s managing the current view controller.

## Declaration

```swift
var presentationController: UIPresentationController? { get }
```

<a id="Discussion"></a>

## Discussion

If the view controller is managed by a presentation controller, this property contains that object. This property is `nil` if the view controller isn’t managed by a presentation controller.

If you’ve not yet presented the current view controller, accessing this property creates a presentation controller based on the current value in the [modalPresentationStyle](modalpresentationstyle.md) property. Always set the value of that property before accessing any presentation controllers.

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewController(forAction:sender:)](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.

# presentationController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The presentation controller that’s managing the current view controller.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIPresentationController * presentationController;
```

<a id="Discussion"></a>

## Discussion

If the view controller is managed by a presentation controller, this property contains that object. This property is `nil` if the view controller isn’t managed by a presentation controller.

If you’ve not yet presented the current view controller, accessing this property creates a presentation controller based on the current value in the [modalPresentationStyle](modalpresentationstyle.md) property. Always set the value of that property before accessing any presentation controllers.

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewControllerForAction:sender:](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.
