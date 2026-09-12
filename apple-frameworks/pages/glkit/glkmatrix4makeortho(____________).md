> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4makeortho(_:_:_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4makeortho(_:_:_:_:_:_:))

# GLKMatrix4MakeOrtho(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `4x4` orthographic projection matrix.

## Declaration

```swift
func GLKMatrix4MakeOrtho(_ left: Float, _ right: Float, _ bottom: Float, _ top: Float, _ nearZ: Float, _ farZ: Float) -> GLKMatrix4
```

## Parameters

- `left`: The left coordinate of the projection volume in eye coordinates.
- `right`: The right coordinate of the projection volume in eye coordinates.
- `bottom`: The bottom coordinate of the projection volume in eye coordinates.
- `top`: The top coordinate of the projection volume in eye coordinates.
- `nearZ`: The near coordinate of the projection volume in eye coordinates.
- `farZ`: The far coordinate of the projection volume in eye coordinates.

<a id="return-value"></a>

## Return Value

A new projection matrix.

<a id="Discussion"></a>

## Discussion

This function creates the same orthographic projection matrix previously provided in OpenGL ES 1.1 by the `glOrtho` function.

## See Also

### Creating Matrices

- [GLKMatrix4Make(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix4make%28________________________________%29.md): Returns a `4x4` matrix created from individual component values.
- [GLKMatrix4MakeAndTranspose(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix4makeandtranspose%28________________________________%29.md): Returns a `4x4` transposed matrix created from individual component values.
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
- [GLKMatrix4MakePerspective(\_:\_:\_:\_:)](glkmatrix4makeperspective%28________%29.md): Returns a `4x4` perspective projection matrix.

# GLKMatrix4MakeOrtho (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `4x4` orthographic projection matrix.

## Declaration

```objectivec
static GLKMatrix4 GLKMatrix4MakeOrtho(float left, float right, float bottom, float top, float nearZ, float farZ);
```

## Parameters

- `left`: The left coordinate of the projection volume in eye coordinates.
- `right`: The right coordinate of the projection volume in eye coordinates.
- `bottom`: The bottom coordinate of the projection volume in eye coordinates.
- `top`: The top coordinate of the projection volume in eye coordinates.
- `nearZ`: The near coordinate of the projection volume in eye coordinates.
- `farZ`: The far coordinate of the projection volume in eye coordinates.

<a id="return-value"></a>

## Return Value

A new projection matrix.

<a id="Discussion"></a>

## Discussion

This function creates the same orthographic projection matrix previously provided in OpenGL ES 1.1 by the `glOrtho` function.

## See Also

### Creating Matrices

- [GLKMatrix4Make](glkmatrix4make%28________________________________%29.md): Returns a `4x4` matrix created from individual component values.
- [GLKMatrix4MakeAndTranspose](glkmatrix4makeandtranspose%28________________________________%29.md): Returns a `4x4` transposed matrix created from individual component values.
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
- [GLKMatrix4MakePerspective](glkmatrix4makeperspective%28________%29.md): Returns a `4x4` perspective projection matrix.
