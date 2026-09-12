> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparsercreatexmlstructurecallback](https://developer.apple.com/documentation/corefoundation/cfxmlparsercreatexmlstructurecallback)

# CFXMLParserCreateXMLStructureCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

Callback function invoked when the parser encounters an XML open tag.

## Declaration

```swift
typealias CFXMLParserCreateXMLStructureCallBack = (CFXMLParser?, CFXMLNode?, UnsafeMutableRawPointer?) -> UnsafeMutableRawPointer?
```

## Parameters

- `parser`: The CFXMLParser object making the callback.
- `nodeDesc`: The CFXMLNode object that represents the XML structure encountered.
- `info`: The program-defined context data you specified in the [CFXMLParserContext](cfxmlparsercontext.md) structure when creating the parser.

<a id="return-value"></a>

## Return Value

A program-defined value representing the new XML element or `NULL` to indicate that the given structure should be skipped. This value is passed to the other callbacks.

<a id="Discussion"></a>

## Discussion

If NULL is returned for a given structure, only minimal parsing is done for that structure (enough to correctly determine its end, and to extract any data necessary for the remainder of the parse, such as Entity definitions). This callback (or any of the tree-creation callbacks) will not be called for any children of the skipped structure. The only exception is that the top-most element will always be reported even if NULL was returned for the document as a whole. For performance reasons, the node passed to this callback cannot be safely retained by the client; the node as a whole must be copied (using the [CFXMLNodeCreateCopy](cfxmlnodecreatecopy.md) function), or its contents must be extracted and copied. You are required to implement this callback for the parser to operate.

## See Also

### Callbacks

- [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md): Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.
- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md): Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.
- [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md): Callback function invoked by the parser to notify your application that an error has occurred.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserResolveExternalEntityCallBack](cfxmlparserresolveexternalentitycallback.md): Callback function invoked by the parser to notify your application that an external entity has been referenced.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.

# CFXMLParserCreateXMLStructureCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

Callback function invoked when the parser encounters an XML open tag.

## Declaration

```objectivec
typedef void *(*)(struct __CFXMLParser *, const struct __CFXMLNode *, void *) CFXMLParserCreateXMLStructureCallBack;
```

## Parameters

- `parser`: The CFXMLParser object making the callback.
- `nodeDesc`: The CFXMLNode object that represents the XML structure encountered.
- `info`: The program-defined context data you specified in the [CFXMLParserContext](cfxmlparsercontext.md) structure when creating the parser.

<a id="return-value"></a>

## Return Value

A program-defined value representing the new XML element or `NULL` to indicate that the given structure should be skipped. This value is passed to the other callbacks.

<a id="Discussion"></a>

## Discussion

If NULL is returned for a given structure, only minimal parsing is done for that structure (enough to correctly determine its end, and to extract any data necessary for the remainder of the parse, such as Entity definitions). This callback (or any of the tree-creation callbacks) will not be called for any children of the skipped structure. The only exception is that the top-most element will always be reported even if NULL was returned for the document as a whole. For performance reasons, the node passed to this callback cannot be safely retained by the client; the node as a whole must be copied (using the [CFXMLNodeCreateCopy](cfxmlnodecreatecopy.md) function), or its contents must be extracted and copied. You are required to implement this callback for the parser to operate.

## See Also

### Callbacks

- [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md): Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.
- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md): Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.
- [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md): Callback function invoked by the parser to notify your application that an error has occurred.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserResolveExternalEntityCallBack](cfxmlparserresolveexternalentitycallback.md): Callback function invoked by the parser to notify your application that an external entity has been referenced.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.
