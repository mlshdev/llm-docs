> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/transportbarincludestitleview](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/transportbarincludestitleview)

# transportBarIncludesTitleView (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+

A Boolean value that indicates whether the player user interface shows the title view above the scrubber.

## Declaration

```swift
var transportBarIncludesTitleView: Bool { get set }
```

## Mentioned In

- [Customizing the tvOS Playback Experience](../customizing-the-tvos-playback-experience.md)

<a id="Discussion"></a>

## Discussion

By default, the player presents a title view. This view displays title ([commonIdentifierTitle](../../avfoundation/avmetadataidentifier/commonidentifiertitle.md)) and subtitle ([iTunesMetadataTrackSubTitle](../../avfoundation/avmetadataidentifier/itunesmetadatatracksubtitle.md)) metadata embedded in a media asset or set as a player item’s [externalMetadata](../../avfoundation/avplayeritem/externalmetadata.md).

The view controller ignores this property when [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md) is `false`.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.

# transportBarIncludesTitleView (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+

A Boolean value that indicates whether the player user interface shows the title view above the scrubber.

## Declaration

```objectivec
@property (nonatomic) BOOL transportBarIncludesTitleView;
```

## Mentioned In

- [Customizing the tvOS Playback Experience](../customizing-the-tvos-playback-experience.md)

<a id="Discussion"></a>

## Discussion

By default, the player presents a title view. This view displays title ([AVMetadataCommonIdentifierTitle](../../avfoundation/avmetadataidentifier/commonidentifiertitle.md)) and subtitle ([AVMetadataIdentifieriTunesMetadataTrackSubTitle](../../avfoundation/avmetadataidentifier/itunesmetadatatracksubtitle.md)) metadata embedded in a media asset or set as a player item’s [externalMetadata](../../avfoundation/avplayeritem/externalmetadata.md).

The view controller ignores this property when [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md) is `false`.

## See Also

### Customizing the tvOS player UI

- [playbackControlsIncludeTransportBar](playbackcontrolsincludetransportbar.md): A Boolean value that indicates whether the player shows the transport bar and related controls.
- [playbackControlsIncludeInfoViews](playbackcontrolsincludeinfoviews.md): A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when someone requests them.
- [transportBarCustomMenuItems](transportbarcustommenuitems.md): An array of actions and menus to display with the default player controls.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [customOverlayViewController](customoverlayviewcontroller.md): A view controller that presents custom content over the player view.
- [unobscuredContentGuide](unobscuredcontentguide.md): A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.
- [customInfoViewController](custominfoviewcontroller.md): Deprecated. A view controller that provides client-specific content and controls alongside system-provided information and settings panels.
