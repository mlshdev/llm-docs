> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/customoverlayviewcontroller](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/customoverlayviewcontroller)

# customOverlayViewController (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

A view controller that presents custom content over the player view.

## Declaration

```swift
var customOverlayViewController: UIViewController? { get set }
```

<a id="Discussion"></a>

## Discussion

The system presents the overlay view when the user swipes up on the Siri Remote during playback when the transport bar is hidden, or when they select a button when the transport bar is visible.

> **Important**

>  Set a custom overlay view controller instead of installing a custom swipe gesture recognizer.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.

# customOverlayViewController (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

A view controller that presents custom content over the player view.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIViewController * customOverlayViewController;
```

<a id="Discussion"></a>

## Discussion

The system presents the overlay view when the user swipes up on the Siri Remote during playback when the transport bar is hidden, or when they select a button when the transport bar is visible.

> **Important**

>  Set a custom overlay view controller instead of installing a custom swipe gesture recognizer.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.
