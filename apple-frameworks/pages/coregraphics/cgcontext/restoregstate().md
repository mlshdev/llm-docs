> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/restoregstate()](https://developer.apple.com/documentation/coregraphics/cgcontext/restoregstate())

# restoreGState() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the current graphics state to the state most recently saved.

## Declaration

```swift
func restoreGState()
```

<a id="Discussion"></a>

## Discussion

Core Graphics removes the graphics state at the top of the stack so that the most recently saved state becomes the current graphics state.

## See Also

### Saving and Restoring Graphics State

- [saveGState()](savegstate%28%29.md): Pushes a copy of the current graphics state onto the graphics state stack for the context.

# CGContextRestoreGState (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the current graphics state to the state most recently saved.

## Declaration

```objectivec
extern void CGContextRestoreGState(CGContextRef c);
```

## Parameters

- `c`: The graphics context whose state you want to modify.

<a id="Discussion"></a>

## Discussion

Core Graphics removes the graphics state at the top of the stack so that the most recently saved state becomes the current graphics state.

## See Also

### Saving and Restoring Graphics State

- [CGContextSaveGState](savegstate%28%29.md): Pushes a copy of the current graphics state onto the graphics state stack for the context.
