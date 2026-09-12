> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/preferredstatusbarupdateanimation](https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredstatusbarupdateanimation)

# preferredStatusBarUpdateAnimation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ (deprecated in 1.0)

Specifies the animation style to use for hiding and showing the status bar for the view controller.

## Declaration

```swift
var preferredStatusBarUpdateAnimation: UIStatusBarAnimation { get }
```

<a id="return-value"></a>

## Return Value

The style of status bar animation to use; one of the constants from the [UIStatusBarAnimation](../uistatusbaranimation.md) enum. Default value is [UIStatusBarAnimation.fade](../uistatusbaranimation/fade.md).

<a id="Discussion"></a>

## Discussion

This property comes into play only when you actively change the status bar’s show/hide state by changing the return value of the [prefersStatusBarHidden](prefersstatusbarhidden.md) method.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [setNeedsStatusBarAppearanceUpdate()](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.

# preferredStatusBarUpdateAnimation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ (deprecated in 1.0)

Specifies the animation style to use for hiding and showing the status bar for the view controller.

## Declaration

```objectivec
@property (nonatomic, readonly) UIStatusBarAnimation preferredStatusBarUpdateAnimation;
```

<a id="return-value"></a>

## Return Value

The style of status bar animation to use; one of the constants from the [UIStatusBarAnimation](../uistatusbaranimation.md) enum. Default value is [UIStatusBarAnimationFade](../uistatusbaranimation/fade.md).

<a id="Discussion"></a>

## Discussion

This property comes into play only when you actively change the status bar’s show/hide state by changing the return value of the [prefersStatusBarHidden](prefersstatusbarhidden.md) method.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childViewControllerForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childViewControllerForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [setNeedsStatusBarAppearanceUpdate](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.
