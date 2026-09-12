> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/vertexshader](https://developer.apple.com/documentation/scenekit/scnprogram/vertexshader)

# vertexShader (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

GLSL source code for the program’s vertex shader.

## Declaration

```swift
var vertexShader: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A program’s vertex shader executes once for each vertex in the geometry it renders. It takes as input the attributes of each vertex (such as position in model space, normal vectors, and texture coordinates). The vertex shader then outputs a clip-space position for the vertex, as well as values that the GPU interpolates across a surface and sends to the fragment shader.

SceneKit compiles and links your shader program only when it is needed for rendering. To be notified of program compilation errors, provide a [delegate](delegate.md) object for the program.

## See Also

### Working with OpenGL Shader Source Code

- [fragmentShader](fragmentshader.md): GLSL source code for the program’s fragment shader.
- [geometryShader](geometryshader.md): GLSL source code for the program’s optional geometry shader.
- [tessellationControlShader](tessellationcontrolshader.md): GLSL source code for the program’s optional tessellation control shader.
- [tessellationEvaluationShader](tessellationevaluationshader.md): GLSL source code for the program’s optional tessellation evaluation shader.

# vertexShader (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

GLSL source code for the program’s vertex shader.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * vertexShader;
```

<a id="Discussion"></a>

## Discussion

A program’s vertex shader executes once for each vertex in the geometry it renders. It takes as input the attributes of each vertex (such as position in model space, normal vectors, and texture coordinates). The vertex shader then outputs a clip-space position for the vertex, as well as values that the GPU interpolates across a surface and sends to the fragment shader.

SceneKit compiles and links your shader program only when it is needed for rendering. To be notified of program compilation errors, provide a [delegate](delegate.md) object for the program.

## See Also

### Working with OpenGL Shader Source Code

- [fragmentShader](fragmentshader.md): GLSL source code for the program’s fragment shader.
- [geometryShader](geometryshader.md): GLSL source code for the program’s optional geometry shader.
- [tessellationControlShader](tessellationcontrolshader.md): GLSL source code for the program’s optional tessellation control shader.
- [tessellationEvaluationShader](tessellationevaluationshader.md): GLSL source code for the program’s optional tessellation evaluation shader.
