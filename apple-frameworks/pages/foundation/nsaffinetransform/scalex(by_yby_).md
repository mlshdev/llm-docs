> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/scalex(by:yby:)](https://developer.apple.com/documentation/foundation/nsaffinetransform/scalex(by:yby:))

# scaleX(by:yBy:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies scaling factors to each axis of the receiver’s transformation matrix.

## Declaration

```swift
func scaleX(by scaleX: Double, yBy scaleY: Double)
```

## Parameters

- `scaleX`: The scaling factor to apply to the x axis.
- `scaleY`: The scaling factor to apply to the y axis.

<a id="Discussion"></a>

## Discussion

After invoking this method, applying the receiver’s matrix modifies the unit length on the x axis by a factor of `scaleX` and the y axis by a factor of `scaleY`, in addition to performing all previous transformations. A value of 1.0 for either axis scales the content on that axis to the same size.

## See Also

### Accumulating Transformations

- [rotate(byDegrees:)](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotate(byRadians:)](rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scale(by:)](scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [translateX(by:yBy:)](translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [append(\_:)](append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prepend(\_:)](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert()](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.

# scaleXBy:yBy: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies scaling factors to each axis of the receiver’s transformation matrix.

## Declaration

```objectivec
- (void) scaleXBy:(CGFloat) scaleX yBy:(CGFloat) scaleY;
```

## Parameters

- `scaleX`: The scaling factor to apply to the x axis.
- `scaleY`: The scaling factor to apply to the y axis.

<a id="Discussion"></a>

## Discussion

After invoking this method, applying the receiver’s matrix modifies the unit length on the x axis by a factor of `scaleX` and the y axis by a factor of `scaleY`, in addition to performing all previous transformations. A value of 1.0 for either axis scales the content on that axis to the same size.

## See Also

### Accumulating Transformations

- [rotateByDegrees:](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotateByRadians:](rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scaleBy:](scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [translateXBy:yBy:](translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [appendTransform:](append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prependTransform:](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.
