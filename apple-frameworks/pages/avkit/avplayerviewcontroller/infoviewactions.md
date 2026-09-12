> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/infoviewactions](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/infoviewactions)

# infoViewActions (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+ · visionOS 1.0+

An array of actions to present in the Info content view.

## Declaration

```swift
var infoViewActions: [UIAction]! { get set }
```

## Mentioned In

- [Adopting the system player interface in visionOS](../adopting-the-system-player-interface-in-visionos.md)
- [Customizing the tvOS Playback Experience](../customizing-the-tvos-playback-experience.md)

<a id="Discussion"></a>

## Discussion

The Info content view can display up to two custom action controls along its trailing edge. The default value of this property is a single action that plays the current media from the beginning when tapped.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.

# infoViewActions (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+ · visionOS 1.0+

An array of actions to present in the Info content view.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSArray<UIAction *> * infoViewActions;
```

## Mentioned In

- [Adopting the system player interface in visionOS](../adopting-the-system-player-interface-in-visionos.md)
- [Customizing the tvOS Playback Experience](../customizing-the-tvos-playback-experience.md)

<a id="Discussion"></a>

## Discussion

The Info content view can display up to two custom action controls along its trailing edge. The default value of this property is a single action that plays the current media from the beginning when tapped.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.
