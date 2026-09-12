> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/setgraphicsstate(_:)](https://developer.apple.com/documentation/appkit/nsgraphicscontext/setgraphicsstate(_:))

# setGraphicsState(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Makes the graphics context of the specified graphics state current, and resets graphics state.

> This method has no effect

## Declaration

```swift
class func setGraphicsState(_ gState: Int)
```

<a id="Discussion"></a>

## Discussion

The `graphicState` identifier must be created in the calling thread.

## See Also

### Managing the Graphics State

- [restoreGraphicsState()](restoregraphicsstate%28%29-swift.type.method.md): Pops a graphics context from the per-thread stack, makes it current, and sends the context a restore graphics state message.
- [restoreGraphicsState()](restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.
- [saveGraphicsState()](savegraphicsstate%28%29-swift.type.method.md): Saves the graphics state of the current graphics context.
- [saveGraphicsState()](savegraphicsstate%28%29-swift.method.md): Saves the current graphics state and creates a new graphics state on the top of the stack.

# setGraphicsState: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Makes the graphics context of the specified graphics state current, and resets graphics state.

> This method has no effect

## Declaration

```objectivec
+ (void) setGraphicsState:(NSInteger) gState;
```

<a id="Discussion"></a>

## Discussion

The `graphicState` identifier must be created in the calling thread.

## See Also

### Managing the Graphics State

- [restoreGraphicsState](restoregraphicsstate%28%29-swift.type.method.md): Pops a graphics context from the per-thread stack, makes it current, and sends the context a restore graphics state message.
- [restoreGraphicsState](restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.
- [saveGraphicsState](savegraphicsstate%28%29-swift.type.method.md): Saves the graphics state of the current graphics context.
- [saveGraphicsState](savegraphicsstate%28%29-swift.method.md): Saves the current graphics state and creates a new graphics state on the top of the stack.
