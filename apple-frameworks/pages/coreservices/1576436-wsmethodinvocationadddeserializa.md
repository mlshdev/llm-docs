> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576436-wsmethodinvocationadddeserializa](https://developer.apple.com/documentation/coreservices/1576436-wsmethodinvocationadddeserializa)

# WSMethodInvocationAddDeserializationOverride

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Specifies a callback to be made when parsing the XML in a method response.

## Declaration

```objectivec
void WSMethodInvocationAddDeserializationOverride(WSMethodInvocationRef invocation, CFStringRef typeNamespace, CFStringRef typeName, WSMethodInvocationDeserializationProcPtr deserializationProc, WSClientContext *context);
```

## Parameters

- `invocation`: The method invocation reference.
- `typeNamespace`: The fully resolved namespace for a specific type. For example, this field could be: `CFSTR("http://www.Myserver.com/myNameSpace")`. If `NULL`, the default namespace will be used.
- `typeName`: The non-qualified type name. Note that this is the XML /name/ to be deserialized, not the name of the type. For example, if the XML is  `<Sharename xsi:type="xsd:string">Album-9</Sharename>`, the `typeName` is `Sharename`, not `string`. This parameter must not be `NULL`.
- `deserializationProc`: A `ProcPtr` to the callback to be called to perform the deserialization.
- `context`: A pointer to a `WSClientContext`. The structure will be copied.

<a id="discussion"></a>

## Discussion

Specifies a callback to be made when parsing an XML method response.  Used to deserialize types the default deserializer does not handle. The callback should return a `CFTypeRef` containing the deserialized object value.  If the callback returns `NULL`, the default deserializer is used.

## See Also

### Related Documentation

- [Web Services Core Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/UsingWebservices/Introduction/Introduction.html#//apple_ref/doc/uid/TP30000985)
