> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocolclient/urlprotocol(_:didload:)](https://developer.apple.com/documentation/foundation/urlprotocolclient/urlprotocol(_:didload:))

# urlProtocol(\_:didLoad:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the protocol implementation has loaded some data.

## Declaration

```swift
func urlProtocol(_ protocol: URLProtocol, didLoad data: Data)
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `data`: The data being made available.

<a id="Discussion"></a>

## Discussion

The data object must contain only new data loaded since the previous invocation of this method.

## See Also

### Indicating loading progress or failure

- [urlProtocol(\_:didFailWithError:)](urlprotocol%28__didfailwitherror_%29.md): Tells the client that the load request failed due to an error.
- [urlProtocolDidFinishLoading(\_:)](urlprotocoldidfinishloading%28__%29.md): Tells the client that the protocol implementation has finished loading.

# URLProtocol:didLoadData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the protocol implementation has loaded some data.

## Declaration

```objectivec
- (void) URLProtocol:(NSURLProtocol *) protocol didLoadData:(NSData *) data;
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `data`: The data being made available.

<a id="Discussion"></a>

## Discussion

The data object must contain only new data loaded since the previous invocation of this method.

## See Also

### Indicating loading progress or failure

- [URLProtocol:didFailWithError:](urlprotocol%28__didfailwitherror_%29.md): Tells the client that the load request failed due to an error.
- [URLProtocolDidFinishLoading:](urlprotocoldidfinishloading%28__%29.md): Tells the client that the protocol implementation has finished loading.
