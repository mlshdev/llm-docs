> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/wsprotocolhandlerdeserializationprocptr](https://developer.apple.com/documentation/coreservices/wsprotocolhandlerdeserializationprocptr)

# WSProtocolHandlerDeserializationProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

This is an optional callback that handles custom deserialization of a particular data type for a protocol handler.

## Declaration

```objectivec
typedef CFTypeRef (*WSProtocolHandlerDeserializationProcPtr)(WSProtocolHandlerRef protocol, CFXMLTreeRef msgRoot, CFXMLTreeRef deserializeRoot, void *info);
```

## Parameters

- `protocol`: The protocol handler for which this callback handles deserialization.
- `msgRoot`: The root element of the XML to be deserialized.
- `deserializeRoot`: The tree element of the XML to be deserialized.
- `info`: Private callback data.

<a id="return_value"></a>

## Return Value

A `CFTypeRef` representing the deserialized data. The caller will release this data. If you return `NULL`, the default deserializer is used.

<a id="discussion"></a>

## Discussion

If your callback is named MyDeserilaizerCallback, declare it like this:

<a id="1681620"></a>

### Discussion

This callback is passed a reference to the invocation currently being executed, the root of the response parse tree, the current node being deserialized, and a pointer to private data. The return result should be a valid `CFTypeRef` object (which will be released  by the caller) or `NULL` to allow the default deserializer to act. Unlike the serialization callback, which is called only for a specified data type, the deserialization callback is called for every element to be deserialized.
