> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/maximumdatagramlength](https://developer.apple.com/documentation/networkextension/nwudpsession/maximumdatagramlength)

# maximumDatagramLength (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The maximum size of a datagram to be written currently.

> Use the [nw_connection_get_maximum_datagram_size(\_:)](../../network/nw_connection_get_maximum_datagram_size%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var maximumDatagramLength: Int { get }
```

<a id="Discussion"></a>

## Discussion

If a datagram is written with a longer length than `maximumDatagramLength`, the datagram may be fragmented or encounter an error. Note that this value is not guaranteed to be the maximum datagram length for end-to-end communication across the network. Use Key-Value Observing to watch this property.

## See Also

### Transferring data

- [setReadHandler(\_:maxDatagrams:)](setreadhandler%28__maxdatagrams_%29.md): Deprecated. Set a read handler for datagrams.
- [writeDatagram(\_:completionHandler:)](writedatagram%28__completionhandler_%29.md): Deprecated. Write a single datagram.
- [writeMultipleDatagrams(\_:completionHandler:)](writemultipledatagrams%28__completionhandler_%29.md): Deprecated. Write multiple datagrams.

# maximumDatagramLength (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The maximum size of a datagram to be written currently.

> Use the [nw_connection_get_maximum_datagram_size](../../network/nw_connection_get_maximum_datagram_size%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger maximumDatagramLength;
```

<a id="Discussion"></a>

## Discussion

If a datagram is written with a longer length than `maximumDatagramLength`, the datagram may be fragmented or encounter an error. Note that this value is not guaranteed to be the maximum datagram length for end-to-end communication across the network. Use Key-Value Observing to watch this property.

## See Also

### Transferring data

- [setReadHandler:maxDatagrams:](setreadhandler%28__maxdatagrams_%29.md): Deprecated. Set a read handler for datagrams.
- [writeDatagram:completionHandler:](writedatagram%28__completionhandler_%29.md): Deprecated. Write a single datagram.
- [writeMultipleDatagrams:completionHandler:](writemultipledatagrams%28__completionhandler_%29.md): Deprecated. Write multiple datagrams.
