> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/getcachedresponse(for:completionhandler:)](https://developer.apple.com/documentation/foundation/urlcache/getcachedresponse(for:completionhandler:))

# getCachedResponse(for:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the cached URL response for a data task, passing it to the provided completion handler.

## Declaration

```swift
func getCachedResponse(for dataTask: URLSessionDataTask, completionHandler: @escaping @Sendable (CachedURLResponse?) -> Void)
```

```swift
func cachedResponse(for dataTask: URLSessionDataTask) async -> CachedURLResponse?
```

## Parameters

- `dataTask`: The data task whose cached URL response is desired.
- `completionHandler`: A completion handler that receives the cached URL response for the data task’s request, or `nil` if no response is found in the cache.

## See Also

### Getting and storing cached objects

- [cachedResponse(for:)](cachedresponse%28for_%29.md): Returns the cached URL response in the cache for the specified URL request.
- [storeCachedResponse(\_:for:)](storecachedresponse%28__for_%29-7p7bl.md): Stores a cached URL response for a specified request.
- [storeCachedResponse(\_:for:)](storecachedresponse%28__for_%29-8uq91.md): Stores a cached URL response for a specified data task.

# getCachedResponseForDataTask:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the cached URL response for a data task, passing it to the provided completion handler.

## Declaration

```objectivec
- (void) getCachedResponseForDataTask:(NSURLSessionDataTask *) dataTask completionHandler:(void (^)(NSCachedURLResponse *cachedResponse)) completionHandler;
```

## Parameters

- `dataTask`: The data task whose cached URL response is desired.
- `completionHandler`: A completion handler that receives the cached URL response for the data task’s request, or `nil` if no response is found in the cache.

## See Also

### Getting and storing cached objects

- [cachedResponseForRequest:](cachedresponse%28for_%29.md): Returns the cached URL response in the cache for the specified URL request.
- [storeCachedResponse:forRequest:](storecachedresponse%28__for_%29-7p7bl.md): Stores a cached URL response for a specified request.
- [storeCachedResponse:forDataTask:](storecachedresponse%28__for_%29-8uq91.md): Stores a cached URL response for a specified data task.
