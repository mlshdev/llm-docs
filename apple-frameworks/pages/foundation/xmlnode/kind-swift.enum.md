> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/kind-swift.enum](https://developer.apple.com/documentation/foundation/xmlnode/kind-swift.enum)

# XMLNode.Kind (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

`NSXMLNode` declares the following constants of type NSXMLNodeKind for specifying a node’s kind in the initializer methods [init(kind:)](init%28kind_%29.md) and [init(kind:options:)](init%28kind_options_%29.md):

## Declaration

```swift
enum Kind
```

## Topics

### Constants

- [XMLNode.Kind.invalid](kind-swift.enum/invalid.md): Indicates a node object created without a valid kind being specified (as returned by the [kind](kind-swift.property.md) method).
- [XMLNode.Kind.document](kind-swift.enum/document.md): Specifies a document node.
- [XMLNode.Kind.element](kind-swift.enum/element.md): Specifies an element node.
- [XMLNode.Kind.attribute](kind-swift.enum/attribute.md): Specifies an attribute node
- [XMLNode.Kind.namespace](kind-swift.enum/namespace.md): Specifies a namespace node.
- [XMLNode.Kind.processingInstruction](kind-swift.enum/processinginstruction.md): Specifies a processing-instruction node.
- [XMLNode.Kind.comment](kind-swift.enum/comment.md): Specifies a comment node.
- [XMLNode.Kind.text](kind-swift.enum/text.md): Specifies a text node.
- [XMLNode.Kind.DTDKind](kind-swift.enum/dtdkind.md): Specifies a document-type declaration (DTD) node.
- [XMLNode.Kind.entityDeclaration](kind-swift.enum/entitydeclaration.md): Specifies an entity-declaration node.
- [XMLNode.Kind.attributeDeclaration](kind-swift.enum/attributedeclaration.md): Specifies an attribute-list declaration node.
- [XMLNode.Kind.elementDeclaration](kind-swift.enum/elementdeclaration.md): Specifies an element declaration node.
- [XMLNode.Kind.notationDeclaration](kind-swift.enum/notationdeclaration.md): Specifies a notation declaration node.

### Initializers

- [init(rawValue:)](kind-swift.enum/init%28rawvalue_%29.md)

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

- [XMLNode.Options](options.md): These constants are input and output options for all `NSXMLNode` objects (unless otherwise indicated), including [XMLDocument](../xmldocument.md) objects. You can specify these options in the `NSXMLNode` methods [init(kind:options:)](init%28kind_options_%29.md) and [xmlString(options:)](xmlstring%28options_%29.md).

# NSXMLNodeKind (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

`NSXMLNode` declares the following constants of type NSXMLNodeKind for specifying a node’s kind in the initializer methods [initWithKind:](init%28kind_%29.md) and [initWithKind:options:](init%28kind_options_%29.md):

## Declaration

```objectivec
enum NSXMLNodeKind : NSUInteger;
```

## Topics

### Constants

- [NSXMLInvalidKind](kind-swift.enum/invalid.md): Indicates a node object created without a valid kind being specified (as returned by the [kind](kind-swift.property.md) method).
- [NSXMLDocumentKind](kind-swift.enum/document.md): Specifies a document node.
- [NSXMLElementKind](kind-swift.enum/element.md): Specifies an element node.
- [NSXMLAttributeKind](kind-swift.enum/attribute.md): Specifies an attribute node
- [NSXMLNamespaceKind](kind-swift.enum/namespace.md): Specifies a namespace node.
- [NSXMLProcessingInstructionKind](kind-swift.enum/processinginstruction.md): Specifies a processing-instruction node.
- [NSXMLCommentKind](kind-swift.enum/comment.md): Specifies a comment node.
- [NSXMLTextKind](kind-swift.enum/text.md): Specifies a text node.
- [NSXMLDTDKind](kind-swift.enum/dtdkind.md): Specifies a document-type declaration (DTD) node.
- [NSXMLEntityDeclarationKind](kind-swift.enum/entitydeclaration.md): Specifies an entity-declaration node.
- [NSXMLAttributeDeclarationKind](kind-swift.enum/attributedeclaration.md): Specifies an attribute-list declaration node.
- [NSXMLElementDeclarationKind](kind-swift.enum/elementdeclaration.md): Specifies an element declaration node.
- [NSXMLNotationDeclarationKind](kind-swift.enum/notationdeclaration.md): Specifies a notation declaration node.

## See Also

### Constants

- [NSXMLNodeOptions](options.md): These constants are input and output options for all `NSXMLNode` objects (unless otherwise indicated), including [NSXMLDocument](../xmldocument.md) objects. You can specify these options in the `NSXMLNode` methods [initWithKind:options:](init%28kind_options_%29.md) and [XMLStringWithOptions:](xmlstring%28options_%29.md).
- [NSXMLNodeOptionsNone](../nsxmlnodeoptions/nsxmlnodeoptionsnone.md): No options are requested for this input or output action.
