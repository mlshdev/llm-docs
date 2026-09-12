> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/commonoperations/reclaimitem(_:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/commonoperations/reclaimitem(_:replyhandler:))

# reclaimItem(\_:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Reclaims an item, releasing any resources allocated for the item.

## Declaration

```swift
func reclaimItem(_ item: FSItem, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func reclaimItem(_ item: FSItem) async throws
```

## Parameters

- `item`: The item to reclaim.
- `reply`: A block or closure to indicate success or failure. If removal fails, pass an error as the one parameter to the reply handler. If removal succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

FSKit guarantees that for every [FSItem](../../fsitem.md) returned by the volume, a corresponding reclaim operation occurs after the upper layers no longer reference that item. To use this behavior, call [tryReclaim(\_:)](../../fsitem/tryreclaim%28__%29.md) in your implementation of this method.

> **Note**

> Block device file systems may assess whether an underlying resource terminates before processing reclaim operations. On unary file systems, for example, the associated volumes unmount when such resources disconnect from the system. The unmount triggers a reclaiming of all items. Some implementations benefit greatly from short-circuiting in such cases. With a terminated resource, all I/O results in an error, making short-circuiting the most efficient response.

# reclaimItem:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Reclaims an item, releasing any resources allocated for the item.

## Declaration

```objectivec
- (void) reclaimItem:(FSItem *) item replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `item`: The item to reclaim.
- `reply`: A block or closure to indicate success or failure. If removal fails, pass an error as the one parameter to the reply handler. If removal succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

FSKit guarantees that for every [FSItem](../../fsitem.md) returned by the volume, a corresponding reclaim operation occurs after the upper layers no longer reference that item. To use this behavior, call [tryReclaimWithBlock:](../../fsitem/tryreclaim%28__%29.md) in your implementation of this method.

> **Note**

> Block device file systems may assess whether an underlying resource terminates before processing reclaim operations. On unary file systems, for example, the associated volumes unmount when such resources disconnect from the system. The unmount triggers a reclaiming of all items. Some implementations benefit greatly from short-circuiting in such cases. With a terminated resource, all I/O results in an error, making short-circuiting the most efficient response.
