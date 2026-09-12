> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skcameranode/contains(_:)](https://developer.apple.com/documentation/spritekit/skcameranode/contains(_:))

# contains(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Checks to see if a node is visible in the camera’s viewport.

## Declaration

```swift
func contains(_ node: SKNode) -> Bool
```

## Parameters

- `node`: An [SKNode](../sknode.md) object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the node in the same scene and inside the camera’s viewport; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The camera must be part of a scene’s node hierarchy and the scene must be presented in an view.

## See Also

### Node Visibility

- [containedNodeSet()](containednodeset%28%29.md): Finds nodes that are visible in the camera’s viewport.

# containsNode: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Checks to see if a node is visible in the camera’s viewport.

## Declaration

```objectivec
- (BOOL) containsNode:(SKNode *) node;
```

## Parameters

- `node`: An [SKNode](../sknode.md) object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the node in the same scene and inside the camera’s viewport; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The camera must be part of a scene’s node hierarchy and the scene must be presented in an view.

## See Also

### Node Visibility

- [containedNodeSet](containednodeset%28%29.md): Finds nodes that are visible in the camera’s viewport.
