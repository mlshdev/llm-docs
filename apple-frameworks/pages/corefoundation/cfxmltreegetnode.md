> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmltreegetnode](https://developer.apple.com/documentation/corefoundation/cfxmltreegetnode)

# CFXMLTreeGetNode

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns the node of a CFXMLTree object.

## Declaration

```objectivec
extern CFXMLNodeRefCFXMLTreeGetNode(CFXMLTreeRef xmlTree);
```

## Parameters

- `xmlTree`: The CFXMLTree object whose node you wish to obtain.

<a id="return-value"></a>

## Return Value

The node of `xmlTree`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### CFXMLTree Miscellaneous Functions

- [CFXMLCreateStringByEscapingEntities](cfxmlcreatestringbyescapingentities%28______%29.md): Given a CFString object containing XML source with unescaped entities, returns a string with specified XML entities escaped.
- [CFXMLCreateStringByUnescapingEntities](cfxmlcreatestringbyunescapingentities%28______%29.md): Given a CFString object containing XML source with escaped entities, returns a string with specified XML entities unescaped.
- [CFXMLTreeCreateFromData](cfxmltreecreatefromdata.md): Deprecated. Parses the given XML data and returns the resulting CFXMLTree object.
- [CFXMLTreeCreateFromDataWithError](cfxmltreecreatefromdatawitherror.md): Deprecated. Parses the given XML data and returns the resulting CFXMLTree object and any error information.
- [CFXMLTreeCreateWithDataFromURL](cfxmltreecreatewithdatafromurl.md): Deprecated. Creates a new CFXMLTree object by loading the data to be parsed directly from a data source.
- [CFXMLTreeCreateWithNode](cfxmltreecreatewithnode.md): Deprecated. Creates a childless, parentless CFXMLTree object node for a CFXMLNode object.
- [CFXMLTreeCreateXMLData](cfxmltreecreatexmldata.md): Deprecated. Generates an XML document from a CFXMLTree object which is ready to be written to permanent storage.
