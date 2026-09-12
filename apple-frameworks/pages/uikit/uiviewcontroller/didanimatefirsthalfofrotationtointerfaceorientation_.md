> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/didanimatefirsthalfofrotationtointerfaceorientation:](https://developer.apple.com/documentation/uikit/uiviewcontroller/didanimatefirsthalfofrotationtointerfaceorientation:)

# didAnimateFirstHalfOfRotationToInterfaceOrientation:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 5.0) · iPadOS 2.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the view controller after the completion of the first half of the user interface rotation.

> Use [viewWillTransitionToSize:withTransitionCoordinator:](../uicontentcontainer/viewwilltransition%28to_with_%29.md) to make interface-based adjustments.

## Declaration

```objectivec
- (void) didAnimateFirstHalfOfRotationToInterfaceOrientation:(UIInterfaceOrientation) toInterfaceOrientation;
```

## Parameters

- `toInterfaceOrientation`: The state of the app’s user interface orientation after the rotation. The possible values are described in the [UIInterfaceOrientation](../uiinterfaceorientation.md) enum.

<a id="Discussion"></a>

## Discussion

This method is called during two-step rotation animations only. Subclasses can override this method and use it to adjust their views between the first and second half of the animations. This method is called outside of any animation transactions and while any header or footer views are offscreen.

## See Also

### Deprecated methods

- [setOverrideTraitCollection:forChildViewController:](setoverridetraitcollection%28__forchild_%29.md): Deprecated. Changes the traits assigned to the specified child view controller.
- [overrideTraitCollectionForChildViewController:](overridetraitcollection%28forchild_%29.md): Deprecated. Retrieves the trait collection for a child view controller.
- [attemptRotationToDeviceOrientation](attemptrotationtodeviceorientation%28%29.md): Deprecated. Attempts to rotate all windows to the orientation of the device.
- [registerForPreviewingWithDelegate:sourceView:](registerforpreviewing%28with_sourceview_%29.md): Deprecated. Registers a view controller to participate with 3D Touch preview (peek) and commit (pop).
- [unregisterForPreviewingWithContext:](unregisterforpreviewing%28withcontext_%29.md): Deprecated. Unregisters a previously registered view controller identified by its context object.
- [automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers](automaticallyforwardappearanceandrotationmethodstochildviewcontrollers.md): Deprecated. Returns a Boolean value that indicates whether appearance and rotation methods are forwarded.
- [canPerformUnwindSegueAction:fromViewController:withSender:](canperformunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called on a view controller to determine whether it wants to respond to an unwind action.
- [didRotateFromInterfaceOrientation:](didrotate%28from_%29.md): Deprecated. Sent to the view controller after the user interface rotates.
- [dismissModalViewControllerAnimated:](dismissmodalviewcontrolleranimated_.md): Deprecated. Dismisses the view controller that was presented by the receiver.
- [dismissMoviePlayerViewControllerAnimated](dismissmovieplayerviewcontrolleranimated%28%29.md): Deprecated. Dismisses a movie player view controller using the standard movie player transition.
- [viewControllerForUnwindSegueAction:fromViewController:withSender:](forunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called when an unwind segue action wants to search a container’s children for a view controller to handle the unwind action.
- [presentModalViewController:animated:](presentmodalviewcontroller_animated_.md): Deprecated. Presents a modal view managed by the given view controller to the user.
- [presentMoviePlayerViewControllerAnimated:](presentmovieplayerviewcontrolleranimated%28__%29.md): Deprecated. Presents the movie player view controller using the standard movie player transition.
- [rotatingFooterView](rotatingfooterview%28%29.md): Deprecated. Returns the footer view to transition during an interface orientation change.
- [rotatingHeaderView](rotatingheaderview%28%29.md): Deprecated. Returns the header view to transition during an interface orientation change.
