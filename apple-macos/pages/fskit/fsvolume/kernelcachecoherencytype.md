> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/kernelcachecoherencytype](https://developer.apple.com/documentation/fskit/fsvolume/kernelcachecoherencytype)

# FSVolume.KernelCacheCoherencyType (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

A type that defines how the kernel caches data.

## Declaration

```swift
enum KernelCacheCoherencyType
```

## Topics

### Coherency types

This list presents the coherency types in order of permissiveness, from least permissive to most.

- [FSVolume.KernelCacheCoherencyType.noCache](kernelcachecoherencytype/nocache.md): A type that indicates all I/O goes directly to storage, without caching.
- [FSVolume.KernelCacheCoherencyType.readCache](kernelcachecoherencytype/readcache.md): A type that indicates that writes bypass the cache and go directly to storage.
- [FSVolume.KernelCacheCoherencyType.writeBack](kernelcachecoherencytype/writeback.md): A type that indicates writes immediately update the cache only, followed by a deferred write to storage.
- [FSVolume.KernelCacheCoherencyType.writeThrough](kernelcachecoherencytype/writethrough.md): A type that indicates writes update cache and storage synchronously.

### Initializers

- [init(rawValue:)](kernelcachecoherencytype/init%28rawvalue_%29.md)

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
- [FSVolume.KernelCacheCoherencyAction](kernelcachecoherencyaction.md): A type that defines actions for cache state changes.

# FSKernelCacheCoherencyType (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A type that defines how the kernel caches data.

## Declaration

```objectivec
enum FSKernelCacheCoherencyType : NSInteger;
```

## Topics

### Coherency types

This list presents the coherency types in order of permissiveness, from least permissive to most.

- [FSKernelCacheCoherencyTypeNoCache](kernelcachecoherencytype/nocache.md): A type that indicates all I/O goes directly to storage, without caching.
- [FSKernelCacheCoherencyTypeReadCache](kernelcachecoherencytype/readcache.md): A type that indicates that writes bypass the cache and go directly to storage.
- [FSKernelCacheCoherencyTypeWriteBack](kernelcachecoherencytype/writeback.md): A type that indicates writes immediately update the cache only, followed by a deferred write to storage.
- [FSKernelCacheCoherencyTypeWriteThrough](kernelcachecoherencytype/writethrough.md): A type that indicates writes update cache and storage synchronously.

## See Also

### Managing caching behavior

- [setCacheStateForItem:cacheMode:coherencyType:coherencyAction:](setcachestate%28for_cachemode_coherencytype_action_%29.md): Sends a synchronous cache state update request from the module to the kernel.
- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSDataCacheMode](datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSKernelCacheCoherencyAction](kernelcachecoherencyaction.md): A type that defines actions for cache state changes.
