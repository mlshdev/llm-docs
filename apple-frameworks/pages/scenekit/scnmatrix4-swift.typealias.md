> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4-swift.typealias](https://developer.apple.com/documentation/scenekit/scnmatrix4-swift.typealias)

# SCNMatrix4 (Swift)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A representation of a 4 x 4 matrix.

## Declaration

```swift
typealias SCNMatrix4 = CATransform3D
```

<a id="discussion"></a>

## Discussion

SceneKit uses matrices to represent coordinate space transformations, which in turn can represent the combined position, rotation or orientation, and scale of an object in three-dimensional space.

> **Important**

>  In macOS, the fields in this structure are [CGFloat](../corefoundation/cgfloat-swift.struct.md) values. In iOS, tvOS, and watchOS, these fields are `float` values.

## Topics

### Creating Transform Matrices

- [SCNMatrix4MakeTranslation(\_:\_:\_:)](scnmatrix4maketranslation%28______%29.md): Returns a matrix describing a translation transformation.
- [SCNMatrix4MakeRotation(\_:\_:\_:\_:)](scnmatrix4makerotation%28________%29.md): Returns a matrix describing a rotation transformation.
- [SCNMatrix4MakeScale(\_:\_:\_:)](scnmatrix4makescale%28______%29.md): Returns a matrix describing a scale transformation.

### Performing Matrix Operations

- [SCNMatrix4Translate(\_:\_:\_:\_:)](scnmatrix4translate%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a translation transformation.
- [SCNMatrix4Rotate(\_:\_:\_:\_:\_:)](scnmatrix4rotate%28__________%29.md): Returns a new matrix created by concatenating the specified matrix with a rotation transformation.
- [SCNMatrix4Scale(\_:\_:\_:\_:)](scnmatrix4scale%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a scale transformation.
- [SCNMatrix4Invert(\_:)](scnmatrix4invert%28__%29.md): Returns the inverse of the specified matrix.
- [SCNMatrix4Mult(\_:\_:)](scnmatrix4mult%28____%29.md): Returns the product of two matrices.

### Converting Matrix Types

- [SCNMatrix4FromGLKMatrix4(\_:)](scnmatrix4fromglkmatrix4%28__%29.md): Returns a SceneKit matrix corresponding to a GLKit matrix.
- [SCNMatrix4ToGLKMatrix4(\_:)](scnmatrix4toglkmatrix4%28__%29.md): Returns a GLKit matrix corresponding to a SceneKit matrix.

### Comparing Matrices

- [SCNMatrix4EqualToMatrix4(\_:\_:)](scnmatrix4equaltomatrix4%28____%29.md): Returns a Boolean value that indicates whether the corresponding elements of two matrices are equal.
- [SCNMatrix4IsIdentity(\_:)](scnmatrix4isidentity%28__%29.md): Returns a Boolean value that indicates whether the specified matrix is equal to the identity matrix.

### Identity Constant

- [SCNMatrix4Identity](scnmatrix4identity.md): The 4 x 4 identity matrix.

### Matrix Elements

- [m11](scnmatrix4-swift.struct/m11.md)
- [m12](scnmatrix4-swift.struct/m12.md)
- [m13](scnmatrix4-swift.struct/m13.md)
- [m14](scnmatrix4-swift.struct/m14.md)
- [m21](scnmatrix4-swift.struct/m21.md)
- [m22](scnmatrix4-swift.struct/m22.md)
- [m23](scnmatrix4-swift.struct/m23.md)
- [m24](scnmatrix4-swift.struct/m24.md)
- [m31](scnmatrix4-swift.struct/m31.md)
- [m32](scnmatrix4-swift.struct/m32.md)
- [m33](scnmatrix4-swift.struct/m33.md)
- [m34](scnmatrix4-swift.struct/m34.md)
- [m41](scnmatrix4-swift.struct/m41.md)
- [m42](scnmatrix4-swift.struct/m42.md)
- [m43](scnmatrix4-swift.struct/m43.md)
- [m44](scnmatrix4-swift.struct/m44.md)

## See Also

### Transforms and Rotations

- [SCNMatrix4](scnmatrix4-swift.struct.md): A representation of a 4 x 4 matrix.
- [SCNQuaternion](scnquaternion.md): A representation of a quaternion.

# SCNMatrix4 (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** macOS

A representation of a 4 x 4 matrix.

## Declaration

```objectivec
typedef CATransform3D SCNMatrix4;
```

<a id="discussion"></a>

## Discussion

SceneKit uses matrices to represent coordinate space transformations, which in turn can represent the combined position, rotation or orientation, and scale of an object in three-dimensional space.

> **Important**

>  In macOS, the fields in this structure are [CGFloat](../corefoundation/cgfloat-swift.struct.md) values. In iOS, tvOS, and watchOS, these fields are `float` values.

## Topics

### Creating Transform Matrices

- [SCNMatrix4MakeTranslation](scnmatrix4maketranslation%28______%29.md): Returns a matrix describing a translation transformation.
- [SCNMatrix4MakeRotation](scnmatrix4makerotation%28________%29.md): Returns a matrix describing a rotation transformation.
- [SCNMatrix4MakeScale](scnmatrix4makescale%28______%29.md): Returns a matrix describing a scale transformation.

### Performing Matrix Operations

- [SCNMatrix4Translate](scnmatrix4translate%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a translation transformation.
- [SCNMatrix4Rotate](scnmatrix4rotate%28__________%29.md): Returns a new matrix created by concatenating the specified matrix with a rotation transformation.
- [SCNMatrix4Scale](scnmatrix4scale%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a scale transformation.
- [SCNMatrix4Invert](scnmatrix4invert%28__%29.md): Returns the inverse of the specified matrix.
- [SCNMatrix4Mult](scnmatrix4mult%28____%29.md): Returns the product of two matrices.

### Converting Matrix Types

- [SCNMatrix4FromGLKMatrix4](scnmatrix4fromglkmatrix4%28__%29.md): Returns a SceneKit matrix corresponding to a GLKit matrix.
- [SCNMatrix4ToGLKMatrix4](scnmatrix4toglkmatrix4%28__%29.md): Returns a GLKit matrix corresponding to a SceneKit matrix.
- [SCNMatrix4FromMat4](scnmatrix4frommat4.md): Deprecated.
- [SCNMatrix4ToMat4](scnmatrix4tomat4.md): Deprecated.

### Comparing Matrices

- [SCNMatrix4EqualToMatrix4](scnmatrix4equaltomatrix4%28____%29.md): Returns a Boolean value that indicates whether the corresponding elements of two matrices are equal.
- [SCNMatrix4IsIdentity](scnmatrix4isidentity%28__%29.md): Returns a Boolean value that indicates whether the specified matrix is equal to the identity matrix.

### Identity Constant

- [SCNMatrix4Identity](scnmatrix4identity.md): The 4 x 4 identity matrix.

### Matrix Elements

- [m11](scnmatrix4-swift.struct/m11.md)
- [m12](scnmatrix4-swift.struct/m12.md)
- [m13](scnmatrix4-swift.struct/m13.md)
- [m14](scnmatrix4-swift.struct/m14.md)
- [m21](scnmatrix4-swift.struct/m21.md)
- [m22](scnmatrix4-swift.struct/m22.md)
- [m23](scnmatrix4-swift.struct/m23.md)
- [m24](scnmatrix4-swift.struct/m24.md)
- [m31](scnmatrix4-swift.struct/m31.md)
- [m32](scnmatrix4-swift.struct/m32.md)
- [m33](scnmatrix4-swift.struct/m33.md)
- [m34](scnmatrix4-swift.struct/m34.md)
- [m41](scnmatrix4-swift.struct/m41.md)
- [m42](scnmatrix4-swift.struct/m42.md)
- [m43](scnmatrix4-swift.struct/m43.md)
- [m44](scnmatrix4-swift.struct/m44.md)

## See Also

### Transforms and Rotations

- [SCNMatrix4](scnmatrix4-swift.struct.md): A representation of a 4 x 4 matrix.
- [SCNQuaternion](scnquaternion.md): A representation of a quaternion.
