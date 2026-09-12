> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/activepresentationcontroller](https://developer.apple.com/documentation/uikit/uiviewcontroller/activepresentationcontroller)

# activePresentationController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The presentation controller that’s managing the view controller.

## Declaration

```swift
var activePresentationController: UIPresentationController? { get }
```

<a id="Discussion"></a>

## Discussion

If the original presentation controller hasn’t adapted, the value of this property is [presentationController](presentationcontroller.md). If the original presentation controller has adapted to a different presentation controller, the value of this property is the adaptive presentation controller.

If the view controller hasn’t presented yet, this property returns `nil`.

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewController(forAction:sender:)](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.

# activePresentationController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The presentation controller that’s managing the view controller.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIPresentationController * activePresentationController;
```

<a id="Discussion"></a>

## Discussion

If the original presentation controller hasn’t adapted, the value of this property is [presentationController](presentationcontroller.md). If the original presentation controller has adapted to a different presentation controller, the value of this property is the adaptive presentation controller.

If the view controller hasn’t presented yet, this property returns `nil`.

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewControllerForAction:sender:](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.
