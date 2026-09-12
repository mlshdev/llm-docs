> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/affinetransform/invert()](https://developer.apple.com/documentation/foundation/affinetransform/invert())

# invert()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Inverts the transformation matrix, if possible.

## Declaration

```swift
mutating func invert()
```

<a id="Discussion"></a>

## Discussion

Matrices with a determinant less than the smallest valid representation of a double value and greater than zero are invalid for representing as an inverse. If this can potentially happen to the input transform, use the [inverted()](inverted%28%29.md) method instead. The [inverted()](inverted%28%29.md) method returns `nil` if the function can’t reliably invert the matrix.

You can calculate the determinant using the following formula:

```swift
D = (m11 * m22) - (m12 * m21)
```

## See Also

### Accumulating Tranformations

- [rotate(byDegrees:)](rotate%28bydegrees_%29.md): Mutates an affine transformation matrix to apply a rotation.
- [rotate(byRadians:)](rotate%28byradians_%29.md): Mutates an affine transformation matrix to apply a rotation.
- [scale(\_:)](scale%28__%29.md): Mutates an affine transformation matrix to apply scaling in both x and y dimensions.
- [scale(x:y:)](scale%28x_y_%29.md): Mutates an affine transformation matrix to apply scaling in each of the x and y dimensions.
- [translate(x:y:)](translate%28x_y_%29.md): Mutates an affine transformation matrix to perform the specified translation.
- [append(\_:)](append%28__%29.md): Mutates an affine transformation by appending another affine transform.
- [prepend(\_:)](prepend%28__%29.md): Mutates an affine transformation by prepending another affine transform.
- [inverted()](inverted%28%29.md): Returns an inverted version of the matrix, if possible, or nil if not.
