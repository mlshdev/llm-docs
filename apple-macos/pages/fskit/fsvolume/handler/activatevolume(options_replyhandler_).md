> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/activatevolume(options:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/activatevolume(options:replyhandler:))

# activateVolume(options:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Activates the volume using the specified options.

## Declaration

```swift
func activateVolume(options: FSTaskOptions, replyHandler reply: @escaping @Sendable (FSActivateResult?, (any Error)?) -> Void)
```

```swift
func activateVolume(options: FSTaskOptions) async throws -> FSActivateResult
```

## Parameters

- `options`: Options to apply to the activation. These can include security-scoped file paths. There are no defined options currently.
- `reply`: A block or closure to indicate success or failure. If activation succeeds, pass an instance of [FSActivateResult](../../fsactivateresult.md) containing the root [FSItem](../../fsitem.md), along with a `nil` error. If activation fails, pass the relevant error as the second parameter; FSKit ignores the [FSActivateResult](../../fsactivateresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

When FSKit calls this method, allocate any in-memory state required to represent the file system. Also allocate an [FSItem](../../fsitem.md) for the root directory of the file system, and pass it to the reply block. FSKit caches this root item for the lifetime of the volume, and uses it as a starting point for all file look-ups.

Volume activation occurs prior to any call to mount the volume.

# activateVolumeWithOptions:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Activates the volume using the specified options.

## Declaration

```objectivec
- (void) activateVolumeWithOptions:(FSTaskOptions *) options replyHandler:(void (^)(FSActivateResult *result, NSError *error)) reply;
```

## Parameters

- `options`: Options to apply to the activation. These can include security-scoped file paths. There are no defined options currently.
- `reply`: A block or closure to indicate success or failure. If activation succeeds, pass an instance of [FSActivateResult](../../fsactivateresult.md) containing the root [FSItem](../../fsitem.md), along with a `nil` error. If activation fails, pass the relevant error as the second parameter; FSKit ignores the [FSActivateResult](../../fsactivateresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

When FSKit calls this method, allocate any in-memory state required to represent the file system. Also allocate an [FSItem](../../fsitem.md) for the root directory of the file system, and pass it to the reply block. FSKit caches this root item for the lifetime of the volume, and uses it as a starting point for all file look-ups.

Volume activation occurs prior to any call to mount the volume.
