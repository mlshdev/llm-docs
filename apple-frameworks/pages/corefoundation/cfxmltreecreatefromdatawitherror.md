> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmltreecreatefromdatawitherror](https://developer.apple.com/documentation/corefoundation/cfxmltreecreatefromdatawitherror)

# CFXMLTreeCreateFromDataWithError

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Parses the given XML data and returns the resulting CFXMLTree object and any error information.

## Declaration

```objectivec
extern CFXMLTreeRefCFXMLTreeCreateFromDataWithError(CFAllocatorRef allocator, CFDataRef xmlData, CFURLRef dataSource, CFOptionFlags parseOptions, CFIndex versionOfNodes, CFDictionaryRef*errorDict);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `xmlData`: The XML data you wish to parse.
- `dataSource`: The URL from which the XML data was obtained. The URL is used to resolve any relative references found in `xmlData`. Pass `NULL` if a valid URL is unavailable.
- `parseOptions`: Flags which control how the XML data will be parsed. See [CFXMLParserOptions](cfxmlparseroptions.md) for the list of available options.
- `versionOfNodes`: Determines which version of CFXMLNode objects are produced by the parser. The current version is 1.
- `errorDict`: Upon return, if an error occurs contains a CFDictionary object that describes the error. If no errors occur, this parameter is not changed. Pass `NULL` if you don’t want error information. See [Error Dictionary Keys](error-dictionary-keys.md) for a description of the key-value pairs in this dictionary. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A new CFXMLTree object containing the data from the specified XML document. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Use this function instead of [CFXMLTreeCreateFromData](cfxmltreecreatefromdata.md) if you need access to XML parsing errors.

## See Also

### CFXMLTree Miscellaneous Functions

- [CFXMLCreateStringByEscapingEntities](cfxmlcreatestringbyescapingentities%28______%29.md): Given a CFString object containing XML source with unescaped entities, returns a string with specified XML entities escaped.
- [CFXMLCreateStringByUnescapingEntities](cfxmlcreatestringbyunescapingentities%28______%29.md): Given a CFString object containing XML source with escaped entities, returns a string with specified XML entities unescaped.
- [CFXMLTreeCreateFromData](cfxmltreecreatefromdata.md): Deprecated. Parses the given XML data and returns the resulting CFXMLTree object.
- [CFXMLTreeCreateWithDataFromURL](cfxmltreecreatewithdatafromurl.md): Deprecated. Creates a new CFXMLTree object by loading the data to be parsed directly from a data source.
- [CFXMLTreeCreateWithNode](cfxmltreecreatewithnode.md): Deprecated. Creates a childless, parentless CFXMLTree object node for a CFXMLNode object.
- [CFXMLTreeCreateXMLData](cfxmltreecreatexmldata.md): Deprecated. Generates an XML document from a CFXMLTree object which is ready to be written to permanent storage.
- [CFXMLTreeGetNode](cfxmltreegetnode.md): Deprecated. Returns the node of a CFXMLTree object.
