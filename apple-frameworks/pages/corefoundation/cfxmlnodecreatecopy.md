> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlnodecreatecopy](https://developer.apple.com/documentation/corefoundation/cfxmlnodecreatecopy)

# CFXMLNodeCreateCopy

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Creates a copy of a CFXMLNode object.

## Declaration

```objectivec
extern CFXMLNodeRefCFXMLNodeCreateCopy(CFAllocatorRef alloc, CFXMLNodeRef origNode);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `origNode`: The node to copy. Do not pass `NULL`.

<a id="return-value"></a>

## Return Value

A new CFXMLNode object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFXMLNode Miscellaneous Functions

- [CFXMLNodeCreate](cfxmlnodecreate.md): Deprecated. Creates a new CFXMLNode.
- [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md): Deprecated. Returns the additional information pointer of a CFXMLNode object.
- [CFXMLNodeGetString](cfxmlnodegetstring.md): Deprecated. Returns the data string from a CFXMLNode.
- [CFXMLNodeGetTypeCode](cfxmlnodegettypecode.md): Deprecated. Returns the XML structure type code for a CFXMLNode object.
- [CFXMLNodeGetTypeID](cfxmlnodegettypeid.md): Deprecated. Returns the type identifier code for the CFXMLNode opaque type.
- [CFXMLNodeGetVersion](cfxmlnodegetversion.md): Deprecated. Returns the version number for a CFXMLNode object.
