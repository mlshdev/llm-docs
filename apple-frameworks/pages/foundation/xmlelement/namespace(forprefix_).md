> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/namespace(forprefix:)](https://developer.apple.com/documentation/foundation/xmlelement/namespace(forprefix:))

# namespace(forPrefix:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the namespace node with a specified prefix.

## Declaration

```swift
func namespace(forPrefix name: String) -> XMLNode?
```

## Parameters

- `name`: A string specifying a namespace prefix.

<a id="return-value"></a>

## Return Value

An [XMLNode](../xmlnode.md) object of kind [XMLNode.Kind.namespace](../xmlnode/kind-swift.enum/namespace.md) or `nil` if there is no namespace node with that prefix.

## See Also

### Handling Namespaces

- [addNamespace(\_:)](addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaces](namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [removeNamespace(forPrefix:)](removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolveNamespace(forName:)](resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
- [resolvePrefix(forNamespaceURI:)](resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.

# namespaceForPrefix: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the namespace node with a specified prefix.

## Declaration

```objectivec
- (NSXMLNode *) namespaceForPrefix:(NSString *) name;
```

## Parameters

- `name`: A string specifying a namespace prefix.

<a id="return-value"></a>

## Return Value

An [NSXMLNode](../xmlnode.md) object of kind [NSXMLNamespaceKind](../xmlnode/kind-swift.enum/namespace.md) or `nil` if there is no namespace node with that prefix.

## See Also

### Handling Namespaces

- [addNamespace:](addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaces](namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [removeNamespaceForPrefix:](removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolveNamespaceForName:](resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
- [resolvePrefixForNamespaceURI:](resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.
