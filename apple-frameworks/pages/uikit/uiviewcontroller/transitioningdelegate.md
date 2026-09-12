> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/transitioningdelegate](https://developer.apple.com/documentation/uikit/uiviewcontroller/transitioningdelegate)

# transitioningDelegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.

## Declaration

```swift
weak var transitioningDelegate: (any UIViewControllerTransitioningDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

When the view controller’s [modalPresentationStyle](modalpresentationstyle.md) property is [UIModalPresentationStyle.custom](../uimodalpresentationstyle/custom.md), UIKit uses the object in this property to facilitate transitions and presentations for the view controller. The transitioning delegate object is a custom object that you provide and that conforms to the [UIViewControllerTransitioningDelegate](../uiviewcontrollertransitioningdelegate.md) protocol. Its job is to vend the animator objects used to animate this view controller’s view onscreen and an optional presentation controller to provide any additional chrome and animations.

## See Also

### Adding a custom transition or presentation

- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewController(forAction:sender:)](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.

# transitioningDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIViewControllerTransitioningDelegate> transitioningDelegate;
```

<a id="Discussion"></a>

## Discussion

When the view controller’s [modalPresentationStyle](modalpresentationstyle.md) property is [UIModalPresentationCustom](../uimodalpresentationstyle/custom.md), UIKit uses the object in this property to facilitate transitions and presentations for the view controller. The transitioning delegate object is a custom object that you provide and that conforms to the [UIViewControllerTransitioningDelegate](../uiviewcontrollertransitioningdelegate.md) protocol. Its job is to vend the animator objects used to animate this view controller’s view onscreen and an optional presentation controller to provide any additional chrome and animations.

## See Also

### Adding a custom transition or presentation

- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewControllerForAction:sender:](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.
