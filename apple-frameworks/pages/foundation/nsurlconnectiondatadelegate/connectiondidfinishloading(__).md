> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondatadelegate/connectiondidfinishloading(_:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondatadelegate/connectiondidfinishloading(_:))

# connectionDidFinishLoading(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent when a connection has finished loading successfully.

## Declaration

```swift
optional func connectionDidFinishLoading(_ connection: NSURLConnection)
```

## Parameters

- `connection`: The connection sending the message.

<a id="Discussion"></a>

## Discussion

The delegate will receive no further messages for `connection`.

## See Also

### Receiving Connection Progress

- [connection(\_:didSendBodyData:totalBytesWritten:totalBytesExpectedToWrite:)](connection%28__didsendbodydata_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Sent as the body (message data) of a request is transmitted (such as in an HTTP POST request).

# connectionDidFinishLoading: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent when a connection has finished loading successfully.

## Declaration

```objectivec
- (void) connectionDidFinishLoading:(NSURLConnection *) connection;
```

## Parameters

- `connection`: The connection sending the message.

<a id="Discussion"></a>

## Discussion

The delegate will receive no further messages for `connection`.

## See Also

### Receiving Connection Progress

- [connection:didSendBodyData:totalBytesWritten:totalBytesExpectedToWrite:](connection%28__didsendbodydata_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Sent as the body (message data) of a request is transmitted (such as in an HTTP POST request).
