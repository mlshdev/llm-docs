> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/element(withname:children:attributes:)](https://developer.apple.com/documentation/foundation/xmlnode/element(withname:children:attributes:))

# element(withName:children:attributes:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an [XMLElement](../xmlelement.md) object with the given tag (name), attributes, and children.

## Declaration

```swift
class func element(withName name: String, children: [XMLNode]?, attributes: [XMLNode]?) -> Any
```

## Parameters

- `name`: A string that is the name (tag identifier) of the element.
- `children`: An array of `NSXMLElement` objects or `NSXMLNode` objects of kinds [XMLNode.Kind.element](kind-swift.enum/element.md), [XMLNode.Kind.processingInstruction](kind-swift.enum/processinginstruction.md), [XMLNode.Kind.comment](kind-swift.enum/comment.md), and [XMLNode.Kind.text](kind-swift.enum/text.md). Specify `nil` if there are no children to add to this node object.
- `attributes`: An array of `NSXMLNode` objects of kind [XMLNode.Kind.attribute](kind-swift.enum/attribute.md). Specify `nil` if there are no attributes to add to this node object.

<a id="return-value"></a>

## Return Value

An `NSXMLElement` object or `nil` if the object couldn’t be created.

## See Also

### Creating and Initializing Node Objects

- [init(kind:)](init%28kind_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind.
- [init(kind:options:)](init%28kind_options_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind and one or more initialization options.
- [document()](document%28%29.md): Returns an empty document node.
- [document(withRootElement:)](document%28withrootelement_%29.md): Returns an [XMLDocument](../xmldocument.md) object initialized with a given root element.
- [element(withName:)](element%28withname_%29.md): Returns an [XMLElement](../xmlelement.md) object with a given tag identifier, or name
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

# elementWithName:children:attributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an [NSXMLElement](../xmlelement.md) object with the given tag (name), attributes, and children.

## Declaration

```objectivec
+ (id) elementWithName:(NSString *) name children:(NSArray<NSXMLNode *> *) children attributes:(NSArray<NSXMLNode *> *) attributes;
```

## Parameters

- `name`: A string that is the name (tag identifier) of the element.
- `children`: An array of `NSXMLElement` objects or `NSXMLNode` objects of kinds [NSXMLElementKind](kind-swift.enum/element.md), [NSXMLProcessingInstructionKind](kind-swift.enum/processinginstruction.md), [NSXMLCommentKind](kind-swift.enum/comment.md), and [NSXMLTextKind](kind-swift.enum/text.md). Specify `nil` if there are no children to add to this node object.
- `attributes`: An array of `NSXMLNode` objects of kind [NSXMLAttributeKind](kind-swift.enum/attribute.md). Specify `nil` if there are no attributes to add to this node object.

<a id="return-value"></a>

## Return Value

An `NSXMLElement` object or `nil` if the object couldn’t be created.

## See Also

### Creating and Initializing Node Objects

- [initWithKind:](init%28kind_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind.
- [initWithKind:options:](init%28kind_options_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind and one or more initialization options.
- [document](document%28%29.md): Returns an empty document node.
- [documentWithRootElement:](document%28withrootelement_%29.md): Returns an [NSXMLDocument](../xmldocument.md) object initialized with a given root element.
- [elementWithName:](element%28withname_%29.md): Returns an [NSXMLElement](../xmlelement.md) object with a given tag identifier, or name
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
