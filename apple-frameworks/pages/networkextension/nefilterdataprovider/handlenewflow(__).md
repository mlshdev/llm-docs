> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataprovider/handlenewflow(_:)](https://developer.apple.com/documentation/networkextension/nefilterdataprovider/handlenewflow(_:))

# handleNewFlow(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Make a filtering decision for a newly-created flow of network content.

## Declaration

```swift
func handleNewFlow(_ flow: NEFilterFlow) -> NEFilterNewFlowVerdict
```

## Parameters

- `flow`: An [NEFilterFlow](../nefilterflow.md) object containing information about the new flow.

<a id="return-value"></a>

## Return Value

An [NEFilterNewFlowVerdict](../nefilternewflowverdict.md) object indicating how the system should handle the flow.

<a id="Discussion"></a>

## Discussion

This function is called by the system when a filtering decision needs to be made about a new flow of network content.

`NEFilterDataProvider` subclasses must override this method.

## See Also

### Filtering network content

- [handleInboundData(from:readBytesStartOffset:readBytes:)](handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of inbound data.
- [NEFilterDataAttribute](../nefilterdataattribute.md): Attribute flags that describe the data handled by a filter.
- [handleOutboundData(from:readBytesStartOffset:readBytes:)](handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of outbound data.
- [handleInboundDataComplete(for:)](handleinbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the inbound data for a flow.
- [handleOutboundDataComplete(for:)](handleoutbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the outbound data for a flow.

# handleNewFlow: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Make a filtering decision for a newly-created flow of network content.

## Declaration

```objectivec
- (NEFilterNewFlowVerdict *) handleNewFlow:(NEFilterFlow *) flow;
```

## Parameters

- `flow`: An [NEFilterFlow](../nefilterflow.md) object containing information about the new flow.

<a id="return-value"></a>

## Return Value

An [NEFilterNewFlowVerdict](../nefilternewflowverdict.md) object indicating how the system should handle the flow.

<a id="Discussion"></a>

## Discussion

This function is called by the system when a filtering decision needs to be made about a new flow of network content.

`NEFilterDataProvider` subclasses must override this method.

## See Also

### Filtering network content

- [handleInboundDataFromFlow:readBytesStartOffset:readBytes:](handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of inbound data.
- [NEFilterDataAttribute](../nefilterdataattribute.md): Attribute flags that describe the data handled by a filter.
- [handleOutboundDataFromFlow:readBytesStartOffset:readBytes:](handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of outbound data.
- [handleInboundDataCompleteForFlow:](handleinbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the inbound data for a flow.
- [handleOutboundDataCompleteForFlow:](handleoutbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the outbound data for a flow.
