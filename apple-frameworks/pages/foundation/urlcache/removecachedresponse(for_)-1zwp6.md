> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/removecachedresponse(for:)-1zwp6](https://developer.apple.com/documentation/foundation/urlcache/removecachedresponse(for:)-1zwp6)

# removeCachedResponse(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the cached URL response for a specified data task.

## Declaration

```swift
func removeCachedResponse(for dataTask: URLSessionDataTask)
```

## Parameters

- `dataTask`: A task whose URL request’s corresponding cached URL response should be removed. If there is no corresponding cached URL response, no action is taken.

## See Also

### Removing cached objects

- [removeCachedResponse(for:)](removecachedresponse%28for_%29-1dh89.md): Removes the cached URL response for a specified URL request.
- [removeCachedResponses(since:)](removecachedresponses%28since_%29.md): Clears the given cache of any cached responses since the provided date.
- [removeAllCachedResponses()](removeallcachedresponses%28%29.md): Clears the receiver’s cache, removing all stored cached URL responses.

# removeCachedResponseForDataTask: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the cached URL response for a specified data task.

## Declaration

```objectivec
- (void) removeCachedResponseForDataTask:(NSURLSessionDataTask *) dataTask;
```

## Parameters

- `dataTask`: A task whose URL request’s corresponding cached URL response should be removed. If there is no corresponding cached URL response, no action is taken.

## See Also

### Removing cached objects

- [removeCachedResponseForRequest:](removecachedresponse%28for_%29-1dh89.md): Removes the cached URL response for a specified URL request.
- [removeCachedResponsesSinceDate:](removecachedresponses%28since_%29.md): Clears the given cache of any cached responses since the provided date.
- [removeAllCachedResponses](removeallcachedresponses%28%29.md): Clears the receiver’s cache, removing all stored cached URL responses.
