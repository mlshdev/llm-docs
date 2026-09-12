> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/eaglcontext](https://developer.apple.com/documentation/scenekit/scnview/eaglcontext)

# eaglContext (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The OpenGL ES context that the view uses to render its contents.

> OpenGL API deprecated, please use Metal instead. (Define SCN_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
var eaglContext: EAGLContext? { get set }
```

<a id="Discussion"></a>

## Discussion

If you use OpenGL ES for custom rendering (see the [SCNShadable](../scnshadable.md), [SCNNodeRendererDelegate](../scnnoderendererdelegate.md), and [SCNSceneRendererDelegate](../scnscenerendererdelegate.md) protocols), you can use this property to share OpenGL ES resources between the context used for rendering the scene and other OpenGL ES contexts your app uses. For details on sharing OpenGL ES resources, see [An EAGL Sharegroup Manages OpenGL ES Objects for the Context](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/WorkingwithOpenGLESContexts/WorkingwithOpenGLESContexts.html#//apple_ref/doc/uid/TP40008793-CH2-SW5). (SceneKit automatically shares its own OpenGL ES resources between multiple [SCNView](../scnview.md) instances in your app as needed.)

If you supply your own [EAGLContext](../../opengles/eaglcontext.md) object for a SceneKit view, specify the OpenGL ES 2.0 or 3.0 API when creating it. SceneKit supports OpenGL ES 3.0, but some features are disabled when rendering in an OpenGL ES 3.0 context. SceneKit does not support OpenGL ES 1.1.

# eaglContext (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 12.0) · iPadOS 8.0+ (deprecated in 12.0) · tvOS  (deprecated in 12.0)

The OpenGL ES context that the view uses to render its contents.

> OpenGL API deprecated, please use Metal instead. (Define SCN_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, retain, nullable) EAGLContext * eaglContext;
```

<a id="Discussion"></a>

## Discussion

If you use OpenGL ES for custom rendering (see the [SCNShadable](../scnshadable.md), [SCNNodeRendererDelegate](../scnnoderendererdelegate.md), and [SCNSceneRendererDelegate](../scnscenerendererdelegate.md) protocols), you can use this property to share OpenGL ES resources between the context used for rendering the scene and other OpenGL ES contexts your app uses. For details on sharing OpenGL ES resources, see [An EAGL Sharegroup Manages OpenGL ES Objects for the Context](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/WorkingwithOpenGLESContexts/WorkingwithOpenGLESContexts.html#//apple_ref/doc/uid/TP40008793-CH2-SW5). (SceneKit automatically shares its own OpenGL ES resources between multiple [SCNView](../scnview.md) instances in your app as needed.)

If you supply your own [EAGLContext](../../opengles/eaglcontext.md) object for a SceneKit view, specify the OpenGL ES 2.0 or 3.0 API when creating it. SceneKit supports OpenGL ES 3.0, but some features are disabled when rendering in an OpenGL ES 3.0 context. SceneKit does not support OpenGL ES 1.1.
