> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/setreadhandler(_:maxdatagrams:)](https://developer.apple.com/documentation/networkextension/nwudpsession/setreadhandler(_:maxdatagrams:))

# setReadHandler(\_:maxDatagrams:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Set a read handler for datagrams.

> Use the [nw_connection_receive(\_:\_:\_:\_:)](../../network/nw_connection_receive%28________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func setReadHandler(_ handler: @escaping ([Data]?, (any Error)?) -> Void, maxDatagrams: Int)
```

## Parameters

- `handler`: A handler called when datagrams have been read, or when an error has occurred.
- `maxDatagrams`: The maximum number of datagrams to send to the handler.

<a id="Discussion"></a>

## Discussion

Reads will be scheduled by the system, so this method only needs to be called once for a session.

## See Also

### Transferring data

- [writeDatagram(\_:completionHandler:)](writedatagram%28__completionhandler_%29.md): Deprecated. Write a single datagram.
- [writeMultipleDatagrams(\_:completionHandler:)](writemultipledatagrams%28__completionhandler_%29.md): Deprecated. Write multiple datagrams.
- [maximumDatagramLength](maximumdatagramlength.md): Deprecated. The maximum size of a datagram to be written currently.

# setReadHandler:maxDatagrams: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Set a read handler for datagrams.

> Use the [nw_connection_receive](../../network/nw_connection_receive%28________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (void) setReadHandler:(void (^)(NSArray<NSData *> *datagrams, NSError *error)) handler maxDatagrams:(NSUInteger) maxDatagrams;
```

## Parameters

- `handler`: A handler called when datagrams have been read, or when an error has occurred.
- `maxDatagrams`: The maximum number of datagrams to send to the handler.

<a id="Discussion"></a>

## Discussion

Reads will be scheduled by the system, so this method only needs to be called once for a session.

## See Also

### Transferring data

- [writeDatagram:completionHandler:](writedatagram%28__completionhandler_%29.md): Deprecated. Write a single datagram.
- [writeMultipleDatagrams:completionHandler:](writemultipledatagrams%28__completionhandler_%29.md): Deprecated. Write multiple datagrams.
- [maximumDatagramLength](maximumdatagramlength.md): Deprecated. The maximum size of a datagram to be written currently.
