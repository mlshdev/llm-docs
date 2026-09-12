> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataverdict](https://developer.apple.com/documentation/networkextension/nefilterdataverdict)

# NEFilterDataVerdict (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The result from a filter data provder for subsequent chunks of data on a flow.

## Declaration

```swift
class NEFilterDataVerdict
```

<a id="overview"></a>

## Overview

Return this verdict type from the various methods of [NEFilterDataProvider](nefilterdataprovider.md).

## Topics

### Creating data verdicts

- [allow()](nefilterdataverdict/allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [drop()](nefilterdataverdict/drop%28%29.md): Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.
- [pause()](nefilterdataverdict/pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [remediateVerdict(withRemediationURLMapKey:remediationButtonTextMapKey:)](nefilterdataverdict/remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.
- [needRules()](nefilterdataverdict/needrules%28%29.md): Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.
- [init(passBytes:peekBytes:)](nefilterdataverdict/init%28passbytes_peekbytes_%29.md): Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.

### Reporting statistics

- [statisticsReportFrequency](nefilterdataverdict/statisticsreportfrequency.md): The frequencty at which to provide flow statistics to the data provider.

## Relationships

### Inherits From

- [NEFilterVerdict](nefilterverdict.md)

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
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.

# NEFilterDataVerdict (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The result from a filter data provder for subsequent chunks of data on a flow.

## Declaration

```objectivec
@interface NEFilterDataVerdict : NEFilterVerdict
```

<a id="overview"></a>

## Overview

Return this verdict type from the various methods of [NEFilterDataProvider](nefilterdataprovider.md).

## Topics

### Creating data verdicts

- [allowVerdict](nefilterdataverdict/allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [dropVerdict](nefilterdataverdict/drop%28%29.md): Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.
- [pauseVerdict](nefilterdataverdict/pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey:](nefilterdataverdict/remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.
- [needRulesVerdict](nefilterdataverdict/needrules%28%29.md): Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.
- [dataVerdictWithPassBytes:peekBytes:](nefilterdataverdict/init%28passbytes_peekbytes_%29.md): Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.

### Reporting statistics

- [statisticsReportFrequency](nefilterdataverdict/statisticsreportfrequency.md): The frequencty at which to provide flow statistics to the data provider.

## Relationships

### Inherits From

- [NEFilterVerdict](nefilterverdict.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Flow handling

- [NEFilterFlow](nefilterflow.md): The abstract base class for types that represent flows of network data.
- [NEFilterBrowserFlow](nefilterbrowserflow.md): A flow of network data, originating from a WebKit-based browser, that the filter examines.
- [NEFilterSocketFlow](nefiltersocketflow.md): A flow of network data that the filter examines.
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.
