> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller-deprecated-symbols](https://developer.apple.com/documentation/uikit/uiviewcontroller-deprecated-symbols)

# Deprecated symbols (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Symbols that view controllers no longer support.

## Topics

### Deprecated methods

- [setOverrideTraitCollection(\_:forChild:)](uiviewcontroller/setoverridetraitcollection%28__forchild_%29.md): Deprecated. Changes the traits assigned to the specified child view controller.
- [overrideTraitCollection(forChild:)](uiviewcontroller/overridetraitcollection%28forchild_%29.md): Deprecated. Retrieves the trait collection for a child view controller.
- [attemptRotationToDeviceOrientation()](uiviewcontroller/attemptrotationtodeviceorientation%28%29.md): Deprecated. Attempts to rotate all windows to the orientation of the device.
- [registerForPreviewing(with:sourceView:)](uiviewcontroller/registerforpreviewing%28with_sourceview_%29.md): Deprecated. Registers a view controller to participate with 3D Touch preview (peek) and commit (pop).
- [unregisterForPreviewing(withContext:)](uiviewcontroller/unregisterforpreviewing%28withcontext_%29.md): Deprecated. Unregisters a previously registered view controller identified by its context object.
- [canPerformUnwindSegueAction(\_:from:withSender:)](uiviewcontroller/canperformunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called on a view controller to determine whether it wants to respond to an unwind action.
- [didRotate(from:)](uiviewcontroller/didrotate%28from_%29.md): Deprecated. Sent to the view controller after the user interface rotates.
- [dismissMoviePlayerViewControllerAnimated()](uiviewcontroller/dismissmovieplayerviewcontrolleranimated%28%29.md): Deprecated. Dismisses a movie player view controller using the standard movie player transition.
- [forUnwindSegueAction(\_:from:withSender:)](uiviewcontroller/forunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called when an unwind segue action wants to search a container’s children for a view controller to handle the unwind action.
- [presentMoviePlayerViewControllerAnimated(\_:)](uiviewcontroller/presentmovieplayerviewcontrolleranimated%28__%29.md): Deprecated. Presents the movie player view controller using the standard movie player transition.
- [rotatingFooterView()](uiviewcontroller/rotatingfooterview%28%29.md): Deprecated. Returns the footer view to transition during an interface orientation change.
- [rotatingHeaderView()](uiviewcontroller/rotatingheaderview%28%29.md): Deprecated. Returns the header view to transition during an interface orientation change.
- [segueForUnwinding(to:from:identifier:)](uiviewcontroller/segueforunwinding%28to_from_identifier_%29.md): Deprecated. Called when an unwind segue action needs to transition between two view controllers.
- [shouldAutomaticallyForwardRotationMethods()](uiviewcontroller/shouldautomaticallyforwardrotationmethods%28%29.md): Deprecated. Returns a Boolean value indicating whether rotation methods are forwarded to child view controllers.
- [willAnimateRotation(to:duration:)](uiviewcontroller/willanimaterotation%28to_duration_%29.md): Deprecated. Sent to the view controller before performing a one-step user interface rotation.
- [willRotate(to:duration:)](uiviewcontroller/willrotate%28to_duration_%29.md): Deprecated. Sent to the view controller just before the user interface begins rotating.

### Deprecated properties

- [shouldAutorotate](uiviewcontroller/shouldautorotate.md): Deprecated. A Boolean value that indicates whether the view controller’s contents should autorotate.
- [previewActionItems](uiviewcontroller/previewactionitems.md): Deprecated. The quick actions displayed when a user swipes upward on a 3D Touch preview.
- [automaticallyAdjustsScrollViewInsets](uiviewcontroller/automaticallyadjustsscrollviewinsets.md): Deprecated. A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.
- [bottomLayoutGuide](uiviewcontroller/bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [interfaceOrientation](uiviewcontroller/interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [isModalInPopover](uiviewcontroller/ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [searchDisplayController](uiviewcontroller/searchdisplaycontroller.md): Deprecated. The search display controller associated with the view controller.
- [topLayoutGuide](uiviewcontroller/toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.

# Deprecated symbols (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Symbols that view controllers no longer support.

## Topics

### Deprecated methods

- [setOverrideTraitCollection:forChildViewController:](uiviewcontroller/setoverridetraitcollection%28__forchild_%29.md): Deprecated. Changes the traits assigned to the specified child view controller.
- [overrideTraitCollectionForChildViewController:](uiviewcontroller/overridetraitcollection%28forchild_%29.md): Deprecated. Retrieves the trait collection for a child view controller.
- [attemptRotationToDeviceOrientation](uiviewcontroller/attemptrotationtodeviceorientation%28%29.md): Deprecated. Attempts to rotate all windows to the orientation of the device.
- [registerForPreviewingWithDelegate:sourceView:](uiviewcontroller/registerforpreviewing%28with_sourceview_%29.md): Deprecated. Registers a view controller to participate with 3D Touch preview (peek) and commit (pop).
- [unregisterForPreviewingWithContext:](uiviewcontroller/unregisterforpreviewing%28withcontext_%29.md): Deprecated. Unregisters a previously registered view controller identified by its context object.
- [automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers](uiviewcontroller/automaticallyforwardappearanceandrotationmethodstochildviewcontrollers.md): Deprecated. Returns a Boolean value that indicates whether appearance and rotation methods are forwarded.
- [canPerformUnwindSegueAction:fromViewController:withSender:](uiviewcontroller/canperformunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called on a view controller to determine whether it wants to respond to an unwind action.
- [didAnimateFirstHalfOfRotationToInterfaceOrientation:](uiviewcontroller/didanimatefirsthalfofrotationtointerfaceorientation_.md): Deprecated. Sent to the view controller after the completion of the first half of the user interface rotation.
- [didRotateFromInterfaceOrientation:](uiviewcontroller/didrotate%28from_%29.md): Deprecated. Sent to the view controller after the user interface rotates.
- [dismissModalViewControllerAnimated:](uiviewcontroller/dismissmodalviewcontrolleranimated_.md): Deprecated. Dismisses the view controller that was presented by the receiver.
- [dismissMoviePlayerViewControllerAnimated](uiviewcontroller/dismissmovieplayerviewcontrolleranimated%28%29.md): Deprecated. Dismisses a movie player view controller using the standard movie player transition.
- [viewControllerForUnwindSegueAction:fromViewController:withSender:](uiviewcontroller/forunwindsegueaction%28__from_withsender_%29.md): Deprecated. Called when an unwind segue action wants to search a container’s children for a view controller to handle the unwind action.
- [presentModalViewController:animated:](uiviewcontroller/presentmodalviewcontroller_animated_.md): Deprecated. Presents a modal view managed by the given view controller to the user.
- [presentMoviePlayerViewControllerAnimated:](uiviewcontroller/presentmovieplayerviewcontrolleranimated%28__%29.md): Deprecated. Presents the movie player view controller using the standard movie player transition.
- [rotatingFooterView](uiviewcontroller/rotatingfooterview%28%29.md): Deprecated. Returns the footer view to transition during an interface orientation change.
- [rotatingHeaderView](uiviewcontroller/rotatingheaderview%28%29.md): Deprecated. Returns the header view to transition during an interface orientation change.
- [segueForUnwindingToViewController:fromViewController:identifier:](uiviewcontroller/segueforunwinding%28to_from_identifier_%29.md): Deprecated. Called when an unwind segue action needs to transition between two view controllers.
- [shouldAutomaticallyForwardRotationMethods](uiviewcontroller/shouldautomaticallyforwardrotationmethods%28%29.md): Deprecated. Returns a Boolean value indicating whether rotation methods are forwarded to child view controllers.
- [shouldAutorotateToInterfaceOrientation:](uiviewcontroller/shouldautorotatetointerfaceorientation_.md): Deprecated. Returns a Boolean value indicating whether the view controller supports the specified orientation.
- [viewDidUnload](uiviewcontroller/viewdidunload.md): Deprecated. Called when the controller’s view is released from memory.
- [viewWillUnload](uiviewcontroller/viewwillunload.md): Deprecated. Called just before releasing the controller’s view from memory.
- [willAnimateFirstHalfOfRotationToInterfaceOrientation:duration:](uiviewcontroller/willanimatefirsthalfofrotationtointerfaceorientation_duration_.md): Deprecated. Sent to the view controller before performing the first half of a user interface rotation.
- [willAnimateRotationToInterfaceOrientation:duration:](uiviewcontroller/willanimaterotation%28to_duration_%29.md): Deprecated. Sent to the view controller before performing a one-step user interface rotation.
- [willAnimateSecondHalfOfRotationFromInterfaceOrientation:duration:](uiviewcontroller/willanimatesecondhalfofrotationfrominterfaceorientation_duration_.md): Deprecated. Sent to the view controller before the second half of the user interface rotates.
- [willRotateToInterfaceOrientation:duration:](uiviewcontroller/willrotate%28to_duration_%29.md): Deprecated. Sent to the view controller just before the user interface begins rotating.

### Deprecated properties

- [shouldAutorotate](uiviewcontroller/shouldautorotate.md): Deprecated. A Boolean value that indicates whether the view controller’s contents should autorotate.
- [previewActionItems](uiviewcontroller/previewactionitems.md): Deprecated. The quick actions displayed when a user swipes upward on a 3D Touch preview.
- [automaticallyAdjustsScrollViewInsets](uiviewcontroller/automaticallyadjustsscrollviewinsets.md): Deprecated. A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.
- [bottomLayoutGuide](uiviewcontroller/bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [contentSizeForViewInPopover](uiviewcontroller/contentsizeforviewinpopover.md): Deprecated. The size of the view controller’s view while displayed in a popover.
- [interfaceOrientation](uiviewcontroller/interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [modalInPopover](uiviewcontroller/ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [modalViewController](uiviewcontroller/modalviewcontroller.md): Deprecated. The controller for the active presented view’that is, the view that is temporarily displayed on top of the view managed by the receiver.
- [searchDisplayController](uiviewcontroller/searchdisplaycontroller.md): Deprecated. The search display controller associated with the view controller.
- [topLayoutGuide](uiviewcontroller/toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [wantsFullScreenLayout](uiviewcontroller/wantsfullscreenlayout.md): Deprecated. A Boolean value indicating whether the view should underlap the status bar.
