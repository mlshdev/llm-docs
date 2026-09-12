> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/playbackcontrolsincludeinfoviews](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/playbackcontrolsincludeinfoviews)

# playbackControlsIncludeInfoViews (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.

## Declaration

```swift
var playbackControlsIncludeInfoViews: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines whether the player shows views for video metadata, navigation markers, and playback settings. Set this property value to `false`, and [showsPlaybackControls](showsplaybackcontrols.md) to `true`, to selectively prevent the player from displaying its information and setting panels. Changing the value of this property doesn’t immediately change the visibility of the info views.

The default value is `true`.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.

# playbackControlsIncludeInfoViews (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.

## Declaration

```objectivec
@property (nonatomic) BOOL playbackControlsIncludeInfoViews;
```

<a id="Discussion"></a>

## Discussion

This property determines whether the player shows views for video metadata, navigation markers, and playback settings. Set this property value to `false`, and [showsPlaybackControls](showsplaybackcontrols.md) to `true`, to selectively prevent the player from displaying its information and setting panels. Changing the value of this property doesn’t immediately change the visibility of the info views.

The default value is `true`.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.
