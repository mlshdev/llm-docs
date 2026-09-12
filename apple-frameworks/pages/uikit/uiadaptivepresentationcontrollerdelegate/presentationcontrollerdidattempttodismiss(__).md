> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontrollerdidattempttodismiss(_:)](https://developer.apple.com/documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontrollerdidattempttodismiss(_:))

# presentationControllerDidAttemptToDismiss(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Notifies the delegate that a user-initiated attempt to dismiss a view was prevented.

## Declaration

```swift
optional func presentationControllerDidAttemptToDismiss(_ presentationController: UIPresentationController)
```

## Parameters

- `presentationController`: The presentation controller managing the adaptivity change.

<a id="Discussion"></a>

## Discussion

UIKit supports refusing to dismiss a presentation when the `presentationController`.[isModalInPresentation](../uiviewcontroller/ismodalinpresentation.md) returns `true` or [presentationControllerShouldDismiss(\_:)](presentationcontrollershoulddismiss%28__%29.md) returns `false`.

Use this method to inform the user why the presentation can’t be dismissed, for example, by presenting an instance of [UIAlertController](../uialertcontroller.md).

## See Also

### Responding to adaptive transitions

- [presentationController(\_:willPresentWithAdaptiveStyle:transitionCoordinator:)](presentationcontroller%28__willpresentwithadaptivestyle_transitioncoordinator_%29.md): Notifies the delegate that an adaptivity-related transition is about to occur.
- [presentationControllerShouldDismiss(\_:)](presentationcontrollershoulddismiss%28__%29.md): Asks the delegate for permission to dismiss the presentation.
- [presentationControllerDidDismiss(\_:)](presentationcontrollerdiddismiss%28__%29.md): Notifies the delegate after a presentation is dismissed.
- [presentationControllerWillDismiss(\_:)](presentationcontrollerwilldismiss%28__%29.md): Notifies the delegate before a presentation is dismissed.

# presentationControllerDidAttemptToDismiss: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Notifies the delegate that a user-initiated attempt to dismiss a view was prevented.

## Declaration

```objectivec
- (void) presentationControllerDidAttemptToDismiss:(UIPresentationController *) presentationController;
```

## Parameters

- `presentationController`: The presentation controller managing the adaptivity change.

<a id="Discussion"></a>

## Discussion

UIKit supports refusing to dismiss a presentation when the `presentationController`.[modalInPresentation](../uiviewcontroller/ismodalinpresentation.md) returns `true` or [presentationControllerShouldDismiss:](presentationcontrollershoulddismiss%28__%29.md) returns `false`.

Use this method to inform the user why the presentation can’t be dismissed, for example, by presenting an instance of [UIAlertController](../uialertcontroller.md).

## See Also

### Responding to adaptive transitions

- [presentationController:willPresentWithAdaptiveStyle:transitionCoordinator:](presentationcontroller%28__willpresentwithadaptivestyle_transitioncoordinator_%29.md): Notifies the delegate that an adaptivity-related transition is about to occur.
- [presentationControllerShouldDismiss:](presentationcontrollershoulddismiss%28__%29.md): Asks the delegate for permission to dismiss the presentation.
- [presentationControllerDidDismiss:](presentationcontrollerdiddismiss%28__%29.md): Notifies the delegate after a presentation is dismissed.
- [presentationControllerWillDismiss:](presentationcontrollerwilldismiss%28__%29.md): Notifies the delegate before a presentation is dismissed.
