> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocolclient/urlprotocol(_:wasredirectedto:redirectresponse:)](https://developer.apple.com/documentation/foundation/urlprotocolclient/urlprotocol(_:wasredirectedto:redirectresponse:))

# urlProtocol(\_:wasRedirectedTo:redirectResponse:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the protocol implementation has been redirected.

## Declaration

```swift
func urlProtocol(_ protocol: URLProtocol, wasRedirectedTo request: URLRequest, redirectResponse: URLResponse)
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `request`: The new request that the original request was redirected to.
- `redirectResponse`: The response from the original request that caused the redirect.

# URLProtocol:wasRedirectedToRequest:redirectResponse: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the protocol implementation has been redirected.

## Declaration

```objectivec
- (void) URLProtocol:(NSURLProtocol *) protocol wasRedirectedToRequest:(NSURLRequest *) request redirectResponse:(NSURLResponse *) redirectResponse;
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `request`: The new request that the original request was redirected to.
- `redirectResponse`: The response from the original request that caused the redirect.
