> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocolclient/urlprotocol(_:didfailwitherror:)](https://developer.apple.com/documentation/foundation/urlprotocolclient/urlprotocol(_:didfailwitherror:))

# urlProtocol(\_:didFailWithError:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the load request failed due to an error.

## Declaration

```swift
func urlProtocol(_ protocol: URLProtocol, didFailWithError error: any Error)
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `error`: The error that caused the failure of the load request.

## See Also

### Indicating loading progress or failure

- [urlProtocol(\_:didLoad:)](urlprotocol%28__didload_%29.md): Tells the client that the protocol implementation has loaded some data.
- [urlProtocolDidFinishLoading(\_:)](urlprotocoldidfinishloading%28__%29.md): Tells the client that the protocol implementation has finished loading.

# URLProtocol:didFailWithError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the load request failed due to an error.

## Declaration

```objectivec
- (void) URLProtocol:(NSURLProtocol *) protocol didFailWithError:(NSError *) error;
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `error`: The error that caused the failure of the load request.

## See Also

### Indicating loading progress or failure

- [URLProtocol:didLoadData:](urlprotocol%28__didload_%29.md): Tells the client that the protocol implementation has loaded some data.
- [URLProtocolDidFinishLoading:](urlprotocoldidfinishloading%28__%29.md): Tells the client that the protocol implementation has finished loading.
