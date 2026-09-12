> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1423440-wsprotocolhandlercopyreplydocume](https://developer.apple.com/documentation/coreservices/1423440-wsprotocolhandlercopyreplydocume)

# WSProtocolHandlerCopyReplyDocument

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Creates a Reply XML document for a given WS ProtocolHandler and context dictionary.

## Declaration

```objectivec
CFDataRef WSProtocolHandlerCopyReplyDocument(WSProtocolHandlerRef ref, CFDictionaryRef methodContext, CFTypeRef resultValue);
```

## Parameters

- `ref`: The WSProtocolHandler to respond.
- `methodContext`: The `CFDictionary` containing the context for this method call, as returned by `WSProtocolHandlerParseRequest`.
- `resultValue`: A `CFTypeRef` representing the data to be serialized.

<a id="return_value"></a>

## Return Value

A `CFDataRef` containing the XML response.

<a id="discussion"></a>

## Discussion

This function creates a Reply XML document for a given `WSProtocolHandler` and context dictionary. Protocol specific addtions (for example, `kWSSOAPMessageHeaders`) may also be present in the dictionary.
