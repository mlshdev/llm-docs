> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/automaticallyforwardappearanceandrotationmethodstochildviewcontrollers](https://developer.apple.com/documentation/uikit/uiviewcontroller/automaticallyforwardappearanceandrotationmethodstochildviewcontrollers)

# automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a Boolean value that indicates whether appearance and rotation methods are forwarded.

> Manually forward calls to the [viewWillTransitionToSize:withTransitionCoordinator:](../uicontentcontainer/viewwilltransition%28to_with_%29.md) method as needed.

## Declaration

```objectivec
- (BOOL) automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers;
```

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether appearance and rotation methods are forwarded.

<a id="Discussion"></a>

## Discussion

This method is called to determine whether to automatically forward containment callbacks to the child view controllers.

The default implementation returns [true](https://developer.apple.com/documentation/swift/true). Subclasses of the [UIViewController](../uiviewcontroller.md) class that implement containment logic may override this method to control how these methods are forwarded. If you override this method and return [false](https://developer.apple.com/documentation/swift/false), you are responsible for forwarding the following methods to child view controllers at the appropriate times:

- [viewWillAppear:](viewwillappear%28__%29.md)
- [viewDidAppear:](viewdidappear%28__%29.md)
- [viewWillDisappear:](viewwilldisappear%28__%29.md)
- [viewDidDisappear:](viewdiddisappear%28__%29.md)
- [willRotateToInterfaceOrientation:duration:](willrotate%28to_duration_%29.md)
- [willAnimateRotationToInterfaceOrientation:duration:](willanimaterotation%28to_duration_%29.md)
- [didRotateFromInterfaceOrientation:](didrotate%28from_%29.md)

## See Also

### Deprecated methods

- [setOverrideTraitCollection:forChildViewController:](setoverridetraitcollection%28__forchild_%29.md): Deprecated. Changes the traits assigned to the specified child view controller.
- [overrideTraitCollectionForChildViewController:](overridetraitcollection%28forchild_%29.md): Deprecated. Retrieves the trait collection for a child view controller.
- [attemptRotationToDeviceOrientation](attemptrotationtodeviceorientation%28%29.md): Deprecated. Attempts to rotate all windows to the orientation of the device.
- [registerForPreviewingWithDelegate:sourceView:](registerforpreviewing%28with_sourceview_%29.md): Deprecated. Registers a view controller to participate with 3D Touch preview (peek) and commit (pop).
- [unregisterForPreviewingWithContext:](unregisterforpreviewing%28withcontext_%29.md): Deprecated. Unregisters a previously registered view controller identified by its context object.
- [canPerformUnwindSegueAction:fromViewController:withSender:](canperformunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called on a view controller to determine whether it wants to respond to an unwind action.
- [didAnimateFirstHalfOfRotationToInterfaceOrientation:](didanimatefirsthalfofrotationtointerfaceorientation_.md): Deprecated. Sent to the view controller after the completion of the first half of the user interface rotation.
- [didRotateFromInterfaceOrientation:](didrotate%28from_%29.md): Deprecated. Sent to the view controller after the user interface rotates.
- [dismissModalViewControllerAnimated:](dismissmodalviewcontrolleranimated_.md): Deprecated. Dismisses the view controller that was presented by the receiver.
- [dismissMoviePlayerViewControllerAnimated](dismissmovieplayerviewcontrolleranimated%28%29.md): Deprecated. Dismisses a movie player view controller using the standard movie player transition.
- [viewControllerForUnwindSegueAction:fromViewController:withSender:](forunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called when an unwind segue action wants to search a container’s children for a view controller to handle the unwind action.
- [presentModalViewController:animated:](presentmodalviewcontroller_animated_.md): Deprecated. Presents a modal view managed by the given view controller to the user.
- [presentMoviePlayerViewControllerAnimated:](presentmovieplayerviewcontrolleranimated%28__%29.md): Deprecated. Presents the movie player view controller using the standard movie player transition.
- [rotatingFooterView](rotatingfooterview%28%29.md): Deprecated. Returns the footer view to transition during an interface orientation change.
- [rotatingHeaderView](rotatingheaderview%28%29.md): Deprecated. Returns the header view to transition during an interface orientation change.
