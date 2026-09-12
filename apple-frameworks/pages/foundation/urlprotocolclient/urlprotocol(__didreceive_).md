> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocolclient/urlprotocol(_:didreceive:)](https://developer.apple.com/documentation/foundation/urlprotocolclient/urlprotocol(_:didreceive:))

# urlProtocol(\_:didReceive:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the URL Loading System received an authentication challenge.

## Declaration

```swift
func urlProtocol(_ protocol: URLProtocol, didReceive challenge: URLAuthenticationChallenge)
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `challenge`: The authentication challenge that has been received.

<a id="Discussion"></a>

## Discussion

The protocol client guarantees that it will answer the request on the same thread that called this method. The client may add a default credential to the challenge it issues to the connection delegate, if `protocol` did not provide one.

## See Also

### Handling authentication challenges

- [urlProtocol(\_:didCancel:)](urlprotocol%28__didcancel_%29.md): Tells the client that an authentication challenge has been canceled.

# URLProtocol:didReceiveAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that the URL Loading System received an authentication challenge.

## Declaration

```objectivec
- (void) URLProtocol:(NSURLProtocol *) protocol didReceiveAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `challenge`: The authentication challenge that has been received.

<a id="Discussion"></a>

## Discussion

The protocol client guarantees that it will answer the request on the same thread that called this method. The client may add a default credential to the challenge it issues to the connection delegate, if `protocol` did not provide one.

## See Also

### Handling authentication challenges

- [URLProtocol:didCancelAuthenticationChallenge:](urlprotocol%28__didcancel_%29.md): Tells the client that an authentication challenge has been canceled.
