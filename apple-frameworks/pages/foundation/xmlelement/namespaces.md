> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/namespaces](https://developer.apple.com/documentation/foundation/xmlelement/namespaces)

# namespaces (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.

## Declaration

```swift
var namespaces: [XMLNode]? { get set }
```

## Parameters

- `namespaces`: An array of [XMLNode](../xmlnode.md) objects of kind [XMLNode.Kind.namespace](../xmlnode/kind-swift.enum/namespace.md).  If there are namespace nodes with the same prefix, the first attribute with that prefix is used. Send this message with `namespaces` as `nil` to remove all namespace nodes.

## See Also

### Handling Namespaces

- [addNamespace(\_:)](addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespace(forPrefix:)](namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [removeNamespace(forPrefix:)](removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolveNamespace(forName:)](resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
- [resolvePrefix(forNamespaceURI:)](resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.

# namespaces (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSXMLNode *> * namespaces;
```

## Parameters

- `namespaces`: An array of [NSXMLNode](../xmlnode.md) objects of kind [NSXMLNamespaceKind](../xmlnode/kind-swift.enum/namespace.md).  If there are namespace nodes with the same prefix, the first attribute with that prefix is used. Send this message with `namespaces` as `nil` to remove all namespace nodes.

## See Also

### Handling Namespaces

- [addNamespace:](addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaceForPrefix:](namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [removeNamespaceForPrefix:](removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolveNamespaceForName:](resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
- [resolvePrefixForNamespaceURI:](resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.
