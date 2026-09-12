> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/datacachemode](https://developer.apple.com/documentation/fskit/fsvolume/datacachemode)

# FSVolume.DataCacheMode (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

A type that defines the cache mode requested by the kernel for data operations.

## Declaration

```swift
enum DataCacheMode
```

## Topics

### Data cache modes

- [FSVolume.DataCacheMode.none](datacachemode/none.md): A mode that indicates no active caching.
- [FSVolume.DataCacheMode.readWithCache](datacachemode/readwithcache.md): A mode that indicates read access with caching enabled.
- [FSVolume.DataCacheMode.readWriteWithCache](datacachemode/readwritewithcache.md): A mode that indicates read-write access with caching enabled.

### Initializers

- [init(rawValue:)](datacachemode/init%28rawvalue_%29.md)

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
- [FSVolume.KernelCacheCoherencyType](kernelcachecoherencytype.md): A type that defines how the kernel caches data.
- [FSVolume.KernelCacheCoherencyAction](kernelcachecoherencyaction.md): A type that defines actions for cache state changes.

# FSDataCacheMode (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A type that defines the cache mode requested by the kernel for data operations.

## Declaration

```objectivec
enum FSDataCacheMode : NSInteger;
```

## Topics

### Data cache modes

- [FSDataCacheModeNone](datacachemode/none.md): A mode that indicates no active caching.
- [FSDataCacheModeReadWithCache](datacachemode/readwithcache.md): A mode that indicates read access with caching enabled.
- [FSDataCacheModeReadWriteWithCache](datacachemode/readwritewithcache.md): A mode that indicates read-write access with caching enabled.

## See Also

### Managing caching behavior

- [setCacheStateForItem:cacheMode:coherencyType:coherencyAction:](setcachestate%28for_cachemode_coherencytype_action_%29.md): Sends a synchronous cache state update request from the module to the kernel.
- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSKernelCacheCoherencyType](kernelcachecoherencytype.md): A type that defines how the kernel caches data.
- [FSKernelCacheCoherencyAction](kernelcachecoherencyaction.md): A type that defines actions for cache state changes.
