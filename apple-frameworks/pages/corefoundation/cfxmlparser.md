> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparser](https://developer.apple.com/documentation/corefoundation/cfxmlparser)

# CFXMLParser (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** macOS

## Declaration

```swift
class CFXMLParser
```

<a id="Overview"></a>

## Overview

CFXMLParser provides an XML parser you can use to find and extract data in XML documents. You can use a high-level interface to load an XML document into a Core Foundation collection object. A low-level callback-based interface allows you to perform any action you wish on an XML structured type when it is detected by the parser. This opaque type is relevant for applications that need information about an XML document’s structure or content.

## Topics

### Callbacks

- [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md): Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.
- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md): Callback function invoked when the parser encounters an XML open tag.
- [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md): Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.
- [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md): Callback function invoked by the parser to notify your application that an error has occurred.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserResolveExternalEntityCallBack](cfxmlparserresolveexternalentitycallback.md): Callback function invoked by the parser to notify your application that an external entity has been referenced.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.

### Data Types

- [CFXMLParserCallBacks](cfxmlparsercallbacks.md): Contains version information and function pointers to callbacks needed when parsing XML.
- [CFXMLParserContext](cfxmlparsercontext.md): Contains version information and function pointers to callbacks used when handling a program-defined context.

### Constants

- [CFXMLParserStatusCode](cfxmlparserstatuscode.md): The various status and error flags that can be returned by the parser.
- [CFXMLParserOptions](cfxmlparseroptions.md): Options you can use to control the parser’s treatment of an XML document.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [XML Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFXML/CFXML.html#//apple_ref/doc/uid/10000138i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFXMLParserRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef struct __CFXMLParser * CFXMLParserRef;
```

<a id="Overview"></a>

## Overview

CFXMLParser provides an XML parser you can use to find and extract data in XML documents. You can use a high-level interface to load an XML document into a Core Foundation collection object. A low-level callback-based interface allows you to perform any action you wish on an XML structured type when it is detected by the parser. This opaque type is relevant for applications that need information about an XML document’s structure or content.

## Topics

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
- [CFXMLParserGetStatusCode](cfxmlparsergetstatuscode.md): Deprecated. Returns a numeric code indicating the current status of the parser.
- [CFXMLParserGetTypeID](cfxmlparsergettypeid.md): Deprecated. Returns the type identifier for the CFXMLParser opaque type.
- [CFXMLParserParse](cfxmlparserparse.md): Deprecated. Begins a parse of the XML data that was associated with the parser when it was created.

### Callbacks

- [CFXMLParserAddChildCallBack](cfxmlparseraddchildcallback.md): Callback function invoked by the parser to notify your application of parent/child relationships between XML structures.
- [CFXMLParserCopyDescriptionCallBack](cfxmlparsercopydescriptioncallback.md): Callback function invoked by the parser when handling the information pointer.
- [CFXMLParserCreateXMLStructureCallBack](cfxmlparsercreatexmlstructurecallback.md): Callback function invoked when the parser encounters an XML open tag.
- [CFXMLParserEndXMLStructureCallBack](cfxmlparserendxmlstructurecallback.md): Callback function invoked by the parser to notify your application that an XML structure (and all its children) have been completely parsed.
- [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md): Callback function invoked by the parser to notify your application that an error has occurred.
- [CFXMLParserReleaseCallBack](cfxmlparserreleasecallback.md): Callback function invoked by the parser when it wants to release a reference to the information pointer.
- [CFXMLParserResolveExternalEntityCallBack](cfxmlparserresolveexternalentitycallback.md): Callback function invoked by the parser to notify your application that an external entity has been referenced.
- [CFXMLParserRetainCallBack](cfxmlparserretaincallback.md): Callback function invoked by the parser when it needs another reference to the information pointer.

### Data Types

- [CFXMLParserCallBacks](cfxmlparsercallbacks.md): Contains version information and function pointers to callbacks needed when parsing XML.
- [CFXMLParserContext](cfxmlparsercontext.md): Contains version information and function pointers to callbacks used when handling a program-defined context.

### Constants

- [CFXMLParserStatusCode](cfxmlparserstatuscode.md): The various status and error flags that can be returned by the parser.
- [CFXMLParserOptions](cfxmlparseroptions.md): Options you can use to control the parser’s treatment of an XML document.

## See Also

### Related Documentation

- [XML Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFXML/CFXML.html#//apple_ref/doc/uid/10000138i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
