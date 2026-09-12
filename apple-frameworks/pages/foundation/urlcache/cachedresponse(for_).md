> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/cachedresponse(for:)](https://developer.apple.com/documentation/foundation/urlcache/cachedresponse(for:))

# cachedResponse(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the cached URL response in the cache for the specified URL request.

## Declaration

```swift
func cachedResponse(for request: URLRequest) -> CachedURLResponse?
```

## Parameters

- `request`: The URL request whose cached response is desired.

<a id="return-value"></a>

## Return Value

The cached URL response for `request`, or `nil` if no response has been cached.

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

If you override this method, you should also override [getCachedResponse(for:completionHandler:)](getcachedresponse%28for_completionhandler_%29.md).

## See Also

### Getting and storing cached objects

- [storeCachedResponse(\_:for:)](storecachedresponse%28__for_%29-7p7bl.md): Stores a cached URL response for a specified request.
- [getCachedResponse(for:completionHandler:)](getcachedresponse%28for_completionhandler_%29.md): Gets the cached URL response for a data task, passing it to the provided completion handler.
- [storeCachedResponse(\_:for:)](storecachedresponse%28__for_%29-8uq91.md): Stores a cached URL response for a specified data task.

# cachedResponseForRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the cached URL response in the cache for the specified URL request.

## Declaration

```objectivec
- (NSCachedURLResponse *) cachedResponseForRequest:(NSURLRequest *) request;
```

## Parameters

- `request`: The URL request whose cached response is desired.

<a id="return-value"></a>

## Return Value

The cached URL response for `request`, or `nil` if no response has been cached.

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

If you override this method, you should also override [getCachedResponseForDataTask:completionHandler:](getcachedresponse%28for_completionhandler_%29.md).

## See Also

### Getting and storing cached objects

- [storeCachedResponse:forRequest:](storecachedresponse%28__for_%29-7p7bl.md): Stores a cached URL response for a specified request.
- [getCachedResponseForDataTask:completionHandler:](getcachedresponse%28for_completionhandler_%29.md): Gets the cached URL response for a data task, passing it to the provided completion handler.
- [storeCachedResponse:forDataTask:](storecachedresponse%28__for_%29-8uq91.md): Stores a cached URL response for a specified data task.
