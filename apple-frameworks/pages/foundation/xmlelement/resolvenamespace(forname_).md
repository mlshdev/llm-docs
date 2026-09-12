> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/resolvenamespace(forname:)](https://developer.apple.com/documentation/foundation/xmlelement/resolvenamespace(forname:))

# resolveNamespace(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the namespace node with the prefix matching the given qualified name.

## Declaration

```swift
func resolveNamespace(forName name: String) -> XMLNode?
```

## Parameters

- `name`: A string that is the qualified name for a namespace (a qualified name is prefix plus local name).

<a id="return-value"></a>

## Return Value

An [XMLNode](../xmlnode.md) object of kind [XMLNode.Kind.namespace](../xmlnode/kind-swift.enum/namespace.md) or `nil` if there is no matching namespace node.

<a id="Discussion"></a>

## Discussion

The method looks in the entire namespace chain for the prefix.

## See Also

### Handling Namespaces

- [addNamespace(\_:)](addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaces](namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [namespace(forPrefix:)](namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [removeNamespace(forPrefix:)](removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolvePrefix(forNamespaceURI:)](resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.

# resolveNamespaceForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the namespace node with the prefix matching the given qualified name.

## Declaration

```objectivec
- (NSXMLNode *) resolveNamespaceForName:(NSString *) name;
```

## Parameters

- `name`: A string that is the qualified name for a namespace (a qualified name is prefix plus local name).

<a id="return-value"></a>

## Return Value

An [NSXMLNode](../xmlnode.md) object of kind [NSXMLNamespaceKind](../xmlnode/kind-swift.enum/namespace.md) or `nil` if there is no matching namespace node.

<a id="Discussion"></a>

## Discussion

The method looks in the entire namespace chain for the prefix.

## See Also

### Handling Namespaces

- [addNamespace:](addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaces](namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [namespaceForPrefix:](namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [removeNamespaceForPrefix:](removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolvePrefixForNamespaceURI:](resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.
