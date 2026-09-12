> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:sessionforaddingitems:withtouchat:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:sessionforaddingitems:withtouchat:))

# dragInteraction(\_:sessionForAddingItems:withTouchAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate which drag session to add drag items to when there is more than one in-progress session.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, sessionForAddingItems sessions: [any UIDragSession], withTouchAt point: CGPoint) -> (any UIDragSession)?
```

## Parameters

- `interaction`: The interaction that called this method.
- `sessions`: An array of in-progress drag sessions.
- `point`: The location of the user’s touch in the view. The touch point is in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

The drag session to add drag items to, or `nil` to continue without adding drag items to any drag session.

<a id="Discussion"></a>

## Discussion

If more than one drag session exists, the session used to add drag items may not be apparent to the user. Therefore, by default, no items are added to any session. If you want to change this behavior, implement this method and return the appropriate session. Return `nil` to continue without adding items.

## See Also

### Performing the drag

- [dragInteraction(\_:itemsForBeginning:)](draginteraction%28__itemsforbeginning_%29.md): Asks the delegate for the array of drag items for an impending drag interaction.
- [dragInteraction(\_:itemsForAddingTo:withTouchAt:)](draginteraction%28__itemsforaddingto_withtouchat_%29.md): Asks the delegate for the drag items to add to an in-progress drag session, in response to a user gesture to add the items.

# dragInteraction:sessionForAddingItems:withTouchAtPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate which drag session to add drag items to when there is more than one in-progress session.

## Declaration

```objectivec
- (id<UIDragSession>) dragInteraction:(UIDragInteraction *) interaction sessionForAddingItems:(NSArray<id<UIDragSession>> *) sessions withTouchAtPoint:(CGPoint) point;
```

## Parameters

- `interaction`: The interaction that called this method.
- `sessions`: An array of in-progress drag sessions.
- `point`: The location of the user’s touch in the view. The touch point is in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

The drag session to add drag items to, or `nil` to continue without adding drag items to any drag session.

<a id="Discussion"></a>

## Discussion

If more than one drag session exists, the session used to add drag items may not be apparent to the user. Therefore, by default, no items are added to any session. If you want to change this behavior, implement this method and return the appropriate session. Return `nil` to continue without adding items.

## See Also

### Performing the drag

- [dragInteraction:itemsForBeginningSession:](draginteraction%28__itemsforbeginning_%29.md): Asks the delegate for the array of drag items for an impending drag interaction.
- [dragInteraction:itemsForAddingToSession:withTouchAtPoint:](draginteraction%28__itemsforaddingto_withtouchat_%29.md): Asks the delegate for the drag items to add to an in-progress drag session, in response to a user gesture to add the items.
