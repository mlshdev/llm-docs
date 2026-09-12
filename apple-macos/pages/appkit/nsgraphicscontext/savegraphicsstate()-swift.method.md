> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/savegraphicsstate()-swift.method](https://developer.apple.com/documentation/appkit/nsgraphicscontext/savegraphicsstate()-swift.method)

# saveGraphicsState() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Saves the current graphics state and creates a new graphics state on the top of the stack.

## Declaration

```swift
func saveGraphicsState()
```

<a id="Discussion"></a>

## Discussion

The new graphics state is a copy of the previous state that can be modified to handle new drawing operations.

Saving the graphics state saves such attributes as the current drawing style, transformation matrix, color, and font. To set drawing style attributes, use the methods of [NSBezierPath](../nsbezierpath.md). Other attributes are accessed through appropriate objects such as [NSAffineTransform](https://developer.apple.com/documentation/foundation/nsaffinetransform), [NSColor](../nscolor.md), and [NSFont](../nsfont.md).

## See Also

### Managing the Graphics State

- [restoreGraphicsState()](restoregraphicsstate%28%29-swift.type.method.md): Pops a graphics context from the per-thread stack, makes it current, and sends the context a restore graphics state message.
- [restoreGraphicsState()](restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.
- [saveGraphicsState()](savegraphicsstate%28%29-swift.type.method.md): Saves the graphics state of the current graphics context.
- [setGraphicsState(\_:)](setgraphicsstate%28__%29.md): Deprecated. Makes the graphics context of the specified graphics state current, and resets graphics state.

# saveGraphicsState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Saves the current graphics state and creates a new graphics state on the top of the stack.

## Declaration

```objectivec
- (void) saveGraphicsState;
```

<a id="Discussion"></a>

## Discussion

The new graphics state is a copy of the previous state that can be modified to handle new drawing operations.

Saving the graphics state saves such attributes as the current drawing style, transformation matrix, color, and font. To set drawing style attributes, use the methods of [NSBezierPath](../nsbezierpath.md). Other attributes are accessed through appropriate objects such as [NSAffineTransform](https://developer.apple.com/documentation/foundation/nsaffinetransform), [NSColor](../nscolor.md), and [NSFont](../nsfont.md).

## See Also

### Managing the Graphics State

- [restoreGraphicsState](restoregraphicsstate%28%29-swift.type.method.md): Pops a graphics context from the per-thread stack, makes it current, and sends the context a restore graphics state message.
- [restoreGraphicsState](restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.
- [saveGraphicsState](savegraphicsstate%28%29-swift.type.method.md): Saves the graphics state of the current graphics context.
- [setGraphicsState:](setgraphicsstate%28__%29.md): Deprecated. Makes the graphics context of the specified graphics state current, and resets graphics state.
