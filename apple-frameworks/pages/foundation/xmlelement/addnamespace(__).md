> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/addnamespace(_:)](https://developer.apple.com/documentation/foundation/xmlelement/addnamespace(_:))

# addNamespace(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds a namespace node to the receiver.

## Declaration

```swift
func addNamespace(_ aNamespace: XMLNode)
```

## Parameters

- `aNamespace`: An XML node object of kind [XMLNode.Kind.namespace](../xmlnode/kind-swift.enum/namespace.md). If the receiver already has a namespace with the same name, `aNamespace` is not added.

## See Also

### Handling Namespaces

- [namespaces](namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [namespace(forPrefix:)](namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [removeNamespace(forPrefix:)](removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolveNamespace(forName:)](resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
- [resolvePrefix(forNamespaceURI:)](resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.

# addNamespace: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds a namespace node to the receiver.

## Declaration

```objectivec
- (void) addNamespace:(NSXMLNode *) aNamespace;
```

## Parameters

- `aNamespace`: An XML node object of kind [NSXMLNamespaceKind](../xmlnode/kind-swift.enum/namespace.md). If the receiver already has a namespace with the same name, `aNamespace` is not added.

## See Also

### Handling Namespaces

- [namespaces](namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [namespaceForPrefix:](namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [removeNamespaceForPrefix:](removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolveNamespaceForName:](resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
- [resolvePrefixForNamespaceURI:](resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.
