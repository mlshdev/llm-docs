> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/modalpresentationcapturesstatusbarappearance](https://developer.apple.com/documentation/uikit/uiviewcontroller/modalpresentationcapturesstatusbarappearance)

# modalPresentationCapturesStatusBarAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.

## Declaration

```swift
var modalPresentationCapturesStatusBarAppearance: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

When you present a view controller by calling the [present(\_:animated:completion:)](present%28__animated_completion_%29.md) method, status bar appearance control is transferred from the presenting to the presented view controller only if the presented controller’s [modalPresentationStyle](modalpresentationstyle.md) value is [UIModalPresentationStyle.fullScreen](../uimodalpresentationstyle/fullscreen.md). By setting this property to [true](https://developer.apple.com/documentation/swift/true), you specify the presented view controller controls status bar appearance, even though presented non-fullscreen.

The system ignores this property’s value for a view controller presented fullscreen.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate()](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.

# modalPresentationCapturesStatusBarAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL modalPresentationCapturesStatusBarAppearance;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

When you present a view controller by calling the [presentViewController:animated:completion:](present%28__animated_completion_%29.md) method, status bar appearance control is transferred from the presenting to the presented view controller only if the presented controller’s [modalPresentationStyle](modalpresentationstyle.md) value is [UIModalPresentationFullScreen](../uimodalpresentationstyle/fullscreen.md). By setting this property to [true](https://developer.apple.com/documentation/swift/true), you specify the presented view controller controls status bar appearance, even though presented non-fullscreen.

The system ignores this property’s value for a view controller presented fullscreen.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childViewControllerForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childViewControllerForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.
