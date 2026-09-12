> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/createxpcrepresentation()](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/createxpcrepresentation())

# createXPCRepresentation() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a representation of the transaction coordinator that you send to another process.

## Declaration

```swift
func createXPCRepresentation() -> xpc_object_t
```

## See Also

### Sharing a transaction coordinator using XPC

- [init(xpcRepresentation:)](init%28xpcrepresentation_%29.md): Creates a transaction coordinator from an XPC object.

# createXPCRepresentation (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a representation of the transaction coordinator that you send to another process.

## Declaration

```objectivec
- (xpc_object_t) createXPCRepresentation;
```

## See Also

### Sharing a transaction coordinator using XPC

- [coordinatorWithXPCRepresentation:error:](init%28xpcrepresentation_%29.md): Creates a transaction coordinator from an XPC object.
