> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector2-pbj](https://developer.apple.com/documentation/glkit/glkvector2-pbj)

# GLKVector2 (Swift)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `GLKVector2` type defines a `2`-component floating-point vector as well as many mathematical operations commonly used to manipulate vectors. Graphics programming uses vectors extensively to represent positions, colors and other data structures.

The functions that manipulate `GLKVector2` structures treat the inputs as immutable, instead returning a new vector that represent the results of the operation.

## Topics

### Creating Vectors

- [GLKVector2Make(\_:\_:)](glkvector2make%28____%29.md): Returns a new two-component vector created from individual component values.
- [GLKVector2MakeWithArray(\_:)](glkvector2makewitharray%28__%29.md): Returns a new two-component vector created from an array of components.

### Retrieving Information About a Vector

- [GLKVector2Length(\_:)](glkvector2length%28__%29.md): Returns the length of a vector.
- [GLKVector2Distance(\_:\_:)](glkvector2distance%28____%29.md): Returns the distance between two points.

### Mathematical Operations Performed on Vectors

- [GLKVector2Negate(\_:)](glkvector2negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector2Normalize(\_:)](glkvector2normalize%28__%29.md): Returns a new vector created by normalizing an input vector to a length of `1.0`.
- [GLKVector2AddScalar(\_:\_:)](glkvector2addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector2SubtractScalar(\_:\_:)](glkvector2subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector2MultiplyScalar(\_:\_:)](glkvector2multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector2DivideScalar(\_:\_:)](glkvector2dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector2Add(\_:\_:)](glkvector2add%28____%29.md): Returns the sum of two vectors.
- [GLKVector2Subtract(\_:\_:)](glkvector2subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector2Multiply(\_:\_:)](glkvector2multiply%28____%29.md): Returns a new vector created by multiplying one vector by another.
- [GLKVector2Divide(\_:\_:)](glkvector2divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector2DotProduct(\_:\_:)](glkvector2dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector2Lerp(\_:\_:\_:)](glkvector2lerp%28______%29.md): Returns a new vector created by linearly interpreting between two vectors.
- [GLKVector2Project(\_:\_:)](glkvector2project%28____%29.md): Returns a new vector created by projecting a vector onto another vector
- [GLKVector2Maximum(\_:\_:)](glkvector2maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position of the two source vectors.
- [GLKVector2Minimum(\_:\_:)](glkvector2minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position of the two source vectors.

### Comparison Operations

- [GLKVector2AllEqualToScalar(\_:\_:)](glkvector2allequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.
- [GLKVector2AllEqualToVector2(\_:\_:)](glkvector2allequaltovector2%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.
- [GLKVector2AllGreaterThanOrEqualToScalar(\_:\_:)](glkvector2allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector2AllGreaterThanOrEqualToVector2(\_:\_:)](glkvector2allgreaterthanorequaltovector2%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector2AllGreaterThanScalar(\_:\_:)](glkvector2allgreaterthanscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.
- [GLKVector2AllGreaterThanVector2(\_:\_:)](glkvector2allgreaterthanvector2%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.

### Data Types

- [GLKVector2](glkvector2.md): A representation of a 2-component vector.

## See Also

### Math Utilties

- [GLKMatrixStack](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkmatrix3-pcl.md)
- [GLKMatrix4](glkmatrix4-pce.md)
- [GLKVector3](glkvector3-pbt.md)
- [GLKVector4](glkvector4-pbk.md)
- [GLKQuaternion](glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit-math-utilities.md)

# GLKVector2 (Objective-C)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `GLKVector2` type defines a `2`-component floating-point vector as well as many mathematical operations commonly used to manipulate vectors. Graphics programming uses vectors extensively to represent positions, colors and other data structures.

The functions that manipulate `GLKVector2` structures treat the inputs as immutable, instead returning a new vector that represent the results of the operation.

## Topics

### Creating Vectors

- [GLKVector2Make](glkvector2make%28____%29.md): Returns a new two-component vector created from individual component values.
- [GLKVector2MakeWithArray](glkvector2makewitharray%28__%29.md): Returns a new two-component vector created from an array of components.

### Retrieving Information About a Vector

- [GLKVector2Length](glkvector2length%28__%29.md): Returns the length of a vector.
- [GLKVector2Distance](glkvector2distance%28____%29.md): Returns the distance between two points.

### Mathematical Operations Performed on Vectors

- [GLKVector2Negate](glkvector2negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector2Normalize](glkvector2normalize%28__%29.md): Returns a new vector created by normalizing an input vector to a length of `1.0`.
- [GLKVector2AddScalar](glkvector2addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector2SubtractScalar](glkvector2subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector2MultiplyScalar](glkvector2multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector2DivideScalar](glkvector2dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector2Add](glkvector2add%28____%29.md): Returns the sum of two vectors.
- [GLKVector2Subtract](glkvector2subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector2Multiply](glkvector2multiply%28____%29.md): Returns a new vector created by multiplying one vector by another.
- [GLKVector2Divide](glkvector2divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector2DotProduct](glkvector2dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector2Lerp](glkvector2lerp%28______%29.md): Returns a new vector created by linearly interpreting between two vectors.
- [GLKVector2Project](glkvector2project%28____%29.md): Returns a new vector created by projecting a vector onto another vector
- [GLKVector2Maximum](glkvector2maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position of the two source vectors.
- [GLKVector2Minimum](glkvector2minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position of the two source vectors.

### Comparison Operations

- [GLKVector2AllEqualToScalar](glkvector2allequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.
- [GLKVector2AllEqualToVector2](glkvector2allequaltovector2%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.
- [GLKVector2AllGreaterThanOrEqualToScalar](glkvector2allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector2AllGreaterThanOrEqualToVector2](glkvector2allgreaterthanorequaltovector2%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector2AllGreaterThanScalar](glkvector2allgreaterthanscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.
- [GLKVector2AllGreaterThanVector2](glkvector2allgreaterthanvector2%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.

### Data Types

- [GLKVector2](glkvector2.md): A representation of a 2-component vector.

## See Also

### Math Utilties

- [GLKMatrixStackRef](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkmatrix3-pcl.md)
- [GLKMatrix4](glkmatrix4-pce.md)
- [GLKVector3](glkvector3-pbt.md)
- [GLKVector4](glkvector4-pbk.md)
- [GLKQuaternion](glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit-math-utilities.md)
