> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinteraction](https://developer.apple.com/documentation/uikit/uiinteraction)

# UIInteraction (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The protocol that an interaction implements to access the view that owns it.

## Declaration

```swift
@MainActor protocol UIInteraction : NSObjectProtocol
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](adding-writing-tools-support-to-a-custom-uiview.md)

## Topics

### Getting the View

- [view](uiinteraction/view.md): The view that owns the interaction.

### Tracking the Movements

- [didMove(to:)](uiinteraction/didmove%28to_%29.md): Tells the interaction that a view added or removed it from the view’s interactions array.
- [willMove(to:)](uiinteraction/willmove%28to_%29.md): Tells the interaction that a view will add or remove it from the view’s interactions array.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIBandSelectionInteraction](uibandselectioninteraction.md)
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md)
- [UIContextMenuInteraction](uicontextmenuinteraction.md)
- [UIDragInteraction](uidraginteraction.md)
- [UIDropInteraction](uidropinteraction.md)
- [UIEditMenuInteraction](uieditmenuinteraction.md)
- [UIFeedbackGenerator](uifeedbackgenerator.md)
- [UIFindInteraction](uifindinteraction.md)
- [UIImpactFeedbackGenerator](uiimpactfeedbackgenerator.md)
- [UIIndirectScribbleInteraction](uiindirectscribbleinteraction-1nfjm.md)
- [UILargeContentViewerInteraction](uilargecontentviewerinteraction.md)
- [UILookToScrollInteraction](uilooktoscrollinteraction.md)
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md)
- [UIPencilInteraction](uipencilinteraction.md)
- [UIPointerInteraction](uipointerinteraction.md)
- [UIScribbleInteraction](uiscribbleinteraction.md)
- [UIScrollEdgeElementContainerInteraction](uiscrolledgeelementcontainerinteraction.md)
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md)
- [UISpringLoadedInteraction](uispringloadedinteraction.md)
- [UITextInteraction](uitextinteraction.md)
- [UITextSelectionDisplayInteraction](uitextselectiondisplayinteraction.md)
- [UIToolTipInteraction](uitooltipinteraction.md)
- [UIWindowScene.ActivationInteraction](uiwindowscene/activationinteraction.md)
- [UIWindowSceneDragInteraction](uiwindowscenedraginteraction.md)
- [UIWritingToolsCoordinator](uiwritingtoolscoordinator.md)

## See Also

### Adding and removing interactions

- [addInteraction(\_:)](uiview/addinteraction%28__%29.md): Adds an interaction to the view.
- [removeInteraction(\_:)](uiview/removeinteraction%28__%29.md): Removes an interaction from the view.
- [interactions](uiview/interactions.md): The array of interactions for the view.

# UIInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The protocol that an interaction implements to access the view that owns it.

## Declaration

```objectivec
@protocol UIInteraction <NSObject>
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](adding-writing-tools-support-to-a-custom-uiview.md)

## Topics

### Getting the View

- [view](uiinteraction/view.md): The view that owns the interaction.

### Tracking the Movements

- [didMoveToView:](uiinteraction/didmove%28to_%29.md): Tells the interaction that a view added or removed it from the view’s interactions array.
- [willMoveToView:](uiinteraction/willmove%28to_%29.md): Tells the interaction that a view will add or remove it from the view’s interactions array.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIBandSelectionInteraction](uibandselectioninteraction.md)
- [UIContextMenuInteraction](uicontextmenuinteraction.md)
- [UIDragInteraction](uidraginteraction.md)
- [UIDropInteraction](uidropinteraction.md)
- [UIEditMenuInteraction](uieditmenuinteraction.md)
- [UIFeedbackGenerator](uifeedbackgenerator.md)
- [UIFindInteraction](uifindinteraction.md)
- [UIIndirectScribbleInteraction](uiindirectscribbleinteraction-2dap8.md)
- [UILargeContentViewerInteraction](uilargecontentviewerinteraction.md)
- [UILookToScrollInteraction](uilooktoscrollinteraction.md)
- [UIPencilInteraction](uipencilinteraction.md)
- [UIPointerInteraction](uipointerinteraction.md)
- [UIScribbleInteraction](uiscribbleinteraction.md)
- [UIScrollEdgeElementContainerInteraction](uiscrolledgeelementcontainerinteraction.md)
- [UISpringLoadedInteraction](uispringloadedinteraction.md)
- [UITextInteraction](uitextinteraction.md)
- [UITextSelectionDisplayInteraction](uitextselectiondisplayinteraction.md)
- [UIToolTipInteraction](uitooltipinteraction.md)
- [UIWindowSceneActivationInteraction](uiwindowscene/activationinteraction.md)
- [UIWindowSceneDragInteraction](uiwindowscenedraginteraction.md)
- [UIWritingToolsCoordinator](uiwritingtoolscoordinator.md)

## See Also

### Adding and removing interactions

- [addInteraction:](uiview/addinteraction%28__%29.md): Adds an interaction to the view.
- [removeInteraction:](uiview/removeinteraction%28__%29.md): Removes an interaction from the view.
- [interactions](uiview/interactions.md): The array of interactions for the view.
