> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataprovider/handleoutbounddatacomplete(for:)](https://developer.apple.com/documentation/networkextension/nefilterdataprovider/handleoutbounddatacomplete(for:))

# handleOutboundDataComplete(for:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Make a filtering decision after seeing all of the outbound data for a flow.

## Declaration

```swift
func handleOutboundDataComplete(for flow: NEFilterFlow) -> NEFilterDataVerdict
```

## Parameters

- `flow`: An [NEFilterFlow](../nefilterflow.md) object containing information about the flow.

<a id="return-value"></a>

## Return Value

An [NEFilterDataVerdict](../nefilterdataverdict.md) object indicating how the system should handle the flow of network content.

<a id="Discussion"></a>

## Discussion

The system calls this method after all of the outbound data for a flow of network content has been given to the Filter Data Provider.

`NEFilterDataProvider` subclasses must override this method.

## See Also

### Filtering network content

- [handleNewFlow(\_:)](handlenewflow%28__%29.md): Make a filtering decision for a newly-created flow of network content.
- [handleInboundData(from:readBytesStartOffset:readBytes:)](handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of inbound data.
- [NEFilterDataAttribute](../nefilterdataattribute.md): Attribute flags that describe the data handled by a filter.
- [handleOutboundData(from:readBytesStartOffset:readBytes:)](handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of outbound data.
- [handleInboundDataComplete(for:)](handleinbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the inbound data for a flow.

# handleOutboundDataCompleteForFlow: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Make a filtering decision after seeing all of the outbound data for a flow.

## Declaration

```objectivec
- (NEFilterDataVerdict *) handleOutboundDataCompleteForFlow:(NEFilterFlow *) flow;
```

## Parameters

- `flow`: An [NEFilterFlow](../nefilterflow.md) object containing information about the flow.

<a id="return-value"></a>

## Return Value

An [NEFilterDataVerdict](../nefilterdataverdict.md) object indicating how the system should handle the flow of network content.

<a id="Discussion"></a>

## Discussion

The system calls this method after all of the outbound data for a flow of network content has been given to the Filter Data Provider.

`NEFilterDataProvider` subclasses must override this method.

## See Also

### Filtering network content

- [handleNewFlow:](handlenewflow%28__%29.md): Make a filtering decision for a newly-created flow of network content.
- [handleInboundDataFromFlow:readBytesStartOffset:readBytes:](handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of inbound data.
- [NEFilterDataAttribute](../nefilterdataattribute.md): Attribute flags that describe the data handled by a filter.
- [handleOutboundDataFromFlow:readBytesStartOffset:readBytes:](handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of outbound data.
- [handleInboundDataCompleteForFlow:](handleinbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the inbound data for a flow.
