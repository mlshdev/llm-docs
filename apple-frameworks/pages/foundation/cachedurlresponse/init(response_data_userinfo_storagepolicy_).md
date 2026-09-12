> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/cachedurlresponse/init(response:data:userinfo:storagepolicy:)](https://developer.apple.com/documentation/foundation/cachedurlresponse/init(response:data:userinfo:storagepolicy:))

# init(response:data:userInfo:storagePolicy:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a cached URL response with a given server response, data, user-info dictionary, and storage policy.

## Declaration

```swift
init(response: URLResponse, data: Data, userInfo: [AnyHashable : Any]? = nil, storagePolicy: URLCache.StoragePolicy)
```

## Parameters

- `response`: The response to cache.
- `data`: The data to cache.
- `userInfo`: An optional dictionary of user information. May be `nil`.
- `storagePolicy`: The storage policy for the cached response.

<a id="return-value"></a>

## Return Value

A cached URL response object, containing the response and data.

## See Also

### Creating a cached URL response

- [init(response:data:)](init%28response_data_%29.md): Creates a cached URL response instance.

# initWithResponse:data:userInfo:storagePolicy: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a cached URL response with a given server response, data, user-info dictionary, and storage policy.

## Declaration

```objectivec
- (instancetype) initWithResponse:(NSURLResponse *) response data:(NSData *) data userInfo:(NSDictionary *) userInfo storagePolicy:(NSURLCacheStoragePolicy) storagePolicy;
```

## Parameters

- `response`: The response to cache.
- `data`: The data to cache.
- `userInfo`: An optional dictionary of user information. May be `nil`.
- `storagePolicy`: The storage policy for the cached response.

<a id="return-value"></a>

## Return Value

A cached URL response object, containing the response and data.

## See Also

### Creating a cached URL response

- [initWithResponse:data:](init%28response_data_%29.md): Creates a cached URL response instance.
