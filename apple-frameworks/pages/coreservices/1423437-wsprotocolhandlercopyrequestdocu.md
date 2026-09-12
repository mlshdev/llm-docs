> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1423437-wsprotocolhandlercopyrequestdocu](https://developer.apple.com/documentation/coreservices/1423437-wsprotocolhandlercopyrequestdocu)

# WSProtocolHandlerCopyRequestDocument

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Creates an XML request for a given `WSProtocolHandler` and parameter list.

## Declaration

```objectivec
CFDataRef WSProtocolHandlerCopyRequestDocument(WSProtocolHandlerRef ref, CFStringRef methodName, CFDictionaryRef methodParams, CFArrayRef methodParamOrder, CFDictionaryRef methodExtras);
```

## Parameters

- `ref`: The `WSProtocolHandlerRef`.
- `methodName`: A `CFString` of the method name to call.
- `methodParams`: A `CFDictionary` containing the parameters to send.
- `methodParamOrder`: A `CFArray`, which, if not `NULL`, specifies the order of the parameters in the `CFDictionary`.
- `methodExtras`: A `CFDictionary`, which, if not `NULL`, contains additional information for the protocol (for example, `kWSSoapMessageHeaders`).

<a id="return_value"></a>

## Return Value

A `CFDataRef`.

<a id="discussion"></a>

## Discussion

This function creates an XML request for a given `WSProtocolHandler` and parameter list. This is the request sent to a server.
