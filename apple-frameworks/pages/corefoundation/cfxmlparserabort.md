> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparserabort](https://developer.apple.com/documentation/corefoundation/cfxmlparserabort)

# CFXMLParserAbort

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Causes a parser to abort with the given error code and description.

## Declaration

```objectivec
extern void CFXMLParserAbort(CFXMLParserRef parser, CFXMLParserStatusCode errorCode, CFStringRef errorDescription);
```

## Parameters

- `parser`: The parser to abort.
- `errorCode`: The error code to return to the parser.
- `errorDescription`: The error description string to return to the parser. This value may not be `NULL`.

<a id="Discussion"></a>

## Discussion

This function cannot be called asynchronously. In other words, it must be called from within a parser callback function.

## See Also

### CFXMLParser Miscellaneous Functions

- [CFXMLParserCopyErrorDescription](cfxmlparsercopyerrordescription.md): Deprecated. Returns the user-readable description of the current error condition.
- [CFXMLParserCreate](cfxmlparsercreate.md): Deprecated. Creates a new XML parser for the specified XML data.
- [CFXMLParserCreateWithDataFromURL](cfxmlparsercreatewithdatafromurl.md): Deprecated. Creates a new XML parser for the specified XML data at the specified URL.
- [CFXMLParserGetCallBacks](cfxmlparsergetcallbacks.md): Deprecated. Returns the callbacks associated with an XML parser when it was created.
- [CFXMLParserGetContext](cfxmlparsergetcontext.md): Deprecated. Returns the context for an XML parser.
- [CFXMLParserGetDocument](cfxmlparsergetdocument.md): Deprecated. Returns the top-most object returned by the create XML structure callback.
- [CFXMLParserGetLineNumber](cfxmlparsergetlinenumber.md): Deprecated. Returns the line number of the current parse location.
- [CFXMLParserGetLocation](cfxmlparsergetlocation.md): Deprecated. Returns the character index of the current parse location.
- [CFXMLParserGetSourceURL](cfxmlparsergetsourceurl.md): Deprecated. Returns the URL for the XML data being parsed.
- [CFXMLParserGetStatusCode](cfxmlparsergetstatuscode.md): Deprecated. Returns a numeric code indicating the current status of the parser.
- [CFXMLParserGetTypeID](cfxmlparsergettypeid.md): Deprecated. Returns the type identifier for the CFXMLParser opaque type.
- [CFXMLParserParse](cfxmlparserparse.md): Deprecated. Begins a parse of the XML data that was associated with the parser when it was created.
