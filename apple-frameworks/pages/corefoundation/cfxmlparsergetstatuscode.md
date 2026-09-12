> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparsergetstatuscode](https://developer.apple.com/documentation/corefoundation/cfxmlparsergetstatuscode)

# CFXMLParserGetStatusCode

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns a numeric code indicating the current status of the parser.

## Declaration

```objectivec
extern CFXMLParserStatusCode CFXMLParserGetStatusCode(CFXMLParserRef parser);
```

## Parameters

- `parser`: The XML parser to examine.

<a id="return-value"></a>

## Return Value

A status code indicating the current parser. See [CFXMLParserStatusCode](cfxmlparserstatuscode.md) for a list of possible status codes.

<a id="Discussion"></a>

## Discussion

If an error has occurred, the code for the last error is returned. If no error has occurred, a status code is returned.

## See Also

### CFXMLParser Miscellaneous Functions

- [CFXMLParserAbort](cfxmlparserabort.md): Deprecated. Causes a parser to abort with the given error code and description.
- [CFXMLParserCopyErrorDescription](cfxmlparsercopyerrordescription.md): Deprecated. Returns the user-readable description of the current error condition.
- [CFXMLParserCreate](cfxmlparsercreate.md): Deprecated. Creates a new XML parser for the specified XML data.
- [CFXMLParserCreateWithDataFromURL](cfxmlparsercreatewithdatafromurl.md): Deprecated. Creates a new XML parser for the specified XML data at the specified URL.
- [CFXMLParserGetCallBacks](cfxmlparsergetcallbacks.md): Deprecated. Returns the callbacks associated with an XML parser when it was created.
- [CFXMLParserGetContext](cfxmlparsergetcontext.md): Deprecated. Returns the context for an XML parser.
- [CFXMLParserGetDocument](cfxmlparsergetdocument.md): Deprecated. Returns the top-most object returned by the create XML structure callback.
- [CFXMLParserGetLineNumber](cfxmlparsergetlinenumber.md): Deprecated. Returns the line number of the current parse location.
- [CFXMLParserGetLocation](cfxmlparsergetlocation.md): Deprecated. Returns the character index of the current parse location.
- [CFXMLParserGetSourceURL](cfxmlparsergetsourceurl.md): Deprecated. Returns the URL for the XML data being parsed.
- [CFXMLParserGetTypeID](cfxmlparsergettypeid.md): Deprecated. Returns the type identifier for the CFXMLParser opaque type.
- [CFXMLParserParse](cfxmlparserparse.md): Deprecated. Begins a parse of the XML data that was associated with the parser when it was created.
