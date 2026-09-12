> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/init(kind:)](https://developer.apple.com/documentation/foundation/xmlnode/init(kind:))

# init(kind:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLNode` instance initialized with the constant indicating node kind.

## Declaration

```swift
convenience init(kind: XMLNode.Kind)
```

## Parameters

- `kind`: An `enum` constant of type [XMLNode.Kind](kind-swift.enum.md) that indicates the type of node. See Constants for a list of valid NSXMLNodeKind constants.

<a id="return-value"></a>

## Return Value

An `NSXMLNode` object initialized with kind or `nil` if the object couldn’t be created. If `kind` is not a valid NSXMLNodeKind constant, the method returns an `NSXMLNode` object of kind `NSXMLInvalidKind`.

<a id="Discussion"></a>

## Discussion

This method invokes [init(kind:options:)](init%28kind_options_%29.md) with the `options` parameter set to `NSXMLNodeOptionsNone`.

Do not use this initializer for creating instances of [XMLDTDNode](../xmldtdnode.md) for attribute-list declarations. Instead, use the [dtdNode(withXMLString:)](dtdnode%28withxmlstring_%29.md) class method of this class or the [init(xmlString:)](../xmldtdnode/init%28xmlstring_%29-1dyhd.md) method of the `NSXMLDTDNode` class.

## See Also

### Related Documentation

- [Tree-Based XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSXML_Concepts/NSXML.html#//apple_ref/doc/uid/TP40001269)

### Creating and Initializing Node Objects

- [init(kind:options:)](init%28kind_options_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind and one or more initialization options.
- [document()](document%28%29.md): Returns an empty document node.
- [document(withRootElement:)](document%28withrootelement_%29.md): Returns an [XMLDocument](../xmldocument.md) object initialized with a given root element.
- [element(withName:)](element%28withname_%29.md): Returns an [XMLElement](../xmlelement.md) object with a given tag identifier, or name
- [element(withName:children:attributes:)](element%28withname_children_attributes_%29.md): Returns an [XMLElement](../xmlelement.md) object with the given tag (name), attributes, and children.
- [element(withName:stringValue:)](element%28withname_stringvalue_%29.md): Returns an [XMLElement](../xmlelement.md) object with a single text-node child containing the specified text.
- [element(withName:uri:)](element%28withname_uri_%29.md): Returns an element whose fully qualified name is specified.
- [attribute(withName:stringValue:)](attribute%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given name and string.
- [attribute(withName:uri:stringValue:)](attribute%28withname_uri_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given qualified name and string.
- [text(withStringValue:)](text%28withstringvalue_%29.md): Returns an `NSXMLNode` object representing a text node with specified content.
- [comment(withStringValue:)](comment%28withstringvalue_%29.md): Returns an [XMLNode](../xmlnode.md) object representing a comment node containing given text.
- [namespace(withName:stringValue:)](namespace%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a namespace with a specified name and URI.
- [dtdNode(withXMLString:)](dtdnode%28withxmlstring_%29.md): Returns a [XMLDTDNode](../xmldtdnode.md) object representing the DTD declaration for an element, attribute, entity, or notation based on a given string.
- [predefinedNamespace(forPrefix:)](predefinednamespace%28forprefix_%29.md): Returns an `NSXMLNode` object representing one of the predefined namespaces with the specified prefix.
- [processingInstruction(withName:stringValue:)](processinginstruction%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a processing instruction with a specified name and value.

# initWithKind: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLNode` instance initialized with the constant indicating node kind.

## Declaration

```objectivec
- (instancetype) initWithKind:(NSXMLNodeKind) kind;
```

## Parameters

- `kind`: An `enum` constant of type [NSXMLNodeKind](kind-swift.enum.md) that indicates the type of node. See Constants for a list of valid NSXMLNodeKind constants.

<a id="return-value"></a>

## Return Value

An `NSXMLNode` object initialized with kind or `nil` if the object couldn’t be created. If `kind` is not a valid NSXMLNodeKind constant, the method returns an `NSXMLNode` object of kind `NSXMLInvalidKind`.

<a id="Discussion"></a>

## Discussion

This method invokes [initWithKind:options:](init%28kind_options_%29.md) with the `options` parameter set to `NSXMLNodeOptionsNone`.

Do not use this initializer for creating instances of [NSXMLDTDNode](../xmldtdnode.md) for attribute-list declarations. Instead, use the [DTDNodeWithXMLString:](dtdnode%28withxmlstring_%29.md) class method of this class or the [initWithXMLString:](../xmldtdnode/init%28xmlstring_%29-1dyhd.md) method of the `NSXMLDTDNode` class.

## See Also

### Related Documentation

- [Tree-Based XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSXML_Concepts/NSXML.html#//apple_ref/doc/uid/TP40001269)

### Creating and Initializing Node Objects

- [initWithKind:options:](init%28kind_options_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind and one or more initialization options.
- [document](document%28%29.md): Returns an empty document node.
- [documentWithRootElement:](document%28withrootelement_%29.md): Returns an [NSXMLDocument](../xmldocument.md) object initialized with a given root element.
- [elementWithName:](element%28withname_%29.md): Returns an [NSXMLElement](../xmlelement.md) object with a given tag identifier, or name
- [elementWithName:children:attributes:](element%28withname_children_attributes_%29.md): Returns an [NSXMLElement](../xmlelement.md) object with the given tag (name), attributes, and children.
- [elementWithName:stringValue:](element%28withname_stringvalue_%29.md): Returns an [NSXMLElement](../xmlelement.md) object with a single text-node child containing the specified text.
- [elementWithName:URI:](element%28withname_uri_%29.md): Returns an element whose fully qualified name is specified.
- [attributeWithName:stringValue:](attribute%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given name and string.
- [attributeWithName:URI:stringValue:](attribute%28withname_uri_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given qualified name and string.
- [textWithStringValue:](text%28withstringvalue_%29.md): Returns an `NSXMLNode` object representing a text node with specified content.
- [commentWithStringValue:](comment%28withstringvalue_%29.md): Returns an [NSXMLNode](../xmlnode.md) object representing a comment node containing given text.
- [namespaceWithName:stringValue:](namespace%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a namespace with a specified name and URI.
- [DTDNodeWithXMLString:](dtdnode%28withxmlstring_%29.md): Returns a [NSXMLDTDNode](../xmldtdnode.md) object representing the DTD declaration for an element, attribute, entity, or notation based on a given string.
- [predefinedNamespaceForPrefix:](predefinednamespace%28forprefix_%29.md): Returns an `NSXMLNode` object representing one of the predefined namespaces with the specified prefix.
- [processingInstructionWithName:stringValue:](processinginstruction%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a processing instruction with a specified name and value.
