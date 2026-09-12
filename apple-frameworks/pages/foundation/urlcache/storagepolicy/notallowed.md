> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/storagepolicy/notallowed](https://developer.apple.com/documentation/foundation/urlcache/storagepolicy/notallowed)

# URLCache.StoragePolicy.notAllowed (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Storage in [URLCache](../../urlcache.md) is not allowed in any fashion, either in memory or on disk.

## Declaration

```swift
case notAllowed
```

## See Also

### Policies

- [URLCache.StoragePolicy.allowed](allowed.md): Storage in [URLCache](../../urlcache.md) is allowed without restriction.
- [URLCache.StoragePolicy.allowedInMemoryOnly](allowedinmemoryonly.md): Storage in [URLCache](../../urlcache.md) is allowed; however storage should be restricted to memory only.

# NSURLCacheStorageNotAllowed (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Storage in [NSURLCache](../../urlcache.md) is not allowed in any fashion, either in memory or on disk.

## Declaration

```objectivec
NSURLCacheStorageNotAllowed
```

## See Also

### Policies

- [NSURLCacheStorageAllowed](allowed.md): Storage in [NSURLCache](../../urlcache.md) is allowed without restriction.
- [NSURLCacheStorageAllowedInMemoryOnly](allowedinmemoryonly.md): Storage in [NSURLCache](../../urlcache.md) is allowed; however storage should be restricted to memory only.
