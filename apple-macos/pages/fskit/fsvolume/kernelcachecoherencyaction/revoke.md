> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/kernelcachecoherencyaction/revoke](https://developer.apple.com/documentation/fskit/fsvolume/kernelcachecoherencyaction/revoke)

# FSVolume.KernelCacheCoherencyAction.revoke (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

An action to invalidate all caches, revoke all access to the item, and trigger vnode reclamation.

## Declaration

```swift
case revoke
```

<a id="discussion"></a>

## Discussion

Use this action when the module determines that an item no longer exists or is no longer accessible. Common scenarios include:

- Another client deleted the item, as detected via server notification.
- The module received a server callback indicating the file’s absence.

## See Also

### Coherency actions

- [FSVolume.KernelCacheCoherencyAction.push](push.md): An action to flush dirty data from cache to storage, preserving cache contents.
- [FSVolume.KernelCacheCoherencyAction.pushInvalidate](pushinvalidate.md): An action to flush dirty data to storage and invalidate (clear) the cache.
- [FSVolume.KernelCacheCoherencyAction.invalidate](invalidate.md): An action to invalidate (clear) the cache, discarding any dirty data without writing to storage.
- [FSVolume.KernelCacheCoherencyAction.update](update.md): An action to update the coherency mode while keeping the cache valid, requiring no push or invalidation.

# FSKernelCacheCoherencyActionRevoke (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An action to invalidate all caches, revoke all access to the item, and trigger vnode reclamation.

## Declaration

```objectivec
FSKernelCacheCoherencyActionRevoke
```

<a id="discussion"></a>

## Discussion

Use this action when the module determines that an item no longer exists or is no longer accessible. Common scenarios include:

- Another client deleted the item, as detected via server notification.
- The module received a server callback indicating the file’s absence.

## See Also

### Coherency actions

- [FSKernelCacheCoherencyActionPush](push.md): An action to flush dirty data from cache to storage, preserving cache contents.
- [FSKernelCacheCoherencyActionPushInvalidate](pushinvalidate.md): An action to flush dirty data to storage and invalidate (clear) the cache.
- [FSKernelCacheCoherencyActionInvalidate](invalidate.md): An action to invalidate (clear) the cache, discarding any dirty data without writing to storage.
- [FSKernelCacheCoherencyActionUpdate](update.md): An action to update the coherency mode while keeping the cache valid, requiring no push or invalidation.
