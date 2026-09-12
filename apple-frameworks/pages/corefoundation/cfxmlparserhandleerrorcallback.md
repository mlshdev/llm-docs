> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparserhandleerrorcallback](https://developer.apple.com/documentation/corefoundation/cfxmlparserhandleerrorcallback)

# CFXMLParserHandleErrorCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

Callback function invoked by the parser to notify your application that an error has occurred.

## Declaration

```swift
typealias CFXMLParserHandleErrorCallBack = (CFXMLParser?, CFXMLParserStatusCode, UnsafeMutableRawPointer?) -> DarwinBoolean
```

## Parameters

- `parser`: A CFXMLParser object making the callback.
- `error`: A status code describing the error.
- `info`: The program-defined context data you specified in the [CFXMLParserContext](cfxmlparsercontext.md) structure when creating the parser.

<a id="return-value"></a>

## Return Value

`true` if the parser should continue parsing the XML, `false` if the parser should stop.

<a id="Discussion"></a>

## Discussion

If this callback is not defined, the parser will silently attempt to recover. Otherwise, this callback may return false to force the parser to stop. If this callback returns true, the parser will attempt to recover (fatal errors will still cause the parse to abort immediately). This callback is optional.

## See Also

### Callbacks

- [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md): Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.
- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md): Callback function invoked when the parser encounters an XML open tag.
- [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md): Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserResolveExternalEntityCallBack](cfxmlparserresolveexternalentitycallback.md): Callback function invoked by the parser to notify your application that an external entity has been referenced.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.

# CFXMLParserHandleErrorCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

Callback function invoked by the parser to notify your application that an error has occurred.

## Declaration

```objectivec
typedef unsigned char (*)(struct __CFXMLParser *, enum CFXMLParserStatusCode, void *) CFXMLParserHandleErrorCallBack;
```

## Parameters

- `parser`: A CFXMLParser object making the callback.
- `error`: A status code describing the error.
- `info`: The program-defined context data you specified in the [CFXMLParserContext](cfxmlparsercontext.md) structure when creating the parser.

<a id="return-value"></a>

## Return Value

`true` if the parser should continue parsing the XML, `false` if the parser should stop.

<a id="Discussion"></a>

## Discussion

If this callback is not defined, the parser will silently attempt to recover. Otherwise, this callback may return false to force the parser to stop. If this callback returns true, the parser will attempt to recover (fatal errors will still cause the parse to abort immediately). This callback is optional.

## See Also

### Callbacks

- [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md): Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.
- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md): Callback function invoked when the parser encounters an XML open tag.
- [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md): Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserResolveExternalEntityCallBack](cfxmlparserresolveexternalentitycallback.md): Callback function invoked by the parser to notify your application that an external entity has been referenced.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.
