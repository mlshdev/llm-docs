> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondatadelegate/connection(_:neednewbodystream:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondatadelegate/connection(_:neednewbodystream:))

# connection(\_:needNewBodyStream:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Called when an `NSURLConnection` needs to retransmit a request that has a body stream to provide a new, unopened stream.

## Declaration

```swift
optional func connection(_ connection: NSURLConnection, needNewBodyStream request: URLRequest) -> InputStream?
```

## Parameters

- `connection`: The NSURLConnection that is requesting a new body stream.

<a id="return-value"></a>

## Return Value

This delegate method should return a new, unopened stream that provides the body contents for the request.

If this delegate method returns `NULL`, the connection fails.

<a id="Discussion"></a>

## Discussion

In macOS, if this method is not implemented, body stream data is spooled to disk in case retransmission is required. This spooling may not be desirable for large data sets.

By implementing this delegate method, the client opts out of automatic spooling, and must provide a new, unopened stream for each retransmission.

## See Also

### Handling Redirects

- [connection(\_:willSend:redirectResponse:)](connection%28__willsend_redirectresponse_%29.md): Sent when the connection determines that it must change URLs in order to continue loading a request.

# connection:needNewBodyStream: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Called when an `NSURLConnection` needs to retransmit a request that has a body stream to provide a new, unopened stream.

## Declaration

```objectivec
- (NSInputStream *) connection:(NSURLConnection *) connection needNewBodyStream:(NSURLRequest *) request;
```

## Parameters

- `connection`: The NSURLConnection that is requesting a new body stream.

<a id="return-value"></a>

## Return Value

This delegate method should return a new, unopened stream that provides the body contents for the request.

If this delegate method returns `NULL`, the connection fails.

<a id="Discussion"></a>

## Discussion

In macOS, if this method is not implemented, body stream data is spooled to disk in case retransmission is required. This spooling may not be desirable for large data sets.

By implementing this delegate method, the client opts out of automatic spooling, and must provide a new, unopened stream for each retransmission.

## See Also

### Handling Redirects

- [connection:willSendRequest:redirectResponse:](connection%28__willsend_redirectresponse_%29.md): Sent when the connection determines that it must change URLs in order to continue loading a request.
