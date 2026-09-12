> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/contextualactionspreviewimage](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/contextualactionspreviewimage)

# contextualActionsPreviewImage (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

An image to show alongside the contextual actions.

## Declaration

```swift
@NSCopying var contextualActionsPreviewImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this to enhance a contextual action with more context. For example, if the action presents a button to jump back in time, show a preview frame of where in the movie the action skips to.

> **Note**

>  The system only displays an image if the [contextualActions](contextualactions.md) property contains a single value.

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsInfoView](contextualactionsinfoview.md): A view the system shows adjacent to the contextual actions that’s suitable for showing related information.
- [requiresMonoscopicViewingMode](requiresmonoscopicviewingmode.md): A Boolean value that indicates whether to permit playback of 2D video content only.
- [experienceController](experiencecontroller.md): The experience controller for this view controller.
- [groupExperienceCoordinator](groupexperiencecoordinator.md): The group experience coordinator for this view controller.
- [viewport](viewport.md): A configuration object that manages viewport settings for different presentation modes.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.

# contextualActionsPreviewImage (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

An image to show alongside the contextual actions.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIImage * contextualActionsPreviewImage;
```

<a id="Discussion"></a>

## Discussion

Use this to enhance a contextual action with more context. For example, if the action presents a button to jump back in time, show a preview frame of where in the movie the action skips to.

> **Note**

>  The system only displays an image if the [contextualActions](contextualactions.md) property contains a single value.

## See Also

### Configuring the visionOS player UI

- [infoViewActions](infoviewactions.md): An array of actions to present in the Info content view.
- [customInfoViewControllers](custominfoviewcontrollers.md): An array of view controllers to display as content tabs in the player user interface.
- [contextualActions](contextualactions.md): An array of action controls to present contextually during playback.
- [contextualActionsInfoView](contextualactionsinfoview.md): A view the system shows adjacent to the contextual actions that’s suitable for showing related information.
- [requiresMonoscopicViewingMode](requiresmonoscopicviewingmode.md): A Boolean value that indicates whether to permit playback of 2D video content only.
- [groupExperienceCoordinator](groupexperiencecoordinator.md): The group experience coordinator for this view controller.
- [viewport](viewport.md): A configuration object that manages viewport settings for different presentation modes.
- [AVViewport](../avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
