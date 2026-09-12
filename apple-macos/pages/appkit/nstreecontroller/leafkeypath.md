> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/leafkeypath](https://developer.apple.com/documentation/appkit/nstreecontroller/leafkeypath)

# leafKeyPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key path used by the tree controller to determine if a node is a leaf key.

## Declaration

```swift
var leafKeyPath: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Specifying a key path for this property is optional. If the tree controller is able to determine that a node is a leaf node, it can disable inserting or adding children to those nodes.

## See Also

### Specifying model attributes

- [childrenKeyPath](childrenkeypath.md): The key path used to find the children in the tree controller’s objects.
- [childrenKeyPath(for:)](childrenkeypath%28for_%29.md): Returns the key path used to find the children in the specified tree node.
- [countKeyPath](countkeypath.md): The key path used to find the number of children for a node.
- [countKeyPath(for:)](countkeypath%28for_%29.md): Returns the key path that provides the number of children for a specified node.
- [leafKeyPath(for:)](leafkeypath%28for_%29.md): Returns the key path that specifies whether the node is a leaf node.

# leafKeyPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key path used by the tree controller to determine if a node is a leaf key.

## Declaration

```objectivec
@property (copy, nullable) NSString * leafKeyPath;
```

<a id="Discussion"></a>

## Discussion

Specifying a key path for this property is optional. If the tree controller is able to determine that a node is a leaf node, it can disable inserting or adding children to those nodes.

## See Also

### Specifying model attributes

- [childrenKeyPath](childrenkeypath.md): The key path used to find the children in the tree controller’s objects.
- [childrenKeyPathForNode:](childrenkeypath%28for_%29.md): Returns the key path used to find the children in the specified tree node.
- [countKeyPath](countkeypath.md): The key path used to find the number of children for a node.
- [countKeyPathForNode:](countkeypath%28for_%29.md): Returns the key path that provides the number of children for a specified node.
- [leafKeyPathForNode:](leafkeypath%28for_%29.md): Returns the key path that specifies whether the node is a leaf node.
