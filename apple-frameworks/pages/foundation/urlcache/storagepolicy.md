> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/storagepolicy](https://developer.apple.com/documentation/foundation/urlcache/storagepolicy)

# URLCache.StoragePolicy (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants specify the caching strategy used by an [CachedURLResponse](../cachedurlresponse.md) object.

## Declaration

```swift
enum StoragePolicy
```

## Topics

### Policies

- [URLCache.StoragePolicy.allowed](storagepolicy/allowed.md): Storage in [URLCache](../urlcache.md) is allowed without restriction.
- [URLCache.StoragePolicy.allowedInMemoryOnly](storagepolicy/allowedinmemoryonly.md): Storage in [URLCache](../urlcache.md) is allowed; however storage should be restricted to memory only.
- [URLCache.StoragePolicy.notAllowed](storagepolicy/notallowed.md): Storage in [URLCache](../urlcache.md) is not allowed in any fashion, either in memory or on disk.

### Initializers

- [init(rawValue:)](storagepolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSURLCacheStoragePolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants specify the caching strategy used by an [NSCachedURLResponse](../cachedurlresponse.md) object.

## Declaration

```objectivec
enum NSURLCacheStoragePolicy : NSUInteger;
```

## Topics

### Policies

- [NSURLCacheStorageAllowed](storagepolicy/allowed.md): Storage in [NSURLCache](../urlcache.md) is allowed without restriction.
- [NSURLCacheStorageAllowedInMemoryOnly](storagepolicy/allowedinmemoryonly.md): Storage in [NSURLCache](../urlcache.md) is allowed; however storage should be restricted to memory only.
- [NSURLCacheStorageNotAllowed](storagepolicy/notallowed.md): Storage in [NSURLCache](../urlcache.md) is not allowed in any fashion, either in memory or on disk.
