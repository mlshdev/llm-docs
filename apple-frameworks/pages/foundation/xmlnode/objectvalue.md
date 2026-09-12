> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/objectvalue](https://developer.apple.com/documentation/foundation/xmlnode/objectvalue)

# objectValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the object value of the receiver.

## Declaration

```swift
var objectValue: Any? { get set }
```

<a id="return-value"></a>

## Return Value

The object value of the receiver, which may be the same as the value returned by [stringValue](stringvalue.md). For nodes without content (for example, document nodes), this method returns the string value, or an empty string if there is no string value.

## See Also

### Managing XML Node Objects

- [index](index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [kind](kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [XMLNode.Kind](kind-swift.enum.md).
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](name.md): Returns the name of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue(\_:resolvingEntities:)](setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
- [uri](uri.md): Returns the URI associated with the receiver.

# objectValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the object value of the receiver.

## Declaration

```objectivec
@property (retain, nullable) id objectValue;
```

<a id="return-value"></a>

## Return Value

The object value of the receiver, which may be the same as the value returned by [stringValue](stringvalue.md). For nodes without content (for example, document nodes), this method returns the string value, or an empty string if there is no string value.

## See Also

### Managing XML Node Objects

- [index](index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [kind](kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [NSXMLNodeKind](kind-swift.enum.md).
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](name.md): Returns the name of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue:resolvingEntities:](setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
- [URI](uri.md): Returns the URI associated with the receiver.
