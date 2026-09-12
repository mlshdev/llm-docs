> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/translateby(x:y:)](https://developer.apple.com/documentation/coregraphics/cgcontext/translateby(x:y:))

# translateBy(x:y:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Changes the origin of the user coordinate system in a context.

## Declaration

```swift
func translateBy(x tx: CGFloat, y ty: CGFloat)
```

## Parameters

- `tx`: The amount to displace the x-axis of the coordinate space, in units of the user space, of the specified context.
- `ty`: The amount to displace the y-axis of the coordinate space, in units of the user space, of the specified context.

## See Also

### Working with the Current Transformation Matrix

- [ctm](ctm.md): Returns the current transformation matrix.
- [rotate(by:)](rotate%28by_%29.md): Rotates the user coordinate system in a context.
- [scaleBy(x:y:)](scaleby%28x_y_%29.md): Changes the scale of the user coordinate system in a context.
- [concatenate(\_:)](concatenate%28__%29.md): Transforms the user coordinate system in a context using a specified matrix.

# CGContextTranslateCTM (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Changes the origin of the user coordinate system in a context.

## Declaration

```objectivec
extern void CGContextTranslateCTM(CGContextRef c, CGFloat tx, CGFloat ty);
```

## Parameters

- `c`: A graphics context.
- `tx`: The amount to displace the x-axis of the coordinate space, in units of the user space, of the specified context.
- `ty`: The amount to displace the y-axis of the coordinate space, in units of the user space, of the specified context.

## See Also

### Working with the Current Transformation Matrix

- [CGContextGetCTM](ctm.md): Returns the current transformation matrix.
- [CGContextRotateCTM](rotate%28by_%29.md): Rotates the user coordinate system in a context.
- [CGContextScaleCTM](scaleby%28x_y_%29.md): Changes the scale of the user coordinate system in a context.
- [CGContextConcatCTM](concatenate%28__%29.md): Transforms the user coordinate system in a context using a specified matrix.
