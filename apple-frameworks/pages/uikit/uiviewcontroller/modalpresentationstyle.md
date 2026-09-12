> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/modalpresentationstyle](https://developer.apple.com/documentation/uikit/uiviewcontroller/modalpresentationstyle)

# modalPresentationStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The presentation style for modal view controllers.

## Declaration

```swift
var modalPresentationStyle: UIModalPresentationStyle { get set }
```

<a id="Discussion"></a>

## Discussion

Presentation style defines how the system presents a modal view controller. The system uses this value only in regular-width size classes. In compact-width size classes, some styles take on the behavior of other styles. You can influence this behavior by implementing the [adaptivePresentationStyle(for:traitCollection:)](../uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle%28for_traitcollection_%29.md) method.

Presentation style also impacts the content size of a modal view controller. For example, [UIModalPresentationStyle.pageSheet](../uimodalpresentationstyle/pagesheet.md) uses an explicit size that the system provides. By contrast, [UIModalPresentationStyle.formSheet](../uimodalpresentationstyle/formsheet.md) uses the view controller’s [preferredContentSize](preferredcontentsize.md) property, which you can set.

The default value is [UIModalPresentationStyle.automatic](../uimodalpresentationstyle/automatic.md). For a list of presentation styles and their compatibility with the various transition styles, see [UIModalPresentationStyle](../uimodalpresentationstyle.md).

## See Also

### Presenting a view controller

- [show(\_:sender:)](show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController(\_:sender:)](showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [UIViewController.ShowDetailTargetDidChangeMessage](showdetailtargetdidchangemessage.md)
- [present(\_:animated:completion:)](present%28__animated_completion_%29.md): Presents a view controller modally.
- [dismiss(animated:completion:)](dismiss%28animated_completion_%29.md): Dismisses the view controller that was presented modally by the view controller.
- [UIModalPresentationStyle](../uimodalpresentationstyle.md): Modal presentation styles available when presenting view controllers.
- [modalTransitionStyle](modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [UIModalTransitionStyle](../uimodaltransitionstyle.md): Transition styles available when presenting view controllers.
- [isModalInPresentation](ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [showDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.

# modalPresentationStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The presentation style for modal view controllers.

## Declaration

```objectivec
@property (nonatomic, assign) UIModalPresentationStyle modalPresentationStyle;
```

<a id="Discussion"></a>

## Discussion

Presentation style defines how the system presents a modal view controller. The system uses this value only in regular-width size classes. In compact-width size classes, some styles take on the behavior of other styles. You can influence this behavior by implementing the [adaptivePresentationStyleForPresentationController:traitCollection:](../uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle%28for_traitcollection_%29.md) method.

Presentation style also impacts the content size of a modal view controller. For example, [UIModalPresentationPageSheet](../uimodalpresentationstyle/pagesheet.md) uses an explicit size that the system provides. By contrast, [UIModalPresentationFormSheet](../uimodalpresentationstyle/formsheet.md) uses the view controller’s [preferredContentSize](preferredcontentsize.md) property, which you can set.

The default value is [UIModalPresentationAutomatic](../uimodalpresentationstyle/automatic.md). For a list of presentation styles and their compatibility with the various transition styles, see [UIModalPresentationStyle](../uimodalpresentationstyle.md).

## See Also

### Presenting a view controller

- [showViewController:sender:](show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController:sender:](showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [presentViewController:animated:completion:](present%28__animated_completion_%29.md): Presents a view controller modally.
- [dismissViewControllerAnimated:completion:](dismiss%28animated_completion_%29.md): Dismisses the view controller that was presented modally by the view controller.
- [UIModalPresentationStyle](../uimodalpresentationstyle.md): Modal presentation styles available when presenting view controllers.
- [modalTransitionStyle](modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [UIModalTransitionStyle](../uimodaltransitionstyle.md): Transition styles available when presenting view controllers.
- [modalInPresentation](ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [UIViewControllerShowDetailTargetDidChangeNotification](showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.
