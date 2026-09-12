> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlnodecreate](https://developer.apple.com/documentation/corefoundation/cfxmlnodecreate)

# CFXMLNodeCreate

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Creates a new CFXMLNode.

## Declaration

```objectivec
extern CFXMLNodeRefCFXMLNodeCreate(CFAllocatorRef alloc, CFXMLNodeTypeCode xmlType, CFStringRef dataString, const void *additionalInfoPtr, CFIndex version);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `xmlType`: Type identifier code for the XML structure you want this node to describe.
- `dataString`: The XML data.
- `additionalInfoPtr`: A pointer to a structure containing additional information about the XML data.
- `version`: The version number of the CFXMLNode object you want to create. Pass one of the pre-defined constants, typically [kCFXMLNodeCurrentVersion](kcfxmlnodecurrentversion.md).

<a id="return-value"></a>

## Return Value

A new CFXMLNode object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFXMLNode Miscellaneous Functions

- [CFXMLNodeCreateCopy](cfxmlnodecreatecopy.md): Deprecated. Creates a copy of a CFXMLNode object.
- [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md): Deprecated. Returns the additional information pointer of a CFXMLNode object.
- [CFXMLNodeGetString](cfxmlnodegetstring.md): Deprecated. Returns the data string from a CFXMLNode.
- [CFXMLNodeGetTypeCode](cfxmlnodegettypecode.md): Deprecated. Returns the XML structure type code for a CFXMLNode object.
- [CFXMLNodeGetTypeID](cfxmlnodegettypeid.md): Deprecated. Returns the type identifier code for the CFXMLNode opaque type.
- [CFXMLNodeGetVersion](cfxmlnodegetversion.md): Deprecated. Returns the version number for a CFXMLNode object.
