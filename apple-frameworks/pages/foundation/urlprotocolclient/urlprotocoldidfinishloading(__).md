> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocolclient/urlprotocoldidfinishloading(_:)](https://developer.apple.com/documentation/foundation/urlprotocolclient/urlprotocoldidfinishloading(_:))

# urlProtocolDidFinishLoading(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the protocol implementation has finished loading.

## Declaration

```swift
func urlProtocolDidFinishLoading(_ protocol: URLProtocol)
```

## Parameters

- `protocol`: The URL protocol object sending the message.

## See Also

### Indicating loading progress or failure

- [urlProtocol(\_:didFailWithError:)](urlprotocol%28__didfailwitherror_%29.md): Tells the client that the load request failed due to an error.
- [urlProtocol(\_:didLoad:)](urlprotocol%28__didload_%29.md): Tells the client that the protocol implementation has loaded some data.

# URLProtocolDidFinishLoading: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the protocol implementation has finished loading.

## Declaration

```objectivec
- (void) URLProtocolDidFinishLoading:(NSURLProtocol *) protocol;
```

## Parameters

- `protocol`: The URL protocol object sending the message.

## See Also

### Indicating loading progress or failure

- [URLProtocol:didFailWithError:](urlprotocol%28__didfailwitherror_%29.md): Tells the client that the load request failed due to an error.
- [URLProtocol:didLoadData:](urlprotocol%28__didload_%29.md): Tells the client that the protocol implementation has loaded some data.
