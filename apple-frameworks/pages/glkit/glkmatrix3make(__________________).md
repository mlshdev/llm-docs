> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix3make(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix3make(_:_:_:_:_:_:_:_:_:))

# GLKMatrix3Make(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `3x3` matrix created from individual component values.

## Declaration

```swift
func GLKMatrix3Make(_ m00: Float, _ m01: Float, _ m02: Float, _ m10: Float, _ m11: Float, _ m12: Float, _ m20: Float, _ m21: Float, _ m22: Float) -> GLKMatrix3
```

## Parameters

- `m00`: The value for position \[0,0\] in the returned matrix.
- `m01`: The value for position \[0,1\] in the returned matrix.
- `m02`: The value for position \[0,2\] in the returned matrix.
- `m10`: The value for position \[1,0\] in the returned matrix.
- `m11`: The value for position \[1,1\] in the returned matrix.
- `m12`: The value for position \[1,2\] in the returned matrix.
- `m20`: The value for position \[2,0\] in the returned matrix.
- `m21`: The value for position \[2,1\] in the returned matrix.
- `m22`: The value for position \[2,2\] in the returned matrix.

<a id="return-value"></a>

## Return Value

A new matrix.

## See Also

### Creating Matrices

- [GLKMatrix3MakeAndTranspose(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix3makeandtranspose%28__________________%29.md): Returns a `3x3` transposed matrix created from individual component values.
- [GLKMatrix3MakeWithArray(\_:)](glkmatrix3makewitharray%28__%29.md): Returns a `3x3` matrix created from an array of component values.
- [GLKMatrix3MakeWithArrayAndTranspose(\_:)](glkmatrix3makewitharrayandtranspose%28__%29.md): Returns a `3x3` transposed matrix created from an array of component values.
- [GLKMatrix3MakeWithColumns(\_:\_:\_:)](glkmatrix3makewithcolumns%28______%29.md): Returns a `3x3` matrix created from three column vectors.
- [GLKMatrix3MakeWithRows(\_:\_:\_:)](glkmatrix3makewithrows%28______%29.md): Returns a `3x3` matrix created from three row vectors.
- [GLKMatrix3MakeRotation(\_:\_:\_:\_:)](glkmatrix3makerotation%28________%29.md): Returns a `3x3` matrix that performs a rotation around an arbitrary vector.
- [GLKMatrix3MakeXRotation(\_:)](glkmatrix3makexrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive x-axis.
- [GLKMatrix3MakeYRotation(\_:)](glkmatrix3makeyrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive y-axis.
- [GLKMatrix3MakeZRotation(\_:)](glkmatrix3makezrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive z-axis.
- [GLKMatrix3MakeWithQuaternion(\_:)](glkmatrix3makewithquaternion%28__%29.md): Returns a `3x3` matrix that performs a rotation based on a quaternion.
- [GLKMatrix3MakeScale(\_:\_:\_:)](glkmatrix3makescale%28______%29.md): Returns a `3x3` matrix that performs a scaling transformation.

# GLKMatrix3Make (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `3x3` matrix created from individual component values.

## Declaration

```objectivec
static GLKMatrix3 GLKMatrix3Make(float m00, float m01, float m02, float m10, float m11, float m12, float m20, float m21, float m22);
```

## Parameters

- `m00`: The value for position \[0,0\] in the returned matrix.
- `m01`: The value for position \[0,1\] in the returned matrix.
- `m02`: The value for position \[0,2\] in the returned matrix.
- `m10`: The value for position \[1,0\] in the returned matrix.
- `m11`: The value for position \[1,1\] in the returned matrix.
- `m12`: The value for position \[1,2\] in the returned matrix.
- `m20`: The value for position \[2,0\] in the returned matrix.
- `m21`: The value for position \[2,1\] in the returned matrix.
- `m22`: The value for position \[2,2\] in the returned matrix.

<a id="return-value"></a>

## Return Value

A new matrix.

## See Also

### Creating Matrices

- [GLKMatrix3MakeAndTranspose](glkmatrix3makeandtranspose%28__________________%29.md): Returns a `3x3` transposed matrix created from individual component values.
- [GLKMatrix3MakeWithArray](glkmatrix3makewitharray%28__%29.md): Returns a `3x3` matrix created from an array of component values.
- [GLKMatrix3MakeWithArrayAndTranspose](glkmatrix3makewitharrayandtranspose%28__%29.md): Returns a `3x3` transposed matrix created from an array of component values.
- [GLKMatrix3MakeWithColumns](glkmatrix3makewithcolumns%28______%29.md): Returns a `3x3` matrix created from three column vectors.
- [GLKMatrix3MakeWithRows](glkmatrix3makewithrows%28______%29.md): Returns a `3x3` matrix created from three row vectors.
- [GLKMatrix3MakeRotation](glkmatrix3makerotation%28________%29.md): Returns a `3x3` matrix that performs a rotation around an arbitrary vector.
- [GLKMatrix3MakeXRotation](glkmatrix3makexrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive x-axis.
- [GLKMatrix3MakeYRotation](glkmatrix3makeyrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive y-axis.
- [GLKMatrix3MakeZRotation](glkmatrix3makezrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive z-axis.
- [GLKMatrix3MakeWithQuaternion](glkmatrix3makewithquaternion%28__%29.md): Returns a `3x3` matrix that performs a rotation based on a quaternion.
- [GLKMatrix3MakeScale](glkmatrix3makescale%28______%29.md): Returns a `3x3` matrix that performs a scaling transformation.
