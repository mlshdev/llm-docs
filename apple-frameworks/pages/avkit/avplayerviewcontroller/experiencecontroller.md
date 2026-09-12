> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/experiencecontroller](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/experiencecontroller)

# experienceController

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The experience controller for this view controller.

## Declaration

```swift
@MainActor @preconcurrency var experienceController: AVExperienceController { get }
```

<a id="Discussion"></a>

## Discussion

Use an experience controller to transition a player to different experiences and observe experience transitions.

The use of the experience controller is mutually exclusive with a view controller’s existing API for managing the experience. After accessing the `experienceController` property, those methods log an error and have no effect. Attempting to access this property may fail if you use these mutually exclusive properties and methods together.

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsInfoView](contextualactionsinfoview.md): A view the system shows adjacent to the contextual actions that’s suitable for showing related information.
- [contextualActionsPreviewImage](contextualactionspreviewimage.md): An image to show alongside the contextual actions.
- [requiresMonoscopicViewingMode](requiresmonoscopicviewingmode.md): A Boolean value that indicates whether to permit playback of 2D video content only.
- [groupExperienceCoordinator](groupexperiencecoordinator.md): The group experience coordinator for this view controller.
- [viewport](viewport.md): A configuration object that manages viewport settings for different presentation modes.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
