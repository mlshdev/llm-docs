> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparserresolveexternalentitycallback](https://developer.apple.com/documentation/corefoundation/cfxmlparserresolveexternalentitycallback)

# CFXMLParserResolveExternalEntityCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

Callback function invoked by the parser to notify your application that an external entity has been referenced.

## Declaration

```swift
typealias CFXMLParserResolveExternalEntityCallBack = (CFXMLParser?, UnsafeMutablePointer<CFXMLExternalID>?, UnsafeMutableRawPointer?) -> Unmanaged<CFData>?
```

## Parameters

- `parser`: The CFXMLParser object making the callback.
- `extID`: The identifier for the external entity.
- `info`: The program-defined context data you specified in the [CFXMLParserContext](cfxmlparsercontext.md) structure when creating the parser.

<a id="return-value"></a>

## Return Value

The external entity or `NULL` if it should not be resolved.

<a id="Discussion"></a>

## Discussion

If this callback is not defined, the parser uses its internal routines to try and resolve the entity. Otherwise, if this callback returns NULL, a place holder for the external entity is inserted into the tree. In this manner, the parser’s client can prevent any external network or file accesses. This callback is optional.

## See Also

### Callbacks

- [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md): Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.
- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md): Callback function invoked when the parser encounters an XML open tag.
- [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md): Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.
- [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md): Callback function invoked by the parser to notify your application that an error has occurred.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.

# CFXMLParserResolveExternalEntityCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

Callback function invoked by the parser to notify your application that an external entity has been referenced.

## Declaration

```objectivec
typedef const struct __CFData *(*)(struct __CFXMLParser *, CFXMLExternalID *, void *) CFXMLParserResolveExternalEntityCallBack;
```

## Parameters

- `parser`: The CFXMLParser object making the callback.
- `extID`: The identifier for the external entity.
- `info`: The program-defined context data you specified in the [CFXMLParserContext](cfxmlparsercontext.md) structure when creating the parser.

<a id="return-value"></a>

## Return Value

The external entity or `NULL` if it should not be resolved.

<a id="Discussion"></a>

## Discussion

If this callback is not defined, the parser uses its internal routines to try and resolve the entity. Otherwise, if this callback returns NULL, a place holder for the external entity is inserted into the tree. In this manner, the parser’s client can prevent any external network or file accesses. This callback is optional.

## See Also

### Callbacks

- [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md): Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.
- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md): Callback function invoked when the parser encounters an XML open tag.
- [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md): Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.
- [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md): Callback function invoked by the parser to notify your application that an error has occurred.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.
