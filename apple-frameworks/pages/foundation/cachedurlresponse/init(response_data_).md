> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/cachedurlresponse/init(response:data:)](https://developer.apple.com/documentation/foundation/cachedurlresponse/init(response:data:))

# init(response:data:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a cached URL response instance.

## Declaration

```swift
init(response: URLResponse, data: Data)
```

## Parameters

- `response`: The response to cache.
- `data`: The data to cache.

<a id="return-value"></a>

## Return Value

A cached URL response object, containing the response and data.

<a id="Discussion"></a>

## Discussion

The cache storage policy is set to the default, [URLCache.StoragePolicy.allowed](../urlcache/storagepolicy/allowed.md), and the user info dictionary is set to `nil`.

## See Also

### Creating a cached URL response

- [init(response:data:userInfo:storagePolicy:)](init%28response_data_userinfo_storagepolicy_%29.md): Creates a cached URL response with a given server response, data, user-info dictionary, and storage policy.

# initWithResponse:data: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a cached URL response instance.

## Declaration

```objectivec
- (instancetype) initWithResponse:(NSURLResponse *) response data:(NSData *) data;
```

## Parameters

- `response`: The response to cache.
- `data`: The data to cache.

<a id="return-value"></a>

## Return Value

A cached URL response object, containing the response and data.

<a id="Discussion"></a>

## Discussion

The cache storage policy is set to the default, [NSURLCacheStorageAllowed](../urlcache/storagepolicy/allowed.md), and the user info dictionary is set to `nil`.

## See Also

### Creating a cached URL response

- [initWithResponse:data:userInfo:storagePolicy:](init%28response_data_userinfo_storagepolicy_%29.md): Creates a cached URL response with a given server response, data, user-info dictionary, and storage policy.
