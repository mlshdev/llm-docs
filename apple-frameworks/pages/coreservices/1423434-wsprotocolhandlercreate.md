> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1423434-wsprotocolhandlercreate](https://developer.apple.com/documentation/coreservices/1423434-wsprotocolhandlercreate)

# WSProtocolHandlerCreate

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Creates a `WSProtocolHandlerRef` for use in translating an XML document.

## Declaration

```objectivec
WSProtocolHandlerRef WSProtocolHandlerCreate(CFAllocatorRef allocator, CFStringRef protocol);
```

## Parameters

- `allocator`: A `CFAllocatorRef` used to allocate the protocol handler.
- `protocol`: A constant string, defined in `WSMethodInvocation.h`, that determines the type of implementation to create (XML-RPC vs. SOAP).

<a id="return_value"></a>

## Return Value

A `WSProtocolHandlerRef`; `NULL` if a parse error occurred.

<a id="discussion"></a>

## Discussion

This function creates a `WSProtocolHandlerRef` for use in translating an XML document. A protocol handler translates dictionaries into web services requests. It is created with a string specifying the protocol (XML-RPC or SOAP) and can be modified by setting various properties. It should be noted that the parser can be re-used for multiple parses.
