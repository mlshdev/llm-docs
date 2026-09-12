> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/childrenkeypath](https://developer.apple.com/documentation/appkit/nstreecontroller/childrenkeypath)

# childrenKeyPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key path used to find the children in the tree controller’s objects.

## Declaration

```swift
var childrenKeyPath: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`.

## See Also

### Specifying model attributes

- [childrenKeyPath(for:)](childrenkeypath%28for_%29.md): Returns the key path used to find the children in the specified tree node.
- [countKeyPath](countkeypath.md): The key path used to find the number of children for a node.
- [countKeyPath(for:)](countkeypath%28for_%29.md): Returns the key path that provides the number of children for a specified node.
- [leafKeyPath](leafkeypath.md): The key path used by the tree controller to determine if a node is a leaf key.
- [leafKeyPath(for:)](leafkeypath%28for_%29.md): Returns the key path that specifies whether the node is a leaf node.

# childrenKeyPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key path used to find the children in the tree controller’s objects.

## Declaration

```objectivec
@property (copy, nullable) NSString * childrenKeyPath;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`.

## See Also

### Specifying model attributes

- [childrenKeyPathForNode:](childrenkeypath%28for_%29.md): Returns the key path used to find the children in the specified tree node.
- [countKeyPath](countkeypath.md): The key path used to find the number of children for a node.
- [countKeyPathForNode:](countkeypath%28for_%29.md): Returns the key path that provides the number of children for a specified node.
- [leafKeyPath](leafkeypath.md): The key path used by the tree controller to determine if a node is a leaf key.
- [leafKeyPathForNode:](leafkeypath%28for_%29.md): Returns the key path that specifies whether the node is a leaf node.
