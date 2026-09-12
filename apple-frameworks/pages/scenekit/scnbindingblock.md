> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbindingblock](https://developer.apple.com/documentation/scenekit/scnbindingblock)

# SCNBindingBlock (Swift)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The signature for a block called for binding or unbinding a GLSL symbol in a custom program.

## Declaration

```swift
typealias SCNBindingBlock = (UInt32, UInt32, SCNNode?, SCNRenderer) -> Void
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **`programID`**: The OpenGL program identifier for the current [SCNProgram](scnprogram.md) instance, as used by OpenGL functions such as `glValidateProgram`.
- **`location`**: The OpenGL location index for the symbol to be bound or unbound, as used by OpenGL functions such as `glUniform`.
- **`renderedNode`**: The [SCNNode](scnnode.md) object being rendered.
- **`renderer`**: The [SCNRenderer](scnrenderer.md) object responsible for rendering.

Call [handleBinding(ofSymbol:handler:)](scnshadable/handlebinding%28ofsymbol_handler_%29.md) or [handleUnbinding(ofSymbol:handler:)](scnshadable/handleunbinding%28ofsymbol_handler_%29.md) to associate a handler block with a GLSL symbol for a SceneKit geometry or material.

## See Also

### Constants

- [SCNShaderModifierEntryPoint](scnshadermodifierentrypoint.md): Keys for the [shaderModifiers](scnshadable/shadermodifiers.md) dictionary, each corresponding to an entry point in SceneKit’s shader programs where you can attach a custom GPU shader code snippet.

# SCNBindingBlock (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The signature for a block called for binding or unbinding a GLSL symbol in a custom program.

## Declaration

```objectivec
typedef void (^)(unsigned int, unsigned int, SCNNode *, SCNRenderer *) SCNBindingBlock;
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **`programID`**: The OpenGL program identifier for the current [SCNProgram](scnprogram.md) instance, as used by OpenGL functions such as `glValidateProgram`.
- **`location`**: The OpenGL location index for the symbol to be bound or unbound, as used by OpenGL functions such as `glUniform`.
- **`renderedNode`**: The [SCNNode](scnnode.md) object being rendered.
- **`renderer`**: The [SCNRenderer](scnrenderer.md) object responsible for rendering.

Call [handleBindingOfSymbol:usingBlock:](scnshadable/handlebinding%28ofsymbol_handler_%29.md) or [handleUnbindingOfSymbol:usingBlock:](scnshadable/handleunbinding%28ofsymbol_handler_%29.md) to associate a handler block with a GLSL symbol for a SceneKit geometry or material.

## See Also

### Constants

- [SCNShaderModifierEntryPoint](scnshadermodifierentrypoint.md): Keys for the [shaderModifiers](scnshadable/shadermodifiers.md) dictionary, each corresponding to an entry point in SceneKit’s shader programs where you can attach a custom GPU shader code snippet.
