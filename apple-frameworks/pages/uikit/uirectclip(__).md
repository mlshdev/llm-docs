> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirectclip(_:)](https://developer.apple.com/documentation/uikit/uirectclip(_:))

# UIRectClip(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Modifies the current clipping path by intersecting it with the specified rectangle.

## Declaration

```swift
func UIRectClip(_ rect: CGRect)
```

## Parameters

- `rect`: The rectangle to intersect with the clipping region. If the width or height of the rectangle are less than 0, this function does not change the clipping path.

<a id="Discussion"></a>

## Discussion

Each call to this function permanently shrinks the clipping path of the current graphics context using the specified rectangle. You cannot use this function to expand the clipping region path. If the current graphics context is `nil`, this function does nothing.

If you need to return the clipping path to its original shape in your drawing code, you should save the current graphics context before calling this function. To save the current state of the graphics context, call the [saveGState()](../coregraphics/cgcontext/savegstate%28%29.md) function before making your modifications. When you are ready to restore the original clipping region, you can then use the [restoreGState()](../coregraphics/cgcontext/restoregstate%28%29.md) function to restore the previous graphics state.

This function may be called from any thread of your app.

## See Also

### Graphics context primitives

- [UIGraphicsGetCurrentContext()](uigraphicsgetcurrentcontext%28%29.md): Returns the current graphics context.
- [UIGraphicsPushContext(\_:)](uigraphicspushcontext%28__%29.md): Makes the specified graphics context the current context.
- [UIGraphicsPopContext()](uigraphicspopcontext%28%29.md): Removes the current graphics context from the top of the stack, restoring the previous context.
- [UIGraphicsBeginImageContextWithOptions(\_:\_:\_:)](uigraphicsbeginimagecontextwithoptions%28______%29.md): Deprecated. Creates a bitmap-based graphics context with the specified options.

# UIRectClip (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Modifies the current clipping path by intersecting it with the specified rectangle.

## Declaration

```objectivec
extern void UIRectClip(CGRect rect);
```

## Parameters

- `rect`: The rectangle to intersect with the clipping region. If the width or height of the rectangle are less than 0, this function does not change the clipping path.

<a id="Discussion"></a>

## Discussion

Each call to this function permanently shrinks the clipping path of the current graphics context using the specified rectangle. You cannot use this function to expand the clipping region path. If the current graphics context is `nil`, this function does nothing.

If you need to return the clipping path to its original shape in your drawing code, you should save the current graphics context before calling this function. To save the current state of the graphics context, call the [CGContextSaveGState](../coregraphics/cgcontext/savegstate%28%29.md) function before making your modifications. When you are ready to restore the original clipping region, you can then use the [CGContextRestoreGState](../coregraphics/cgcontext/restoregstate%28%29.md) function to restore the previous graphics state.

This function may be called from any thread of your app.

## See Also

### Graphics context primitives

- [UIGraphicsGetCurrentContext](uigraphicsgetcurrentcontext%28%29.md): Returns the current graphics context.
- [UIGraphicsPushContext](uigraphicspushcontext%28__%29.md): Makes the specified graphics context the current context.
- [UIGraphicsPopContext](uigraphicspopcontext%28%29.md): Removes the current graphics context from the top of the stack, restoring the previous context.
- [UIGraphicsBeginImageContextWithOptions](uigraphicsbeginimagecontextwithoptions%28______%29.md): Deprecated. Creates a bitmap-based graphics context with the specified options.
