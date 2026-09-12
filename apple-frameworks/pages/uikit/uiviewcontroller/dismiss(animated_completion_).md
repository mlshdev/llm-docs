> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/dismiss(animated:completion:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/dismiss(animated:completion:))

# dismiss(animated:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dismisses the view controller that was presented modally by the view controller.

## Declaration

```swift
func dismiss(animated flag: Bool, completion: (() -> Void)? = nil)
```

## Parameters

- `flag`: Pass [true](https://developer.apple.com/documentation/swift/true) to animate the transition.
- `completion`: The block to execute after the view controller is dismissed. This block has no return value and takes no parameters. You may specify `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

The presenting view controller is responsible for dismissing the view controller it presented. If you call this method on the presented view controller itself, UIKit asks the presenting view controller to handle the dismissal.

If you present several view controllers in succession, thus building a stack of presented view controllers, calling this method on a view controller lower in the stack dismisses its immediate child view controller and all view controllers above that child on the stack. When this happens, only the top-most view is dismissed in an animated fashion; any intermediate view controllers are simply removed from the stack. The top-most view is dismissed using its modal transition style, which may differ from the styles used by other view controllers lower in the stack.

If you want to retain a reference to the view controller’s presented view controller, get the value in the [presentedViewController](presentedviewcontroller.md) property before calling this method.

The completion handler is called after the [viewDidDisappear(\_:)](viewdiddisappear%28__%29.md) method is called on the presented view controller.

## See Also

### Presenting a view controller

- [show(\_:sender:)](show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController(\_:sender:)](showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [UIViewController.ShowDetailTargetDidChangeMessage](showdetailtargetdidchangemessage.md)
- [present(\_:animated:completion:)](present%28__animated_completion_%29.md): Presents a view controller modally.
- [modalPresentationStyle](modalpresentationstyle.md): The presentation style for modal view controllers.
- [UIModalPresentationStyle](../uimodalpresentationstyle.md): Modal presentation styles available when presenting view controllers.
- [modalTransitionStyle](modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [UIModalTransitionStyle](../uimodaltransitionstyle.md): Transition styles available when presenting view controllers.
- [isModalInPresentation](ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [showDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.

# dismissViewControllerAnimated:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dismisses the view controller that was presented modally by the view controller.

## Declaration

```objectivec
- (void) dismissViewControllerAnimated:(BOOL) flag completion:(void (^)()) completion;
```

## Parameters

- `flag`: Pass [true](https://developer.apple.com/documentation/swift/true) to animate the transition.
- `completion`: The block to execute after the view controller is dismissed. This block has no return value and takes no parameters. You may specify `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

The presenting view controller is responsible for dismissing the view controller it presented. If you call this method on the presented view controller itself, UIKit asks the presenting view controller to handle the dismissal.

If you present several view controllers in succession, thus building a stack of presented view controllers, calling this method on a view controller lower in the stack dismisses its immediate child view controller and all view controllers above that child on the stack. When this happens, only the top-most view is dismissed in an animated fashion; any intermediate view controllers are simply removed from the stack. The top-most view is dismissed using its modal transition style, which may differ from the styles used by other view controllers lower in the stack.

If you want to retain a reference to the view controller’s presented view controller, get the value in the [presentedViewController](presentedviewcontroller.md) property before calling this method.

The completion handler is called after the [viewDidDisappear:](viewdiddisappear%28__%29.md) method is called on the presented view controller.

## See Also

### Presenting a view controller

- [showViewController:sender:](show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController:sender:](showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [presentViewController:animated:completion:](present%28__animated_completion_%29.md): Presents a view controller modally.
- [modalPresentationStyle](modalpresentationstyle.md): The presentation style for modal view controllers.
- [UIModalPresentationStyle](../uimodalpresentationstyle.md): Modal presentation styles available when presenting view controllers.
- [modalTransitionStyle](modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [UIModalTransitionStyle](../uimodaltransitionstyle.md): Transition styles available when presenting view controllers.
- [modalInPresentation](ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [UIViewControllerShowDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.
