> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/showdetailtargetdidchangenotification](https://developer.apple.com/documentation/uikit/uiviewcontroller/showdetailtargetdidchangenotification)

# showDetailTargetDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Posted when a split view controller is expanded or collapsed.

## Declaration

```swift
nonisolated class let showDetailTargetDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

When a view controller is using [show(\_:sender:)](show%28__sender_%29.md) or [showDetailViewController(\_:sender:)](showdetailviewcontroller%28__sender_%29.md), it may need to know when a split view controller higher in the view hierarchy has changed. This notification is sent when a split view controller expands or collapses. The object of this notification is the view controller that caused the change.

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
- [disablesAutomaticKeyboardDismissal](disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.

# UIViewControllerShowDetailTargetDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Posted when a split view controller is expanded or collapsed.

## Declaration

```objectivec
extern NSNotificationName const UIViewControllerShowDetailTargetDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

When a view controller is using [showViewController:sender:](show%28__sender_%29.md) or [showDetailViewController:sender:](showdetailviewcontroller%28__sender_%29.md), it may need to know when a split view controller higher in the view hierarchy has changed. This notification is sent when a split view controller expands or collapses. The object of this notification is the view controller that caused the change.

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
- [disablesAutomaticKeyboardDismissal](disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
