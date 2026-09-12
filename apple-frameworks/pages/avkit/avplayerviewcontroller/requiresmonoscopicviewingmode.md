> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/requiresmonoscopicviewingmode](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/requiresmonoscopicviewingmode)

# requiresMonoscopicViewingMode (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether to permit playback of 2D video content only.

## Declaration

```swift
var requiresMonoscopicViewingMode: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsInfoView](contextualactionsinfoview.md): A view the system shows adjacent to the contextual actions that’s suitable for showing related information.
- [contextualActionsPreviewImage](contextualactionspreviewimage.md): An image to show alongside the contextual actions.
- [experienceController](experiencecontroller.md): The experience controller for this view controller.
- [groupExperienceCoordinator](groupexperiencecoordinator.md): The group experience coordinator for this view controller.
- [viewport](viewport.md): A configuration object that manages viewport settings for different presentation modes.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.

# requiresMonoscopicViewingMode (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether to permit playback of 2D video content only.

## Declaration

```objectivec
@property (nonatomic) BOOL requiresMonoscopicViewingMode;
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsInfoView](contextualactionsinfoview.md): A view the system shows adjacent to the contextual actions that’s suitable for showing related information.
- [contextualActionsPreviewImage](contextualactionspreviewimage.md): An image to show alongside the contextual actions.
- [groupExperienceCoordinator](groupexperiencecoordinator.md): The group experience coordinator for this view controller.
- [viewport](viewport.md): A configuration object that manages viewport settings for different presentation modes.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
