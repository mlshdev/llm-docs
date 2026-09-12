> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/contextualactionsinfoview](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/contextualactionsinfoview)

# contextualActionsInfoView (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A view the system shows adjacent to the contextual actions that’s suitable for showing related information.

## Declaration

```swift
var contextualActionsInfoView: UIView { get }
```

<a id="Discussion"></a>

## Discussion

Use this view to add additional metadata, information, and artwork as subviews.

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsPreviewImage](contextualactionspreviewimage.md): An image to show alongside the contextual actions.
- [requiresMonoscopicViewingMode](requiresmonoscopicviewingmode.md): A Boolean value that indicates whether to permit playback of 2D video content only.
- [experienceController](experiencecontroller.md): The experience controller for this view controller.
- [groupExperienceCoordinator](groupexperiencecoordinator.md): The group experience coordinator for this view controller.
- [viewport](viewport.md): A configuration object that manages viewport settings for different presentation modes.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.

# contextualActionsInfoView (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A view the system shows adjacent to the contextual actions that’s suitable for showing related information.

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * contextualActionsInfoView;
```

<a id="Discussion"></a>

## Discussion

Use this view to add additional metadata, information, and artwork as subviews.

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsPreviewImage](contextualactionspreviewimage.md): An image to show alongside the contextual actions.
- [requiresMonoscopicViewingMode](requiresmonoscopicviewingmode.md): A Boolean value that indicates whether to permit playback of 2D video content only.
- [groupExperienceCoordinator](groupexperiencecoordinator.md): The group experience coordinator for this view controller.
- [viewport](viewport.md): A configuration object that manages viewport settings for different presentation modes.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
