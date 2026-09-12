> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations/deactivate(options:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/operations/deactivate(options:replyhandler:))

# deactivate(options:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Tears down a previously initialized volume instance.

## Declaration

```swift
func deactivate(options: FSDeactivateOptions = [], replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func deactivate(options: FSDeactivateOptions = []) async throws
```

## Parameters

- `options`: Options to apply to the deactivation.
- `reply`: A block or closure to indicate success or failure. If activation fails, pass an error as the one parameter to the reply handler. If activation succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

Set up your implementation to release any resources allocated for the volume instance. By the time you receive this callback, FSKit has already performed a reclaim call to release all other file nodes associated with this file system instance.

Avoid performing any I/O in this method. Prior to calling this method, FSKit has already issued a sync call to perform any cleanup-related I/O.

FSKit unmounts any mounted volume with a call to `unmount()` prior to the deactivate callback.

## See Also

### Handling activation and deactivation

- [activate(options:replyHandler:)](activate%28options_replyhandler_%29.md): Deprecated. Activates the volume using the specified options.
- [FSItem](../../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSDeactivateOptions](../../fsdeactivateoptions.md): Options that affect the behavior of deactivate methods.

# deactivateWithOptions:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Tears down a previously initialized volume instance.

## Declaration

```objectivec
- (void) deactivateWithOptions:(FSDeactivateOptions) options replyHandler:(void (^)(NSError *err)) reply;
```

## Parameters

- `options`: Options to apply to the deactivation.
- `reply`: A block or closure to indicate success or failure. If activation fails, pass an error as the one parameter to the reply handler. If activation succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

Set up your implementation to release any resources allocated for the volume instance. By the time you receive this callback, FSKit has already performed a reclaim call to release all other file nodes associated with this file system instance.

Avoid performing any I/O in this method. Prior to calling this method, FSKit has already issued a sync call to perform any cleanup-related I/O.

FSKit unmounts any mounted volume with a call to `unmount()` prior to the deactivate callback.

## See Also

### Handling activation and deactivation

- [activateWithOptions:replyHandler:](activate%28options_replyhandler_%29.md): Deprecated. Activates the volume using the specified options.
- [FSItem](../../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSDeactivateOptions](../../fsdeactivateoptions.md): Options that affect the behavior of deactivate methods.
