> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/tessellationcontrolshader](https://developer.apple.com/documentation/scenekit/scnprogram/tessellationcontrolshader)

# tessellationControlShader (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

GLSL source code for the program’s optional tessellation control shader.

## Declaration

```swift
var tessellationControlShader: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A program’s tessellation control shader executes once for each vertex in the geometry it renders. The tessellation control shader takes as input the vertex positions output by the vertex shader, and outputs tessellation-level information to be used by the hardware tessellator for subdividing polygons and edges. The tessellator then provides input to your tessellation evaluation shader.

Tessellation shaders require macOS and OpenGL Core Profile. To use OpenGL Core Profile in a SceneKit view, set the view’s [pixelFormat](../scnview/pixelformat.md) property. Tessellation shading is optional—to render without a tessellation shader, set this property’s value to `nil` (the default). However, if you specify a tessellation control shader, a tessellation evaluation shader is also required.

SceneKit compiles and links your shader program only when it is needed for rendering. To be notified of program compilation errors, provide a [delegate](delegate.md) object for the program.

## See Also

### Working with OpenGL Shader Source Code

- [vertexShader](vertexshader.md): GLSL source code for the program’s vertex shader.
- [fragmentShader](fragmentshader.md): GLSL source code for the program’s fragment shader.
- [geometryShader](geometryshader.md): GLSL source code for the program’s optional geometry shader.
- [tessellationEvaluationShader](tessellationevaluationshader.md): GLSL source code for the program’s optional tessellation evaluation shader.

# tessellationControlShader (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

GLSL source code for the program’s optional tessellation control shader.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * tessellationControlShader;
```

<a id="Discussion"></a>

## Discussion

A program’s tessellation control shader executes once for each vertex in the geometry it renders. The tessellation control shader takes as input the vertex positions output by the vertex shader, and outputs tessellation-level information to be used by the hardware tessellator for subdividing polygons and edges. The tessellator then provides input to your tessellation evaluation shader.

Tessellation shaders require macOS and OpenGL Core Profile. To use OpenGL Core Profile in a SceneKit view, set the view’s [pixelFormat](../scnview/pixelformat.md) property. Tessellation shading is optional—to render without a tessellation shader, set this property’s value to `nil` (the default). However, if you specify a tessellation control shader, a tessellation evaluation shader is also required.

SceneKit compiles and links your shader program only when it is needed for rendering. To be notified of program compilation errors, provide a [delegate](delegate.md) object for the program.

## See Also

### Working with OpenGL Shader Source Code

- [vertexShader](vertexshader.md): GLSL source code for the program’s vertex shader.
- [fragmentShader](fragmentshader.md): GLSL source code for the program’s fragment shader.
- [geometryShader](geometryshader.md): GLSL source code for the program’s optional geometry shader.
- [tessellationEvaluationShader](tessellationevaluationshader.md): GLSL source code for the program’s optional tessellation evaluation shader.
