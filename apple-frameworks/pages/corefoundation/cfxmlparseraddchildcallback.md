> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparseraddchildcallback](https://developer.apple.com/documentation/corefoundation/cfxmlparseraddchildcallback)

# CFXMLParserAddChildCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.

## Declaration

```swift
typealias CFXMLParserAddChildCallBack = (CFXMLParser?, UnsafeMutableRawPointer?, UnsafeMutableRawPointer?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `parser`: The CFXMLParser object making the callback.
- `parent`: The program-defined value representing the XML element to whom `child` is being added. This value was returned by the [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md) callback when this element’s open tag was detected.
- `child`: The program-defined value representing the XML element that is being added to `parent`. This value was returned by the [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md) callback when this element’s open tag was detected.
- `info`: The program-defined context data you specified in the [CFXMLParserContext](cfxmlparsercontext.md) structure when creating the parser.

<a id="Discussion"></a>

## Discussion

If the [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md) function returns NULL for a given structure, that structure is omitted entirely, and this callback will *not* be called for either a NULL child or parent.

## See Also

### Callbacks

- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md): Callback function invoked when the parser encounters an XML open tag.
- [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md): Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.
- [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md): Callback function invoked by the parser to notify your application that an error has occurred.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserResolveExternalEntityCallBack](cfxmlparserresolveexternalentitycallback.md): Callback function invoked by the parser to notify your application that an external entity has been referenced.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.

# CFXMLParserAddChildCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.

## Declaration

```objectivec
typedef void (*)(struct __CFXMLParser *, void *, void *, void *) CFXMLParserAddChildCallBack;
```

## Parameters

- `parser`: The CFXMLParser object making the callback.
- `parent`: The program-defined value representing the XML element to whom `child` is being added. This value was returned by the [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md) callback when this element’s open tag was detected.
- `child`: The program-defined value representing the XML element that is being added to `parent`. This value was returned by the [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md) callback when this element’s open tag was detected.
- `info`: The program-defined context data you specified in the [CFXMLParserContext](cfxmlparsercontext.md) structure when creating the parser.

<a id="Discussion"></a>

## Discussion

If the [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md) function returns NULL for a given structure, that structure is omitted entirely, and this callback will *not* be called for either a NULL child or parent.

## See Also

### Callbacks

- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md): Callback function invoked when the parser encounters an XML open tag.
- [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md): Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.
- [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md): Callback function invoked by the parser to notify your application that an error has occurred.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserResolveExternalEntityCallBack](cfxmlparserresolveexternalentitycallback.md): Callback function invoked by the parser to notify your application that an external entity has been referenced.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.
