> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterbrowserflow](https://developer.apple.com/documentation/networkextension/nefilterbrowserflow)

# NEFilterBrowserFlow (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A flow of network data, originating from a WebKit-based browser, that the filter examines.

## Declaration

```swift
class NEFilterBrowserFlow
```

## Topics

### Getting browser flow properties

- [parentURL](nefilterbrowserflow/parenturl.md): A URL of the web page that’s responsible for the flow’s creation.
- [request](nefilterbrowserflow/request.md): An HTTP request of the flow.
- [response](nefilterbrowserflow/response.md): An HTTP response of the flow.

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
- [NEFilterSocketFlow](nefiltersocketflow.md): A flow of network data that the filter examines.
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.

# NEFilterBrowserFlow (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A flow of network data, originating from a WebKit-based browser, that the filter examines.

## Declaration

```objectivec
@interface NEFilterBrowserFlow : NEFilterFlow
```

## Topics

### Getting browser flow properties

- [parentURL](nefilterbrowserflow/parenturl.md): A URL of the web page that’s responsible for the flow’s creation.
- [request](nefilterbrowserflow/request.md): An HTTP request of the flow.
- [response](nefilterbrowserflow/response.md): An HTTP response of the flow.

## Relationships

### Inherits From

- [NEFilterFlow](nefilterflow.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Flow handling

- [NEFilterFlow](nefilterflow.md): The abstract base class for types that represent flows of network data.
- [NEFilterSocketFlow](nefiltersocketflow.md): A flow of network data that the filter examines.
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.
