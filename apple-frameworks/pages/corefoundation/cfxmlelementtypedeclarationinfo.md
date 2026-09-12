> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlelementtypedeclarationinfo](https://developer.apple.com/documentation/corefoundation/cfxmlelementtypedeclarationinfo)

# CFXMLElementTypeDeclarationInfo (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains a description of the element type.

## Declaration

```swift
struct CFXMLElementTypeDeclarationInfo
```

<a id="overview"></a>

## Overview

A pointer to this structure is included in the CFXMLNode passed to your application when the parser encounters and element type declaration. Use the [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md) function to obtain a pointer to this structure.

## Topics

### Initializers

- [init()](cfxmlelementtypedeclarationinfo/init%28%29.md)
- [init(contentDescription:)](cfxmlelementtypedeclarationinfo/init%28contentdescription_%29.md)

### Instance Properties

- [contentDescription](cfxmlelementtypedeclarationinfo/contentdescription.md): A textual description of the element type.

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
- [CFXMLEntityInfo](cfxmlentityinfo.md): Contains information describing an XML entity.
- [CFXMLEntityReferenceInfo](cfxmlentityreferenceinfo.md): Contains information describing an XML entity reference.
- [CFXMLExternalID](cfxmlexternalid.md): Contains the system and public IDs for an external entity reference.
- [CFXMLNotationInfo](cfxmlnotationinfo.md): Contains the external ID of the notation.
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.

# CFXMLElementTypeDeclarationInfo (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains a description of the element type.

## Declaration

```objectivec
typedef struct { ... } CFXMLElementTypeDeclarationInfo;
```

<a id="overview"></a>

## Overview

A pointer to this structure is included in the CFXMLNode passed to your application when the parser encounters and element type declaration. Use the [CFXMLNodeGetInfoPtr](cfxmlnodegetinfoptr.md) function to obtain a pointer to this structure.

## Topics

### Instance Properties

- [contentDescription](cfxmlelementtypedeclarationinfo/contentdescription.md): A textual description of the element type.

## See Also

### Data Types

- [CFXMLAttributeDeclarationInfo](cfxmlattributedeclarationinfo.md): Contains information about an element attribute definition.
- [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md): Contains a list of the attributes associated with an element.
- [CFXMLDocumentInfo](cfxmldocumentinfo.md): Contains the source URL and text encoding information for the XML document.
- [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md): Contains the external ID of the DTD.
- [CFXMLElementInfo](cfxmlelementinfo.md): Contains a list of element attributes packaged as CFDictionary key/value pairs.
- [CFXMLEntityInfo](cfxmlentityinfo.md): Contains information describing an XML entity.
- [CFXMLEntityReferenceInfo](cfxmlentityreferenceinfo.md): Contains information describing an XML entity reference.
- [CFXMLExternalID](cfxmlexternalid.md): Contains the system and public IDs for an external entity reference.
- [CFXMLNotationInfo](cfxmlnotationinfo.md): Contains the external ID of the notation.
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.
