> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/restoregraphicsstate()-swift.type.method](https://developer.apple.com/documentation/appkit/nsgraphicscontext/restoregraphicsstate()-swift.type.method)

# restoreGraphicsState() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Pops a graphics context from the per-thread stack, makes it current, and sends the context a restore graphics state message.

## Declaration

```swift
class func restoreGraphicsState()
```

## See Also

### Managing the Graphics State

- [restoreGraphicsState()](restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.
- [saveGraphicsState()](savegraphicsstate%28%29-swift.type.method.md): Saves the graphics state of the current graphics context.
- [saveGraphicsState()](savegraphicsstate%28%29-swift.method.md): Saves the current graphics state and creates a new graphics state on the top of the stack.
- [setGraphicsState(\_:)](setgraphicsstate%28__%29.md): Deprecated. Makes the graphics context of the specified graphics state current, and resets graphics state.

# restoreGraphicsState (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Pops a graphics context from the per-thread stack, makes it current, and sends the context a restore graphics state message.

## Declaration

```objectivec
+ (void) restoreGraphicsState;
```

## See Also

### Managing the Graphics State

- [restoreGraphicsState](restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.
- [saveGraphicsState](savegraphicsstate%28%29-swift.type.method.md): Saves the graphics state of the current graphics context.
- [saveGraphicsState](savegraphicsstate%28%29-swift.method.md): Saves the current graphics state and creates a new graphics state on the top of the stack.
- [setGraphicsState:](setgraphicsstate%28__%29.md): Deprecated. Makes the graphics context of the specified graphics state current, and resets graphics state.
