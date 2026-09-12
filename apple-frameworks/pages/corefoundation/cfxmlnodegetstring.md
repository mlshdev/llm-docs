> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlnodegetstring](https://developer.apple.com/documentation/corefoundation/cfxmlnodegetstring)

# CFXMLNodeGetString

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns the data string from a CFXMLNode.

## Declaration

```objectivec
extern CFStringRefCFXMLNodeGetString(CFXMLNodeRef node);
```

## Parameters

- `node`: The CFXMLNode object to examine.

<a id="return-value"></a>

## Return Value

The data string from `node`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### CFXMLNode Miscellaneous Functions

- [CFXMLNodeCreate](cfxmlnodecreate.md): Deprecated. Creates a new CFXMLNode.
- [CFXMLNodeCreateCopy](cfxmlnodecreatecopy.md): Deprecated. Creates a copy of a CFXMLNode object.
- [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md): Deprecated. Returns the additional information pointer of a CFXMLNode object.
- [CFXMLNodeGetTypeCode](cfxmlnodegettypecode.md): Deprecated. Returns the XML structure type code for a CFXMLNode object.
- [CFXMLNodeGetTypeID](cfxmlnodegettypeid.md): Deprecated. Returns the type identifier code for the CFXMLNode opaque type.
- [CFXMLNodeGetVersion](cfxmlnodegetversion.md): Deprecated. Returns the version number for a CFXMLNode object.
