> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/sheetpresentationcontroller](https://developer.apple.com/documentation/uikit/uiviewcontroller/sheetpresentationcontroller)

# sheetPresentationController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The sheet presentation controller for the view controller.

## Declaration

```swift
var sheetPresentationController: UISheetPresentationController? { get }
```

<a id="Discussion"></a>

## Discussion

If [modalPresentationStyle](modalpresentationstyle.md) is [UIModalPresentationStyle.pageSheet](../uimodalpresentationstyle/pagesheet.md) or [UIModalPresentationStyle.formSheet](../uimodalpresentationstyle/formsheet.md), this property contains a sheet presentation controller instance. Access this instance to customize or adjust the sheet before or after it presents.

If [modalPresentationStyle](modalpresentationstyle.md) has a value other than [UIModalPresentationStyle.pageSheet](../uimodalpresentationstyle/pagesheet.md) or [UIModalPresentationStyle.formSheet](../uimodalpresentationstyle/formsheet.md), the value of this property is `nil`.

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewController(forAction:sender:)](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.

# sheetPresentationController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The sheet presentation controller for the view controller.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UISheetPresentationController * sheetPresentationController;
```

<a id="Discussion"></a>

## Discussion

If [modalPresentationStyle](modalpresentationstyle.md) is [UIModalPresentationPageSheet](../uimodalpresentationstyle/pagesheet.md) or [UIModalPresentationFormSheet](../uimodalpresentationstyle/formsheet.md), this property contains a sheet presentation controller instance. Access this instance to customize or adjust the sheet before or after it presents.

If [modalPresentationStyle](modalpresentationstyle.md) has a value other than [UIModalPresentationPageSheet](../uimodalpresentationstyle/pagesheet.md) or [UIModalPresentationFormSheet](../uimodalpresentationstyle/formsheet.md), the value of this property is `nil`.

## See Also

### Adding a custom transition or presentation

- [transitioningDelegate](transitioningdelegate.md): The delegate object that provides transition animator, interactive controller, and custom presentation controller objects.
- [transitionCoordinator](transitioncoordinator.md): Returns the active transition coordinator object.
- [targetViewControllerForAction:sender:](targetviewcontroller%28foraction_sender_%29.md): Returns the view controller that responds to the action.
- [presentationController](presentationcontroller.md): The presentation controller that’s managing the current view controller.
- [popoverPresentationController](popoverpresentationcontroller.md): The nearest popover presentation controller that is managing the current view controller.
- [activePresentationController](activepresentationcontroller.md): The presentation controller that’s managing the view controller.
- [restoresFocusAfterTransition](restoresfocusaftertransition.md): A Boolean value that indicates whether an item that previously was focused should again become focused when the item’s view controller becomes visible and focusable.
- [Customizing and resizing sheets in UIKit](../customizing-and-resizing-sheets-in-uikit.md): Discover how to create a layered and customized sheet experience in UIKit.
