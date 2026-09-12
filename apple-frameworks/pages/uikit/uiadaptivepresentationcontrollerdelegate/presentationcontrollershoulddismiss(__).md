> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontrollershoulddismiss(_:)](https://developer.apple.com/documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontrollershoulddismiss(_:))

# presentationControllerShouldDismiss(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Asks the delegate for permission to dismiss the presentation.

## Declaration

```swift
optional func presentationControllerShouldDismiss(_ presentationController: UIPresentationController) -> Bool
```

## Parameters

- `presentationController`: The presentation controller that manages the adaptivity change.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the system to dismiss the presentation, [false](https://developer.apple.com/documentation/swift/false) to refuse the dismissal.

<a id="Discussion"></a>

## Discussion

The system may call this method at any time. This method isn’t guaranteed to be followed by a call to [presentationControllerWillDismiss(\_:)](presentationcontrollerwilldismiss%28__%29.md) or [presentationControllerDidDismiss(\_:)](presentationcontrollerdiddismiss%28__%29.md). Make sure that your implementation of this method returns quickly.

## See Also

### Related Documentation

- [Disabling the pull-down gesture for a sheet](../disabling-the-pull-down-gesture-for-a-sheet.md): Ensure a positive user experience when presenting a view controller as a sheet.

### Responding to adaptive transitions

- [presentationController(\_:willPresentWithAdaptiveStyle:transitionCoordinator:)](presentationcontroller%28__willpresentwithadaptivestyle_transitioncoordinator_%29.md): Notifies the delegate that an adaptivity-related transition is about to occur.
- [presentationControllerDidAttemptToDismiss(\_:)](presentationcontrollerdidattempttodismiss%28__%29.md): Notifies the delegate that a user-initiated attempt to dismiss a view was prevented.
- [presentationControllerDidDismiss(\_:)](presentationcontrollerdiddismiss%28__%29.md): Notifies the delegate after a presentation is dismissed.
- [presentationControllerWillDismiss(\_:)](presentationcontrollerwilldismiss%28__%29.md): Notifies the delegate before a presentation is dismissed.

# presentationControllerShouldDismiss: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Asks the delegate for permission to dismiss the presentation.

## Declaration

```objectivec
- (BOOL) presentationControllerShouldDismiss:(UIPresentationController *) presentationController;
```

## Parameters

- `presentationController`: The presentation controller that manages the adaptivity change.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the system to dismiss the presentation, [false](https://developer.apple.com/documentation/swift/false) to refuse the dismissal.

<a id="Discussion"></a>

## Discussion

The system may call this method at any time. This method isn’t guaranteed to be followed by a call to [presentationControllerWillDismiss:](presentationcontrollerwilldismiss%28__%29.md) or [presentationControllerDidDismiss:](presentationcontrollerdiddismiss%28__%29.md). Make sure that your implementation of this method returns quickly.

## See Also

### Related Documentation

- [Disabling the pull-down gesture for a sheet](../disabling-the-pull-down-gesture-for-a-sheet.md): Ensure a positive user experience when presenting a view controller as a sheet.

### Responding to adaptive transitions

- [presentationController:willPresentWithAdaptiveStyle:transitionCoordinator:](presentationcontroller%28__willpresentwithadaptivestyle_transitioncoordinator_%29.md): Notifies the delegate that an adaptivity-related transition is about to occur.
- [presentationControllerDidAttemptToDismiss:](presentationcontrollerdidattempttodismiss%28__%29.md): Notifies the delegate that a user-initiated attempt to dismiss a view was prevented.
- [presentationControllerDidDismiss:](presentationcontrollerdiddismiss%28__%29.md): Notifies the delegate after a presentation is dismissed.
- [presentationControllerWillDismiss:](presentationcontrollerwilldismiss%28__%29.md): Notifies the delegate before a presentation is dismissed.
