> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/affinetransform/inverted()](https://developer.apple.com/documentation/foundation/affinetransform/inverted())

# inverted()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns an inverted version of the matrix, if possible, or nil if not.

## Declaration

```swift
func inverted() -> AffineTransform?
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
- [invert()](invert%28%29.md): Inverts the transformation matrix, if possible.
