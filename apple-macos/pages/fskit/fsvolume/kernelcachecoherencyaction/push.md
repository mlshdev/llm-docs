> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/kernelcachecoherencyaction/push](https://developer.apple.com/documentation/fskit/fsvolume/kernelcachecoherencyaction/push)

# FSVolume.KernelCacheCoherencyAction.push (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

An action to flush dirty data from cache to storage, preserving cache contents.

## Declaration

```swift
case push
```

## See Also

### Coherency actions

- [FSVolume.KernelCacheCoherencyAction.pushInvalidate](pushinvalidate.md): An action to flush dirty data to storage and invalidate (clear) the cache.
- [FSVolume.KernelCacheCoherencyAction.invalidate](invalidate.md): An action to invalidate (clear) the cache, discarding any dirty data without writing to storage.
- [FSVolume.KernelCacheCoherencyAction.update](update.md): An action to update the coherency mode while keeping the cache valid, requiring no push or invalidation.
- [FSVolume.KernelCacheCoherencyAction.revoke](revoke.md): An action to invalidate all caches, revoke all access to the item, and trigger vnode reclamation.

# FSKernelCacheCoherencyActionPush (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An action to flush dirty data from cache to storage, preserving cache contents.

## Declaration

```objectivec
FSKernelCacheCoherencyActionPush
```

## See Also

### Coherency actions

- [FSKernelCacheCoherencyActionPushInvalidate](pushinvalidate.md): An action to flush dirty data to storage and invalidate (clear) the cache.
- [FSKernelCacheCoherencyActionInvalidate](invalidate.md): An action to invalidate (clear) the cache, discarding any dirty data without writing to storage.
- [FSKernelCacheCoherencyActionUpdate](update.md): An action to update the coherency mode while keeping the cache valid, requiring no push or invalidation.
- [FSKernelCacheCoherencyActionRevoke](revoke.md): An action to invalidate all caches, revoke all access to the item, and trigger vnode reclamation.
