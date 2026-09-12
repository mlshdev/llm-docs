> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/translatex(by:yby:)](https://developer.apple.com/documentation/foundation/nsaffinetransform/translatex(by:yby:))

# translateX(by:yBy:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies the specified translation factors to the receiver’s transformation matrix.

## Declaration

```swift
func translateX(by deltaX: Double, yBy deltaY: Double)
```

## Parameters

- `deltaX`: The number of units to move along the x axis.
- `deltaY`: The number of units to move along the y axis.

<a id="Discussion"></a>

## Discussion

Subsequent transformations cause coordinates to be shifted by `deltaX` units along the x axis and by `deltaY` units along the y axis. Translation factors do not affect `NSSize` values, which specify a differential between points.

## See Also

### Accumulating Transformations

- [rotate(byDegrees:)](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotate(byRadians:)](rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scale(by:)](scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [scaleX(by:yBy:)](scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [append(\_:)](append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prepend(\_:)](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert()](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.

# translateXBy:yBy: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies the specified translation factors to the receiver’s transformation matrix.

## Declaration

```objectivec
- (void) translateXBy:(CGFloat) deltaX yBy:(CGFloat) deltaY;
```

## Parameters

- `deltaX`: The number of units to move along the x axis.
- `deltaY`: The number of units to move along the y axis.

<a id="Discussion"></a>

## Discussion

Subsequent transformations cause coordinates to be shifted by `deltaX` units along the x axis and by `deltaY` units along the y axis. Translation factors do not affect `NSSize` values, which specify a differential between points.

## See Also

### Accumulating Transformations

- [rotateByDegrees:](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotateByRadians:](rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scaleBy:](scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [scaleXBy:yBy:](scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [appendTransform:](append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prependTransform:](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.
