> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondatadelegate/connection(_:didreceive:)-8p5vg](https://developer.apple.com/documentation/foundation/nsurlconnectiondatadelegate/connection(_:didreceive:)-8p5vg)

# connection(\_:didReceive:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent as a connection loads data incrementally.

## Declaration

```swift
optional func connection(_ connection: NSURLConnection, didReceive data: Data)
```

## Parameters

- `connection`: The connection sending the message.
- `data`: The newly available data. The delegate should concatenate the contents of each `data` object delivered to build up the complete data for a URL load.

<a id="Discussion"></a>

## Discussion

This method provides the only way for an asynchronous delegate to retrieve the loaded data. It is the responsibility of the delegate to retain or copy this data as it is delivered.

## See Also

### Handling Incoming Data

- [connection(\_:didReceive:)](connection%28__didreceive_%29-8t66w.md): Sent when the connection has received sufficient data to construct the URL response for its request.

# connection:didReceiveData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent as a connection loads data incrementally.

## Declaration

```objectivec
- (void) connection:(NSURLConnection *) connection didReceiveData:(NSData *) data;
```

## Parameters

- `connection`: The connection sending the message.
- `data`: The newly available data. The delegate should concatenate the contents of each `data` object delivered to build up the complete data for a URL load.

<a id="Discussion"></a>

## Discussion

This method provides the only way for an asynchronous delegate to retrieve the loaded data. It is the responsibility of the delegate to retain or copy this data as it is delivered.

## See Also

### Handling Incoming Data

- [connection:didReceiveResponse:](connection%28__didreceive_%29-8t66w.md): Sent when the connection has received sufficient data to construct the URL response for its request.
