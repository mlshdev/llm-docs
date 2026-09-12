> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/cachepolicy-swift.enum/reloadignoringlocalcachedata](https://developer.apple.com/documentation/foundation/nsurlrequest/cachepolicy-swift.enum/reloadignoringlocalcachedata)

# NSURLRequest.CachePolicy.reloadIgnoringLocalCacheData (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL load should be loaded only from the originating source.

## Declaration

```swift
case reloadIgnoringLocalCacheData
```

## Mentioned In

- [Accessing cached data](../../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

This policy specifies that no existing cache data should be used to satisfy a URL load request.

> **Important**

>  Always use this policy if you are making HTTP or HTTPS byte-range requests.

## See Also

### Policies

- [NSURLRequest.CachePolicy.useProtocolCachePolicy](useprotocolcachepolicy.md): Use the caching logic defined in the protocol implementation, if any, for a particular URL load request.
- [NSURLRequest.CachePolicy.reloadIgnoringLocalAndRemoteCacheData](reloadignoringlocalandremotecachedata.md): Ignore local cache data, and instruct proxies and other intermediates to disregard their caches so far as the protocol allows.
- [reloadIgnoringCacheData](reloadignoringcachedata.md): Replaced by [NSURLRequest.CachePolicy.reloadIgnoringLocalCacheData](reloadignoringlocalcachedata.md).
- [NSURLRequest.CachePolicy.returnCacheDataElseLoad](returncachedataelseload.md): Use existing cache data, regardless or age or expiration date, loading from originating source only if there is no cached data.
- [NSURLRequest.CachePolicy.returnCacheDataDontLoad](returncachedatadontload.md): Use existing cache data, regardless or age or expiration date, and fail if no cached data is available.
- [NSURLRequest.CachePolicy.reloadRevalidatingCacheData](reloadrevalidatingcachedata.md): Use cache data if the origin source can validate it; otherwise, load from the origin.

# NSURLRequestReloadIgnoringLocalCacheData (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL load should be loaded only from the originating source.

## Declaration

```objectivec
NSURLRequestReloadIgnoringLocalCacheData
```

## Mentioned In

- [Accessing cached data](../../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

This policy specifies that no existing cache data should be used to satisfy a URL load request.

> **Important**

>  Always use this policy if you are making HTTP or HTTPS byte-range requests.

## See Also

### Policies

- [NSURLRequestUseProtocolCachePolicy](useprotocolcachepolicy.md): Use the caching logic defined in the protocol implementation, if any, for a particular URL load request.
- [NSURLRequestReloadIgnoringLocalAndRemoteCacheData](reloadignoringlocalandremotecachedata.md): Ignore local cache data, and instruct proxies and other intermediates to disregard their caches so far as the protocol allows.
- [NSURLRequestReloadIgnoringCacheData](reloadignoringcachedata.md): Replaced by [NSURLRequestReloadIgnoringLocalCacheData](reloadignoringlocalcachedata.md).
- [NSURLRequestReturnCacheDataElseLoad](returncachedataelseload.md): Use existing cache data, regardless or age or expiration date, loading from originating source only if there is no cached data.
- [NSURLRequestReturnCacheDataDontLoad](returncachedatadontload.md): Use existing cache data, regardless or age or expiration date, and fail if no cached data is available.
- [NSURLRequestReloadRevalidatingCacheData](reloadrevalidatingcachedata.md): Use cache data if the origin source can validate it; otherwise, load from the origin.
