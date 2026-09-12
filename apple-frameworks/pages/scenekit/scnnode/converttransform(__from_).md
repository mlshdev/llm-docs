> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/converttransform(_:from:)](https://developer.apple.com/documentation/scenekit/scnnode/converttransform(_:from:))

# convertTransform(\_:from:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Converts a transform to the node’s local coordinate space from that of another node.

## Declaration

```swift
func convertTransform(_ transform: SCNMatrix4, from node: SCNNode?) -> SCNMatrix4
```

```swift
func convertTransform(_ transform: SCNMatrix4, from node: SCNNode?) -> SCNMatrix4
```

## Parameters

- `transform`: A transform relative to the local coordinate space defined by the other node.
- `node`: Another node in the same scene graph as the node, or `nil` to convert from the scene’s world coordinate space.

<a id="return-value"></a>

## Return Value

A transform relative to the node’s coordinate space.

## See Also

### Related Documentation

- [simdConvertTransform(\_:from:)](simdconverttransform%28__from_%29.md): Converts a transform to the node’s local coordinate space from that of another node.

### Converting Between Coordinate Spaces (SceneKit Types)

- [convertPosition(\_:from:)](convertposition%28__from_%29.md): Converts a position to the node’s local coordinate space from that of another node.
- [convertPosition(\_:to:)](convertposition%28__to_%29.md): Converts a position from the node’s local coordinate space to that of another node.
- [convertTransform(\_:to:)](converttransform%28__to_%29.md): Converts a transform from the node’s local coordinate space to that of another node.
- [convertVector(\_:from:)](convertvector%28__from_%29.md): Converts a direction vector to the node’s local coordinate space from that of another node.
- [convertVector(\_:to:)](convertvector%28__to_%29.md): Converts a direction vector from the node’s local coordinate space to that of another node.

# convertTransform:fromNode: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Converts a transform to the node’s local coordinate space from that of another node.

## Declaration

```objectivec
- (SCNMatrix4) convertTransform:(SCNMatrix4) transform fromNode:(SCNNode *) node;
```

```objectivec
- (SCNMatrix4) convertTransform:(SCNMatrix4) transform fromNode:(SCNNode *) node;
```

## Parameters

- `transform`: A transform relative to the local coordinate space defined by the other node.
- `node`: Another node in the same scene graph as the node, or `nil` to convert from the scene’s world coordinate space.

<a id="return-value"></a>

## Return Value

A transform relative to the node’s coordinate space.

## See Also

### Related Documentation

- [simdConvertTransform:fromNode:](simdconverttransform%28__from_%29.md): Converts a transform to the node’s local coordinate space from that of another node.

### Converting Between Coordinate Spaces (SceneKit Types)

- [convertPosition:fromNode:](convertposition%28__from_%29.md): Converts a position to the node’s local coordinate space from that of another node.
- [convertPosition:toNode:](convertposition%28__to_%29.md): Converts a position from the node’s local coordinate space to that of another node.
- [convertTransform:toNode:](converttransform%28__to_%29.md): Converts a transform from the node’s local coordinate space to that of another node.
- [convertVector:fromNode:](convertvector%28__from_%29.md): Converts a direction vector to the node’s local coordinate space from that of another node.
- [convertVector:toNode:](convertvector%28__to_%29.md): Converts a direction vector from the node’s local coordinate space to that of another node.
