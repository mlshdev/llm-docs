> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576435-wsmethodinvocationaddserializati](https://developer.apple.com/documentation/coreservices/1576435-wsmethodinvocationaddserializati)

# WSMethodInvocationAddSerializationOverride

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Specifies a callback to be made when creating the XML for an method invocation.

## Declaration

```objectivec
void WSMethodInvocationAddSerializationOverride(WSMethodInvocationRef invocation, CFTypeID objType, WSMethodInvocationSerializationProcPtr serializationProc, WSClientContext *context);
```

## Parameters

- `invocation`: The invocation currently being serialized
- `objType`: The `CFTypeID` of the object to serialize
- `serializationProc`: The `ProcPtr` to the callback
- `context`: A pointer to a `WSClientContext`.  The structure will be copied.

<a id="discussion"></a>

## Discussion

Specifies a callback which will be called to produce the XML that represents the serialization of a given type ref.  See `WSTypes.h` for a list of `CFTypes` for which there are default serializers.  If your callback returns `NULL`, the default serializer will be used.
