> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/custominfoviewcontrollers](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/custominfoviewcontrollers)

# customInfoViewControllers (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+ · visionOS 1.0+

An array of view controllers to display as content tabs in the player user interface.

## Declaration

```swift
var customInfoViewControllers: [UIViewController] { get set }
```

## Mentioned In

- [Adopting the system player interface in visionOS](../adopting-the-system-player-interface-in-visionos.md)
- [Customizing the tvOS Playback Experience](../customizing-the-tvos-playback-experience.md)

<a id="Discussion"></a>

## Discussion

The system uses a view controller’s [title](../../uikit/uiviewcontroller/title.md) property value as the content tab title. Set this property value before adding it to the array so that the title renders correctly in the player’s user interface.

Similarly, set a [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) value on the custom view controllers, or define appropriate auto layout constraints on their views, so the system sizes them correctly in the player user interface.

> **Important**

>  The view with the greatest height determines the height of all of the content views. Set the height of your content views consistently to simplify layout, or verify that your content renders as intended if the system resizes it.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.

# customInfoViewControllers (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+ · visionOS 1.0+

An array of view controllers to display as content tabs in the player user interface.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<UIViewController *> * customInfoViewControllers;
```

## Mentioned In

- [Adopting the system player interface in visionOS](../adopting-the-system-player-interface-in-visionos.md)
- [Customizing the tvOS Playback Experience](../customizing-the-tvos-playback-experience.md)

<a id="Discussion"></a>

## Discussion

The system uses a view controller’s [title](../../uikit/uiviewcontroller/title.md) property value as the content tab title. Set this property value before adding it to the array so that the title renders correctly in the player’s user interface.

Similarly, set a [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) value on the custom view controllers, or define appropriate auto layout constraints on their views, so the system sizes them correctly in the player user interface.

> **Important**

>  The view with the greatest height determines the height of all of the content views. Set the height of your content views consistently to simplify layout, or verify that your content renders as intended if the system resizes it.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.
