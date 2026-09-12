> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/transportbarcustommenuitems](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/transportbarcustommenuitems)

# transportBarCustomMenuItems (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+

An array of actions and menus to display with the default player controls.

## Declaration

```swift
var transportBarCustomMenuItems: [UIMenuElement] { get set }
```

## Mentioned In

- [Customizing the tvOS Playback Experience](../customizing-the-tvos-playback-experience.md)

<a id="Discussion"></a>

## Discussion

Use this property to display custom pop-up menus in transport bar. This property only supports menu elements of type [UIAction](../../uikit/uiaction.md) and [UIMenu](../../uikit/uimenu.md), and supports displaying inline one level of submenus.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.

# transportBarCustomMenuItems (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+

An array of actions and menus to display with the default player controls.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<__kindof UIMenuElement *> * transportBarCustomMenuItems;
```

## Mentioned In

- [Customizing the tvOS Playback Experience](../customizing-the-tvos-playback-experience.md)

<a id="Discussion"></a>

## Discussion

Use this property to display custom pop-up menus in transport bar. This property only supports menu elements of type [UIAction](../../uikit/uiaction.md) and [UIMenu](../../uikit/uimenu.md), and supports displaying inline one level of submenus.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarIncludesTitleView](transportbarincludestitleview.md): A Boolean value that indicates whether the player user interface shows the title view above the scrubber.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.
