> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/storagepolicy/allowedinmemoryonly](https://developer.apple.com/documentation/foundation/urlcache/storagepolicy/allowedinmemoryonly)

# URLCache.StoragePolicy.allowedInMemoryOnly (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Storage in [URLCache](../../urlcache.md) is allowed; however storage should be restricted to memory only.

## Declaration

```swift
case allowedInMemoryOnly
```

## See Also

### Policies

- [URLCache.StoragePolicy.allowed](allowed.md): Storage in [URLCache](../../urlcache.md) is allowed without restriction.
- [URLCache.StoragePolicy.notAllowed](notallowed.md): Storage in [URLCache](../../urlcache.md) is not allowed in any fashion, either in memory or on disk.

# NSURLCacheStorageAllowedInMemoryOnly (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Storage in [NSURLCache](../../urlcache.md) is allowed; however storage should be restricted to memory only.

## Declaration

```objectivec
NSURLCacheStorageAllowedInMemoryOnly
```

## See Also

### Policies

- [NSURLCacheStorageAllowed](allowed.md): Storage in [NSURLCache](../../urlcache.md) is allowed without restriction.
- [NSURLCacheStorageNotAllowed](notallowed.md): Storage in [NSURLCache](../../urlcache.md) is not allowed in any fashion, either in memory or on disk.
