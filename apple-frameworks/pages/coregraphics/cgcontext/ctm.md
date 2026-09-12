> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/ctm](https://developer.apple.com/documentation/coregraphics/cgcontext/ctm)

# ctm (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the current transformation matrix.

## Declaration

```swift
var ctm: CGAffineTransform { get }
```

## See Also

### Working with the Current Transformation Matrix

- [rotate(by:)](rotate%28by_%29.md): Rotates the user coordinate system in a context.
- [scaleBy(x:y:)](scaleby%28x_y_%29.md): Changes the scale of the user coordinate system in a context.
- [translateBy(x:y:)](translateby%28x_y_%29.md): Changes the origin of the user coordinate system in a context.
- [concatenate(\_:)](concatenate%28__%29.md): Transforms the user coordinate system in a context using a specified matrix.

# CGContextGetCTM (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the current transformation matrix.

## Declaration

```objectivec
extern CGAffineTransform CGContextGetCTM(CGContextRef c);
```

## Parameters

- `c`: A graphics context.

<a id="return-value"></a>

## Return Value

The transformation matrix for the current graphics state of the specified context.

## See Also

### Working with the Current Transformation Matrix

- [CGContextRotateCTM](rotate%28by_%29.md): Rotates the user coordinate system in a context.
- [CGContextScaleCTM](scaleby%28x_y_%29.md): Changes the scale of the user coordinate system in a context.
- [CGContextTranslateCTM](translateby%28x_y_%29.md): Changes the origin of the user coordinate system in a context.
- [CGContextConcatCTM](concatenate%28__%29.md): Transforms the user coordinate system in a context using a specified matrix.
