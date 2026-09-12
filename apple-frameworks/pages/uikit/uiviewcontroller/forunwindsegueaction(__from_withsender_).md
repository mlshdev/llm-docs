> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/forunwindsegueaction(_:from:withsender:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/forunwindsegueaction(_:from:withsender:))

# forUnwindSegueAction(\_:from:withSender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 9.0) · iPadOS 6.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Called when an unwind segue action wants to search a container’s children for a view controller to handle the unwind action.

> Override the [allowedChildrenForUnwinding(from:)](allowedchildrenforunwinding%28from_%29.md) method instead.

## Declaration

```swift
func forUnwindSegueAction(_ action: Selector, from fromViewController: UIViewController, withSender sender: Any?) -> UIViewController?
```

## Parameters

- `action`: The action that triggered the unwind action.
- `fromViewController`: The view controller that is the source of the unwinding action.
- `sender`: The object that initiated the action.

<a id="return-value"></a>

## Return Value

The view controller that wants to handle the unwind action.

<a id="Discussion"></a>

## Discussion

A custom container view controller should override this method and use it to search its children for a view controller to handle the unwind action. It does this by invoking the [canPerformUnwindSegueAction(\_:from:withSender:)](canperformunwindsegueaction%28__from_withsender_%29.md) method on each child. If a view controller wants to handle the action, your method should return it. If none of the container’s children want to handle the unwind action, invoke the super’s implementation and return the result of that method.

## See Also

### Deprecated methods

- [setOverrideTraitCollection(\_:forChild:)](setoverridetraitcollection%28__forchild_%29.md): Deprecated. Changes the traits assigned to the specified child view controller.
- [overrideTraitCollection(forChild:)](overridetraitcollection%28forchild_%29.md): Deprecated. Retrieves the trait collection for a child view controller.
- [attemptRotationToDeviceOrientation()](attemptrotationtodeviceorientation%28%29.md): Deprecated. Attempts to rotate all windows to the orientation of the device.
- [registerForPreviewing(with:sourceView:)](registerforpreviewing%28with_sourceview_%29.md): Deprecated. Registers a view controller to participate with 3D Touch preview (peek) and commit (pop).
- [unregisterForPreviewing(withContext:)](unregisterforpreviewing%28withcontext_%29.md): Deprecated. Unregisters a previously registered view controller identified by its context object.
- [canPerformUnwindSegueAction(\_:from:withSender:)](canperformunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called on a view controller to determine whether it wants to respond to an unwind action.
- [didRotate(from:)](didrotate%28from_%29.md): Deprecated. Sent to the view controller after the user interface rotates.
- [dismissMoviePlayerViewControllerAnimated()](dismissmovieplayerviewcontrolleranimated%28%29.md): Deprecated. Dismisses a movie player view controller using the standard movie player transition.
- [presentMoviePlayerViewControllerAnimated(\_:)](presentmovieplayerviewcontrolleranimated%28__%29.md): Deprecated. Presents the movie player view controller using the standard movie player transition.
- [rotatingFooterView()](rotatingfooterview%28%29.md): Deprecated. Returns the footer view to transition during an interface orientation change.
- [rotatingHeaderView()](rotatingheaderview%28%29.md): Deprecated. Returns the header view to transition during an interface orientation change.
- [segueForUnwinding(to:from:identifier:)](segueforunwinding%28to_from_identifier_%29.md): Deprecated. Called when an unwind segue action needs to transition between two view controllers.
- [shouldAutomaticallyForwardRotationMethods()](shouldautomaticallyforwardrotationmethods%28%29.md): Deprecated. Returns a Boolean value indicating whether rotation methods are forwarded to child view controllers.
- [willAnimateRotation(to:duration:)](willanimaterotation%28to_duration_%29.md): Deprecated. Sent to the view controller before performing a one-step user interface rotation.
- [willRotate(to:duration:)](willrotate%28to_duration_%29.md): Deprecated. Sent to the view controller just before the user interface begins rotating.

# viewControllerForUnwindSegueAction:fromViewController:withSender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 9.0) · iPadOS 6.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Called when an unwind segue action wants to search a container’s children for a view controller to handle the unwind action.

> Override the [allowedChildViewControllersForUnwindingFromSource:](allowedchildrenforunwinding%28from_%29.md) method instead.

## Declaration

```objectivec
- (UIViewController *) viewControllerForUnwindSegueAction:(SEL) action fromViewController:(UIViewController *) fromViewController withSender:(id) sender;
```

## Parameters

- `action`: The action that triggered the unwind action.
- `fromViewController`: The view controller that is the source of the unwinding action.
- `sender`: The object that initiated the action.

<a id="return-value"></a>

## Return Value

The view controller that wants to handle the unwind action.

<a id="Discussion"></a>

## Discussion

A custom container view controller should override this method and use it to search its children for a view controller to handle the unwind action. It does this by invoking the [canPerformUnwindSegueAction:fromViewController:withSender:](canperformunwindsegueaction%28__from_withsender_%29.md) method on each child. If a view controller wants to handle the action, your method should return it. If none of the container’s children want to handle the unwind action, invoke the super’s implementation and return the result of that method.

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
- [presentModalViewController:animated:](presentmodalviewcontroller_animated_.md): Deprecated. Presents a modal view managed by the given view controller to the user.
- [presentMoviePlayerViewControllerAnimated:](presentmovieplayerviewcontrolleranimated%28__%29.md): Deprecated. Presents the movie player view controller using the standard movie player transition.
- [rotatingFooterView](rotatingfooterview%28%29.md): Deprecated. Returns the footer view to transition during an interface orientation change.
- [rotatingHeaderView](rotatingheaderview%28%29.md): Deprecated. Returns the header view to transition during an interface orientation change.
