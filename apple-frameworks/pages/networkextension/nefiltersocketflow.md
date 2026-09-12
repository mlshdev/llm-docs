> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltersocketflow](https://developer.apple.com/documentation/networkextension/nefiltersocketflow)

# NEFilterSocketFlow (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A flow of network data that the filter examines.

## Declaration

```swift
class NEFilterSocketFlow
```

## Topics

### Getting socket flow properties

- [remoteEndpoint](nefiltersocketflow/remoteendpoint.md): Deprecated. An object containing details about the socket’s remote endpoint.
- [remoteHostname](nefiltersocketflow/remotehostname.md): The flow’s remote hostname, if applicable.
- [NEFilterFlow](nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](nefiltersocketflow/localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketFamily](nefiltersocketflow/socketfamily.md): The protocol family of the socket.
- [socketType](nefiltersocketflow/sockettype.md): The type of the socket.
- [socketProtocol](nefiltersocketflow/socketprotocol.md): The protocol of the socket.

### Instance Properties

- [localFlowEndpoint](nefiltersocketflow/localflowendpoint-89z3l.md)
- [remoteFlowEndpoint](nefiltersocketflow/remoteflowendpoint-6bnas.md)

## Relationships

### Inherits From

- [NEFilterFlow](nefilterflow.md)

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
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.

# NEFilterSocketFlow (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A flow of network data that the filter examines.

## Declaration

```objectivec
@interface NEFilterSocketFlow : NEFilterFlow
```

## Topics

### Getting socket flow properties

- [remoteEndpoint](nefiltersocketflow/remoteendpoint.md): Deprecated. An object containing details about the socket’s remote endpoint.
- [remoteHostname](nefiltersocketflow/remotehostname.md): The flow’s remote hostname, if applicable.
- [NEFilterFlow](nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](nefiltersocketflow/localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketFamily](nefiltersocketflow/socketfamily.md): The protocol family of the socket.
- [socketType](nefiltersocketflow/sockettype.md): The type of the socket.
- [socketProtocol](nefiltersocketflow/socketprotocol.md): The protocol of the socket.

### Instance Properties

- [localFlowEndpoint](nefiltersocketflow/localflowendpoint-4nt54.md)
- [remoteFlowEndpoint](nefiltersocketflow/remoteflowendpoint-52dxr.md)

## Relationships

### Inherits From

- [NEFilterFlow](nefilterflow.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Flow handling

- [NEFilterFlow](nefilterflow.md): The abstract base class for types that represent flows of network data.
- [NEFilterBrowserFlow](nefilterbrowserflow.md): A flow of network data, originating from a WebKit-based browser, that the filter examines.
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.
