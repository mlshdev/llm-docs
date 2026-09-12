> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/registerforpreviewing(with:sourceview:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/registerforpreviewing(with:sourceview:))

# registerForPreviewing(with:sourceView:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Registers a view controller to participate with 3D Touch preview (peek) and commit (pop).

> Use [UIContextMenuInteraction](../uicontextmenuinteraction.md) instead.

## Declaration

```swift
func registerForPreviewing(with delegate: any UIViewControllerPreviewingDelegate, sourceView: UIView) -> any UIViewControllerPreviewing
```

## Parameters

- `delegate`: The delegate object mediates the presentation of views from the preview (peek) view controller and the commit (pop) view controller. In practice, these two are typically the same view controller. The delegate performs this mediation through your implementation of the methods of the [UIViewControllerPreviewingDelegate](../uiviewcontrollerpreviewingdelegate.md) protocol.
- `sourceView`: The view, in the view hierarchy of the receiver of this method call, that invokes a preview when pressed by the user.

  When lightly pressed, the source view remains visually sharp while surrounding content blurs. When pressed more deeply, the system calls the [previewingContext(\_:viewControllerForLocation:)](../uiviewcontrollerpreviewingdelegate/previewingcontext%28__viewcontrollerforlocation_%29.md) method in your `delegate` object, which presents the preview (peek) view from another view controller.

<a id="return-value"></a>

## Return Value

A context object for managing the preview. This object conforms to the [UIViewControllerPreviewing](../uiviewcontrollerpreviewing.md) protocol.

<a id="Discussion"></a>

## Discussion

A preview, or *peek* in end-user terminology, provides additional content related to the view the user pressed (that is, related to the `sourceView` view).

Calling this method does three things:

- Registers the previewing view controller (the one that receives this method call) to participate with 3D Touch preview and commit
- Designates the source view, from the receiver’s view hierarchy, as the view to respond to a forceful touch
- Designates a delegate object for mediating the presentation of the preview (peek) and commit (pop) views as a user requests them in turn by pressing more deeply

You can designate more than one source view for a single registered view controller, but you cannot designate a single view as a source view more than once.

The lifetime of this method’s returned context object is managed by the system. If you need to explicitly unregister a view controller, pass its context object to the [unregisterForPreviewing(withContext:)](unregisterforpreviewing%28withcontext_%29.md) method. If you do not unregister a view controller, the system automatically unregisters it when the view controller is deallocated.

## See Also

### Deprecated methods

- [setOverrideTraitCollection(\_:forChild:)](setoverridetraitcollection%28__forchild_%29.md): Deprecated. Changes the traits assigned to the specified child view controller.
- [overrideTraitCollection(forChild:)](overridetraitcollection%28forchild_%29.md): Deprecated. Retrieves the trait collection for a child view controller.
- [attemptRotationToDeviceOrientation()](attemptrotationtodeviceorientation%28%29.md): Deprecated. Attempts to rotate all windows to the orientation of the device.
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

# registerForPreviewingWithDelegate:sourceView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Registers a view controller to participate with 3D Touch preview (peek) and commit (pop).

> Use [UIContextMenuInteraction](../uicontextmenuinteraction.md) instead.

## Declaration

```objectivec
- (id<UIViewControllerPreviewing>) registerForPreviewingWithDelegate:(id<UIViewControllerPreviewingDelegate>) delegate sourceView:(UIView *) sourceView;
```

## Parameters

- `delegate`: The delegate object mediates the presentation of views from the preview (peek) view controller and the commit (pop) view controller. In practice, these two are typically the same view controller. The delegate performs this mediation through your implementation of the methods of the [UIViewControllerPreviewingDelegate](../uiviewcontrollerpreviewingdelegate.md) protocol.
- `sourceView`: The view, in the view hierarchy of the receiver of this method call, that invokes a preview when pressed by the user.

  When lightly pressed, the source view remains visually sharp while surrounding content blurs. When pressed more deeply, the system calls the [previewingContext:viewControllerForLocation:](../uiviewcontrollerpreviewingdelegate/previewingcontext%28__viewcontrollerforlocation_%29.md) method in your `delegate` object, which presents the preview (peek) view from another view controller.

<a id="return-value"></a>

## Return Value

A context object for managing the preview. This object conforms to the [UIViewControllerPreviewing](../uiviewcontrollerpreviewing.md) protocol.

<a id="Discussion"></a>

## Discussion

A preview, or *peek* in end-user terminology, provides additional content related to the view the user pressed (that is, related to the `sourceView` view).

Calling this method does three things:

- Registers the previewing view controller (the one that receives this method call) to participate with 3D Touch preview and commit
- Designates the source view, from the receiver’s view hierarchy, as the view to respond to a forceful touch
- Designates a delegate object for mediating the presentation of the preview (peek) and commit (pop) views as a user requests them in turn by pressing more deeply

You can designate more than one source view for a single registered view controller, but you cannot designate a single view as a source view more than once.

The lifetime of this method’s returned context object is managed by the system. If you need to explicitly unregister a view controller, pass its context object to the [unregisterForPreviewingWithContext:](unregisterforpreviewing%28withcontext_%29.md) method. If you do not unregister a view controller, the system automatically unregisters it when the view controller is deallocated.

## See Also

### Deprecated methods

- [setOverrideTraitCollection:forChildViewController:](setoverridetraitcollection%28__forchild_%29.md): Deprecated. Changes the traits assigned to the specified child view controller.
- [overrideTraitCollectionForChildViewController:](overridetraitcollection%28forchild_%29.md): Deprecated. Retrieves the trait collection for a child view controller.
- [attemptRotationToDeviceOrientation](attemptrotationtodeviceorientation%28%29.md): Deprecated. Attempts to rotate all windows to the orientation of the device.
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
