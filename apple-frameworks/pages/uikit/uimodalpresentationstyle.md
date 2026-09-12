> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimodalpresentationstyle](https://developer.apple.com/documentation/uikit/uimodalpresentationstyle)

# UIModalPresentationStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Modal presentation styles available when presenting view controllers.

## Declaration

```swift
enum UIModalPresentationStyle
```

## Topics

### Presentations

- [UIModalPresentationStyle.automatic](uimodalpresentationstyle/automatic.md): The default presentation style chosen by the system.
- [UIModalPresentationStyle.none](uimodalpresentationstyle/none.md): A presentation style that indicates no adaptations should be made.
- [UIModalPresentationStyle.fullScreen](uimodalpresentationstyle/fullscreen.md): A presentation style in which the presented view covers the screen.
- [UIModalPresentationStyle.pageSheet](uimodalpresentationstyle/pagesheet.md): A presentation style that partially covers the underlying content.
- [UIModalPresentationStyle.formSheet](uimodalpresentationstyle/formsheet.md): A presentation style that displays the content centered in the screen.
- [UIModalPresentationStyle.currentContext](uimodalpresentationstyle/currentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationStyle.custom](uimodalpresentationstyle/custom.md): A custom view presentation style that is managed by a custom presentation controller and one or more custom animator objects.
- [UIModalPresentationStyle.overFullScreen](uimodalpresentationstyle/overfullscreen.md): A view presentation style in which the presented view covers the screen.
- [UIModalPresentationStyle.overCurrentContext](uimodalpresentationstyle/overcurrentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationStyle.popover](uimodalpresentationstyle/popover.md): A presentation style where the content is displayed in a popover view.
- [UIModalPresentationStyle.blurOverFullScreen](uimodalpresentationstyle/bluroverfullscreen.md): A presentation style that blurs the underlying content before displaying new content in a full-screen presentation.

### Initializers

- [init(rawValue:)](uimodalpresentationstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presenting a view controller

- [show(\_:sender:)](uiviewcontroller/show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController(\_:sender:)](uiviewcontroller/showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [UIViewController.ShowDetailTargetDidChangeMessage](uiviewcontroller/showdetailtargetdidchangemessage.md)
- [present(\_:animated:completion:)](uiviewcontroller/present%28__animated_completion_%29.md): Presents a view controller modally.
- [dismiss(animated:completion:)](uiviewcontroller/dismiss%28animated_completion_%29.md): Dismisses the view controller that was presented modally by the view controller.
- [modalPresentationStyle](uiviewcontroller/modalpresentationstyle.md): The presentation style for modal view controllers.
- [modalTransitionStyle](uiviewcontroller/modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [UIModalTransitionStyle](uimodaltransitionstyle.md): Transition styles available when presenting view controllers.
- [isModalInPresentation](uiviewcontroller/ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](uiviewcontroller/definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](uiviewcontroller/providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](uiviewcontroller/disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [showDetailTargetDidChangeNotification](uiviewcontroller/showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.

# UIModalPresentationStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Modal presentation styles available when presenting view controllers.

## Declaration

```objectivec
enum UIModalPresentationStyle : NSInteger;
```

## Topics

### Presentations

- [UIModalPresentationAutomatic](uimodalpresentationstyle/automatic.md): The default presentation style chosen by the system.
- [UIModalPresentationNone](uimodalpresentationstyle/none.md): A presentation style that indicates no adaptations should be made.
- [UIModalPresentationFullScreen](uimodalpresentationstyle/fullscreen.md): A presentation style in which the presented view covers the screen.
- [UIModalPresentationPageSheet](uimodalpresentationstyle/pagesheet.md): A presentation style that partially covers the underlying content.
- [UIModalPresentationFormSheet](uimodalpresentationstyle/formsheet.md): A presentation style that displays the content centered in the screen.
- [UIModalPresentationCurrentContext](uimodalpresentationstyle/currentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationCustom](uimodalpresentationstyle/custom.md): A custom view presentation style that is managed by a custom presentation controller and one or more custom animator objects.
- [UIModalPresentationOverFullScreen](uimodalpresentationstyle/overfullscreen.md): A view presentation style in which the presented view covers the screen.
- [UIModalPresentationOverCurrentContext](uimodalpresentationstyle/overcurrentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationPopover](uimodalpresentationstyle/popover.md): A presentation style where the content is displayed in a popover view.
- [UIModalPresentationBlurOverFullScreen](uimodalpresentationstyle/bluroverfullscreen.md): A presentation style that blurs the underlying content before displaying new content in a full-screen presentation.

## See Also

### Presenting a view controller

- [showViewController:sender:](uiviewcontroller/show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController:sender:](uiviewcontroller/showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [presentViewController:animated:completion:](uiviewcontroller/present%28__animated_completion_%29.md): Presents a view controller modally.
- [dismissViewControllerAnimated:completion:](uiviewcontroller/dismiss%28animated_completion_%29.md): Dismisses the view controller that was presented modally by the view controller.
- [modalPresentationStyle](uiviewcontroller/modalpresentationstyle.md): The presentation style for modal view controllers.
- [modalTransitionStyle](uiviewcontroller/modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [UIModalTransitionStyle](uimodaltransitionstyle.md): Transition styles available when presenting view controllers.
- [modalInPresentation](uiviewcontroller/ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](uiviewcontroller/definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](uiviewcontroller/providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](uiviewcontroller/disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [UIViewControllerShowDetailTargetDidChangeNotification](uiviewcontroller/showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.
