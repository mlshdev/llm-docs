> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparsergetcontext](https://developer.apple.com/documentation/corefoundation/cfxmlparsergetcontext)

# CFXMLParserGetContext

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns the context for an XML parser.

## Declaration

```objectivec
extern void CFXMLParserGetContext(CFXMLParserRef parser, CFXMLParserContext *context);
```

## Parameters

- `parser`: The XML parser to examine.
- `context`: On return, a pointer to the context structure for `parser`.

<a id="Discussion"></a>

## Discussion

If you set a context for the parser, it will be passed to you as a parameter in each of the parser callback functions. The context data structure is application defined and associated with a parser using one of the `CFXMLParserCreate...` functions.

## See Also

### CFXMLParser Miscellaneous Functions

- [CFXMLParserAbort](cfxmlparserabort.md): Deprecated. Causes a parser to abort with the given error code and description.
- [CFXMLParserCopyErrorDescription](cfxmlparsercopyerrordescription.md): Deprecated. Returns the user-readable description of the current error condition.
- [CFXMLParserCreate](cfxmlparsercreate.md): Deprecated. Creates a new XML parser for the specified XML data.
- [CFXMLParserCreateWithDataFromURL](cfxmlparsercreatewithdatafromurl.md): Deprecated. Creates a new XML parser for the specified XML data at the specified URL.
- [CFXMLParserGetCallBacks](cfxmlparsergetcallbacks.md): Deprecated. Returns the callbacks associated with an XML parser when it was created.
- [CFXMLParserGetDocument](cfxmlparsergetdocument.md): Deprecated. Returns the top-most object returned by the create XML structure callback.
- [CFXMLParserGetLineNumber](cfxmlparsergetlinenumber.md): Deprecated. Returns the line number of the current parse location.
- [CFXMLParserGetLocation](cfxmlparsergetlocation.md): Deprecated. Returns the character index of the current parse location.
- [CFXMLParserGetSourceURL](cfxmlparsergetsourceurl.md): Deprecated. Returns the URL for the XML data being parsed.
- [CFXMLParserGetStatusCode](cfxmlparsergetstatuscode.md): Deprecated. Returns a numeric code indicating the current status of the parser.
- [CFXMLParserGetTypeID](cfxmlparsergettypeid.md): Deprecated. Returns the type identifier for the CFXMLParser opaque type.
- [CFXMLParserParse](cfxmlparserparse.md): Deprecated. Begins a parse of the XML data that was associated with the parser when it was created.
