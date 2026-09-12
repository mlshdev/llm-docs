> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlnotationinfo](https://developer.apple.com/documentation/corefoundation/cfxmlnotationinfo)

# CFXMLNotationInfo (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains the external ID of the notation.

## Declaration

```swift
struct CFXMLNotationInfo
```

<a id="overview"></a>

## Overview

A pointer to this structure is included in the CFXMLNode object passed to your application when the parser encounters a notation element. Use the [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md) function to obtain a pointer to this structure.

## Topics

### Initializers

- [init()](cfxmlnotationinfo/init%28%29.md)
- [init(externalID:)](cfxmlnotationinfo/init%28externalid_%29.md)

### Instance Properties

- [externalID](cfxmlnotationinfo/externalid.md): The external ID of the notation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

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
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.

# CFXMLNotationInfo (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains the external ID of the notation.

## Declaration

```objectivec
typedef struct { ... } CFXMLNotationInfo;
```

<a id="overview"></a>

## Overview

A pointer to this structure is included in the CFXMLNode object passed to your application when the parser encounters a notation element. Use the [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md) function to obtain a pointer to this structure.

## Topics

### Instance Properties

- [externalID](cfxmlnotationinfo/externalid.md): The external ID of the notation.

## See Also

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
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.
