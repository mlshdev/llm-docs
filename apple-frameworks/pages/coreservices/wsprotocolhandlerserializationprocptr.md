> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/wsprotocolhandlerserializationprocptr](https://developer.apple.com/documentation/coreservices/wsprotocolhandlerserializationprocptr)

# WSProtocolHandlerSerializationProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

This is an optional callback that handles custom serialization of a particular data type for a protocol handler.

## Declaration

```objectivec
typedef CFStringRef (*WSProtocolHandlerSerializationProcPtr)(WSProtocolHandlerRef protocol, CFTypeRef obj, void *info);
```

## Parameters

- `protocol`: The protocol handler for which this callback handles serialization.
- `obj`: The CFTypeRef for which this callback produces serialized XML.
- `info`: Private callback data.

<a id="return_value"></a>

## Return Value

A `CFStringRef` containing valid XML.  The caller of this callback will release the string. If you return `NULL`, the default serializer is used.

<a id="discussion"></a>

## Discussion

If your callback is named MySerilaizerCallback, declare it like this:

<a id="1681601"></a>

### Discussion

This callback is called whenever a type to be serialized by the protocol handler has the given CFTypeID. The callback should return an XML snippet that will be understood by the server as a correct serialization for a given type.  If the callback returns `NULL`, the default serializer is used.

> **Important**

> For SOAP serializations, the parameter key (element name) is not part of the callback; it will be substituded for all occurances of "%@" in the returned string.
