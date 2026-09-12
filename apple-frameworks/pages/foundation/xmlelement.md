> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement](https://developer.apple.com/documentation/foundation/xmlelement)

# XMLElement (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The element nodes in an XML tree structure.

## Declaration

```swift
class XMLElement
```

## Mentioned In

- [setURI:](nsxmlnode-seturi.md)

<a id="overview"></a>

## Overview

An [XMLElement](xmlelement.md) object may have child nodes, specifically comment nodes, processing-instruction nodes, text nodes, and other [XMLElement](xmlelement.md) nodes. It may also have attribute nodes and namespace nodes associated with it (however, namespace and attribute nodes are not considered children). Any attempt to add a [XMLDocument](xmldocument.md) node, [XMLDTD](xmldtd.md) node, namespace node, or attribute node as a child raises an exception. If you add a child node to an [XMLElement](xmlelement.md) object and that child already has a parent, [XMLElement](xmlelement.md) raises an exception; the child must be detached or copied first.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You can subclass `NSXMLElement` if you want element nodes with more specialized attributes or behavior, for example, paragraph and font attributes that specify how the string value of the element should appear.

<a id="Methods-to-Override"></a>

#### Methods to Override

To subclass `NSXMLElement` you need to override the primary initializer, [init(name:uri:)](xmlelement/init%28name_uri_%29-1r286.md), and the methods listed below. In most cases, you need only invoke the superclass implementation, adding any subclass-specific code before or after the invocation, as necessary.

| [addAttribute(\_:)](xmlelement/addattribute%28__%29.md) | [removeNamespace(forPrefix:)](xmlelement/removenamespace%28forprefix_%29.md) |
| --- | --- |
| [removeAttribute(forName:)](xmlelement/removeattribute%28forname_%29.md) | [namespaces](xmlelement/namespaces.md) |
| [attributes](xmlelement/attributes.md) | [namespaces](xmlelement/namespaces.md) |
| [attribute(forLocalName:uri:)](xmlelement/attribute%28forlocalname_uri_%29.md) | [insertChild(\_:at:)](xmlelement/insertchild%28__at_%29.md) |
| [attributes](xmlelement/attributes.md) | [removeChild(at:)](xmlelement/removechild%28at_%29.md) |
| [addNamespace(\_:)](xmlelement/addnamespace%28__%29.md) | [setChildren(\_:)](xmlelement/setchildren%28__%29.md) |

`NSXMLElement` implements  [isEqual(\_:)](../objectivec/nsobjectprotocol/isequal%28__%29.md) to perform a deep comparison: two [XMLDocument](xmldocument.md) objects are not considered equal unless they have the same name, same child nodes, same attributes, and so on. If you want a different standard of comparison, override `isEqual:`.

<a id="Special-Considerations"></a>

#### Special Considerations

Because of the architecture and data model of NSXML, when it parses and processes a source of XML it cannot know about your subclass unless you override the class method [replacementClass(for:)](xmldocument/replacementclass%28for_%29.md) to return your custom class in place of an NSXML class. If your custom class has no direct NSXML counterpart—for example, it is a subclass of `NSXMLNode` that represents CDATA sections—then you can walk the tree after it has been created and insert the new node where appropriate.

Note that you can safely set the root element of the XML document (using the `NSXMLDocument` [setRootElement(\_:)](xmldocument/setrootelement%28__%29.md)method) to be an instance of your subclass because this method only checks to see if the added node is of an element kind (`NSXMLElementKind`). These precautions do not apply, of course, if you are creating an XML tree programmatically.

## Topics

### Initializing NSXMLElement Objects

- [init(name:)](xmlelement/init%28name_%29.md): Returns an `NSXMLElement` object initialized with the specified name.
- [init(name:stringValue:)](xmlelement/init%28name_stringvalue_%29.md): Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.
- [init(name:uri:)](xmlelement/init%28name_uri_%29-1r286.md): Returns an `NSXMLElement` object initialized with the specified name and URI.
- [init(xmlString:)](xmlelement/init%28xmlstring_%29-7vkg7.md): Returns an `NSXMLElement` object created from a specified string containing XML markup.
- [init(kind:options:)](xmlelement/init%28kind_options_%29.md)

### Obtaining Child Elements

- [elements(forName:)](xmlelement/elements%28forname_%29.md): Returns the child element nodes (as `NSXMLElement` objects) of the receiver that have a specified name.
- [elements(forLocalName:uri:)](xmlelement/elements%28forlocalname_uri_%29.md): Returns the child element nodes (as `NSXMLElement` objects) of the receiver that are matched with the specified local name and URI.

### Manipulating Child Elements

- [addChild(\_:)](xmlelement/addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChild(\_:at:)](xmlelement/insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [insertChildren(\_:at:)](xmlelement/insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChild(at:)](xmlelement/removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChild(at:with:)](xmlelement/replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [setChildren(\_:)](xmlelement/setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
- [normalizeAdjacentTextNodesPreservingCDATA(\_:)](xmlelement/normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.

### Handling Attributes

- [addAttribute(\_:)](xmlelement/addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attribute(forName:)](xmlelement/attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attribute(forLocalName:uri:)](xmlelement/attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](xmlelement/attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttribute(forName:)](xmlelement/removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWith(\_:)](xmlelement/setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAs(\_:)](xmlelement/setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.

### Setting Element URI

- [setURI:](nsxmlnode-seturi.md): Sets the URI of the receiver.

### Handling Namespaces

- [addNamespace(\_:)](xmlelement/addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaces](xmlelement/namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [namespace(forPrefix:)](xmlelement/namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [removeNamespace(forPrefix:)](xmlelement/removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolveNamespace(forName:)](xmlelement/resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
- [resolvePrefix(forNamespaceURI:)](xmlelement/resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.

### Initializers

- [init(XMLString:)](xmlelement/init%28xmlstring_%29-1wgno.md)
- [init(name:URI:)](xmlelement/init%28name_uri_%29-67uti.md)

## Relationships

### Inherits From

- [XMLNode](xmlnode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tree-Based Processing

- [XMLDTD](xmldtd.md): A representation of a Document Type Definition.
- [XMLDTDNode](xmldtdnode.md): A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.
- [XMLDocument](xmldocument.md): An XML document as internalized into a logical tree structure.
- [XMLNode](xmlnode.md): The nodes in the abstract, logical tree structure that represents an XML document.

# NSXMLElement (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The element nodes in an XML tree structure.

## Declaration

```objectivec
@interface NSXMLElement : NSXMLNode
```

## Mentioned In

- [setURI:](nsxmlnode-seturi.md)

<a id="overview"></a>

## Overview

An [NSXMLElement](xmlelement.md) object may have child nodes, specifically comment nodes, processing-instruction nodes, text nodes, and other [NSXMLElement](xmlelement.md) nodes. It may also have attribute nodes and namespace nodes associated with it (however, namespace and attribute nodes are not considered children). Any attempt to add a [NSXMLDocument](xmldocument.md) node, [NSXMLDTD](xmldtd.md) node, namespace node, or attribute node as a child raises an exception. If you add a child node to an [NSXMLElement](xmlelement.md) object and that child already has a parent, [NSXMLElement](xmlelement.md) raises an exception; the child must be detached or copied first.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You can subclass `NSXMLElement` if you want element nodes with more specialized attributes or behavior, for example, paragraph and font attributes that specify how the string value of the element should appear.

<a id="Methods-to-Override"></a>

#### Methods to Override

To subclass `NSXMLElement` you need to override the primary initializer, [initWithName:URI:](xmlelement/init%28name_uri_%29-1r286.md), and the methods listed below. In most cases, you need only invoke the superclass implementation, adding any subclass-specific code before or after the invocation, as necessary.

| [addAttribute:](xmlelement/addattribute%28__%29.md) | [removeNamespaceForPrefix:](xmlelement/removenamespace%28forprefix_%29.md) |
| --- | --- |
| [removeAttributeForName:](xmlelement/removeattribute%28forname_%29.md) | [namespaces](xmlelement/namespaces.md) |
| [attributes](xmlelement/attributes.md) | [namespaces](xmlelement/namespaces.md) |
| [attributeForLocalName:URI:](xmlelement/attribute%28forlocalname_uri_%29.md) | [insertChild:atIndex:](xmlelement/insertchild%28__at_%29.md) |
| [attributes](xmlelement/attributes.md) | [removeChildAtIndex:](xmlelement/removechild%28at_%29.md) |
| [addNamespace:](xmlelement/addnamespace%28__%29.md) | [setChildren:](xmlelement/setchildren%28__%29.md) |

`NSXMLElement` implements  [isEqual:](../objectivec/nsobjectprotocol/isequal%28__%29.md) to perform a deep comparison: two [NSXMLDocument](xmldocument.md) objects are not considered equal unless they have the same name, same child nodes, same attributes, and so on. If you want a different standard of comparison, override `isEqual:`.

<a id="Special-Considerations"></a>

#### Special Considerations

Because of the architecture and data model of NSXML, when it parses and processes a source of XML it cannot know about your subclass unless you override the class method [replacementClassForClass:](xmldocument/replacementclass%28for_%29.md) to return your custom class in place of an NSXML class. If your custom class has no direct NSXML counterpart—for example, it is a subclass of `NSXMLNode` that represents CDATA sections—then you can walk the tree after it has been created and insert the new node where appropriate.

Note that you can safely set the root element of the XML document (using the `NSXMLDocument` [setRootElement:](xmldocument/setrootelement%28__%29.md)method) to be an instance of your subclass because this method only checks to see if the added node is of an element kind (`NSXMLElementKind`). These precautions do not apply, of course, if you are creating an XML tree programmatically.

## Topics

### Initializing NSXMLElement Objects

- [initWithName:](xmlelement/init%28name_%29.md): Returns an `NSXMLElement` object initialized with the specified name.
- [initWithName:stringValue:](xmlelement/init%28name_stringvalue_%29.md): Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.
- [initWithName:URI:](xmlelement/init%28name_uri_%29-1r286.md): Returns an `NSXMLElement` object initialized with the specified name and URI.
- [initWithXMLString:error:](xmlelement/init%28xmlstring_%29-7vkg7.md): Returns an `NSXMLElement` object created from a specified string containing XML markup.
- [initWithKind:options:](xmlelement/init%28kind_options_%29.md)

### Obtaining Child Elements

- [elementsForName:](xmlelement/elements%28forname_%29.md): Returns the child element nodes (as `NSXMLElement` objects) of the receiver that have a specified name.
- [elementsForLocalName:URI:](xmlelement/elements%28forlocalname_uri_%29.md): Returns the child element nodes (as `NSXMLElement` objects) of the receiver that are matched with the specified local name and URI.

### Manipulating Child Elements

- [addChild:](xmlelement/addchild%28__%29.md): Adds a child node at the end of the receiver’s current list of children.
- [insertChild:atIndex:](xmlelement/insertchild%28__at_%29.md): Inserts a new child node at a specified location in the receiver’s list of child nodes.
- [insertChildren:atIndex:](xmlelement/insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChildAtIndex:](xmlelement/removechild%28at_%29.md): Removes the child node of the receiver identified by a given index.
- [replaceChildAtIndex:withNode:](xmlelement/replacechild%28at_with_%29.md): Replaces a child node at a specified location with another child node.
- [setChildren:](xmlelement/setchildren%28__%29.md): Sets all child nodes of the receiver at once, replacing any existing children.
- [normalizeAdjacentTextNodesPreservingCDATA:](xmlelement/normalizeadjacenttextnodespreservingcdata%28__%29.md): Coalesces adjacent text nodes of the receiver that you have explicitly added, optionally including CDATA sections.

### Handling Attributes

- [addAttribute:](xmlelement/addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attributeForName:](xmlelement/attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attributeForLocalName:URI:](xmlelement/attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](xmlelement/attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttributeForName:](xmlelement/removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWithDictionary:](xmlelement/setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAsDictionary:](xmlelement/setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.

### Setting Element URI

- [setURI:](nsxmlnode-seturi.md): Sets the URI of the receiver.

### Handling Namespaces

- [addNamespace:](xmlelement/addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaces](xmlelement/namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [namespaceForPrefix:](xmlelement/namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [removeNamespaceForPrefix:](xmlelement/removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolveNamespaceForName:](xmlelement/resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
- [resolvePrefixForNamespaceURI:](xmlelement/resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.

## Relationships

### Inherits From

- [NSXMLNode](xmlnode.md)

## See Also

### Tree-Based Processing

- [NSXMLDTD](xmldtd.md): A representation of a Document Type Definition.
- [NSXMLDTDNode](xmldtdnode.md): A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.
- [NSXMLDocument](xmldocument.md): An XML document as internalized into a logical tree structure.
- [NSXMLNode](xmlnode.md): The nodes in the abstract, logical tree structure that represents an XML document.
