> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondatadelegate/connection(_:didsendbodydata:totalbyteswritten:totalbytesexpectedtowrite:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondatadelegate/connection(_:didsendbodydata:totalbyteswritten:totalbytesexpectedtowrite:))

# connection(\_:didSendBodyData:totalBytesWritten:totalBytesExpectedToWrite:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent as the body (message data) of a request is transmitted (such as in an HTTP POST request).

## Declaration

```swift
optional func connection(_ connection: NSURLConnection, didSendBodyData bytesWritten: Int, totalBytesWritten: Int, totalBytesExpectedToWrite: Int)
```

## Parameters

- `connection`: The connection sending the message.
- `bytesWritten`: The number of bytes written in the latest write.
- `totalBytesWritten`: The total number of bytes written for this connection.
- `totalBytesExpectedToWrite`: The number of bytes the connection expects to write.

<a id="Discussion"></a>

## Discussion

This method provides an estimate of the progress of a URL upload.

The value of `totalBytesExpectedToWrite` may change during the upload if the request needs to be retransmitted due to a lost connection or an authentication challenge from the server.

## See Also

### Receiving Connection Progress

- [connectionDidFinishLoading(\_:)](connectiondidfinishloading%28__%29.md): Sent when a connection has finished loading successfully.

# connection:didSendBodyData:totalBytesWritten:totalBytesExpectedToWrite: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent as the body (message data) of a request is transmitted (such as in an HTTP POST request).

## Declaration

```objectivec
- (void) connection:(NSURLConnection *) connection didSendBodyData:(NSInteger) bytesWritten totalBytesWritten:(NSInteger) totalBytesWritten totalBytesExpectedToWrite:(NSInteger) totalBytesExpectedToWrite;
```

## Parameters

- `connection`: The connection sending the message.
- `bytesWritten`: The number of bytes written in the latest write.
- `totalBytesWritten`: The total number of bytes written for this connection.
- `totalBytesExpectedToWrite`: The number of bytes the connection expects to write.

<a id="Discussion"></a>

## Discussion

This method provides an estimate of the progress of a URL upload.

The value of `totalBytesExpectedToWrite` may change during the upload if the request needs to be retransmitted due to a lost connection or an authentication challenge from the server.

## See Also

### Receiving Connection Progress

- [connectionDidFinishLoading:](connectiondidfinishloading%28__%29.md): Sent when a connection has finished loading successfully.
