> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/concatenate(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/concatenate(_:))

# concatenate(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Transforms the user coordinate system in a context using a specified matrix.

## Declaration

```swift
func concatenate(_ transform: CGAffineTransform)
```

## Parameters

- `transform`: The transformation matrix to apply to the specified context’s current transformation matrix.

<a id="Discussion"></a>

## Discussion

When you call this function, it concatenates (that is, it combines) two matrices, by multiplying them together. The order in which matrices are concatenated is important, as the operations are not commutative. The resulting CTM in the context is:   `CTMnew = transform * CTMcontext.`

## See Also

### Working with the Current Transformation Matrix

- [ctm](ctm.md): Returns the current transformation matrix.
- [rotate(by:)](rotate%28by_%29.md): Rotates the user coordinate system in a context.
- [scaleBy(x:y:)](scaleby%28x_y_%29.md): Changes the scale of the user coordinate system in a context.
- [translateBy(x:y:)](translateby%28x_y_%29.md): Changes the origin of the user coordinate system in a context.

# CGContextConcatCTM (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Transforms the user coordinate system in a context using a specified matrix.

## Declaration

```objectivec
extern void CGContextConcatCTM(CGContextRef c, CGAffineTransform transform);
```

## Parameters

- `c`: A graphics context.
- `transform`: The transformation matrix to apply to the specified context’s current transformation matrix.

<a id="Discussion"></a>

## Discussion

When you call this function, it concatenates (that is, it combines) two matrices, by multiplying them together. The order in which matrices are concatenated is important, as the operations are not commutative. The resulting CTM in the context is:   `CTMnew = transform * CTMcontext.`

## See Also

### Working with the Current Transformation Matrix

- [CGContextGetCTM](ctm.md): Returns the current transformation matrix.
- [CGContextRotateCTM](rotate%28by_%29.md): Rotates the user coordinate system in a context.
- [CGContextScaleCTM](scaleby%28x_y_%29.md): Changes the scale of the user coordinate system in a context.
- [CGContextTranslateCTM](translateby%28x_y_%29.md): Changes the origin of the user coordinate system in a context.
