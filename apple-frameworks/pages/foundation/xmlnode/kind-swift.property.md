> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/kind-swift.property](https://developer.apple.com/documentation/foundation/xmlnode/kind-swift.property)

# kind (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the kind of node the receiver is as a constant of type [XMLNode.Kind](kind-swift.enum.md).

## Declaration

```swift
var kind: XMLNode.Kind { get }
```

<a id="Discussion"></a>

## Discussion

`NSXMLNode` objects can represent documents, elements, attributes, namespaces, text, processing instructions, comments, document type declarations, and specific declarations within DTDs. See Constants for a list of valid NSXMLNodeKind constants

## See Also

### Related Documentation

- [init(kind:)](init%28kind_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind.

### Managing XML Node Objects

- [index](index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](name.md): Returns the name of the receiver.
- [objectValue](objectvalue.md): Returns the object value of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue(\_:resolvingEntities:)](setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
- [uri](uri.md): Returns the URI associated with the receiver.

# kind (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the kind of node the receiver is as a constant of type [NSXMLNodeKind](kind-swift.enum.md).

## Declaration

```objectivec
@property (readonly) NSXMLNodeKind kind;
```

<a id="Discussion"></a>

## Discussion

`NSXMLNode` objects can represent documents, elements, attributes, namespaces, text, processing instructions, comments, document type declarations, and specific declarations within DTDs. See Constants for a list of valid NSXMLNodeKind constants

## See Also

### Related Documentation

- [initWithKind:](init%28kind_%29.md): Returns an `NSXMLNode` instance initialized with the constant indicating node kind.

### Managing XML Node Objects

- [index](index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](name.md): Returns the name of the receiver.
- [objectValue](objectvalue.md): Returns the object value of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue:resolvingEntities:](setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
- [URI](uri.md): Returns the URI associated with the receiver.
