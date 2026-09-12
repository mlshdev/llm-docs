> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/affinetransform/init(scale:)](https://developer.apple.com/documentation/foundation/affinetransform/init(scale:))

# init(scale:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates an affine transformation matrix from scaling a single value.

## Declaration

```swift
init(scale factor: CGFloat)
```

## Parameters

- `factor`: The scale factor.

<a id="Discussion"></a>

## Discussion

The matrix takes the following form:

```swift
[ f  0  0 ]
[ 0  f  0 ]
[ 0  0  1 ]
```

## See Also

### Creating Transforms

- [init()](init%28%29.md): Creates an affine transformation matrix with identity values.
- [init(rotationByDegrees:)](init%28rotationbydegrees_%29.md): Creates an affine transformation matrix from a rotation angle.
- [init(rotationByRadians:)](init%28rotationbyradians_%29.md): Creates an affine transformation matrix from a rotation angle.
- [init(scaleByX:byY:)](init%28scalebyx_byy_%29.md): Creates an affine transformation matrix from scaling values.
- [init(translationByX:byY:)](init%28translationbyx_byy_%29.md): Creates an affine transformation matrix from translation values.
- [init(m11:m12:m21:m22:tX:tY:)](init%28m11_m12_m21_m22_tx_ty_%29.md): Creates an affine transformation.
