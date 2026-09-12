> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1423441-wsprotocolhandlercopyreplydictio](https://developer.apple.com/documentation/coreservices/1423441-wsprotocolhandlercopyreplydictio)

# WSProtocolHandlerCopyReplyDictionary

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Parses an incoming XML document as if it were the reply of a method.

## Declaration

```objectivec
CFDictionaryRef WSProtocolHandlerCopyReplyDictionary(WSProtocolHandlerRef ref, CFStringRef methodName, CFDataRef data);
```

## Parameters

- `ref`: A `WSProtocolHandlerRef`, as created by `WSProtocolHandlerCreate`.
- `methodName`: The method name to treat the XML file as a result of.
- `data`: A `CFDataRef` of the XML document to parse

<a id="return_value"></a>

## Return Value

A `CFDictionary`, as returned by `WSMethodInvocationInvoke`.

<a id="discussion"></a>

## Discussion

Parse an incoming XML document as if it were the reply of a method.  The results are the same as the `WSMethodInvocationInvoke` response;  the reply could be a fault.  If there was a parse error, `NULL` is returned.  Protocol specific additions, such as `kWSSOAPMessageHeaders`, may also be present in the dictionary.  The caller must release the resulting dictionary.
