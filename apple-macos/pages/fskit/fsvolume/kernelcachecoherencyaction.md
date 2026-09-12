> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/kernelcachecoherencyaction](https://developer.apple.com/documentation/fskit/fsvolume/kernelcachecoherencyaction)

# FSVolume.KernelCacheCoherencyAction (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

A type that defines actions for cache state changes.

## Declaration

```swift
enum KernelCacheCoherencyAction
```

## Topics

### Coherency actions

- [FSVolume.KernelCacheCoherencyAction.push](kernelcachecoherencyaction/push.md): An action to flush dirty data from cache to storage, preserving cache contents.
- [FSVolume.KernelCacheCoherencyAction.pushInvalidate](kernelcachecoherencyaction/pushinvalidate.md): An action to flush dirty data to storage and invalidate (clear) the cache.
- [FSVolume.KernelCacheCoherencyAction.invalidate](kernelcachecoherencyaction/invalidate.md): An action to invalidate (clear) the cache, discarding any dirty data without writing to storage.
- [FSVolume.KernelCacheCoherencyAction.update](kernelcachecoherencyaction/update.md): An action to update the coherency mode while keeping the cache valid, requiring no push or invalidation.
- [FSVolume.KernelCacheCoherencyAction.revoke](kernelcachecoherencyaction/revoke.md): An action to invalidate all caches, revoke all access to the item, and trigger vnode reclamation.

### Initializers

- [init(rawValue:)](kernelcachecoherencyaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing caching behavior

- [setCacheState(for:cacheMode:coherencyType:action:)](setcachestate%28for_cachemode_coherencytype_action_%29.md): Sends a synchronous cache state update request from the module to the kernel.
- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSVolume.DataCacheMode](datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSVolume.KernelCacheCoherencyType](kernelcachecoherencytype.md): A type that defines how the kernel caches data.

# FSKernelCacheCoherencyAction (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A type that defines actions for cache state changes.

## Declaration

```objectivec
enum FSKernelCacheCoherencyAction : NSInteger;
```

## Topics

### Coherency actions

- [FSKernelCacheCoherencyActionPush](kernelcachecoherencyaction/push.md): An action to flush dirty data from cache to storage, preserving cache contents.
- [FSKernelCacheCoherencyActionPushInvalidate](kernelcachecoherencyaction/pushinvalidate.md): An action to flush dirty data to storage and invalidate (clear) the cache.
- [FSKernelCacheCoherencyActionInvalidate](kernelcachecoherencyaction/invalidate.md): An action to invalidate (clear) the cache, discarding any dirty data without writing to storage.
- [FSKernelCacheCoherencyActionUpdate](kernelcachecoherencyaction/update.md): An action to update the coherency mode while keeping the cache valid, requiring no push or invalidation.
- [FSKernelCacheCoherencyActionRevoke](kernelcachecoherencyaction/revoke.md): An action to invalidate all caches, revoke all access to the item, and trigger vnode reclamation.

## See Also

### Managing caching behavior

- [setCacheStateForItem:cacheMode:coherencyType:coherencyAction:](setcachestate%28for_cachemode_coherencytype_action_%29.md): Sends a synchronous cache state update request from the module to the kernel.
- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSDataCacheMode](datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSKernelCacheCoherencyType](kernelcachecoherencytype.md): A type that defines how the kernel caches data.
