> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternion-pc6](https://developer.apple.com/documentation/glkit/glkquaternion-pc6)

# GLKQuaternion (Swift)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `GLKQuaternion` type defines a structure that represents a quaternion. A quaternion is defined by a scalar component `s` and an XYZ vector `v`. Quaternions are often used in graphics programming as a compact representation of a rotation of an object in three dimensions.

The functions that manipulate `GLKQuaternion` structures treat the inputs as immutable, instead returning a new quaternion that represent the results of the operation.

## Topics

### Creating Quaternions

- [GLKQuaternionMake(\_:\_:\_:\_:)](glkquaternionmake%28________%29.md): Returns a quaternion created from its separate components.
- [GLKQuaternionMakeWithArray(\_:)](glkquaternionmakewitharray%28__%29.md): Returns a quaternion created from an array of components.
- [GLKQuaternionMakeWithVector3(\_:\_:)](glkquaternionmakewithvector3%28____%29.md): Returns a quaternion created from a vector and a scalar.
- [GLKQuaternionMakeWithAngleAndAxis(\_:\_:\_:\_:)](glkquaternionmakewithangleandaxis%28________%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithAngleAndVector3Axis(\_:\_:)](glkquaternionmakewithangleandvector3axis%28____%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3(\_:)](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4(\_:)](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.

### Retrieving Information About a Quaternion

- [GLKQuaternionLength(\_:)](glkquaternionlength%28__%29.md): Returns the length of a quaternion.
- [GLKQuaternionAxis(\_:)](glkquaternionaxis%28__%29.md): Returns the axis of rotation of a quaternion.
- [GLKQuaternionAngle(\_:)](glkquaternionangle%28__%29.md): Returns the rotation angle of a quaternion.

### Performing Mathematical Operations on Quaternions

- [GLKQuaternionNormalize(\_:)](glkquaternionnormalize%28__%29.md): Returns a normalized version of a quaternion.
- [GLKQuaternionInvert(\_:)](glkquaternioninvert%28__%29.md): Returns an inverse of a quaternion.
- [GLKQuaternionConjugate(\_:)](glkquaternionconjugate%28__%29.md): Returns the conjugate of a quaternion.
- [GLKQuaternionAdd(\_:\_:)](glkquaternionadd%28____%29.md): Returns the sum of two quaternions.
- [GLKQuaternionSubtract(\_:\_:)](glkquaternionsubtract%28____%29.md): Returns the difference between two quaternions.
- [GLKQuaternionMultiply(\_:\_:)](glkquaternionmultiply%28____%29.md): Returns the product of two quaternions.
- [GLKQuaternionSlerp(\_:\_:\_:)](glkquaternionslerp%28______%29.md): Returns the spherical linear interpolation of two quaternions.

### Applying Quaternions to Vectors

- [GLKQuaternionRotateVector3(\_:\_:)](glkquaternionrotatevector3%28____%29.md): Returns a new vector that is calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector3Array(\_:\_:\_:)](glkquaternionrotatevector3array%28______%29.md): Applies a quaternion rotation to an array of vectors.
- [GLKQuaternionRotateVector4(\_:\_:)](glkquaternionrotatevector4%28____%29.md): Returns a new vector calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector4Array(\_:\_:\_:)](glkquaternionrotatevector4array%28______%29.md): Applies a quaternion rotation to an array of vectors.

### Data Types

- [GLKQuaternion](glkquaternion.md): A representation of a quaternion.

### Constants

- [GLKQuaternionIdentity](glkquaternionidentity.md): An identity quaternion.

## See Also

### Math Utilties

- [GLKMatrixStack](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkmatrix3-pcl.md)
- [GLKMatrix4](glkmatrix4-pce.md)
- [GLKVector2](glkvector2-pbj.md)
- [GLKVector3](glkvector3-pbt.md)
- [GLKVector4](glkvector4-pbk.md)
- [GLKit Math Utilities](glkit-math-utilities.md)

# GLKQuaternion (Objective-C)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `GLKQuaternion` type defines a structure that represents a quaternion. A quaternion is defined by a scalar component `s` and an XYZ vector `v`. Quaternions are often used in graphics programming as a compact representation of a rotation of an object in three dimensions.

The functions that manipulate `GLKQuaternion` structures treat the inputs as immutable, instead returning a new quaternion that represent the results of the operation.

## Topics

### Creating Quaternions

- [GLKQuaternionMake](glkquaternionmake%28________%29.md): Returns a quaternion created from its separate components.
- [GLKQuaternionMakeWithArray](glkquaternionmakewitharray%28__%29.md): Returns a quaternion created from an array of components.
- [GLKQuaternionMakeWithVector3](glkquaternionmakewithvector3%28____%29.md): Returns a quaternion created from a vector and a scalar.
- [GLKQuaternionMakeWithAngleAndAxis](glkquaternionmakewithangleandaxis%28________%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithAngleAndVector3Axis](glkquaternionmakewithangleandvector3axis%28____%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.

### Retrieving Information About a Quaternion

- [GLKQuaternionLength](glkquaternionlength%28__%29.md): Returns the length of a quaternion.
- [GLKQuaternionAxis](glkquaternionaxis%28__%29.md): Returns the axis of rotation of a quaternion.
- [GLKQuaternionAngle](glkquaternionangle%28__%29.md): Returns the rotation angle of a quaternion.

### Performing Mathematical Operations on Quaternions

- [GLKQuaternionNormalize](glkquaternionnormalize%28__%29.md): Returns a normalized version of a quaternion.
- [GLKQuaternionInvert](glkquaternioninvert%28__%29.md): Returns an inverse of a quaternion.
- [GLKQuaternionConjugate](glkquaternionconjugate%28__%29.md): Returns the conjugate of a quaternion.
- [GLKQuaternionAdd](glkquaternionadd%28____%29.md): Returns the sum of two quaternions.
- [GLKQuaternionSubtract](glkquaternionsubtract%28____%29.md): Returns the difference between two quaternions.
- [GLKQuaternionMultiply](glkquaternionmultiply%28____%29.md): Returns the product of two quaternions.
- [GLKQuaternionSlerp](glkquaternionslerp%28______%29.md): Returns the spherical linear interpolation of two quaternions.

### Applying Quaternions to Vectors

- [GLKQuaternionRotateVector3](glkquaternionrotatevector3%28____%29.md): Returns a new vector that is calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector3Array](glkquaternionrotatevector3array%28______%29.md): Applies a quaternion rotation to an array of vectors.
- [GLKQuaternionRotateVector4](glkquaternionrotatevector4%28____%29.md): Returns a new vector calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector4Array](glkquaternionrotatevector4array%28______%29.md): Applies a quaternion rotation to an array of vectors.

### Data Types

- [GLKQuaternion](glkquaternion.md): A representation of a quaternion.

### Constants

- [GLKQuaternionIdentity](glkquaternionidentity.md): An identity quaternion.

## See Also

### Math Utilties

- [GLKMatrixStackRef](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkmatrix3-pcl.md)
- [GLKMatrix4](glkmatrix4-pce.md)
- [GLKVector2](glkvector2-pbj.md)
- [GLKVector3](glkvector3-pbt.md)
- [GLKVector4](glkvector4-pbk.md)
- [GLKit Math Utilities](glkit-math-utilities.md)
