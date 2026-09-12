> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/restoresfocusaftertransition](https://developer.apple.com/documentation/uikit/uiviewcontroller/restoresfocusaftertransition)

# restoresFocusAfterTransition (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.

## Declaration

```swift
var restoresFocusAfterTransition: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the item that was last focused automatically becomes focused when its view controller becomes visible and focusable. For example, if an item in the view controller is focused and a second view controller is presented, the original item becomes focused again when the second view controller is dismissed. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewController(forAction:sender:)](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.

# restoresFocusAfterTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.

## Declaration

```objectivec
@property (nonatomic) BOOL restoresFocusAfterTransition;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the item that was last focused automatically becomes focused when its view controller becomes visible and focusable. For example, if an item in the view controller is focused and a second view controller is presented, the original item becomes focused again when the second view controller is dismissed. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewControllerForAction:sender:](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [sheetPresentationController](sheetpresentationcontroller.md): The sheet presentation controller for the view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.
