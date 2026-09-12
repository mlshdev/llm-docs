> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterverdict](https://developer.apple.com/documentation/networkextension/nefilterverdict)

# NEFilterVerdict (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The abstract base class for filter verdict classes.

## Declaration

```swift
class NEFilterVerdict
```

<a id="overview"></a>

## Overview

Filter providers use instances this class to inform the system about how to handle flows of network data.

## Topics

### Configuring report generation

- [shouldReport](nefilterverdict/shouldreport.md): A Boolean value that indicates whether to send a report to the control provider when processing this verdict.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEFilterDataVerdict](nefilterdataverdict.md)
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md)
- [NEFilterRemediationVerdict](nefilterremediationverdict.md)

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
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.

# NEFilterVerdict (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The abstract base class for filter verdict classes.

## Declaration

```objectivec
@interface NEFilterVerdict : NSObject
```

<a id="overview"></a>

## Overview

Filter providers use instances this class to inform the system about how to handle flows of network data.

## Topics

### Configuring report generation

- [shouldReport](nefilterverdict/shouldreport.md): A Boolean value that indicates whether to send a report to the control provider when processing this verdict.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEFilterDataVerdict](nefilterdataverdict.md)
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md)
- [NEFilterRemediationVerdict](nefilterremediationverdict.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Flow handling

- [NEFilterFlow](nefilterflow.md): The abstract base class for types that represent flows of network data.
- [NEFilterBrowserFlow](nefilterbrowserflow.md): A flow of network data, originating from a WebKit-based browser, that the filter examines.
- [NEFilterSocketFlow](nefiltersocketflow.md): A flow of network data that the filter examines.
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.
