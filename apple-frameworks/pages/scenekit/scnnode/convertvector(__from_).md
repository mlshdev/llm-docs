> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/convertvector(_:from:)](https://developer.apple.com/documentation/scenekit/scnnode/convertvector(_:from:))

# convertVector(\_:from:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Converts a direction vector to the node’s local coordinate space from that of another node.

## Declaration

```swift
func convertVector(_ vector: SCNVector3, from node: SCNNode?) -> SCNVector3
```

## Parameters

- `vector`: A direction vector in the local coordinate space defined by the other node.
- `node`: Another node in the same scene graph as the node, or `nil` to convert from the scene’s world coordinate space.

<a id="return-value"></a>

## Return Value

A direction vector in the node’s local coordinate space.

<a id="Discussion"></a>

## Discussion

Unlike the [convertPosition(\_:from:)](convertposition%28__from_%29.md) method, this method ignores the translational aspect of both nodes’ transforms. As such, this method is more appropriate for use with vectors that represent only directional information, such as velocity or facing.

## See Also

### Related Documentation

- [simdConvertVector(\_:from:)](simdconvertvector%28__from_%29.md): Converts a direction vector to the node’s local coordinate space from that of another node.

### Converting Between Coordinate Spaces (SceneKit Types)

- [convertPosition(\_:from:)](convertposition%28__from_%29.md): Converts a position to the node’s local coordinate space from that of another node.
- [convertPosition(\_:to:)](convertposition%28__to_%29.md): Converts a position from the node’s local coordinate space to that of another node.
- [convertTransform(\_:from:)](converttransform%28__from_%29.md): Converts a transform to the node’s local coordinate space from that of another node.
- [convertTransform(\_:to:)](converttransform%28__to_%29.md): Converts a transform from the node’s local coordinate space to that of another node.
- [convertVector(\_:to:)](convertvector%28__to_%29.md): Converts a direction vector from the node’s local coordinate space to that of another node.

# convertVector:fromNode: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Converts a direction vector to the node’s local coordinate space from that of another node.

## Declaration

```objectivec
- (SCNVector3) convertVector:(SCNVector3) vector fromNode:(SCNNode *) node;
```

## Parameters

- `vector`: A direction vector in the local coordinate space defined by the other node.
- `node`: Another node in the same scene graph as the node, or `nil` to convert from the scene’s world coordinate space.

<a id="return-value"></a>

## Return Value

A direction vector in the node’s local coordinate space.

<a id="Discussion"></a>

## Discussion

Unlike the [convertPosition:fromNode:](convertposition%28__from_%29.md) method, this method ignores the translational aspect of both nodes’ transforms. As such, this method is more appropriate for use with vectors that represent only directional information, such as velocity or facing.

## See Also

### Related Documentation

- [simdConvertVector:fromNode:](simdconvertvector%28__from_%29.md): Converts a direction vector to the node’s local coordinate space from that of another node.

### Converting Between Coordinate Spaces (SceneKit Types)

- [convertPosition:fromNode:](convertposition%28__from_%29.md): Converts a position to the node’s local coordinate space from that of another node.
- [convertPosition:toNode:](convertposition%28__to_%29.md): Converts a position from the node’s local coordinate space to that of another node.
- [convertTransform:fromNode:](converttransform%28__from_%29.md): Converts a transform to the node’s local coordinate space from that of another node.
- [convertTransform:toNode:](converttransform%28__to_%29.md): Converts a transform from the node’s local coordinate space to that of another node.
- [convertVector:toNode:](convertvector%28__to_%29.md): Converts a direction vector from the node’s local coordinate space to that of another node.
