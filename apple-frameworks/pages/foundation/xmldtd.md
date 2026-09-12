> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd](https://developer.apple.com/documentation/foundation/xmldtd)

# XMLDTD (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A representation of a Document Type Definition.

## Declaration

```swift
class XMLDTD
```

<a id="overview"></a>

## Overview

An instance of the [XMLDTD](xmldtd.md) class is held as a property of an [XMLDocument](xmldocument.md) instance, accessed through the [XMLDocument](xmldocument.md) property [dtd](xmldocument/dtd.md).

In the data model, an [XMLDTD](xmldtd.md) object is conceptually similar to namespace and attribute nodes: it is not considered to be a child of the [XMLDocument](xmldocument.md) object although it is closely associated with it. It is at the “root” of a shallow tree consisting primarily of nodes representing DTD declarations. Acceptable child nodes are instances of the [XMLDTDNode](xmldtdnode.md) class as well as [XMLNode](xmlnode.md) objects representing comment nodes and processing-instruction nodes.

You create an `NSXMLDTD` object in one of three ways:

- By processing an XML document with its own internal (in-line) DTD
- By process a standalone (external) DTD
- Programmatically

Once an [XMLDTD](xmldtd.md) instance is in place, you can add, remove, and change the [XMLDTDNode](xmldtdnode.md) objects representing various DTD declarations. When you write the document out as XML, the new or modified internal DTD is included (assuming you set the DTD in the [XMLDocument](xmldocument.md) instance). You may also programmatically create an external DTD and write that out to its own file.

## Topics

### Initializing an NSXMLDTD Object

- [init(contentsOf:options:)](xmldtd/init%28contentsof_options_%29.md): Initializes and returns an `NSXMLDTD` object created from the DTD declarations in a URL-referenced source.
- [init(data:options:)](xmldtd/init%28data_options_%29.md): Initializes and returns an `NSXMLDTD` object created from the DTD declarations encapsulated in an [NSData](nsdata.md) object

### Managing DTD Identifiers

- [publicID](xmldtd/publicid.md): Returns the receiver’s public identifier.
- [systemID](xmldtd/systemid.md): Returns the receiver’s system identifier.

### Manipulating Child Nodes

- [addChild(\_:)](xmldtd/addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChild(\_:at:)](xmldtd/insertchild%28__at_%29.md): Inserts a child node in the receiver’s list of children at a specific location in the list.
- [insertChildren(\_:at:)](xmldtd/insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChild(at:)](xmldtd/removechild%28at_%29.md): Removes the child node at a particular location in the receiver’s list of children.
- [replaceChild(at:with:)](xmldtd/replacechild%28at_with_%29.md): Replaces a child at a particular index with another child.
- [setChildren(\_:)](xmldtd/setchildren%28__%29.md): Removes all existing children of the receiver and replaces them with an array of new child nodes.

### Getting DTD Nodes by Name

- [predefinedEntityDeclaration(forName:)](xmldtd/predefinedentitydeclaration%28forname_%29.md): Returns a DTD node representing the predefined entity declaration with the specified name.
- [elementDeclaration(forName:)](xmldtd/elementdeclaration%28forname_%29.md): Returns the DTD node representing an element declaration for a specified element.
- [attributeDeclaration(forName:elementName:)](xmldtd/attributedeclaration%28forname_elementname_%29.md): Returns the DTD node representing an attribute-list declaration for a given attribute and its element.
- [entityDeclaration(forName:)](xmldtd/entitydeclaration%28forname_%29.md): Returns the DTD node representing the entity declaration for a specified entity.
- [notationDeclaration(forName:)](xmldtd/notationdeclaration%28forname_%29.md): Returns the DTD node representing the notation declaration identified by the specified notation name.

### Initializers

- [init()](xmldtd/init%28%29.md)
- [init(contentsOfURL:options:)](xmldtd/init%28contentsofurl_options_%29.md)

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

- [XMLDTDNode](xmldtdnode.md): A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.
- [XMLDocument](xmldocument.md): An XML document as internalized into a logical tree structure.
- [XMLElement](xmlelement.md): The element nodes in an XML tree structure.
- [XMLNode](xmlnode.md): The nodes in the abstract, logical tree structure that represents an XML document.

# NSXMLDTD (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A representation of a Document Type Definition.

## Declaration

```objectivec
@interface NSXMLDTD : NSXMLNode
```

<a id="overview"></a>

## Overview

An instance of the [NSXMLDTD](xmldtd.md) class is held as a property of an [NSXMLDocument](xmldocument.md) instance, accessed through the [NSXMLDocument](xmldocument.md) property [DTD](xmldocument/dtd.md).

In the data model, an [NSXMLDTD](xmldtd.md) object is conceptually similar to namespace and attribute nodes: it is not considered to be a child of the [NSXMLDocument](xmldocument.md) object although it is closely associated with it. It is at the “root” of a shallow tree consisting primarily of nodes representing DTD declarations. Acceptable child nodes are instances of the [NSXMLDTDNode](xmldtdnode.md) class as well as [NSXMLNode](xmlnode.md) objects representing comment nodes and processing-instruction nodes.

You create an `NSXMLDTD` object in one of three ways:

- By processing an XML document with its own internal (in-line) DTD
- By process a standalone (external) DTD
- Programmatically

Once an [NSXMLDTD](xmldtd.md) instance is in place, you can add, remove, and change the [NSXMLDTDNode](xmldtdnode.md) objects representing various DTD declarations. When you write the document out as XML, the new or modified internal DTD is included (assuming you set the DTD in the [NSXMLDocument](xmldocument.md) instance). You may also programmatically create an external DTD and write that out to its own file.

## Topics

### Initializing an NSXMLDTD Object

- [initWithContentsOfURL:options:error:](xmldtd/init%28contentsof_options_%29.md): Initializes and returns an `NSXMLDTD` object created from the DTD declarations in a URL-referenced source.
- [initWithData:options:error:](xmldtd/init%28data_options_%29.md): Initializes and returns an `NSXMLDTD` object created from the DTD declarations encapsulated in an [NSData](nsdata.md) object

### Managing DTD Identifiers

- [publicID](xmldtd/publicid.md): Returns the receiver’s public identifier.
- [systemID](xmldtd/systemid.md): Returns the receiver’s system identifier.

### Manipulating Child Nodes

- [addChild:](xmldtd/addchild%28__%29.md): Adds a child node to the end of the list of existing children.
- [insertChild:atIndex:](xmldtd/insertchild%28__at_%29.md): Inserts a child node in the receiver’s list of children at a specific location in the list.
- [insertChildren:atIndex:](xmldtd/insertchildren%28__at_%29.md): Inserts an array of child nodes at a specified location in the receiver’s list of children.
- [removeChildAtIndex:](xmldtd/removechild%28at_%29.md): Removes the child node at a particular location in the receiver’s list of children.
- [replaceChildAtIndex:withNode:](xmldtd/replacechild%28at_with_%29.md): Replaces a child at a particular index with another child.
- [setChildren:](xmldtd/setchildren%28__%29.md): Removes all existing children of the receiver and replaces them with an array of new child nodes.

### Getting DTD Nodes by Name

- [predefinedEntityDeclarationForName:](xmldtd/predefinedentitydeclaration%28forname_%29.md): Returns a DTD node representing the predefined entity declaration with the specified name.
- [elementDeclarationForName:](xmldtd/elementdeclaration%28forname_%29.md): Returns the DTD node representing an element declaration for a specified element.
- [attributeDeclarationForName:elementName:](xmldtd/attributedeclaration%28forname_elementname_%29.md): Returns the DTD node representing an attribute-list declaration for a given attribute and its element.
- [entityDeclarationForName:](xmldtd/entitydeclaration%28forname_%29.md): Returns the DTD node representing the entity declaration for a specified entity.
- [notationDeclarationForName:](xmldtd/notationdeclaration%28forname_%29.md): Returns the DTD node representing the notation declaration identified by the specified notation name.

### Instance Methods

- [initWithKind:options:](nsxmldtd/initwithkind_options_.md)
- [init](xmldtd/init%28%29.md)

## Relationships

### Inherits From

- [NSXMLNode](xmlnode.md)

## See Also

### Tree-Based Processing

- [NSXMLDTDNode](xmldtdnode.md): A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.
- [NSXMLDocument](xmldocument.md): An XML document as internalized into a logical tree structure.
- [NSXMLElement](xmlelement.md): The element nodes in an XML tree structure.
- [NSXMLNode](xmlnode.md): The nodes in the abstract, logical tree structure that represents an XML document.
