> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlentityreferenceinfo](https://developer.apple.com/documentation/corefoundation/cfxmlentityreferenceinfo)

# CFXMLEntityReferenceInfo (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains information describing an XML entity reference.

## Declaration

```swift
struct CFXMLEntityReferenceInfo
```

<a id="overview"></a>

## Overview

A pointer to this structure is included in the CFXMLNode object passed to your application when the parser encounters an entity reference. Use the [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md) function to obtain the pointer.

## Topics

### Initializers

- [init()](cfxmlentityreferenceinfo/init%28%29.md)
- [init(entityType:)](cfxmlentityreferenceinfo/init%28entitytype_%29.md)

### Instance Properties

- [entityType](cfxmlentityreferenceinfo/entitytype.md): The entity type code.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CFXMLAttributeDeclarationInfo](cfxmlattributedeclarationinfo.md): Contains information about an element attribute definition.
- [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md): Contains a list of the attributes associated with an element.
- [CFXMLDocumentInfo](cfxmldocumentinfo.md): Contains the source URL and text encoding information for the XML document.
- [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md): Contains the external ID of the DTD.
- [CFXMLElementInfo](cfxmlelementinfo.md): Contains a list of element attributes packaged as CFDictionary key/value pairs.
- [CFXMLElementTypeDeclarationInfo](cfxmlelementtypedeclarationinfo.md): Contains a description of the element type.
- [CFXMLEntityInfo](cfxmlentityinfo.md): Contains information describing an XML entity.
- [CFXMLExternalID](cfxmlexternalid.md): Contains the system and public IDs for an external entity reference.
- [CFXMLNotationInfo](cfxmlnotationinfo.md): Contains the external ID of the notation.
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.

# CFXMLEntityReferenceInfo (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains information describing an XML entity reference.

## Declaration

```objectivec
typedef struct { ... } CFXMLEntityReferenceInfo;
```

<a id="overview"></a>

## Overview

A pointer to this structure is included in the CFXMLNode object passed to your application when the parser encounters an entity reference. Use the [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md) function to obtain the pointer.

## Topics

### Instance Properties

- [entityType](cfxmlentityreferenceinfo/entitytype.md): The entity type code.

## See Also

### Data Types

- [CFXMLAttributeDeclarationInfo](cfxmlattributedeclarationinfo.md): Contains information about an element attribute definition.
- [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md): Contains a list of the attributes associated with an element.
- [CFXMLDocumentInfo](cfxmldocumentinfo.md): Contains the source URL and text encoding information for the XML document.
- [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md): Contains the external ID of the DTD.
- [CFXMLElementInfo](cfxmlelementinfo.md): Contains a list of element attributes packaged as CFDictionary key/value pairs.
- [CFXMLElementTypeDeclarationInfo](cfxmlelementtypedeclarationinfo.md): Contains a description of the element type.
- [CFXMLEntityInfo](cfxmlentityinfo.md): Contains information describing an XML entity.
- [CFXMLExternalID](cfxmlexternalid.md): Contains the system and public IDs for an external entity reference.
- [CFXMLNotationInfo](cfxmlnotationinfo.md): Contains the external ID of the notation.
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.
