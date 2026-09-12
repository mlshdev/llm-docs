> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/removecachedresponse(for:)-1dh89](https://developer.apple.com/documentation/foundation/urlcache/removecachedresponse(for:)-1dh89)

# removeCachedResponse(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the cached URL response for a specified URL request.

## Declaration

```swift
func removeCachedResponse(for request: URLRequest)
```

## Parameters

- `request`: The URL request whose cached URL response should be removed. If there is no corresponding cached URL response, no action is taken.

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

If you override this method, you should also override [removeCachedResponse(for:)](removecachedresponse%28for_%29-1zwp6.md).

## See Also

### Removing cached objects

- [removeCachedResponse(for:)](removecachedresponse%28for_%29-1zwp6.md): Removes the cached URL response for a specified data task.
- [removeCachedResponses(since:)](removecachedresponses%28since_%29.md): Clears the given cache of any cached responses since the provided date.
- [removeAllCachedResponses()](removeallcachedresponses%28%29.md): Clears the receiver’s cache, removing all stored cached URL responses.

# removeCachedResponseForRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the cached URL response for a specified URL request.

## Declaration

```objectivec
- (void) removeCachedResponseForRequest:(NSURLRequest *) request;
```

## Parameters

- `request`: The URL request whose cached URL response should be removed. If there is no corresponding cached URL response, no action is taken.

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

If you override this method, you should also override [removeCachedResponseForDataTask:](removecachedresponse%28for_%29-1zwp6.md).

## See Also

### Removing cached objects

- [removeCachedResponseForDataTask:](removecachedresponse%28for_%29-1zwp6.md): Removes the cached URL response for a specified data task.
- [removeCachedResponsesSinceDate:](removecachedresponses%28since_%29.md): Clears the given cache of any cached responses since the provided date.
- [removeAllCachedResponses](removeallcachedresponses%28%29.md): Clears the receiver’s cache, removing all stored cached URL responses.
