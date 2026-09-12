> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/countkeypath](https://developer.apple.com/documentation/appkit/nstreecontroller/countkeypath)

# countKeyPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key path used to find the number of children for a node.

## Declaration

```swift
var countKeyPath: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Specifying this key path (if the data is available in the model object) can increase performance, but disables insert and remove functionality.

## See Also

### Specifying model attributes

- [childrenKeyPath](childrenkeypath.md): The key path used to find the children in the tree controller’s objects.
- [childrenKeyPath(for:)](childrenkeypath%28for_%29.md): Returns the key path used to find the children in the specified tree node.
- [countKeyPath(for:)](countkeypath%28for_%29.md): Returns the key path that provides the number of children for a specified node.
- [leafKeyPath](leafkeypath.md): The key path used by the tree controller to determine if a node is a leaf key.
- [leafKeyPath(for:)](leafkeypath%28for_%29.md): Returns the key path that specifies whether the node is a leaf node.

# countKeyPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key path used to find the number of children for a node.

## Declaration

```objectivec
@property (copy, nullable) NSString * countKeyPath;
```

<a id="Discussion"></a>

## Discussion

Specifying this key path (if the data is available in the model object) can increase performance, but disables insert and remove functionality.

## See Also

### Specifying model attributes

- [childrenKeyPath](childrenkeypath.md): The key path used to find the children in the tree controller’s objects.
- [childrenKeyPathForNode:](childrenkeypath%28for_%29.md): Returns the key path used to find the children in the specified tree node.
- [countKeyPathForNode:](countkeypath%28for_%29.md): Returns the key path that provides the number of children for a specified node.
- [leafKeyPath](leafkeypath.md): The key path used by the tree controller to determine if a node is a leaf key.
- [leafKeyPathForNode:](leafkeypath%28for_%29.md): Returns the key path that specifies whether the node is a leaf node.
