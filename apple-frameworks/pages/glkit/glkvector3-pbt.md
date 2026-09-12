> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector3-pbt](https://developer.apple.com/documentation/glkit/glkvector3-pbt)

# GLKVector3 (Swift)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `GLKVector3` type defines a `3`-component floating-point vector as well as many mathematical operations commonly used to manipulate vectors. Graphics programming uses vectors extensively to represent positions, normals, colors and other data structures.

The functions that manipulate `GLKVector3` structures treat the inputs as immutable, instead returning a new vector that represent the results of the operation.

## Topics

### Creating Vectors

- [GLKVector3Make(\_:\_:\_:)](glkvector3make%28______%29.md): Returns a new three-component vector created from individual component values.
- [GLKVector3MakeWithArray(\_:)](glkvector3makewitharray%28__%29.md): Returns a new three-component vector created from an array of components.

### Retrieving Information About a Vector

- [GLKVector3Length(\_:)](glkvector3length%28__%29.md): Returns the length of a vector.
- [GLKVector3Distance(\_:\_:)](glkvector3distance%28____%29.md): Returns the distance between two points.

### Mathematical Operations Performed on Vectors

- [GLKVector3Negate(\_:)](glkvector3negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector3Normalize(\_:)](glkvector3normalize%28__%29.md): Returns a new vector created by normalizing the input vector to a length of `1.0`.
- [GLKVector3AddScalar(\_:\_:)](glkvector3addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector3SubtractScalar(\_:\_:)](glkvector3subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector3MultiplyScalar(\_:\_:)](glkvector3multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector3DivideScalar(\_:\_:)](glkvector3dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector3Add(\_:\_:)](glkvector3add%28____%29.md): Returns the sum of two vectors.
- [GLKVector3Subtract(\_:\_:)](glkvector3subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector3Multiply(\_:\_:)](glkvector3multiply%28____%29.md): Returns the product of two vectors.
- [GLKVector3Divide(\_:\_:)](glkvector3divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector3DotProduct(\_:\_:)](glkvector3dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector3CrossProduct(\_:\_:)](glkvector3crossproduct%28____%29.md): Returns the cross product of two vectors.
- [GLKVector3Lerp(\_:\_:\_:)](glkvector3lerp%28______%29.md): Returns a new vector created by linearly interpreting between two vectors.
- [GLKVector3Project(\_:\_:)](glkvector3project%28____%29.md): Returns a new vector created by projecting a vector onto another vector.
- [GLKVector3Maximum(\_:\_:)](glkvector3maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position in the source vectors.
- [GLKVector3Minimum(\_:\_:)](glkvector3minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position in the source vectors.

### Comparison Operations

- [GLKVector3AllEqualToScalar(\_:\_:)](glkvector3allequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.
- [GLKVector3AllEqualToVector3(\_:\_:)](glkvector3allequaltovector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.
- [GLKVector3AllGreaterThanOrEqualToScalar(\_:\_:)](glkvector3allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector3AllGreaterThanOrEqualToVector3(\_:\_:)](glkvector3allgreaterthanorequaltovector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector3AllGreaterThanScalar(\_:\_:)](glkvector3allgreaterthanscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.
- [GLKVector3AllGreaterThanVector3(\_:\_:)](glkvector3allgreaterthanvector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.

### Data Types

- [GLKVector3](glkvector3.md): A representation of a 3-component vector.

## See Also

### Math Utilties

- [GLKMatrixStack](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkmatrix3-pcl.md)
- [GLKMatrix4](glkmatrix4-pce.md)
- [GLKVector2](glkvector2-pbj.md)
- [GLKVector4](glkvector4-pbk.md)
- [GLKQuaternion](glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit-math-utilities.md)

# GLKVector3 (Objective-C)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `GLKVector3` type defines a `3`-component floating-point vector as well as many mathematical operations commonly used to manipulate vectors. Graphics programming uses vectors extensively to represent positions, normals, colors and other data structures.

The functions that manipulate `GLKVector3` structures treat the inputs as immutable, instead returning a new vector that represent the results of the operation.

## Topics

### Creating Vectors

- [GLKVector3Make](glkvector3make%28______%29.md): Returns a new three-component vector created from individual component values.
- [GLKVector3MakeWithArray](glkvector3makewitharray%28__%29.md): Returns a new three-component vector created from an array of components.

### Retrieving Information About a Vector

- [GLKVector3Length](glkvector3length%28__%29.md): Returns the length of a vector.
- [GLKVector3Distance](glkvector3distance%28____%29.md): Returns the distance between two points.

### Mathematical Operations Performed on Vectors

- [GLKVector3Negate](glkvector3negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector3Normalize](glkvector3normalize%28__%29.md): Returns a new vector created by normalizing the input vector to a length of `1.0`.
- [GLKVector3AddScalar](glkvector3addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector3SubtractScalar](glkvector3subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector3MultiplyScalar](glkvector3multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector3DivideScalar](glkvector3dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector3Add](glkvector3add%28____%29.md): Returns the sum of two vectors.
- [GLKVector3Subtract](glkvector3subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector3Multiply](glkvector3multiply%28____%29.md): Returns the product of two vectors.
- [GLKVector3Divide](glkvector3divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector3DotProduct](glkvector3dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector3CrossProduct](glkvector3crossproduct%28____%29.md): Returns the cross product of two vectors.
- [GLKVector3Lerp](glkvector3lerp%28______%29.md): Returns a new vector created by linearly interpreting between two vectors.
- [GLKVector3Project](glkvector3project%28____%29.md): Returns a new vector created by projecting a vector onto another vector.
- [GLKVector3Maximum](glkvector3maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position in the source vectors.
- [GLKVector3Minimum](glkvector3minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position in the source vectors.

### Comparison Operations

- [GLKVector3AllEqualToScalar](glkvector3allequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.
- [GLKVector3AllEqualToVector3](glkvector3allequaltovector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.
- [GLKVector3AllGreaterThanOrEqualToScalar](glkvector3allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector3AllGreaterThanOrEqualToVector3](glkvector3allgreaterthanorequaltovector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector3AllGreaterThanScalar](glkvector3allgreaterthanscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.
- [GLKVector3AllGreaterThanVector3](glkvector3allgreaterthanvector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.

### Data Types

- [GLKVector3](glkvector3.md): A representation of a 3-component vector.

## See Also

### Math Utilties

- [GLKMatrixStackRef](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkmatrix3-pcl.md)
- [GLKMatrix4](glkmatrix4-pce.md)
- [GLKVector2](glkvector2-pbj.md)
- [GLKVector4](glkvector4-pbk.md)
- [GLKQuaternion](glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit-math-utilities.md)
