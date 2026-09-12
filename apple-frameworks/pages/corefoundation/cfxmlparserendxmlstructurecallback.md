> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparserendxmlstructurecallback](https://developer.apple.com/documentation/corefoundation/cfxmlparserendxmlstructurecallback)

# CFXMLParserEndXMLStructureCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.

## Declaration

```swift
typealias CFXMLParserEndXMLStructureCallBack = (CFXMLParser?, UnsafeMutableRawPointer?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `parser`: The CFXMLParser object making the callback.
- `xmlType`: The program-defined value representing the XML element whose end tag has been detected. This value was returned by the [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md) callback.
- `info`: The program-defined context data you specified in the [CFXMLParserContext](cfxmlparsercontext.md) structure when creating the parser.

<a id="Discussion"></a>

## Discussion

As elements are encountered, this callback is called first, then the [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md) callback to add the new structure to its parent, then the [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md) callback (potentially several times) to add the new structure’s children to it, and then finally the [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md) callback to show that the structure has been fully parsed.This callback is optional.

## See Also

### Callbacks

- [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md): Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.
- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md): Callback function invoked when the parser encounters an XML open tag.
- [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md): Callback function invoked by the parser to notify your application that an error has occurred.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserResolveExternalEntityCallBack](cfxmlparserresolveexternalentitycallback.md): Callback function invoked by the parser to notify your application that an external entity has been referenced.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.

# CFXMLParserEndXMLStructureCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.

## Declaration

```objectivec
typedef void (*)(struct __CFXMLParser *, void *, void *) CFXMLParserEndXMLStructureCallBack;
```

## Parameters

- `parser`: The CFXMLParser object making the callback.
- `xmlType`: The program-defined value representing the XML element whose end tag has been detected. This value was returned by the [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md) callback.
- `info`: The program-defined context data you specified in the [CFXMLParserContext](cfxmlparsercontext.md) structure when creating the parser.

<a id="Discussion"></a>

## Discussion

As elements are encountered, this callback is called first, then the [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md) callback to add the new structure to its parent, then the [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md) callback (potentially several times) to add the new structure’s children to it, and then finally the [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md) callback to show that the structure has been fully parsed.This callback is optional.

## See Also

### Callbacks

- [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md): Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.
- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md): Callback function invoked when the parser encounters an XML open tag.
- [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md): Callback function invoked by the parser to notify your application that an error has occurred.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserResolveExternalEntityCallBack](cfxmlparserresolveexternalentitycallback.md): Callback function invoked by the parser to notify your application that an external entity has been referenced.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.
