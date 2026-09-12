> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnvector3](https://developer.apple.com/documentation/scenekit/scnvector3)

# SCNVector3 (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A representation of a three-component vector.

## Declaration

```swift
struct SCNVector3
```

<a id="overview"></a>

## Overview

SceneKit uses three-component vectors for a variety of purposes, such as describing node or vertex positions, surface normals, and scale or translation transforms. The different vector components should be interpreted based on the context in which the vector is being used.

> **Important**

>  In macOS, the `x`, `y`, and `z` fields in this structure are [CGFloat](../corefoundation/cgfloat-swift.struct.md) values. In iOS, tvOS, and watchOS, these fields are `float` values.

## Topics

### Components

- [x](scnvector3/x.md): The first component in the vector.
- [y](scnvector3/y.md): The second component in the vector.
- [z](scnvector3/z.md): The third component in the vector.

### Creating Vectors

- [SCNVector3Make(\_:\_:\_:)](scnvector3make%28______%29.md): Returns a new three-component vector created from individual component values.

### Converting Vector Types

- [SCNVector3FromGLKVector3(\_:)](scnvector3fromglkvector3%28__%29.md): Returns a three-element SceneKit vector structure corresponding to a GLKit vector structure.
- [SCNVector3ToGLKVector3(\_:)](scnvector3toglkvector3%28__%29.md): Returns a three-element GLKit vector structure corresponding to a SceneKit vector structure.

### Comparing Vectors

- [SCNVector3EqualToVector3(\_:\_:)](scnvector3equaltovector3%28____%29.md): Returns a Boolean value that indicates whether the corresponding components of two vectors are equal.

### Zero Constant

- [SCNVector3Zero](scnvector3zero.md): The three-component vector whose every component is `0.0`.

### Initializers

- [init()](scnvector3/init%28%29.md): Deprecated.
- [init(\_:)](scnvector3/init%28__%29-10rap.md): Deprecated.
- [init(\_:)](scnvector3/init%28__%29-9wg16.md): Deprecated.
- [init(\_:\_:\_:)](scnvector3/init%28______%29-2hhr6.md): Deprecated.
- [init(\_:\_:\_:)](scnvector3/init%28______%29-50jm7.md): Deprecated.
- [init(\_:\_:\_:)](scnvector3/init%28______%29-7clbx.md): Deprecated.
- [init(\_:\_:\_:)](scnvector3/init%28______%29-8cwh7.md): Deprecated.
- [init(x:y:z:)](scnvector3/init%28x_y_z_%29-28n6q.md): Deprecated.
- [init(x:y:z:)](scnvector3/init%28x_y_z_%29-mn27.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Vectors

- [SCNVector4](scnvector4.md): A representation of a four-component vector.

# SCNVector3 (Objective-C)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A representation of a three-component vector.

## Declaration

```objectivec
typedef struct SCNVector3 { ... } SCNVector3;
```

<a id="overview"></a>

## Overview

SceneKit uses three-component vectors for a variety of purposes, such as describing node or vertex positions, surface normals, and scale or translation transforms. The different vector components should be interpreted based on the context in which the vector is being used.

> **Important**

>  In macOS, the `x`, `y`, and `z` fields in this structure are [CGFloat](../corefoundation/cgfloat-swift.struct.md) values. In iOS, tvOS, and watchOS, these fields are `float` values.

## Topics

### Components

- [x](scnvector3/x.md): The first component in the vector.
- [y](scnvector3/y.md): The second component in the vector.
- [z](scnvector3/z.md): The third component in the vector.

### Creating Vectors

- [SCNVector3Make](scnvector3make%28______%29.md): Returns a new three-component vector created from individual component values.

### Converting Vector Types

- [SCNVector3FromGLKVector3](scnvector3fromglkvector3%28__%29.md): Returns a three-element SceneKit vector structure corresponding to a GLKit vector structure.
- [SCNVector3ToGLKVector3](scnvector3toglkvector3%28__%29.md): Returns a three-element GLKit vector structure corresponding to a SceneKit vector structure.
- [SCNVector3FromFloat3](scnvector3fromfloat3.md): Deprecated.
- [SCNVector3ToFloat3](scnvector3tofloat3.md): Deprecated.

### Comparing Vectors

- [SCNVector3EqualToVector3](scnvector3equaltovector3%28____%29.md): Returns a Boolean value that indicates whether the corresponding components of two vectors are equal.

### Zero Constant

- [SCNVector3Zero](scnvector3zero.md): The three-component vector whose every component is `0.0`.

## See Also

### Vectors

- [SCNVector4](scnvector4.md): A representation of a four-component vector.
