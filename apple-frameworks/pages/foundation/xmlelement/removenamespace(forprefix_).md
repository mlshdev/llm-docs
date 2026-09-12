> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/removenamespace(forprefix:)](https://developer.apple.com/documentation/foundation/xmlelement/removenamespace(forprefix:))

# removeNamespace(forPrefix:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes a namespace node that is identified by a given prefix.

## Declaration

```swift
func removeNamespace(forPrefix name: String)
```

## Parameters

- `name`: A string that is the prefix for a namespace.

<a id="Discussion"></a>

## Discussion

The removed XML node object is removed.

## See Also

### Handling Namespaces

- [addNamespace(\_:)](addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaces](namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [namespace(forPrefix:)](namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [resolveNamespace(forName:)](resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
- [resolvePrefix(forNamespaceURI:)](resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.

# removeNamespaceForPrefix: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes a namespace node that is identified by a given prefix.

## Declaration

```objectivec
- (void) removeNamespaceForPrefix:(NSString *) name;
```

## Parameters

- `name`: A string that is the prefix for a namespace.

<a id="Discussion"></a>

## Discussion

The removed XML node object is removed.

## See Also

### Handling Namespaces

- [addNamespace:](addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaces](namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [namespaceForPrefix:](namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [resolveNamespaceForName:](resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
- [resolvePrefixForNamespaceURI:](resolveprefix%28fornamespaceuri_%29.md): Returns the prefix associated with the specified URI.
