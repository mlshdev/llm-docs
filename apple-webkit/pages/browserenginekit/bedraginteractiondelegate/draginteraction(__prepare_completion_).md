> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedraginteractiondelegate/draginteraction(_:prepare:completion:)](https://developer.apple.com/documentation/browserenginekit/bedraginteractiondelegate/draginteraction(_:prepare:completion:))

# dragInteraction(\_:prepare:completion:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Prepares the delegate for a drag session.

## Declaration

```swift
optional func dragInteraction(_ dragInteraction: BEDragInteraction, prepare session: any UIDragSession, completion: @escaping () -> Bool)
```

## Parameters

- `dragInteraction`: The drag interaction that invokes this method.
- `session`: The drag session for which to prepare.
- `completion`: A completion handler you call after finishing drag session preparations.

<a id="discussion"></a>

## Discussion

Call the completion handler when your app finishes preparing for the drag session. Call the handler as soon as possible to maintain a responsive interaction experience.

> **Important**

>  The system expects your app to call the completion handler right away after drag session preparation, otherwise the system cancels the drag interaction.

Pass `true` in the completion handler to indicate successful preparations; otherwise, pass `false`.

## See Also

### Participating in drag gestures

- [dragInteraction(\_:itemsForAddingTo:forTouchAt:completion:)](draginteraction%28__itemsforaddingto_fortouchat_completion_%29.md): Requests items to add to a drag session.

# dragInteraction:prepareDragSession:completion: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Prepares the delegate for a drag session.

## Declaration

```objectivec
- (void) dragInteraction:(BEDragInteraction *) dragInteraction prepareDragSession:(id<UIDragSession>) session completion:(BOOL (^)()) completion;
```

## Parameters

- `dragInteraction`: The drag interaction that invokes this method.
- `session`: The drag session for which to prepare.
- `completion`: A completion handler you call after finishing drag session preparations.

<a id="discussion"></a>

## Discussion

Call the completion handler when your app finishes preparing for the drag session. Call the handler as soon as possible to maintain a responsive interaction experience.

> **Important**

>  The system expects your app to call the completion handler right away after drag session preparation, otherwise the system cancels the drag interaction.

Pass `true` in the completion handler to indicate successful preparations; otherwise, pass `false`.

## See Also

### Participating in drag gestures

- [dragInteraction:itemsForAddingToSession:forTouchAtPoint:completion:](draginteraction%28__itemsforaddingto_fortouchat_completion_%29.md): Requests items to add to a drag session.
