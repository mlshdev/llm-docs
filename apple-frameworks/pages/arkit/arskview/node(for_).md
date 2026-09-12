> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskview/node(for:)](https://developer.apple.com/documentation/arkit/arskview/node(for:))

# node(for:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Returns the SpriteKit node associated with the specified AR anchor, if any.

## Declaration

```swift
func node(for anchor: ARAnchor) -> SKNode?
```

## Parameters

- `anchor`: An anchor in the view’s AR session.

<a id="return-value"></a>

## Return Value

The node whose position in the AR scene the anchor tracks, or `nil` if the anchor has no associated node or is not in the view’s AR session.

## See Also

### Mapping Content to Real-World Positions

- [anchor(for:)](anchor%28for_%29.md): Returns the AR anchor associated with the specified SpriteKit node, if any.

# nodeForAnchor: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Returns the SpriteKit node associated with the specified AR anchor, if any.

## Declaration

```objectivec
- (SKNode *) nodeForAnchor:(ARAnchor *) anchor;
```

## Parameters

- `anchor`: An anchor in the view’s AR session.

<a id="return-value"></a>

## Return Value

The node whose position in the AR scene the anchor tracks, or `nil` if the anchor has no associated node or is not in the view’s AR session.

## See Also

### Mapping Content to Real-World Positions

- [anchorForNode:](anchor%28for_%29.md): Returns the AR anchor associated with the specified SpriteKit node, if any.
