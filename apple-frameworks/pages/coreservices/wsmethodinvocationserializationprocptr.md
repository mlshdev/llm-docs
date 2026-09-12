> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/wsmethodinvocationserializationprocptr](https://developer.apple.com/documentation/coreservices/wsmethodinvocationserializationprocptr)

# WSMethodInvocationSerializationProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** macOS 10.2+ (deprecated in 10.8)

This is an optional callback that handles custom serialization of a particular data type for method invocation.

## Declaration

```objectivec
typedef CFStringRef (*WSMethodInvocationSerializationProcPtr)(WSMethodInvocationRef invocation, CFTypeRef obj, void *info);
```

## Parameters

- `invocation`: The method invocation for which this callback handles serialization.
- `obj`: The CFTypeRef for which this callback produces serialized XML.
- `info`: Private callback data.

<a id="return_value"></a>

## Return Value

A `CFStringRef` containing valid XML.  The caller of this callback will release the string. If you return `NULL`, the default serializer is used.

<a id="discussion"></a>

## Discussion

If your callback is named MySerilaizerCallback, declare it like this:

<a id="1681581"></a>

### Discussion

This callback is called whenever a type to be serialized by the method invocation has the given CFTypeID. The callback should return an XML snippet that will be understood by the server as a correct serialization for a given type.  If the callback returns `NULL`, the default serializer is used.
