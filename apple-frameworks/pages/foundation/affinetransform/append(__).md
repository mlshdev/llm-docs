> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/affinetransform/append(_:)](https://developer.apple.com/documentation/foundation/affinetransform/append(_:))

# append(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Mutates an affine transformation by appending another affine transform.

## Declaration

```swift
mutating func append(_ transform: AffineTransform)
```

## Parameters

- `transform`: The affine transform that follows this transform.

## See Also

### Accumulating Tranformations

- [rotate(byDegrees:)](rotate%28bydegrees_%29.md): Mutates an affine transformation matrix to apply a rotation.
- [rotate(byRadians:)](rotate%28byradians_%29.md): Mutates an affine transformation matrix to apply a rotation.
- [scale(\_:)](scale%28__%29.md): Mutates an affine transformation matrix to apply scaling in both x and y dimensions.
- [scale(x:y:)](scale%28x_y_%29.md): Mutates an affine transformation matrix to apply scaling in each of the x and y dimensions.
- [translate(x:y:)](translate%28x_y_%29.md): Mutates an affine transformation matrix to perform the specified translation.
- [prepend(\_:)](prepend%28__%29.md): Mutates an affine transformation by prepending another affine transform.
- [invert()](invert%28%29.md): Inverts the transformation matrix, if possible.
- [inverted()](inverted%28%29.md): Returns an inverted version of the matrix, if possible, or nil if not.
