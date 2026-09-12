> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsgetcurrentcontext()](https://developer.apple.com/documentation/uikit/uigraphicsgetcurrentcontext())

# UIGraphicsGetCurrentContext() (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns the current graphics context.

## Declaration

```swift
func UIGraphicsGetCurrentContext() -> CGContext?
```

<a id="return-value"></a>

## Return Value

The current graphics context.

<a id="Discussion"></a>

## Discussion

The current graphics context is `nil` by default. Prior to calling its `drawRect:` method, view objects push a valid context onto the stack, making it current. If you are not using a `UIView` object to do your drawing, however, you must push a valid context onto the stack manually using the [UIGraphicsPushContext(\_:)](uigraphicspushcontext%28__%29.md) function.

This function may be called from any thread of your app.

## See Also

### Graphics context primitives

- [UIGraphicsPushContext(\_:)](uigraphicspushcontext%28__%29.md): Makes the specified graphics context the current context.
- [UIGraphicsPopContext()](uigraphicspopcontext%28%29.md): Removes the current graphics context from the top of the stack, restoring the previous context.
- [UIGraphicsBeginImageContextWithOptions(\_:\_:\_:)](uigraphicsbeginimagecontextwithoptions%28______%29.md): Deprecated. Creates a bitmap-based graphics context with the specified options.
- [UIRectClip(\_:)](uirectclip%28__%29.md): Modifies the current clipping path by intersecting it with the specified rectangle.

# UIGraphicsGetCurrentContext (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns the current graphics context.

## Declaration

```objectivec
extern CGContextRefUIGraphicsGetCurrentContext();
```

<a id="return-value"></a>

## Return Value

The current graphics context.

<a id="Discussion"></a>

## Discussion

The current graphics context is `nil` by default. Prior to calling its `drawRect:` method, view objects push a valid context onto the stack, making it current. If you are not using a `UIView` object to do your drawing, however, you must push a valid context onto the stack manually using the [UIGraphicsPushContext](uigraphicspushcontext%28__%29.md) function.

This function may be called from any thread of your app.

## See Also

### Graphics context primitives

- [UIGraphicsPushContext](uigraphicspushcontext%28__%29.md): Makes the specified graphics context the current context.
- [UIGraphicsPopContext](uigraphicspopcontext%28%29.md): Removes the current graphics context from the top of the stack, restoring the previous context.
- [UIGraphicsBeginImageContextWithOptions](uigraphicsbeginimagecontextwithoptions%28______%29.md): Deprecated. Creates a bitmap-based graphics context with the specified options.
- [UIRectClip](uirectclip%28__%29.md): Modifies the current clipping path by intersecting it with the specified rectangle.
