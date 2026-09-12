> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/datacachehandler/upgrade(_:cachemode:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/datacachehandler/upgrade(_:cachemode:context:replyhandler:))

# upgrade(\_:cacheMode:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Upgrades the item cache mode to a less restrictive level, allowing more caching.

## Declaration

```swift
func upgrade(_ item: FSItem, cacheMode: FSVolume.DataCacheMode, context: FSContext, replyHandler reply: @escaping @Sendable (FSUpgradeItemResult?, (any Error)?) -> Void)
```

```swift
func upgrade(_ item: FSItem, cacheMode: FSVolume.DataCacheMode, context: FSContext) async throws -> FSUpgradeItemResult
```

## Parameters

- `item`: The item for which to upgrade the cache mode.
- `cacheMode`: The new (more permissive) cache mode being requested.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If successful, pass an instance of [FSUpgradeItemResult](../../fsupgradeitemresult.md) containing the granted [FSVolume.KernelCacheCoherencyType](../kernelcachecoherencytype.md), along with a `nil` error. If upgrading fails, pass the relevant error as the second parameter; FSKit ignores the [FSUpgradeItemResult](../../fsupgradeitemresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

FSKit calls this method when transitioning to a cache mode that allows more aggressive caching.

## See Also

### Changing cache behavior

- [FSItem](../../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSContext](../../fscontext.md): A context object that provides information about the initiator of a file system operation.
- [FSUpgradeItemResult](../../fsupgradeitemresult.md): The result of an upgrade-item call.

# upgradeItem:cacheMode:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Upgrades the item cache mode to a less restrictive level, allowing more caching.

## Declaration

```objectivec
- (void) upgradeItem:(FSItem *) item cacheMode:(FSDataCacheMode) cacheMode context:(FSContext *) context replyHandler:(void (^)(FSUpgradeItemResult *result, NSError *error)) reply;
```

## Parameters

- `item`: The item for which to upgrade the cache mode.
- `cacheMode`: The new (more permissive) cache mode being requested.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If successful, pass an instance of [FSUpgradeItemResult](../../fsupgradeitemresult.md) containing the granted [FSKernelCacheCoherencyType](../kernelcachecoherencytype.md), along with a `nil` error. If upgrading fails, pass the relevant error as the second parameter; FSKit ignores the [FSUpgradeItemResult](../../fsupgradeitemresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

FSKit calls this method when transitioning to a cache mode that allows more aggressive caching.

## See Also

### Changing cache behavior

- [FSItem](../../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSContext](../../fscontext.md): A context object that provides information about the initiator of a file system operation.
- [FSUpgradeItemResult](../../fsupgradeitemresult.md): The result of an upgrade-item call.
