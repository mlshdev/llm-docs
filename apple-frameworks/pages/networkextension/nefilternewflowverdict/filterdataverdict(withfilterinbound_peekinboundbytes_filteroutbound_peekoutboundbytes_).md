> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilternewflowverdict/filterdataverdict(withfilterinbound:peekinboundbytes:filteroutbound:peekoutboundbytes:)](https://developer.apple.com/documentation/networkextension/nefilternewflowverdict/filterdataverdict(withfilterinbound:peekinboundbytes:filteroutbound:peekoutboundbytes:))

# filterDataVerdict(withFilterInbound:peekInboundBytes:filterOutbound:peekOutboundBytes:) (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Create a verdict that indicates to the system that the filter needs to make a decision about a new flow after seeing a portion of the flow’s data.

## Declaration

```swift
class func filterDataVerdict(withFilterInbound filterInbound: Bool, peekInboundBytes: Int, filterOutbound: Bool, peekOutboundBytes: Int) -> NEFilterNewFlowVerdict
```

## Parameters

- `filterInbound`: A Boolean indicating whether or not the filter needs to see inbound data for the flow.
- `peekInboundBytes`: The number of inbound bytes that the filter needs to see in the subsequent call to -\[[NEFilterDataProvider](../nefilterdataprovider.md) `handleInboundDataFromFlow:readBytesStartOffset:readBytes:`\].
- `filterOutbound`: A Boolean indicating whether or not the filter needs to see outbound data for the flow.
- `peekOutboundBytes`: The number of outbound bytes that the filter needs to see in the subsequent call to -\[[NEFilterDataProvider](../nefilterdataprovider.md) `handleOutboundDataFromFlow:readBytesStartOffset:readBytes`:\].

<a id="return-value"></a>

## Return Value

A `NEFilterNewFlowVerdict` object.

## See Also

### Creating new flow verdicts

- [allow()](allow%28%29.md): Create a verdict that indicates to the system that the all of the new flow’s data should be allowed to pass to its final destination.
- [drop()](drop%28%29.md): Create a verdict that indicates to the system that all of the new flow’s data should dropped, and the user should not be given the opportunity to request access.
- [pause()](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [remediateVerdict(withRemediationURLMapKey:remediationButtonTextMapKey:)](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be dropped, but allow the user to request access by tapping or clicking on a URL.
- [needRules()](needrules%28%29.md): Create a verdict that indicates to the system that the Filter Data Provider needs more information before it can make a decision about a new flow.
- [urlAppendStringVerdict(withMapKey:)](urlappendstringverdict%28withmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be allowed to pass to its final destination, but a string should first be appended to the new flow’s request URL.

# filterDataVerdictWithFilterInbound:peekInboundBytes:filterOutbound:peekOutboundBytes: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Create a verdict that indicates to the system that the filter needs to make a decision about a new flow after seeing a portion of the flow’s data.

## Declaration

```objectivec
+ (NEFilterNewFlowVerdict *) filterDataVerdictWithFilterInbound:(BOOL) filterInbound peekInboundBytes:(NSUInteger) peekInboundBytes filterOutbound:(BOOL) filterOutbound peekOutboundBytes:(NSUInteger) peekOutboundBytes;
```

## Parameters

- `filterInbound`: A Boolean indicating whether or not the filter needs to see inbound data for the flow.
- `peekInboundBytes`: The number of inbound bytes that the filter needs to see in the subsequent call to -\[[NEFilterDataProvider](../nefilterdataprovider.md) `handleInboundDataFromFlow:readBytesStartOffset:readBytes:`\].
- `filterOutbound`: A Boolean indicating whether or not the filter needs to see outbound data for the flow.
- `peekOutboundBytes`: The number of outbound bytes that the filter needs to see in the subsequent call to -\[[NEFilterDataProvider](../nefilterdataprovider.md) `handleOutboundDataFromFlow:readBytesStartOffset:readBytes`:\].

<a id="return-value"></a>

## Return Value

A `NEFilterNewFlowVerdict` object.

## See Also

### Creating new flow verdicts

- [allowVerdict](allow%28%29.md): Create a verdict that indicates to the system that the all of the new flow’s data should be allowed to pass to its final destination.
- [dropVerdict](drop%28%29.md): Create a verdict that indicates to the system that all of the new flow’s data should dropped, and the user should not be given the opportunity to request access.
- [pauseVerdict](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey:](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be dropped, but allow the user to request access by tapping or clicking on a URL.
- [needRulesVerdict](needrules%28%29.md): Create a verdict that indicates to the system that the Filter Data Provider needs more information before it can make a decision about a new flow.
- [URLAppendStringVerdictWithMapKey:](urlappendstringverdict%28withmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be allowed to pass to its final destination, but a string should first be appended to the new flow’s request URL.
