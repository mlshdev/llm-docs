> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/rotate(byradians:)](https://developer.apple.com/documentation/foundation/nsaffinetransform/rotate(byradians:))

# rotate(byRadians:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.

## Declaration

```swift
func rotate(byRadians angle: Double)
```

## Parameters

- `angle`: The rotation angle, measured in radians.

<a id="Discussion"></a>

## Discussion

After invoking this method, applying the receiver’s matrix turns the axes counterclockwise about the current origin by `angle` radians, in addition to performing all previous transformations.

## See Also

### Accumulating Transformations

- [rotate(byDegrees:)](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [scale(by:)](scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [scaleX(by:yBy:)](scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [translateX(by:yBy:)](translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [append(\_:)](append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prepend(\_:)](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert()](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.

# rotateByRadians: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.

## Declaration

```objectivec
- (void) rotateByRadians:(CGFloat) angle;
```

## Parameters

- `angle`: The rotation angle, measured in radians.

<a id="Discussion"></a>

## Discussion

After invoking this method, applying the receiver’s matrix turns the axes counterclockwise about the current origin by `angle` radians, in addition to performing all previous transformations.

## See Also

### Accumulating Transformations

- [rotateByDegrees:](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [scaleBy:](scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [scaleXBy:yBy:](scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [translateXBy:yBy:](translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [appendTransform:](append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prependTransform:](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.
