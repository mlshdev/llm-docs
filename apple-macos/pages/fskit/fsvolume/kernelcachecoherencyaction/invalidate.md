> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/kernelcachecoherencyaction/invalidate](https://developer.apple.com/documentation/fskit/fsvolume/kernelcachecoherencyaction/invalidate)

# FSVolume.KernelCacheCoherencyAction.invalidate (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

An action to invalidate (clear) the cache, discarding any dirty data without writing to storage.

## Declaration

```swift
case invalidate
```

## See Also

### Coherency actions

- [FSVolume.KernelCacheCoherencyAction.push](push.md): An action to flush dirty data from cache to storage, preserving cache contents.
- [FSVolume.KernelCacheCoherencyAction.pushInvalidate](pushinvalidate.md): An action to flush dirty data to storage and invalidate (clear) the cache.
- [FSVolume.KernelCacheCoherencyAction.update](update.md): An action to update the coherency mode while keeping the cache valid, requiring no push or invalidation.
- [FSVolume.KernelCacheCoherencyAction.revoke](revoke.md): An action to invalidate all caches, revoke all access to the item, and trigger vnode reclamation.

# FSKernelCacheCoherencyActionInvalidate (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An action to invalidate (clear) the cache, discarding any dirty data without writing to storage.

## Declaration

```objectivec
FSKernelCacheCoherencyActionInvalidate
```

## See Also

### Coherency actions

- [FSKernelCacheCoherencyActionPush](push.md): An action to flush dirty data from cache to storage, preserving cache contents.
- [FSKernelCacheCoherencyActionPushInvalidate](pushinvalidate.md): An action to flush dirty data to storage and invalidate (clear) the cache.
- [FSKernelCacheCoherencyActionUpdate](update.md): An action to update the coherency mode while keeping the cache valid, requiring no push or invalidation.
- [FSKernelCacheCoherencyActionRevoke](revoke.md): An action to invalidate all caches, revoke all access to the item, and trigger vnode reclamation.
