> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/prefersstatusbarhidden](https://developer.apple.com/documentation/uikit/uiviewcontroller/prefersstatusbarhidden)

# prefersStatusBarHidden (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ (deprecated in 1.0)

Specifies whether the view controller prefers the status bar to be hidden or shown.

## Declaration

```swift
var prefersStatusBarHidden: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the status bar should be hidden or [false](https://developer.apple.com/documentation/swift/false) if it should be shown.

<a id="Discussion"></a>

## Discussion

If you change the return value for this method, call the [setNeedsStatusBarAppearanceUpdate()](setneedsstatusbarappearanceupdate%28%29.md) method. To specify that a child view controller should control preferred status bar hidden/unhidden state, implement the [childForStatusBarHidden](childforstatusbarhidden.md) method.

By default, this method returns [false](https://developer.apple.com/documentation/swift/false) with one exception. For apps linked against iOS 8 or later, this method returns [true](https://developer.apple.com/documentation/swift/true) if the view controller is in a vertically compact environment.

## See Also

### Managing the status bar

- [childForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate()](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.

# prefersStatusBarHidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ (deprecated in 1.0)

Specifies whether the view controller prefers the status bar to be hidden or shown.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL prefersStatusBarHidden;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the status bar should be hidden or [false](https://developer.apple.com/documentation/swift/false) if it should be shown.

<a id="Discussion"></a>

## Discussion

If you change the return value for this method, call the [setNeedsStatusBarAppearanceUpdate](setneedsstatusbarappearanceupdate%28%29.md) method. To specify that a child view controller should control preferred status bar hidden/unhidden state, implement the [childViewControllerForStatusBarHidden](childforstatusbarhidden.md) method.

By default, this method returns [false](https://developer.apple.com/documentation/swift/false) with one exception. For apps linked against iOS 8 or later, this method returns [true](https://developer.apple.com/documentation/swift/true) if the view controller is in a vertically compact environment.

## See Also

### Managing the status bar

- [childViewControllerForStatusBarHidden](childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childViewControllerForStatusBarStyle](childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [UIStatusBarStyle](../uistatusbarstyle.md): Constants that describe the style of the device’s status bar.
- [modalPresentationCapturesStatusBarAppearance](modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate](setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.
