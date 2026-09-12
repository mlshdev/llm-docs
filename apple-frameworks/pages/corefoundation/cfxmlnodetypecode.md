> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlnodetypecode](https://developer.apple.com/documentation/corefoundation/cfxmlnodetypecode)

# CFXMLNodeTypeCode (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** macOS

The various XML data type identification codes that the parser uses to describe XML structures.

## Declaration

```swift
enum CFXMLNodeTypeCode
```

<a id="overview"></a>

## Overview

When the parser encounters a new XML structure, its data type and contents are placed in a CFXMLNode object.

## Topics

### Constants

- [CFXMLNodeTypeCode.document](cfxmlnodetypecode/document.md): Indicates a document where the data string is `NULL` and the additional information is a pointer to a [CFXMLDocumentInfo](cfxmldocumentinfo.md) structure.
- [CFXMLNodeTypeCode.element](cfxmlnodetypecode/element.md): Indicates an element where the data string is the name of the tag and the additional information is a pointer to a [CFXMLElementInfo](cfxmlelementinfo.md) structure.
- [CFXMLNodeTypeCode.attribute](cfxmlnodetypecode/attribute.md): Currently not used.
- [CFXMLNodeTypeCode.processingInstruction](cfxmlnodetypecode/processinginstruction.md): Indicates a processing instruction where the data string is the name of the target and the additional information is a pointer to a [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md) structure.
- [CFXMLNodeTypeCode.comment](cfxmlnodetypecode/comment.md): Indicates a comment section where the data string is the text of the comment and the additional information is `NULL`.
- [CFXMLNodeTypeCode.text](cfxmlnodetypecode/text.md): Indicates a text section where the data string is the text’s contents and the additional information is `NULL`.
- [CFXMLNodeTypeCode.cdataSection](cfxmlnodetypecode/cdatasection.md): Indicates a CDATA section where the data string is the text of the CDATA and the additional information is `NULL`.
- [CFXMLNodeTypeCode.documentFragment](cfxmlnodetypecode/documentfragment.md): Currently not used.
- [CFXMLNodeTypeCode.entity](cfxmlnodetypecode/entity.md): Indicates an entity where the data string is the name of the entity and the additional information is a pointer to a [CFXMLEntityInfo](cfxmlentityinfo.md) structure.
- [CFXMLNodeTypeCode.entityReference](cfxmlnodetypecode/entityreference.md): Indicates an entity reference where the data string is the name of the referenced entity and the additional information is a pointer to a [CFXMLEntityReferenceInfo](cfxmlentityreferenceinfo.md) structure.
- [CFXMLNodeTypeCode.documentType](cfxmlnodetypecode/documenttype.md): Indicates a document type where the data string is the name given to the top-level element and the additional information is a pointer to a [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md) structure.
- [CFXMLNodeTypeCode.whitespace](cfxmlnodetypecode/whitespace.md): Indicates white space where the data string is the text of the white space and the additional information is `NULL`.
- [CFXMLNodeTypeCode.notation](cfxmlnodetypecode/notation.md): Indicates a notation where the data string is the notation name and the additional information is a pointer to a [CFXMLNotationInfo](cfxmlnotationinfo.md) structure.
- [CFXMLNodeTypeCode.elementTypeDeclaration](cfxmlnodetypecode/elementtypedeclaration.md): Indicates an element type declaration where the data string is the tag name and the additional information is a pointer to a [CFXMLElementTypeDeclarationInfo](cfxmlelementtypedeclarationinfo.md) structure.
- [CFXMLNodeTypeCode.attributeListDeclaration](cfxmlnodetypecode/attributelistdeclaration.md): Indicates an attribute list declaration where the data string is the tag name and the additional information is a pointer to a [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md) structure.

### Initializers

- [init(rawValue:)](cfxmlnodetypecode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [CFXMLEntityTypeCode](cfxmlentitytypecode.md): The entity type identification codes that the parser uses to describe XML entities.
- [Node Current Version](1443311-node-current-version.md): The version of a CFXMLNode object.

# CFXMLNodeTypeCode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** macOS

The various XML data type identification codes that the parser uses to describe XML structures.

## Declaration

```objectivec
enum CFXMLNodeTypeCode : CFIndex;
```

<a id="overview"></a>

## Overview

When the parser encounters a new XML structure, its data type and contents are placed in a CFXMLNode object.

## Topics

### Constants

- [kCFXMLNodeTypeDocument](cfxmlnodetypecode/document.md): Indicates a document where the data string is `NULL` and the additional information is a pointer to a [CFXMLDocumentInfo](cfxmldocumentinfo.md) structure.
- [kCFXMLNodeTypeElement](cfxmlnodetypecode/element.md): Indicates an element where the data string is the name of the tag and the additional information is a pointer to a [CFXMLElementInfo](cfxmlelementinfo.md) structure.
- [kCFXMLNodeTypeAttribute](cfxmlnodetypecode/attribute.md): Currently not used.
- [kCFXMLNodeTypeProcessingInstruction](cfxmlnodetypecode/processinginstruction.md): Indicates a processing instruction where the data string is the name of the target and the additional information is a pointer to a [CFXMLProcessingInstructionInfo](cfxmlprocessinginstructioninfo.md) structure.
- [kCFXMLNodeTypeComment](cfxmlnodetypecode/comment.md): Indicates a comment section where the data string is the text of the comment and the additional information is `NULL`.
- [kCFXMLNodeTypeText](cfxmlnodetypecode/text.md): Indicates a text section where the data string is the text’s contents and the additional information is `NULL`.
- [kCFXMLNodeTypeCDATASection](cfxmlnodetypecode/cdatasection.md): Indicates a CDATA section where the data string is the text of the CDATA and the additional information is `NULL`.
- [kCFXMLNodeTypeDocumentFragment](cfxmlnodetypecode/documentfragment.md): Currently not used.
- [kCFXMLNodeTypeEntity](cfxmlnodetypecode/entity.md): Indicates an entity where the data string is the name of the entity and the additional information is a pointer to a [CFXMLEntityInfo](cfxmlentityinfo.md) structure.
- [kCFXMLNodeTypeEntityReference](cfxmlnodetypecode/entityreference.md): Indicates an entity reference where the data string is the name of the referenced entity and the additional information is a pointer to a [CFXMLEntityReferenceInfo](cfxmlentityreferenceinfo.md) structure.
- [kCFXMLNodeTypeDocumentType](cfxmlnodetypecode/documenttype.md): Indicates a document type where the data string is the name given to the top-level element and the additional information is a pointer to a [CFXMLDocumentTypeInfo](cfxmldocumenttypeinfo.md) structure.
- [kCFXMLNodeTypeWhitespace](cfxmlnodetypecode/whitespace.md): Indicates white space where the data string is the text of the white space and the additional information is `NULL`.
- [kCFXMLNodeTypeNotation](cfxmlnodetypecode/notation.md): Indicates a notation where the data string is the notation name and the additional information is a pointer to a [CFXMLNotationInfo](cfxmlnotationinfo.md) structure.
- [kCFXMLNodeTypeElementTypeDeclaration](cfxmlnodetypecode/elementtypedeclaration.md): Indicates an element type declaration where the data string is the tag name and the additional information is a pointer to a [CFXMLElementTypeDeclarationInfo](cfxmlelementtypedeclarationinfo.md) structure.
- [kCFXMLNodeTypeAttributeListDeclaration](cfxmlnodetypecode/attributelistdeclaration.md): Indicates an attribute list declaration where the data string is the tag name and the additional information is a pointer to a [CFXMLAttributeListDeclarationInfo](cfxmlattributelistdeclarationinfo.md) structure.

## See Also

### Constants

- [CFXMLEntityTypeCode](cfxmlentitytypecode.md): The entity type identification codes that the parser uses to describe XML entities.
- [Node Current Version](1443311-node-current-version.md): The version of a CFXMLNode object.
