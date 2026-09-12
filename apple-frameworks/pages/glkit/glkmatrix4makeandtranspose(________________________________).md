> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4makeandtranspose(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4makeandtranspose(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# GLKMatrix4MakeAndTranspose(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `4x4` transposed matrix created from individual component values.

## Declaration

```swift
func GLKMatrix4MakeAndTranspose(_ m00: Float, _ m01: Float, _ m02: Float, _ m03: Float, _ m10: Float, _ m11: Float, _ m12: Float, _ m13: Float, _ m20: Float, _ m21: Float, _ m22: Float, _ m23: Float, _ m30: Float, _ m31: Float, _ m32: Float, _ m33: Float) -> GLKMatrix4
```

## Parameters

- `m00`: The value for position \[0,0\] in the returned matrix.
- `m01`: The value for position \[1,0\] in the returned matrix.
- `m02`: The value for position \[2,0\] in the returned matrix.
- `m03`: The value for position \[3,0\] in the returned matrix.
- `m10`: The value for position \[0,1\] in the returned matrix.
- `m11`: The value for position \[1,1\] in the returned matrix.
- `m12`: The value for position \[2,1\] in the returned matrix.
- `m13`: The value for position \[3,1\] in the returned matrix.
- `m20`: The value for position \[0,2\] in the returned matrix.
- `m21`: The value for position \[1,2\] in the returned matrix.
- `m22`: The value for position \[2,2\] in the returned matrix.
- `m23`: The value for position \[3,2\] in the returned matrix.
- `m30`: The value for position \[0,3\] in the returned matrix.
- `m31`: The value for position \[1,3\] in the returned matrix.
- `m32`: The value for position \[2,3\] in the returned matrix.
- `m33`: The value for position \[3,3\] in the returned matrix.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The values in `m03`, `m13`, and `m23` correspond to the translation values `tx`, `ty`, and `tz`, respectively.

## See Also

### Creating Matrices

- [GLKMatrix4Make(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix4make%28________________________________%29.md): Returns a `4x4` matrix created from individual component values.
- [GLKMatrix4MakeWithArray(\_:)](glkmatrix4makewitharray%28__%29.md): Returns a `4x4` matrix created from an array of component values.
- [GLKMatrix4MakeWithArrayAndTranspose(\_:)](glkmatrix4makewitharrayandtranspose%28__%29.md): Returns a `4x4` transposed matrix created from an array of component values.
- [GLKMatrix4MakeWithColumns(\_:\_:\_:\_:)](glkmatrix4makewithcolumns%28________%29.md): Returns a `4x4` matrix created from four column vectors.
- [GLKMatrix4MakeWithRows(\_:\_:\_:\_:)](glkmatrix4makewithrows%28________%29.md): Returns a `4x4` matrix created from four row vectors.
- [GLKMatrix4MakeRotation(\_:\_:\_:\_:)](glkmatrix4makerotation%28________%29.md): Returns a `4x4` matrix that performs a rotation around an arbitrary vector.
- [GLKMatrix4MakeXRotation(\_:)](glkmatrix4makexrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive x-axis.
- [GLKMatrix4MakeYRotation(\_:)](glkmatrix4makeyrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive y-axis.
- [GLKMatrix4MakeZRotation(\_:)](glkmatrix4makezrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive z-axis.
- [GLKMatrix4MakeWithQuaternion(\_:)](glkmatrix4makewithquaternion%28__%29.md): Returns a `4x4` matrix that performs a rotation based on a quaternion.
- [GLKMatrix4MakeScale(\_:\_:\_:)](glkmatrix4makescale%28______%29.md): Returns a `4x4` matrix that performs a scaling transformation.
- [GLKMatrix4MakeTranslation(\_:\_:\_:)](glkmatrix4maketranslation%28______%29.md): Returns a `4x4` matrix that performs a translation.
- [GLKMatrix4MakeLookAt(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix4makelookat%28__________________%29.md): Returns a `4x4` matrix that transforms world coordinates to eye coordinates.
- [GLKMatrix4MakeOrtho(\_:\_:\_:\_:\_:\_:)](glkmatrix4makeortho%28____________%29.md): Returns a `4x4` orthographic projection matrix.
- [GLKMatrix4MakePerspective(\_:\_:\_:\_:)](glkmatrix4makeperspective%28________%29.md): Returns a `4x4` perspective projection matrix.

# GLKMatrix4MakeAndTranspose (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `4x4` transposed matrix created from individual component values.

## Declaration

```objectivec
static GLKMatrix4 GLKMatrix4MakeAndTranspose(float m00, float m01, float m02, float m03, float m10, float m11, float m12, float m13, float m20, float m21, float m22, float m23, float m30, float m31, float m32, float m33);
```

## Parameters

- `m00`: The value for position \[0,0\] in the returned matrix.
- `m01`: The value for position \[1,0\] in the returned matrix.
- `m02`: The value for position \[2,0\] in the returned matrix.
- `m03`: The value for position \[3,0\] in the returned matrix.
- `m10`: The value for position \[0,1\] in the returned matrix.
- `m11`: The value for position \[1,1\] in the returned matrix.
- `m12`: The value for position \[2,1\] in the returned matrix.
- `m13`: The value for position \[3,1\] in the returned matrix.
- `m20`: The value for position \[0,2\] in the returned matrix.
- `m21`: The value for position \[1,2\] in the returned matrix.
- `m22`: The value for position \[2,2\] in the returned matrix.
- `m23`: The value for position \[3,2\] in the returned matrix.
- `m30`: The value for position \[0,3\] in the returned matrix.
- `m31`: The value for position \[1,3\] in the returned matrix.
- `m32`: The value for position \[2,3\] in the returned matrix.
- `m33`: The value for position \[3,3\] in the returned matrix.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The values in `m03`, `m13`, and `m23` correspond to the translation values `tx`, `ty`, and `tz`, respectively.

## See Also

### Creating Matrices

- [GLKMatrix4Make](glkmatrix4make%28________________________________%29.md): Returns a `4x4` matrix created from individual component values.
- [GLKMatrix4MakeWithArray](glkmatrix4makewitharray%28__%29.md): Returns a `4x4` matrix created from an array of component values.
- [GLKMatrix4MakeWithArrayAndTranspose](glkmatrix4makewitharrayandtranspose%28__%29.md): Returns a `4x4` transposed matrix created from an array of component values.
- [GLKMatrix4MakeWithColumns](glkmatrix4makewithcolumns%28________%29.md): Returns a `4x4` matrix created from four column vectors.
- [GLKMatrix4MakeWithRows](glkmatrix4makewithrows%28________%29.md): Returns a `4x4` matrix created from four row vectors.
- [GLKMatrix4MakeRotation](glkmatrix4makerotation%28________%29.md): Returns a `4x4` matrix that performs a rotation around an arbitrary vector.
- [GLKMatrix4MakeXRotation](glkmatrix4makexrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive x-axis.
- [GLKMatrix4MakeYRotation](glkmatrix4makeyrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive y-axis.
- [GLKMatrix4MakeZRotation](glkmatrix4makezrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive z-axis.
- [GLKMatrix4MakeWithQuaternion](glkmatrix4makewithquaternion%28__%29.md): Returns a `4x4` matrix that performs a rotation based on a quaternion.
- [GLKMatrix4MakeScale](glkmatrix4makescale%28______%29.md): Returns a `4x4` matrix that performs a scaling transformation.
- [GLKMatrix4MakeTranslation](glkmatrix4maketranslation%28______%29.md): Returns a `4x4` matrix that performs a translation.
- [GLKMatrix4MakeLookAt](glkmatrix4makelookat%28__________________%29.md): Returns a `4x4` matrix that transforms world coordinates to eye coordinates.
- [GLKMatrix4MakeOrtho](glkmatrix4makeortho%28____________%29.md): Returns a `4x4` orthographic projection matrix.
- [GLKMatrix4MakePerspective](glkmatrix4makeperspective%28________%29.md): Returns a `4x4` perspective projection matrix.
