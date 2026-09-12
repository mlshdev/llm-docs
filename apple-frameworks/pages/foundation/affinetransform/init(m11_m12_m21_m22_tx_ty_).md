> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/affinetransform/init(m11:m12:m21:m22:tx:ty:)](https://developer.apple.com/documentation/foundation/affinetransform/init(m11:m12:m21:m22:tx:ty:))

# init(m11:m12:m21:m22:tX:tY:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates an affine transformation.

## Declaration

```swift
init(m11: CGFloat, m12: CGFloat, m21: CGFloat, m22: CGFloat, tX: CGFloat, tY: CGFloat)
```

<a id="Discussion"></a>

## Discussion

Create an affine tranform by directly specifying the key values of the transform matrix.

```swift
[ m11 m12  0 ]
[ m21 m22  0 ]
[  tX  tY  1 ]
```

## See Also

### Creating Transforms

- [init()](init%28%29.md): Creates an affine transformation matrix with identity values.
- [init(rotationByDegrees:)](init%28rotationbydegrees_%29.md): Creates an affine transformation matrix from a rotation angle.
- [init(rotationByRadians:)](init%28rotationbyradians_%29.md): Creates an affine transformation matrix from a rotation angle.
- [init(scale:)](init%28scale_%29.md): Creates an affine transformation matrix from scaling a single value.
- [init(scaleByX:byY:)](init%28scalebyx_byy_%29.md): Creates an affine transformation matrix from scaling values.
- [init(translationByX:byY:)](init%28translationbyx_byy_%29.md): Creates an affine transformation matrix from translation values.
