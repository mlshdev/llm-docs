> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/viewport](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/viewport)

# viewport (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

A configuration object that manages viewport settings for different presentation modes.

## Declaration

```swift
var viewport: AVViewport { get }
```

<a id="Discussion"></a>

## Discussion

Set [portal](../avviewport/portal.md) to control the aspect ratio of the frame the system uses for a portal presentation. When you don’t specify an aspect ratio, the portal defaults to 16:9 (1.78).

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsInfoView](contextualactionsinfoview.md): A view the system shows adjacent to the contextual actions that’s suitable for showing related information.
- [contextualActionsPreviewImage](contextualactionspreviewimage.md): An image to show alongside the contextual actions.
- [requiresMonoscopicViewingMode](requiresmonoscopicviewingmode.md): A Boolean value that indicates whether to permit playback of 2D video content only.
- [experienceController](experiencecontroller.md): The experience controller for this view controller.
- [groupExperienceCoordinator](groupexperiencecoordinator.md): The group experience coordinator for this view controller.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.

# viewport (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

A configuration object that manages viewport settings for different presentation modes.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) AVViewport * viewport;
```

<a id="Discussion"></a>

## Discussion

Set [portal](../avviewport/portal.md) to control the aspect ratio of the frame the system uses for a portal presentation. When you don’t specify an aspect ratio, the portal defaults to 16:9 (1.78).

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsInfoView](contextualactionsinfoview.md): A view the system shows adjacent to the contextual actions that’s suitable for showing related information.
- [contextualActionsPreviewImage](contextualactionspreviewimage.md): An image to show alongside the contextual actions.
- [requiresMonoscopicViewingMode](requiresmonoscopicviewingmode.md): A Boolean value that indicates whether to permit playback of 2D video content only.
- [groupExperienceCoordinator](groupexperiencecoordinator.md): The group experience coordinator for this view controller.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
