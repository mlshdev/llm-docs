> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/itemdeactivation/deactivateitem(_:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/itemdeactivation/deactivateitem(_:replyhandler:))

# deactivateItem(\_:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Notifies the file system that the kernel is no longer making immediate use of the given item.

## Declaration

```swift
func deactivateItem(_ item: FSItem, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func deactivateItem(_ item: FSItem) async throws
```

## Parameters

- `item`: The item to deactivate.
- `reply`: A block or closure to indicate success or failure. If deactivation fails, pass an error as the one parameter to the reply handler. If deactivation succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

This method gives a file system a chance to release resources associated with an item. However, this method prescribes no specific action; it’s acceptable to defer all reclamation until `FSVolume/Operations/reclaimItem(_:)`. This method is the equivalent of VFS’s `VNOP_INACTIVE`.

FSKit restricts calls to this method based on the current value of [itemDeactivationPolicy](itemdeactivationpolicy.md).

# deactivateItem:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Notifies the file system that the kernel is no longer making immediate use of the given item.

## Declaration

```objectivec
- (void) deactivateItem:(FSItem *) item replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `item`: The item to deactivate.
- `reply`: A block or closure to indicate success or failure. If deactivation fails, pass an error as the one parameter to the reply handler. If deactivation succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

This method gives a file system a chance to release resources associated with an item. However, this method prescribes no specific action; it’s acceptable to defer all reclamation until `FSVolume/Operations/reclaimItem(_:)`. This method is the equivalent of VFS’s `VNOP_INACTIVE`.

FSKit restricts calls to this method based on the current value of [itemDeactivationPolicy](itemdeactivationpolicy.md).
