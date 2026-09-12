> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/candraw](https://developer.apple.com/documentation/appkit/nsview/candraw)

# canDraw (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

A Boolean value indicating whether drawing commands will produce any results.

> If a view needs display, -drawRect: or -updateLayer will be called automatically when the view is able to draw.  To check whether a view is in a window, call -window.  To check whether a view is hidden, call -isHiddenOrHasHiddenAncestor.

## Declaration

```swift
var canDraw: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when drawing produces expected results. A view object can draw onscreen if it is not hidden, it is attached to a view hierarchy in a window ([NSWindow](../nswindow.md)), and the window has a corresponding window device. A view object can also draw during printing if it is a descendant of the view being printed.

Check the value of this property before attempting to force drawing to a specific context. For example, if the value of this property is [false](https://developer.apple.com/documentation/swift/false), do not call [lockFocus()](lockfocus%28%29.md) or do issue any drawing commands from the view. You do not need to check whether drawing can occur when calling the [display()](display%28%29.md) method or any of its related methods. The display methods perform appropriate checks before asking the view to draw itself.

## See Also

### Related Documentation

- [isHidden](ishidden.md): A Boolean value indicating whether the view is hidden.

### Properties

- [wantsExtendedDynamicRangeOpenGLSurface](wantsextendeddynamicrangeopenglsurface.md): Deprecated.
- [acceptsTouchEvents](acceptstouchevents.md): Deprecated. A Boolean value indicating whether the view accepts touch events.
- [wantsBestResolutionOpenGLSurface](wantsbestresolutionopenglsurface.md): Deprecated. A Boolean value indicating whether the view wants an OpenGL backing surface with a resolution greater than 1 pixel per point.

# canDraw (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

A Boolean value indicating whether drawing commands will produce any results.

> If a view needs display, -drawRect: or -updateLayer will be called automatically when the view is able to draw.  To check whether a view is in a window, call -window.  To check whether a view is hidden, call -isHiddenOrHasHiddenAncestor.

## Declaration

```objectivec
@property (readonly) BOOL canDraw;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when drawing produces expected results. A view object can draw onscreen if it is not hidden, it is attached to a view hierarchy in a window ([NSWindow](../nswindow.md)), and the window has a corresponding window device. A view object can also draw during printing if it is a descendant of the view being printed.

Check the value of this property before attempting to force drawing to a specific context. For example, if the value of this property is [false](https://developer.apple.com/documentation/swift/false), do not call [lockFocus](lockfocus%28%29.md) or do issue any drawing commands from the view. You do not need to check whether drawing can occur when calling the [display](display%28%29.md) method or any of its related methods. The display methods perform appropriate checks before asking the view to draw itself.

## See Also

### Related Documentation

- [hidden](ishidden.md): A Boolean value indicating whether the view is hidden.

### Properties

- [wantsExtendedDynamicRangeOpenGLSurface](wantsextendeddynamicrangeopenglsurface.md): Deprecated.
- [acceptsTouchEvents](acceptstouchevents.md): Deprecated. A Boolean value indicating whether the view accepts touch events.
- [wantsBestResolutionOpenGLSurface](wantsbestresolutionopenglsurface.md): Deprecated. A Boolean value indicating whether the view wants an OpenGL backing surface with a resolution greater than 1 pixel per point.
