> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnvector4](https://developer.apple.com/documentation/scenekit/scnvector4)

# SCNVector4 (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A representation of a four-component vector.

## Declaration

```swift
struct SCNVector4
```

<a id="overview"></a>

## Overview

SceneKit uses four-component vectors to represent multiple kinds of data:

- Axis-angle rotation or torque. The `x`, `y`, and `z` fields contain the normalized x-, y-, and z-components of the rotation axis, and the `w` field contains the rotation angle, in radians, or torque magnitude, in newton-meters.
- Color value (or range). The `x`, `y`, `z`, and `w` fields contain the red, green, blue, and alpha components of the color, or the width of the color variation range in each component.

> **Important**

>  In macOS, the `x`, `y`, `z` and `w` fields in this structure are [CGFloat](../corefoundation/cgfloat-swift.struct.md) values. In iOS, tvOS, and watchOS, these fields are `float` values.

## Topics

### Components

- [x](scnvector4/x.md): The first component in the vector.
- [y](scnvector4/y.md): The second component in the vector.
- [z](scnvector4/z.md): The third component in the vector.
- [w](scnvector4/w.md): The fourth component in the vector.

### Creating Vectors

- [SCNVector4Make(\_:\_:\_:\_:)](scnvector4make%28________%29.md): Returns a new four-component vector created from individual component values.

### Converting Vector Types

- [SCNVector4FromGLKVector4(\_:)](scnvector4fromglkvector4%28__%29.md): Returns a four-element SceneKit vector structure corresponding to a GLKit vector structure.
- [SCNVector4ToGLKVector4(\_:)](scnvector4toglkvector4%28__%29.md): Returns a four-element GLKit vector structure corresponding to a SceneKit vector structure.

### Comparing Vectors

- [SCNVector4EqualToVector4(\_:\_:)](scnvector4equaltovector4%28____%29.md): Returns a Boolean value that indicates whether the corresponding components of two vectors are equal.

### Zero Constant

- [SCNVector4Zero](scnvector4zero.md): The four-component vector whose every component is `0.0`.

### Initializers

- [init()](scnvector4/init%28%29.md): Deprecated.
- [init(\_:)](scnvector4/init%28__%29-5q2cx.md): Deprecated.
- [init(\_:)](scnvector4/init%28__%29-6w6mx.md): Deprecated.
- [init(\_:\_:\_:\_:)](scnvector4/init%28________%29-6otq6.md): Deprecated.
- [init(\_:\_:\_:\_:)](scnvector4/init%28________%29-85e6w.md): Deprecated.
- [init(\_:\_:\_:\_:)](scnvector4/init%28________%29-93hx1.md): Deprecated.
- [init(\_:\_:\_:\_:)](scnvector4/init%28________%29-pk7r.md): Deprecated.
- [init(x:y:z:w:)](scnvector4/init%28x_y_z_w_%29-37b3a.md): Deprecated.
- [init(x:y:z:w:)](scnvector4/init%28x_y_z_w_%29-7hxmu.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Vectors

- [SCNVector3](scnvector3.md): A representation of a three-component vector.

# SCNVector4 (Objective-C)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A representation of a four-component vector.

## Declaration

```objectivec
typedef struct SCNVector4 { ... } SCNVector4;
```

<a id="overview"></a>

## Overview

SceneKit uses four-component vectors to represent multiple kinds of data:

- Axis-angle rotation or torque. The `x`, `y`, and `z` fields contain the normalized x-, y-, and z-components of the rotation axis, and the `w` field contains the rotation angle, in radians, or torque magnitude, in newton-meters.
- Color value (or range). The `x`, `y`, `z`, and `w` fields contain the red, green, blue, and alpha components of the color, or the width of the color variation range in each component.

> **Important**

>  In macOS, the `x`, `y`, `z` and `w` fields in this structure are [CGFloat](../corefoundation/cgfloat-swift.struct.md) values. In iOS, tvOS, and watchOS, these fields are `float` values.

## Topics

### Components

- [x](scnvector4/x.md): The first component in the vector.
- [y](scnvector4/y.md): The second component in the vector.
- [z](scnvector4/z.md): The third component in the vector.
- [w](scnvector4/w.md): The fourth component in the vector.

### Creating Vectors

- [SCNVector4Make](scnvector4make%28________%29.md): Returns a new four-component vector created from individual component values.

### Converting Vector Types

- [SCNVector4FromGLKVector4](scnvector4fromglkvector4%28__%29.md): Returns a four-element SceneKit vector structure corresponding to a GLKit vector structure.
- [SCNVector4ToGLKVector4](scnvector4toglkvector4%28__%29.md): Returns a four-element GLKit vector structure corresponding to a SceneKit vector structure.
- [SCNVector4FromFloat4](scnvector4fromfloat4.md): Deprecated.
- [SCNVector4ToFloat4](scnvector4tofloat4.md): Deprecated.

### Comparing Vectors

- [SCNVector4EqualToVector4](scnvector4equaltovector4%28____%29.md): Returns a Boolean value that indicates whether the corresponding components of two vectors are equal.

### Zero Constant

- [SCNVector4Zero](scnvector4zero.md): The four-component vector whose every component is `0.0`.

## See Also

### Vectors

- [SCNVector3](scnvector3.md): A representation of a three-component vector.
