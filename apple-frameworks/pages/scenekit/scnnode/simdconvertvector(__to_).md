> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdconvertvector(_:to:)](https://developer.apple.com/documentation/scenekit/scnnode/simdconvertvector(_:to:))

# simdConvertVector(\_:to:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Converts a direction vector from the node’s local coordinate space to that of another node.

## Declaration

```swift
func simdConvertVector(_ vector: simd_float3, to node: SCNNode?) -> simd_float3
```

## Parameters

- `vector`: A direction vector in the node’s local coordinate space.
- `node`: Another node in the same scene graph as the node, or `nil` to convert to the scene’s world coordinate space.

<a id="return-value"></a>

## Return Value

A direction vector in the local coordinate space defined by the other node.

<a id="Discussion"></a>

## Discussion

Unlike the [simdConvertPosition(\_:to:)](simdconvertposition%28__to_%29.md) method, this method ignores the translational aspect of both nodes’ transforms. As such, this method is more appropriate for use with vectors that represent only directional information, such as velocity or facing.

## See Also

### Related Documentation

- [convertVector(\_:to:)](convertvector%28__to_%29.md): Converts a direction vector from the node’s local coordinate space to that of another node.

### Converting Between Coordinate Spaces

- [simdConvertPosition(\_:from:)](simdconvertposition%28__from_%29.md): Converts a position to the node’s local coordinate space from that of another node.
- [simdConvertPosition(\_:to:)](simdconvertposition%28__to_%29.md): Converts a position from the node’s local coordinate space to that of another node.
- [simdConvertTransform(\_:from:)](simdconverttransform%28__from_%29.md): Converts a transform to the node’s local coordinate space from that of another node.
- [simdConvertTransform(\_:to:)](simdconverttransform%28__to_%29.md): Converts a transform from the node’s local coordinate space to that of another node.
- [simdConvertVector(\_:from:)](simdconvertvector%28__from_%29.md): Converts a direction vector to the node’s local coordinate space from that of another node.

# simdConvertVector:toNode: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Converts a direction vector from the node’s local coordinate space to that of another node.

## Declaration

```objectivec
- (simd_float3) simdConvertVector:(simd_float3) vector toNode:(SCNNode *) node;
```

## Parameters

- `vector`: A direction vector in the node’s local coordinate space.
- `node`: Another node in the same scene graph as the node, or `nil` to convert to the scene’s world coordinate space.

<a id="return-value"></a>

## Return Value

A direction vector in the local coordinate space defined by the other node.

<a id="Discussion"></a>

## Discussion

Unlike the [simdConvertPosition:toNode:](simdconvertposition%28__to_%29.md) method, this method ignores the translational aspect of both nodes’ transforms. As such, this method is more appropriate for use with vectors that represent only directional information, such as velocity or facing.

## See Also

### Related Documentation

- [convertVector:toNode:](convertvector%28__to_%29.md): Converts a direction vector from the node’s local coordinate space to that of another node.

### Converting Between Coordinate Spaces

- [simdConvertPosition:fromNode:](simdconvertposition%28__from_%29.md): Converts a position to the node’s local coordinate space from that of another node.
- [simdConvertPosition:toNode:](simdconvertposition%28__to_%29.md): Converts a position from the node’s local coordinate space to that of another node.
- [simdConvertTransform:fromNode:](simdconverttransform%28__from_%29.md): Converts a transform to the node’s local coordinate space from that of another node.
- [simdConvertTransform:toNode:](simdconverttransform%28__to_%29.md): Converts a transform from the node’s local coordinate space to that of another node.
- [simdConvertVector:fromNode:](simdconvertvector%28__from_%29.md): Converts a direction vector to the node’s local coordinate space from that of another node.
