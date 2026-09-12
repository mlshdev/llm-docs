> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlnodegetinfoptr](https://developer.apple.com/documentation/corefoundation/cfxmlnodegetinfoptr)

# CFXMLNodeGetInfoPtr

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns the additional information pointer of a CFXMLNode object.

## Declaration

```objectivec
extern const void *CFXMLNodeGetInfoPtr(CFXMLNodeRef node);
```

## Parameters

- `node`: The CFXMLNode object to examine.

<a id="return-value"></a>

## Return Value

A pointer to a structure containing additional information. The CFXMLNode version together with the node’s type determines the expected structure. See [CFXMLNodeTypeCode](cfxmlnodetypecode.md) for information about the possible structures returned. If the returned value is a Core Foundation object, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### CFXMLNode Miscellaneous Functions

- [CFXMLNodeCreate](cfxmlnodecreate.md): Deprecated. Creates a new CFXMLNode.
- [CFXMLNodeCreateCopy](cfxmlnodecreatecopy.md): Deprecated. Creates a copy of a CFXMLNode object.
- [CFXMLNodeGetString](cfxmlnodegetstring.md): Deprecated. Returns the data string from a CFXMLNode.
- [CFXMLNodeGetTypeCode](cfxmlnodegettypecode.md): Deprecated. Returns the XML structure type code for a CFXMLNode object.
- [CFXMLNodeGetTypeID](cfxmlnodegettypeid.md): Deprecated. Returns the type identifier code for the CFXMLNode opaque type.
- [CFXMLNodeGetVersion](cfxmlnodegetversion.md): Deprecated. Returns the version number for a CFXMLNode object.
