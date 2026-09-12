> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlnodegetversion](https://developer.apple.com/documentation/corefoundation/cfxmlnodegetversion)

# CFXMLNodeGetVersion

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns the version number for a CFXMLNode object.

## Declaration

```objectivec
extern CFIndex CFXMLNodeGetVersion(CFXMLNodeRef node);
```

## Parameters

- `node`: The CFXMLNode object to examine.

<a id="return-value"></a>

## Return Value

The version number of `node`.

## See Also

### CFXMLNode Miscellaneous Functions

- [CFXMLNodeCreate](cfxmlnodecreate.md): Deprecated. Creates a new CFXMLNode.
- [CFXMLNodeCreateCopy](cfxmlnodecreatecopy.md): Deprecated. Creates a copy of a CFXMLNode object.
- [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md): Deprecated. Returns the additional information pointer of a CFXMLNode object.
- [CFXMLNodeGetString](cfxmlnodegetstring.md): Deprecated. Returns the data string from a CFXMLNode.
- [CFXMLNodeGetTypeCode](cfxmlnodegettypecode.md): Deprecated. Returns the XML structure type code for a CFXMLNode object.
- [CFXMLNodeGetTypeID](cfxmlnodegettypeid.md): Deprecated. Returns the type identifier code for the CFXMLNode opaque type.
