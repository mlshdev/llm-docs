> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterflow](https://developer.apple.com/documentation/networkextension/nefilterflow)

# NEFilterFlow (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The abstract base class for types that represent flows of network data.

## Declaration

```swift
class NEFilterFlow
```

## Topics

### Inspecting flow properties

- [url](nefilterflow/url.md): The flow’s HTTP URL.
- [identifier](nefilterflow/identifier.md): The unique identifier of the flow.
- [direction](nefilterflow/direction.md): The initial direction of the flow: incoming or outgoing.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterFlowBytesMax](nefilterflowbytesmax.md): The maximum number of bytes to pass or peek for a flow.

### Source app identification

- [sourceAppUniqueIdentifier](nefilterflow/sourceappuniqueidentifier.md): A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.
- [sourceAppIdentifier](nefilterflow/sourceappidentifier.md): A string containing the identifier of the source app of the flow.
- [sourceAppVersion](nefilterflow/sourceappversion.md): The short version string of the app that is the source of the flow.
- [sourceAppAuditToken](nefilterflow/sourceappaudittoken.md): The audit token of the source application of the flow.
- [sourceProcessAuditToken](nefilterflow/sourceprocessaudittoken.md): The audit token of the process that created the flow.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEFilterBrowserFlow](nefilterbrowserflow.md)
- [NEFilterSocketFlow](nefiltersocketflow.md)

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

- [NEFilterBrowserFlow](nefilterbrowserflow.md): A flow of network data, originating from a WebKit-based browser, that the filter examines.
- [NEFilterSocketFlow](nefiltersocketflow.md): A flow of network data that the filter examines.
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.

# NEFilterFlow (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The abstract base class for types that represent flows of network data.

## Declaration

```objectivec
@interface NEFilterFlow : NSObject
```

## Topics

### Inspecting flow properties

- [URL](nefilterflow/url.md): The flow’s HTTP URL.
- [identifier](nefilterflow/identifier.md): The unique identifier of the flow.
- [direction](nefilterflow/direction.md): The initial direction of the flow: incoming or outgoing.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterFlowBytesMax](nefilterflowbytesmax.md): The maximum number of bytes to pass or peek for a flow.

### Source app identification

- [sourceAppUniqueIdentifier](nefilterflow/sourceappuniqueidentifier.md): A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.
- [sourceAppIdentifier](nefilterflow/sourceappidentifier.md): A string containing the identifier of the source app of the flow.
- [sourceAppVersion](nefilterflow/sourceappversion.md): The short version string of the app that is the source of the flow.
- [sourceAppAuditToken](nefilterflow/sourceappaudittoken.md): The audit token of the source application of the flow.
- [sourceProcessAuditToken](nefilterflow/sourceprocessaudittoken.md): The audit token of the process that created the flow.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEFilterBrowserFlow](nefilterbrowserflow.md)
- [NEFilterSocketFlow](nefiltersocketflow.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Flow handling

- [NEFilterBrowserFlow](nefilterbrowserflow.md): A flow of network data, originating from a WebKit-based browser, that the filter examines.
- [NEFilterSocketFlow](nefiltersocketflow.md): A flow of network data that the filter examines.
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.
