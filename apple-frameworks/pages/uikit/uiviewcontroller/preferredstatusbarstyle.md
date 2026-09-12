> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/preferredstatusbarstyle](https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredstatusbarstyle)

# preferredStatusBarStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ (deprecated in 1.0)

The preferred status bar style for the view controller.

## Declaration

```swift
var preferredStatusBarStyle: UIStatusBarStyle { get }
```

<a id="return-value"></a>

## Return Value

A [UIStatusBarStyle](../uistatusbarstyle.md) key indicating your preferred status bar style for the view controller.

<a id="Discussion"></a>

## Discussion

You can override the preferred status bar style for a view controller by implementing the [childForStatusBarStyle](childforstatusbarstyle.md) method.

If the return value from this method changes, call the [setNeedsStatusBarAppearanceUpdate()](setneedsstatusbarappearanceupdate%28%29.md) method.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate()](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.

# preferredStatusBarStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ (deprecated in 1.0)

The preferred status bar style for the view controller.

## Declaration

```objectivec
@property (nonatomic, readonly) UIStatusBarStyle preferredStatusBarStyle;
```

<a id="return-value"></a>

## Return Value

A [UIStatusBarStyle](../uistatusbarstyle.md) key indicating your preferred status bar style for the view controller.

<a id="Discussion"></a>

## Discussion

You can override the preferred status bar style for a view controller by implementing the [childViewControllerForStatusBarStyle](childforstatusbarstyle.md) method.

If the return value from this method changes, call the [setNeedsStatusBarAppearanceUpdate](setneedsstatusbarappearanceupdate%28%29.md) method.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childViewControllerForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childViewControllerForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.
