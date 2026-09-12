> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/resolveprefix(fornamespaceuri:)](https://developer.apple.com/documentation/foundation/xmlelement/resolveprefix(fornamespaceuri:))

# resolvePrefix(forNamespaceURI:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the prefix associated with the specified URI.

## Declaration

```swift
func resolvePrefix(forNamespaceURI namespaceURI: String) -> String?
```

## Parameters

- `namespaceURI`: A string identifying the URI associated with the namespace.

<a id="return-value"></a>

## Return Value

A string that is the matching prefix or `nil` if it finds no matching prefix.

<a id="Discussion"></a>

## Discussion

The method looks in the entire namespace chain for the URI.

## See Also

### Handling Namespaces

- [addNamespace(\_:)](addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaces](namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [namespace(forPrefix:)](namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [removeNamespace(forPrefix:)](removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolveNamespace(forName:)](resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.

# resolvePrefixForNamespaceURI: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the prefix associated with the specified URI.

## Declaration

```objectivec
- (NSString *) resolvePrefixForNamespaceURI:(NSString *) namespaceURI;
```

## Parameters

- `namespaceURI`: A string identifying the URI associated with the namespace.

<a id="return-value"></a>

## Return Value

A string that is the matching prefix or `nil` if it finds no matching prefix.

<a id="Discussion"></a>

## Discussion

The method looks in the entire namespace chain for the URI.

## See Also

### Handling Namespaces

- [addNamespace:](addnamespace%28__%29.md): Adds a namespace node to the receiver.
- [namespaces](namespaces.md): Sets all of the namespace nodes of the receiver at once, replacing any existing namespace nodes.
- [namespaceForPrefix:](namespace%28forprefix_%29.md): Returns the namespace node with a specified prefix.
- [removeNamespaceForPrefix:](removenamespace%28forprefix_%29.md): Removes a namespace node that is identified by a given prefix.
- [resolveNamespaceForName:](resolvenamespace%28forname_%29.md): Returns the namespace node with the prefix matching the given qualified name.
