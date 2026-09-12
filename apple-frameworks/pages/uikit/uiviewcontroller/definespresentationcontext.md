> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/definespresentationcontext](https://developer.apple.com/documentation/uikit/uiviewcontroller/definespresentationcontext)

# definesPresentationContext (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.

## Declaration

```swift
var definesPresentationContext: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When using the [UIModalPresentationStyle.currentContext](../uimodalpresentationstyle/currentcontext.md) or [UIModalPresentationStyle.overCurrentContext](../uimodalpresentationstyle/overcurrentcontext.md) style to present a view controller, this property controls which existing view controller in your view controller hierarchy is actually covered by the new content. When a context-based presentation occurs, UIKit starts at the presenting view controller and walks up the view controller hierarchy. If it finds a view controller whose value for this property is [true](https://developer.apple.com/documentation/swift/true), it asks that view controller to present the new view controller. If no view controller defines the presentation context, UIKit asks the window’s root view controller to handle the presentation.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false). Some system-provided view controllers, such as [UINavigationController](../uinavigationcontroller.md), change the default value to [true](https://developer.apple.com/documentation/swift/true).

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
- [providesPresentationContextTransitionStyle](providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [showDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.

# definesPresentationContext (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL definesPresentationContext;
```

<a id="Discussion"></a>

## Discussion

When using the [UIModalPresentationCurrentContext](../uimodalpresentationstyle/currentcontext.md) or [UIModalPresentationOverCurrentContext](../uimodalpresentationstyle/overcurrentcontext.md) style to present a view controller, this property controls which existing view controller in your view controller hierarchy is actually covered by the new content. When a context-based presentation occurs, UIKit starts at the presenting view controller and walks up the view controller hierarchy. If it finds a view controller whose value for this property is [true](https://developer.apple.com/documentation/swift/true), it asks that view controller to present the new view controller. If no view controller defines the presentation context, UIKit asks the window’s root view controller to handle the presentation.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false). Some system-provided view controllers, such as [UINavigationController](../uinavigationcontroller.md), change the default value to [true](https://developer.apple.com/documentation/swift/true).

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
- [providesPresentationContextTransitionStyle](providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [UIViewControllerShowDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.
