> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/childforstatusbarstyle](https://developer.apple.com/documentation/uikit/uiviewcontroller/childforstatusbarstyle)

# childForStatusBarStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ (deprecated in 1.0)

Called when the system needs the view controller to use for determining status bar style.

## Declaration

```swift
var childForStatusBarStyle: UIViewController? { get }
```

<a id="return-value"></a>

## Return Value

The view controller whose status bar style should be used.

<a id="Discussion"></a>

## Discussion

If your container view controller derives its status bar style from one of its child view controllers, implement this method and return that child view controller. If you return `nil` or do not override this method, the status bar style for `self` is used. If the return value from this method changes, call the [setNeedsStatusBarAppearanceUpdate()](setneedsstatusbarappearanceupdate%28%29.md) method.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate()](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.

# childViewControllerForStatusBarStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+

Called when the system needs the view controller to use for determining status bar style.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIViewController * childViewControllerForStatusBarStyle;
```

<a id="return-value"></a>

## Return Value

The view controller whose status bar style should be used.

<a id="Discussion"></a>

## Discussion

If your container view controller derives its status bar style from one of its child view controllers, implement this method and return that child view controller. If you return `nil` or do not override this method, the status bar style for `self` is used. If the return value from this method changes, call the [setNeedsStatusBarAppearanceUpdate](setneedsstatusbarappearanceupdate%28%29.md) method.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childViewControllerForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.
