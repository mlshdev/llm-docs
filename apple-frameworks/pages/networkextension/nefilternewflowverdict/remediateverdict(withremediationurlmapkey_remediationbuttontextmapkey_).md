> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilternewflowverdict/remediateverdict(withremediationurlmapkey:remediationbuttontextmapkey:)](https://developer.apple.com/documentation/networkextension/nefilternewflowverdict/remediateverdict(withremediationurlmapkey:remediationbuttontextmapkey:))

# remediateVerdict(withRemediationURLMapKey:remediationButtonTextMapKey:) (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a verdict that indicates to the system that all of the new flow’s data should be dropped, but allow the user to request access by tapping or clicking on a URL.

## Declaration

```swift
class func remediateVerdict(withRemediationURLMapKey remediationURLMapKey: String, remediationButtonTextMapKey: String) -> NEFilterNewFlowVerdict
```

## Parameters

- `remediationURLMapKey`: The key in the Filter Control Provider’s [remediationMap](../nefiltercontrolprovider/remediationmap.md) dictionary corresponding to the URL of the remediation link to give to the user.
- `remediationButtonTextMapKey`: The key in the Filter Control Provider’s [remediationMap](../nefiltercontrolprovider/remediationmap.md) dictionary corresponding to the text of the remediation link text to give to the user.

<a id="return-value"></a>

## Return Value

An `NEFilterNewFlowVerdict` object.

<a id="Discussion"></a>

## Discussion

When the Filter Data Provider returns this verdict from its `handleNewFlow:` method, the system uses the verdict’s `remediationURLMapKey` and `remediationButtonTextMapKey` to look up the remediation URL parameters in the [remediationMap](../nefiltercontrolprovider/remediationmap.md) dictionary set by the Filter Control Provider. The remediation URL parameters are then inserted into the block page which is presented to the user.

## See Also

### Creating new flow verdicts

- [allow()](allow%28%29.md): Create a verdict that indicates to the system that the all of the new flow’s data should be allowed to pass to its final destination.
- [drop()](drop%28%29.md): Create a verdict that indicates to the system that all of the new flow’s data should dropped, and the user should not be given the opportunity to request access.
- [pause()](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [filterDataVerdict(withFilterInbound:peekInboundBytes:filterOutbound:peekOutboundBytes:)](filterdataverdict%28withfilterinbound_peekinboundbytes_filteroutbound_peekoutboundbytes_%29.md): Create a verdict that indicates to the system that the filter needs to make a decision about a new flow after seeing a portion of the flow’s data.
- [needRules()](needrules%28%29.md): Create a verdict that indicates to the system that the Filter Data Provider needs more information before it can make a decision about a new flow.
- [urlAppendStringVerdict(withMapKey:)](urlappendstringverdict%28withmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be allowed to pass to its final destination, but a string should first be appended to the new flow’s request URL.

# remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a verdict that indicates to the system that all of the new flow’s data should be dropped, but allow the user to request access by tapping or clicking on a URL.

## Declaration

```objectivec
+ (NEFilterNewFlowVerdict *) remediateVerdictWithRemediationURLMapKey:(NSString *) remediationURLMapKey remediationButtonTextMapKey:(NSString *) remediationButtonTextMapKey;
```

## Parameters

- `remediationURLMapKey`: The key in the Filter Control Provider’s [remediationMap](../nefiltercontrolprovider/remediationmap.md) dictionary corresponding to the URL of the remediation link to give to the user.
- `remediationButtonTextMapKey`: The key in the Filter Control Provider’s [remediationMap](../nefiltercontrolprovider/remediationmap.md) dictionary corresponding to the text of the remediation link text to give to the user.

<a id="return-value"></a>

## Return Value

An `NEFilterNewFlowVerdict` object.

<a id="Discussion"></a>

## Discussion

When the Filter Data Provider returns this verdict from its `handleNewFlow:` method, the system uses the verdict’s `remediationURLMapKey` and `remediationButtonTextMapKey` to look up the remediation URL parameters in the [remediationMap](../nefiltercontrolprovider/remediationmap.md) dictionary set by the Filter Control Provider. The remediation URL parameters are then inserted into the block page which is presented to the user.

## See Also

### Creating new flow verdicts

- [allowVerdict](allow%28%29.md): Create a verdict that indicates to the system that the all of the new flow’s data should be allowed to pass to its final destination.
- [dropVerdict](drop%28%29.md): Create a verdict that indicates to the system that all of the new flow’s data should dropped, and the user should not be given the opportunity to request access.
- [pauseVerdict](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [filterDataVerdictWithFilterInbound:peekInboundBytes:filterOutbound:peekOutboundBytes:](filterdataverdict%28withfilterinbound_peekinboundbytes_filteroutbound_peekoutboundbytes_%29.md): Create a verdict that indicates to the system that the filter needs to make a decision about a new flow after seeing a portion of the flow’s data.
- [needRulesVerdict](needrules%28%29.md): Create a verdict that indicates to the system that the Filter Data Provider needs more information before it can make a decision about a new flow.
- [URLAppendStringVerdictWithMapKey:](urlappendstringverdict%28withmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be allowed to pass to its final destination, but a string should first be appended to the new flow’s request URL.
