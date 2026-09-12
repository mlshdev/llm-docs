> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/itemdeactivationhandler/deactivateitem(_:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/itemdeactivationhandler/deactivateitem(_:context:replyhandler:))

# deactivateItem(\_:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Notifies the file system that the kernel is no longer making immediate use of the given item.

## Declaration

```swift
func deactivateItem(_ item: FSItem, context: FSContext, replyHandler reply: @escaping @Sendable (FSDeactivateItemResult?, (any Error)?) -> Void)
```

```swift
func deactivateItem(_ item: FSItem, context: FSContext) async throws -> FSDeactivateItemResult
```

## Parameters

- `item`: The item to deactivate.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If deactivation succeeds, pass an instance of [FSDeactivateItemResult](../../fsdeactivateitemresult.md) containing the volume’s updated free space, along with a `nil` error. If deactivation fails, pass the relevant error as the second parameter; FSKit ignores the [FSDeactivateItemResult](../../fsdeactivateitemresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

This method gives a file system a chance to release resources associated with an item. However, this method prescribes no specific action; it’s acceptable to defer all reclamation until [reclaimItem(\_:replyHandler:)](../handler/reclaimitem%28__replyhandler_%29.md). This method is the equivalent of VFS’s `VNOP_INACTIVE`.

FSKit restricts calls to this method based on the current value of [itemDeactivationPolicy](../itemdeactivation/itemdeactivationpolicy.md).

## See Also

### Deactivating an item

- [FSDeactivateItemResult](../../fsdeactivateitemresult.md): The result of a deactivate-item call.

# deactivateItem:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Notifies the file system that the kernel is no longer making immediate use of the given item.

## Declaration

```objectivec
- (void) deactivateItem:(FSItem *) item context:(FSContext *) context replyHandler:(void (^)(FSDeactivateItemResult *result, NSError *error)) reply;
```

## Parameters

- `item`: The item to deactivate.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If deactivation succeeds, pass an instance of [FSDeactivateItemResult](../../fsdeactivateitemresult.md) containing the volume’s updated free space, along with a `nil` error. If deactivation fails, pass the relevant error as the second parameter; FSKit ignores the [FSDeactivateItemResult](../../fsdeactivateitemresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

This method gives a file system a chance to release resources associated with an item. However, this method prescribes no specific action; it’s acceptable to defer all reclamation until [reclaimItem:replyHandler:](../handler/reclaimitem%28__replyhandler_%29.md). This method is the equivalent of VFS’s `VNOP_INACTIVE`.

FSKit restricts calls to this method based on the current value of [itemDeactivationPolicy](../itemdeactivation/itemdeactivationpolicy.md).

## See Also

### Deactivating an item

- [FSDeactivateItemResult](../../fsdeactivateitemresult.md): The result of a deactivate-item call.
