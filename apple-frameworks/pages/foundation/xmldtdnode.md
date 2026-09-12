> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtdnode](https://developer.apple.com/documentation/foundation/xmldtdnode)

# XMLDTDNode (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.

## Declaration

```swift
class XMLDTDNode
```

<a id="overview"></a>

## Overview

[XMLDTDNode](xmldtdnode.md) objects are the sole children of a [XMLDTD](xmldtd.md) object (possibly along with comment nodes and processing-instruction nodes). They themselves cannot have any children.

[XMLDTDNode](xmldtdnode.md) objects can be of four kinds—element, attribute-list, entity, or notation declaration—and can also be of a subkind, as specified by a [XMLDTDNode.DTDKind](xmldtdnode/dtdkind-swift.enum.md) constant. For example, a DTD entity-declaration node could represent an unparsed entity declaration ([XMLDTDNode.DTDKind.unparsed](xmldtdnode/dtdkind-swift.enum/unparsed.md)) rather than a parameter entity declaration ([XMLDTDNode.DTDKind.parameter](xmldtdnode/dtdkind-swift.enum/parameter.md)). You can use a DTD node’s subkind to help determine how to handle the value of the node.

You can create an [XMLDTDNode](xmldtdnode.md) object with the [init(xmlString:)](xmldtdnode/init%28xmlstring_%29-1dyhd.md) method, the [XMLNode](xmlnode.md) class method [dtdNode(withXMLString:)](xmlnode/dtdnode%28withxmlstring_%29.md), or with the [XMLNode](xmlnode.md) initializer [init(kind:options:)](xmlnode/init%28kind_options_%29.md) (in the latter method supplying the appropriate [XMLNode.Kind](xmlnode/kind-swift.enum.md) constant).

Setting the object value or string value of an [XMLDTDNode](xmldtdnode.md) objects affects different parts of different kinds of declaration. See the related programming topic for more information.

## Topics

### Initializing an NSXMLDTDNode Object

- [init(xmlString:)](xmldtdnode/init%28xmlstring_%29-1dyhd.md): Returns an `NSXMLDTDNode` object initialized with the DTD declaration in a given string.

### Managing the DTD Node Kind

- [dtdKind](xmldtdnode/dtdkind-swift.property.md): Returns the receiver’s DTD kind.

### Managing DTD Identifiers

- [isExternal](xmldtdnode/isexternal.md): True if the system id is set. Valid for entities and notations.
- [notationName](xmldtdnode/notationname.md): Returns the name of the notation associated with the receiver.
- [publicID](xmldtdnode/publicid.md): Returns the public identifier associated with the receiver.
- [systemID](xmldtdnode/systemid.md): Returns the system identifier associated with the receiver.

### Constants

- [XMLDTDNode.DTDKind](xmldtdnode/dtdkind-swift.enum.md): The type defined for the constants that specify the kind and subkind of DTD declaration represented by an `NSXMLDTDNode` object. You set the DTD-node kind using the doc:nsxmldtdnode/1806486-setdtdkind method.
- [DTD Node Kind Constants](dtd_node_kind_constants.md): Constants that specify the kind and subkind of DTD declaration represented by an `NSXMLDTDNode` object. You set the DTD-node kind using the doc:nsxmldtdnode/1806486-setdtdkind method.

### Initializers

- [init()](xmldtdnode/init%28%29.md)
- [init(XMLString:)](xmldtdnode/init%28xmlstring_%29-1bnga.md)
- [init(kind:options:)](xmldtdnode/init%28kind_options_%29.md)

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
- [XMLDocument](xmldocument.md): An XML document as internalized into a logical tree structure.
- [XMLElement](xmlelement.md): The element nodes in an XML tree structure.
- [XMLNode](xmlnode.md): The nodes in the abstract, logical tree structure that represents an XML document.

# NSXMLDTDNode (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.

## Declaration

```objectivec
@interface NSXMLDTDNode : NSXMLNode
```

<a id="overview"></a>

## Overview

[NSXMLDTDNode](xmldtdnode.md) objects are the sole children of a [NSXMLDTD](xmldtd.md) object (possibly along with comment nodes and processing-instruction nodes). They themselves cannot have any children.

[NSXMLDTDNode](xmldtdnode.md) objects can be of four kinds—element, attribute-list, entity, or notation declaration—and can also be of a subkind, as specified by a [NSXMLDTDNodeKind](xmldtdnode/dtdkind-swift.enum.md) constant. For example, a DTD entity-declaration node could represent an unparsed entity declaration ([NSXMLEntityUnparsedKind](xmldtdnode/dtdkind-swift.enum/unparsed.md)) rather than a parameter entity declaration ([NSXMLEntityParameterKind](xmldtdnode/dtdkind-swift.enum/parameter.md)). You can use a DTD node’s subkind to help determine how to handle the value of the node.

You can create an [NSXMLDTDNode](xmldtdnode.md) object with the [initWithXMLString:](xmldtdnode/init%28xmlstring_%29-1dyhd.md) method, the [NSXMLNode](xmlnode.md) class method [DTDNodeWithXMLString:](xmlnode/dtdnode%28withxmlstring_%29.md), or with the [NSXMLNode](xmlnode.md) initializer [initWithKind:options:](xmlnode/init%28kind_options_%29.md) (in the latter method supplying the appropriate [NSXMLNodeKind](xmlnode/kind-swift.enum.md) constant).

Setting the object value or string value of an [NSXMLDTDNode](xmldtdnode.md) objects affects different parts of different kinds of declaration. See the related programming topic for more information.

## Topics

### Initializing an NSXMLDTDNode Object

- [initWithXMLString:](xmldtdnode/init%28xmlstring_%29-1dyhd.md): Returns an `NSXMLDTDNode` object initialized with the DTD declaration in a given string.

### Managing the DTD Node Kind

- [DTDKind](xmldtdnode/dtdkind-swift.property.md): Returns the receiver’s DTD kind.

### Managing DTD Identifiers

- [external](xmldtdnode/isexternal.md): True if the system id is set. Valid for entities and notations.
- [notationName](xmldtdnode/notationname.md): Returns the name of the notation associated with the receiver.
- [publicID](xmldtdnode/publicid.md): Returns the public identifier associated with the receiver.
- [systemID](xmldtdnode/systemid.md): Returns the system identifier associated with the receiver.

### Constants

- [NSXMLDTDNodeKind](xmldtdnode/dtdkind-swift.enum.md): The type defined for the constants that specify the kind and subkind of DTD declaration represented by an `NSXMLDTDNode` object. You set the DTD-node kind using the doc:nsxmldtdnode/1806486-setdtdkind method.
- [DTD Node Kind Constants](dtd_node_kind_constants.md): Constants that specify the kind and subkind of DTD declaration represented by an `NSXMLDTDNode` object. You set the DTD-node kind using the doc:nsxmldtdnode/1806486-setdtdkind method.

### Instance Methods

- [init](xmldtdnode/init%28%29.md)
- [initWithKind:options:](xmldtdnode/init%28kind_options_%29.md)

## Relationships

### Inherits From

- [NSXMLNode](xmlnode.md)

## See Also

### Tree-Based Processing

- [NSXMLDTD](xmldtd.md): A representation of a Document Type Definition.
- [NSXMLDocument](xmldocument.md): An XML document as internalized into a logical tree structure.
- [NSXMLElement](xmlelement.md): The element nodes in an XML tree structure.
- [NSXMLNode](xmlnode.md): The nodes in the abstract, logical tree structure that represents an XML document.
