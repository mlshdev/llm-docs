> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:sessionwillbegin:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:sessionwillbegin:))

# dragInteraction(\_:sessionWillBegin:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the lift animation has finished and the user is starting to move the items across the screen.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, sessionWillBegin session: any UIDragSession)
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The current drag session.

<a id="Discussion"></a>

## Discussion

Implement this method when you need to perform some action after the user starts dragging the items; for instance, dimming the view to show that its contents are being dragged.

## See Also

### Monitoring drag progress

- [dragInteraction(\_:session:willAdd:for:)](draginteraction%28__session_willadd_for_%29.md): Tells the delegate an interaction is about to add items to a drag session.
- [dragInteraction(\_:sessionDidMove:)](draginteraction%28__sessiondidmove_%29.md): Tells the delegate the user moved the drag items to a new location on the screen.
- [dragInteraction(\_:session:willEndWith:)](draginteraction%28__session_willendwith_%29.md): Tells the delegate the drag activity will end with the specified operation.
- [dragInteraction(\_:session:didEndWith:)](draginteraction%28__session_didendwith_%29.md): Tells the delegate the drag activity and its related animations have finished.
- [dragInteraction(\_:sessionDidTransferItems:)](draginteraction%28__sessiondidtransferitems_%29.md): Tells the delegate the destination view has received the data for the drag items.

# dragInteraction:sessionWillBegin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the lift animation has finished and the user is starting to move the items across the screen.

## Declaration

```objectivec
- (void) dragInteraction:(UIDragInteraction *) interaction sessionWillBegin:(id<UIDragSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The current drag session.

<a id="Discussion"></a>

## Discussion

Implement this method when you need to perform some action after the user starts dragging the items; for instance, dimming the view to show that its contents are being dragged.

## See Also

### Monitoring drag progress

- [dragInteraction:session:willAddItems:forInteraction:](draginteraction%28__session_willadd_for_%29.md): Tells the delegate an interaction is about to add items to a drag session.
- [dragInteraction:sessionDidMove:](draginteraction%28__sessiondidmove_%29.md): Tells the delegate the user moved the drag items to a new location on the screen.
- [dragInteraction:session:willEndWithOperation:](draginteraction%28__session_willendwith_%29.md): Tells the delegate the drag activity will end with the specified operation.
- [dragInteraction:session:didEndWithOperation:](draginteraction%28__session_didendwith_%29.md): Tells the delegate the drag activity and its related animations have finished.
- [dragInteraction:sessionDidTransferItems:](draginteraction%28__sessiondidtransferitems_%29.md): Tells the delegate the destination view has received the data for the drag items.
