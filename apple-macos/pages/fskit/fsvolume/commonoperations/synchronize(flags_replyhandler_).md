> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/commonoperations/synchronize(flags:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/commonoperations/synchronize(flags:replyhandler:))

# synchronize(flags:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Synchronizes the volume with its underlying resource.

## Declaration

```swift
func synchronize(flags: FSSyncFlags, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func synchronize(flags: FSSyncFlags) async throws
```

## Parameters

- `flags`: Timing flags, as defined in `mount.h.` These flags let the file system know whether to run the operation in a blocking or nonblocking fashion.
- `reply`: A block or closure to indicate success or failure. If synchronization fails, pass an error as the one parameter to the reply handler. If synchronization succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

After calling this method, FSKit assumes that the volume has sent all pending I/O or metadata to its resource.

# synchronizeWithFlags:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Synchronizes the volume with its underlying resource.

## Declaration

```objectivec
- (void) synchronizeWithFlags:(FSSyncFlags) flags replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `flags`: Timing flags, as defined in `mount.h.` These flags let the file system know whether to run the operation in a blocking or nonblocking fashion.
- `reply`: A block or closure to indicate success or failure. If synchronization fails, pass an error as the one parameter to the reply handler. If synchronization succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

After calling this method, FSKit assumes that the volume has sent all pending I/O or metadata to its resource.
