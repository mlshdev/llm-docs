> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/contextualactions](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/contextualactions)

# contextualActions (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+ · visionOS 1.0+

An array of action controls to present contextually during playback.

## Declaration

```swift
var contextualActions: [UIAction] { get set }
```

## Mentioned In

- [Adopting the system player interface in visionOS](../adopting-the-system-player-interface-in-visionos.md)
- [Customizing the tvOS Playback Experience](../customizing-the-tvos-playback-experience.md)

<a id="Discussion"></a>

## Discussion

Use this property to present action controls for a specific time in the presentation, such as showing a Skip Intro button during a title sequence. Have your app observe the player’s timing, and when playback reaches a point at which to present controls, set the property value to one or more custom actions. To dismiss the controls, set this property value back to an empty array.

For details about observing player timing, see `Observing the Playback Time`.

> **Note**

>  The view controller presents contextual actions only when the transport bar isn’t visible.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.

# contextualActions (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+ · visionOS 1.0+

An array of action controls to present contextually during playback.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<UIAction *> * contextualActions;
```

## Mentioned In

- [Adopting the system player interface in visionOS](../adopting-the-system-player-interface-in-visionos.md)
- [Customizing the tvOS Playback Experience](../customizing-the-tvos-playback-experience.md)

<a id="Discussion"></a>

## Discussion

Use this property to present action controls for a specific time in the presentation, such as showing a Skip Intro button during a title sequence. Have your app observe the player’s timing, and when playback reaches a point at which to present controls, set the property value to one or more custom actions. To dismiss the controls, set this property value back to an empty array.

For details about observing player timing, see `Observing the Playback Time`.

> **Note**

>  The view controller presents contextual actions only when the transport bar isn’t visible.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.
