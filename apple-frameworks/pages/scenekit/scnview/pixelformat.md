> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/pixelformat](https://developer.apple.com/documentation/scenekit/scnview/pixelformat)

# pixelFormat (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The view’s OpenGL pixel format.

> OpenGL API deprecated, please use Metal instead. (Define SCN_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
var pixelFormat: NSOpenGLPixelFormat? { get set }
```

<a id="Discussion"></a>

## Discussion

A pixel format object configures OpenGL attributes for rendering. For example, if you use OpenGL for custom rendering (see the [SCNShadable](../scnshadable.md), [SCNNodeRendererDelegate](../scnnoderendererdelegate.md), and [SCNSceneRendererDelegate](../scnscenerendererdelegate.md) protocols), setting the pixel format to one that specifies the OpenGL 3.2 Core Profile allows you to use modern OpenGL APIs in your custom rendering code.

To change the pixel format, you can do either of the following:

- Set this property’s value before providing a scene for the view to render.
- In an [SCNView](../scnview.md) subclass, override this property’s getter method to return your preferred pixel format.

## See Also

### Working with a View’s OpenGL Context

- [openGLContext](openglcontext.md): Deprecated. The OpenGL context that the view uses to render its contents.

# pixelFormat (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 10.14)

The view’s OpenGL pixel format.

> OpenGL API deprecated, please use Metal instead. (Define SCN_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSOpenGLPixelFormat * pixelFormat;
```

<a id="Discussion"></a>

## Discussion

A pixel format object configures OpenGL attributes for rendering. For example, if you use OpenGL for custom rendering (see the [SCNShadable](../scnshadable.md), [SCNNodeRendererDelegate](../scnnoderendererdelegate.md), and [SCNSceneRendererDelegate](../scnscenerendererdelegate.md) protocols), setting the pixel format to one that specifies the OpenGL 3.2 Core Profile allows you to use modern OpenGL APIs in your custom rendering code.

To change the pixel format, you can do either of the following:

- Set this property’s value before providing a scene for the view to render.
- In an [SCNView](../scnview.md) subclass, override this property’s getter method to return your preferred pixel format.

## See Also

### Working with a View’s OpenGL Context

- [openGLContext](openglcontext.md): Deprecated. The OpenGL context that the view uses to render its contents.
