> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnquaternion](https://developer.apple.com/documentation/scenekit/scnquaternion)

# SCNQuaternion (Swift)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A representation of a quaternion.

## Declaration

```swift
typealias SCNQuaternion = SCNVector4
```

<a id="Discussion"></a>

## Discussion

A quaternion is a mathematical construct useful for describing rotations in three-dimensional space. Although its implementation differs from that of a 4-component vector, you specify a quaternion value using the same fields as an `SCNVector4` structure.

SceneKit uses unit quaternions (those whose components satisfy the equation `x*x + y*y + z*z + w*w == 1`) for the [orientation](scnnode/orientation.md) property of nodes.

## See Also

### Transforms and Rotations

- [SCNMatrix4](scnmatrix4-swift.struct.md): A representation of a 4 x 4 matrix.
- [SCNMatrix4](scnmatrix4-swift.typealias.md): A representation of a 4 x 4 matrix.

# SCNQuaternion (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A representation of a quaternion.

## Declaration

```objectivec
typedef SCNVector4 SCNQuaternion;
```

<a id="Discussion"></a>

## Discussion

A quaternion is a mathematical construct useful for describing rotations in three-dimensional space. Although its implementation differs from that of a 4-component vector, you specify a quaternion value using the same fields as an `SCNVector4` structure.

SceneKit uses unit quaternions (those whose components satisfy the equation `x*x + y*y + z*z + w*w == 1`) for the [orientation](scnnode/orientation.md) property of nodes.

## See Also

### Transforms and Rotations

- [SCNMatrix4](scnmatrix4-swift.struct.md): A representation of a 4 x 4 matrix.
- [SCNMatrix4](scnmatrix4-swift.typealias.md): A representation of a 4 x 4 matrix.
