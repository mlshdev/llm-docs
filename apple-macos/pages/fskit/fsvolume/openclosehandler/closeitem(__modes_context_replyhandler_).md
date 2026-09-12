> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/openclosehandler/closeitem(_:modes:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/openclosehandler/closeitem(_:modes:context:replyhandler:))

# closeItem(\_:modes:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Closes a file from further access.

## Declaration

```swift
func closeItem(_ item: FSItem, modes: FSVolume.OpenModes, context: FSContext, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func closeItem(_ item: FSItem, modes: FSVolume.OpenModes, context: FSContext) async throws
```

## Parameters

- `item`: The item to close.
- `modes`: The set of mode flags to keep after this close.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If closing fails, pass an error as the one parameter to the reply handler. If closing succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

## See Also

### Opening and closing

- [openItem(\_:modes:context:replyHandler:)](openitem%28__modes_context_replyhandler_%29.md): Opens a file for access.
- [FSVolume.OpenModes](../openmodes.md): Defined modes for opening a file.
- [FSContext](../../fscontext.md): A context object that provides information about the initiator of a file system operation.

# closeItem:keepingModes:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Closes a file from further access.

## Declaration

```objectivec
- (void) closeItem:(FSItem *) item keepingModes:(FSVolumeOpenModes) modes context:(FSContext *) context replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `item`: The item to close.
- `modes`: The set of mode flags to keep after this close.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If closing fails, pass an error as the one parameter to the reply handler. If closing succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

## See Also

### Opening and closing

- [openItem:withModes:context:replyHandler:](openitem%28__modes_context_replyhandler_%29.md): Opens a file for access.
- [FSVolumeOpenModes](../openmodes.md): Defined modes for opening a file.
- [FSContext](../../fscontext.md): A context object that provides information about the initiator of a file system operation.
