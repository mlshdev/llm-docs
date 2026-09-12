> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/fragmentshader](https://developer.apple.com/documentation/scenekit/scnprogram/fragmentshader)

# fragmentShader (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

GLSL source code for the program’s fragment shader.

## Declaration

```swift
var fragmentShader: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A program’s fragment shader (sometimes called a *pixel shader*) executes at least once for each pixel in rendered output. The fragment shader takes as input the values output by the vertex shader (after those values have been interpolated by the GPU), and uses them to compute a final color for each pixel.

SceneKit compiles and links your shader program only when it is needed for rendering. To be notified of program compilation errors, provide a [delegate](delegate.md) object for the program.

## See Also

### Working with OpenGL Shader Source Code

- [vertexShader](vertexshader.md): GLSL source code for the program’s vertex shader.
- [geometryShader](geometryshader.md): GLSL source code for the program’s optional geometry shader.
- [tessellationControlShader](tessellationcontrolshader.md): GLSL source code for the program’s optional tessellation control shader.
- [tessellationEvaluationShader](tessellationevaluationshader.md): GLSL source code for the program’s optional tessellation evaluation shader.

# fragmentShader (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

GLSL source code for the program’s fragment shader.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * fragmentShader;
```

<a id="Discussion"></a>

## Discussion

A program’s fragment shader (sometimes called a *pixel shader*) executes at least once for each pixel in rendered output. The fragment shader takes as input the values output by the vertex shader (after those values have been interpolated by the GPU), and uses them to compute a final color for each pixel.

SceneKit compiles and links your shader program only when it is needed for rendering. To be notified of program compilation errors, provide a [delegate](delegate.md) object for the program.

## See Also

### Working with OpenGL Shader Source Code

- [vertexShader](vertexshader.md): GLSL source code for the program’s vertex shader.
- [geometryShader](geometryshader.md): GLSL source code for the program’s optional geometry shader.
- [tessellationControlShader](tessellationcontrolshader.md): GLSL source code for the program’s optional tessellation control shader.
- [tessellationEvaluationShader](tessellationevaluationshader.md): GLSL source code for the program’s optional tessellation evaluation shader.
