> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/affinetransform/init(scalebyx:byy:)](https://developer.apple.com/documentation/foundation/affinetransform/init(scalebyx:byy:))

# init(scaleByX:byY:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates an affine transformation matrix from scaling values.

## Declaration

```swift
init(scaleByX x: CGFloat, byY y: CGFloat)
```

## Parameters

- `x`: The horizontal scale factor.
- `y`: The vertical scale factor.

<a id="Discussion"></a>

## Discussion

The matrix takes the following form:

```swift
[ x  0  0 ]
[ 0  y  0 ]
[ 0  0  1 ]
```

## See Also

### Creating Transforms

- [init()](init%28%29.md): Creates an affine transformation matrix with identity values.
- [init(rotationByDegrees:)](init%28rotationbydegrees_%29.md): Creates an affine transformation matrix from a rotation angle.
- [init(rotationByRadians:)](init%28rotationbyradians_%29.md): Creates an affine transformation matrix from a rotation angle.
- [init(scale:)](init%28scale_%29.md): Creates an affine transformation matrix from scaling a single value.
- [init(translationByX:byY:)](init%28translationbyx_byy_%29.md): Creates an affine transformation matrix from translation values.
- [init(m11:m12:m21:m22:tX:tY:)](init%28m11_m12_m21_m22_tx_ty_%29.md): Creates an affine transformation.
