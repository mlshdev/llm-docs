> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/storagepolicy/allowed](https://developer.apple.com/documentation/foundation/urlcache/storagepolicy/allowed)

# URLCache.StoragePolicy.allowed (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Storage in [URLCache](../../urlcache.md) is allowed without restriction.

## Declaration

```swift
case allowed
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  iOS prior to version 5 ignores this cache policy, and instead treats it as [URLCache.StoragePolicy.allowedInMemoryOnly](allowedinmemoryonly.md).

## See Also

### Policies

- [URLCache.StoragePolicy.allowedInMemoryOnly](allowedinmemoryonly.md): Storage in [URLCache](../../urlcache.md) is allowed; however storage should be restricted to memory only.
- [URLCache.StoragePolicy.notAllowed](notallowed.md): Storage in [URLCache](../../urlcache.md) is not allowed in any fashion, either in memory or on disk.

# NSURLCacheStorageAllowed (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Storage in [NSURLCache](../../urlcache.md) is allowed without restriction.

## Declaration

```objectivec
NSURLCacheStorageAllowed
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  iOS prior to version 5 ignores this cache policy, and instead treats it as [NSURLCacheStorageAllowedInMemoryOnly](allowedinmemoryonly.md).

## See Also

### Policies

- [NSURLCacheStorageAllowedInMemoryOnly](allowedinmemoryonly.md): Storage in [NSURLCache](../../urlcache.md) is allowed; however storage should be restricted to memory only.
- [NSURLCacheStorageNotAllowed](notallowed.md): Storage in [NSURLCache](../../urlcache.md) is not allowed in any fashion, either in memory or on disk.
