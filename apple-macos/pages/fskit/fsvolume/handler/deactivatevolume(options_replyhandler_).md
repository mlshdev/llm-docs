> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/deactivatevolume(options:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/deactivatevolume(options:replyhandler:))

# deactivateVolume(options:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Tears down a previously initialized volume instance.

## Declaration

```swift
func deactivateVolume(options: FSDeactivateOptions = [], replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func deactivateVolume(options: FSDeactivateOptions = []) async throws
```

## Parameters

- `options`: Options to apply to the deactivation.
- `reply`: A block or closure to indicate success or failure. If activation fails, pass an error as the one parameter to the reply handler. If activation succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

Set up your implementation to release any resources allocated for the volume instance. By the time you receive this callback, FSKit has already performed a reclaim call to release all other file nodes associated with this file system instance.

Avoid performing any I/O in this method. Prior to calling this method, FSKit has already issued a sync call to perform any cleanup-related I/O.

FSKit unmounts any mounted volume with a call to [unmount(replyHandler:)](unmount%28replyhandler_%29.md) prior to the deactivate callback.

# deactivateVolumeWithOptions:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Tears down a previously initialized volume instance.

## Declaration

```objectivec
- (void) deactivateVolumeWithOptions:(FSDeactivateOptions) options replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `options`: Options to apply to the deactivation.
- `reply`: A block or closure to indicate success or failure. If activation fails, pass an error as the one parameter to the reply handler. If activation succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

Set up your implementation to release any resources allocated for the volume instance. By the time you receive this callback, FSKit has already performed a reclaim call to release all other file nodes associated with this file system instance.

Avoid performing any I/O in this method. Prior to calling this method, FSKit has already issued a sync call to perform any cleanup-related I/O.

FSKit unmounts any mounted volume with a call to [unmountWithReplyHandler:](unmount%28replyhandler_%29.md) prior to the deactivate callback.
