> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/kernelcachecoherencyaction/pushinvalidate

# FSVolume.KernelCacheCoherencyAction.pushInvalidate (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

An action to flush dirty data to storage and invalidate (clear) the cache. This also invalidates the item’s cached attributes, so the next request for attributes fetches them from your module.

## Declaration

```swift
case pushInvalidate
```

<a id="discussion"></a>

## Discussion

For a directory, this also purges the kernel name cache for the directory’s entries. With the name cache purged, any later lookup re-populates the cache.

## See Also

### Coherency actions

- [FSVolume.KernelCacheCoherencyAction.push](push.md): An action to flush dirty data from cache to storage, preserving cache contents.
- [FSVolume.KernelCacheCoherencyAction.invalidate](invalidate.md): An action to invalidate (clear) the cache, discarding any dirty data without writing to storage. This also invalidates the item’s cached attributes, so the next request for attributes fetches them from your module.
- [FSVolume.KernelCacheCoherencyAction.update](update.md): An action to update the coherency mode while keeping the cache valid, requiring no push or invalidation.
- [FSVolume.KernelCacheCoherencyAction.revoke](revoke.md): An action to invalidate all caches, revoke all access to the item, and trigger vnode reclamation.

# FSKernelCacheCoherencyActionPushInvalidate (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An action to flush dirty data to storage and invalidate (clear) the cache. This also invalidates the item’s cached attributes, so the next request for attributes fetches them from your module.

## Declaration

```objectivec
FSKernelCacheCoherencyActionPushInvalidate
```

<a id="discussion"></a>

## Discussion

For a directory, this also purges the kernel name cache for the directory’s entries. With the name cache purged, any later lookup re-populates the cache.

## See Also

### Coherency actions

- [FSKernelCacheCoherencyActionPush](push.md): An action to flush dirty data from cache to storage, preserving cache contents.
- [FSKernelCacheCoherencyActionInvalidate](invalidate.md): An action to invalidate (clear) the cache, discarding any dirty data without writing to storage. This also invalidates the item’s cached attributes, so the next request for attributes fetches them from your module.
- [FSKernelCacheCoherencyActionUpdate](update.md): An action to update the coherency mode while keeping the cache valid, requiring no push or invalidation.
- [FSKernelCacheCoherencyActionRevoke](revoke.md): An action to invalidate all caches, revoke all access to the item, and trigger vnode reclamation.
