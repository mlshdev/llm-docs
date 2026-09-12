> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimodaltransitionstyle](https://developer.apple.com/documentation/uikit/uimodaltransitionstyle)

# UIModalTransitionStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Transition styles available when presenting view controllers.

## Declaration

```swift
enum UIModalTransitionStyle
```

## Topics

### Constants

- [UIModalTransitionStyle.coverVertical](uimodaltransitionstyle/coververtical.md)
- [UIModalTransitionStyle.flipHorizontal](uimodaltransitionstyle/fliphorizontal.md)
- [UIModalTransitionStyle.crossDissolve](uimodaltransitionstyle/crossdissolve.md)
- [UIModalTransitionStyle.partialCurl](uimodaltransitionstyle/partialcurl.md)

### Initializers

- [init(rawValue:)](uimodaltransitionstyle/init%28rawvalue_%29.md)

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
- [UIModalPresentationStyle](uimodalpresentationstyle.md): Modal presentation styles available when presenting view controllers.
- [modalTransitionStyle](uiviewcontroller/modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [isModalInPresentation](uiviewcontroller/ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](uiviewcontroller/definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](uiviewcontroller/providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](uiviewcontroller/disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [showDetailTargetDidChangeNotification](uiviewcontroller/showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.

# UIModalTransitionStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Transition styles available when presenting view controllers.

## Declaration

```objectivec
enum UIModalTransitionStyle : NSInteger;
```

## Topics

### Constants

- [UIModalTransitionStyleCoverVertical](uimodaltransitionstyle/coververtical.md)
- [UIModalTransitionStyleFlipHorizontal](uimodaltransitionstyle/fliphorizontal.md)
- [UIModalTransitionStyleCrossDissolve](uimodaltransitionstyle/crossdissolve.md)
- [UIModalTransitionStylePartialCurl](uimodaltransitionstyle/partialcurl.md)

## See Also

### Presenting a view controller

- [showViewController:sender:](uiviewcontroller/show%28__sender_%29.md): Presents a view controller in a primary context.
- [showDetailViewController:sender:](uiviewcontroller/showdetailviewcontroller%28__sender_%29.md): Presents a view controller in a secondary (or detail) context.
- [presentViewController:animated:completion:](uiviewcontroller/present%28__animated_completion_%29.md): Presents a view controller modally.
- [dismissViewControllerAnimated:completion:](uiviewcontroller/dismiss%28animated_completion_%29.md): Dismisses the view controller that was presented modally by the view controller.
- [modalPresentationStyle](uiviewcontroller/modalpresentationstyle.md): The presentation style for modal view controllers.
- [UIModalPresentationStyle](uimodalpresentationstyle.md): Modal presentation styles available when presenting view controllers.
- [modalTransitionStyle](uiviewcontroller/modaltransitionstyle.md): The transition style to use when presenting the view controller.
- [modalInPresentation](uiviewcontroller/ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [definesPresentationContext](uiviewcontroller/definespresentationcontext.md): A Boolean value that indicates whether this view controller’s view is covered when the view controller or one of its descendants presents a view controller.
- [providesPresentationContextTransitionStyle](uiviewcontroller/providespresentationcontexttransitionstyle.md): A Boolean value that indicates whether the view controller specifies the transition style for view controllers it presents.
- [disablesAutomaticKeyboardDismissal](uiviewcontroller/disablesautomatickeyboarddismissal.md): Returns a Boolean indicating whether the current input view is dismissed automatically when changing controls.
- [UIViewControllerShowDetailTargetDidChangeNotification](uiviewcontroller/showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.
