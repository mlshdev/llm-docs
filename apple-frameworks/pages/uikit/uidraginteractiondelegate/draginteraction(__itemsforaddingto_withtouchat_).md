> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:itemsforaddingto:withtouchat:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:itemsforaddingto:withtouchat:))

# dragInteraction(\_:itemsForAddingTo:withTouchAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the drag items to add to an in-progress drag session, in response to a user gesture to add the items.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, itemsForAddingTo session: any UIDragSession, withTouchAt point: CGPoint) -> [UIDragItem]
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The current drag session.
- `point`: The location of the user’s touch in the interaction’s view. The touch point is in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

An array of drag items to add to the drag session, or an empty array if there are no items to add to the session.

<a id="Discussion"></a>

## Discussion

Not implementing this method is the same as always returning an empty array.

## See Also

### Performing the drag

- [dragInteraction(\_:itemsForBeginning:)](draginteraction%28__itemsforbeginning_%29.md): Asks the delegate for the array of drag items for an impending drag interaction.
- [dragInteraction(\_:sessionForAddingItems:withTouchAt:)](draginteraction%28__sessionforaddingitems_withtouchat_%29.md): Asks the delegate which drag session to add drag items to when there is more than one in-progress session.

# dragInteraction:itemsForAddingToSession:withTouchAtPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the drag items to add to an in-progress drag session, in response to a user gesture to add the items.

## Declaration

```objectivec
- (NSArray<UIDragItem *> *) dragInteraction:(UIDragInteraction *) interaction itemsForAddingToSession:(id<UIDragSession>) session withTouchAtPoint:(CGPoint) point;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The current drag session.
- `point`: The location of the user’s touch in the interaction’s view. The touch point is in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

An array of drag items to add to the drag session, or an empty array if there are no items to add to the session.

<a id="Discussion"></a>

## Discussion

Not implementing this method is the same as always returning an empty array.

## See Also

### Performing the drag

- [dragInteraction:itemsForBeginningSession:](draginteraction%28__itemsforbeginning_%29.md): Asks the delegate for the array of drag items for an impending drag interaction.
- [dragInteraction:sessionForAddingItems:withTouchAtPoint:](draginteraction%28__sessionforaddingitems_withtouchat_%29.md): Asks the delegate which drag session to add drag items to when there is more than one in-progress session.
