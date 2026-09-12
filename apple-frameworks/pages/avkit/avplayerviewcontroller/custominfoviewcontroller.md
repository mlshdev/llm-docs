> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/custominfoviewcontroller](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/custominfoviewcontroller)

# customInfoViewController (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+ (deprecated in 15.0)

A view controller that provides client-specific content and controls alongside system-provided information and settings panels.

> Use [customInfoViewControllers](custominfoviewcontrollers.md) instead.

## Declaration

```swift
var customInfoViewController: UIViewController? { get set }
```

<a id="Discussion"></a>

## Discussion

Use [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) to provide the desired view size for the view.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.

# customInfoViewController (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+ (deprecated in 15.0)

A view controller that provides client-specific content and controls alongside system-provided information and settings panels.

> Use [customInfoViewControllers](custominfoviewcontrollers.md) instead.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIViewController * customInfoViewController;
```

<a id="Discussion"></a>

## Discussion

Use [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) to provide the desired view size for the view.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
