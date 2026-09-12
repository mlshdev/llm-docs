> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/rotate(by:)](https://developer.apple.com/documentation/coregraphics/cgcontext/rotate(by:))

# rotate(by:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Rotates the user coordinate system in a context.

## Declaration

```swift
func rotate(by angle: CGFloat)
```

## Parameters

- `angle`: The angle, in radians, by which to rotate the coordinate space of the specified context. Positive values rotate counterclockwise and negative values rotate clockwise.)

<a id="Discussion"></a>

## Discussion

The direction that the context is rotated may appear to be altered by the state of the current transformation matrix prior to executing this function. For example, on iOS, a [UIView](../../uikit/uiview.md) applies a transformation to the graphics context that inverts the Y-axis (by multiplying it by `-1`). Rotating the user coordinate system on coordinate system that was previously flipped results in a rotation in the opposite direction (that is, positive values appear to rotate the coordinate system in the clockwise direction).

## See Also

### Working with the Current Transformation Matrix

- [ctm](ctm.md): Returns the current transformation matrix.
- [scaleBy(x:y:)](scaleby%28x_y_%29.md): Changes the scale of the user coordinate system in a context.
- [translateBy(x:y:)](translateby%28x_y_%29.md): Changes the origin of the user coordinate system in a context.
- [concatenate(\_:)](concatenate%28__%29.md): Transforms the user coordinate system in a context using a specified matrix.

# CGContextRotateCTM (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Rotates the user coordinate system in a context.

## Declaration

```objectivec
extern void CGContextRotateCTM(CGContextRef c, CGFloat angle);
```

## Parameters

- `c`: A graphics context.
- `angle`: The angle, in radians, by which to rotate the coordinate space of the specified context. Positive values rotate counterclockwise and negative values rotate clockwise.)

<a id="Discussion"></a>

## Discussion

The direction that the context is rotated may appear to be altered by the state of the current transformation matrix prior to executing this function. For example, on iOS, a [UIView](../../uikit/uiview.md) applies a transformation to the graphics context that inverts the Y-axis (by multiplying it by `-1`). Rotating the user coordinate system on coordinate system that was previously flipped results in a rotation in the opposite direction (that is, positive values appear to rotate the coordinate system in the clockwise direction).

## See Also

### Working with the Current Transformation Matrix

- [CGContextGetCTM](ctm.md): Returns the current transformation matrix.
- [CGContextScaleCTM](scaleby%28x_y_%29.md): Changes the scale of the user coordinate system in a context.
- [CGContextTranslateCTM](translateby%28x_y_%29.md): Changes the origin of the user coordinate system in a context.
- [CGContextConcatCTM](concatenate%28__%29.md): Transforms the user coordinate system in a context using a specified matrix.
