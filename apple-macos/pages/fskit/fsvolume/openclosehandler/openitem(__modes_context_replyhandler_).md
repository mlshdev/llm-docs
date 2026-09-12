> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/openclosehandler/openitem(_:modes:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/openclosehandler/openitem(_:modes:context:replyhandler:))

# openItem(\_:modes:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Opens a file for access.

## Declaration

```swift
func openItem(_ item: FSItem, modes: FSVolume.OpenModes, context: FSContext, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func openItem(_ item: FSItem, modes: FSVolume.OpenModes, context: FSContext) async throws
```

## Parameters

- `item`: The item to open.
- `modes`: The set of mode flags to open the item with.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If opening fails, pass an error as the one parameter to the reply handler. If opening succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

## See Also

### Opening and closing

- [closeItem(\_:modes:context:replyHandler:)](closeitem%28__modes_context_replyhandler_%29.md): Closes a file from further access.
- [FSVolume.OpenModes](../openmodes.md): Defined modes for opening a file.
- [FSContext](../../fscontext.md): A context object that provides information about the initiator of a file system operation.

# openItem:withModes:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Opens a file for access.

## Declaration

```objectivec
- (void) openItem:(FSItem *) item withModes:(FSVolumeOpenModes) modes context:(FSContext *) context replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `item`: The item to open.
- `modes`: The set of mode flags to open the item with.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If opening fails, pass an error as the one parameter to the reply handler. If opening succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

## See Also

### Opening and closing

- [closeItem:keepingModes:context:replyHandler:](closeitem%28__modes_context_replyhandler_%29.md): Closes a file from further access.
- [FSVolumeOpenModes](../openmodes.md): Defined modes for opening a file.
- [FSContext](../../fscontext.md): A context object that provides information about the initiator of a file system operation.
