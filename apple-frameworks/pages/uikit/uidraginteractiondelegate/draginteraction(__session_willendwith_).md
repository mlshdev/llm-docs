> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:session:willendwith:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:session:willendwith:))

# dragInteraction(\_:session:willEndWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the drag activity will end with the specified operation.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, session: any UIDragSession, willEndWith operation: UIDropOperation)
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drag session that will end.
- `operation`: A type that describes the drop operation. If the operation is [UIDropOperation.cancel](../uidropoperation/cancel.md) or [UIDropOperation.forbidden](../uidropoperation/forbidden.md), update your view so it has the corresponding appearance before the cancellation animation begins.

## See Also

### Monitoring drag progress

- [dragInteraction(\_:sessionWillBegin:)](draginteraction%28__sessionwillbegin_%29.md): Tells the delegate the lift animation has finished and the user is starting to move the items across the screen.
- [dragInteraction(\_:session:willAdd:for:)](draginteraction%28__session_willadd_for_%29.md): Tells the delegate an interaction is about to add items to a drag session.
- [dragInteraction(\_:sessionDidMove:)](draginteraction%28__sessiondidmove_%29.md): Tells the delegate the user moved the drag items to a new location on the screen.
- [dragInteraction(\_:session:didEndWith:)](draginteraction%28__session_didendwith_%29.md): Tells the delegate the drag activity and its related animations have finished.
- [dragInteraction(\_:sessionDidTransferItems:)](draginteraction%28__sessiondidtransferitems_%29.md): Tells the delegate the destination view has received the data for the drag items.

# dragInteraction:session:willEndWithOperation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the drag activity will end with the specified operation.

## Declaration

```objectivec
- (void) dragInteraction:(UIDragInteraction *) interaction session:(id<UIDragSession>) session willEndWithOperation:(UIDropOperation) operation;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drag session that will end.
- `operation`: A type that describes the drop operation. If the operation is [UIDropOperationCancel](../uidropoperation/cancel.md) or [UIDropOperationForbidden](../uidropoperation/forbidden.md), update your view so it has the corresponding appearance before the cancellation animation begins.

## See Also

### Monitoring drag progress

- [dragInteraction:sessionWillBegin:](draginteraction%28__sessionwillbegin_%29.md): Tells the delegate the lift animation has finished and the user is starting to move the items across the screen.
- [dragInteraction:session:willAddItems:forInteraction:](draginteraction%28__session_willadd_for_%29.md): Tells the delegate an interaction is about to add items to a drag session.
- [dragInteraction:sessionDidMove:](draginteraction%28__sessiondidmove_%29.md): Tells the delegate the user moved the drag items to a new location on the screen.
- [dragInteraction:session:didEndWithOperation:](draginteraction%28__session_didendwith_%29.md): Tells the delegate the drag activity and its related animations have finished.
- [dragInteraction:sessionDidTransferItems:](draginteraction%28__sessiondidtransferitems_%29.md): Tells the delegate the destination view has received the data for the drag items.
