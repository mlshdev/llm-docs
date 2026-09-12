> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/present(_:animated:completion:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/present(_:animated:completion:))

# present(\_:animated:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Presents a view controller modally.

## Declaration

```swift
func present(_ viewControllerToPresent: UIViewController, animated flag: Bool, completion: (() -> Void)? = nil)
```

## Parameters

- `viewControllerToPresent`: The view controller to display over the current view controller’s content.
- `flag`: Pass [true](https://developer.apple.com/documentation/swift/true) to animate the presentation; otherwise, pass [false](https://developer.apple.com/documentation/swift/false).
- `completion`: The block to execute after the presentation finishes. This block has no return value and takes no parameters. You may specify `nil` for this parameter.

## Mentioned In

- [Displaying transient content in a popover](../displaying-transient-content-in-a-popover.md)
- [Getting the user’s attention with alerts and action sheets](../getting-the-user-s-attention-with-alerts-and-action-sheets.md)
- [Presenting selected documents](../presenting-selected-documents.md)
- [Providing access to directories](../providing-access-to-directories.md)

<a id="Discussion"></a>

## Discussion

In a horizontally regular environment, the view controller is presented in the style specified by the [modalPresentationStyle](modalpresentationstyle.md) property. In a horizontally compact environment, the view controller is presented full screen by default. If you associate an adaptive delegate with the presentation controller associated with the object in `viewControllerToPresent`, you can modify the presentation style dynamically.

The object on which you call this method may not always be the one that handles the presentation. Each presentation style has different rules governing its behavior. For example, a full-screen presentation must be made by a view controller that itself covers the entire screen. If the current view controller is unable to fulfill a request, it forwards the request up the view controller hierarchy to its nearest parent, which can then handle or forward the request.

Before displaying the view controller, this method resizes the presented view controller’s view based on the presentation style. For most presentation styles, the resulting view is then animated onscreen using the transition style in the [modalTransitionStyle](modaltransitionstyle.md) property of the presented view controller. For custom presentations, the view is animated onscreen using the presented view controller’s transitioning delegate. For current context presentations, the view may be animated onscreen using the current view controller’s transition style.

The completion handler is called after the [viewDidAppear(\_:)](viewdidappear%28__%29.md) method is called on the presented view controller.

## See Also

### Related Documentation

- [presentedViewController](presentedviewcontroller.md): The view controller that is presented by this view controller, or one of its ancestors in the view controller hierarchy.
- [presentingViewController](presentingviewcontroller.md): The view controller that presented this view controller.

### Presenting a view controller

- [show(\_:sender:)](show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController(\_:sender:)](showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [UIViewController.ShowDetailTargetDidChangeMessage](showdetailtargetdidchangemessage.md)
- [dismiss(animated:completion:)](dismiss%28animated_completion_%29.md): Dismisses the view controller that was presented modally by the view controller.
- [modalPresentationStyle](modalpresentationstyle.md): The presentation style for modal view controllers.
- [UIModalPresentationStyle](../uimodalpresentationstyle.md): Modal presentation styles available when presenting view controllers.
- [modalTransitionStyle](modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [UIModalTransitionStyle](../uimodaltransitionstyle.md): Transition styles available when presenting view controllers.
- [isModalInPresentation](ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [showDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.

# presentViewController:animated:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Presents a view controller modally.

## Declaration

```objectivec
- (void) presentViewController:(UIViewController *) viewControllerToPresent animated:(BOOL) flag completion:(void (^)()) completion;
```

## Parameters

- `viewControllerToPresent`: The view controller to display over the current view controller’s content.
- `flag`: Pass [true](https://developer.apple.com/documentation/swift/true) to animate the presentation; otherwise, pass [false](https://developer.apple.com/documentation/swift/false).
- `completion`: The block to execute after the presentation finishes. This block has no return value and takes no parameters. You may specify `nil` for this parameter.

## Mentioned In

- [Displaying transient content in a popover](../displaying-transient-content-in-a-popover.md)
- [Getting the user’s attention with alerts and action sheets](../getting-the-user-s-attention-with-alerts-and-action-sheets.md)
- [Presenting selected documents](../presenting-selected-documents.md)
- [Providing access to directories](../providing-access-to-directories.md)

<a id="Discussion"></a>

## Discussion

In a horizontally regular environment, the view controller is presented in the style specified by the [modalPresentationStyle](modalpresentationstyle.md) property. In a horizontally compact environment, the view controller is presented full screen by default. If you associate an adaptive delegate with the presentation controller associated with the object in `viewControllerToPresent`, you can modify the presentation style dynamically.

The object on which you call this method may not always be the one that handles the presentation. Each presentation style has different rules governing its behavior. For example, a full-screen presentation must be made by a view controller that itself covers the entire screen. If the current view controller is unable to fulfill a request, it forwards the request up the view controller hierarchy to its nearest parent, which can then handle or forward the request.

Before displaying the view controller, this method resizes the presented view controller’s view based on the presentation style. For most presentation styles, the resulting view is then animated onscreen using the transition style in the [modalTransitionStyle](modaltransitionstyle.md) property of the presented view controller. For custom presentations, the view is animated onscreen using the presented view controller’s transitioning delegate. For current context presentations, the view may be animated onscreen using the current view controller’s transition style.

The completion handler is called after the [viewDidAppear:](viewdidappear%28__%29.md) method is called on the presented view controller.

## See Also

### Related Documentation

- [presentedViewController](presentedviewcontroller.md): The view controller that is presented by this view controller, or one of its ancestors in the view controller hierarchy.
- [presentingViewController](presentingviewcontroller.md): The view controller that presented this view controller.

### Presenting a view controller

- [showViewController:sender:](show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController:sender:](showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [dismissViewControllerAnimated:completion:](dismiss%28animated_completion_%29.md): Dismisses the view controller that was presented modally by the view controller.
- [modalPresentationStyle](modalpresentationstyle.md): The presentation style for modal view controllers.
- [UIModalPresentationStyle](../uimodalpresentationstyle.md): Modal presentation styles available when presenting view controllers.
- [modalTransitionStyle](modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [UIModalTransitionStyle](../uimodaltransitionstyle.md): Transition styles available when presenting view controllers.
- [modalInPresentation](ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [UIViewControllerShowDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.
