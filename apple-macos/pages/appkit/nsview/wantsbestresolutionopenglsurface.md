> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/wantsbestresolutionopenglsurface](https://developer.apple.com/documentation/appkit/nsview/wantsbestresolutionopenglsurface)

# wantsBestResolutionOpenGLSurface (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+ (deprecated in 10.14)

A Boolean value indicating whether the view wants an OpenGL backing surface with a resolution greater than 1 pixel per point.

> Use NSOpenGLView instead.

## Declaration

```swift
var wantsBestResolutionOpenGLSurface: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view wants a high resolution backing surface or [false](https://developer.apple.com/documentation/swift/false) if it does not.

<a id="Discussion"></a>

## Discussion

This property is relevant only for views bound to an [NSOpenGLContext](../nsopenglcontext.md) object (including, but not limited to, [NSOpenGLView](../nsopenglview.md) objects). Layer-backed views ignore the value in this property and configure their own backing surface at an appropriate resolution.

> **Important**

>  For applications linked on macOS 10.15 or later, the default value of this property is [true](https://developer.apple.com/documentation/swift/true). For applications linked on macOS 10.14 or earlier, the default value of this property is [false](https://developer.apple.com/documentation/swift/false) to keep binary compatibility.

When this property is [false](https://developer.apple.com/documentation/swift/false), the view uses a 1 pixel per point framebuffer regardless of the backing scale factor for the targeted display. When the backing scale factor is greater than `1.0`, the rendered surface contents are also magnified to the appropriate user size.

When this property is [true](https://developer.apple.com/documentation/swift/true), AppKit has permission to allocate a higher resolution frame buffer for the view. AppKit uses the backing scale factor and the targeted display to determine whether a higher resolution buffer is appropriate, and it may change the surface resolution when the display mode changes or the view moves to a different display. The view must be able to convert between view units and pixel units when needed. For example, passing the view’s bounds unmodified to the `glViewport` function yields incorrect results at backing scale factors other than `1.0`. You can use the [convertToBacking(\_:)](converttobacking%28__%29-2xx45.md), [convertToBacking(\_:)](converttobacking%28__%29-3zors.md), and [convertToBacking(\_:)](converttobacking%28__%29-4ra9y.md) methods to convert coordinate values to the resolution of the backing store.

To learn more about using OpenGL in your Mac app, see [OpenGL Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_intro/opengl_intro.html#//apple_ref/doc/uid/TP40001987).

## See Also

### Properties

- [wantsExtendedDynamicRangeOpenGLSurface](wantsextendeddynamicrangeopenglsurface.md): Deprecated.
- [acceptsTouchEvents](acceptstouchevents.md): Deprecated. A Boolean value indicating whether the view accepts touch events.
- [canDraw](candraw.md): Deprecated. A Boolean value indicating whether drawing commands will produce any results.

# wantsBestResolutionOpenGLSurface (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+ (deprecated in 10.14)

A Boolean value indicating whether the view wants an OpenGL backing surface with a resolution greater than 1 pixel per point.

> Use NSOpenGLView instead.

## Declaration

```objectivec
@property BOOL wantsBestResolutionOpenGLSurface;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view wants a high resolution backing surface or [false](https://developer.apple.com/documentation/swift/false) if it does not.

<a id="Discussion"></a>

## Discussion

This property is relevant only for views bound to an [NSOpenGLContext](../nsopenglcontext.md) object (including, but not limited to, [NSOpenGLView](../nsopenglview.md) objects). Layer-backed views ignore the value in this property and configure their own backing surface at an appropriate resolution.

> **Important**

>  For applications linked on macOS 10.15 or later, the default value of this property is [true](https://developer.apple.com/documentation/swift/true). For applications linked on macOS 10.14 or earlier, the default value of this property is [false](https://developer.apple.com/documentation/swift/false) to keep binary compatibility.

When this property is [false](https://developer.apple.com/documentation/swift/false), the view uses a 1 pixel per point framebuffer regardless of the backing scale factor for the targeted display. When the backing scale factor is greater than `1.0`, the rendered surface contents are also magnified to the appropriate user size.

When this property is [true](https://developer.apple.com/documentation/swift/true), AppKit has permission to allocate a higher resolution frame buffer for the view. AppKit uses the backing scale factor and the targeted display to determine whether a higher resolution buffer is appropriate, and it may change the surface resolution when the display mode changes or the view moves to a different display. The view must be able to convert between view units and pixel units when needed. For example, passing the view’s bounds unmodified to the `glViewport` function yields incorrect results at backing scale factors other than `1.0`. You can use the [convertPointToBacking:](converttobacking%28__%29-2xx45.md), [convertRectToBacking:](converttobacking%28__%29-3zors.md), and [convertSizeToBacking:](converttobacking%28__%29-4ra9y.md) methods to convert coordinate values to the resolution of the backing store.

To learn more about using OpenGL in your Mac app, see [OpenGL Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_intro/opengl_intro.html#//apple_ref/doc/uid/TP40001987).

## See Also

### Properties

- [wantsExtendedDynamicRangeOpenGLSurface](wantsextendeddynamicrangeopenglsurface.md): Deprecated.
- [acceptsTouchEvents](acceptstouchevents.md): Deprecated. A Boolean value indicating whether the view accepts touch events.
- [canDraw](candraw.md): Deprecated. A Boolean value indicating whether drawing commands will produce any results.
