> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4makescale(_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4makescale(_:_:_:))

# GLKMatrix4MakeScale(\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `4x4` matrix that performs a scaling transformation.

## Declaration

```swift
func GLKMatrix4MakeScale(_ sx: Float, _ sy: Float, _ sz: Float) -> GLKMatrix4
```

## Parameters

- `sx`: The amount to scale the `x` component.
- `sy`: The amount to scale the `y` component.
- `sz`: The amount to scale the `z` component.

<a id="return-value"></a>

## Return Value

A new scaling matrix.

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
- [GLKMatrix4MakeTranslation(\_:\_:\_:)](glkmatrix4maketranslation%28______%29.md): Returns a `4x4` matrix that performs a translation.
- [GLKMatrix4MakeLookAt(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix4makelookat%28__________________%29.md): Returns a `4x4` matrix that transforms world coordinates to eye coordinates.
- [GLKMatrix4MakeOrtho(\_:\_:\_:\_:\_:\_:)](glkmatrix4makeortho%28____________%29.md): Returns a `4x4` orthographic projection matrix.
- [GLKMatrix4MakePerspective(\_:\_:\_:\_:)](glkmatrix4makeperspective%28________%29.md): Returns a `4x4` perspective projection matrix.

# GLKMatrix4MakeScale (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a `4x4` matrix that performs a scaling transformation.

## Declaration

```objectivec
static GLKMatrix4 GLKMatrix4MakeScale(float sx, float sy, float sz);
```

## Parameters

- `sx`: The amount to scale the `x` component.
- `sy`: The amount to scale the `y` component.
- `sz`: The amount to scale the `z` component.

<a id="return-value"></a>

## Return Value

A new scaling matrix.

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
- [GLKMatrix4MakeTranslation](glkmatrix4maketranslation%28______%29.md): Returns a `4x4` matrix that performs a translation.
- [GLKMatrix4MakeLookAt](glkmatrix4makelookat%28__________________%29.md): Returns a `4x4` matrix that transforms world coordinates to eye coordinates.
- [GLKMatrix4MakeOrtho](glkmatrix4makeortho%28____________%29.md): Returns a `4x4` orthographic projection matrix.
- [GLKMatrix4MakePerspective](glkmatrix4makeperspective%28________%29.md): Returns a `4x4` perspective projection matrix.
