> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/writedatagram(_:completionhandler:)](https://developer.apple.com/documentation/networkextension/nwudpsession/writedatagram(_:completionhandler:))

# writeDatagram(\_:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Write a single datagram.

> Use the [nw_connection_send(\_:\_:\_:\_:\_:)](../../network/nw_connection_send%28__________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func writeDatagram(_ datagram: Data, completionHandler: @escaping ((any Error)?) -> Void)
```

## Parameters

- `datagram`: An [NSData](../../foundation/nsdata.md) object containing the datagram to write. To improve performance, this should be an immutable data object.
- `completionHandler`: A handler called when the write request has either succeeded or failed.

<a id="Discussion"></a>

## Discussion

Callers should wait until the `completionHandler` is executed before issuing another write.

## See Also

### Transferring data

- [setReadHandler(\_:maxDatagrams:)](setreadhandler%28__maxdatagrams_%29.md): Deprecated. Set a read handler for datagrams.
- [writeMultipleDatagrams(\_:completionHandler:)](writemultipledatagrams%28__completionhandler_%29.md): Deprecated. Write multiple datagrams.
- [maximumDatagramLength](maximumdatagramlength.md): Deprecated. The maximum size of a datagram to be written currently.

# writeDatagram:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Write a single datagram.

> Use the [nw_connection_send](../../network/nw_connection_send%28__________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (void) writeDatagram:(NSData *) datagram completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `datagram`: An [NSData](../../foundation/nsdata.md) object containing the datagram to write. To improve performance, this should be an immutable data object.
- `completionHandler`: A handler called when the write request has either succeeded or failed.

<a id="Discussion"></a>

## Discussion

Callers should wait until the `completionHandler` is executed before issuing another write.

## See Also

### Transferring data

- [setReadHandler:maxDatagrams:](setreadhandler%28__maxdatagrams_%29.md): Deprecated. Set a read handler for datagrams.
- [writeMultipleDatagrams:completionHandler:](writemultipledatagrams%28__completionhandler_%29.md): Deprecated. Write multiple datagrams.
- [maximumDatagramLength](maximumdatagramlength.md): Deprecated. The maximum size of a datagram to be written currently.
