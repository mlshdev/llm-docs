> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/childforstatusbarhidden](https://developer.apple.com/documentation/uikit/uiviewcontroller/childforstatusbarhidden)

# childForStatusBarHidden (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ (deprecated in 1.0)

The view controller to use for determining the hidden state of the status bar.

## Declaration

```swift
var childForStatusBarHidden: UIViewController? { get }
```

<a id="Discussion"></a>

## Discussion

If your container view controller derives the hidden state of the status bar from one of its child view controllers, implement this property to specify which child view controller you want to control the hidden/unhidden state. If you return `nil` or don’t override this property, the status bar hidden/unhidden state for `self` is used.

Call [setNeedsStatusBarAppearanceUpdate()](setneedsstatusbarappearanceupdate%28%29.md) if the child view controller for determining the hidden state of the status bar changes.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate()](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.

# childViewControllerForStatusBarHidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+

The view controller to use for determining the hidden state of the status bar.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIViewController * childViewControllerForStatusBarHidden;
```

<a id="Discussion"></a>

## Discussion

If your container view controller derives the hidden state of the status bar from one of its child view controllers, implement this property to specify which child view controller you want to control the hidden/unhidden state. If you return `nil` or don’t override this property, the status bar hidden/unhidden state for `self` is used.

Call [setNeedsStatusBarAppearanceUpdate](setneedsstatusbarappearanceupdate%28%29.md) if the child view controller for determining the hidden state of the status bar changes.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childViewControllerForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.
