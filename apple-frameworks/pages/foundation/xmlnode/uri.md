> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/uri](https://developer.apple.com/documentation/foundation/xmlnode/uri)

# uri (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the URI associated with the receiver.

## Declaration

```swift
var uri: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A node’s URI is derived from its namespace or a document’s URI; for documents, the URI comes either from the parsed XML or is explicitly set. You cannot change the URI for a particular node other for than a namespace or document node.

## See Also

### Managing XML Node Objects

- [index](index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [kind](kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [XMLNode.Kind](kind-swift.enum.md).
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](name.md): Returns the name of the receiver.
- [objectValue](objectvalue.md): Returns the object value of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue(\_:resolvingEntities:)](setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.

# URI (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the URI associated with the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * URI;
```

<a id="Discussion"></a>

## Discussion

A node’s URI is derived from its namespace or a document’s URI; for documents, the URI comes either from the parsed XML or is explicitly set. You cannot change the URI for a particular node other for than a namespace or document node.

## See Also

### Managing XML Node Objects

- [index](index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [kind](kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [NSXMLNodeKind](kind-swift.enum.md).
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](name.md): Returns the name of the receiver.
- [objectValue](objectvalue.md): Returns the object value of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue:resolvingEntities:](setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
