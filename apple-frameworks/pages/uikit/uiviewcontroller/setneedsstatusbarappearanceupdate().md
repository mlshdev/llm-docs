> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setneedsstatusbarappearanceupdate()](https://developer.apple.com/documentation/uikit/uiviewcontroller/setneedsstatusbarappearanceupdate())

# setNeedsStatusBarAppearanceUpdate() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+

Indicates to the system that the view controller status bar attributes have changed.

## Declaration

```swift
func setNeedsStatusBarAppearanceUpdate()
```

<a id="Discussion"></a>

## Discussion

Call this method if the view controller’s status bar attributes, such as hidden/unhidden status or style, change. If you call this method within an animation block, the changes are animated along with the rest of the animation block.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.

# setNeedsStatusBarAppearanceUpdate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+

Indicates to the system that the view controller status bar attributes have changed.

## Declaration

```objectivec
- (void) setNeedsStatusBarAppearanceUpdate;
```

<a id="Discussion"></a>

## Discussion

Call this method if the view controller’s status bar attributes, such as hidden/unhidden status or style, change. If you call this method within an animation block, the changes are animated along with the rest of the animation block.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childViewControllerForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childViewControllerForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
