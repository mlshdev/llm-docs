> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataverdict/init(passbytes:peekbytes:)](https://developer.apple.com/documentation/networkextension/nefilterdataverdict/init(passbytes:peekbytes:))

# init(passBytes:peekBytes:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.

## Declaration

```swift
init(passBytes: Int, peekBytes: Int)
```

## Parameters

- `passBytes`: The number of bytes to pass to its final destination.
- `peekBytes`: The number of bytes after the end of the `passBytes` that the Filter Data Provider expects in the next call to [handleOutboundData(from:readBytesStartOffset:readBytes:)](../nefilterdataprovider/handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md) or [handleInboundData(from:readBytesStartOffset:readBytes:)](../nefilterdataprovider/handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md). The Filter Data Provider uses this chunk of data to make its next filtering decision.

  To see all subsequent bytes, set this parameter to [NEFilterFlowBytesMax](../nefilterflowbytesmax.md).

<a id="return-value"></a>

## Return Value

A `NEFilterDataVerdict` object.

## See Also

### Creating data verdicts

- [allow()](allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [drop()](drop%28%29.md): Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.
- [pause()](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [remediateVerdict(withRemediationURLMapKey:remediationButtonTextMapKey:)](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.
- [needRules()](needrules%28%29.md): Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.

# dataVerdictWithPassBytes:peekBytes: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.

## Declaration

```objectivec
+ (NEFilterDataVerdict *) dataVerdictWithPassBytes:(NSUInteger) passBytes peekBytes:(NSUInteger) peekBytes;
```

## Parameters

- `passBytes`: The number of bytes to pass to its final destination.
- `peekBytes`: The number of bytes after the end of the `passBytes` that the Filter Data Provider expects in the next call to [handleOutboundDataFromFlow:readBytesStartOffset:readBytes:](../nefilterdataprovider/handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md) or [handleInboundDataFromFlow:readBytesStartOffset:readBytes:](../nefilterdataprovider/handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md). The Filter Data Provider uses this chunk of data to make its next filtering decision.

  To see all subsequent bytes, set this parameter to [NEFilterFlowBytesMax](../nefilterflowbytesmax.md).

<a id="return-value"></a>

## Return Value

A `NEFilterDataVerdict` object.

## See Also

### Creating data verdicts

- [allowVerdict](allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [dropVerdict](drop%28%29.md): Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.
- [pauseVerdict](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey:](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.
- [needRulesVerdict](needrules%28%29.md): Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.
