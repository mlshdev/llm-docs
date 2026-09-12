> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/setclip()](https://developer.apple.com/documentation/appkit/nsbezierpath/setclip())

# setClip() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the clipping path of the current graphics context with the area inside the path.

## Declaration

```swift
func setClip()
```

<a id="Discussion"></a>

## Discussion

You should avoid using this method as a way of adjusting the clipping path, as it may expand the clipping path beyond the bounds set by the enclosing view. If you do use this method, be sure to save the graphics state prior to modifying the clipping path and restore the graphics state when you are done.

This method uses the current winding rule to determine the clipping shape of the receiver. This method does not affect the receiver’s path.

## See Also

### Related Documentation

- [saveGraphicsState()](../nsgraphicscontext/savegraphicsstate%28%29-swift.method.md): Saves the current graphics state and creates a new graphics state on the top of the stack.
- [restoreGraphicsState()](../nsgraphicscontext/restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.

### Specifying a Clipping Path

- [addClip()](addclip%28%29.md): Intersects the area enclosed by the path with the clipping path of the current graphics context and makes the resulting shape the current clipping path.
- [clip(\_:)](clip%28__%29.md): Intersects the specified rectangle with the clipping path of the current graphics context and makes the resulting shape the current clipping path.

# setClip (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the clipping path of the current graphics context with the area inside the path.

## Declaration

```objectivec
- (void) setClip;
```

<a id="Discussion"></a>

## Discussion

You should avoid using this method as a way of adjusting the clipping path, as it may expand the clipping path beyond the bounds set by the enclosing view. If you do use this method, be sure to save the graphics state prior to modifying the clipping path and restore the graphics state when you are done.

This method uses the current winding rule to determine the clipping shape of the receiver. This method does not affect the receiver’s path.

## See Also

### Related Documentation

- [saveGraphicsState](../nsgraphicscontext/savegraphicsstate%28%29-swift.method.md): Saves the current graphics state and creates a new graphics state on the top of the stack.
- [restoreGraphicsState](../nsgraphicscontext/restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.

### Specifying a Clipping Path

- [addClip](addclip%28%29.md): Intersects the area enclosed by the path with the clipping path of the current graphics context and makes the resulting shape the current clipping path.
- [clipRect:](clip%28__%29.md): Intersects the specified rectangle with the clipping path of the current graphics context and makes the resulting shape the current clipping path.
