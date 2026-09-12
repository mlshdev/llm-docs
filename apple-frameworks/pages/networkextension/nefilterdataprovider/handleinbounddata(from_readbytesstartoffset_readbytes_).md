> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataprovider/handleinbounddata(from:readbytesstartoffset:readbytes:)](https://developer.apple.com/documentation/networkextension/nefilterdataprovider/handleinbounddata(from:readbytesstartoffset:readbytes:))

# handleInboundData(from:readBytesStartOffset:readBytes:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Make a filtering decision about a chunk of inbound data.

## Declaration

```swift
func handleInboundData(from flow: NEFilterFlow, readBytesStartOffset offset: Int, readBytes: Data) -> NEFilterDataVerdict
```

## Parameters

- `flow`: An [NEFilterFlow](../nefilterflow.md) object containing information about the flow.
- `offset`: An unsigned integer containing the offset of the data stored in `readBytes`. This offset is measured from the beginning of the flow’s inbound data.
- `readBytes`: An [NSData](../../foundation/nsdata.md) object containing the data to filter. For non-UDP/TCP flows, since the data may optionally include the IP header, `readBytes` includes a 4-byte [NEFilterDataAttribute](../nefilterdataattribute.md) field preceding the user data. Your handler must examine the [NEFilterDataAttribute](../nefilterdataattribute.md) field and handle the data accordingly.

<a id="return-value"></a>

## Return Value

A [NEFilterDataVerdict](../nefilterdataverdict.md) object indicating how the system should handle the chunk of data and all subsequent inbound data for the flow.

<a id="Discussion"></a>

## Discussion

`NEFilterDataProvider` subclasses must override this method.

## See Also

### Filtering network content

- [handleNewFlow(\_:)](handlenewflow%28__%29.md): Make a filtering decision for a newly-created flow of network content.
- [NEFilterDataAttribute](../nefilterdataattribute.md): Attribute flags that describe the data handled by a filter.
- [handleOutboundData(from:readBytesStartOffset:readBytes:)](handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of outbound data.
- [handleInboundDataComplete(for:)](handleinbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the inbound data for a flow.
- [handleOutboundDataComplete(for:)](handleoutbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the outbound data for a flow.

# handleInboundDataFromFlow:readBytesStartOffset:readBytes: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Make a filtering decision about a chunk of inbound data.

## Declaration

```objectivec
- (NEFilterDataVerdict *) handleInboundDataFromFlow:(NEFilterFlow *) flow readBytesStartOffset:(NSUInteger) offset readBytes:(NSData *) readBytes;
```

## Parameters

- `flow`: An [NEFilterFlow](../nefilterflow.md) object containing information about the flow.
- `offset`: An unsigned integer containing the offset of the data stored in `readBytes`. This offset is measured from the beginning of the flow’s inbound data.
- `readBytes`: An [NSData](../../foundation/nsdata.md) object containing the data to filter. For non-UDP/TCP flows, since the data may optionally include the IP header, `readBytes` includes a 4-byte [NEFilterDataAttribute](../nefilterdataattribute.md) field preceding the user data. Your handler must examine the [NEFilterDataAttribute](../nefilterdataattribute.md) field and handle the data accordingly.

<a id="return-value"></a>

## Return Value

A [NEFilterDataVerdict](../nefilterdataverdict.md) object indicating how the system should handle the chunk of data and all subsequent inbound data for the flow.

<a id="Discussion"></a>

## Discussion

`NEFilterDataProvider` subclasses must override this method.

## See Also

### Filtering network content

- [handleNewFlow:](handlenewflow%28__%29.md): Make a filtering decision for a newly-created flow of network content.
- [NEFilterDataAttribute](../nefilterdataattribute.md): Attribute flags that describe the data handled by a filter.
- [handleOutboundDataFromFlow:readBytesStartOffset:readBytes:](handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of outbound data.
- [handleInboundDataCompleteForFlow:](handleinbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the inbound data for a flow.
- [handleOutboundDataCompleteForFlow:](handleoutbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the outbound data for a flow.
