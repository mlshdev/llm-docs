> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlattributedeclarationinfo](https://developer.apple.com/documentation/corefoundation/cfxmlattributedeclarationinfo)

# CFXMLAttributeDeclarationInfo (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains information about an element attribute definition.

## Declaration

```swift
struct CFXMLAttributeDeclarationInfo
```

<a id="overview"></a>

## Overview

This structure is part of the definition of the [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md) structure.

## Topics

### Initializers

- [init()](cfxmlattributedeclarationinfo/init%28%29.md)
- [init(attributeName:typeString:defaultString:)](cfxmlattributedeclarationinfo/init%28attributename_typestring_defaultstring_%29.md)

### Instance Properties

- [attributeName](cfxmlattributedeclarationinfo/attributename.md): The name of the attribute.
- [defaultString](cfxmlattributedeclarationinfo/defaultstring.md): The attribute’s default value.
- [typeString](cfxmlattributedeclarationinfo/typestring.md): Describes the declaration of a single attribute.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

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

# CFXMLAttributeDeclarationInfo (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains information about an element attribute definition.

## Declaration

```objectivec
typedef struct { ... } CFXMLAttributeDeclarationInfo;
```

<a id="overview"></a>

## Overview

This structure is part of the definition of the [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md) structure.

## Topics

### Instance Properties

- [attributeName](cfxmlattributedeclarationinfo/attributename.md): The name of the attribute.
- [defaultString](cfxmlattributedeclarationinfo/defaultstring.md): The attribute’s default value.
- [typeString](cfxmlattributedeclarationinfo/typestring.md): Describes the declaration of a single attribute.

## See Also

### Data Types

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
