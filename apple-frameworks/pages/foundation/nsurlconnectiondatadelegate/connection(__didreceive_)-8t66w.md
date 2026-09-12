> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondatadelegate/connection(_:didreceive:)-8t66w](https://developer.apple.com/documentation/foundation/nsurlconnectiondatadelegate/connection(_:didreceive:)-8t66w)

# connection(\_:didReceive:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent when the connection has received sufficient data to construct the URL response for its request.

## Declaration

```swift
optional func connection(_ connection: NSURLConnection, didReceive response: URLResponse)
```

## Parameters

- `connection`: The connection sending the message.
- `response`: The URL response for the connection’s request. This object is immutable and will not be modified by the URL loading system once it is presented to the delegate.

<a id="Discussion"></a>

## Discussion

In rare cases, for example in the case of an HTTP load where the content type of the load data is `multipart/x-mixed-replace`, the delegate will receive more than one `connection:didReceiveResponse:` message. When this happens, discard (or process) all data previously delivered by `connection:didReceiveData:`, and prepare to handle the next part (which could potentially have a different MIME type).

The only case where this message is not sent to the delegate is when the protocol implementation encounters an error before a response could be created.

## See Also

### Related Documentation

- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

### Handling Incoming Data

- [connection(\_:didReceive:)](connection%28__didreceive_%29-8p5vg.md): Sent as a connection loads data incrementally.

# connection:didReceiveResponse: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent when the connection has received sufficient data to construct the URL response for its request.

## Declaration

```objectivec
- (void) connection:(NSURLConnection *) connection didReceiveResponse:(NSURLResponse *) response;
```

## Parameters

- `connection`: The connection sending the message.
- `response`: The URL response for the connection’s request. This object is immutable and will not be modified by the URL loading system once it is presented to the delegate.

<a id="Discussion"></a>

## Discussion

In rare cases, for example in the case of an HTTP load where the content type of the load data is `multipart/x-mixed-replace`, the delegate will receive more than one `connection:didReceiveResponse:` message. When this happens, discard (or process) all data previously delivered by `connection:didReceiveData:`, and prepare to handle the next part (which could potentially have a different MIME type).

The only case where this message is not sent to the delegate is when the protocol implementation encounters an error before a response could be created.

## See Also

### Related Documentation

- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

### Handling Incoming Data

- [connection:didReceiveData:](connection%28__didreceive_%29-8p5vg.md): Sent as a connection loads data incrementally.
