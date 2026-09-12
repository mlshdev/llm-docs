> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/storecachedresponse(_:for:)-7p7bl](https://developer.apple.com/documentation/foundation/urlcache/storecachedresponse(_:for:)-7p7bl)

# storeCachedResponse(\_:for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores a cached URL response for a specified request.

## Declaration

```swift
func storeCachedResponse(_ cachedResponse: CachedURLResponse, for request: URLRequest)
```

## Parameters

- `cachedResponse`: The cached URL response to store.
- `request`: The request for which the cached URL response is being stored.

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

If you override this method, you should also override [storeCachedResponse(\_:for:)](storecachedresponse%28__for_%29-8uq91.md).

## See Also

### Getting and storing cached objects

- [cachedResponse(for:)](cachedresponse%28for_%29.md): Returns the cached URL response in the cache for the specified URL request.
- [getCachedResponse(for:completionHandler:)](getcachedresponse%28for_completionhandler_%29.md): Gets the cached URL response for a data task, passing it to the provided completion handler.
- [storeCachedResponse(\_:for:)](storecachedresponse%28__for_%29-8uq91.md): Stores a cached URL response for a specified data task.

# storeCachedResponse:forRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores a cached URL response for a specified request.

## Declaration

```objectivec
- (void) storeCachedResponse:(NSCachedURLResponse *) cachedResponse forRequest:(NSURLRequest *) request;
```

## Parameters

- `cachedResponse`: The cached URL response to store.
- `request`: The request for which the cached URL response is being stored.

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

If you override this method, you should also override [storeCachedResponse:forDataTask:](storecachedresponse%28__for_%29-8uq91.md).

## See Also

### Getting and storing cached objects

- [cachedResponseForRequest:](cachedresponse%28for_%29.md): Returns the cached URL response in the cache for the specified URL request.
- [getCachedResponseForDataTask:completionHandler:](getcachedresponse%28for_completionhandler_%29.md): Gets the cached URL response for a data task, passing it to the provided completion handler.
- [storeCachedResponse:forDataTask:](storecachedresponse%28__for_%29-8uq91.md): Stores a cached URL response for a specified data task.
