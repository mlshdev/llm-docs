> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/savegraphicsstate()-swift.type.method](https://developer.apple.com/documentation/appkit/nsgraphicscontext/savegraphicsstate()-swift.type.method)

# saveGraphicsState() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Saves the graphics state of the current graphics context.

## Declaration

```swift
class func saveGraphicsState()
```

<a id="Discussion"></a>

## Discussion

This method sends the current graphics context a [saveGraphicsState()](savegraphicsstate%28%29-swift.method.md) message and pushes the context onto the per-thread stack.

## See Also

### Managing the Graphics State

- [restoreGraphicsState()](restoregraphicsstate%28%29-swift.type.method.md): Pops a graphics context from the per-thread stack, makes it current, and sends the context a restore graphics state message.
- [restoreGraphicsState()](restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.
- [saveGraphicsState()](savegraphicsstate%28%29-swift.method.md): Saves the current graphics state and creates a new graphics state on the top of the stack.
- [setGraphicsState(\_:)](setgraphicsstate%28__%29.md): Deprecated. Makes the graphics context of the specified graphics state current, and resets graphics state.

# saveGraphicsState (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Saves the graphics state of the current graphics context.

## Declaration

```objectivec
+ (void) saveGraphicsState;
```

<a id="Discussion"></a>

## Discussion

This method sends the current graphics context a [saveGraphicsState](savegraphicsstate%28%29-swift.method.md) message and pushes the context onto the per-thread stack.

## See Also

### Managing the Graphics State

- [restoreGraphicsState](restoregraphicsstate%28%29-swift.type.method.md): Pops a graphics context from the per-thread stack, makes it current, and sends the context a restore graphics state message.
- [restoreGraphicsState](restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.
- [saveGraphicsState](savegraphicsstate%28%29-swift.method.md): Saves the current graphics state and creates a new graphics state on the top of the stack.
- [setGraphicsState:](setgraphicsstate%28__%29.md): Deprecated. Makes the graphics context of the specified graphics state current, and resets graphics state.
