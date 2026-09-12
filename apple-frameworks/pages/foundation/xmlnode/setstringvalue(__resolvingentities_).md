> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/setstringvalue(_:resolvingentities:)](https://developer.apple.com/documentation/foundation/xmlnode/setstringvalue(_:resolvingentities:))

# setStringValue(\_:resolvingEntities:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.

## Declaration

```swift
func setStringValue(_ string: String, resolvingEntities resolve: Bool)
```

## Parameters

- `string`: A string to assign as the value of the receiver.
- `resolve`: [true](https://developer.apple.com/documentation/swift/true) to resolve character references, predefined entities, and user-defined entities as declared in the associated DTD; [false](https://developer.apple.com/documentation/swift/false) otherwise. Namespace and processing-instruction nodes have their entities resolved even if `resolve` is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

User-defined entities not declared in the DTD remain in their unresolved form. This method can only be invoked on `NSXMLNode` objects that may have content, specifically elements, attributes, namespaces, processing instructions, text, and DTD-declaration nodes. Setting the string value of a node object removes all existing children, including processing instructions and comments. Setting the string value of an element -node object creates a text node as the sole child.

## See Also

### Managing XML Node Objects

- [index](index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [kind](kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [XMLNode.Kind](kind-swift.enum.md).
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](name.md): Returns the name of the receiver.
- [objectValue](objectvalue.md): Returns the object value of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
- [uri](uri.md): Returns the URI associated with the receiver.

# setStringValue:resolvingEntities: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the content of the receiver as a string value and, optionally, resolves character references, predefined entities, and user-defined entities as declared in the associated DTD.

## Declaration

```objectivec
- (void) setStringValue:(NSString *) string resolvingEntities:(BOOL) resolve;
```

## Parameters

- `string`: A string to assign as the value of the receiver.
- `resolve`: [true](https://developer.apple.com/documentation/swift/true) to resolve character references, predefined entities, and user-defined entities as declared in the associated DTD; [false](https://developer.apple.com/documentation/swift/false) otherwise. Namespace and processing-instruction nodes have their entities resolved even if `resolve` is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

User-defined entities not declared in the DTD remain in their unresolved form. This method can only be invoked on `NSXMLNode` objects that may have content, specifically elements, attributes, namespaces, processing instructions, text, and DTD-declaration nodes. Setting the string value of a node object removes all existing children, including processing instructions and comments. Setting the string value of an element -node object creates a text node as the sole child.

## See Also

### Managing XML Node Objects

- [index](index.md): Returns the index of the receiver identifying its position relative to its sibling nodes.
- [kind](kind-swift.property.md): Returns the kind of node the receiver is as a constant of type [NSXMLNodeKind](kind-swift.enum.md).
- [level](level.md): Returns the nesting level of the receiver within the tree hierarchy.
- [name](name.md): Returns the name of the receiver.
- [objectValue](objectvalue.md): Returns the object value of the receiver.
- [stringValue](stringvalue.md): Returns the content of the receiver as a string value.
- [setURI:](../nsxmlnode-seturi.md): Sets the URI of the receiver.
- [URI](uri.md): Returns the URI associated with the receiver.
