> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setoverridetraitcollection(_:forchild:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/setoverridetraitcollection(_:forchild:))

# setOverrideTraitCollection(\_:forChild:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Changes the traits assigned to the specified child view controller.

> Use [traitOverrides](traitoverrides-1z1cc.md) instead.

## Declaration

```swift
func setOverrideTraitCollection(_ collection: UITraitCollection?, forChild childViewController: UIViewController)
```

## Parameters

- `collection`: The new traits to apply to the child view controller.
- `childViewController`: The child view controller whose trait collection is to be changed.

## Mentioned In

- [Choosing a specific interface style for your iOS app](../choosing-a-specific-interface-style-for-your-ios-app.md)
- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

Usually, traits are passed unmodified from the parent view controller to its child view controllers. When implementing a custom container view controller, you can use this method to change the traits of any embedded child view controllers to something more appropriate for your layout. Making such a change alters other view controller behaviors associated with that child. For example, modal presentations behave differently in a horizontally compact versus horizontally regular environment. You might also make such a change to force the same set of traits on the child view controller regardless of the actual trait environment.

## See Also

### Deprecated methods

- [overrideTraitCollection(forChild:)](overridetraitcollection%28forchild_%29.md): Deprecated. Retrieves the trait collection for a child view controller.
- [attemptRotationToDeviceOrientation()](attemptrotationtodeviceorientation%28%29.md): Deprecated. Attempts to rotate all windows to the orientation of the device.
- [registerForPreviewing(with:sourceView:)](registerforpreviewing%28with_sourceview_%29.md): Deprecated. Registers a view controller to participate with 3D Touch preview (peek) and commit (pop).
- [unregisterForPreviewing(withContext:)](unregisterforpreviewing%28withcontext_%29.md): Deprecated. Unregisters a previously registered view controller identified by its context object.
- [canPerformUnwindSegueAction(\_:from:withSender:)](canperformunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called on a view controller to determine whether it wants to respond to an unwind action.
- [didRotate(from:)](didrotate%28from_%29.md): Deprecated. Sent to the view controller after the user interface rotates.
- [dismissMoviePlayerViewControllerAnimated()](dismissmovieplayerviewcontrolleranimated%28%29.md): Deprecated. Dismisses a movie player view controller using the standard movie player transition.
- [forUnwindSegueAction(\_:from:withSender:)](forunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called when an unwind segue action wants to search a container’s children for a view controller to handle the unwind action.
- [presentMoviePlayerViewControllerAnimated(\_:)](presentmovieplayerviewcontrolleranimated%28__%29.md): Deprecated. Presents the movie player view controller using the standard movie player transition.
- [rotatingFooterView()](rotatingfooterview%28%29.md): Deprecated. Returns the footer view to transition during an interface orientation change.
- [rotatingHeaderView()](rotatingheaderview%28%29.md): Deprecated. Returns the header view to transition during an interface orientation change.
- [segueForUnwinding(to:from:identifier:)](segueforunwinding%28to_from_identifier_%29.md): Deprecated. Called when an unwind segue action needs to transition between two view controllers.
- [shouldAutomaticallyForwardRotationMethods()](shouldautomaticallyforwardrotationmethods%28%29.md): Deprecated. Returns a Boolean value indicating whether rotation methods are forwarded to child view controllers.
- [willAnimateRotation(to:duration:)](willanimaterotation%28to_duration_%29.md): Deprecated. Sent to the view controller before performing a one-step user interface rotation.
- [willRotate(to:duration:)](willrotate%28to_duration_%29.md): Deprecated. Sent to the view controller just before the user interface begins rotating.

# setOverrideTraitCollection:forChildViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Changes the traits assigned to the specified child view controller.

> Use [traitOverrides](traitoverrides-1z1cc.md) instead.

## Declaration

```objectivec
- (void) setOverrideTraitCollection:(UITraitCollection *) collection forChildViewController:(UIViewController *) childViewController;
```

## Parameters

- `collection`: The new traits to apply to the child view controller.
- `childViewController`: The child view controller whose trait collection is to be changed.

## Mentioned In

- [Choosing a specific interface style for your iOS app](../choosing-a-specific-interface-style-for-your-ios-app.md)
- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

Usually, traits are passed unmodified from the parent view controller to its child view controllers. When implementing a custom container view controller, you can use this method to change the traits of any embedded child view controllers to something more appropriate for your layout. Making such a change alters other view controller behaviors associated with that child. For example, modal presentations behave differently in a horizontally compact versus horizontally regular environment. You might also make such a change to force the same set of traits on the child view controller regardless of the actual trait environment.

## See Also

### Deprecated methods

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
- [rotatingHeaderView](rotatingheaderview%28%29.md): Deprecated. Returns the header view to transition during an interface orientation change.
