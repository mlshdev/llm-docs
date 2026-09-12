> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocolclient/urlprotocol(_:didreceive:cachestoragepolicy:)](https://developer.apple.com/documentation/foundation/urlprotocolclient/urlprotocol(_:didreceive:cachestoragepolicy:))

# urlProtocol(\_:didReceive:cacheStoragePolicy:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the protocol implementation has created a response object for the request.

## Declaration

```swift
func urlProtocol(_ protocol: URLProtocol, didReceive response: URLResponse, cacheStoragePolicy policy: URLCache.StoragePolicy)
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `response`: The newly available response object.
- `policy`: The cache storage policy for the response.

<a id="Discussion"></a>

## Discussion

The implementation should use the provided cache storage policy to determine whether to store the response in a cache.

# URLProtocol:didReceiveResponse:cacheStoragePolicy: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the protocol implementation has created a response object for the request.

## Declaration

```objectivec
- (void) URLProtocol:(NSURLProtocol *) protocol didReceiveResponse:(NSURLResponse *) response cacheStoragePolicy:(NSURLCacheStoragePolicy) policy;
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `response`: The newly available response object.
- `policy`: The cache storage policy for the response.

<a id="Discussion"></a>

## Discussion

The implementation should use the provided cache storage policy to determine whether to store the response in a cache.
