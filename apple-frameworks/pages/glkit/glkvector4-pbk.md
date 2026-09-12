> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector4-pbk](https://developer.apple.com/documentation/glkit/glkvector4-pbk)

# GLKVector4 (Swift)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `GLKVector4` type defines a `4`-component floating-point vector as well as many mathematical operations commonly used to manipulate vectors. Graphics programming uses vectors extensively to represent positions, normals, colors and other data structures.

The functions that manipulate `GLKVector4` structures treat the inputs as immutable, instead returning a new vector that represent the results of the operation.

## Topics

### Creating Vectors

- [GLKVector4Make(\_:\_:\_:\_:)](glkvector4make%28________%29.md): Returns a new four-component vector created from individual component values.
- [GLKVector4MakeWithArray(\_:)](glkvector4makewitharray%28__%29.md): Returns a new four-component vector created from an array of components.
- [GLKVector4MakeWithVector3(\_:\_:)](glkvector4makewithvector3%28____%29.md): Returns a new four-component vector created by combining a three-component vector with a scalar value.

### Retrieving Information About a Vector

- [GLKVector4Length(\_:)](glkvector4length%28__%29.md): Returns the length of a vector.
- [GLKVector4Distance(\_:\_:)](glkvector4distance%28____%29.md): Returns the distance between two points.

### Mathematical Operations Performed on Vectors

- [GLKVector4Negate(\_:)](glkvector4negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector4Normalize(\_:)](glkvector4normalize%28__%29.md): Returns a new vector created by normalizing an input vector to a length of `1.0`.
- [GLKVector4AddScalar(\_:\_:)](glkvector4addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector4SubtractScalar(\_:\_:)](glkvector4subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector4MultiplyScalar(\_:\_:)](glkvector4multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector4DivideScalar(\_:\_:)](glkvector4dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector4Add(\_:\_:)](glkvector4add%28____%29.md): Returns the sum of two vectors.
- [GLKVector4Subtract(\_:\_:)](glkvector4subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector4Multiply(\_:\_:)](glkvector4multiply%28____%29.md): Returns the product of two vectors.
- [GLKVector4Divide(\_:\_:)](glkvector4divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector4DotProduct(\_:\_:)](glkvector4dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector4CrossProduct(\_:\_:)](glkvector4crossproduct%28____%29.md): Returns the cross product of two vectors.
- [GLKVector4Lerp(\_:\_:\_:)](glkvector4lerp%28______%29.md): Returns a new vector created by linearly interpreting between two vectors.
- [GLKVector4Project(\_:\_:)](glkvector4project%28____%29.md): Returns a new vector created by projecting a vector onto another vector.
- [GLKVector4Maximum(\_:\_:)](glkvector4maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position in the source vectors.
- [GLKVector4Minimum(\_:\_:)](glkvector4minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position in the source vectors.

### Comparison Operations

- [GLKVector4AllEqualToScalar(\_:\_:)](glkvector4allequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.
- [GLKVector4AllEqualToVector4(\_:\_:)](glkvector4allequaltovector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.
- [GLKVector4AllGreaterThanOrEqualToScalar(\_:\_:)](glkvector4allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector4AllGreaterThanOrEqualToVector4(\_:\_:)](glkvector4allgreaterthanorequaltovector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector4AllGreaterThanScalar(\_:\_:)](glkvector4allgreaterthanscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.
- [GLKVector4AllGreaterThanVector4(\_:\_:)](glkvector4allgreaterthanvector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.

### Data Types

- [GLKVector4](glkvector4.md): A representation of a 4-component vector.

## See Also

### Math Utilties

- [GLKMatrixStack](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkmatrix3-pcl.md)
- [GLKMatrix4](glkmatrix4-pce.md)
- [GLKVector2](glkvector2-pbj.md)
- [GLKVector3](glkvector3-pbt.md)
- [GLKQuaternion](glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit-math-utilities.md)

# GLKVector4 (Objective-C)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `GLKVector4` type defines a `4`-component floating-point vector as well as many mathematical operations commonly used to manipulate vectors. Graphics programming uses vectors extensively to represent positions, normals, colors and other data structures.

The functions that manipulate `GLKVector4` structures treat the inputs as immutable, instead returning a new vector that represent the results of the operation.

## Topics

### Creating Vectors

- [GLKVector4Make](glkvector4make%28________%29.md): Returns a new four-component vector created from individual component values.
- [GLKVector4MakeWithArray](glkvector4makewitharray%28__%29.md): Returns a new four-component vector created from an array of components.
- [GLKVector4MakeWithVector3](glkvector4makewithvector3%28____%29.md): Returns a new four-component vector created by combining a three-component vector with a scalar value.

### Retrieving Information About a Vector

- [GLKVector4Length](glkvector4length%28__%29.md): Returns the length of a vector.
- [GLKVector4Distance](glkvector4distance%28____%29.md): Returns the distance between two points.

### Mathematical Operations Performed on Vectors

- [GLKVector4Negate](glkvector4negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector4Normalize](glkvector4normalize%28__%29.md): Returns a new vector created by normalizing an input vector to a length of `1.0`.
- [GLKVector4AddScalar](glkvector4addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector4SubtractScalar](glkvector4subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector4MultiplyScalar](glkvector4multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector4DivideScalar](glkvector4dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector4Add](glkvector4add%28____%29.md): Returns the sum of two vectors.
- [GLKVector4Subtract](glkvector4subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector4Multiply](glkvector4multiply%28____%29.md): Returns the product of two vectors.
- [GLKVector4Divide](glkvector4divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector4DotProduct](glkvector4dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector4CrossProduct](glkvector4crossproduct%28____%29.md): Returns the cross product of two vectors.
- [GLKVector4Lerp](glkvector4lerp%28______%29.md): Returns a new vector created by linearly interpreting between two vectors.
- [GLKVector4Project](glkvector4project%28____%29.md): Returns a new vector created by projecting a vector onto another vector.
- [GLKVector4Maximum](glkvector4maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position in the source vectors.
- [GLKVector4Minimum](glkvector4minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position in the source vectors.

### Comparison Operations

- [GLKVector4AllEqualToScalar](glkvector4allequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.
- [GLKVector4AllEqualToVector4](glkvector4allequaltovector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.
- [GLKVector4AllGreaterThanOrEqualToScalar](glkvector4allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector4AllGreaterThanOrEqualToVector4](glkvector4allgreaterthanorequaltovector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector4AllGreaterThanScalar](glkvector4allgreaterthanscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.
- [GLKVector4AllGreaterThanVector4](glkvector4allgreaterthanvector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.

### Data Types

- [GLKVector4](glkvector4.md): A representation of a 4-component vector.

## See Also

### Math Utilties

- [GLKMatrixStackRef](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkmatrix3-pcl.md)
- [GLKMatrix4](glkmatrix4-pce.md)
- [GLKVector2](glkvector2-pbj.md)
- [GLKVector3](glkvector3-pbt.md)
- [GLKQuaternion](glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit-math-utilities.md)
