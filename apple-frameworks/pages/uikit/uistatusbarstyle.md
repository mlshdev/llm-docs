> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistatusbarstyle](https://developer.apple.com/documentation/uikit/uistatusbarstyle)

# UIStatusBarStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that describe the style of the device’s status bar.

## Declaration

```swift
enum UIStatusBarStyle
```

## Topics

### Constants

- [UIStatusBarStyle.default](uistatusbarstyle/default.md): A style that automatically selects an appearance for the status bar and updates it dynamically to maintain contrast with the content below it.
- [UIStatusBarStyle.lightContent](uistatusbarstyle/lightcontent.md): A light status bar, intended for use on dark backgrounds.
- [UIStatusBarStyle.darkContent](uistatusbarstyle/darkcontent.md): A dark status bar, intended for use on light backgrounds.

### Initializers

- [init(rawValue:)](uistatusbarstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the status bar

- [prefersStatusBarHidden](uiviewcontroller/prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childForStatusBarHidden](uiviewcontroller/childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childForStatusBarStyle](uiviewcontroller/childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](uiviewcontroller/preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [modalPresentationCapturesStatusBarAppearance](uiviewcontroller/modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](uiviewcontroller/preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate()](uiviewcontroller/setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.

# UIStatusBarStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that describe the style of the device’s status bar.

## Declaration

```objectivec
enum UIStatusBarStyle : NSInteger;
```

## Topics

### Constants

- [UIStatusBarStyleDefault](uistatusbarstyle/default.md): A style that automatically selects an appearance for the status bar and updates it dynamically to maintain contrast with the content below it.
- [UIStatusBarStyleLightContent](uistatusbarstyle/lightcontent.md): A light status bar, intended for use on dark backgrounds.
- [UIStatusBarStyleDarkContent](uistatusbarstyle/darkcontent.md): A dark status bar, intended for use on light backgrounds.

### Deprecated

- [UIStatusBarStyleBlackTranslucent](uistatusbarstyle/uistatusbarstyleblacktranslucent.md): Deprecated. A transparent black style.
- [UIStatusBarStyleBlackOpaque](uistatusbarstyle/uistatusbarstyleblackopaque.md): Deprecated. An opaque black style.

## See Also

### Managing the status bar

- [prefersStatusBarHidden](uiviewcontroller/prefersstatusbarhidden.md): Deprecated. Specifies whether the view controller prefers the status bar to be hidden or shown.
- [childViewControllerForStatusBarHidden](uiviewcontroller/childforstatusbarhidden.md): Deprecated. The view controller to use for determining the hidden state of the status bar.
- [childViewControllerForStatusBarStyle](uiviewcontroller/childforstatusbarstyle.md): Deprecated. Called when the system needs the view controller to use for determining status bar style.
- [preferredStatusBarStyle](uiviewcontroller/preferredstatusbarstyle.md): Deprecated. The preferred status bar style for the view controller.
- [modalPresentationCapturesStatusBarAppearance](uiviewcontroller/modalpresentationcapturesstatusbarappearance.md): Specifies whether a view controller, presented non-fullscreen, takes over control of status bar appearance from the presenting view controller.
- [preferredStatusBarUpdateAnimation](uiviewcontroller/preferredstatusbarupdateanimation.md): Deprecated. Specifies the animation style to use for hiding and showing the status bar for the view controller.
- [setNeedsStatusBarAppearanceUpdate](uiviewcontroller/setneedsstatusbarappearanceupdate%28%29.md): Indicates to the system that the view controller status bar attributes have changed.
