> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/scale(by:)](https://developer.apple.com/documentation/foundation/nsaffinetransform/scale(by:))

# scale(by:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.

## Declaration

```swift
func scale(by scale: Double)
```

## Parameters

- `scale`: The scaling factor to apply to both axes. Specifying a negative value has the effect of inverting the direction of the axes in addition to scaling them. A scaling factor of 1.0 scales the content to exactly the same size.

<a id="Discussion"></a>

## Discussion

After invoking this method, applying the receiver’s matrix modifies the unit lengths along the current x and y axes by a factor of `scale`, in addition to performing all previous transformations.

## See Also

### Accumulating Transformations

- [rotate(byDegrees:)](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotate(byRadians:)](rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scaleX(by:yBy:)](scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [translateX(by:yBy:)](translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [append(\_:)](append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prepend(\_:)](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert()](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.

# scaleBy: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.

## Declaration

```objectivec
- (void) scaleBy:(CGFloat) scale;
```

## Parameters

- `scale`: The scaling factor to apply to both axes. Specifying a negative value has the effect of inverting the direction of the axes in addition to scaling them. A scaling factor of 1.0 scales the content to exactly the same size.

<a id="Discussion"></a>

## Discussion

After invoking this method, applying the receiver’s matrix modifies the unit lengths along the current x and y axes by a factor of `scale`, in addition to performing all previous transformations.

## See Also

### Accumulating Transformations

- [rotateByDegrees:](rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotateByRadians:](rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scaleXBy:yBy:](scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [translateXBy:yBy:](translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [appendTransform:](append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prependTransform:](prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert](invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.
