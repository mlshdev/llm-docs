> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/disablesautomatickeyboarddismissal](https://developer.apple.com/documentation/uikit/uiviewcontroller/disablesautomatickeyboarddismissal)

# disablesAutomaticKeyboardDismissal (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.

## Declaration

```swift
var disablesAutomaticKeyboardDismissal: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to prevent the dismissal of the input view or [false](https://developer.apple.com/documentation/swift/false) if the input view may be dismissed.

<a id="Discussion"></a>

## Discussion

Override this method in a subclass to allow or disallow the dismissal of the current input view (usually the system keyboard) when changing from a control that wants the input view to one that does not. Under normal circumstances, when the user taps a control that requires an input view, the system automatically displays that view. Tapping in a control that does not want an input view subsequently causes the current input view to be dismissed but may not in all cases. You can override this method in those outstanding cases to allow the input view to be dismissed or use this method to prevent the view from being dismissed in other cases.

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true) when the modal presentation style of the view controller is set to [UIModalPresentationStyle.formSheet](../uimodalpresentationstyle/formsheet.md) and returns [false](https://developer.apple.com/documentation/swift/false) for other presentation styles. Thus, the system normally does not allow the keyboard to be dismissed for modal forms.

## See Also

### Presenting a view controller

- [show(\_:sender:)](show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController(\_:sender:)](showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [UIViewController.ShowDetailTargetDidChangeMessage](showdetailtargetdidchangemessage.md)
- [present(\_:animated:completion:)](present%28__animated_completion_%29.md): Presents a view controller modally.
- [dismiss(animated:completion:)](dismiss%28animated_completion_%29.md): Dismisses the view controller that was presented modally by the view controller.
- [modalPresentationStyle](modalpresentationstyle.md): The presentation style for modal view controllers.
- [UIModalPresentationStyle](../uimodalpresentationstyle.md): Modal presentation styles available when presenting view controllers.
- [modalTransitionStyle](modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [UIModalTransitionStyle](../uimodaltransitionstyle.md): Transition styles available when presenting view controllers.
- [isModalInPresentation](ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [showDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.

# disablesAutomaticKeyboardDismissal (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL disablesAutomaticKeyboardDismissal;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to prevent the dismissal of the input view or [false](https://developer.apple.com/documentation/swift/false) if the input view may be dismissed.

<a id="Discussion"></a>

## Discussion

Override this method in a subclass to allow or disallow the dismissal of the current input view (usually the system keyboard) when changing from a control that wants the input view to one that does not. Under normal circumstances, when the user taps a control that requires an input view, the system automatically displays that view. Tapping in a control that does not want an input view subsequently causes the current input view to be dismissed but may not in all cases. You can override this method in those outstanding cases to allow the input view to be dismissed or use this method to prevent the view from being dismissed in other cases.

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true) when the modal presentation style of the view controller is set to [UIModalPresentationFormSheet](../uimodalpresentationstyle/formsheet.md) and returns [false](https://developer.apple.com/documentation/swift/false) for other presentation styles. Thus, the system normally does not allow the keyboard to be dismissed for modal forms.

## See Also

### Presenting a view controller

- [showViewController:sender:](show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController:sender:](showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [presentViewController:animated:completion:](present%28__animated_completion_%29.md): Presents a view controller modally.
- [dismissViewControllerAnimated:completion:](dismiss%28animated_completion_%29.md): Dismisses the view controller that was presented modally by the view controller.
- [modalPresentationStyle](modalpresentationstyle.md): The presentation style for modal view controllers.
- [UIModalPresentationStyle](../uimodalpresentationstyle.md): Modal presentation styles available when presenting view controllers.
- [modalTransitionStyle](modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [UIModalTransitionStyle](../uimodaltransitionstyle.md): Transition styles available when presenting view controllers.
- [modalInPresentation](ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [UIViewControllerShowDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.
