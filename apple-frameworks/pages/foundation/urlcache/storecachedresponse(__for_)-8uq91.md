> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/storecachedresponse(_:for:)-8uq91](https://developer.apple.com/documentation/foundation/urlcache/storecachedresponse(_:for:)-8uq91)

# storeCachedResponse(\_:for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores a cached URL response for a specified data task.

## Declaration

```swift
func storeCachedResponse(_ cachedResponse: CachedURLResponse, for dataTask: URLSessionDataTask)
```

## Parameters

- `cachedResponse`: The cached URL response to store for this data task.
- `dataTask`: The data task whose response is to be cached.

## See Also

### Getting and storing cached objects

- [cachedResponse(for:)](cachedresponse%28for_%29.md): Returns the cached URL response in the cache for the specified URL request.
- [storeCachedResponse(\_:for:)](storecachedresponse%28__for_%29-7p7bl.md): Stores a cached URL response for a specified request.
- [getCachedResponse(for:completionHandler:)](getcachedresponse%28for_completionhandler_%29.md): Gets the cached URL response for a data task, passing it to the provided completion handler.

# storeCachedResponse:forDataTask: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores a cached URL response for a specified data task.

## Declaration

```objectivec
- (void) storeCachedResponse:(NSCachedURLResponse *) cachedResponse forDataTask:(NSURLSessionDataTask *) dataTask;
```

## Parameters

- `cachedResponse`: The cached URL response to store for this data task.
- `dataTask`: The data task whose response is to be cached.

## See Also

### Getting and storing cached objects

- [cachedResponseForRequest:](cachedresponse%28for_%29.md): Returns the cached URL response in the cache for the specified URL request.
- [storeCachedResponse:forRequest:](storecachedresponse%28__for_%29-7p7bl.md): Stores a cached URL response for a specified request.
- [getCachedResponseForDataTask:completionHandler:](getcachedresponse%28for_completionhandler_%29.md): Gets the cached URL response for a data task, passing it to the provided completion handler.
