> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlexternalid](https://developer.apple.com/documentation/corefoundation/cfxmlexternalid)

# CFXMLExternalID (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains the system and public IDs for an external entity reference.

## Declaration

```swift
struct CFXMLExternalID
```

<a id="overview"></a>

## Overview

This structure is part of the definition of the [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md), [CFXMLNotationInfo](cfxmlnotationinfo.md), and [CFXMLEntityInfo](cfxmlentityinfo.md) structures.

## Topics

### Initializers

- [init()](cfxmlexternalid/init%28%29.md)
- [init(systemID:publicID:)](cfxmlexternalid/init%28systemid_publicid_%29.md)

### Instance Properties

- [publicID](cfxmlexternalid/publicid.md): The publicID string.
- [systemID](cfxmlexternalid/systemid.md): The systemID URL.

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
- [CFXMLNotationInfo](cfxmlnotationinfo.md): Contains the external ID of the notation.
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.

# CFXMLExternalID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains the system and public IDs for an external entity reference.

## Declaration

```objectivec
typedef struct { ... } CFXMLExternalID;
```

<a id="overview"></a>

## Overview

This structure is part of the definition of the [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md), [CFXMLNotationInfo](cfxmlnotationinfo.md), and [CFXMLEntityInfo](cfxmlentityinfo.md) structures.

## Topics

### Instance Properties

- [publicID](cfxmlexternalid/publicid.md): The publicID string.
- [systemID](cfxmlexternalid/systemid.md): The systemID URL.

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
- [CFXMLNotationInfo](cfxmlnotationinfo.md): Contains the external ID of the notation.
- [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md): Contains the text of the processing instruction.
