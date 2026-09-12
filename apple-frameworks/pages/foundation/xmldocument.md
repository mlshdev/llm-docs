> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument](https://developer.apple.com/documentation/foundation/xmldocument)

# XMLDocument (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An XML document as internalized into a logical tree structure.

## Declaration

```swift
class XMLDocument
```

## Mentioned In

- [setURI:](nsxmlnode-seturi.md)

<a id="overview"></a>

## Overview

An [XMLDocument](xmldocument.md) object can have multiple child nodes but only one element, the root element. Any other node must be a [XMLNode](xmlnode.md) object representing a comment or a processing instruction. If you attempt to add any other kind of child node to an [XMLDocument](xmldocument.md) object, such as an attribute, namespace, another document object, or an element other than the root, [XMLDocument](xmldocument.md) raises an exception. If you add a valid child node and that object already has a parent, [XMLDocument](xmldocument.md) raises an exception. An [XMLDocument](xmldocument.md) object may also have document-global attributes, such as XML version, character encoding, referenced DTD, and MIME type.

The initializers of the [XMLDocument](xmldocument.md) class read an external source of XML, whether it be a local file or remote website, parse it, and process it into the tree representation. You can also construct an [XMLDocument](xmldocument.md) programmatically. There are accessor methods for getting and setting document attributes, methods for transforming documents using XSLT, a method for dynamically validating a document, and methods for printing out the content of an [XMLDocument](xmldocument.md) as XML, XHTML, HTML, or plain text.

The [XMLDocument](xmldocument.md) class is thread-safe as long as any given instance is used only in one thread.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

<a id="Methods-to-Override"></a>

#### Methods to Override

To subclass `NSXMLDocument` you need to override the primary initializer, [init(data:options:)](xmldocument/init%28data_options_%29.md), and the methods listed below. In most cases, you need only invoke the superclass implementation, adding any subclass-specific code before or after the invocation, as necessary.

- [rootElement()](xmldocument/rootelement%28%29.md)
- [setChildren(\_:)](xmldocument/setchildren%28__%29.md)
- [removeChild(at:)](xmldocument/removechild%28at_%29.md)
- [insertChild(\_:at:)](xmldocument/insertchild%28__at_%29.md)
- [characterEncoding](xmldocument/characterencoding.md)
- [characterEncoding](xmldocument/characterencoding.md)
- [documentContentKind](xmldocument/documentcontentkind.md)
- [documentContentKind](xmldocument/documentcontentkind.md)
- [dtd](xmldocument/dtd.md)
- [mimeType](xmldocument/mimetype.md)
- [isStandalone](xmldocument/isstandalone.md)
- [version](xmldocument/version.md)
- [version](xmldocument/version.md)

By default `NSXMLDocument` implements the `NSObject` [isEqual(\_:)](../objectivec/nsobjectprotocol/isequal%28__%29.md) method to perform a deep comparison: two `NSXMLDocument` objects are not considered equal unless they have the same name, same child nodes, same attributes, and so on. The comparison does not consider the parent node (and hence the node’s location). If you want a different standard of comparison, override `isEqual:`.

<a id="Special-Considerations"></a>

#### Special Considerations

Because of the architecture and data model of NSXML, when it parses and processes a source of XML it cannot know about your subclass unless you override the class method [replacementClass(for:)](xmldocument/replacementclass%28for_%29.md) to return your custom class in place of an `NSXML` class. If your custom class has no direct `NSXML` counterpart—for example, it is a subclass of `NSXMLNode` that represents CDATA sections—then you can walk the tree after it has been created and insert the new node where appropriate.

## Topics

### Initializing NSXMLDocument Objects

- [init(contentsOf:options:)](xmldocument/init%28contentsof_options_%29.md): Initializes and returns an NSXMLDocument object created from the XML or HTML contents of a URL-referenced source
- [init(data:options:)](xmldocument/init%28data_options_%29.md): Initializes and returns an `NSXMLDocument` object created from an [NSData](nsdata.md) object.
- [init(rootElement:)](xmldocument/init%28rootelement_%29.md): Returns an `NSXMLDocument` object initialized with a single child, the root element.
- [init(xmlString:options:)](xmldocument/init%28xmlstring_options_%29-65m2r.md): Initializes and returns an `NSXMLDocument` object created from a string containing XML markup text.
- [replacementClass(for:)](xmldocument/replacementclass%28for_%29.md): Overridden by subclasses to substitute a custom class for an NSXML class that the parser uses to create node instances.

### Managing Document Attributes

- [characterEncoding](xmldocument/characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [documentContentKind](xmldocument/documentcontentkind.md): Sets the kind of output content for the receiver.
- [dtd](xmldocument/dtd.md): Returns an [XMLDTD](xmldtd.md) object representing the internal DTD associated with the receiver.
- [isStandalone](xmldocument/isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [mimeType](xmldocument/mimetype.md): Returns the MIME type for the receiver.
- [version](xmldocument/version.md): Sets the version of the receiver’s XML.

### Setting Document URI

- [setURI:](nsxmlnode-seturi.md): Sets the URI of the receiver.

### Managing the Root Element

- [rootElement()](xmldocument/rootelement%28%29.md): Returns the root element of the receiver.
- [setRootElement(\_:)](xmldocument/setrootelement%28__%29.md): Set the root element of the receiver.

### Adding and Removing Child Nodes

- [addChild(\_:)](xmldocument/addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChild(\_:at:)](xmldocument/insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [insertChildren(\_:at:)](xmldocument/insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [removeChild(at:)](xmldocument/removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [replaceChild(at:with:)](xmldocument/replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
- [setChildren(\_:)](xmldocument/setchildren%28__%29.md): Sets the child nodes of the receiver.

### Transforming a Document Using XSLT

- [object(byApplyingXSLT:arguments:)](xmldocument/object%28byapplyingxslt_arguments_%29.md): Applies the XSLT pattern rules and templates (specified as a data object) to the receiver and returns a document object containing transformed XML or HTML markup.
- [object(byApplyingXSLTString:arguments:)](xmldocument/object%28byapplyingxsltstring_arguments_%29.md): Applies the XSLT pattern rules and templates (specified as a string) to the receiver and returns a document object containing transformed XML or HTML markup.
- [objectByApplyingXSLT(at:arguments:)](xmldocument/objectbyapplyingxslt%28at_arguments_%29.md): Applies the XSLT pattern rules and templates located at a specified URL to the receiver and returns a document object containing transformed XML markup or an [NSData](nsdata.md) object containing plain text, RTF text, and so on.

### Writing a Document as XML Data

- [xmlData](xmldocument/xmldata.md): Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.
- [xmlData(options:)](xmldocument/xmldata%28options_%29.md): Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.

### Validating a Document

- [validate()](xmldocument/validate%28%29.md): Validates the document against the governing schema and returns whether the document conforms to the schema.

### Constants

- [Input and Output Options](input_and_output_options.md): Input and output options specifically intended for `NSXMLDocument` objects.
- [XMLDocument.ContentKind](xmldocument/contentkind.md): Type used to define the kind of document content.
- [Document Content Types](document-content-types.md): Define document types.

### Initializers

- [init()](xmldocument/init%28%29.md)
- [init(XMLString:options:)](xmldocument/init%28xmlstring_options_%29-87dms.md)
- [init(contentsOfURL:options:)](xmldocument/init%28contentsofurl_options_%29.md)

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
- [XMLElement](xmlelement.md): The element nodes in an XML tree structure.
- [XMLNode](xmlnode.md): The nodes in the abstract, logical tree structure that represents an XML document.

# NSXMLDocument (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An XML document as internalized into a logical tree structure.

## Declaration

```objectivec
@interface NSXMLDocument : NSXMLNode
```

## Mentioned In

- [setURI:](nsxmlnode-seturi.md)

<a id="overview"></a>

## Overview

An [NSXMLDocument](xmldocument.md) object can have multiple child nodes but only one element, the root element. Any other node must be a [NSXMLNode](xmlnode.md) object representing a comment or a processing instruction. If you attempt to add any other kind of child node to an [NSXMLDocument](xmldocument.md) object, such as an attribute, namespace, another document object, or an element other than the root, [NSXMLDocument](xmldocument.md) raises an exception. If you add a valid child node and that object already has a parent, [NSXMLDocument](xmldocument.md) raises an exception. An [NSXMLDocument](xmldocument.md) object may also have document-global attributes, such as XML version, character encoding, referenced DTD, and MIME type.

The initializers of the [NSXMLDocument](xmldocument.md) class read an external source of XML, whether it be a local file or remote website, parse it, and process it into the tree representation. You can also construct an [NSXMLDocument](xmldocument.md) programmatically. There are accessor methods for getting and setting document attributes, methods for transforming documents using XSLT, a method for dynamically validating a document, and methods for printing out the content of an [NSXMLDocument](xmldocument.md) as XML, XHTML, HTML, or plain text.

The [NSXMLDocument](xmldocument.md) class is thread-safe as long as any given instance is used only in one thread.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

<a id="Methods-to-Override"></a>

#### Methods to Override

To subclass `NSXMLDocument` you need to override the primary initializer, [initWithData:options:error:](xmldocument/init%28data_options_%29.md), and the methods listed below. In most cases, you need only invoke the superclass implementation, adding any subclass-specific code before or after the invocation, as necessary.

- [rootElement](xmldocument/rootelement%28%29.md)
- [setChildren:](xmldocument/setchildren%28__%29.md)
- [removeChildAtIndex:](xmldocument/removechild%28at_%29.md)
- [insertChild:atIndex:](xmldocument/insertchild%28__at_%29.md)
- [characterEncoding](xmldocument/characterencoding.md)
- [characterEncoding](xmldocument/characterencoding.md)
- [documentContentKind](xmldocument/documentcontentkind.md)
- [documentContentKind](xmldocument/documentcontentkind.md)
- [DTD](xmldocument/dtd.md)
- [MIMEType](xmldocument/mimetype.md)
- [standalone](xmldocument/isstandalone.md)
- [version](xmldocument/version.md)
- [version](xmldocument/version.md)

By default `NSXMLDocument` implements the `NSObject` [isEqual:](../objectivec/nsobjectprotocol/isequal%28__%29.md) method to perform a deep comparison: two `NSXMLDocument` objects are not considered equal unless they have the same name, same child nodes, same attributes, and so on. The comparison does not consider the parent node (and hence the node’s location). If you want a different standard of comparison, override `isEqual:`.

<a id="Special-Considerations"></a>

#### Special Considerations

Because of the architecture and data model of NSXML, when it parses and processes a source of XML it cannot know about your subclass unless you override the class method [replacementClassForClass:](xmldocument/replacementclass%28for_%29.md) to return your custom class in place of an `NSXML` class. If your custom class has no direct `NSXML` counterpart—for example, it is a subclass of `NSXMLNode` that represents CDATA sections—then you can walk the tree after it has been created and insert the new node where appropriate.

## Topics

### Initializing NSXMLDocument Objects

- [initWithContentsOfURL:options:error:](xmldocument/init%28contentsof_options_%29.md): Initializes and returns an NSXMLDocument object created from the XML or HTML contents of a URL-referenced source
- [initWithData:options:error:](xmldocument/init%28data_options_%29.md): Initializes and returns an `NSXMLDocument` object created from an [NSData](nsdata.md) object.
- [initWithRootElement:](xmldocument/init%28rootelement_%29.md): Returns an `NSXMLDocument` object initialized with a single child, the root element.
- [initWithXMLString:options:error:](xmldocument/init%28xmlstring_options_%29-65m2r.md): Initializes and returns an `NSXMLDocument` object created from a string containing XML markup text.
- [replacementClassForClass:](xmldocument/replacementclass%28for_%29.md): Overridden by subclasses to substitute a custom class for an NSXML class that the parser uses to create node instances.

### Managing Document Attributes

- [characterEncoding](xmldocument/characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [documentContentKind](xmldocument/documentcontentkind.md): Sets the kind of output content for the receiver.
- [DTD](xmldocument/dtd.md): Returns an [NSXMLDTD](xmldtd.md) object representing the internal DTD associated with the receiver.
- [standalone](xmldocument/isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [MIMEType](xmldocument/mimetype.md): Returns the MIME type for the receiver.
- [version](xmldocument/version.md): Sets the version of the receiver’s XML.

### Setting Document URI

- [setURI:](nsxmlnode-seturi.md): Sets the URI of the receiver.

### Managing the Root Element

- [rootElement](xmldocument/rootelement%28%29.md): Returns the root element of the receiver.
- [setRootElement:](xmldocument/setrootelement%28__%29.md): Set the root element of the receiver.

### Adding and Removing Child Nodes

- [addChild:](xmldocument/addchild%28__%29.md): Adds a child node after the last of the receiver’s existing children.
- [insertChild:atIndex:](xmldocument/insertchild%28__at_%29.md): Inserts a node object at specified position in the receiver’s array of children.
- [insertChildren:atIndex:](xmldocument/insertchildren%28__at_%29.md): Inserts an array of children at a specified position in the receiver’s array of children.
- [removeChildAtIndex:](xmldocument/removechild%28at_%29.md): Removes the child node of the receiver located at a specified position in its array of children.
- [replaceChildAtIndex:withNode:](xmldocument/replacechild%28at_with_%29.md): Replaces the child node of the receiver located at a specified position in its array of children with another node.
- [setChildren:](xmldocument/setchildren%28__%29.md): Sets the child nodes of the receiver.

### Transforming a Document Using XSLT

- [objectByApplyingXSLT:arguments:error:](xmldocument/object%28byapplyingxslt_arguments_%29.md): Applies the XSLT pattern rules and templates (specified as a data object) to the receiver and returns a document object containing transformed XML or HTML markup.
- [objectByApplyingXSLTString:arguments:error:](xmldocument/object%28byapplyingxsltstring_arguments_%29.md): Applies the XSLT pattern rules and templates (specified as a string) to the receiver and returns a document object containing transformed XML or HTML markup.
- [objectByApplyingXSLTAtURL:arguments:error:](xmldocument/objectbyapplyingxslt%28at_arguments_%29.md): Applies the XSLT pattern rules and templates located at a specified URL to the receiver and returns a document object containing transformed XML markup or an [NSData](nsdata.md) object containing plain text, RTF text, and so on.

### Writing a Document as XML Data

- [XMLData](xmldocument/xmldata.md): Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.
- [XMLDataWithOptions:](xmldocument/xmldata%28options_%29.md): Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.

### Validating a Document

- [validateAndReturnError:](xmldocument/validate%28%29.md): Validates the document against the governing schema and returns whether the document conforms to the schema.

### Constants

- [Input and Output Options](input_and_output_options.md): Input and output options specifically intended for `NSXMLDocument` objects.
- [NSXMLDocumentContentKind](xmldocument/contentkind.md): Type used to define the kind of document content.
- [Document Content Types](document-content-types.md): Define document types.

### Instance Variables

- [padding](nsxmldocument/padding.md)

### Instance Methods

- [init](xmldocument/init%28%29.md)

## Relationships

### Inherits From

- [NSXMLNode](xmlnode.md)

## See Also

### Tree-Based Processing

- [NSXMLDTD](xmldtd.md): A representation of a Document Type Definition.
- [NSXMLDTDNode](xmldtdnode.md): A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.
- [NSXMLElement](xmlelement.md): The element nodes in an XML tree structure.
- [NSXMLNode](xmlnode.md): The nodes in the abstract, logical tree structure that represents an XML document.
