> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/removecachedresponses(since:)](https://developer.apple.com/documentation/foundation/urlcache/removecachedresponses(since:))

# removeCachedResponses(since:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clears the given cache of any cached responses since the provided date.

## Declaration

```swift
func removeCachedResponses(since date: Date)
```

## Parameters

- `date`: The earliest date of responses that should remain in the cache. Any responses with dates later than this parameter should be removed.

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

## See Also

### Removing cached objects

- [removeCachedResponse(for:)](removecachedresponse%28for_%29-1dh89.md): Removes the cached URL response for a specified URL request.
- [removeCachedResponse(for:)](removecachedresponse%28for_%29-1zwp6.md): Removes the cached URL response for a specified data task.
- [removeAllCachedResponses()](removeallcachedresponses%28%29.md): Clears the receiver’s cache, removing all stored cached URL responses.

# removeCachedResponsesSinceDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clears the given cache of any cached responses since the provided date.

## Declaration

```objectivec
- (void) removeCachedResponsesSinceDate:(NSDate *) date;
```

## Parameters

- `date`: The earliest date of responses that should remain in the cache. Any responses with dates later than this parameter should be removed.

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

## See Also

### Removing cached objects

- [removeCachedResponseForRequest:](removecachedresponse%28for_%29-1dh89.md): Removes the cached URL response for a specified URL request.
- [removeCachedResponseForDataTask:](removecachedresponse%28for_%29-1zwp6.md): Removes the cached URL response for a specified data task.
- [removeAllCachedResponses](removeallcachedresponses%28%29.md): Clears the receiver’s cache, removing all stored cached URL responses.
