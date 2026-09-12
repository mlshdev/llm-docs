> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/attribute(withname:uri:stringvalue:)](https://developer.apple.com/documentation/foundation/xmlnode/attribute(withname:uri:stringvalue:))

# attribute(withName:uri:stringValue:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLNode` object representing an attribute node with a given qualified name and string.

## Declaration

```swift
class func attribute(withName name: String, uri URI: String, stringValue: String) -> Any
```

## Parameters

- `name`: A string that is the name of an attribute.
- `URI`: A URI (Universal Resource Identifier) that qualifies `name`.
- `stringValue`: A string that is the value of the attribute.

<a id="return-value"></a>

## Return Value

An `NSXMLNode` object of kind [XMLNode.Kind.attribute](kind-swift.enum/attribute.md) or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

For example, in the attribute “bst:id=\`12345’”, “bst” is the name qualifier (derived from the URI), “id” is the attribute name, and “12345” is the attribute value.

## See Also

### Creating and Initializing Node Objects

- [init(kind:)](init%28kind_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind.
- [init(kind:options:)](init%28kind_options_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind and one or more initialization options.
- [document()](document%28%29.md): Returns an empty document node.
- [document(withRootElement:)](document%28withrootelement_%29.md): Returns an [XMLDocument](../xmldocument.md) object initialized with a given root element.
- [element(withName:)](element%28withname_%29.md): Returns an [XMLElement](../xmlelement.md) object with a given tag identifier, or name
- [element(withName:children:attributes:)](element%28withname_children_attributes_%29.md): Returns an [XMLElement](../xmlelement.md) object with the given tag (name), attributes, and children.
- [element(withName:stringValue:)](element%28withname_stringvalue_%29.md): Returns an [XMLElement](../xmlelement.md) object with a single text-node child containing the specified text.
- [element(withName:uri:)](element%28withname_uri_%29.md): Returns an element whose fully qualified name is specified.
- [attribute(withName:stringValue:)](attribute%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given name and string.
- [text(withStringValue:)](text%28withstringvalue_%29.md): Returns an `NSXMLNode` object representing a text node with specified content.
- [comment(withStringValue:)](comment%28withstringvalue_%29.md): Returns an [XMLNode](../xmlnode.md) object representing a comment node containing given text.
- [namespace(withName:stringValue:)](namespace%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a namespace with a specified name and URI.
- [dtdNode(withXMLString:)](dtdnode%28withxmlstring_%29.md): Returns a [XMLDTDNode](../xmldtdnode.md) object representing the DTD declaration for an element, attribute, entity, or notation based on a given string.
- [predefinedNamespace(forPrefix:)](predefinednamespace%28forprefix_%29.md): Returns an `NSXMLNode` object representing one of the predefined namespaces with the specified prefix.
- [processingInstruction(withName:stringValue:)](processinginstruction%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a processing instruction with a specified name and value.

# attributeWithName:URI:stringValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLNode` object representing an attribute node with a given qualified name and string.

## Declaration

```objectivec
+ (id) attributeWithName:(NSString *) name URI:(NSString *) URI stringValue:(NSString *) stringValue;
```

## Parameters

- `name`: A string that is the name of an attribute.
- `URI`: A URI (Universal Resource Identifier) that qualifies `name`.
- `stringValue`: A string that is the value of the attribute.

<a id="return-value"></a>

## Return Value

An `NSXMLNode` object of kind [NSXMLAttributeKind](kind-swift.enum/attribute.md) or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

For example, in the attribute “bst:id=\`12345’”, “bst” is the name qualifier (derived from the URI), “id” is the attribute name, and “12345” is the attribute value.

## See Also

### Creating and Initializing Node Objects

- [initWithKind:](init%28kind_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind.
- [initWithKind:options:](init%28kind_options_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind and one or more initialization options.
- [document](document%28%29.md): Returns an empty document node.
- [documentWithRootElement:](document%28withrootelement_%29.md): Returns an [NSXMLDocument](../xmldocument.md) object initialized with a given root element.
- [elementWithName:](element%28withname_%29.md): Returns an [NSXMLElement](../xmlelement.md) object with a given tag identifier, or name
- [elementWithName:children:attributes:](element%28withname_children_attributes_%29.md): Returns an [NSXMLElement](../xmlelement.md) object with the given tag (name), attributes, and children.
- [elementWithName:stringValue:](element%28withname_stringvalue_%29.md): Returns an [NSXMLElement](../xmlelement.md) object with a single text-node child containing the specified text.
- [elementWithName:URI:](element%28withname_uri_%29.md): Returns an element whose fully qualified name is specified.
- [attributeWithName:stringValue:](attribute%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given name and string.
- [textWithStringValue:](text%28withstringvalue_%29.md): Returns an `NSXMLNode` object representing a text node with specified content.
- [commentWithStringValue:](comment%28withstringvalue_%29.md): Returns an [NSXMLNode](../xmlnode.md) object representing a comment node containing given text.
- [namespaceWithName:stringValue:](namespace%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a namespace with a specified name and URI.
- [DTDNodeWithXMLString:](dtdnode%28withxmlstring_%29.md): Returns a [NSXMLDTDNode](../xmldtdnode.md) object representing the DTD declaration for an element, attribute, entity, or notation based on a given string.
- [predefinedNamespaceForPrefix:](predefinednamespace%28forprefix_%29.md): Returns an `NSXMLNode` object representing one of the predefined namespaces with the specified prefix.
- [processingInstructionWithName:stringValue:](processinginstruction%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a processing instruction with a specified name and value.
