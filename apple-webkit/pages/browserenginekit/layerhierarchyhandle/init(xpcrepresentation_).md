> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhandle/init(xpcrepresentation:)](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhandle/init(xpcrepresentation:))

# init(xpcRepresentation:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a handle from a representation received in an XPC message.

## Declaration

```swift
init(xpcRepresentation: xpc_object_t?) throws
```

## Parameters

- `xpcRepresentation`: A representation of the handle, encoded as an XPC object.

## See Also

### Sharing a layer hierarchy handle using XPC

- [createXPCRepresentation()](createxpcrepresentation%28%29.md): Creates an object representing this handle that you send to another process in an XPC message.

# handleWithXPCRepresentation:error: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a handle from a representation received in an XPC message.

## Declaration

```objectivec
+ (BELayerHierarchyHandle *) handleWithXPCRepresentation:(xpc_object_t) xpcRepresentation error:(NSError **) error;
```

## Parameters

- `xpcRepresentation`: A representation of the handle, encoded as an XPC object.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Sharing a layer hierarchy handle using XPC

- [createXPCRepresentation](createxpcrepresentation%28%29.md): Creates an object representing this handle that you send to another process in an XPC message.
