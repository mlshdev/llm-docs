> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlnode](https://developer.apple.com/documentation/corefoundation/cfxmlnode)

# CFXMLNode (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** macOS

## Declaration

```swift
class CFXMLNode
```

<a id="Overview"></a>

## Overview

A CFXMLNode object describes an individual XML construct—like a tag, or a comment, or a string of character data. CFXMLNode is intended to be used with the CFXMLParser and CFXMLTree opaque types.

Each CFXMLNode object contains three main pieces of information—the node’s type, the data string, and a pointer to an additional information data structure. A CFXMLNode object’s type is one of the enumerations described in [CFXMLNodeTypeCode](cfxmlnodetypecode.md). The data string is always a CFString object; the meaning of the string is dependent on the node’s type. The format of the additional data is also dependent on the node’s type; in general, there is a custom structure for each type that requires additional data. See [CFXMLNodeTypeCode](cfxmlnodetypecode.md) for the mapping from a node type to meaning of the data string, and structure of the additional information. Note that these structures are versioned and may change as the parser changes. The current version can always be identified by the [kCFXMLNodeCurrentVersion](kcfxmlnodecurrentversion.md) constant; earlier versions can be identified and used by passing earlier values for the version number (although the older structures would have been removed from the header).

You create a CFXMLNode object using one of the create or copy functions. Use the [CFXMLNodeGetTypeCode](cfxmlnodegettypecode.md), [CFXMLNodeGetString](cfxmlnodegetstring.md), and [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md) functions to get the node type, data string, and additional information respectively. Use the [CFXMLNodeGetVersion](cfxmlnodegetversion.md) function to get a node’s version number.

## Topics

### Data Types

- [CFXMLAttributeDeclarationInfo](cfxmlattributedeclarationinfo.md): Contains information about an element attribute definition.
- [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md): Contains a list of the attributes associated with an element.
- [CFXMLDocumentInfo](cfxmldocumentinfo.md): Contains the source URL and text encoding information for the XML document.
- [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md): Contains the external ID of the DTD.
- [CFXMLElementInfo](cfxmlelementinfo.md): Contains a list of element attributes packaged as CFDictionary key/value pairs.
- [CFXMLElementTypeDeclarationInfo](cfxmlelementtypedeclarationinfo.md): Contains a description of the element type.
- [CFXMLEntityInfo](cfxmlentityinfo.md): Contains information describing an XML entity.
- [CFXMLEntityReferenceInfo](cfxmlentityreferenceinfo.md): Contains information describing an XML entity reference.
- [CFXMLExternalID](cfxmlexternalid.md): Contains the system and public IDs for an external entity reference.
- [CFXMLNotationInfo](cfxmlnotationinfo.md): Contains the external ID of the notation.
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.

### Constants

- [CFXMLEntityTypeCode](cfxmlentitytypecode.md): The entity type identification codes that the parser uses to describe XML entities.
- [Node Current Version](1443311-node-current-version.md): The version of a CFXMLNode object.
- [CFXMLNodeTypeCode](cfxmlnodetypecode.md): The various XML data type identification codes that the parser uses to describe XML structures.

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

# CFXMLNodeRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef const struct __CFXMLNode * CFXMLNodeRef;
```

<a id="Overview"></a>

## Overview

A CFXMLNode object describes an individual XML construct—like a tag, or a comment, or a string of character data. CFXMLNode is intended to be used with the CFXMLParser and CFXMLTree opaque types.

Each CFXMLNode object contains three main pieces of information—the node’s type, the data string, and a pointer to an additional information data structure. A CFXMLNode object’s type is one of the enumerations described in [CFXMLNodeTypeCode](cfxmlnodetypecode.md). The data string is always a CFString object; the meaning of the string is dependent on the node’s type. The format of the additional data is also dependent on the node’s type; in general, there is a custom structure for each type that requires additional data. See [CFXMLNodeTypeCode](cfxmlnodetypecode.md) for the mapping from a node type to meaning of the data string, and structure of the additional information. Note that these structures are versioned and may change as the parser changes. The current version can always be identified by the [kCFXMLNodeCurrentVersion](kcfxmlnodecurrentversion.md) constant; earlier versions can be identified and used by passing earlier values for the version number (although the older structures would have been removed from the header).

You create a CFXMLNode object using one of the create or copy functions. Use the [CFXMLNodeGetTypeCode](cfxmlnodegettypecode.md), [CFXMLNodeGetString](cfxmlnodegetstring.md), and [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md) functions to get the node type, data string, and additional information respectively. Use the [CFXMLNodeGetVersion](cfxmlnodegetversion.md) function to get a node’s version number.

## Topics

### CFXMLNode Miscellaneous Functions

- [CFXMLNodeCreate](cfxmlnodecreate.md): Deprecated. Creates a new CFXMLNode.
- [CFXMLNodeCreateCopy](cfxmlnodecreatecopy.md): Deprecated. Creates a copy of a CFXMLNode object.
- [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md): Deprecated. Returns the additional information pointer of a CFXMLNode object.
- [CFXMLNodeGetString](cfxmlnodegetstring.md): Deprecated. Returns the data string from a CFXMLNode.
- [CFXMLNodeGetTypeCode](cfxmlnodegettypecode.md): Deprecated. Returns the XML structure type code for a CFXMLNode object.
- [CFXMLNodeGetTypeID](cfxmlnodegettypeid.md): Deprecated. Returns the type identifier code for the CFXMLNode opaque type.
- [CFXMLNodeGetVersion](cfxmlnodegetversion.md): Deprecated. Returns the version number for a CFXMLNode object.

### Data Types

- [CFXMLAttributeDeclarationInfo](cfxmlattributedeclarationinfo.md): Contains information about an element attribute definition.
- [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md): Contains a list of the attributes associated with an element.
- [CFXMLDocumentInfo](cfxmldocumentinfo.md): Contains the source URL and text encoding information for the XML document.
- [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md): Contains the external ID of the DTD.
- [CFXMLElementInfo](cfxmlelementinfo.md): Contains a list of element attributes packaged as CFDictionary key/value pairs.
- [CFXMLElementTypeDeclarationInfo](cfxmlelementtypedeclarationinfo.md): Contains a description of the element type.
- [CFXMLEntityInfo](cfxmlentityinfo.md): Contains information describing an XML entity.
- [CFXMLEntityReferenceInfo](cfxmlentityreferenceinfo.md): Contains information describing an XML entity reference.
- [CFXMLExternalID](cfxmlexternalid.md): Contains the system and public IDs for an external entity reference.
- [CFXMLNotationInfo](cfxmlnotationinfo.md): Contains the external ID of the notation.
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.

### Constants

- [CFXMLEntityTypeCode](cfxmlentitytypecode.md): The entity type identification codes that the parser uses to describe XML entities.
- [Node Current Version](1443311-node-current-version.md): The version of a CFXMLNode object.
- [CFXMLNodeTypeCode](cfxmlnodetypecode.md): The various XML data type identification codes that the parser uses to describe XML structures.

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
