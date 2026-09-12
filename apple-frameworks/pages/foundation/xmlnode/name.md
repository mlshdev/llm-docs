> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/name](https://developer.apple.com/documentation/foundation/xmlnode/name)

# name (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the receiver.

## Declaration

```swift
var name: String? { get set }
```

<a id="return-value"></a>

## Return Value

Returns a string specifying the name of the receiver. May return `nil` if the receiver is not a valid kind of node (see discussion).

<a id="Discussion"></a>

## Discussion

This method is applicable only to `NSXMLNode` objects representing elements, attributes, namespaces, processing instructions, and DTD-declaration nodes. If the receiver is not an object of one of these kinds, this method returns `nil`. For example, in the following construction:

```objc
<title>Chapter One</title>
```

The returned name for the element is “title”. If the name is associated with a namespace, the qualified name is returned. For example, if you create an element with local name “foo” and URI “http://bar.com” and the namespace “xmlns:baz=‘http://bar.com’” is applied to this node, when you invoke this method on the node you get “baz:foo”.

## See Also

### Managing XML Node Objects

- [index](index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [kind](kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [XMLNode.Kind](kind-swift.enum.md).
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [objectValue](objectvalue.md): Returns the object value of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue(\_:resolvingEntities:)](setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
- [uri](uri.md): Returns the URI associated with the receiver.

# name (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * name;
```

<a id="return-value"></a>

## Return Value

Returns a string specifying the name of the receiver. May return `nil` if the receiver is not a valid kind of node (see discussion).

<a id="Discussion"></a>

## Discussion

This method is applicable only to `NSXMLNode` objects representing elements, attributes, namespaces, processing instructions, and DTD-declaration nodes. If the receiver is not an object of one of these kinds, this method returns `nil`. For example, in the following construction:

```objc
<title>Chapter One</title>
```

The returned name for the element is “title”. If the name is associated with a namespace, the qualified name is returned. For example, if you create an element with local name “foo” and URI “http://bar.com” and the namespace “xmlns:baz=‘http://bar.com’” is applied to this node, when you invoke this method on the node you get “baz:foo”.

## See Also

### Managing XML Node Objects

- [index](index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [kind](kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [NSXMLNodeKind](kind-swift.enum.md).
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [objectValue](objectvalue.md): Returns the object value of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setStringValue:resolvingEntities:](setstringvalue%28__resolvingentities_%29.md): Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
- [URI](uri.md): Returns the URI associated with the receiver.
