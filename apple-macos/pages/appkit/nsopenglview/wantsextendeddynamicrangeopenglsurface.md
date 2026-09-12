> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglview/wantsextendeddynamicrangeopenglsurface](https://developer.apple.com/documentation/appkit/nsopenglview/wantsextendeddynamicrangeopenglsurface)

# wantsExtendedDynamicRangeOpenGLSurface (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+ (deprecated in 10.14)

Enables extended dynamic range values on the screen.

> OpenGL API deprecated; please use Metal and MetalKit.  (Define GL_SILENCE_DEPRECATION to silence these warnings.)

## Declaration

```swift
var wantsExtendedDynamicRangeOpenGLSurface: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If any view on the screen has this enabled, the screen which the OpenGL surface is on may have its `maximumExtendedDynamicRangeColorComponentValue` value increased. When composited by the Window Server, color values rendered by this OpenGL surface will be clamped to the screen’s `maximumExtendedDynamicRangeColorComponentValue` value rather than `1.0`.

## See Also

### Related Documentation

- [maximumExtendedDynamicRangeColorComponentValue](../nsscreen/maximumextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for the screen.

# wantsExtendedDynamicRangeOpenGLSurface (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+ (deprecated in 10.14)

Enables extended dynamic range values on the screen.

> OpenGL API deprecated; please use Metal and MetalKit.  (Define GL_SILENCE_DEPRECATION to silence these warnings.)

## Declaration

```objectivec
@property BOOL wantsExtendedDynamicRangeOpenGLSurface;
```

<a id="Discussion"></a>

## Discussion

If any view on the screen has this enabled, the screen which the OpenGL surface is on may have its `maximumExtendedDynamicRangeColorComponentValue` value increased. When composited by the Window Server, color values rendered by this OpenGL surface will be clamped to the screen’s `maximumExtendedDynamicRangeColorComponentValue` value rather than `1.0`.

## See Also

### Related Documentation

- [maximumExtendedDynamicRangeColorComponentValue](../nsscreen/maximumextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for the screen.
