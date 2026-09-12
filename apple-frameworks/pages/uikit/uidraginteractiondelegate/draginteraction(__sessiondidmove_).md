> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:sessiondidmove:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:sessiondidmove:))

# dragInteraction(\_:sessionDidMove:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the user moved the drag items to a new location on the screen.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, sessionDidMove session: any UIDragSession)
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The current drag session.

<a id="Discussion"></a>

## Discussion

To get the new location, call the drag session’s [location(in:)](../uidragdropsession/location%28in_%29.md) method.

## See Also

### Monitoring drag progress

- [dragInteraction(\_:sessionWillBegin:)](draginteraction%28__sessionwillbegin_%29.md): Tells the delegate the lift animation has finished and the user is starting to move the items across the screen.
- [dragInteraction(\_:session:willAdd:for:)](draginteraction%28__session_willadd_for_%29.md): Tells the delegate an interaction is about to add items to a drag session.
- [dragInteraction(\_:session:willEndWith:)](draginteraction%28__session_willendwith_%29.md): Tells the delegate the drag activity will end with the specified operation.
- [dragInteraction(\_:session:didEndWith:)](draginteraction%28__session_didendwith_%29.md): Tells the delegate the drag activity and its related animations have finished.
- [dragInteraction(\_:sessionDidTransferItems:)](draginteraction%28__sessiondidtransferitems_%29.md): Tells the delegate the destination view has received the data for the drag items.

# dragInteraction:sessionDidMove: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the user moved the drag items to a new location on the screen.

## Declaration

```objectivec
- (void) dragInteraction:(UIDragInteraction *) interaction sessionDidMove:(id<UIDragSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The current drag session.

<a id="Discussion"></a>

## Discussion

To get the new location, call the drag session’s [locationInView:](../uidragdropsession/location%28in_%29.md) method.

## See Also

### Monitoring drag progress

- [dragInteraction:sessionWillBegin:](draginteraction%28__sessionwillbegin_%29.md): Tells the delegate the lift animation has finished and the user is starting to move the items across the screen.
- [dragInteraction:session:willAddItems:forInteraction:](draginteraction%28__session_willadd_for_%29.md): Tells the delegate an interaction is about to add items to a drag session.
- [dragInteraction:session:willEndWithOperation:](draginteraction%28__session_willendwith_%29.md): Tells the delegate the drag activity will end with the specified operation.
- [dragInteraction:session:didEndWithOperation:](draginteraction%28__session_didendwith_%29.md): Tells the delegate the drag activity and its related animations have finished.
- [dragInteraction:sessionDidTransferItems:](draginteraction%28__sessiondidtransferitems_%29.md): Tells the delegate the destination view has received the data for the drag items.
