> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontrollerdiddismiss(_:)](https://developer.apple.com/documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontrollerdiddismiss(_:))

# presentationControllerDidDismiss(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Notifies the delegate after a presentation is dismissed.

## Declaration

```swift
optional func presentationControllerDidDismiss(_ presentationController: UIPresentationController)
```

## Parameters

- `presentationController`: The presentation controller managing the adaptivity change.

<a id="Discussion"></a>

## Discussion

This method is not called if the presentation is dismissed programmatically.

## See Also

### Responding to adaptive transitions

- [presentationController(\_:willPresentWithAdaptiveStyle:transitionCoordinator:)](presentationcontroller%28__willpresentwithadaptivestyle_transitioncoordinator_%29.md): Notifies the delegate that an adaptivity-related transition is about to occur.
- [presentationControllerDidAttemptToDismiss(\_:)](presentationcontrollerdidattempttodismiss%28__%29.md): Notifies the delegate that a user-initiated attempt to dismiss a view was prevented.
- [presentationControllerShouldDismiss(\_:)](presentationcontrollershoulddismiss%28__%29.md): Asks the delegate for permission to dismiss the presentation.
- [presentationControllerWillDismiss(\_:)](presentationcontrollerwilldismiss%28__%29.md): Notifies the delegate before a presentation is dismissed.

# presentationControllerDidDismiss: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Notifies the delegate after a presentation is dismissed.

## Declaration

```objectivec
- (void) presentationControllerDidDismiss:(UIPresentationController *) presentationController;
```

## Parameters

- `presentationController`: The presentation controller managing the adaptivity change.

<a id="Discussion"></a>

## Discussion

This method is not called if the presentation is dismissed programmatically.

## See Also

### Responding to adaptive transitions

- [presentationController:willPresentWithAdaptiveStyle:transitionCoordinator:](presentationcontroller%28__willpresentwithadaptivestyle_transitioncoordinator_%29.md): Notifies the delegate that an adaptivity-related transition is about to occur.
- [presentationControllerDidAttemptToDismiss:](presentationcontrollerdidattempttodismiss%28__%29.md): Notifies the delegate that a user-initiated attempt to dismiss a view was prevented.
- [presentationControllerShouldDismiss:](presentationcontrollershoulddismiss%28__%29.md): Asks the delegate for permission to dismiss the presentation.
- [presentationControllerWillDismiss:](presentationcontrollerwilldismiss%28__%29.md): Notifies the delegate before a presentation is dismissed.
