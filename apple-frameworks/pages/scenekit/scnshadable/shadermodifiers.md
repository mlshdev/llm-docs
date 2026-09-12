> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadable/shadermodifiers](https://developer.apple.com/documentation/scenekit/scnshadable/shadermodifiers)

# shaderModifiers (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A dictionary of GLSL source code snippets for customizing the shader programs provided by SceneKit.

## Declaration

```swift
optional var shaderModifiers: [SCNShaderModifierEntryPoint : String]? { get set }
```

<a id="Discussion"></a>

## Discussion

The dictionary’s keys must be from the set of constants described in `Shader Modifier Entry Point Keys`. Each key represents a possible entry point in SceneKit’s shader programs, whose corresponding value is an [NSString](../../foundation/nsstring.md) object containing a shader source code snippet to be included in the shader program at that entry point.

See [Use Shader Modifiers to Extend SceneKit Shading](../scnshadable.md#Use-Shader-Modifiers-to-Extend-SceneKit-Shading) in the protocol overview for a complete discussion of shader modifiers.

# shaderModifiers (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A dictionary of GLSL source code snippets for customizing the shader programs provided by SceneKit.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,NSString *> * shaderModifiers;
```

<a id="Discussion"></a>

## Discussion

The dictionary’s keys must be from the set of constants described in `Shader Modifier Entry Point Keys`. Each key represents a possible entry point in SceneKit’s shader programs, whose corresponding value is an [NSString](../../foundation/nsstring.md) object containing a shader source code snippet to be included in the shader program at that entry point.

See [Use Shader Modifiers to Extend SceneKit Shading](../scnshadable.md#Use-Shader-Modifiers-to-Extend-SceneKit-Shading) in the protocol overview for a complete discussion of shader modifiers.
