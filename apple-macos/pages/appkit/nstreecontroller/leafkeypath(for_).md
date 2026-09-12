> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/leafkeypath(for:)](https://developer.apple.com/documentation/appkit/nstreecontroller/leafkeypath(for:))

# leafKeyPath(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the key path that specifies whether the node is a leaf node.

## Declaration

```swift
func leafKeyPath(for node: NSTreeNode) -> String?
```

## Parameters

- `node`: A tree node in the tree controller’s content.

<a id="return-value"></a>

## Return Value

A string containing the key path in `node` that specifies that the node is a leaf node.

## See Also

### Specifying model attributes

- [childrenKeyPath](childrenkeypath.md): The key path used to find the children in the tree controller’s objects.
- [childrenKeyPath(for:)](childrenkeypath%28for_%29.md): Returns the key path used to find the children in the specified tree node.
- [countKeyPath](countkeypath.md): The key path used to find the number of children for a node.
- [countKeyPath(for:)](countkeypath%28for_%29.md): Returns the key path that provides the number of children for a specified node.
- [leafKeyPath](leafkeypath.md): The key path used by the tree controller to determine if a node is a leaf key.

# leafKeyPathForNode: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the key path that specifies whether the node is a leaf node.

## Declaration

```objectivec
- (NSString *) leafKeyPathForNode:(NSTreeNode *) node;
```

## Parameters

- `node`: A tree node in the tree controller’s content.

<a id="return-value"></a>

## Return Value

A string containing the key path in `node` that specifies that the node is a leaf node.

## See Also

### Specifying model attributes

- [childrenKeyPath](childrenkeypath.md): The key path used to find the children in the tree controller’s objects.
- [childrenKeyPathForNode:](childrenkeypath%28for_%29.md): Returns the key path used to find the children in the specified tree node.
- [countKeyPath](countkeypath.md): The key path used to find the number of children for a node.
- [countKeyPathForNode:](countkeypath%28for_%29.md): Returns the key path that provides the number of children for a specified node.
- [leafKeyPath](leafkeypath.md): The key path used by the tree controller to determine if a node is a leaf key.
