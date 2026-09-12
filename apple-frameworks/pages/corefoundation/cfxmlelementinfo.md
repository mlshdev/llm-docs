> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlelementinfo](https://developer.apple.com/documentation/corefoundation/cfxmlelementinfo)

# CFXMLElementInfo (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains a list of element attributes packaged as CFDictionary key/value pairs.

## Declaration

```swift
struct CFXMLElementInfo
```

<a id="overview"></a>

## Overview

A pointer to this structure is included in the CFXMLNode object passed to your application when the parser encounters an element containing attributes. Use the [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md) function to obtain the pointer.

## Topics

### Initializers

- [init()](cfxmlelementinfo/init%28%29.md)

### Instance Properties

- [attributeOrder](cfxmlelementinfo/attributeorder.md): An array specifying the order in which the attributes appeared in the XML document.
- [attributes](cfxmlelementinfo/attributes.md): The dictionary of attribute values.
- [isEmpty](cfxmlelementinfo/isempty.md): A flag indicating whether the element was expressed in closed form.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [CFXMLAttributeDeclarationInfo](cfxmlattributedeclarationinfo.md): Contains information about an element attribute definition.
- [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md): Contains a list of the attributes associated with an element.
- [CFXMLDocumentInfo](cfxmldocumentinfo.md): Contains the source URL and text encoding information for the XML document.
- [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md): Contains the external ID of the DTD.
- [CFXMLElementTypeDeclarationInfo](cfxmlelementtypedeclarationinfo.md): Contains a description of the element type.
- [CFXMLEntityInfo](cfxmlentityinfo.md): Contains information describing an XML entity.
- [CFXMLEntityReferenceInfo](cfxmlentityreferenceinfo.md): Contains information describing an XML entity reference.
- [CFXMLExternalID](cfxmlexternalid.md): Contains the system and public IDs for an external entity reference.
- [CFXMLNotationInfo](cfxmlnotationinfo.md): Contains the external ID of the notation.
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.

# CFXMLElementInfo (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains a list of element attributes packaged as CFDictionary key/value pairs.

## Declaration

```objectivec
typedef struct { ... } CFXMLElementInfo;
```

<a id="overview"></a>

## Overview

A pointer to this structure is included in the CFXMLNode object passed to your application when the parser encounters an element containing attributes. Use the [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md) function to obtain the pointer.

## Topics

### Instance Properties

- [attributeOrder](cfxmlelementinfo/attributeorder.md): An array specifying the order in which the attributes appeared in the XML document.
- [attributes](cfxmlelementinfo/attributes.md): The dictionary of attribute values.
- [isEmpty](cfxmlelementinfo/isempty.md): A flag indicating whether the element was expressed in closed form.

## See Also

### Data Types

- [CFXMLAttributeDeclarationInfo](cfxmlattributedeclarationinfo.md): Contains information about an element attribute definition.
- [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md): Contains a list of the attributes associated with an element.
- [CFXMLDocumentInfo](cfxmldocumentinfo.md): Contains the source URL and text encoding information for the XML document.
- [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md): Contains the external ID of the DTD.
- [CFXMLElementTypeDeclarationInfo](cfxmlelementtypedeclarationinfo.md): Contains a description of the element type.
- [CFXMLEntityInfo](cfxmlentityinfo.md): Contains information describing an XML entity.
- [CFXMLEntityReferenceInfo](cfxmlentityreferenceinfo.md): Contains information describing an XML entity reference.
- [CFXMLExternalID](cfxmlexternalid.md): Contains the system and public IDs for an external entity reference.
- [CFXMLNotationInfo](cfxmlnotationinfo.md): Contains the external ID of the notation.
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.
