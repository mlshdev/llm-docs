> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate)

# UIDragInteractionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for configuring and controlling a drag interaction.

## Declaration

```swift
@MainActor protocol UIDragInteractionDelegate : NSObjectProtocol
```

## Mentioned In

- [Making a view into a drag source](making-a-view-into-a-drag-source.md)
- [Understanding a drag item as a promise](understanding-a-drag-item-as-a-promise.md)

## Topics

### Performing the drag

- [dragInteraction(\_:itemsForBeginning:)](uidraginteractiondelegate/draginteraction%28__itemsforbeginning_%29.md): Asks the delegate for the array of drag items for an impending drag interaction.
- [dragInteraction(\_:itemsForAddingTo:withTouchAt:)](uidraginteractiondelegate/draginteraction%28__itemsforaddingto_withtouchat_%29.md): Asks the delegate for the drag items to add to an in-progress drag session, in response to a user gesture to add the items.
- [dragInteraction(\_:sessionForAddingItems:withTouchAt:)](uidraginteractiondelegate/draginteraction%28__sessionforaddingitems_withtouchat_%29.md): Asks the delegate which drag session to add drag items to when there is more than one in-progress session.

### Animating the drag behaviors

- [dragInteraction(\_:willAnimateLiftWith:session:)](uidraginteractiondelegate/draginteraction%28__willanimateliftwith_session_%29.md): Tells the delegate the system’s lift animation is about to start.
- [dragInteraction(\_:item:willAnimateCancelWith:)](uidraginteractiondelegate/draginteraction%28__item_willanimatecancelwith_%29.md): Tells the delegate the system’s cancellation animation is about to start.

### Monitoring drag progress

- [dragInteraction(\_:sessionWillBegin:)](uidraginteractiondelegate/draginteraction%28__sessionwillbegin_%29.md): Tells the delegate the lift animation has finished and the user is starting to move the items across the screen.
- [dragInteraction(\_:session:willAdd:for:)](uidraginteractiondelegate/draginteraction%28__session_willadd_for_%29.md): Tells the delegate an interaction is about to add items to a drag session.
- [dragInteraction(\_:sessionDidMove:)](uidraginteractiondelegate/draginteraction%28__sessiondidmove_%29.md): Tells the delegate the user moved the drag items to a new location on the screen.
- [dragInteraction(\_:session:willEndWith:)](uidraginteractiondelegate/draginteraction%28__session_willendwith_%29.md): Tells the delegate the drag activity will end with the specified operation.
- [dragInteraction(\_:session:didEndWith:)](uidraginteractiondelegate/draginteraction%28__session_didendwith_%29.md): Tells the delegate the drag activity and its related animations have finished.
- [dragInteraction(\_:sessionDidTransferItems:)](uidraginteractiondelegate/draginteraction%28__sessiondidtransferitems_%29.md): Tells the delegate the destination view has received the data for the drag items.

### Providing drag previews

- [dragInteraction(\_:previewForLifting:session:)](uidraginteractiondelegate/draginteraction%28__previewforlifting_session_%29.md): Asks the delegate for the targeted drag item preview that will appear during the lift animation.
- [dragInteraction(\_:previewForCancelling:withDefault:)](uidraginteractiondelegate/draginteraction%28__previewforcancelling_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the cancellation animation.
- [dragInteraction(\_:prefersFullSizePreviewsFor:)](uidraginteractiondelegate/draginteraction%28__prefersfullsizepreviewsfor_%29.md): Asks the delegate whether the preview should appear in its original size or a scaled size.

### Restricting the drag behavior

- [dragInteraction(\_:sessionIsRestrictedToDraggingApplication:)](uidraginteractiondelegate/draginteraction%28__sessionisrestrictedtodraggingapplication_%29.md): Asks the delegate whether the system should restrict the drag session to the app that started the session.
- [dragInteraction(\_:sessionAllowsMoveOperation:)](uidraginteractiondelegate/draginteraction%28__sessionallowsmoveoperation_%29.md): Asks the delegate whether the session allows the move operation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop interactions

- [UIDropInteractionDelegate](uidropinteractiondelegate.md): The interface for configuring and controlling a drop interaction.
- [UIDragInteraction](uidraginteraction.md): An interaction to enable dragging of items from a view, employing a delegate to provide drag items and to respond to calls from the drag session.
- [UIDropInteraction](uidropinteraction.md): An interaction to enable dropping of items onto a view, employing a delegate to instantiate objects and respond to calls from the drop session.

# UIDragInteractionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for configuring and controlling a drag interaction.

## Declaration

```objectivec
@protocol UIDragInteractionDelegate <NSObject>
```

## Mentioned In

- [Making a view into a drag source](making-a-view-into-a-drag-source.md)
- [Understanding a drag item as a promise](understanding-a-drag-item-as-a-promise.md)

## Topics

### Performing the drag

- [dragInteraction:itemsForBeginningSession:](uidraginteractiondelegate/draginteraction%28__itemsforbeginning_%29.md): Asks the delegate for the array of drag items for an impending drag interaction.
- [dragInteraction:itemsForAddingToSession:withTouchAtPoint:](uidraginteractiondelegate/draginteraction%28__itemsforaddingto_withtouchat_%29.md): Asks the delegate for the drag items to add to an in-progress drag session, in response to a user gesture to add the items.
- [dragInteraction:sessionForAddingItems:withTouchAtPoint:](uidraginteractiondelegate/draginteraction%28__sessionforaddingitems_withtouchat_%29.md): Asks the delegate which drag session to add drag items to when there is more than one in-progress session.

### Animating the drag behaviors

- [dragInteraction:willAnimateLiftWithAnimator:session:](uidraginteractiondelegate/draginteraction%28__willanimateliftwith_session_%29.md): Tells the delegate the system’s lift animation is about to start.
- [dragInteraction:item:willAnimateCancelWithAnimator:](uidraginteractiondelegate/draginteraction%28__item_willanimatecancelwith_%29.md): Tells the delegate the system’s cancellation animation is about to start.

### Monitoring drag progress

- [dragInteraction:sessionWillBegin:](uidraginteractiondelegate/draginteraction%28__sessionwillbegin_%29.md): Tells the delegate the lift animation has finished and the user is starting to move the items across the screen.
- [dragInteraction:session:willAddItems:forInteraction:](uidraginteractiondelegate/draginteraction%28__session_willadd_for_%29.md): Tells the delegate an interaction is about to add items to a drag session.
- [dragInteraction:sessionDidMove:](uidraginteractiondelegate/draginteraction%28__sessiondidmove_%29.md): Tells the delegate the user moved the drag items to a new location on the screen.
- [dragInteraction:session:willEndWithOperation:](uidraginteractiondelegate/draginteraction%28__session_willendwith_%29.md): Tells the delegate the drag activity will end with the specified operation.
- [dragInteraction:session:didEndWithOperation:](uidraginteractiondelegate/draginteraction%28__session_didendwith_%29.md): Tells the delegate the drag activity and its related animations have finished.
- [dragInteraction:sessionDidTransferItems:](uidraginteractiondelegate/draginteraction%28__sessiondidtransferitems_%29.md): Tells the delegate the destination view has received the data for the drag items.

### Providing drag previews

- [dragInteraction:previewForLiftingItem:session:](uidraginteractiondelegate/draginteraction%28__previewforlifting_session_%29.md): Asks the delegate for the targeted drag item preview that will appear during the lift animation.
- [dragInteraction:previewForCancellingItem:withDefault:](uidraginteractiondelegate/draginteraction%28__previewforcancelling_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the cancellation animation.
- [dragInteraction:prefersFullSizePreviewsForSession:](uidraginteractiondelegate/draginteraction%28__prefersfullsizepreviewsfor_%29.md): Asks the delegate whether the preview should appear in its original size or a scaled size.

### Restricting the drag behavior

- [dragInteraction:sessionIsRestrictedToDraggingApplication:](uidraginteractiondelegate/draginteraction%28__sessionisrestrictedtodraggingapplication_%29.md): Asks the delegate whether the system should restrict the drag session to the app that started the session.
- [dragInteraction:sessionAllowsMoveOperation:](uidraginteractiondelegate/draginteraction%28__sessionallowsmoveoperation_%29.md): Asks the delegate whether the session allows the move operation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Drag and drop interactions

- [UIDropInteractionDelegate](uidropinteractiondelegate.md): The interface for configuring and controlling a drop interaction.
- [UIDragInteraction](uidraginteraction.md): An interaction to enable dragging of items from a view, employing a delegate to provide drag items and to respond to calls from the drag session.
- [UIDropInteraction](uidropinteraction.md): An interaction to enable dropping of items onto a view, employing a delegate to instantiate objects and respond to calls from the drop session.
