> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:itemsforbeginning:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:itemsforbeginning:))

# dragInteraction(\_:itemsForBeginning:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the array of drag items for an impending drag interaction.

## Declaration

```swift
func dragInteraction(_ interaction: UIDragInteraction, itemsForBeginning session: any UIDragSession) -> [UIDragItem]
```

## Parameters

- `interaction`: The interaction asking for the drag items.
- `session`: The current drag session.

<a id="return-value"></a>

## Return Value

An array of drag items to include in the drag session, or an empty array if there are no drag items for the session.

## Mentioned In

- [Making a view into a drag source](../making-a-view-into-a-drag-source.md)

<a id="Discussion"></a>

## Discussion

As part of enabling dragging from a view, implement this method to return an array of one or more drag items. The system calls this method and uses this array to populate the drag session’s `items` property.

If the drag items represent model objects in your app that are shown in a linear order, return them in the natural first-to-last order that users expect. The system handles any order-flipping required for right-to-left scripts.

Typically, the system shows multiple dragged items as a stack of images, with the array’s first element on top. If you return an empty array, the system does not start a drag interaction.

## See Also

### Performing the drag

- [dragInteraction(\_:itemsForAddingTo:withTouchAt:)](draginteraction%28__itemsforaddingto_withtouchat_%29.md): Asks the delegate for the drag items to add to an in-progress drag session, in response to a user gesture to add the items.
- [dragInteraction(\_:sessionForAddingItems:withTouchAt:)](draginteraction%28__sessionforaddingitems_withtouchat_%29.md): Asks the delegate which drag session to add drag items to when there is more than one in-progress session.

# dragInteraction:itemsForBeginningSession: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the array of drag items for an impending drag interaction.

## Declaration

```objectivec
- (NSArray<UIDragItem *> *) dragInteraction:(UIDragInteraction *) interaction itemsForBeginningSession:(id<UIDragSession>) session;
```

## Parameters

- `interaction`: The interaction asking for the drag items.
- `session`: The current drag session.

<a id="return-value"></a>

## Return Value

An array of drag items to include in the drag session, or an empty array if there are no drag items for the session.

## Mentioned In

- [Making a view into a drag source](../making-a-view-into-a-drag-source.md)

<a id="Discussion"></a>

## Discussion

As part of enabling dragging from a view, implement this method to return an array of one or more drag items. The system calls this method and uses this array to populate the drag session’s `items` property.

If the drag items represent model objects in your app that are shown in a linear order, return them in the natural first-to-last order that users expect. The system handles any order-flipping required for right-to-left scripts.

Typically, the system shows multiple dragged items as a stack of images, with the array’s first element on top. If you return an empty array, the system does not start a drag interaction.

## See Also

### Performing the drag

- [dragInteraction:itemsForAddingToSession:withTouchAtPoint:](draginteraction%28__itemsforaddingto_withtouchat_%29.md): Asks the delegate for the drag items to add to an in-progress drag session, in response to a user gesture to add the items.
- [dragInteraction:sessionForAddingItems:withTouchAtPoint:](draginteraction%28__sessionforaddingitems_withtouchat_%29.md): Asks the delegate which drag session to add drag items to when there is more than one in-progress session.
