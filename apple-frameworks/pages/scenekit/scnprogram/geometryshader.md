> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/geometryshader](https://developer.apple.com/documentation/scenekit/scnprogram/geometryshader)

# geometryShader (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

GLSL source code for the program’s optional geometry shader.

## Declaration

```swift
var geometryShader: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A program’s geometry shader executes once for each geometric primitive (line or triangle) to be rendered. The geometry shader takes as input the vertex positions output by the vertex shader (or by the tessellation shader, if one is in use), and outputs new geometric primitives for rendering.

Geometry shaders require macOS and OpenGL Core Profile. To use OpenGL Core Profile in a SceneKit view, set the view’s [pixelFormat](../scnview/pixelformat.md) property. Geometry shading is optional—to render without a geometry shader, set this property’s value to `nil` (the default).

SceneKit compiles and links your shader program only when it is needed for rendering. To be notified of program compilation errors, provide a [delegate](delegate.md) object for the program.

## See Also

### Working with OpenGL Shader Source Code

- [vertexShader](vertexshader.md): GLSL source code for the program’s vertex shader.
- [fragmentShader](fragmentshader.md): GLSL source code for the program’s fragment shader.
- [tessellationControlShader](tessellationcontrolshader.md): GLSL source code for the program’s optional tessellation control shader.
- [tessellationEvaluationShader](tessellationevaluationshader.md): GLSL source code for the program’s optional tessellation evaluation shader.

# geometryShader (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

GLSL source code for the program’s optional geometry shader.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * geometryShader;
```

<a id="Discussion"></a>

## Discussion

A program’s geometry shader executes once for each geometric primitive (line or triangle) to be rendered. The geometry shader takes as input the vertex positions output by the vertex shader (or by the tessellation shader, if one is in use), and outputs new geometric primitives for rendering.

Geometry shaders require macOS and OpenGL Core Profile. To use OpenGL Core Profile in a SceneKit view, set the view’s [pixelFormat](../scnview/pixelformat.md) property. Geometry shading is optional—to render without a geometry shader, set this property’s value to `nil` (the default).

SceneKit compiles and links your shader program only when it is needed for rendering. To be notified of program compilation errors, provide a [delegate](delegate.md) object for the program.

## See Also

### Working with OpenGL Shader Source Code

- [vertexShader](vertexshader.md): GLSL source code for the program’s vertex shader.
- [fragmentShader](fragmentshader.md): GLSL source code for the program’s fragment shader.
- [tessellationControlShader](tessellationcontrolshader.md): GLSL source code for the program’s optional tessellation control shader.
- [tessellationEvaluationShader](tessellationevaluationshader.md): GLSL source code for the program’s optional tessellation evaluation shader.
