> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspopcontext()](https://developer.apple.com/documentation/uikit/uigraphicspopcontext())

# UIGraphicsPopContext() (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Removes the current graphics context from the top of the stack, restoring the previous context.

## Declaration

```swift
func UIGraphicsPopContext()
```

<a id="Discussion"></a>

## Discussion

Use this function to balance calls to the [UIGraphicsPushContext(\_:)](uigraphicspushcontext%28__%29.md) function.

This function may be called from any thread of your app.

## See Also

### Graphics context primitives

- [UIGraphicsGetCurrentContext()](uigraphicsgetcurrentcontext%28%29.md): Returns the current graphics context.
- [UIGraphicsPushContext(\_:)](uigraphicspushcontext%28__%29.md): Makes the specified graphics context the current context.
- [UIGraphicsBeginImageContextWithOptions(\_:\_:\_:)](uigraphicsbeginimagecontextwithoptions%28______%29.md): Deprecated. Creates a bitmap-based graphics context with the specified options.
- [UIRectClip(\_:)](uirectclip%28__%29.md): Modifies the current clipping path by intersecting it with the specified rectangle.

# UIGraphicsPopContext (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Removes the current graphics context from the top of the stack, restoring the previous context.

## Declaration

```objectivec
extern void UIGraphicsPopContext();
```

<a id="Discussion"></a>

## Discussion

Use this function to balance calls to the [UIGraphicsPushContext](uigraphicspushcontext%28__%29.md) function.

This function may be called from any thread of your app.

## See Also

### Graphics context primitives

- [UIGraphicsGetCurrentContext](uigraphicsgetcurrentcontext%28%29.md): Returns the current graphics context.
- [UIGraphicsPushContext](uigraphicspushcontext%28__%29.md): Makes the specified graphics context the current context.
- [UIGraphicsBeginImageContextWithOptions](uigraphicsbeginimagecontextwithoptions%28______%29.md): Deprecated. Creates a bitmap-based graphics context with the specified options.
- [UIRectClip](uirectclip%28__%29.md): Modifies the current clipping path by intersecting it with the specified rectangle.
