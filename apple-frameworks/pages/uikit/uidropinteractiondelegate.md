> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropinteractiondelegate](https://developer.apple.com/documentation/uikit/uidropinteractiondelegate)

# UIDropInteractionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for configuring and controlling a drop interaction.

## Declaration

```swift
@MainActor protocol UIDropInteractionDelegate : NSObjectProtocol
```

## Mentioned In

- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)
- [Understanding a drag item as a promise](understanding-a-drag-item-as-a-promise.md)

## Topics

### Handling the drop

- [dropInteraction(\_:canHandle:)](uidropinteractiondelegate/dropinteraction%28__canhandle_%29.md): Asks the delegate whether it can handle the session’s drag items.
- [dropInteraction(\_:performDrop:)](uidropinteractiondelegate/dropinteraction%28__performdrop_%29.md): Tells the delegate it can request the item provider data from the session’s drag items.

### Tracking the drop movements

- [dropInteraction(\_:sessionDidEnter:)](uidropinteractiondelegate/dropinteraction%28__sessiondidenter_%29.md): Tells the delegate the drop session has moved into the drop interaction’s view.
- [dropInteraction(\_:sessionDidUpdate:)](uidropinteractiondelegate/dropinteraction%28__sessiondidupdate_%29.md): Tells the delegate the drop session has changed.
- [dropInteraction(\_:sessionDidExit:)](uidropinteractiondelegate/dropinteraction%28__sessiondidexit_%29.md): Tells the delegate the drop session has moved out of the drop interaction’s view.
- [dropInteraction(\_:sessionDidEnd:)](uidropinteractiondelegate/dropinteraction%28__sessiondidend_%29.md): Tells the delegate the drop session has ended.

### Animating the drop

- [dropInteraction(\_:item:willAnimateDropWith:)](uidropinteractiondelegate/dropinteraction%28__item_willanimatedropwith_%29.md): Tells the delegate the system’s drop animation is about to start.
- [dropInteraction(\_:previewForDropping:withDefault:)](uidropinteractiondelegate/dropinteraction%28__previewfordropping_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the drop animation.
- [dropInteraction(\_:concludeDrop:)](uidropinteractiondelegate/dropinteraction%28__concludedrop_%29.md): Tells the delegate the drop activity and its related animations have finished.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop interactions

- [UIDragInteractionDelegate](uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.
- [UIDragInteraction](uidraginteraction.md): An interaction to enable dragging of items from a view, employing a delegate to provide drag items and to respond to calls from the drag session.
- [UIDropInteraction](uidropinteraction.md): An interaction to enable dropping of items onto a view, employing a delegate to instantiate objects and respond to calls from the drop session.

# UIDropInteractionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for configuring and controlling a drop interaction.

## Declaration

```objectivec
@protocol UIDropInteractionDelegate <NSObject>
```

## Mentioned In

- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)
- [Understanding a drag item as a promise](understanding-a-drag-item-as-a-promise.md)

## Topics

### Handling the drop

- [dropInteraction:canHandleSession:](uidropinteractiondelegate/dropinteraction%28__canhandle_%29.md): Asks the delegate whether it can handle the session’s drag items.
- [dropInteraction:performDrop:](uidropinteractiondelegate/dropinteraction%28__performdrop_%29.md): Tells the delegate it can request the item provider data from the session’s drag items.

### Tracking the drop movements

- [dropInteraction:sessionDidEnter:](uidropinteractiondelegate/dropinteraction%28__sessiondidenter_%29.md): Tells the delegate the drop session has moved into the drop interaction’s view.
- [dropInteraction:sessionDidUpdate:](uidropinteractiondelegate/dropinteraction%28__sessiondidupdate_%29.md): Tells the delegate the drop session has changed.
- [dropInteraction:sessionDidExit:](uidropinteractiondelegate/dropinteraction%28__sessiondidexit_%29.md): Tells the delegate the drop session has moved out of the drop interaction’s view.
- [dropInteraction:sessionDidEnd:](uidropinteractiondelegate/dropinteraction%28__sessiondidend_%29.md): Tells the delegate the drop session has ended.

### Animating the drop

- [dropInteraction:item:willAnimateDropWithAnimator:](uidropinteractiondelegate/dropinteraction%28__item_willanimatedropwith_%29.md): Tells the delegate the system’s drop animation is about to start.
- [dropInteraction:previewForDroppingItem:withDefault:](uidropinteractiondelegate/dropinteraction%28__previewfordropping_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the drop animation.
- [dropInteraction:concludeDrop:](uidropinteractiondelegate/dropinteraction%28__concludedrop_%29.md): Tells the delegate the drop activity and its related animations have finished.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop interactions

- [UIDragInteractionDelegate](uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.
- [UIDragInteraction](uidraginteraction.md): An interaction to enable dragging of items from a view, employing a delegate to provide drag items and to respond to calls from the drag session.
- [UIDropInteraction](uidropinteraction.md): An interaction to enable dropping of items onto a view, employing a delegate to instantiate objects and respond to calls from the drop session.
