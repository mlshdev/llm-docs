> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/kernelcachecoherencytype/nocache](https://developer.apple.com/documentation/fskit/fsvolume/kernelcachecoherencytype/nocache)

# FSVolume.KernelCacheCoherencyType.noCache (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

A type that indicates all I/O goes directly to storage, without caching.

## Declaration

```swift
case noCache
```

## See Also

### Coherency types

- [FSVolume.KernelCacheCoherencyType.readCache](readcache.md): A type that indicates that writes bypass the cache and go directly to storage.
- [FSVolume.KernelCacheCoherencyType.writeBack](writeback.md): A type that indicates writes immediately update the cache only, followed by a deferred write to storage.
- [FSVolume.KernelCacheCoherencyType.writeThrough](writethrough.md): A type that indicates writes update cache and storage synchronously.

# FSKernelCacheCoherencyTypeNoCache (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

A type that indicates all I/O goes directly to storage, without caching.

## Declaration

```objectivec
FSKernelCacheCoherencyTypeNoCache
```

## See Also

### Coherency types

- [FSKernelCacheCoherencyTypeReadCache](readcache.md): A type that indicates that writes bypass the cache and go directly to storage.
- [FSKernelCacheCoherencyTypeWriteBack](writeback.md): A type that indicates writes immediately update the cache only, followed by a deferred write to storage.
- [FSKernelCacheCoherencyTypeWriteThrough](writethrough.md): A type that indicates writes update cache and storage synchronously.
