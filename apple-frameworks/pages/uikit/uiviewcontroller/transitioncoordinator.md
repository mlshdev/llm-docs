> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/transitioncoordinator](https://developer.apple.com/documentation/uikit/uiviewcontroller/transitioncoordinator)

# transitionCoordinator (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the active transition coordinator object.

## Declaration

```swift
var transitionCoordinator: (any UIViewControllerTransitionCoordinator)? { get }
```

<a id="return-value"></a>

## Return Value

The transition coordinator object associated with a currently active transition or `nil` if no transition is in progress.

<a id="Discussion"></a>

## Discussion

When a presentation or dismissal is in progress, this method returns the transition coordinator object associated with that transition. If there is no in-progress transition associated with the current view controller, UIKit checks the view controller’s ancestors for a transition coordinator object and returns that object if it exists. You can use this object to create additional animations and synchronize them with the transition animations.

Container view controllers can override this method but in most cases should not need to. If you do override this method, first call `super` to see if there is an appropriate transition coordinator to return, and, if there is, return it.

For more information about the role of transition coordinators, see [UIViewControllerTransitionCoordinator](../uiviewcontrollertransitioncoordinator.md).

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [targetViewController(forAction:sender:)](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.

# transitionCoordinator (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the active transition coordinator object.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<UIViewControllerTransitionCoordinator> transitionCoordinator;
```

<a id="return-value"></a>

## Return Value

The transition coordinator object associated with a currently active transition or `nil` if no transition is in progress.

<a id="Discussion"></a>

## Discussion

When a presentation or dismissal is in progress, this method returns the transition coordinator object associated with that transition. If there is no in-progress transition associated with the current view controller, UIKit checks the view controller’s ancestors for a transition coordinator object and returns that object if it exists. You can use this object to create additional animations and synchronize them with the transition animations.

Container view controllers can override this method but in most cases should not need to. If you do override this method, first call `super` to see if there is an appropriate transition coordinator to return, and, if there is, return it.

For more information about the role of transition coordinators, see [UIViewControllerTransitionCoordinator](../uiviewcontrollertransitioncoordinator.md).

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [targetViewControllerForAction:sender:](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.
