> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilternewflowverdict/needrules()](https://developer.apple.com/documentation/networkextension/nefilternewflowverdict/needrules())

# needRules() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a verdict that indicates to the system that the Filter Data Provider needs more information before it can make a decision about a new flow.

## Declaration

```swift
class func needRules() -> NEFilterNewFlowVerdict
```

<a id="return-value"></a>

## Return Value

A `NEFilterNewFlowVerdict` object.

<a id="Discussion"></a>

## Discussion

When the Filter Data Provider returns this object from its `handleNewFlow:` method, the system calls the Filter Control Provider’s [handleNewFlow(\_:completionHandler:)](../nefiltercontrolprovider/handlenewflow%28__completionhandler_%29.md) method.

## See Also

### Creating new flow verdicts

- [allow()](allow%28%29.md): Create a verdict that indicates to the system that the all of the new flow’s data should be allowed to pass to its final destination.
- [drop()](drop%28%29.md): Create a verdict that indicates to the system that all of the new flow’s data should dropped, and the user should not be given the opportunity to request access.
- [pause()](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [filterDataVerdict(withFilterInbound:peekInboundBytes:filterOutbound:peekOutboundBytes:)](filterdataverdict%28withfilterinbound_peekinboundbytes_filteroutbound_peekoutboundbytes_%29.md): Create a verdict that indicates to the system that the filter needs to make a decision about a new flow after seeing a portion of the flow’s data.
- [remediateVerdict(withRemediationURLMapKey:remediationButtonTextMapKey:)](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be dropped, but allow the user to request access by tapping or clicking on a URL.
- [urlAppendStringVerdict(withMapKey:)](urlappendstringverdict%28withmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be allowed to pass to its final destination, but a string should first be appended to the new flow’s request URL.

# needRulesVerdict (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a verdict that indicates to the system that the Filter Data Provider needs more information before it can make a decision about a new flow.

## Declaration

```objectivec
+ (NEFilterNewFlowVerdict *) needRulesVerdict;
```

<a id="return-value"></a>

## Return Value

A `NEFilterNewFlowVerdict` object.

<a id="Discussion"></a>

## Discussion

When the Filter Data Provider returns this object from its `handleNewFlow:` method, the system calls the Filter Control Provider’s [handleNewFlow:completionHandler:](../nefiltercontrolprovider/handlenewflow%28__completionhandler_%29.md) method.

## See Also

### Creating new flow verdicts

- [allowVerdict](allow%28%29.md): Create a verdict that indicates to the system that the all of the new flow’s data should be allowed to pass to its final destination.
- [dropVerdict](drop%28%29.md): Create a verdict that indicates to the system that all of the new flow’s data should dropped, and the user should not be given the opportunity to request access.
- [pauseVerdict](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [filterDataVerdictWithFilterInbound:peekInboundBytes:filterOutbound:peekOutboundBytes:](filterdataverdict%28withfilterinbound_peekinboundbytes_filteroutbound_peekoutboundbytes_%29.md): Create a verdict that indicates to the system that the filter needs to make a decision about a new flow after seeing a portion of the flow’s data.
- [remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey:](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be dropped, but allow the user to request access by tapping or clicking on a URL.
- [URLAppendStringVerdictWithMapKey:](urlappendstringverdict%28withmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be allowed to pass to its final destination, but a string should first be appended to the new flow’s request URL.
