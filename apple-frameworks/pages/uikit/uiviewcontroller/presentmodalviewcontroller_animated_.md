> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/presentmodalviewcontroller:animated:](https://developer.apple.com/documentation/uikit/uiviewcontroller/presentmodalviewcontroller:animated:)

# presentModalViewController:animated:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 6.0) · iPadOS 2.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Presents a modal view managed by the given view controller to the user.

> Use [presentViewController:animated:completion:](present%28__animated_completion_%29.md) instead.

## Declaration

```objectivec
- (void) presentModalViewController:(UIViewController *) modalViewController animated:(BOOL) animated;
```

## Parameters

- `modalViewController`: The view controller that manages the modal view.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), animates the view as it’s presented; otherwise, does not.

<a id="Discussion"></a>

## Discussion

On iPhone and iPod touch devices, the view of `modalViewController` is always presented full screen. On iPad, the presentation depends on the value in the [modalPresentationStyle](modalpresentationstyle.md) property.

Sets the [modalViewController](modalviewcontroller.md) property to the specified view controller. Resizes its view and attaches it to the view hierarchy. The view is animated according to the transition style specified in the [modalTransitionStyle](modaltransitionstyle.md) property of the controller in the `modalViewController` parameter.

## See Also

### Deprecated methods

- [setOverrideTraitCollection:forChildViewController:](setoverridetraitcollection%28__forchild_%29.md): Deprecated. Changes the traits assigned to the specified child view controller.
- [overrideTraitCollectionForChildViewController:](overridetraitcollection%28forchild_%29.md): Deprecated. Retrieves the trait collection for a child view controller.
- [attemptRotationToDeviceOrientation](attemptrotationtodeviceorientation%28%29.md): Deprecated. Attempts to rotate all windows to the orientation of the device.
- [registerForPreviewingWithDelegate:sourceView:](registerforpreviewing%28with_sourceview_%29.md): Deprecated. Registers a view controller to participate with 3D Touch preview (peek) and commit (pop).
- [unregisterForPreviewingWithContext:](unregisterforpreviewing%28withcontext_%29.md): Deprecated. Unregisters a previously registered view controller identified by its context object.
- [automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers](automaticallyforwardappearanceandrotationmethodstochildviewcontrollers.md): Deprecated. Returns a Boolean value that indicates whether appearance and rotation methods are forwarded.
- [canPerformUnwindSegueAction:fromViewController:withSender:](canperformunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called on a view controller to determine whether it wants to respond to an unwind action.
- [didAnimateFirstHalfOfRotationToInterfaceOrientation:](didanimatefirsthalfofrotationtointerfaceorientation_.md): Deprecated. Sent to the view controller after the completion of the first half of the user interface rotation.
- [didRotateFromInterfaceOrientation:](didrotate%28from_%29.md): Deprecated. Sent to the view controller after the user interface rotates.
- [dismissModalViewControllerAnimated:](dismissmodalviewcontrolleranimated_.md): Deprecated. Dismisses the view controller that was presented by the receiver.
- [dismissMoviePlayerViewControllerAnimated](dismissmovieplayerviewcontrolleranimated%28%29.md): Deprecated. Dismisses a movie player view controller using the standard movie player transition.
- [viewControllerForUnwindSegueAction:fromViewController:withSender:](forunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called when an unwind segue action wants to search a container’s children for a view controller to handle the unwind action.
- [presentMoviePlayerViewControllerAnimated:](presentmovieplayerviewcontrolleranimated%28__%29.md): Deprecated. Presents the movie player view controller using the standard movie player transition.
- [rotatingFooterView](rotatingfooterview%28%29.md): Deprecated. Returns the footer view to transition during an interface orientation change.
- [rotatingHeaderView](rotatingheaderview%28%29.md): Deprecated. Returns the header view to transition during an interface orientation change.
