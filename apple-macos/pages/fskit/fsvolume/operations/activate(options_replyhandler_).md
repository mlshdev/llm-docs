> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations/activate(options:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/operations/activate(options:replyhandler:))

# activate(options:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Activates the volume using the specified options.

## Declaration

```swift
func activate(options: FSTaskOptions, replyHandler reply: @escaping @Sendable (FSItem?, (any Error)?) -> Void)
```

```swift
func activate(options: FSTaskOptions) async throws -> FSItem
```

## Parameters

- `options`: Options to apply to the activation. These can include security-scoped file paths. There are no defined options currently.
- `reply`: A block or closure to indicate success or failure. If activation succeeds, pass the root [FSItem](../../fsitem.md) and a `nil` error. If activation fails, pass the relevant error as the second parameter; FSKit ignores any [FSItem](../../fsitem.md) in this case. In Swift, `reply` takes only the [FSItem](../../fsitem.md) as the parameter; you signal any error with a `throw`. For an `async` Swift implementation, there’s no reply handler; simply return the [FSItem](../../fsitem.md) or throw an error.

<a id="discussion"></a>

## Discussion

When FSKit calls this method, allocate any in-memory state required to represent the file system. Also allocate an [FSItem](../../fsitem.md) for the root directory of the file system, and pass it to the reply block. FSKit caches this root item for the lifetime of the volume, and uses it as a starting point for all file look-ups.

Volume activation occurs prior to any call to mount the volume.

## See Also

### Handling activation and deactivation

- [FSItem](../../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [deactivate(options:replyHandler:)](deactivate%28options_replyhandler_%29.md): Deprecated. Tears down a previously initialized volume instance.
- [FSDeactivateOptions](../../fsdeactivateoptions.md): Options that affect the behavior of deactivate methods.

# activateWithOptions:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Activates the volume using the specified options.

## Declaration

```objectivec
- (void) activateWithOptions:(FSTaskOptions *) options replyHandler:(void (^)(FSItem *rootItem, NSError *err)) reply;
```

## Parameters

- `options`: Options to apply to the activation. These can include security-scoped file paths. There are no defined options currently.
- `reply`: A block or closure to indicate success or failure. If activation succeeds, pass the root [FSItem](../../fsitem.md) and a `nil` error. If activation fails, pass the relevant error as the second parameter; FSKit ignores any [FSItem](../../fsitem.md) in this case. In Swift, `reply` takes only the [FSItem](../../fsitem.md) as the parameter; you signal any error with a `throw`. For an `async` Swift implementation, there’s no reply handler; simply return the [FSItem](../../fsitem.md) or throw an error.

<a id="discussion"></a>

## Discussion

When FSKit calls this method, allocate any in-memory state required to represent the file system. Also allocate an [FSItem](../../fsitem.md) for the root directory of the file system, and pass it to the reply block. FSKit caches this root item for the lifetime of the volume, and uses it as a starting point for all file look-ups.

Volume activation occurs prior to any call to mount the volume.

## See Also

### Handling activation and deactivation

- [FSItem](../../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [deactivateWithOptions:replyHandler:](deactivate%28options_replyhandler_%29.md): Deprecated. Tears down a previously initialized volume instance.
- [FSDeactivateOptions](../../fsdeactivateoptions.md): Options that affect the behavior of deactivate methods.
