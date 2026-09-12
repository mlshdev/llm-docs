> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmltreecreatexmldata](https://developer.apple.com/documentation/corefoundation/cfxmltreecreatexmldata)

# CFXMLTreeCreateXMLData

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Generates an XML document from a CFXMLTree object which is ready to be written to permanent storage.

## Declaration

```objectivec
extern CFDataRefCFXMLTreeCreateXMLData(CFAllocatorRef allocator, CFXMLTreeRef xmlTree);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `xmlTree`: The CFXMLTree object you wish to convert to an XML document.

<a id="return-value"></a>

## Return Value

The XML data. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function will *not* regenerate entity references replaced at the parse time (except those required for syntactic correctness). If you need this you must manually walk the tree and re-insert any entity references that should appear in the final output file.

## See Also

### CFXMLTree Miscellaneous Functions

- [CFXMLCreateStringByEscapingEntities](cfxmlcreatestringbyescapingentities%28______%29.md): Given a CFString object containing XML source with unescaped entities, returns a string with specified XML entities escaped.
- [CFXMLCreateStringByUnescapingEntities](cfxmlcreatestringbyunescapingentities%28______%29.md): Given a CFString object containing XML source with escaped entities, returns a string with specified XML entities unescaped.
- [CFXMLTreeCreateFromData](cfxmltreecreatefromdata.md): Deprecated. Parses the given XML data and returns the resulting CFXMLTree object.
- [CFXMLTreeCreateFromDataWithError](cfxmltreecreatefromdatawitherror.md): Deprecated. Parses the given XML data and returns the resulting CFXMLTree object and any error information.
- [CFXMLTreeCreateWithDataFromURL](cfxmltreecreatewithdatafromurl.md): Deprecated. Creates a new CFXMLTree object by loading the data to be parsed directly from a data source.
- [CFXMLTreeCreateWithNode](cfxmltreecreatewithnode.md): Deprecated. Creates a childless, parentless CFXMLTree object node for a CFXMLNode object.
- [CFXMLTreeGetNode](cfxmltreegetnode.md): Deprecated. Returns the node of a CFXMLTree object.
