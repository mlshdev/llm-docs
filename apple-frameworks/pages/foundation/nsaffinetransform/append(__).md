> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/append(_:)](https://developer.apple.com/documentation/foundation/nsaffinetransform/append(_:))

# append(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Appends the specified matrix to the receiver’s matrix.

## Declaration

```swift
func append(_ transform: NSAffineTransform)
```

```swift
func append(_ transform: AffineTransform)
```

## Parameters

- `transform`: The matrix to append to the receiver.

<a id="Discussion"></a>

## Discussion

This method multiplies the receiver’s matrix by the matrix in `aTransform` and replaces the receiver’s matrix with the results. This type of operation is the same as applying the transformations in the receiver followed by the transformations in `aTransform`.

## See Also

### Accumulating Transformations

- [rotate(byDegrees:)](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotate(byRadians:)](rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scale(by:)](scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [scaleX(by:yBy:)](scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [translateX(by:yBy:)](translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [prepend(\_:)](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert()](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.

# appendTransform: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Appends the specified matrix to the receiver’s matrix.

## Declaration

```objectivec
- (void) appendTransform:(NSAffineTransform *) transform;
```

## Parameters

- `transform`: The matrix to append to the receiver.

<a id="Discussion"></a>

## Discussion

This method multiplies the receiver’s matrix by the matrix in `aTransform` and replaces the receiver’s matrix with the results. This type of operation is the same as applying the transformations in the receiver followed by the transformations in `aTransform`.

## See Also

### Accumulating Transformations

- [rotateByDegrees:](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotateByRadians:](rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scaleBy:](scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [scaleXBy:yBy:](scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [translateXBy:yBy:](translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [prependTransform:](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.
