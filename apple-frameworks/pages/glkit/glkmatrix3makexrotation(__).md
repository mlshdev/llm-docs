> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix3makexrotation(_:)](https://developer.apple.com/documentation/glkit/glkmatrix3makexrotation(_:))

# GLKMatrix3MakeXRotation(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `3x3` matrix that performs a rotation around the positive x-axis.

## Declaration

```swift
func GLKMatrix3MakeXRotation(_ radians: Float) -> GLKMatrix3
```

## Parameters

- `radians`: The angle of the rotation (a positive angle is counterclockwise).

<a id="return-value"></a>

## Return Value

A new rotation matrix.

## See Also

### Creating Matrices

- [GLKMatrix3Make(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix3make%28__________________%29.md): Returns a `3x3` matrix created from individual component values.
- [GLKMatrix3MakeAndTranspose(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix3makeandtranspose%28__________________%29.md): Returns a `3x3` transposed matrix created from individual component values.
- [GLKMatrix3MakeWithArray(\_:)](glkmatrix3makewitharray%28__%29.md): Returns a `3x3` matrix created from an array of component values.
- [GLKMatrix3MakeWithArrayAndTranspose(\_:)](glkmatrix3makewitharrayandtranspose%28__%29.md): Returns a `3x3` transposed matrix created from an array of component values.
- [GLKMatrix3MakeWithColumns(\_:\_:\_:)](glkmatrix3makewithcolumns%28______%29.md): Returns a `3x3` matrix created from three column vectors.
- [GLKMatrix3MakeWithRows(\_:\_:\_:)](glkmatrix3makewithrows%28______%29.md): Returns a `3x3` matrix created from three row vectors.
- [GLKMatrix3MakeRotation(\_:\_:\_:\_:)](glkmatrix3makerotation%28________%29.md): Returns a `3x3` matrix that performs a rotation around an arbitrary vector.
- [GLKMatrix3MakeYRotation(\_:)](glkmatrix3makeyrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive y-axis.
- [GLKMatrix3MakeZRotation(\_:)](glkmatrix3makezrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive z-axis.
- [GLKMatrix3MakeWithQuaternion(\_:)](glkmatrix3makewithquaternion%28__%29.md): Returns a `3x3` matrix that performs a rotation based on a quaternion.
- [GLKMatrix3MakeScale(\_:\_:\_:)](glkmatrix3makescale%28______%29.md): Returns a `3x3` matrix that performs a scaling transformation.

# GLKMatrix3MakeXRotation (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `3x3` matrix that performs a rotation around the positive x-axis.

## Declaration

```objectivec
static GLKMatrix3 GLKMatrix3MakeXRotation(float radians);
```

## Parameters

- `radians`: The angle of the rotation (a positive angle is counterclockwise).

<a id="return-value"></a>

## Return Value

A new rotation matrix.

## See Also

### Creating Matrices

- [GLKMatrix3Make](glkmatrix3make%28__________________%29.md): Returns a `3x3` matrix created from individual component values.
- [GLKMatrix3MakeAndTranspose](glkmatrix3makeandtranspose%28__________________%29.md): Returns a `3x3` transposed matrix created from individual component values.
- [GLKMatrix3MakeWithArray](glkmatrix3makewitharray%28__%29.md): Returns a `3x3` matrix created from an array of component values.
- [GLKMatrix3MakeWithArrayAndTranspose](glkmatrix3makewitharrayandtranspose%28__%29.md): Returns a `3x3` transposed matrix created from an array of component values.
- [GLKMatrix3MakeWithColumns](glkmatrix3makewithcolumns%28______%29.md): Returns a `3x3` matrix created from three column vectors.
- [GLKMatrix3MakeWithRows](glkmatrix3makewithrows%28______%29.md): Returns a `3x3` matrix created from three row vectors.
- [GLKMatrix3MakeRotation](glkmatrix3makerotation%28________%29.md): Returns a `3x3` matrix that performs a rotation around an arbitrary vector.
- [GLKMatrix3MakeYRotation](glkmatrix3makeyrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive y-axis.
- [GLKMatrix3MakeZRotation](glkmatrix3makezrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive z-axis.
- [GLKMatrix3MakeWithQuaternion](glkmatrix3makewithquaternion%28__%29.md): Returns a `3x3` matrix that performs a rotation based on a quaternion.
- [GLKMatrix3MakeScale](glkmatrix3makescale%28______%29.md): Returns a `3x3` matrix that performs a scaling transformation.
