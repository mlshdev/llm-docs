> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlrequest/init(url:cachepolicy:timeoutinterval:)

# init(url:cachePolicy:timeoutInterval:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a URL request with the given URL, cache policy, and timeout interval.

## Declaration

```swift
init(url: URL, cachePolicy: URLRequest.CachePolicy = .useProtocolCachePolicy, timeoutInterval: TimeInterval = 60.0)
```

## Parameters

- `url`: The URL for the request.
- `cachePolicy`: The cache policy for the request. The default is [NSURLRequest.CachePolicy.useProtocolCachePolicy](../nsurlrequest/cachepolicy-swift.enum/useprotocolcachepolicy.md).
- `timeoutInterval`: The timeout interval for the request. The default is `60.0`. See the commentary for the [timeoutInterval](../nsurlrequest/timeoutinterval.md) for more information on timeout intervals.
