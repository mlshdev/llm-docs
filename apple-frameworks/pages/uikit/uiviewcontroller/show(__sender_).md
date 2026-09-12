> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/show(_:sender:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/show(_:sender:))

# show(\_:sender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Presents a view controller in a primary context.

## Declaration

```swift
func show(_ vc: UIViewController, sender: Any?)
```

## Parameters

- `vc`: The view controller to display.
- `sender`: The object that initiated the request.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)
- [Customizing the behavior of segue-based presentations](../customizing-the-behavior-of-segue-based-presentations.md)

<a id="Discussion"></a>

## Discussion

You use this method to decouple the need to display a view controller from the process of actually presenting that view controller onscreen. Using this method, a view controller does not need to know whether it is embedded inside a navigation controller or split-view controller. It calls the same method for both. The [UISplitViewController](../uisplitviewcontroller.md) and [UINavigationController](../uinavigationcontroller.md) classes override this method and handle the presentation according to their design. For example, a navigation controller overrides this method and uses it to push `vc` onto its navigation stack.

The default implementation of this method calls the [targetViewController(forAction:sender:)](targetviewcontroller%28foraction_sender_%29.md) method to locate an object in the view controller hierarchy that overrides this method. It then calls the method on that target object, which displays the view controller in an appropriate way. If the [targetViewController(forAction:sender:)](targetviewcontroller%28foraction_sender_%29.md) method returns `nil`, this method uses the window’s root view controller to present `vc` modally.

You can override this method in custom view controllers to display `vc` yourself. Use this method to display `vc` in a primary context. For example, a container view controller might use this method to replace its primary child. Your implementation should adapt its behavior for both regular and compact environments.

## See Also

### Presenting a view controller

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
- [showDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.

# showViewController:sender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Presents a view controller in a primary context.

## Declaration

```objectivec
- (void) showViewController:(UIViewController *) vc sender:(id) sender;
```

## Parameters

- `vc`: The view controller to display.
- `sender`: The object that initiated the request.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)
- [Customizing the behavior of segue-based presentations](../customizing-the-behavior-of-segue-based-presentations.md)

<a id="Discussion"></a>

## Discussion

You use this method to decouple the need to display a view controller from the process of actually presenting that view controller onscreen. Using this method, a view controller does not need to know whether it is embedded inside a navigation controller or split-view controller. It calls the same method for both. The [UISplitViewController](../uisplitviewcontroller.md) and [UINavigationController](../uinavigationcontroller.md) classes override this method and handle the presentation according to their design. For example, a navigation controller overrides this method and uses it to push `vc` onto its navigation stack.

The default implementation of this method calls the [targetViewControllerForAction:sender:](targetviewcontroller%28foraction_sender_%29.md) method to locate an object in the view controller hierarchy that overrides this method. It then calls the method on that target object, which displays the view controller in an appropriate way. If the [targetViewControllerForAction:sender:](targetviewcontroller%28foraction_sender_%29.md) method returns `nil`, this method uses the window’s root view controller to present `vc` modally.

You can override this method in custom view controllers to display `vc` yourself. Use this method to display `vc` in a primary context. For example, a container view controller might use this method to replace its primary child. Your implementation should adapt its behavior for both regular and compact environments.

## See Also

### Presenting a view controller

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
- [UIViewControllerShowDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.
