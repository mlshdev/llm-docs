> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhandle/createxpcrepresentation()](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhandle/createxpcrepresentation())

# createXPCRepresentation() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates an object representing this handle that you send to another process in an XPC message.

## Declaration

```swift
func createXPCRepresentation() -> xpc_object_t
```

## See Also

### Sharing a layer hierarchy handle using XPC

- [init(xpcRepresentation:)](init%28xpcrepresentation_%29.md): Creates a handle from a representation received in an XPC message.

# createXPCRepresentation (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates an object representing this handle that you send to another process in an XPC message.

## Declaration

```objectivec
- (xpc_object_t) createXPCRepresentation;
```

## See Also

### Sharing a layer hierarchy handle using XPC

- [handleWithXPCRepresentation:error:](init%28xpcrepresentation_%29.md): Creates a handle from a representation received in an XPC message.
