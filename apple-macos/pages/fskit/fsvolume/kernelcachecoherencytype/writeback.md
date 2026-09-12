> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/kernelcachecoherencytype/writeback](https://developer.apple.com/documentation/fskit/fsvolume/kernelcachecoherencytype/writeback)

# FSVolume.KernelCacheCoherencyType.writeBack (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

A type that indicates writes immediately update the cache only, followed by a deferred write to storage.

## Declaration

```swift
case writeBack
```

## See Also

### Coherency types

- [FSVolume.KernelCacheCoherencyType.noCache](nocache.md): A type that indicates all I/O goes directly to storage, without caching.
- [FSVolume.KernelCacheCoherencyType.readCache](readcache.md): A type that indicates that writes bypass the cache and go directly to storage.
- [FSVolume.KernelCacheCoherencyType.writeThrough](writethrough.md): A type that indicates writes update cache and storage synchronously.

# FSKernelCacheCoherencyTypeWriteBack (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

A type that indicates writes immediately update the cache only, followed by a deferred write to storage.

## Declaration

```objectivec
FSKernelCacheCoherencyTypeWriteBack
```

## See Also

### Coherency types

- [FSKernelCacheCoherencyTypeNoCache](nocache.md): A type that indicates all I/O goes directly to storage, without caching.
- [FSKernelCacheCoherencyTypeReadCache](readcache.md): A type that indicates that writes bypass the cache and go directly to storage.
- [FSKernelCacheCoherencyTypeWriteThrough](writethrough.md): A type that indicates writes update cache and storage synchronously.
