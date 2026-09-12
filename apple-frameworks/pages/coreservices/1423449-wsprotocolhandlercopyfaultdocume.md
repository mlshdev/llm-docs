> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1423449-wsprotocolhandlercopyfaultdocume](https://developer.apple.com/documentation/coreservices/1423449-wsprotocolhandlercopyfaultdocume)

# WSProtocolHandlerCopyFaultDocument

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Creates a Fault XML response for a given WSProtocolHandler and fault details dictionary.

## Declaration

```objectivec
CFDataRef WSProtocolHandlerCopyFaultDocument(WSProtocolHandlerRef ref, CFDictionaryRef methodContext, CFDictionaryRef faultDict);
```

## Parameters

- `ref`: A `WSProtocolHandlerRef`, as created by `WSProtocolHandlerCreate`.
- `methodContext`: The CFDictionary containing the context for this method call, as returned by `WSProtocolHandlerParseRequest`.
- `faultDict`: A `CFDictionary` containing the fault information. See `WSMethodInvocation.h` for valid keys.

<a id="return_value"></a>

## Return Value

A `CFDataRef` containing the XML fault.

<a id="discussion"></a>

## Discussion

This function creates a Fault XML response for a given `WSProtocolHandlerRef` and fault details dictionary. The fault dictionary contains one or more of `kWSFaultString`, `kWSFaultCode` or `kWSFaultExtra`, as per WSMethodInvocation.h.
