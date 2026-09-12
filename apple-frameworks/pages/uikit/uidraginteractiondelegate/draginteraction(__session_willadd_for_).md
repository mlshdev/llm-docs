> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:session:willadd:for:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:session:willadd:for:))

# dragInteraction(\_:session:willAdd:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate an interaction is about to add items to a drag session.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, session: any UIDragSession, willAdd items: [UIDragItem], for addingInteraction: UIDragInteraction)
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The current drag session.
- `items`: The drag items the interaction will add to the session.
- `addingInteraction`: The interaction adding the drag items.

## See Also

### Monitoring drag progress

- [dragInteraction(\_:sessionWillBegin:)](draginteraction%28__sessionwillbegin_%29.md): Tells the delegate the lift animation has finished and the user is starting to move the items across the screen.
- [dragInteraction(\_:sessionDidMove:)](draginteraction%28__sessiondidmove_%29.md): Tells the delegate the user moved the drag items to a new location on the screen.
- [dragInteraction(\_:session:willEndWith:)](draginteraction%28__session_willendwith_%29.md): Tells the delegate the drag activity will end with the specified operation.
- [dragInteraction(\_:session:didEndWith:)](draginteraction%28__session_didendwith_%29.md): Tells the delegate the drag activity and its related animations have finished.
- [dragInteraction(\_:sessionDidTransferItems:)](draginteraction%28__sessiondidtransferitems_%29.md): Tells the delegate the destination view has received the data for the drag items.

# dragInteraction:session:willAddItems:forInteraction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate an interaction is about to add items to a drag session.

## Declaration

```objectivec
- (void) dragInteraction:(UIDragInteraction *) interaction session:(id<UIDragSession>) session willAddItems:(NSArray<UIDragItem *> *) items forInteraction:(UIDragInteraction *) addingInteraction;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The current drag session.
- `items`: The drag items the interaction will add to the session.
- `addingInteraction`: The interaction adding the drag items.

## See Also

### Monitoring drag progress

- [dragInteraction:sessionWillBegin:](draginteraction%28__sessionwillbegin_%29.md): Tells the delegate the lift animation has finished and the user is starting to move the items across the screen.
- [dragInteraction:sessionDidMove:](draginteraction%28__sessiondidmove_%29.md): Tells the delegate the user moved the drag items to a new location on the screen.
- [dragInteraction:session:willEndWithOperation:](draginteraction%28__session_willendwith_%29.md): Tells the delegate the drag activity will end with the specified operation.
- [dragInteraction:session:didEndWithOperation:](draginteraction%28__session_didendwith_%29.md): Tells the delegate the drag activity and its related animations have finished.
- [dragInteraction:sessionDidTransferItems:](draginteraction%28__sessiondidtransferitems_%29.md): Tells the delegate the destination view has received the data for the drag items.
