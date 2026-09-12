> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/init(xpcrepresentation:)](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/init(xpcrepresentation:))

# init(xpcRepresentation:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a transaction coordinator from an XPC object.

## Declaration

```swift
init(xpcRepresentation: xpc_object_t?) throws
```

## Parameters

- `xpcRepresentation`: An XPC object describing the transaction coordinator to initialize.

<a id="discussion"></a>

## Discussion

This initializer can fail and throw an error if the `xpcRepresentation` doesn’t represent a transaction coordinator.

## See Also

### Sharing a transaction coordinator using XPC

- [createXPCRepresentation()](createxpcrepresentation%28%29.md): Creates a representation of the transaction coordinator that you send to another process.

# coordinatorWithXPCRepresentation:error: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a transaction coordinator from an XPC object.

## Declaration

```objectivec
+ (BELayerHierarchyHostingTransactionCoordinator *) coordinatorWithXPCRepresentation:(xpc_object_t) xpcRepresentation error:(NSError **) error;
```

## Parameters

- `xpcRepresentation`: An XPC object describing the transaction coordinator to initialize.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="discussion"></a>

## Discussion

This initializer can fail and throw an error if the `xpcRepresentation` doesn’t represent a transaction coordinator.

## See Also

### Sharing a transaction coordinator using XPC

- [createXPCRepresentation](createxpcrepresentation%28%29.md): Creates a representation of the transaction coordinator that you send to another process.
