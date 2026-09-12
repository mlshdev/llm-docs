> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/acceptstouchevents](https://developer.apple.com/documentation/appkit/nsview/acceptstouchevents)

# acceptsTouchEvents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 10.12.2)

A Boolean value indicating whether the view accepts touch events.

> Use [allowedTouchTypes](allowedtouchtypes.md) instead.

## Declaration

```swift
var acceptsTouchEvents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A view accepts touch events when the value of this property is [true](https://developer.apple.com/documentation/swift/true). By default, views do not accept touch events, so the default value of this property is [false](https://developer.apple.com/documentation/swift/false). You can override this property and return a different value if you want your view to handle touch events.

## See Also

### Properties

- [wantsExtendedDynamicRangeOpenGLSurface](wantsextendeddynamicrangeopenglsurface.md): Deprecated.
- [canDraw](candraw.md): Deprecated. A Boolean value indicating whether drawing commands will produce any results.
- [wantsBestResolutionOpenGLSurface](wantsbestresolutionopenglsurface.md): Deprecated. A Boolean value indicating whether the view wants an OpenGL backing surface with a resolution greater than 1 pixel per point.

# acceptsTouchEvents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 10.12.2)

A Boolean value indicating whether the view accepts touch events.

> Use [allowedTouchTypes](allowedtouchtypes.md) instead.

## Declaration

```objectivec
@property BOOL acceptsTouchEvents;
```

<a id="Discussion"></a>

## Discussion

A view accepts touch events when the value of this property is [true](https://developer.apple.com/documentation/swift/true). By default, views do not accept touch events, so the default value of this property is [false](https://developer.apple.com/documentation/swift/false). You can override this property and return a different value if you want your view to handle touch events.

## See Also

### Properties

- [wantsExtendedDynamicRangeOpenGLSurface](wantsextendeddynamicrangeopenglsurface.md): Deprecated.
- [canDraw](candraw.md): Deprecated. A Boolean value indicating whether drawing commands will produce any results.
- [wantsBestResolutionOpenGLSurface](wantsbestresolutionopenglsurface.md): Deprecated. A Boolean value indicating whether the view wants an OpenGL backing surface with a resolution greater than 1 pixel per point.
