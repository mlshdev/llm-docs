> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/opencloseoperations/closeitem(_:modes:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/opencloseoperations/closeitem(_:modes:replyhandler:))

# closeItem(\_:modes:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Closes a file from further access.

## Declaration

```swift
func closeItem(_ item: FSItem, modes: FSVolume.OpenModes, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func closeItem(_ item: FSItem, modes: FSVolume.OpenModes) async throws
```

## Parameters

- `item`: The item to close.
- `modes`: The set of mode flags to keep after this close.
- `reply`: A block or closure to indicate success or failure. If closing fails, pass an error as the one parameter to the reply handler. If closing succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

## See Also

### Opening and closing

- [openItem(\_:modes:replyHandler:)](openitem%28__modes_replyhandler_%29.md): Deprecated. Opens a file for access.
- [FSVolume.OpenModes](../openmodes.md): Defined modes for opening a file.

# closeItem:keepingModes:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Closes a file from further access.

## Declaration

```objectivec
- (void) closeItem:(FSItem *) item keepingModes:(FSVolumeOpenModes) modes replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `item`: The item to close.
- `modes`: The set of mode flags to keep after this close.
- `reply`: A block or closure to indicate success or failure. If closing fails, pass an error as the one parameter to the reply handler. If closing succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

## See Also

### Opening and closing

- [openItem:withModes:replyHandler:](openitem%28__modes_replyhandler_%29.md): Deprecated. Opens a file for access.
- [FSVolumeOpenModes](../openmodes.md): Defined modes for opening a file.
