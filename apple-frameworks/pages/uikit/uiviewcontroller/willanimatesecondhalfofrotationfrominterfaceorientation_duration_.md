> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/willanimatesecondhalfofrotationfrominterfaceorientation:duration:](https://developer.apple.com/documentation/uikit/uiviewcontroller/willanimatesecondhalfofrotationfrominterfaceorientation:duration:)

# willAnimateSecondHalfOfRotationFromInterfaceOrientation:duration:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 5.0) · iPadOS 2.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the view controller before the second half of the user interface rotates.

> Use [viewWillTransitionToSize:withTransitionCoordinator:](../uicontentcontainer/viewwilltransition%28to_with_%29.md) to make interface-based adjustments.

## Declaration

```objectivec
- (void) willAnimateSecondHalfOfRotationFromInterfaceOrientation:(UIInterfaceOrientation) fromInterfaceOrientation duration:(NSTimeInterval) duration;
```

## Parameters

- `fromInterfaceOrientation`: The state of the app’s user interface orientation before the rotation. The possible values are described in the [UIInterfaceOrientation](../uiinterfaceorientation.md) enum.
- `duration`: The duration of the second half of the pending rotation, measured in seconds.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing.

This method is called from inside the animation block used to finish the view rotation and slide the header and footer views back into position. You can override this method and use it to configure additional animations that should occur during the second half of the view rotation. For example, you could use it to adjust the zoom level of your content, change the scroller position, or modify other animatable properties of your view.

At the time this method is invoked, the [interfaceOrientation](interfaceorientation.md) property is set to the new orientation.

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
- [presentModalViewController:animated:](presentmodalviewcontroller_animated_.md): Deprecated. Presents a modal view managed by the given view controller to the user.
- [presentMoviePlayerViewControllerAnimated:](presentmovieplayerviewcontrolleranimated%28__%29.md): Deprecated. Presents the movie player view controller using the standard movie player transition.
- [rotatingFooterView](rotatingfooterview%28%29.md): Deprecated. Returns the footer view to transition during an interface orientation change.
