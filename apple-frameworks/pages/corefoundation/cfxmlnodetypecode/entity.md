> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlnodetypecode/entity](https://developer.apple.com/documentation/corefoundation/cfxmlnodetypecode/entity)

# CFXMLNodeTypeCode.entity (Swift)

**Framework:** Core Foundation  
**Kind:** Case  
**Availability:** macOS

Indicates an entity where the data string is the name of the entity and the additional information is a pointer to a [CFXMLEntityInfo](../cfxmlentityinfo.md) structure.

## Declaration

```swift
case entity
```

## See Also

### Constants

- [CFXMLNodeTypeCode.document](document.md): Indicates a document where the data string is `NULL` and the additional information is a pointer to a [CFXMLDocumentInfo](../cfxmldocumentinfo.md) structure.
- [CFXMLNodeTypeCode.element](element.md): Indicates an element where the data string is the name of the tag and the additional information is a pointer to a [CFXMLElementInfo](../cfxmlelementinfo.md) structure.
- [CFXMLNodeTypeCode.attribute](attribute.md): Currently not used.
- [CFXMLNodeTypeCode.processingInstruction](processinginstruction.md): Indicates a processing instruction where the data string is the name of the target and the additional information is a pointer to a [CFXMLProcessingInstructionInfo](../cfxmlprocessinginstructioninfo.md) structure.
- [CFXMLNodeTypeCode.comment](comment.md): Indicates a comment section where the data string is the text of the comment and the additional information is `NULL`.
- [CFXMLNodeTypeCode.text](text.md): Indicates a text section where the data string is the text’s contents and the additional information is `NULL`.
- [CFXMLNodeTypeCode.cdataSection](cdatasection.md): Indicates a CDATA section where the data string is the text of the CDATA and the additional information is `NULL`.
- [CFXMLNodeTypeCode.documentFragment](documentfragment.md): Currently not used.
- [CFXMLNodeTypeCode.entityReference](entityreference.md): Indicates an entity reference where the data string is the name of the referenced entity and the additional information is a pointer to a [CFXMLEntityReferenceInfo](../cfxmlentityreferenceinfo.md) structure.
- [CFXMLNodeTypeCode.documentType](documenttype.md): Indicates a document type where the data string is the name given to the top-level element and the additional information is a pointer to a [CFXMLDocumentTypeInfo](../cfxmldocumenttypeinfo.md) structure.
- [CFXMLNodeTypeCode.whitespace](whitespace.md): Indicates white space where the data string is the text of the white space and the additional information is `NULL`.
- [CFXMLNodeTypeCode.notation](notation.md): Indicates a notation where the data string is the notation name and the additional information is a pointer to a [CFXMLNotationInfo](../cfxmlnotationinfo.md) structure.
- [CFXMLNodeTypeCode.elementTypeDeclaration](elementtypedeclaration.md): Indicates an element type declaration where the data string is the tag name and the additional information is a pointer to a [CFXMLElementTypeDeclarationInfo](../cfxmlelementtypedeclarationinfo.md) structure.
- [CFXMLNodeTypeCode.attributeListDeclaration](attributelistdeclaration.md): Indicates an attribute list declaration where the data string is the tag name and the additional information is a pointer to a [CFXMLAttributeListDeclarationInfo](../cfxmlattributelistdeclarationinfo.md) structure.

# kCFXMLNodeTypeEntity (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS

Indicates an entity where the data string is the name of the entity and the additional information is a pointer to a [CFXMLEntityInfo](../cfxmlentityinfo.md) structure.

## Declaration

```objectivec
kCFXMLNodeTypeEntity
```

## See Also

### Constants

- [kCFXMLNodeTypeDocument](document.md): Indicates a document where the data string is `NULL` and the additional information is a pointer to a [CFXMLDocumentInfo](../cfxmldocumentinfo.md) structure.
- [kCFXMLNodeTypeElement](element.md): Indicates an element where the data string is the name of the tag and the additional information is a pointer to a [CFXMLElementInfo](../cfxmlelementinfo.md) structure.
- [kCFXMLNodeTypeAttribute](attribute.md): Currently not used.
- [kCFXMLNodeTypeProcessingInstruction](processinginstruction.md): Indicates a processing instruction where the data string is the name of the target and the additional information is a pointer to a [CFXMLProcessingInstructionInfo](../cfxmlprocessinginstructioninfo.md) structure.
- [kCFXMLNodeTypeComment](comment.md): Indicates a comment section where the data string is the text of the comment and the additional information is `NULL`.
- [kCFXMLNodeTypeText](text.md): Indicates a text section where the data string is the text’s contents and the additional information is `NULL`.
- [kCFXMLNodeTypeCDATASection](cdatasection.md): Indicates a CDATA section where the data string is the text of the CDATA and the additional information is `NULL`.
- [kCFXMLNodeTypeDocumentFragment](documentfragment.md): Currently not used.
- [kCFXMLNodeTypeEntityReference](entityreference.md): Indicates an entity reference where the data string is the name of the referenced entity and the additional information is a pointer to a [CFXMLEntityReferenceInfo](../cfxmlentityreferenceinfo.md) structure.
- [kCFXMLNodeTypeDocumentType](documenttype.md): Indicates a document type where the data string is the name given to the top-level element and the additional information is a pointer to a [CFXMLDocumentTypeInfo](../cfxmldocumenttypeinfo.md) structure.
- [kCFXMLNodeTypeWhitespace](whitespace.md): Indicates white space where the data string is the text of the white space and the additional information is `NULL`.
- [kCFXMLNodeTypeNotation](notation.md): Indicates a notation where the data string is the notation name and the additional information is a pointer to a [CFXMLNotationInfo](../cfxmlnotationinfo.md) structure.
- [kCFXMLNodeTypeElementTypeDeclaration](elementtypedeclaration.md): Indicates an element type declaration where the data string is the tag name and the additional information is a pointer to a [CFXMLElementTypeDeclarationInfo](../cfxmlelementtypedeclarationinfo.md) structure.
- [kCFXMLNodeTypeAttributeListDeclaration](attributelistdeclaration.md): Indicates an attribute list declaration where the data string is the tag name and the additional information is a pointer to a [CFXMLAttributeListDeclarationInfo](../cfxmlattributelistdeclarationinfo.md) structure.
