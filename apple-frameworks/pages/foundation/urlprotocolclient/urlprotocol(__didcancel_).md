> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocolclient/urlprotocol(_:didcancel:)](https://developer.apple.com/documentation/foundation/urlprotocolclient/urlprotocol(_:didcancel:))

# urlProtocol(\_:didCancel:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that an authentication challenge has been canceled.

## Declaration

```swift
func urlProtocol(_ protocol: URLProtocol, didCancel challenge: URLAuthenticationChallenge)
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `challenge`: The authentication challenge that was canceled.

## See Also

### Handling authentication challenges

- [urlProtocol(\_:didReceive:)](urlprotocol%28__didreceive_%29.md): Tells the client that the URL Loading System received an authentication challenge.

# URLProtocol:didCancelAuthenticationChallenge: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the client that an authentication challenge has been canceled.

## Declaration

```objectivec
- (void) URLProtocol:(NSURLProtocol *) protocol didCancelAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge;
```

## Parameters

- `protocol`: The URL protocol object sending the message.
- `challenge`: The authentication challenge that was canceled.

## See Also

### Handling authentication challenges

- [URLProtocol:didReceiveAuthenticationChallenge:](urlprotocol%28__didreceive_%29.md): Tells the client that the URL Loading System received an authentication challenge.
