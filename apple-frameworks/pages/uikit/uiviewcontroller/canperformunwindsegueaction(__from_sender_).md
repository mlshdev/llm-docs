> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/canperformunwindsegueaction(_:from:sender:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/canperformunwindsegueaction(_:from:sender:))

# canPerformUnwindSegueAction(\_:from:sender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ (deprecated in 1.0)

Called on a view controller to determine whether it responds to an unwind action.

## Declaration

```swift
func canPerformUnwindSegueAction(_ action: Selector, from fromViewController: UIViewController, sender: Any?) -> Bool
```

## Parameters

- `action`: The unwind action to invoke on your view controller.
- `fromViewController`: The view controller that initiated the unwind action.
- `sender`: The object that triggered the action.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view controller handles the unwind action, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When an unwind segue is triggered, UIKit uses this method and the [allowedChildrenForUnwinding(from:)](allowedchildrenforunwinding%28from_%29.md) method to locate a suitable view controller to handle the unwind segue.

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true) when the current view controller implements the `action` method and is not the same view controller as the one in the `fromViewController` parameter. You can override this method as needed to change the default behavior. For example, you might return [false](https://developer.apple.com/documentation/swift/false) if the current view controller does not make a suitable return target when unwinding from the specified view controller.

## See Also

### Performing segues

- [shouldPerformSegue(withIdentifier:sender:)](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [prepare(for:sender:)](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [performSegue(withIdentifier:sender:)](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [allowedChildrenForUnwinding(from:)](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [childContaining(\_:)](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [unwind(for:towards:)](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.

# canPerformUnwindSegueAction:fromViewController:sender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ (deprecated in 1.0)

Called on a view controller to determine whether it responds to an unwind action.

## Declaration

```objectivec
- (BOOL) canPerformUnwindSegueAction:(SEL) action fromViewController:(UIViewController *) fromViewController sender:(id) sender;
```

## Parameters

- `action`: The unwind action to invoke on your view controller.
- `fromViewController`: The view controller that initiated the unwind action.
- `sender`: The object that triggered the action.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view controller handles the unwind action, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When an unwind segue is triggered, UIKit uses this method and the [allowedChildViewControllersForUnwindingFromSource:](allowedchildrenforunwinding%28from_%29.md) method to locate a suitable view controller to handle the unwind segue.

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true) when the current view controller implements the `action` method and is not the same view controller as the one in the `fromViewController` parameter. You can override this method as needed to change the default behavior. For example, you might return [false](https://developer.apple.com/documentation/swift/false) if the current view controller does not make a suitable return target when unwinding from the specified view controller.

## See Also

### Performing segues

- [shouldPerformSegueWithIdentifier:sender:](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [prepareForSegue:sender:](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [performSegueWithIdentifier:sender:](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [allowedChildViewControllersForUnwindingFromSource:](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [childViewControllerContainingSegueSource:](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [unwindForSegue:towardsViewController:](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.
