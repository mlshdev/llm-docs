> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/invert()](https://developer.apple.com/documentation/foundation/nsaffinetransform/invert())

# invert() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Replaces the receiver’s matrix with its inverse matrix.

## Declaration

```swift
func invert()
```

<a id="Discussion"></a>

## Discussion

Inverse matrices are useful for undoing the effects of a matrix. If a previous point (x,y) was transformed to (x’,y’), inverting the matrix and applying it to point (x’,y’) yields the point (x,y).

You can also use inverse matrices in conjunction with the [concat()](concat%28%29.md) method to remove the effects of concatenating the matrix to the current transformation matrix of the current graphic context.

## See Also

### Accumulating Transformations

- [rotate(byDegrees:)](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotate(byRadians:)](rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scale(by:)](scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [scaleX(by:yBy:)](scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [translateX(by:yBy:)](translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [append(\_:)](append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prepend(\_:)](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.

# invert (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Replaces the receiver’s matrix with its inverse matrix.

## Declaration

```objectivec
- (void) invert;
```

<a id="Discussion"></a>

## Discussion

Inverse matrices are useful for undoing the effects of a matrix. If a previous point (x,y) was transformed to (x’,y’), inverting the matrix and applying it to point (x’,y’) yields the point (x,y).

You can also use inverse matrices in conjunction with the [concat](concat%28%29.md) method to remove the effects of concatenating the matrix to the current transformation matrix of the current graphic context.

## See Also

### Accumulating Transformations

- [rotateByDegrees:](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotateByRadians:](rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scaleBy:](scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [scaleXBy:yBy:](scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [translateXBy:yBy:](translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [appendTransform:](append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prependTransform:](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
