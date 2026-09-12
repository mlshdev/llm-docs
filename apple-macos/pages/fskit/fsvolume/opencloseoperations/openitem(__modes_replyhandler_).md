> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/opencloseoperations/openitem(_:modes:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/opencloseoperations/openitem(_:modes:replyhandler:))

# openItem(\_:modes:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Opens a file for access.

## Declaration

```swift
func openItem(_ item: FSItem, modes: FSVolume.OpenModes, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func openItem(_ item: FSItem, modes: FSVolume.OpenModes) async throws
```

## Parameters

- `item`: The item to open.
- `modes`: The set of mode flags to open the item with.
- `reply`: A block or closure to indicate success or failure. If opening fails, pass an error as the one parameter to the reply handler. If opening succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

## See Also

### Opening and closing

- [closeItem(\_:modes:replyHandler:)](closeitem%28__modes_replyhandler_%29.md): Deprecated. Closes a file from further access.
- [FSVolume.OpenModes](../openmodes.md): Defined modes for opening a file.

# openItem:withModes:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Opens a file for access.

## Declaration

```objectivec
- (void) openItem:(FSItem *) item withModes:(FSVolumeOpenModes) modes replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `item`: The item to open.
- `modes`: The set of mode flags to open the item with.
- `reply`: A block or closure to indicate success or failure. If opening fails, pass an error as the one parameter to the reply handler. If opening succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

## See Also

### Opening and closing

- [closeItem:keepingModes:replyHandler:](closeitem%28__modes_replyhandler_%29.md): Deprecated. Closes a file from further access.
- [FSVolumeOpenModes](../openmodes.md): Defined modes for opening a file.
