> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4makelookat(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4makelookat(_:_:_:_:_:_:_:_:_:))

# GLKMatrix4MakeLookAt(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `4x4` matrix that transforms world coordinates to eye coordinates.

## Declaration

```swift
func GLKMatrix4MakeLookAt(_ eyeX: Float, _ eyeY: Float, _ eyeZ: Float, _ centerX: Float, _ centerY: Float, _ centerZ: Float, _ upX: Float, _ upY: Float, _ upZ: Float) -> GLKMatrix4
```

## Parameters

- `eyeX`: The `x` coordinate of the eye position.
- `eyeY`: The `y` coordinate of the eye position.
- `eyeZ`: The `z` coordinate of the point position.
- `centerX`: The `x` coordinate of the point being looked at.
- `centerY`: The `y` coordinate of the point being looked at.
- `centerZ`: The `z` coordinate of the point being looked at.
- `upX`: The `x` coordinate of the camera’s up vector.
- `upY`: The `y` coordinate of the camera’s up vector.
- `upZ`: The `z` coordinate of the camera’s up vector.

<a id="return-value"></a>

## Return Value

A newly initialized view matrix.

<a id="Discussion"></a>

## Discussion

This function creates a matrix in a way similar to the `gluLookAt` function previously provided in OpenGL ES 1.1.

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
- [GLKMatrix4MakeOrtho(\_:\_:\_:\_:\_:\_:)](glkmatrix4makeortho%28____________%29.md): Returns a `4x4` orthographic projection matrix.
- [GLKMatrix4MakePerspective(\_:\_:\_:\_:)](glkmatrix4makeperspective%28________%29.md): Returns a `4x4` perspective projection matrix.

# GLKMatrix4MakeLookAt (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `4x4` matrix that transforms world coordinates to eye coordinates.

## Declaration

```objectivec
static GLKMatrix4 GLKMatrix4MakeLookAt(float eyeX, float eyeY, float eyeZ, float centerX, float centerY, float centerZ, float upX, float upY, float upZ);
```

## Parameters

- `eyeX`: The `x` coordinate of the eye position.
- `eyeY`: The `y` coordinate of the eye position.
- `eyeZ`: The `z` coordinate of the point position.
- `centerX`: The `x` coordinate of the point being looked at.
- `centerY`: The `y` coordinate of the point being looked at.
- `centerZ`: The `z` coordinate of the point being looked at.
- `upX`: The `x` coordinate of the camera’s up vector.
- `upY`: The `y` coordinate of the camera’s up vector.
- `upZ`: The `z` coordinate of the camera’s up vector.

<a id="return-value"></a>

## Return Value

A newly initialized view matrix.

<a id="Discussion"></a>

## Discussion

This function creates a matrix in a way similar to the `gluLookAt` function previously provided in OpenGL ES 1.1.

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
- [GLKMatrix4MakeOrtho](glkmatrix4makeortho%28____________%29.md): Returns a `4x4` orthographic projection matrix.
- [GLKMatrix4MakePerspective](glkmatrix4makeperspective%28________%29.md): Returns a `4x4` perspective projection matrix.
