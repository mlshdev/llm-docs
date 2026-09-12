> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/commonoperations/unmount(replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/commonoperations/unmount(replyhandler:))

# unmount(replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Unmounts this volume.

## Declaration

```swift
func unmount(replyHandler reply: @escaping @Sendable () -> Void)
```

```swift
func unmount() async
```

## Parameters

- `reply`: A block or closure to indicate success or failure. If unmounting fails, pass an error as the one parameter to the reply handler. If unmounting succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply return normally.

<a id="discussion"></a>

## Discussion

Clear and flush all cached state in your implementation of this method.

# unmountWithReplyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Unmounts this volume.

## Declaration

```objectivec
- (void) unmountWithReplyHandler:(void (^)()) reply;
```

## Parameters

- `reply`: A block or closure to indicate success or failure. If unmounting fails, pass an error as the one parameter to the reply handler. If unmounting succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply return normally.

<a id="discussion"></a>

## Discussion

Clear and flush all cached state in your implementation of this method.
