> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/cachepolicy-swift.enum](https://developer.apple.com/documentation/foundation/nsurlrequest/cachepolicy-swift.enum)

# NSURLRequest.CachePolicy (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The constants used to specify interaction with the cached responses.

## Declaration

```swift
enum CachePolicy
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="overview"></a>

## Overview

The default policy is [NSURLRequest.CachePolicy.useProtocolCachePolicy](cachepolicy-swift.enum/useprotocolcachepolicy.md).

## Topics

### Policies

- [NSURLRequest.CachePolicy.useProtocolCachePolicy](cachepolicy-swift.enum/useprotocolcachepolicy.md): Use the caching logic defined in the protocol implementation, if any, for a particular URL load request.
- [NSURLRequest.CachePolicy.reloadIgnoringLocalCacheData](cachepolicy-swift.enum/reloadignoringlocalcachedata.md): The URL load should be loaded only from the originating source.
- [NSURLRequest.CachePolicy.reloadIgnoringLocalAndRemoteCacheData](cachepolicy-swift.enum/reloadignoringlocalandremotecachedata.md): Ignore local cache data, and instruct proxies and other intermediates to disregard their caches so far as the protocol allows.
- [reloadIgnoringCacheData](cachepolicy-swift.enum/reloadignoringcachedata.md): Replaced by [NSURLRequest.CachePolicy.reloadIgnoringLocalCacheData](cachepolicy-swift.enum/reloadignoringlocalcachedata.md).
- [NSURLRequest.CachePolicy.returnCacheDataElseLoad](cachepolicy-swift.enum/returncachedataelseload.md): Use existing cache data, regardless or age or expiration date, loading from originating source only if there is no cached data.
- [NSURLRequest.CachePolicy.returnCacheDataDontLoad](cachepolicy-swift.enum/returncachedatadontload.md): Use existing cache data, regardless or age or expiration date, and fail if no cached data is available.
- [NSURLRequest.CachePolicy.reloadRevalidatingCacheData](cachepolicy-swift.enum/reloadrevalidatingcachedata.md): Use cache data if the origin source can validate it; otherwise, load from the origin.

### Initializers

- [init(rawValue:)](cachepolicy-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with a cache policy

- [cachePolicy](../nsmutableurlrequest/cachepolicy.md): The request’s cache policy.

# NSURLRequestCachePolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The constants used to specify interaction with the cached responses.

## Declaration

```objectivec
enum NSURLRequestCachePolicy : NSUInteger;
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="overview"></a>

## Overview

The default policy is [NSURLRequestUseProtocolCachePolicy](cachepolicy-swift.enum/useprotocolcachepolicy.md).

## Topics

### Policies

- [NSURLRequestUseProtocolCachePolicy](cachepolicy-swift.enum/useprotocolcachepolicy.md): Use the caching logic defined in the protocol implementation, if any, for a particular URL load request.
- [NSURLRequestReloadIgnoringLocalCacheData](cachepolicy-swift.enum/reloadignoringlocalcachedata.md): The URL load should be loaded only from the originating source.
- [NSURLRequestReloadIgnoringLocalAndRemoteCacheData](cachepolicy-swift.enum/reloadignoringlocalandremotecachedata.md): Ignore local cache data, and instruct proxies and other intermediates to disregard their caches so far as the protocol allows.
- [NSURLRequestReloadIgnoringCacheData](cachepolicy-swift.enum/reloadignoringcachedata.md): Replaced by [NSURLRequestReloadIgnoringLocalCacheData](cachepolicy-swift.enum/reloadignoringlocalcachedata.md).
- [NSURLRequestReturnCacheDataElseLoad](cachepolicy-swift.enum/returncachedataelseload.md): Use existing cache data, regardless or age or expiration date, loading from originating source only if there is no cached data.
- [NSURLRequestReturnCacheDataDontLoad](cachepolicy-swift.enum/returncachedatadontload.md): Use existing cache data, regardless or age or expiration date, and fail if no cached data is available.
- [NSURLRequestReloadRevalidatingCacheData](cachepolicy-swift.enum/reloadrevalidatingcachedata.md): Use cache data if the origin source can validate it; otherwise, load from the origin.

## See Also

### Working with a cache policy

- [cachePolicy](../nsmutableurlrequest/cachepolicy.md): The request’s cache policy.
