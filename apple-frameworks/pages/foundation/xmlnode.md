> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode](https://developer.apple.com/documentation/foundation/xmlnode)

# XMLNode (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The nodes in the abstract, logical tree structure that represents an XML document.

## Declaration

```swift
class XMLNode
```

<a id="overview"></a>

## Overview

Node objects can be of different kinds, corresponding to the following markup constructs in an XML document: element, attribute, text, processing instruction, namespace, and comment. In addition, a document-node object (specifically, an instance of [XMLDocument](xmldocument.md)) represents an XML document in its entirety. [XMLNode](xmlnode.md) objects can also represent document type declarations as well as declarations in Document Type Definitions (DTDs). Class factory methods of [XMLNode](xmlnode.md) enable you to create nodes of each kind. Only document, element, and DTD nodes may have child nodes.

Among the XML family of classes (excluding [XMLParser](xmlparser.md)) the [XMLNode](xmlnode.md) class is the base class. Inheriting from it are the classes [XMLElement](xmlelement.md), [XMLDocument](xmldocument.md), [XMLDTD](xmldtd.md), and [XMLDTDNode](xmldtdnode.md). [XMLNode](xmlnode.md) specifies the interface common to all XML node objects and defines common node behavior and attributes, for example hierarchy level, node name and value, tree traversal, and the ability to emit representative XML markup text.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You can subclass [XMLNode](xmlnode.md) if you want nodes of kinds different from the supported ones, You can also create a subclass with more specialized attributes or behavior than [XMLNode](xmlnode.md).

<a id="Methods-to-Override"></a>

#### Methods to Override

To subclass [XMLNode](xmlnode.md) you need to override the primary initializer, [init(kind:options:)](xmlnode/init%28kind_options_%29.md), and the methods listed below. In most cases, you need only invoke the superclass implementation, adding any subclass-specific code before or after the invocation, as necessary.

| [kind](xmlnode/kind-swift.property.md) | [parent](xmlnode/parent.md) |
| --- | --- |
| [name](xmlnode/name.md) | [child(at:)](xmlnode/child%28at_%29.md) |
| [name](xmlnode/name.md) | [childCount](xmlnode/childcount.md) |
| [objectValue](xmlnode/objectvalue.md) | [children](xmlnode/children.md) |
| [objectValue](xmlnode/objectvalue.md) | [detach()](xmlnode/detach%28%29.md) |
| [stringValue](xmlnode/stringvalue.md) | [localName](xmlnode/localname.md) |
| [setStringValue(\_:resolvingEntities:)](xmlnode/setstringvalue%28__resolvingentities_%29.md) | [prefix](xmlnode/prefix.md) |
| [index](xmlnode/index.md) | [uri](xmlnode/uri.md) |

By default [XMLNode](xmlnode.md) implements the `NSObject` [isEqual(\_:)](../objectivec/nsobjectprotocol/isequal%28__%29.md) method to perform a deep comparison: two [XMLNode](xmlnode.md) objects are not considered equal unless they have the same name, same child nodes, same attributes, and so on. The comparison looks at the node and its children, but does not include the node’s parent. If you want a different standard of comparison, override `isEqual:`.

<a id="Special-Considerations"></a>

#### Special Considerations

Because of the architecture and data model of NSXML, when it parses and processes a source of XML it cannot know about your subclass unless you override the [XMLDocument](xmldocument.md) class method [replacementClass(for:)](xmldocument/replacementclass%28for_%29.md) to return your custom class in place of an NSXML class. If your custom class has no direct NSXML counterpart—for example, it is a subclass of [XMLNode](xmlnode.md) that represents CDATA sections—then you can walk the tree after it has been created and insert the new node where appropriate.

## Topics

### Creating and Initializing Node Objects

- [init(kind:)](xmlnode/init%28kind_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind.
- [init(kind:options:)](xmlnode/init%28kind_options_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind and one or more initialization options.
- [document()](xmlnode/document%28%29.md): Returns an empty document node.
- [document(withRootElement:)](xmlnode/document%28withrootelement_%29.md): Returns an [XMLDocument](xmldocument.md) object initialized with a given root element.
- [element(withName:)](xmlnode/element%28withname_%29.md): Returns an [XMLElement](xmlelement.md) object with a given tag identifier, or name
- [element(withName:children:attributes:)](xmlnode/element%28withname_children_attributes_%29.md): Returns an [XMLElement](xmlelement.md) object with the given tag (name), attributes, and children.
- [element(withName:stringValue:)](xmlnode/element%28withname_stringvalue_%29.md): Returns an [XMLElement](xmlelement.md) object with a single text-node child containing the specified text.
- [element(withName:uri:)](xmlnode/element%28withname_uri_%29.md): Returns an element whose fully qualified name is specified.
- [attribute(withName:stringValue:)](xmlnode/attribute%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given name and string.
- [attribute(withName:uri:stringValue:)](xmlnode/attribute%28withname_uri_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given qualified name and string.
- [text(withStringValue:)](xmlnode/text%28withstringvalue_%29.md): Returns an `NSXMLNode` object representing a text node with specified content.
- [comment(withStringValue:)](xmlnode/comment%28withstringvalue_%29.md): Returns an [XMLNode](xmlnode.md) object representing a comment node containing given text.
- [namespace(withName:stringValue:)](xmlnode/namespace%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a namespace with a specified name and URI.
- [dtdNode(withXMLString:)](xmlnode/dtdnode%28withxmlstring_%29.md): Returns a [XMLDTDNode](xmldtdnode.md) object representing the DTD declaration for an element, attribute, entity, or notation based on a given string.
- [predefinedNamespace(forPrefix:)](xmlnode/predefinednamespace%28forprefix_%29.md): Returns an `NSXMLNode` object representing one of the predefined namespaces with the specified prefix.
- [processingInstruction(withName:stringValue:)](xmlnode/processinginstruction%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a processing instruction with a specified name and value.

### Managing XML Node Objects

- [index](xmlnode/index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [kind](xmlnode/kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [XMLNode.Kind](xmlnode/kind-swift.enum.md).
- [level](xmlnode/level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](xmlnode/name.md): Returns the name of the receiver.
- [objectValue](xmlnode/objectvalue.md): Returns the object value of the receiver.
- [stringValue](xmlnode/stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue(\_:resolvingEntities:)](xmlnode/setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](nsxmlnode-seturi.md): Sets the URI of the receiver.
- [uri](xmlnode/uri.md): Returns the URI associated with the receiver.

### Navigating the Tree of Nodes

- [rootDocument](xmlnode/rootdocument.md): Returns the [XMLDocument](xmldocument.md) object containing the root element and representing the XML document as a whole.
- [parent](xmlnode/parent.md): Returns the parent node of the receiver.
- [child(at:)](xmlnode/child%28at_%29.md): Returns the child node of the receiver at the specified location.
- [childCount](xmlnode/childcount.md): Returns the number of child nodes the receiver has.
- [children](xmlnode/children.md): Returns an immutable array containing the child nodes of the receiver (as `NSXMLNode` objects).
- [next](xmlnode/next.md): Returns the next `NSXMLNode` object in document order.
- [nextSibling](xmlnode/nextsibling.md): Returns the next `NSXMLNode` object that is a sibling node to the receiver.
- [previous](xmlnode/previous.md): Returns the previous `NSXMLNode` object in document order.
- [previousSibling](xmlnode/previoussibling.md): Returns the previous `NSXMLNode` object that is a sibling node to the receiver.
- [detach()](xmlnode/detach%28%29.md): Detaches the receiver from its parent node.

### Emitting Node Content

- [xmlString](xmlnode/xmlstring.md): Returns the string representation of the receiver as it would appear in an XML document.
- [xmlString(options:)](xmlnode/xmlstring%28options_%29.md): Returns the string representation of the receiver as it would appear in an XML document, with one or more output options specified.
- [canonicalXMLStringPreservingComments(\_:)](xmlnode/canonicalxmlstringpreservingcomments%28__%29.md): Returns a string object encapsulating the receiver’s XML in canonical form.
- [description](xmlnode/description.md)

### Executing Queries

- [nodes(forXPath:)](xmlnode/nodes%28forxpath_%29.md): Returns the nodes resulting from executing an XPath query upon the receiver.
- [objects(forXQuery:)](xmlnode/objects%28forxquery_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [objects(forXQuery:constants:)](xmlnode/objects%28forxquery_constants_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [xPath](xmlnode/xpath.md): Returns the XPath expression identifying the receiver’s location in the document tree.

### Managing Namespaces

- [localName](xmlnode/localname.md): Returns the local name of the receiver.
- [localName(forName:)](xmlnode/localname%28forname_%29.md): Returns the local name from the specified qualified name.
- [prefix](xmlnode/prefix.md): Returns the prefix of the receiver’s name.
- [prefix(forName:)](xmlnode/prefix%28forname_%29.md): Returns the prefix from the specified qualified name.

### Constants

- [XMLNode.Kind](xmlnode/kind-swift.enum.md): `NSXMLNode` declares the following constants of type NSXMLNodeKind for specifying a node’s kind in the initializer methods [init(kind:)](xmlnode/init%28kind_%29.md) and [init(kind:options:)](xmlnode/init%28kind_options_%29.md):
- [XMLNode.Options](xmlnode/options.md): These constants are input and output options for all `NSXMLNode` objects (unless otherwise indicated), including [XMLDocument](xmldocument.md) objects. You can specify these options in the `NSXMLNode` methods [init(kind:options:)](xmlnode/init%28kind_options_%29.md) and [xmlString(options:)](xmlnode/xmlstring%28options_%29.md).

### Initializers

- [init()](xmlnode/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [XMLDTD](xmldtd.md)
- [XMLDTDNode](xmldtdnode.md)
- [XMLDocument](xmldocument.md)
- [XMLElement](xmlelement.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Tree-Based Processing

- [XMLDTD](xmldtd.md): A representation of a Document Type Definition.
- [XMLDTDNode](xmldtdnode.md): A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.
- [XMLDocument](xmldocument.md): An XML document as internalized into a logical tree structure.
- [XMLElement](xmlelement.md): The element nodes in an XML tree structure.

# NSXMLNode (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The nodes in the abstract, logical tree structure that represents an XML document.

## Declaration

```objectivec
@interface NSXMLNode : NSObject
```

<a id="overview"></a>

## Overview

Node objects can be of different kinds, corresponding to the following markup constructs in an XML document: element, attribute, text, processing instruction, namespace, and comment. In addition, a document-node object (specifically, an instance of [NSXMLDocument](xmldocument.md)) represents an XML document in its entirety. [NSXMLNode](xmlnode.md) objects can also represent document type declarations as well as declarations in Document Type Definitions (DTDs). Class factory methods of [NSXMLNode](xmlnode.md) enable you to create nodes of each kind. Only document, element, and DTD nodes may have child nodes.

Among the XML family of classes (excluding [NSXMLParser](xmlparser.md)) the [NSXMLNode](xmlnode.md) class is the base class. Inheriting from it are the classes [NSXMLElement](xmlelement.md), [NSXMLDocument](xmldocument.md), [NSXMLDTD](xmldtd.md), and [NSXMLDTDNode](xmldtdnode.md). [NSXMLNode](xmlnode.md) specifies the interface common to all XML node objects and defines common node behavior and attributes, for example hierarchy level, node name and value, tree traversal, and the ability to emit representative XML markup text.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You can subclass [NSXMLNode](xmlnode.md) if you want nodes of kinds different from the supported ones, You can also create a subclass with more specialized attributes or behavior than [NSXMLNode](xmlnode.md).

<a id="Methods-to-Override"></a>

#### Methods to Override

To subclass [NSXMLNode](xmlnode.md) you need to override the primary initializer, [initWithKind:options:](xmlnode/init%28kind_options_%29.md), and the methods listed below. In most cases, you need only invoke the superclass implementation, adding any subclass-specific code before or after the invocation, as necessary.

| [kind](xmlnode/kind-swift.property.md) | [parent](xmlnode/parent.md) |
| --- | --- |
| [name](xmlnode/name.md) | [childAtIndex:](xmlnode/child%28at_%29.md) |
| [name](xmlnode/name.md) | [childCount](xmlnode/childcount.md) |
| [objectValue](xmlnode/objectvalue.md) | [children](xmlnode/children.md) |
| [objectValue](xmlnode/objectvalue.md) | [detach](xmlnode/detach%28%29.md) |
| [stringValue](xmlnode/stringvalue.md) | [localName](xmlnode/localname.md) |
| [setStringValue:resolvingEntities:](xmlnode/setstringvalue%28__resolvingentities_%29.md) | [prefix](xmlnode/prefix.md) |
| [index](xmlnode/index.md) | [URI](xmlnode/uri.md) |

By default [NSXMLNode](xmlnode.md) implements the `NSObject` [isEqual:](../objectivec/nsobjectprotocol/isequal%28__%29.md) method to perform a deep comparison: two [NSXMLNode](xmlnode.md) objects are not considered equal unless they have the same name, same child nodes, same attributes, and so on. The comparison looks at the node and its children, but does not include the node’s parent. If you want a different standard of comparison, override `isEqual:`.

<a id="Special-Considerations"></a>

#### Special Considerations

Because of the architecture and data model of NSXML, when it parses and processes a source of XML it cannot know about your subclass unless you override the [NSXMLDocument](xmldocument.md) class method [replacementClassForClass:](xmldocument/replacementclass%28for_%29.md) to return your custom class in place of an NSXML class. If your custom class has no direct NSXML counterpart—for example, it is a subclass of [NSXMLNode](xmlnode.md) that represents CDATA sections—then you can walk the tree after it has been created and insert the new node where appropriate.

## Topics

### Creating and Initializing Node Objects

- [initWithKind:](xmlnode/init%28kind_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind.
- [initWithKind:options:](xmlnode/init%28kind_options_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind and one or more initialization options.
- [document](xmlnode/document%28%29.md): Returns an empty document node.
- [documentWithRootElement:](xmlnode/document%28withrootelement_%29.md): Returns an [NSXMLDocument](xmldocument.md) object initialized with a given root element.
- [elementWithName:](xmlnode/element%28withname_%29.md): Returns an [NSXMLElement](xmlelement.md) object with a given tag identifier, or name
- [elementWithName:children:attributes:](xmlnode/element%28withname_children_attributes_%29.md): Returns an [NSXMLElement](xmlelement.md) object with the given tag (name), attributes, and children.
- [elementWithName:stringValue:](xmlnode/element%28withname_stringvalue_%29.md): Returns an [NSXMLElement](xmlelement.md) object with a single text-node child containing the specified text.
- [elementWithName:URI:](xmlnode/element%28withname_uri_%29.md): Returns an element whose fully qualified name is specified.
- [attributeWithName:stringValue:](xmlnode/attribute%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given name and string.
- [attributeWithName:URI:stringValue:](xmlnode/attribute%28withname_uri_stringvalue_%29.md): Returns an `NSXMLNode` object representing an attribute node with a given qualified name and string.
- [textWithStringValue:](xmlnode/text%28withstringvalue_%29.md): Returns an `NSXMLNode` object representing a text node with specified content.
- [commentWithStringValue:](xmlnode/comment%28withstringvalue_%29.md): Returns an [NSXMLNode](xmlnode.md) object representing a comment node containing given text.
- [namespaceWithName:stringValue:](xmlnode/namespace%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a namespace with a specified name and URI.
- [DTDNodeWithXMLString:](xmlnode/dtdnode%28withxmlstring_%29.md): Returns a [NSXMLDTDNode](xmldtdnode.md) object representing the DTD declaration for an element, attribute, entity, or notation based on a given string.
- [predefinedNamespaceForPrefix:](xmlnode/predefinednamespace%28forprefix_%29.md): Returns an `NSXMLNode` object representing one of the predefined namespaces with the specified prefix.
- [processingInstructionWithName:stringValue:](xmlnode/processinginstruction%28withname_stringvalue_%29.md): Returns an `NSXMLNode` object representing a processing instruction with a specified name and value.

### Managing XML Node Objects

- [index](xmlnode/index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [kind](xmlnode/kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [NSXMLNodeKind](xmlnode/kind-swift.enum.md).
- [level](xmlnode/level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](xmlnode/name.md): Returns the name of the receiver.
- [objectValue](xmlnode/objectvalue.md): Returns the object value of the receiver.
- [stringValue](xmlnode/stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue:resolvingEntities:](xmlnode/setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](nsxmlnode-seturi.md): Sets the URI of the receiver.
- [URI](xmlnode/uri.md): Returns the URI associated with the receiver.

### Navigating the Tree of Nodes

- [rootDocument](xmlnode/rootdocument.md): Returns the [NSXMLDocument](xmldocument.md) object containing the root element and representing the XML document as a whole.
- [parent](xmlnode/parent.md): Returns the parent node of the receiver.
- [childAtIndex:](xmlnode/child%28at_%29.md): Returns the child node of the receiver at the specified location.
- [childCount](xmlnode/childcount.md): Returns the number of child nodes the receiver has.
- [children](xmlnode/children.md): Returns an immutable array containing the child nodes of the receiver (as `NSXMLNode` objects).
- [nextNode](xmlnode/next.md): Returns the next `NSXMLNode` object in document order.
- [nextSibling](xmlnode/nextsibling.md): Returns the next `NSXMLNode` object that is a sibling node to the receiver.
- [previousNode](xmlnode/previous.md): Returns the previous `NSXMLNode` object in document order.
- [previousSibling](xmlnode/previoussibling.md): Returns the previous `NSXMLNode` object that is a sibling node to the receiver.
- [detach](xmlnode/detach%28%29.md): Detaches the receiver from its parent node.

### Emitting Node Content

- [XMLString](xmlnode/xmlstring.md): Returns the string representation of the receiver as it would appear in an XML document.
- [XMLStringWithOptions:](xmlnode/xmlstring%28options_%29.md): Returns the string representation of the receiver as it would appear in an XML document, with one or more output options specified.
- [canonicalXMLStringPreservingComments:](xmlnode/canonicalxmlstringpreservingcomments%28__%29.md): Returns a string object encapsulating the receiver’s XML in canonical form.
- [description](xmlnode/description.md)

### Executing Queries

- [nodesForXPath:error:](xmlnode/nodes%28forxpath_%29.md): Returns the nodes resulting from executing an XPath query upon the receiver.
- [objectsForXQuery:error:](xmlnode/objects%28forxquery_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [objectsForXQuery:constants:error:](xmlnode/objects%28forxquery_constants_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [XPath](xmlnode/xpath.md): Returns the XPath expression identifying the receiver’s location in the document tree.

### Managing Namespaces

- [localName](xmlnode/localname.md): Returns the local name of the receiver.
- [localNameForName:](xmlnode/localname%28forname_%29.md): Returns the local name from the specified qualified name.
- [prefix](xmlnode/prefix.md): Returns the prefix of the receiver’s name.
- [prefixForName:](xmlnode/prefix%28forname_%29.md): Returns the prefix from the specified qualified name.

### Constants

- [NSXMLNodeKind](xmlnode/kind-swift.enum.md): `NSXMLNode` declares the following constants of type NSXMLNodeKind for specifying a node’s kind in the initializer methods [initWithKind:](xmlnode/init%28kind_%29.md) and [initWithKind:options:](xmlnode/init%28kind_options_%29.md):
- [NSXMLNodeOptions](xmlnode/options.md): These constants are input and output options for all `NSXMLNode` objects (unless otherwise indicated), including [NSXMLDocument](xmldocument.md) objects. You can specify these options in the `NSXMLNode` methods [initWithKind:options:](xmlnode/init%28kind_options_%29.md) and [XMLStringWithOptions:](xmlnode/xmlstring%28options_%29.md).
- [NSXMLNodeOptionsNone](nsxmlnodeoptions/nsxmlnodeoptionsnone.md): No options are requested for this input or output action.

### Instance Methods

- [init](xmlnode/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSXMLDTD](xmldtd.md)
- [NSXMLDTDNode](xmldtdnode.md)
- [NSXMLDocument](xmldocument.md)
- [NSXMLElement](xmlelement.md)

### Conforms To

- [NSCopying](nscopying.md)

## See Also

### Tree-Based Processing

- [NSXMLDTD](xmldtd.md): A representation of a Document Type Definition.
- [NSXMLDTDNode](xmldtdnode.md): A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.
- [NSXMLDocument](xmldocument.md): An XML document as internalized into a logical tree structure.
- [NSXMLElement](xmlelement.md): The element nodes in an XML tree structure.
