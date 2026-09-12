> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/requestcachepolicy](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/requestcachepolicy)

# requestCachePolicy (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A predefined constant that determines when to return a response from the cache.

## Declaration

```swift
var requestCachePolicy: NSURLRequest.CachePolicy { get set }
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

This property determines the request caching policy used by tasks within sessions based on this configuration.

Set this property to one of the constants defined in [NSURLRequest.CachePolicy](../nsurlrequest/cachepolicy-swift.enum.md) to specify whether the cache policy should depend on expiration dates and age, whether the cache should be disabled entirely, and whether the server should be contacted to determine if the content has changed since it was last requested.

The default value is [NSURLRequest.CachePolicy.useProtocolCachePolicy](../nsurlrequest/cachepolicy-swift.enum/useprotocolcachepolicy.md).

## See Also

### Setting caching policies

- [urlCache](urlcache.md): The URL cache for providing cached responses to requests within the session.

# requestCachePolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A predefined constant that determines when to return a response from the cache.

## Declaration

```objectivec
@property NSURLRequestCachePolicy requestCachePolicy;
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

This property determines the request caching policy used by tasks within sessions based on this configuration.

Set this property to one of the constants defined in [NSURLRequestCachePolicy](../nsurlrequest/cachepolicy-swift.enum.md) to specify whether the cache policy should depend on expiration dates and age, whether the cache should be disabled entirely, and whether the server should be contacted to determine if the content has changed since it was last requested.

The default value is [NSURLRequestUseProtocolCachePolicy](../nsurlrequest/cachepolicy-swift.enum/useprotocolcachepolicy.md).

## See Also

### Setting caching policies

- [URLCache](urlcache.md): The URL cache for providing cached responses to requests within the session.
