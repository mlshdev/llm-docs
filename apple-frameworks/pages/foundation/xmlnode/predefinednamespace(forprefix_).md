> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/predefinednamespace(forprefix:)](https://developer.apple.com/documentation/foundation/xmlnode/predefinednamespace(forprefix:))

# predefinedNamespace(forPrefix:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLNode` object representing one of the predefined namespaces with the specified prefix.

## Declaration

```swift
class func predefinedNamespace(forPrefix name: String) -> XMLNode?
```

## Parameters

- `name`: A string specifying a prefix for a predefined namespace, for example “xml”, “xs”, or “xsi”.

<a id="return-value"></a>

## Return Value

An `NSXMLNode` object of kind [XMLNode.Kind.namespace](kind-swift.enum/namespace.md) or `nil` if the object couldn’t be created. If something other than a predefined-namespace prefix is specified, the method returns `nil`.

## See Also

### Related Documentation

- [prefix(forName:)](prefix%28forname_%29.md): Returns the prefix from the specified qualified name.
- [localName(forName:)](localname%28forname_%29.md): Returns the local name from the specified qualified name.

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
- [attribute(withName:uri:stringValue:)](attribute%28withname_uri_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given qualified name and string.
- [text(withStringValue:)](text%28withstringvalue_%29.md): Returns an `NSXMLNode` object representing a text node with specified content.
- [comment(withStringValue:)](comment%28withstringvalue_%29.md): Returns an [XMLNode](../xmlnode.md) object representing a comment node containing given text.
- [namespace(withName:stringValue:)](namespace%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a namespace with a specified name and URI.
- [dtdNode(withXMLString:)](dtdnode%28withxmlstring_%29.md): Returns a [XMLDTDNode](../xmldtdnode.md) object representing the DTD declaration for an element, attribute, entity, or notation based on a given string.
- [processingInstruction(withName:stringValue:)](processinginstruction%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a processing instruction with a specified name and value.

# predefinedNamespaceForPrefix: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLNode` object representing one of the predefined namespaces with the specified prefix.

## Declaration

```objectivec
+ (NSXMLNode *) predefinedNamespaceForPrefix:(NSString *) name;
```

## Parameters

- `name`: A string specifying a prefix for a predefined namespace, for example “xml”, “xs”, or “xsi”.

<a id="return-value"></a>

## Return Value

An `NSXMLNode` object of kind [NSXMLNamespaceKind](kind-swift.enum/namespace.md) or `nil` if the object couldn’t be created. If something other than a predefined-namespace prefix is specified, the method returns `nil`.

## See Also

### Related Documentation

- [prefixForName:](prefix%28forname_%29.md): Returns the prefix from the specified qualified name.
- [localNameForName:](localname%28forname_%29.md): Returns the local name from the specified qualified name.

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
- [attributeWithName:URI:stringValue:](attribute%28withname_uri_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given qualified name and string.
- [textWithStringValue:](text%28withstringvalue_%29.md): Returns an `NSXMLNode` object representing a text node with specified content.
- [commentWithStringValue:](comment%28withstringvalue_%29.md): Returns an [NSXMLNode](../xmlnode.md) object representing a comment node containing given text.
- [namespaceWithName:stringValue:](namespace%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a namespace with a specified name and URI.
- [DTDNodeWithXMLString:](dtdnode%28withxmlstring_%29.md): Returns a [NSXMLDTDNode](../xmldtdnode.md) object representing the DTD declaration for an element, attribute, entity, or notation based on a given string.
- [processingInstructionWithName:stringValue:](processinginstruction%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a processing instruction with a specified name and value.
