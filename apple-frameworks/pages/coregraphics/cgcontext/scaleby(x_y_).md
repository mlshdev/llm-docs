> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/scaleby(x:y:)](https://developer.apple.com/documentation/coregraphics/cgcontext/scaleby(x:y:))

# scaleBy(x:y:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Changes the scale of the user coordinate system in a context.

## Declaration

```swift
func scaleBy(x sx: CGFloat, y sy: CGFloat)
```

## Parameters

- `sx`: The factor by which to scale the x-axis of the coordinate space of the specified context.
- `sy`: The factor by which to scale the y-axis of the coordinate space of the specified context.

## See Also

### Working with the Current Transformation Matrix

- [ctm](ctm.md): Returns the current transformation matrix.
- [rotate(by:)](rotate%28by_%29.md): Rotates the user coordinate system in a context.
- [translateBy(x:y:)](translateby%28x_y_%29.md): Changes the origin of the user coordinate system in a context.
- [concatenate(\_:)](concatenate%28__%29.md): Transforms the user coordinate system in a context using a specified matrix.

# CGContextScaleCTM (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Changes the scale of the user coordinate system in a context.

## Declaration

```objectivec
extern void CGContextScaleCTM(CGContextRef c, CGFloat sx, CGFloat sy);
```

## Parameters

- `c`: A graphics context.
- `sx`: The factor by which to scale the x-axis of the coordinate space of the specified context.
- `sy`: The factor by which to scale the y-axis of the coordinate space of the specified context.

## See Also

### Working with the Current Transformation Matrix

- [CGContextGetCTM](ctm.md): Returns the current transformation matrix.
- [CGContextRotateCTM](rotate%28by_%29.md): Rotates the user coordinate system in a context.
- [CGContextTranslateCTM](translateby%28x_y_%29.md): Changes the origin of the user coordinate system in a context.
- [CGContextConcatCTM](concatenate%28__%29.md): Transforms the user coordinate system in a context using a specified matrix.
