> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilternewflowverdict](https://developer.apple.com/documentation/networkextension/nefilternewflowverdict)

# NEFilterNewFlowVerdict (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The result from a filter data provder after the initial examination of a flow.

## Declaration

```swift
class NEFilterNewFlowVerdict
```

## Topics

### Creating new flow verdicts

- [allow()](nefilternewflowverdict/allow%28%29.md): Create a verdict that indicates to the system that the all of the new flow’s data should be allowed to pass to its final destination.
- [drop()](nefilternewflowverdict/drop%28%29.md): Create a verdict that indicates to the system that all of the new flow’s data should dropped, and the user should not be given the opportunity to request access.
- [pause()](nefilternewflowverdict/pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [filterDataVerdict(withFilterInbound:peekInboundBytes:filterOutbound:peekOutboundBytes:)](nefilternewflowverdict/filterdataverdict%28withfilterinbound_peekinboundbytes_filteroutbound_peekoutboundbytes_%29.md): Create a verdict that indicates to the system that the filter needs to make a decision about a new flow after seeing a portion of the flow’s data.
- [remediateVerdict(withRemediationURLMapKey:remediationButtonTextMapKey:)](nefilternewflowverdict/remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be dropped, but allow the user to request access by tapping or clicking on a URL.
- [needRules()](nefilternewflowverdict/needrules%28%29.md): Create a verdict that indicates to the system that the Filter Data Provider needs more information before it can make a decision about a new flow.
- [urlAppendStringVerdict(withMapKey:)](nefilternewflowverdict/urlappendstringverdict%28withmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be allowed to pass to its final destination, but a string should first be appended to the new flow’s request URL.

### Inspecting new flow verdict properties

- [statisticsReportFrequency](nefilternewflowverdict/statisticsreportfrequency.md): The frequency at which the data provider receives reports.
- [NEFilterReport.Frequency](nefilterreport/frequency.md): An enumeration that represents the frequency of filter report delivery.

## Relationships

### Inherits From

- [NEFilterVerdict](nefilterverdict.md)

### Inherited By

- [NEFilterControlVerdict](nefiltercontrolverdict.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Flow handling

- [NEFilterFlow](nefilterflow.md): The abstract base class for types that represent flows of network data.
- [NEFilterBrowserFlow](nefilterbrowserflow.md): A flow of network data, originating from a WebKit-based browser, that the filter examines.
- [NEFilterSocketFlow](nefiltersocketflow.md): A flow of network data that the filter examines.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.

# NEFilterNewFlowVerdict (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The result from a filter data provder after the initial examination of a flow.

## Declaration

```objectivec
@interface NEFilterNewFlowVerdict : NEFilterVerdict
```

## Topics

### Creating new flow verdicts

- [allowVerdict](nefilternewflowverdict/allow%28%29.md): Create a verdict that indicates to the system that the all of the new flow’s data should be allowed to pass to its final destination.
- [dropVerdict](nefilternewflowverdict/drop%28%29.md): Create a verdict that indicates to the system that all of the new flow’s data should dropped, and the user should not be given the opportunity to request access.
- [pauseVerdict](nefilternewflowverdict/pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [filterDataVerdictWithFilterInbound:peekInboundBytes:filterOutbound:peekOutboundBytes:](nefilternewflowverdict/filterdataverdict%28withfilterinbound_peekinboundbytes_filteroutbound_peekoutboundbytes_%29.md): Create a verdict that indicates to the system that the filter needs to make a decision about a new flow after seeing a portion of the flow’s data.
- [remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey:](nefilternewflowverdict/remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be dropped, but allow the user to request access by tapping or clicking on a URL.
- [needRulesVerdict](nefilternewflowverdict/needrules%28%29.md): Create a verdict that indicates to the system that the Filter Data Provider needs more information before it can make a decision about a new flow.
- [URLAppendStringVerdictWithMapKey:](nefilternewflowverdict/urlappendstringverdict%28withmapkey_%29.md): Create a verdict that indicates to the system that all of the new flow’s data should be allowed to pass to its final destination, but a string should first be appended to the new flow’s request URL.

### Inspecting new flow verdict properties

- [statisticsReportFrequency](nefilternewflowverdict/statisticsreportfrequency.md): The frequency at which the data provider receives reports.
- [NEFilterReportFrequency](nefilterreport/frequency.md): An enumeration that represents the frequency of filter report delivery.

## Relationships

### Inherits From

- [NEFilterVerdict](nefilterverdict.md)

### Inherited By

- [NEFilterControlVerdict](nefiltercontrolverdict.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Flow handling

- [NEFilterFlow](nefilterflow.md): The abstract base class for types that represent flows of network data.
- [NEFilterBrowserFlow](nefilterbrowserflow.md): A flow of network data, originating from a WebKit-based browser, that the filter examines.
- [NEFilterSocketFlow](nefiltersocketflow.md): A flow of network data that the filter examines.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.
