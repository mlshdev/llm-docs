> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspushcontext(_:)](https://developer.apple.com/documentation/uikit/uigraphicspushcontext(_:))

# UIGraphicsPushContext(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Makes the specified graphics context the current context.

## Declaration

```swift
func UIGraphicsPushContext(_ context: CGContext)
```

## Parameters

- `context`: The graphics context to make the current context.

<a id="Discussion"></a>

## Discussion

You can use this function to save the previous graphics state and make the specified context the current context. You must balance calls to this function with matching calls to the [UIGraphicsPopContext()](uigraphicspopcontext%28%29.md) function.

This function may be called from any thread of your app.

## See Also

### Graphics context primitives

- [UIGraphicsGetCurrentContext()](uigraphicsgetcurrentcontext%28%29.md): Returns the current graphics context.
- [UIGraphicsPopContext()](uigraphicspopcontext%28%29.md): Removes the current graphics context from the top of the stack, restoring the previous context.
- [UIGraphicsBeginImageContextWithOptions(\_:\_:\_:)](uigraphicsbeginimagecontextwithoptions%28______%29.md): Deprecated. Creates a bitmap-based graphics context with the specified options.
- [UIRectClip(\_:)](uirectclip%28__%29.md): Modifies the current clipping path by intersecting it with the specified rectangle.

# UIGraphicsPushContext (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Makes the specified graphics context the current context.

## Declaration

```objectivec
extern void UIGraphicsPushContext(CGContextRef context);
```

## Parameters

- `context`: The graphics context to make the current context.

<a id="Discussion"></a>

## Discussion

You can use this function to save the previous graphics state and make the specified context the current context. You must balance calls to this function with matching calls to the [UIGraphicsPopContext](uigraphicspopcontext%28%29.md) function.

This function may be called from any thread of your app.

## See Also

### Graphics context primitives

- [UIGraphicsGetCurrentContext](uigraphicsgetcurrentcontext%28%29.md): Returns the current graphics context.
- [UIGraphicsPopContext](uigraphicspopcontext%28%29.md): Removes the current graphics context from the top of the stack, restoring the previous context.
- [UIGraphicsBeginImageContextWithOptions](uigraphicsbeginimagecontextwithoptions%28______%29.md): Deprecated. Creates a bitmap-based graphics context with the specified options.
- [UIRectClip](uirectclip%28__%29.md): Modifies the current clipping path by intersecting it with the specified rectangle.
