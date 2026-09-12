> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/groupexperiencecoordinator](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/groupexperiencecoordinator)

# groupExperienceCoordinator (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The group experience coordinator for this view controller.

## Declaration

```swift
var groupExperienceCoordinator: AVGroupExperienceCoordinator { get }
```

<a id="discussion"></a>

## Discussion

Use this property to coordinate a group experience among participating view controllers.

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsInfoView](contextualactionsinfoview.md): A view the system shows adjacent to the contextual actions that’s suitable for showing related information.
- [contextualActionsPreviewImage](contextualactionspreviewimage.md): An image to show alongside the contextual actions.
- [requiresMonoscopicViewingMode](requiresmonoscopicviewingmode.md): A Boolean value that indicates whether to permit playback of 2D video content only.
- [experienceController](experiencecontroller.md): The experience controller for this view controller.
- [viewport](viewport.md): A configuration object that manages viewport settings for different presentation modes.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.

# groupExperienceCoordinator (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The group experience coordinator for this view controller.

## Declaration

```objectivec
@property (nonatomic, readonly) AVGroupExperienceCoordinator * groupExperienceCoordinator;
```

<a id="discussion"></a>

## Discussion

Use this property to coordinate a group experience among participating view controllers.

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsInfoView](contextualactionsinfoview.md): A view the system shows adjacent to the contextual actions that’s suitable for showing related information.
- [contextualActionsPreviewImage](contextualactionspreviewimage.md): An image to show alongside the contextual actions.
- [requiresMonoscopicViewingMode](requiresmonoscopicviewingmode.md): A Boolean value that indicates whether to permit playback of 2D video content only.
- [viewport](viewport.md): A configuration object that manages viewport settings for different presentation modes.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
