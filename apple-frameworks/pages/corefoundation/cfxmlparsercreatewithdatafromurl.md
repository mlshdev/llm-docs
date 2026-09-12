> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparsercreatewithdatafromurl](https://developer.apple.com/documentation/corefoundation/cfxmlparsercreatewithdatafromurl)

# CFXMLParserCreateWithDataFromURL

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Creates a new XML parser for the specified XML data at the specified URL.

## Declaration

```objectivec
extern CFXMLParserRefCFXMLParserCreateWithDataFromURL(CFAllocatorRef allocator, CFURLRef dataSource, CFOptionFlags parseOptions, CFIndex versionOfNodes, CFXMLParserCallBacks *callBacks, CFXMLParserContext *context);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `dataSource`: The URL from which to load the XML data. The URL is used to resolve any relative references found in XML Data. It must be a valid CFURL object; `NULL` is an unacceptable value.
- `parseOptions`: Flags which control how the XML data will be parsed. See [CFXMLParserOptions](cfxmlparseroptions.md) for the list of available options.
- `versionOfNodes`: Determines which version of CFXMLNode objects are produced by the parser.
- `callBacks`: Callbacks called by the parser as the XML is processed. The callbacks are called as each XML tag is encountered, when an external entity needs to be resolved, and when an error occurs. See [CFXMLParserCallBacks](cfxmlparsercallbacks.md) and the individual callbacks for more details. Do not pass `NULL`.
- `context`: Determines what, if any, information pointer is passed to the callbacks as the parse progresses; may be `NULL`.

<a id="return-value"></a>

## Return Value

The newly created parser. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFXMLParser Miscellaneous Functions

- [CFXMLParserAbort](cfxmlparserabort.md): Deprecated. Causes a parser to abort with the given error code and description.
- [CFXMLParserCopyErrorDescription](cfxmlparsercopyerrordescription.md): Deprecated. Returns the user-readable description of the current error condition.
- [CFXMLParserCreate](cfxmlparsercreate.md): Deprecated. Creates a new XML parser for the specified XML data.
- [CFXMLParserGetCallBacks](cfxmlparsergetcallbacks.md): Deprecated. Returns the callbacks associated with an XML parser when it was created.
- [CFXMLParserGetContext](cfxmlparsergetcontext.md): Deprecated. Returns the context for an XML parser.
- [CFXMLParserGetDocument](cfxmlparsergetdocument.md): Deprecated. Returns the top-most object returned by the create XML structure callback.
- [CFXMLParserGetLineNumber](cfxmlparsergetlinenumber.md): Deprecated. Returns the line number of the current parse location.
- [CFXMLParserGetLocation](cfxmlparsergetlocation.md): Deprecated. Returns the character index of the current parse location.
- [CFXMLParserGetSourceURL](cfxmlparsergetsourceurl.md): Deprecated. Returns the URL for the XML data being parsed.
- [CFXMLParserGetStatusCode](cfxmlparsergetstatuscode.md): Deprecated. Returns a numeric code indicating the current status of the parser.
- [CFXMLParserGetTypeID](cfxmlparsergettypeid.md): Deprecated. Returns the type identifier for the CFXMLParser opaque type.
- [CFXMLParserParse](cfxmlparserparse.md): Deprecated. Begins a parse of the XML data that was associated with the parser when it was created.
