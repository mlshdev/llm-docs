> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskview/anchor(for:)](https://developer.apple.com/documentation/arkit/arskview/anchor(for:))

# anchor(for:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Returns the AR anchor associated with the specified SpriteKit node, if any.

## Declaration

```swift
func anchor(for node: SKNode) -> ARAnchor?
```

## Parameters

- `node`: A SpriteKit node in the view’s scene.

<a id="return-value"></a>

## Return Value

The [ARAnchor](../aranchor.md) object tracking the node, or `nil` if the node is not associated with an anchor or not in the view’s scene.

## See Also

### Mapping Content to Real-World Positions

- [node(for:)](node%28for_%29.md): Returns the SpriteKit node associated with the specified AR anchor, if any.

# anchorForNode: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Returns the AR anchor associated with the specified SpriteKit node, if any.

## Declaration

```objectivec
- (ARAnchor *) anchorForNode:(SKNode *) node;
```

## Parameters

- `node`: A SpriteKit node in the view’s scene.

<a id="return-value"></a>

## Return Value

The [ARAnchor](../aranchor.md) object tracking the node, or `nil` if the node is not associated with an anchor or not in the view’s scene.

## See Also

### Mapping Content to Real-World Positions

- [nodeForAnchor:](node%28for_%29.md): Returns the SpriteKit node associated with the specified AR anchor, if any.
