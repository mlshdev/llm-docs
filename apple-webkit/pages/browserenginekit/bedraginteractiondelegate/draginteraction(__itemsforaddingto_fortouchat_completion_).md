> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedraginteractiondelegate/draginteraction(_:itemsforaddingto:fortouchat:completion:)](https://developer.apple.com/documentation/browserenginekit/bedraginteractiondelegate/draginteraction(_:itemsforaddingto:fortouchat:completion:))

# dragInteraction(\_:itemsForAddingTo:forTouchAt:completion:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Requests items to add to a drag session.

## Declaration

```swift
optional func dragInteraction(_ dragInteraction: BEDragInteraction, itemsForAddingTo session: any UIDragSession, forTouchAt point: CGPoint, completion: @escaping ([UIDragItem]) -> Bool)
```

## Parameters

- `dragInteraction`: The drag interaction that invokes this method.
- `session`: An in-progress drag session to which to add items.
- `point`: The touch location in the view’s coordinate system.
- `completion`: A completion handler that you call to add items to the drag session.

<a id="discussion"></a>

## Discussion

This method is the asynchronous variant of [dragInteraction(\_:itemsForAddingTo:withTouchAt:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction%28_:itemsforaddingto:withtouchat:%29). If your delegate implements this method, the system calls this method instead of the synchronous version.

Call the completion handler as soon you prepare its arguments. The system times out the completion handler if a long delay occurs before you call the handler.

The completion block returns `true` if the drag session added the items you supplied, and `false` otherwise.

## See Also

### Participating in drag gestures

- [dragInteraction(\_:prepare:completion:)](draginteraction%28__prepare_completion_%29.md): Prepares the delegate for a drag session.

# dragInteraction:itemsForAddingToSession:forTouchAtPoint:completion: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Requests items to add to a drag session.

## Declaration

```objectivec
- (void) dragInteraction:(BEDragInteraction *) dragInteraction itemsForAddingToSession:(id<UIDragSession>) session forTouchAtPoint:(CGPoint) point completion:(BOOL (^)(NSArray<UIDragItem *> *)) completion;
```

## Parameters

- `dragInteraction`: The drag interaction that invokes this method.
- `session`: An in-progress drag session to which to add items.
- `point`: The touch location in the view’s coordinate system.
- `completion`: A completion handler that you call to add items to the drag session.

<a id="discussion"></a>

## Discussion

This method is the asynchronous variant of [dragInteraction:itemsForAddingToSession:withTouchAtPoint:](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction%28_:itemsforaddingto:withtouchat:%29). If your delegate implements this method, the system calls this method instead of the synchronous version.

Call the completion handler as soon you prepare its arguments. The system times out the completion handler if a long delay occurs before you call the handler.

The completion block returns `true` if the drag session added the items you supplied, and `false` otherwise.

## See Also

### Participating in drag gestures

- [dragInteraction:prepareDragSession:completion:](draginteraction%28__prepare_completion_%29.md): Prepares the delegate for a drag session.
