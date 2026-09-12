> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/index](https://developer.apple.com/documentation/foundation/xmlnode/index)

# index (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the index of the receiver identifying its position relative to its sibling nodes.

## Declaration

```swift
var index: Int { get }
```

<a id="return-value"></a>

## Return Value

An integer that is the index of the receiver relative to its sibling nodes.

<a id="Discussion"></a>

## Discussion

The first child node of a parent has an index of zero.

## See Also

### Related Documentation

- [child(at:)](child%28at_%29.md): Returns the child node of the receiver at the specified location.

### Managing XML Node Objects

- [kind](kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [XMLNode.Kind](kind-swift.enum.md).
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](name.md): Returns the name of the receiver.
- [objectValue](objectvalue.md): Returns the object value of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue(\_:resolvingEntities:)](setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
- [uri](uri.md): Returns the URI associated with the receiver.

# index (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the index of the receiver identifying its position relative to its sibling nodes.

## Declaration

```objectivec
@property (readonly) NSUInteger index;
```

<a id="return-value"></a>

## Return Value

An integer that is the index of the receiver relative to its sibling nodes.

<a id="Discussion"></a>

## Discussion

The first child node of a parent has an index of zero.

## See Also

### Related Documentation

- [childAtIndex:](child%28at_%29.md): Returns the child node of the receiver at the specified location.

### Managing XML Node Objects

- [kind](kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [NSXMLNodeKind](kind-swift.enum.md).
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](name.md): Returns the name of the receiver.
- [objectValue](objectvalue.md): Returns the object value of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue:resolvingEntities:](setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
- [URI](uri.md): Returns the URI associated with the receiver.
